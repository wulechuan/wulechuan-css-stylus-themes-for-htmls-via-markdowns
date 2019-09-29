import highOrderTasksForAllThemes
    from './tasks/to-process-all-themes'

import highOrderTasksForDevelopmentOfSingleTheme
    from './tasks/to-develop-single-theme-and-build-example-docs-for-it'

import highOrderTasksForUpdateExampleHTMLsUsingDefaultTheme
    from './tasks/to-update-example-htmls'


export const cleanAll           = highOrderTasksForAllThemes.cleanAllOldOuputs
export const buildAllThemesOnce = highOrderTasksForAllThemes.buildEverythingOnce

export const devSingleTheme     = highOrderTasksForDevelopmentOfSingleTheme.watchEverything

export const updateExampleHTMLs = highOrderTasksForUpdateExampleHTMLsUsingDefaultTheme.buildEverythingOnce

export default devSingleTheme
