import chalk from 'chalk'

import {
    specificTaskConfigsOfAllThemes,
} from '../../../任务之配置项集/针对构建所有须发布之层叠样式表之任务的'


export default function getTaskConfigByEntryStylusFileSubPath(entryStylusFileSubPath) {
    let theOnlyTaskSpecificConfig = null

    if (!entryStylusFileSubPath) {
        theOnlyTaskSpecificConfig = specificTaskConfigsOfAllThemes[0]
    } else {
        const matchedTaskConfigs = specificTaskConfigsOfAllThemes.filter(taskConfig => {
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
