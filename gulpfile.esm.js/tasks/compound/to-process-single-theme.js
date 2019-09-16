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

import allThemeJavascriptTasksSettings
    from '../../tasks/themes/js/create-all-theme-js-task-settings'

// import taskSettingsOfCopyingESLintrcToDist
//     from '../../tasks/themes/js/create-task-settings-for-copying-dist-eslintrc'

import createTaskSettingsForTheOnlyThemeToDevelop
    from '../dev-single-theme/2-create-task-settings-for-the-only-theme-to-develop'

import createTaskSettingsForGeneratingHTMLsForExampleMarkdowns
    from '../update-example-htmls/create-task-settings-for-generating-example-htmls'

import copyExampleAssetsToTestOutputFolder
    from '../dev-single-theme/3-copy-example-assets-to-test-folder'




import {
    entryStylusFileSubPathOfTheOnlyThemeToDevelop,
} from '../../configs/dev-single-theme-task'



const exampleOutputHTMLFilesFolderPath = './test/output'
if (!existsSync(exampleOutputHTMLFilesFolderPath)) {
    mkdirSync(exampleOutputHTMLFilesFolderPath)
}




const taskSettingsOfBuildingCSSForTheOnlyTheme = createTaskSettingsForTheOnlyThemeToDevelop(
    entryStylusFileSubPathOfTheOnlyThemeToDevelop
)

const distCSSFilePathToUse = taskSettingsOfBuildingCSSForTheOnlyTheme.shouldNotOutputCompressedVersion ?
    taskSettingsOfBuildingCSSForTheOnlyTheme.outputFilePath1 : // uncompressed version
    taskSettingsOfBuildingCSSForTheOnlyTheme.outputFilePath2   // compressed/minified version

const distCSSFileNameToUse = path.basename(distCSSFilePathToUse)

console.log('\ndistCSSFileNameToUse:', chalk.magenta(distCSSFileNameToUse))

const taskSettingsOfBuildingHTMLFilesOfExampleMarkdowns = createTaskSettingsForGeneratingHTMLsForExampleMarkdowns({
    distCSSFileNameToUse,
    exampleOutputHTMLFilesFolderPath,
})


const allTasksSettingsForBuildingSingleTheme = [
    taskSettingsOfBuildingCSSForTheOnlyTheme,
    ...allThemeJavascriptTasksSettings,     // Here we always copy js files, for simplicity of task design.
    // taskSettingsOfCopyingESLintrcToDist, // But we don't need to copy the .eslintrc.js as well.
]




const buildCSSAndCopyJS = gulpBuildParallelTasks(
    ...allTasksSettingsForBuildingSingleTheme.map(taskSettings => taskSettings.taskBodies.buildNewOutputs)
)

const cleanHTMLs = taskSettingsOfBuildingHTMLFilesOfExampleMarkdowns.taskBodies.cleanOldOutputs
const buildHTMLs = gulpBuildParallelTasks(
    taskSettingsOfBuildingHTMLFilesOfExampleMarkdowns.taskBodies.buildNewOutputs,
    copyExampleAssetsToTestOutputFolder
)

const buildAllNewOutputs = gulpBuildTaskSeries(
    buildCSSAndCopyJS,
    buildHTMLs
)

const cleanAllOldOutputs = gulpBuildParallelTasks(
    ...allTasksSettingsForBuildingSingleTheme.map(taskSettings => taskSettings.taskBodies.cleanOldOutputs),
    cleanHTMLs
)



const sourceGlobsToWatch = [
    ...allTasksSettingsForBuildingSingleTheme.reduce((allGlobs, taskSettings) => {
        allGlobs = [
            ...allGlobs,
            ...taskSettings.sourceGlobsToWatch,
        ]

        return allGlobs
    }, []),
    ...taskSettingsOfBuildingHTMLFilesOfExampleMarkdowns.sourceGlobsToWatch,
]

console.log('sourceGlobsToWatch', sourceGlobsToWatch)

const compoundTaskSettingsForSingleTheme = {
    sourceGlobsToWatch,
    taskBodies: {
        cleanOldOutputs: cleanAllOldOutputs,
        buildNewOutputs: buildAllNewOutputs,
    },
}

export default create3HighOrderTasksUponMultipleTaskCycles({
    taskCyclesInPallarel: [ compoundTaskSettingsForSingleTheme ],

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


