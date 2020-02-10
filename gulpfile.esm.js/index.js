import {
    series as gulpSeries,
} from 'gulp'

import highOrderTasksForAllThemes
    from './tasks/to-process-all-themes'

import highOrderTasksForDevelopmentOfSingleTheme
    from './tasks/to-develop-single-theme-and-build-example-documents-for-it'

import {
    taskBodyForCopyingAllAssetsFilesForAllExamples,
    highOrderTaskForBuildingAllHTMLFiles,
} from './tasks/to-update-example-htmls'


export const cleanAll           = highOrderTasksForAllThemes.cleanAllOldOuputs
export const buildAllThemesOnce = highOrderTasksForAllThemes.buildEverythingOnce

export const devSingleThemeOnce = highOrderTasksForDevelopmentOfSingleTheme.buildEverythingOnce
export const devSingleTheme     = highOrderTasksForDevelopmentOfSingleTheme.watchEverything

export const updateExampleHTMLs = gulpSeries(
    taskBodyForCopyingAllAssetsFilesForAllExamples,
    highOrderTaskForBuildingAllHTMLFiles.buildEverythingOnce
)

export default devSingleTheme
