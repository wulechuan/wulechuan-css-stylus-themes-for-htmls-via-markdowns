export default [
    {
        taskSetSourceDescription: 'source/js/table-of-contents-behaviours.js',

        sourceGlobs: {
            rootFolderPath: './source/js',

            // relativeGlobsSharedWithOtherTaskSets: [],
            relativeGlobsSpecificallyForThisTaskSet: [
                'table-of-contents-behaviours.js',
            ],
            // extraSourceGlobsToWatch: [],
        },

        outputFiles: {
            outputFolderPath: './dist/js',
            outputFileBaseName: 'table-of-contents-behaviours',
            outputFileExtWithoutDot: 'js',
        },

        compressions: {

        },
    },
]
