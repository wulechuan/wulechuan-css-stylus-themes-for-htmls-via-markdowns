import {
    createATaskCycle,
} from '@wulechuan/gulp-classical-task-cycle'

import gulpTerser from 'gulp-terser'

export default function 构建一个任务闭环用以复制一组Javascript文件(options) {
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
