const globby = require('globby')
const path = require('path')
const fs = require('fs')

const distFolderSubPath = './dist'
const cssDistFolderName = 'css'
const jsDistFolderName  = 'js'

const thisModuleRootFolderPath = path.dirname(require.resolve('./package.json'))

const getBaseNameOf = path.basename
const joinPathPOSIX = path.posix.join

const { sync: syncGetFiles } = globby

const { readFileSync } = fs



const cssFileGlobs = joinPathPOSIX(thisModuleRootFolderPath, distFolderSubPath, cssDistFolderName, '**/*.css').replace(/\\/g, '/')
const  jsFileGlobs = joinPathPOSIX(thisModuleRootFolderPath, distFolderSubPath,  jsDistFolderName, '**/*.js' ).replace(/\\/g, '/')

const cssFilePaths = syncGetFiles(cssFileGlobs)
const  jsFilePaths = syncGetFiles( jsFileGlobs)

const cssFileEntries = cssFilePaths.map(processOneDistFile)
const  jsFileEntries =  jsFilePaths.map(processOneDistFile)

const lookupDictionaryByFileNames = cssFileEntries.concat(jsFileEntries).reduce((dict, entry) => {
    dict[entry.fileName] = entry
    return dict
}, {})

function syncGetDefaultCSSContentString() {
    return syncReadContentOfOneFileEntry(
        'wulechuan-styles-for-html-via-markdown.default--no-toc.min.css'
    )
}


// console.log('--------------')
// console.log(thisModuleRootFolderPath)
// console.log(cssFilePaths)
// console.log( jsFilePaths)
// console.log('--------------')

module.exports = {
    cssFileEntries,                 // An array of object(s).
    jsFileEntries,                  // An array of object(s).
    lookupDictionaryByFileNames,    // An object acts as a dictionary.

    syncGetDefaultCSSContentString, // A method that returns a string.
    syncReadContentOfOneFileEntry,  // A method that returns a string.
}




function processOneDistFile(fileAbsolutePath) {
    return {
        fileName: getBaseNameOf(fileAbsolutePath),
        fileRelativePath: path.relative(thisModuleRootFolderPath, fileAbsolutePath),
        fileAbsolutePath,
        fileContent: '',
    }
}

function syncReadContentOfOneFileEntry(input) {
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

function syncReadFileAsString(filePath) {
    return readFileSync(filePath).toString()
}
