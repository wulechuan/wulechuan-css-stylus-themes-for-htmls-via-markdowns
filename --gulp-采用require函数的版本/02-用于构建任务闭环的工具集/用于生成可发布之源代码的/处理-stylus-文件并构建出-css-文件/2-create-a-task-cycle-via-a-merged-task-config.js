const postCSS = require('gulp-postcss')
const gulpStylus = require('gulp-stylus')

const {
    createATaskCycle,
} = require('@wulechuan/gulp-classical-task-cycle')

const getPluginsForOnePostCSSInstance
    = require('../../../99-辅助工具集/get-plugins-for-one-postcss-instance')



module.exports = function createOneTaskCycleForCompilingStylusOfOneTheme(mergedTaskConfig) {
    const {
        descriptionOfCoreTask,
        descriptionOfInputsOfCoreTask,
        sourceGlobs,
        outputFiles,
        compressions, // is a required property here, for simplicity

        extraOptions: {
            shouldDiscardMostCommentsEvenIfNotCompressCSS,
        },
    } = mergedTaskConfig

    const _shouldDiscardComments = !!shouldDiscardMostCommentsEvenIfNotCompressCSS

    const compressorOptions1 = getPluginsForOnePostCSSInstance(false, _shouldDiscardComments)
    const compressorOptions2 = getPluginsForOnePostCSSInstance(true)

    const compressor1 = postCSS
    const compressor2 = postCSS

    return createATaskCycle({
        descriptionOfCoreTask,
        descriptionOfInputsOfCoreTask,

        sourceGlobs,
        outputFiles,
        firstPipeForProcessingSources: gulpStylus,

        compressions: {
            ...compressions,

            compressor1IsEnabled: _shouldDiscardComments,
            compressor1,
            compressorOptions1,

            compressor2IsDisabled: false,
            compressor2,
            compressorOptions2,
        },
    })
}
