import chalk from 'chalk'

import {
    parallel as gulpParallel,
} from 'gulp'

import {
    create3HighOrderTasksUponMultipleTaskCycles,
} from '@wulechuan/gulp-classical-task-cycle'

import createTaskCycleForGeneratingHTMLsForExampleMarkdowns
    from '../用于构建任务闭环的工具集/用于构建效果呈现示例之文章的/构建一个任务闭环以创建效果呈现示例之文章'

import 构建简单任务用以将某示例性HTML配套的插图等资源复制到目标文件夹
    from '../用于构建简单任务的工具集/构建简单任务用以将某示例性HTML配套的插图等资源复制到目标文件夹'



const exampleOutputHTMLFileNameEnUSLight     = 'example.en-us.default-light-colored-theme.html'
const exampleOutputHTMLFileNameEnUSDark      = 'example.en-us.default-dark-colored-theme.html'

const exampleOutputHTMLFileNameZhHansCNLight = 'example.zh-hans-cn.default-light-colored-theme.html'
const exampleOutputHTMLFileNameZhHansCNDark  = 'example.zh-hans-cn.default-dark-colored-theme.html'

const releasingExampleLightThemeHTMLFilesOutputFolderPath = './文档/文章排版与配色效果示例集/以-html-格式渲染好的文章成品/html'
const releasingExampleDarkThemeHTMLFilesOutputFolderPath  = './文档/文章排版与配色效果示例集/以-html-格式渲染好的文章成品/html'
const pathsOfExtraFilesToEmbedIntoReleasingHTMLFiles = [
    // '文档/文章排版与配色效果示例集/示例性-html-文章的-title-标签之内容自动配置之逻辑.js',
    // '文档/文章排版与配色效果示例集/示例性-html-文章的截图半自动化辅助逻辑.js',
]

const snapshotHelperHTMLFilesOutputFolderPath = './测试集/产生的临时文件/示例性-html-文件集（均嵌有半自动化截图辅助逻辑）'
const pathsOfExtraHelperFilesToEmbedIntoHTMLFilesForTakingSnapshotsEasier = [
    '文档/文章排版与配色效果示例集/示例性-html-文章的-title-标签之内容自动配置之逻辑.js',
    '文档/文章排版与配色效果示例集/示例性-html-文章的截图半自动化辅助逻辑.js',
]

const taskCyclesOfBuildingHTMLFilesOfExampleMarkdowns = [
    createTaskCycleForGeneratingHTMLsForExampleMarkdowns({
        // 欲采用的已发布之层叠样式表文件之名称:           'wulechuan-styles-for-html-via-markdown.default--with-toc.min.css',
        exampleOutputHTMLFilesFolderPath:  releasingExampleLightThemeHTMLFilesOutputFolderPath,
        exampleOutputHTMLFileNameEnUS:     exampleOutputHTMLFileNameEnUSLight,
        exampleOutputHTMLFileNameZhHansCN: exampleOutputHTMLFileNameZhHansCNLight,
        subPathsOfExtraHelperFilesToEmbed: pathsOfExtraFilesToEmbedIntoReleasingHTMLFiles,
    }),
    createTaskCycleForGeneratingHTMLsForExampleMarkdowns({
        欲采用的已发布之层叠样式表文件之名称:              'wulechuan-styles-for-html-via-markdown.default-dark--with-toc.min.css',
        exampleOutputHTMLFilesFolderPath:  releasingExampleDarkThemeHTMLFilesOutputFolderPath,
        exampleOutputHTMLFileNameEnUS:     exampleOutputHTMLFileNameEnUSDark,
        exampleOutputHTMLFileNameZhHansCN: exampleOutputHTMLFileNameZhHansCNDark,
        subPathsOfExtraHelperFilesToEmbed: pathsOfExtraFilesToEmbedIntoReleasingHTMLFiles,
    }),

    createTaskCycleForGeneratingHTMLsForExampleMarkdowns({
        // 欲采用的已发布之层叠样式表文件之名称:           'wulechuan-styles-for-html-via-markdown.default--with-toc.min.css',
        exampleOutputHTMLFilesFolderPath:  snapshotHelperHTMLFilesOutputFolderPath,
        exampleOutputHTMLFileNameEnUS:     exampleOutputHTMLFileNameEnUSLight,
        exampleOutputHTMLFileNameZhHansCN: exampleOutputHTMLFileNameZhHansCNLight,
        subPathsOfExtraHelperFilesToEmbed: pathsOfExtraHelperFilesToEmbedIntoHTMLFilesForTakingSnapshotsEasier,
    }),
    createTaskCycleForGeneratingHTMLsForExampleMarkdowns({
        欲采用的已发布之层叠样式表文件之名称:              'wulechuan-styles-for-html-via-markdown.default-dark--with-toc.min.css',
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
    ].map(构建简单任务用以将某示例性HTML配套的插图等资源复制到目标文件夹)
)

export const highOrderTaskForBuildingAllHTMLFiles = create3HighOrderTasksUponMultipleTaskCycles({
    taskCyclesInPallarel: taskCyclesOfBuildingHTMLFilesOfExampleMarkdowns,

    beforeBuildingEveryThingOnce: function() {
        console.log(`\n正在采用默认主题${chalk.black.bgBlue('构建所有语言版本的示例文档')}的 HTML 文件`)
    },
})
