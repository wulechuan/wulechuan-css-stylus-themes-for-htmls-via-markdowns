const globby = require('globby')
const path = require('path')
const fs = require('fs')

const {
    cssDistFolderRelativePath,
    jsDistFolderRelativePath,
} = require('./global-config')

const getBaseNameOf = path.basename
const { join: joinPathPOSIX} = path.posix
const { sync: syncGetFiles } = globby
const { readFileSync } = fs





const thisModuleRootFolderPath = path.dirname(require.resolve('./package.json'))

const distCSSToJavascriptPairing = require('./source/module/dist-css-to-js-pairing')


const cssFileGlobs = joinPathPOSIX(thisModuleRootFolderPath, cssDistFolderRelativePath, '**/*.css').replace(/\\/g, '/')
const  jsFileGlobs = joinPathPOSIX(thisModuleRootFolderPath,  jsDistFolderRelativePath, '**/*.js' ).replace(/\\/g, '/')

const cssFilePaths = syncGetFiles(cssFileGlobs)
const  jsFilePaths = syncGetFiles( jsFileGlobs)

const cssFileEntries = cssFilePaths.map(processOneDistFile)
const  jsFileEntries =  jsFilePaths.map(processOneDistFile)

cssFileEntries.forEach(pairingJavascriptFileNamesToOneCSSFile)

const allFileEntriesKeyingByFileNames = cssFileEntries.concat(jsFileEntries).reduce((dict, entry) => {
    dict[entry.fileName] = entry
    return dict
}, {})


if (false) { // eslint-disable-line no-constant-condition
    console.log('-'.repeat(60))
    // console.log(thisModuleRootFolderPath)
    console.log(cssFileEntries)
    // console.log( jsFileEntries)
    console.log('-'.repeat(60))
}



/**
 * @typedef {Object} Entry
 * @property {string} fileName
 * @property {string} fileRelativePath - Useless at present.
 * @property {string} fileAbsolutePath
 * @property {string} fileContent - File content will be cached here.
 * @property {string[]?} pairingJavascriptFileNames - File content will be cached here.
 */



/**
 * @namespace defaultExports
 * @property {Entry[]} cssFileEntries
 * @property {Entry[]} jsFileEntries
 * @property {object} allFileEntriesKeyingByFileNames
 */
module.exports = {
    cssFileEntries,
    jsFileEntries,

    /**
     * @enum {Entry}
     */
    allFileEntriesKeyingByFileNames,

    syncGetContentStringOfOneFileEntry,
    syncGetContentStringOfDefaultCSS,
    syncGetContentStringOfDefaultTOCJavascript,
}



/**
 * To prepare an entry object for a file,
 * so that, the content of the said file
 * can be easily fetched via this entry object.
 * Note that this object also caches the
 * content of the file once read.
 * @param {string} fileAbsolutePath - The absolute path of a file to process.
 * @returns {Entry}
 */
function processOneDistFile(fileAbsolutePath) {
    return {
        fileName: getBaseNameOf(fileAbsolutePath),
        fileRelativePath: path.relative(thisModuleRootFolderPath, fileAbsolutePath),
        fileAbsolutePath,
        fileContent: '',
    }
}



/**
 * Adding @property {string[]} pairingJavascriptFileNames to input entry object.
 * @param {Entry} cssFileEntry - The file entry to process.
 */
function pairingJavascriptFileNamesToOneCSSFile(cssFileEntry) {
    const { fileName } = cssFileEntry

    if (!fileName.match(/\.css$/) || cssFileEntry.pairingJavascriptFileNames) {
        return
    }

    const pairingJavascriptFileNames = distCSSToJavascriptPairing.reduce((jsFiles, pair) => {
        if (pair.anyOfTheseDistCSS.some(cssFileNameRegExp => {
            return cssFileNameRegExp.test(fileName)
        })) {
            jsFiles = [
                ...jsFiles,
                ...pair.shouldPairAllTheseDistJavascripts,
            ]
        }

        return jsFiles
    }, [])

    if (pairingJavascriptFileNames.length < 1) {
        return
    }

    cssFileEntry.pairingJavascriptFileNames = pairingJavascriptFileNames
}


/**
 * To read a file.
 * @param {string} fileAbsolutePath - The absolute path of a file.
 * @returns {string}
 */
function syncReadFileAsString(fileAbsolutePath) {
    return readFileSync(fileAbsolutePath).toString()
}



/**
 * Get content string via a file path or an entry object.
 * @memberOf defaultExports
 * @param {Entry|string} input - The input identity of file to get content from.
 * @returns {string}
 */
function syncGetContentStringOfOneFileEntry(input, shouldIgnoreCachedContent) {
    let entry
    let fileName

    if (input) {
        if (typeof input === 'object') {
            entry = input
            fileName = entry.fileName
        } else if (typeof input === 'string') {
            fileName = input
            entry = allFileEntriesKeyingByFileNames[fileName]
        }
    }



    if (!entry || !fileName) {
        throw new TypeError('@wulechuan/css-stylus-markdown-themes:\n    Invalid file entry or path to reading distribution file content from.\n    fileName = "'+fileName+'"')
    }

    if (!entry.fileContent || shouldIgnoreCachedContent) {
        entry.fileContent = syncReadFileAsString(entry.fileAbsolutePath)
    }

    return entry.fileContent
}



/**
 * Get content string of the default css file (minified version).
 * @memberOf defaultExports
 * @returns {string}
 */
function syncGetContentStringOfDefaultCSS(shouldIgnoreCachedContent) {
    return syncGetContentStringOfOneFileEntry(
        'wulechuan-styles-for-html-via-markdown.default--no-toc.min.css',
        shouldIgnoreCachedContent
    )
}



/**
 * Get content string of the default TOC javascript file (minified version).
 * @memberOf defaultExports
 * @returns {string}
 */
function syncGetContentStringOfDefaultTOCJavascript(shouldIgnoreCachedContent) {
    return syncGetContentStringOfOneFileEntry(
        'table-of-contents-behaviours.min.js',
        shouldIgnoreCachedContent
    )
}
