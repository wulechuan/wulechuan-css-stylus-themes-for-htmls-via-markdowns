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
    from '../task-cycles/themes/js/create-task-cycles-for-all-theme-javascripts'

// import taskCycleOfCopyingESLintrcToDist
//     from '../task-cycles/themes/js/create-task-cycle-for-copying-dist-eslintrc'

import createOneTaskCycleViaOneEntryStylusFileSubPath
    from '../task-cycles/themes/stylus/4-create-a-task-cycle-via-an-entry-stylus-file-sub-path'

import createTaskCycleForGeneratingHTMLsForExampleMarkdowns
    from '../task-cycles/build-example-htmls/create-task-cycle-for-generating-example-htmls'

import createTaskBodyForCopyingExampleAssetsTo
    from './to-copy-example-assets-to-test-folder'

import {
    entryStylusFileSubPathOfTheOnlyThemeToDevelop,
} from '../configs/dev-single-theme'



const exampleOutputHTMLFilesFolderPath  = './tests/output/theme-in-developement'
const exampleOutputHTMLFileNameEnUS     = 'default-theming-example.--DEV--.en-us.html'
const exampleOutputHTMLFileNameZhHansCN = 'default-theming-example.--DEV--.zh-hans-cn.html'
const subPathsOfExtraHelperFilesToEmbed = [
    // 'documents/examples/auto-update-html-document-title.js',
    // 'documents/examples/example-snapshots-helper.js',
]








const taskCycleOfBuildingCSSForTheOnlyTheme = createOneTaskCycleViaOneEntryStylusFileSubPath(
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
    createTaskBodyForCopyingExampleAssetsTo(exampleOutputHTMLFilesFolderPath)
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

    beforeBuildingEveryThingOnce: function() {
        console.log(`\n正在依照唯一主题之配置${chalk.black.bgBlue('编译')} Stylus，并${chalk.black.bgBlue('复制')} JS`)
    },
})


