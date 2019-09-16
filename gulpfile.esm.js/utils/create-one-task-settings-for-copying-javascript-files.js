import {
    createATaskCycle,
} from '@wulechuan/gulp-classical-task-cycle'

import gulpTerser from 'gulp-terser'

export default function createOneTaskCycleForCopyingJavascriptFiles(options) {
    const {
        descriptionOfCoreTask,
        descriptionOfInputsOfCoreTask,
        sourceGlobs,
        outputFiles,
        compressions, // is a required property here, for simplicity
    } = options

    return createATaskCycle({
        descriptionOfCoreTask,
        descriptionOfInputsOfCoreTask,

        sourceGlobs,
        outputFiles,

        compressions: {
            ...compressions,

            compressor2: gulpTerser,
            compressorOptions2: {
                // nothing yet
            },
        },
    })
}
