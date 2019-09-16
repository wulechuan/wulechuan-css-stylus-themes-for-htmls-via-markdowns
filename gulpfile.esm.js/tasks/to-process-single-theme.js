import chalk from 'chalk'
import path from 'path'

import {
    existsSync,
    mkdirSync,
} from 'fs'

import {
    series   as gulpBuildTaskSeries,
    parallel as gulpBuildParallelTasks,
} from 'gulp'

import {
    create3HighOrderTasksUponMultipleTaskCycles,
} from '@wulechuan/gulp-classical-task-cycle'

import javascriptTaskCyclesOfAllThemes
    from '../task-cycles/themes-all/js/create-task-cycles-for-all-theme-javascripts'

// import taskCycleOfCopyingESLintrcToDist
//     from '../../tasks/themes/js/create-task-settings-for-copying-dist-eslintrc'

import createTaskCycleForTheOnlyThemeToDevelop
    from '../task-cycles/theme-single/2-create-task-cycles-for-the-only-theme-to-develop'

import createTaskCycleForGeneratingHTMLsForExampleMarkdowns
    from '../task-cycles/build-example-htmls/create-task-cycle-for-generating-example-htmls'

import copyExampleAssetsToTestOutputFolder
    from './to-copy-example-assets-to-test-folder'




import {
    entryStylusFileSubPathOfTheOnlyThemeToDevelop,
} from '../configs/dev-single-theme'



const exampleOutputHTMLFilesFolderPath = './test/output'
if (!existsSync(exampleOutputHTMLFilesFolderPath)) {
    mkdirSync(exampleOutputHTMLFilesFolderPath)
}




const taskCycleOfBuildingCSSForTheOnlyTheme = createTaskCycleForTheOnlyThemeToDevelop(
    entryStylusFileSubPathOfTheOnlyThemeToDevelop
)

const distCSSFilePathToUse = taskCycleOfBuildingCSSForTheOnlyTheme.shouldNotOutputCompressedVersion ?
    taskCycleOfBuildingCSSForTheOnlyTheme.outputFilePath1 : // uncompressed version
    taskCycleOfBuildingCSSForTheOnlyTheme.outputFilePath2   // compressed/minified version

const distCSSFileNameToUse = path.basename(distCSSFilePathToUse)

console.log('\ndistCSSFileNameToUse:', chalk.magenta(distCSSFileNameToUse))

const taskCycleOfBuildingHTMLFilesOfExampleMarkdowns = createTaskCycleForGeneratingHTMLsForExampleMarkdowns({
    distCSSFileNameToUse,
    exampleOutputHTMLFilesFolderPath,
})


const allTasksSettingsForBuildingSingleTheme = [
    taskCycleOfBuildingCSSForTheOnlyTheme,
    ...javascriptTaskCyclesOfAllThemes,     // Here we always copy js files, for simplicity of task design.
    // taskCycleOfCopyingESLintrcToDist, // But we don't need to copy the .eslintrc.js as well.
]




const buildCSSAndCopyJS = gulpBuildParallelTasks(
    ...allTasksSettingsForBuildingSingleTheme.map(taskCycle => taskCycle.taskBodies.buildNewOutputs)
)

const cleanHTMLs = taskCycleOfBuildingHTMLFilesOfExampleMarkdowns.taskBodies.cleanOldOutputs
const buildHTMLs = gulpBuildParallelTasks(
    taskCycleOfBuildingHTMLFilesOfExampleMarkdowns.taskBodies.buildNewOutputs,
    copyExampleAssetsToTestOutputFolder
)

const buildAllNewOutputs = gulpBuildTaskSeries(
    buildCSSAndCopyJS,
    buildHTMLs
)

const cleanAllOldOutputs = gulpBuildParallelTasks(
    ...allTasksSettingsForBuildingSingleTheme.map(taskCycle => taskCycle.taskBodies.cleanOldOutputs),
    cleanHTMLs
)



const sourceGlobsToWatch = [
    ...allTasksSettingsForBuildingSingleTheme.reduce((allGlobs, taskCycle) => {
        allGlobs = [
            ...allGlobs,
            ...taskCycle.sourceGlobsToWatch,
        ]

        return allGlobs
    }, []),
    ...taskCycleOfBuildingHTMLFilesOfExampleMarkdowns.sourceGlobsToWatch,
]

console.log('sourceGlobsToWatch', sourceGlobsToWatch)

const simplifiedTaskCycleForCompoundTaskOfBuildingSingleTheme = {
    sourceGlobsToWatch,
    taskBodies: {
        cleanOldOutputs: cleanAllOldOutputs,
        buildNewOutputs: buildAllNewOutputs,
    },
}

export default create3HighOrderTasksUponMultipleTaskCycles({
    taskCyclesInPallarel: [ simplifiedTaskCycleForCompoundTaskOfBuildingSingleTheme ],

    beforeCleaningEveryThing: function() {
        console.log(`\n正在${chalk.red('删除')}所有已存在 JS 文件和所有${chalk.red('编译得到的')} CSS 文件`)
    },
    beforeBuildingEveryThingOnce: function() {
        console.log(`\n正在依照唯一主题之配置${chalk.black.bgBlue('编译')} Stylus，并${chalk.black.bgBlue('复制')} JS`)
    },
    beforeWatchingEveryThing: function() {
        console.log(`\n正在依照唯一主题之配置${chalk.black.bgBlue('监视')} Stylus 和 JS 文件的变动或诞生`)
    },
})


