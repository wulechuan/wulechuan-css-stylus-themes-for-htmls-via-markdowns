import {
    create3HighOrderTasksUponMultipleTaskCycles,
} from '@wulechuan/gulp-classical-task-cycle'

import createOneTaskCycleViaOneSpecificTaskConfig
    from '../task-cycles/themes/stylus/3-create-a-task-cycle-via-a-specific-task-config'

import javascriptTaskCyclesOfAllThemes
    from '../task-cycles/themes/js/create-task-cycles-for-all-theme-javascripts'

import taskCycleOfCopyingESLintrcToDist
    from '../task-cycles/themes/js/create-task-cycle-for-copying-dist-eslintrc'

import {
    specificTaskConfigsOfAllThemes,
} from '../configs/theme-stylus'


const allTaskCyclesForAllThemes = [
    ...specificTaskConfigsOfAllThemes.map(createOneTaskCycleViaOneSpecificTaskConfig),
    ...javascriptTaskCyclesOfAllThemes,
    taskCycleOfCopyingESLintrcToDist,
]

export default create3HighOrderTasksUponMultipleTaskCycles({
    taskCyclesInPallarel: allTaskCyclesForAllThemes,
})
