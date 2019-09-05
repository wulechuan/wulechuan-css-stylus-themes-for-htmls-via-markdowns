import {
    jsDistFolderRelativePath,
} from '../../global-config'

export default [
    {
        taskSetSourceDescription: 'source/themes/js/table-of-contents-behaviours.js',

        sourceGlobs: {
            rootFolderPath: './source/themes/js',

            // relativeGlobsSharedWithOtherTaskSets: [],
            relativeGlobsSpecificallyForThisTaskSet: [
                'table-of-contents-behaviours.js',
            ],
            // extraSourceGlobsToWatch: [],
        },

        outputFiles: {
            folderPath: jsDistFolderRelativePath,
            fileBaseName: 'table-of-contents-behaviours',
            fileExtWithoutDot: 'js',
        },

        compressions: {

        },
    },
]
