import {
    create3HighOrderTasksUponMultipleTaskCycles,
} from '@wulechuan/gulp-classical-task-cycle'

import mergeSpecificAndSharedTaskConfigsAndCreateTaskCycles
    from '../../tasks/themes/stylus/2-create-all-task-settings-for-all-themes'

import javascriptTaskCyclesOfAllThemes
    from '../../tasks/themes/js/create-all-theme-js-task-settings'

import taskCycleOfCopyingESLintrcToDist
    from '../../tasks/themes/js/create-task-settings-for-copying-dist-eslintrc'

import {
    specificTaskConfigsOfAllThemes,
} from '../../configs/theme-stylus-tasks'



const allTaskCyclesForAllThemes = [
    ...mergeSpecificAndSharedTaskConfigsAndCreateTaskCycles(specificTaskConfigsOfAllThemes),
    ...javascriptTaskCyclesOfAllThemes,
    taskCycleOfCopyingESLintrcToDist,
]

export default create3HighOrderTasksUponMultipleTaskCycles({
    taskCyclesInPallarel: allTaskCyclesForAllThemes,
})
