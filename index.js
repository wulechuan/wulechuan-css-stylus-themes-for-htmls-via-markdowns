const globby = require('globby')
const path = require('path')
const fs = require('fs');

const distFolderPath = './dist'
const cssDistFolderName = 'css'
const jsDistFolderName  = 'js'

const processPWD = process.env.PWD

const getBaseNameOf = path.basename
const getFileExtOf  = path.extname
const joinPathPOSIX = path.posix.join
const resolvePathPOSIX   = path.resolve

const { sync: syncGetFiles } = globby

const readFileSync = fs.readFileSync





const cssFilePaths = syncGetFiles(joinPathPOSIX(distFolderPath, cssDistFolderName))
const jsFilePaths  = syncGetFiles(joinPathPOSIX(distFolderPath, jsDistFolderName))

const exportObject = {
    css: {},
    js: {},
}

cssFilePaths.forEach(filePath => {
    processOneDistFile(exportObject['css'], filePath)

})

jsFilePaths.forEach(filePath => {
    processOneDistFile(exportObject['js'],  filePath)
})

module.exports = exportObject

console.log(exportObject.css)



function syncReadFileAsString(filePath) {
    return readFileSync(filePath).toString()
}

function processOneDistFile(hostObject, filePath) {
    const fileName = getBaseNameOf(filePath)
    hostObject[fileName] = {
        path: resolvePathPOSIX(processPWD, filePath).replace(/\\/g, '/'),
        // type: getFileExtOf(filePath).slice(1),
        content: syncReadFileAsString(filePath),
    }
}
