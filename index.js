const globby = require('globby')
const path = require('path')
const fs = require('fs');

const distFolderPath = './dist'
const cssDistFolderName = 'css'
const jsDistFolderName  = 'js'

const processPWD = process.env.PWD

const getBaseNameOf = path.basename
// const getFileExtOf  = path.extname
const joinPathPOSIX = path.posix.join
const resolvePathPOSIX   = path.resolve

const { sync: syncGetFiles } = globby

const readFileSync = fs.readFileSync





const cssFilePaths = syncGetFiles(joinPathPOSIX(distFolderPath, cssDistFolderName))
const jsFilePaths  = syncGetFiles(joinPathPOSIX(distFolderPath, jsDistFolderName))

const cssFileEntries = cssFilePaths.map(processOneDistFile)
const jsFileEntries  = jsFilePaths.map(processOneDistFile)

const fileLookupDictionary = cssFileEntries.concat(jsFileEntries).reduce((dict, entry) => {
    dict[entry.fileRelativePath] = entry
    return dict
}, {})



module.exports = {
    cssFiles:  cssFileEntries,
    jsFiles:   jsFileEntries,
    fileLookup: fileLookupDictionary,
    syncReadContentOfOneEntry,
}




function processOneDistFile(fileRelativePath) {
    return {
        fileName: getBaseNameOf(fileRelativePath),
        fileRelativePath,
        fileAbsolutePath: resolvePathPOSIX(processPWD, fileRelativePath).replace(/\\/g, '/'),
        fileContent: '',
    }
}

function syncReadContentOfOneEntry(input) {
    let entry
    let fileRelativePath

    if (input) {
        if (typeof input === 'object') {
            entry = input
            fileRelativePath = entry.fileRelativePath
        } else if (typeof input === 'string') {
            fileRelativePath = input
            entry = fileLookupDictionary[fileRelativePath]
        }
    }

    if (!entry || !fileRelativePath) {
        throw new TypeError('@wulechuan/css-stylus-markdown-themes:\n    Invalid file entry or path to reading distribution file content from.\n    fileRelativePath = "'+fileRelativePath+'"')
    }

    if (!entry.fileContent) {
        entry.fileContent = syncReadFileAsString(fileRelativePath)
    }

    return entry.fileContent
}

function syncReadFileAsString(filePath) {
    return readFileSync(filePath).toString()
}
