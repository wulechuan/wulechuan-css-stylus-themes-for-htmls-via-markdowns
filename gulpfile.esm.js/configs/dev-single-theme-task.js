import taskConfigsOfAllThemes
    from './theme-stylus-tasks'



export default function getTaskConfigOfTheOnlyThemeToDevelop(entryStylusFileSubPathOfTheOnlyThemeToDevelop) {
    let theOnlyThemeToDevelop = null

    if (!entryStylusFileSubPathOfTheOnlyThemeToDevelop) {
        theOnlyThemeToDevelop = taskConfigsOfAllThemes[0]
    } else {
        const matchedTaskConfigs = taskConfigsOfAllThemes.some(taskConfig => {
            return taskConfig.entryStylusFileSubPath === entryStylusFileSubPathOfTheOnlyThemeToDevelop
        })

        const matchedTaskConfigsCount = taskConfigsOfAllThemes.length

        if (matchedTaskConfigsCount !== 1) {
            throw new RangeError(`${matchedTaskConfigsCount} theme tasks matched by "${
                entryStylusFileSubPathOfTheOnlyThemeToDevelop
            }".\n    But 1 and only 1 expected.`)
        }

        theOnlyThemeToDevelop = matchedTaskConfigs[0]
    }

    return theOnlyThemeToDevelop
}
