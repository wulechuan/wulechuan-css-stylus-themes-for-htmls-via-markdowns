import {
    create3HighOrderTasksUponMultipleTaskCycles,
} from '@wulechuan/gulp-classical-task-cycle'

import createOneTaskCycleViaOneSpecificTaskConfig
    from '../用于构建任务闭环的工具集/用于生成可发布之源代码的/处理-stylus-文件并构建出-css-文件/3-create-a-task-cycle-via-a-specific-task-config'

import javascriptTaskCyclesOfAllThemes
    from '../用于构建任务闭环的工具集/用于生成可发布之源代码的/处理并构建出-javascript-文件/为所有须发布的-javascript-文件的构建任务逐一构建出任务闭环'

import taskCycleOfCopyingESLintrcToDist
    from '../用于构建任务闭环的工具集/用于生成可发布之源代码的/处理并构建出-javascript-文件/构建一个任务闭环用以复制发布内容专属的-eslintrc-文件'

import {
    specificTaskConfigsOfAllThemes,
} from '../任务之配置项集/针对构建所有须发布之层叠样式表之任务的'


const allTaskCyclesForAllThemes = [
    ...specificTaskConfigsOfAllThemes.map(createOneTaskCycleViaOneSpecificTaskConfig),
    ...javascriptTaskCyclesOfAllThemes,
    taskCycleOfCopyingESLintrcToDist,
]

export default create3HighOrderTasksUponMultipleTaskCycles({
    taskCyclesInPallarel: allTaskCyclesForAllThemes,
})
