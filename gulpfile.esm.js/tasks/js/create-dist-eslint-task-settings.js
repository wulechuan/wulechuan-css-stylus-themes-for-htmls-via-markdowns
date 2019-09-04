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
        outputFolderPath: './dist/js',
        outputFileBaseName: '.eslintrc',
        outputFileExtWithoutDot: 'js',
    },

    compressions: {
        shouldNotOutputCompressedVersion: true,
    },
})
