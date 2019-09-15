import chalk from 'chalk'

import {
    series   as gulpBuildTaskSeries,
    parallel as gulpBuildParallelTasks,
    watch    as gulpWatch,
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
    afterCleaningEveryThing,
    beforeBuildingEveryThingOnce,
    afterBuildingEveryThingOnce,
    beforeWatchingEveryThing,
}) {
    if (!Array.isArray(taskSettingsArray) || taskSettingsArray.length === 0) {
        return {
            cleanAllOldOuputs:   nothingToDo,
            buildEverythingOnce: nothingToDo,
            watchEverything:     nothingToDo,
        }
    }

    const cleanAllOldOuputs = gulpBuildTaskSeries(
        function _beforeCleaningEveryThing(cb) {
            if (typeof beforeCleaningEveryThing === 'function') {
                beforeCleaningEveryThing()
            }
            cb()
        },

        gulpBuildParallelTasks(
            ...taskSettingsArray.map(taskSettings => taskSettings.taskBodies.cleanOldOutputs)
        ),

        function _afterCleaningEveryThing(cb) {
            if (typeof afterCleaningEveryThing === 'function') {
                afterCleaningEveryThing()
            }
            cb()
        }
    )

    const buildEverythingOnce = gulpBuildTaskSeries(
        function _beforeBuildingEveryThingOnce(cb) {
            if (typeof beforeBuildingEveryThingOnce === 'function') {
                beforeBuildingEveryThingOnce()
            }
            cb()
        },

        gulpBuildParallelTasks(
            ...taskSettingsArray.map(taskSettings => taskSettings.taskBodies.buildNewOutputs)
        ),

        function _afterBuildingEveryThingOnce(cb) {
            if (typeof afterBuildingEveryThingOnce === 'function') {
                afterBuildingEveryThingOnce()
            }
            cb()
        }
    )

    const watchEverything = gulpBuildTaskSeries(
        function startAllWatchers(cb) {
            if (typeof beforeWatchingEveryThing === 'function') {
                beforeWatchingEveryThing()
            }

            taskSettingsArray.forEach(taskSettings => {
                gulpWatch(
                    taskSettings.sourceGlobsToWatch,
                    { ignoreInitial: false },
                    taskSettings.taskBodies.buildNewOutputs
                )
            })

            cb()
        }
    )


    return {
        cleanAllOldOuputs,
        buildEverythingOnce,
        watchEverything,
    }
}
