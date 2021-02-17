import {
    series as gulpSeries,
} from 'gulp'

import highOrderTasksForAllThemes
    from './构建好的任务闭环或简单任务/to-process-all-themes'

import highOrderTasksForDevelopmentOfSingleTheme
    from './构建好的任务闭环或简单任务/to-develop-single-theme-and-build-example-htmls-for-it'

import {
    taskBodyForCopyingAllAssetsFilesForAllExamples,
    highOrderTaskForBuildingAllHTMLFiles,
} from './构建好的任务闭环或简单任务/to-update-example-htmls'


export const cleanAll           = highOrderTasksForAllThemes.cleanAllOldOuputs
export const buildAllThemesOnce = highOrderTasksForAllThemes.buildEverythingOnce

export const devSingleThemeOnce = highOrderTasksForDevelopmentOfSingleTheme.buildEverythingOnce
export const devSingleTheme     = highOrderTasksForDevelopmentOfSingleTheme.watchEverything

export const updateExampleHTMLs = gulpSeries(
    taskBodyForCopyingAllAssetsFilesForAllExamples,
    highOrderTaskForBuildingAllHTMLFiles.buildEverythingOnce
)

export default devSingleTheme
