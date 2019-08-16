import chalk from 'chalk'

import {
	series as gulpBuildTaskSeries,
	parallel as gulpBuildParallelTasks,
	watch as gulpWatch
} from 'gulp'



function nothingToDo(cb) {
    console.log('')
    console.log(chalk.green('无事可做'))
    console.log('')
    cb()
}


export default function buildHighOrderTasksForABatchOfTaskSettings({
    taskSettingsArray,
    beforeCleaningEveryThing,
    beforeBuildingEveryThingOnce,
    beforeWatchingEveryThing,
}) {
    if (!Array.isArray(taskSettingsArray) || taskSettingsArray.length === 0) {
        return {
            cleanAllOldOuput:    nothingToDo,
            buildEverythingOnce: nothingToDo,
            watchEverything:     nothingToDo,
        }
    }

    const cleanAllOldOuput = gulpBuildTaskSeries(
        function printAbstractAndStartAllCleaningTasks(cb) {
            if (typeof beforeCleaningEveryThing === 'function') {
                beforeCleaningEveryThing();
            }
            cb()
        },

        gulpBuildParallelTasks(
            ...taskSettingsArray.map(taskSettings => taskSettings.taskBodies.cleanOldOutput)
        )
    )

    const buildEverythingOnce = gulpBuildTaskSeries(
        function printAbstractAndStartAllBuildingTasks(cb) {
            if (typeof beforeBuildingEveryThingOnce === 'function') {
                beforeBuildingEveryThingOnce();
            }
            cb()
        },

        gulpBuildParallelTasks(
            ...taskSettingsArray.map(taskSettings => taskSettings.taskBodies.buildNewOutput)
        )
    )

    const watchEverything = gulpBuildTaskSeries(
        function startAllWatchers(cb) {
            if (typeof beforeWatchingEveryThing === 'function') {
                beforeWatchingEveryThing();
            }

            taskSettingsArray.forEach(taskSettings => {
                gulpWatch(
                    taskSettings.sourceGlobs,
                    { ignoreInitial: false },
                    taskSettings.taskBodies.buildNewOutput
                )
            })

            cb()
        }
    )


    return {
        cleanAllOldOuput,
        buildEverythingOnce,
        watchEverything,
    }
}
