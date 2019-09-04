import createOneTaskSettingsForCopyingJavascriptFiles
    from '../../lib/create-one-task-settings-for-copying-javascript-files'

export default createOneTaskSettingsForCopyingJavascriptFiles({
    taskSetSourceDescription: 'source/js/.eslint.js',

    sourceGlobs: {
        rootFolderPath: './source/js',

        relativeGlobsSpecificallyForThisTaskSet: [
            '.eslintrc.js',
        ],
    },

    outputFiles: {
        folderPath: './dist/js',
        fileBaseName: '.eslintrc',
        fileExtWithoutDot: 'js',
    },

    compressions: {
        shouldNotOutputCompressedVersion: true,
    },
})
