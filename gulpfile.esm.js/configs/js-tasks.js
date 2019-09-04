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
            folderPath: './dist/js',
            fileBaseName: 'table-of-contents-behaviours',
            fileExtWithoutDot: 'js',
        },

        compressions: {

        },
    },
]
