import highOrderTasksForAllThemes
    from './tasks/compound/to-process-all-themes'

import highOrderTasksForDevelopmentOfSingleTheme
    from './tasks/compound/to-process-single-theme'


export const cleanAll           = highOrderTasksForAllThemes.cleanAllOldOuputs
export const buildAllThemesOnce = highOrderTasksForAllThemes.buildEverythingOnce
// export const buildAndWatch = highOrderTasksForAllThemes.watchEverything

export const devSingleTheme = highOrderTasksForDevelopmentOfSingleTheme.watchEverything

export default devSingleTheme
