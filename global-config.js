const path = require('path')

const joinPathPOSIX = path.posix.join

const distFolderRelativePath = './dist'

const cssDistFolderName = 'css'
const  jsDistFolderName = 'js'

const cssDistFolderRelativePath = joinPathPOSIX(distFolderRelativePath, cssDistFolderName)
const  jsDistFolderRelativePath = joinPathPOSIX(distFolderRelativePath,  jsDistFolderName)

module.exports = {
    distFolderRelativePath,
    cssDistFolderName,
    jsDistFolderName,
    cssDistFolderRelativePath,
    jsDistFolderRelativePath,
}
