import {
    create3HighOrderTasksUponMultipleTaskCycles,
} from '@wulechuan/gulp-classical-task-cycle'

import mergeSpecificAndSharedTaskConfigsAndCreateTaskCycles
    from '../task-cycles/themes-all/stylus/2-create-all-task-cycles-for-all-themes'

import javascriptTaskCyclesOfAllThemes
    from '../task-cycles/themes-all/js/create-task-cycles-for-all-theme-javascripts'

import taskCycleOfCopyingESLintrcToDist
    from '../task-cycles/themes-all/js/create-task-cycle-for-copying-dist-eslintrc'

import {
    specificTaskConfigsOfAllThemes,
} from '../configs/theme-stylus'



const allTaskCyclesForAllThemes = [
    ...mergeSpecificAndSharedTaskConfigsAndCreateTaskCycles(specificTaskConfigsOfAllThemes),
    ...javascriptTaskCyclesOfAllThemes,
    taskCycleOfCopyingESLintrcToDist,
]

export default create3HighOrderTasksUponMultipleTaskCycles({
    taskCyclesInPallarel: allTaskCyclesForAllThemes,
})
