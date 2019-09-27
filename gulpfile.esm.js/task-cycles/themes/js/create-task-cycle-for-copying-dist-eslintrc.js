import {
    jsDistFolderRelativePath,
} from '../../../../global-config'

import createOneTaskCycleForCopyingJavascriptFiles
    from '../../../utils/create-one-task-cycle-for-copying-javascript-files'

export default createOneTaskCycleForCopyingJavascriptFiles({
    descriptionOfInputsOfCoreTask: 'source/themes/js/.eslint.js',

    sourceGlobs: {
        rootFolderPath: './source/themes/js',

        relativeGlobsSpecificallyForThisTaskCycle: [
            '.eslintrc.js',
        ],
    },

    outputFiles: {
        rootFolderPath: jsDistFolderRelativePath,

        forSingleOrTwoOutputFiles: {
            fileBaseName: '.eslintrc',
            fileExtWithoutDot: 'js',
        },
    },

    compressions: {
        shouldNotOutputCompressedVersion: true,
    },
})
