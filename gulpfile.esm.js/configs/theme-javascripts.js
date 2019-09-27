import {
    jsDistFolderRelativePath,
} from '../../global-config'

export default [
    {
        descriptionOfInputsOfCoreTask: 'source/themes/js/table-of-contents-and-back-to-top-anchor-behaviors.js',

        sourceGlobs: {
            rootFolderPath: './source/themes/js',

            // relativeGlobsSharedWithOtherTaskCycles: [],
            relativeGlobsSpecificallyForThisTaskCycle: [
                'table-of-contents-and-back-to-top-anchor-behaviors.js',
            ],
            // extraSourceGlobsToWatch: [],
        },

        outputFiles: {
            rootFolderPath: jsDistFolderRelativePath,

            forSingleOrTwoOutputFiles: {
                fileBaseName: 'table-of-contents-and-back-to-top-anchor-behaviors',
                fileExtWithoutDot: 'js',
            },
        },

        compressions: {},
    },
]
