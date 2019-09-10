import chalk from 'chalk'

import {
    series   as gulpBuildTaskSeries,
    parallel as gulpBuildParallelTasks,
} from 'gulp'

import buildHighOrderTasksForABatchOfTaskSettings
    from '../../lib/tasks-build-3-types-of-high-order-tasks'

import allThemeJavascriptTasksSettings
    from '../../tasks/themes/js/create-all-theme-js-task-settings'

// import taskSettingsOfCopyingESLintrcToDist
//     from '../../tasks/themes/js/create-task-settings-for-copying-dist-eslintrc'

import createTaskSettingsForTheOnlyThemeToDevelop
    from '../dev-single-theme/2-create-task-settings-for-the-only-theme-to-develop'

import createTaskSettingsForGeneratingHTMLsForExampleMarkdowns
    from '../update-example-htmls/create-task-settings-for-generating-example-htmls'





import {
    entryStylusFileSubPathOfTheOnlyThemeToDevelop,
} from '../../configs/dev-single-theme-task'



const exampleOutputHTMLFilesFolderPath = './test/output'





const taskSettingsOfBuildingCSSForTheOnlyTheme = createTaskSettingsForTheOnlyThemeToDevelop(
    entryStylusFileSubPathOfTheOnlyThemeToDevelop
)

const distCSSFilePathToUse = taskSettingsOfBuildingCSSForTheOnlyTheme.shouldNotOutputCompressedVersion ?
    taskSettingsOfBuildingCSSForTheOnlyTheme.outputFilePath1 : // uncompressed version
    taskSettingsOfBuildingCSSForTheOnlyTheme.outputFilePath2   // compressed/minified version

const taskSettingsOfBuildingHTMLFilesOfExampleMarkdowns = createTaskSettingsForGeneratingHTMLsForExampleMarkdowns({
    distCSSFilePathToUse,
    exampleOutputHTMLFilesFolderPath,
})


const allTasksSettingsForBuildingSingleTheme = [
    taskSettingsOfBuildingCSSForTheOnlyTheme,
    ...allThemeJavascriptTasksSettings,     // Here we always copy js files, for simplicity of task design.
    // taskSettingsOfCopyingESLintrcToDist, // But we don't need to copy the .eslintrc.js as well.
]




const buildCSSAndCopyJS = gulpBuildParallelTasks(
    ...allTasksSettingsForBuildingSingleTheme.map(taskSettings => taskSettings.taskBodies.buildNewOutput)
)

const cleanHTMLs = taskSettingsOfBuildingHTMLFilesOfExampleMarkdowns.taskBodies.cleanOldOutput
const buildHTMLs = taskSettingsOfBuildingHTMLFilesOfExampleMarkdowns.taskBodies.buildNewOutput

const buildAllNewOutputs = gulpBuildTaskSeries(
    buildCSSAndCopyJS,
    buildHTMLs
)

const cleanAllOldOutputs = gulpBuildParallelTasks(
    ...allTasksSettingsForBuildingSingleTheme.map(taskSettings => taskSettings.taskBodies.cleanOldOutput),
    cleanHTMLs
)




/**
    {
        sourceGlobsToWatch: [],
        taskBodies: {
            cleanOldOutput: function,
            buildNewOutput: function,
        },
    }
 */

const compoundTaskSettingsForSingleTheme = {
    sourceGlobsToWatch: [
        ...allTasksSettingsForBuildingSingleTheme.map(taskSettings => taskSettings.sourceGlobsToWatch),
        ...taskSettingsOfBuildingHTMLFilesOfExampleMarkdowns.sourceGlobsToWatch,
    ],

    taskBodies: {
        cleanOldOutput: cleanAllOldOutputs,
        buildNewOutput: buildAllNewOutputs,
    },
}

export default buildHighOrderTasksForABatchOfTaskSettings({
    taskSettingsArray: [ compoundTaskSettingsForSingleTheme ],

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


