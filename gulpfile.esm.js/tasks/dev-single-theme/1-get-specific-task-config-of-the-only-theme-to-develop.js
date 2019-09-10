import chalk from 'chalk'

import {
    specificTaskConfigsOfAllThemes,
} from '../../configs/theme-stylus-tasks'


export default function getTaskConfigOfTheOnlyThemeToDevelop(entryStylusFileSubPath) {
    let theOnlyThemeToDevelop = null

    if (!entryStylusFileSubPath) {
        theOnlyThemeToDevelop = specificTaskConfigsOfAllThemes[0]
    } else {
        const matchedTaskConfigs = specificTaskConfigsOfAllThemes.some(taskConfig => {
            return taskConfig.entryStylusFileSubPath === entryStylusFileSubPath
        })

        const matchedTaskConfigsCount = matchedTaskConfigs.length

        if (matchedTaskConfigsCount !== 1) {
            throw new RangeError(`${matchedTaskConfigsCount} theme tasks matched by "${
                chalk.yellow(entryStylusFileSubPath)
            }".\n    ${chalk.red('But 1 and only 1 expected.')}`)
        }

        theOnlyThemeToDevelop = matchedTaskConfigs[0]
    }

    return theOnlyThemeToDevelop
}
