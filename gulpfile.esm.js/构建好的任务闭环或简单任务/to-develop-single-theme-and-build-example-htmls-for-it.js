import chalk from 'chalk'
import path from 'path'

import {
    series   as gulpBuildTaskSeries,
    parallel as gulpBuildParallelTasks,
} from 'gulp'

import {
    create3HighOrderTasksUponMultipleTaskCycles,
} from '@wulechuan/gulp-classical-task-cycle'

import javascriptTaskCyclesOfAllThemes
    from '../用于构建任务闭环的工具集/用于生成可发布之源代码的/处理并构建出-javascript-文件/为所有须发布的-javascript-文件的构建任务逐一构建出任务闭环'

// import taskCycleOfCopyingESLintrcToDist
//     from '../用于构建任务闭环的工具集/用于生成可发布之源代码的/处理并构建出-javascript-文件/构建一个任务闭环用以复制发布内容专属的-eslintrc-文件'

import createOneTaskCycleViaOneEntryStylusFileSubPath
    from '../用于构建任务闭环的工具集/用于生成可发布之源代码的/处理-stylus-文件并构建出-css-文件/4-create-a-task-cycle-via-an-entry-stylus-file-sub-path'

import createTaskCycleForGeneratingHTMLsForExampleMarkdowns
    from '../用于构建任务闭环的工具集/用于构建效果呈现示例之文章的/构建一个任务闭环以创建效果呈现示例之文章'

import 构建简单任务用以将某示例性HTML配套的插图等资源复制到目标文件夹
    from '../用于构建简单任务的工具集/构建简单任务用以将某示例性HTML配套的插图等资源复制到目标文件夹'

import {
    entryStylusFileSubPathOfTheOnlyThemeToDevelop,
} from '../任务之配置项集/针对用于开发某一特定排版与配色方案的任务的'



const exampleOutputHTMLFilesFolderPath  = './测试集/产生的临时文件/示例性-html-文件集（仅限于当前正在开发的排版与配色方案）'
const exampleOutputHTMLFileNameEnUS     = 'default-theming-example.--DEV--.en-us.html'
const exampleOutputHTMLFileNameZhHansCN = 'default-theming-example.--DEV--.zh-hans-cn.html'
const subPathsOfExtraHelperFilesToEmbed = [
    // '文档/文章排版与配色效果示例集/示例性-html-文章的-title-标签之内容自动配置之逻辑.js',
    // '文档/文章排版与配色效果示例集/示例性-html-文章的截图半自动化辅助逻辑.js',
]








const taskCycleOfBuildingCSSForTheOnlyTheme = createOneTaskCycleViaOneEntryStylusFileSubPath(
    entryStylusFileSubPathOfTheOnlyThemeToDevelop
)

const distCSSFilePathToUse = taskCycleOfBuildingCSSForTheOnlyTheme.shouldNotOutputCompressedVersion ?
    taskCycleOfBuildingCSSForTheOnlyTheme.outputFilePath1 : // uncompressed version
    taskCycleOfBuildingCSSForTheOnlyTheme.outputFilePath2   // compressed/minified version

const 欲采用的已发布之层叠样式表文件之名称 = path.basename(distCSSFilePathToUse)
console.log('\n欲采用的已发布之层叠样式表文件之名称：', chalk.magenta(欲采用的已发布之层叠样式表文件之名称))


const taskCycleOfBuildingHTMLFilesOfExampleMarkdowns = createTaskCycleForGeneratingHTMLsForExampleMarkdowns({
    欲采用的已发布之层叠样式表文件之名称,
    exampleOutputHTMLFilesFolderPath,
    exampleOutputHTMLFileNameEnUS,
    exampleOutputHTMLFileNameZhHansCN,
    subPathsOfExtraHelperFilesToEmbed,
})


const allTasksSettingsForBuildingSingleTheme = [
    taskCycleOfBuildingCSSForTheOnlyTheme,
    ...javascriptTaskCyclesOfAllThemes,     // Here we always copy js files, for simplicity of task design.
    // taskCycleOfCopyingESLintrcToDist,    // But we don't need to copy the .eslintrc.js.
]




const buildCSSAndCopyJS = gulpBuildParallelTasks(
    ...allTasksSettingsForBuildingSingleTheme.map(taskCycle => taskCycle.taskBodies.buildNewOutputs)
)

const cleanHTMLs = taskCycleOfBuildingHTMLFilesOfExampleMarkdowns.taskBodies.cleanOldOutputs
const buildHTMLs = gulpBuildParallelTasks(
    taskCycleOfBuildingHTMLFilesOfExampleMarkdowns.taskBodies.buildNewOutputs,
    构建简单任务用以将某示例性HTML配套的插图等资源复制到目标文件夹(exampleOutputHTMLFilesFolderPath)
)

const buildAllNewOutputs = gulpBuildTaskSeries(
    buildCSSAndCopyJS,
    buildHTMLs
)

const cleanAllOldOutputs = gulpBuildParallelTasks(
    ...allTasksSettingsForBuildingSingleTheme.map(taskCycle => taskCycle.taskBodies.cleanOldOutputs),
    cleanHTMLs
)



const 用于描述欲监视之所有文件的文件甄选描述符集 = [
    ...allTasksSettingsForBuildingSingleTheme.reduce((allGlobs, taskCycle) => {
        allGlobs = [
            ...allGlobs,
            ...taskCycle.sourceGlobsToWatch,
        ]

        return allGlobs
    }, []),
    ...taskCycleOfBuildingHTMLFilesOfExampleMarkdowns.sourceGlobsToWatch,
]

console.log('用于描述欲监视之所有文件的文件甄选描述符集：', 用于描述欲监视之所有文件的文件甄选描述符集)

const simplifiedTaskCycleForCompoundTaskOfBuildingSingleTheme = {
    sourceGlobsToWatch: 用于描述欲监视之所有文件的文件甄选描述符集,
    taskBodies: {
        cleanOldOutputs: cleanAllOldOutputs,
        buildNewOutputs: buildAllNewOutputs,
    },
}

export default create3HighOrderTasksUponMultipleTaskCycles({
    taskCyclesInPallarel: [ simplifiedTaskCycleForCompoundTaskOfBuildingSingleTheme ],

    beforeBuildingEveryThingOnce: function() {
        console.log(`\n正在依照唯一主题之配置${chalk.black.bgBlue('编译')} Stylus，并${chalk.black.bgBlue('复制')} JS`)
    },
})


