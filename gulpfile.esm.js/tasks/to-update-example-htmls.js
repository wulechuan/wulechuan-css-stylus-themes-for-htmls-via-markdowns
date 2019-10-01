import chalk from 'chalk'

import {
    parallel as gulpParallel,
} from 'gulp'

import {
    create3HighOrderTasksUponMultipleTaskCycles,
} from '@wulechuan/gulp-classical-task-cycle'

import createTaskCycleForGeneratingHTMLsForExampleMarkdowns
    from '../task-cycles/build-example-htmls/create-task-cycle-for-generating-example-htmls'

import createTaskBodyForCopyingExampleAssetsTo
    from './to-copy-example-assets-to-test-folder'



const exampleOutputHTMLFileNameEnUSLight     = 'example.en-us.default-light-colored-theme.html'
const exampleOutputHTMLFileNameEnUSDark      = 'example.en-us.default-dark-colored-theme.html'

const exampleOutputHTMLFileNameZhHansCNLight = 'example.zh-hans-cn.default-light-colored-theme.html'
const exampleOutputHTMLFileNameZhHansCNDark  = 'example.zh-hans-cn.default-dark-colored-theme.html'

const releasingExampleLightThemeHTMLFilesOutputFolderPath = './docs/examples/rendered/html'
const releasingExampleDarkThemeHTMLFilesOutputFolderPath  = './docs/examples/rendered/html'
const pathsOfExtraFilesToEmbedIntoReleasingHTMLFiles = [
    // 'docs/examples/auto-update-html-document-title.js',
    // 'docs/examples/example-snapshots-helper.js',
]

const snapshotHelperHTMLFilesOutputFolderPath = './tests/output/example-htmls-with-snapshot-helpers'
const pathsOfExtraHelperFilesToEmbedIntoHTMLFilesForTakingSnapshotsEasier = [
    'docs/examples/auto-update-html-document-title.js',
    'docs/examples/example-snapshots-helper.js',
]

const taskCyclesOfBuildingHTMLFilesOfExampleMarkdowns = [
    createTaskCycleForGeneratingHTMLsForExampleMarkdowns({
        // distCSSFileNameToUse:           'wulechuan-styles-for-html-via-markdown.default--with-toc.min.css',
        exampleOutputHTMLFilesFolderPath:  releasingExampleLightThemeHTMLFilesOutputFolderPath,
        exampleOutputHTMLFileNameEnUS:     exampleOutputHTMLFileNameEnUSLight,
        exampleOutputHTMLFileNameZhHansCN: exampleOutputHTMLFileNameZhHansCNLight,
        subPathsOfExtraHelperFilesToEmbed: pathsOfExtraFilesToEmbedIntoReleasingHTMLFiles,
    }),
    createTaskCycleForGeneratingHTMLsForExampleMarkdowns({
        distCSSFileNameToUse:              'wulechuan-styles-for-html-via-markdown.default-dark--with-toc.min.css',
        exampleOutputHTMLFilesFolderPath:  releasingExampleDarkThemeHTMLFilesOutputFolderPath,
        exampleOutputHTMLFileNameEnUS:     exampleOutputHTMLFileNameEnUSDark,
        exampleOutputHTMLFileNameZhHansCN: exampleOutputHTMLFileNameZhHansCNDark,
        subPathsOfExtraHelperFilesToEmbed: pathsOfExtraFilesToEmbedIntoReleasingHTMLFiles,
    }),

    createTaskCycleForGeneratingHTMLsForExampleMarkdowns({
        // distCSSFileNameToUse:           'wulechuan-styles-for-html-via-markdown.default--with-toc.min.css',
        exampleOutputHTMLFilesFolderPath:  snapshotHelperHTMLFilesOutputFolderPath,
        exampleOutputHTMLFileNameEnUS:     exampleOutputHTMLFileNameEnUSLight,
        exampleOutputHTMLFileNameZhHansCN: exampleOutputHTMLFileNameZhHansCNLight,
        subPathsOfExtraHelperFilesToEmbed: pathsOfExtraHelperFilesToEmbedIntoHTMLFilesForTakingSnapshotsEasier,
    }),
    createTaskCycleForGeneratingHTMLsForExampleMarkdowns({
        distCSSFileNameToUse:              'wulechuan-styles-for-html-via-markdown.default-dark--with-toc.min.css',
        exampleOutputHTMLFilesFolderPath:  snapshotHelperHTMLFilesOutputFolderPath,
        exampleOutputHTMLFileNameEnUS:     exampleOutputHTMLFileNameEnUSDark,
        exampleOutputHTMLFileNameZhHansCN: exampleOutputHTMLFileNameZhHansCNDark,
        subPathsOfExtraHelperFilesToEmbed: pathsOfExtraHelperFilesToEmbedIntoHTMLFilesForTakingSnapshotsEasier,
    }),
]


export const taskBodyForCopyingAllAssetsFilesForAllExamples = gulpParallel(
    ...[
        releasingExampleLightThemeHTMLFilesOutputFolderPath,
        releasingExampleDarkThemeHTMLFilesOutputFolderPath,
        snapshotHelperHTMLFilesOutputFolderPath,
    ].map(createTaskBodyForCopyingExampleAssetsTo)
)

export const highOrderTaskForBuildingAllHTMLFiles = create3HighOrderTasksUponMultipleTaskCycles({
    taskCyclesInPallarel: taskCyclesOfBuildingHTMLFilesOfExampleMarkdowns,

    beforeBuildingEveryThingOnce: function() {
        console.log(`\n正在采用默认主题${chalk.black.bgBlue('构建所有语言版本的示例文档')}的 HTML 文件`)
    },
})
