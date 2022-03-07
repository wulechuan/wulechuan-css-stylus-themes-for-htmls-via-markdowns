const {
    createATaskCycle,
} = require('@wulechuan/gulp-classical-task-cycle')

const gulpTerser = require('gulp-terser')

module.exports = function 构建一个任务闭环用以复制一组Javascript文件(options) {
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
