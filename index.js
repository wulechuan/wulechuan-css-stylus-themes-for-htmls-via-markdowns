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

cssFileEntries.forEach(pairingJavascriptFilesToOneCSSFile)

const lookupDictionaryByFileNames = cssFileEntries.concat(jsFileEntries).reduce((dict, entry) => {
    dict[entry.fileName] = entry
    return dict
}, {})


// console.log('--------------')
// console.log(thisModuleRootFolderPath)
// console.log(cssFileEntries)
// console.log( jsFileEntries)
// console.log('--------------')



/**
 * @typedef {Object} Entry
 * @property {string} fileName
 * @property {string} fileRelativePath - Useless at present.
 * @property {string} fileAbsolutePath
 * @property {string} fileContent - File content will be cached here.
 */



/**
 * @namespace defaultExports
 * @property {Entry[]} cssFileEntries
 * @property {Entry[]} jsFileEntries
 * @property {object} lookupDictionaryByFileNames
 */
module.exports = {
    cssFileEntries,
    jsFileEntries,

    /**
     * @enum {Entry}
     */
    lookupDictionaryByFileNames,

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
 * Adding @property {string[]} pairingJavascriptFiles to input entry object.
 * @param {Entry} cssFileEntry - The file entry to process
 */
function pairingJavascriptFilesToOneCSSFile(cssFileEntry) {
    const { fileName } = cssFileEntry

    if (!fileName.match(/\.css$/) || cssFileEntry.pairingJavascriptFiles) {
        return
    }

    const pairingJavascriptFiles = distCSSToJavascriptPairing.reduce((jsFiles, pair) => {
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

    if (pairingJavascriptFiles.length < 1) {
        return
    }

    cssFileEntry.pairingJavascriptFiles = pairingJavascriptFiles
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
function syncGetContentStringOfOneFileEntry(input) {
    let entry
    let fileName

    if (input) {
        if (typeof input === 'object') {
            entry = input
            fileName = entry.fileName
        } else if (typeof input === 'string') {
            fileName = input
            entry = lookupDictionaryByFileNames[fileName]
        }
    }



    if (!entry || !fileName) {
        throw new TypeError('@wulechuan/css-stylus-markdown-themes:\n    Invalid file entry or path to reading distribution file content from.\n    fileName = "'+fileName+'"')
    }

    if (!entry.fileContent) {
        entry.fileContent = syncReadFileAsString(entry.fileAbsolutePath)
    }

    return entry.fileContent
}



/**
 * Get content string of the default css file (minified version).
 * @memberOf defaultExports
 * @returns {string}
 */
function syncGetContentStringOfDefaultCSS() {
    return syncGetContentStringOfOneFileEntry(
        'wulechuan-styles-for-html-via-markdown.default--no-toc.min.css'
    )
}



/**
 * Get content string of the default TOC javascript file (minified version).
 * @memberOf defaultExports
 * @returns {string}
 */
function syncGetContentStringOfDefaultTOCJavascript() {
    return syncGetContentStringOfOneFileEntry(
        'table-of-contents-behaviours.min.js'
    )
}
