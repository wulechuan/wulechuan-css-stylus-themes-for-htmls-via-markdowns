const {
    create3HighOrderTasksUponMultipleTaskCycles,
} = require('@wulechuan/gulp-classical-task-cycle')

const createOneTaskCycleViaOneSpecificTaskConfig
    = require('../02-用于构建任务闭环的工具集/用于生成可发布之源代码的/处理-stylus-文件并构建出-css-文件/3-create-a-task-cycle-via-a-specific-task-config')

const javascriptTaskCyclesOfAllThemes
    = require('../02-用于构建任务闭环的工具集/用于生成可发布之源代码的/处理并构建出-javascript-文件/为所有须发布的-javascript-文件的构建任务逐一构建出任务闭环')

const taskCycleOfCopyingESLintrcToDist
    = require('../02-用于构建任务闭环的工具集/用于生成可发布之源代码的/处理并构建出-javascript-文件/构建一个任务闭环用以复制发布内容专属的-eslintrc-文件')

const {
    诸排版与配色方案之构建任务各自特有之配置之汇总列表,
} = require('../00-任务之配置项集/针对构建所有须发布之层叠样式表之任务的')


const allTaskCyclesForAllThemes = [
    ...诸排版与配色方案之构建任务各自特有之配置之汇总列表.map(createOneTaskCycleViaOneSpecificTaskConfig),
    ...javascriptTaskCyclesOfAllThemes,
    taskCycleOfCopyingESLintrcToDist,
]

module.exports = create3HighOrderTasksUponMultipleTaskCycles({
    taskCyclesInPallarel: allTaskCyclesForAllThemes,
})
