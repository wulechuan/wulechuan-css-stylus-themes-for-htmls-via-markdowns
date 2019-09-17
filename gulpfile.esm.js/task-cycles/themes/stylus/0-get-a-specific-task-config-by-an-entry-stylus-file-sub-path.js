import chalk from 'chalk'

import {
    specificTaskConfigsOfAllThemes,
} from '../../../configs/theme-stylus'


export default function getTaskConfigByEntryStylusFileSubPath(entryStylusFileSubPath) {
    let theOnlyTaskSpecificConfig = null

    if (!entryStylusFileSubPath) {
        theOnlyTaskSpecificConfig = specificTaskConfigsOfAllThemes[0]
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

        theOnlyTaskSpecificConfig = matchedTaskConfigs[0]
    }

    return theOnlyTaskSpecificConfig
}
