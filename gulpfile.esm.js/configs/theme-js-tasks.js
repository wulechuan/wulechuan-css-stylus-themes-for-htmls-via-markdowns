import {
    jsDistFolderRelativePath,
} from '../../global-config'

export default [
    {
        descriptionOfInputsOfCoreTask: 'source/themes/js/table-of-contents-behaviours.js',

        sourceGlobs: {
            rootFolderPath: './source/themes/js',

            // relativeGlobsSharedWithOtherTaskCycles: [],
            relativeGlobsSpecificallyForThisTaskCycle: [
                'table-of-contents-behaviours.js',
            ],
            // extraSourceGlobsToWatch: [],
        },

        outputFiles: {
            rootFolderPath: jsDistFolderRelativePath,

            forSingleOrTwoOutputFiles: {
                fileBaseName: 'table-of-contents-behaviours',
                fileExtWithoutDot: 'js',
            },
        },

        compressions: {},
    },
]
