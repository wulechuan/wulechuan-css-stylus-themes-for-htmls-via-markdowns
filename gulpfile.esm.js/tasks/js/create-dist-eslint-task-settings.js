import createOneTaskSettingsForCopyingJavascriptFiles
    from '../../lib/create-one-task-settings-for-copying-javascript-files'

export default createOneTaskSettingsForCopyingJavascriptFiles({
    taskSetSourceDescription: 'source/themes/js/.eslint.js',

    sourceGlobs: {
        rootFolderPath: './source/themes/js',

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
