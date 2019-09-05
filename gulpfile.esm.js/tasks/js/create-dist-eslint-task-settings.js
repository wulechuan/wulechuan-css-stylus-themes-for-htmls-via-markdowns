import {
    jsDistFolderRelativePath,
} from '../../../global-config'

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
        folderPath: jsDistFolderRelativePath,
        fileBaseName: '.eslintrc',
        fileExtWithoutDot: 'js',
    },

    compressions: {
        shouldNotOutputCompressedVersion: true,
    },
})
