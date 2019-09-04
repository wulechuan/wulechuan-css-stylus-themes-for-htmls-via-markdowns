import chalk from 'chalk'

import buildHighOrderTasksForABatchOfTaskSettings
    from './lib/tasks-build-3-types-of-high-order-tasks'

import allStylusTasksSettingsForAllThemes
    from './tasks/stylus/2-create-all-task-settings-for-all-themes'

import allJsTasksSettings
    from './tasks/js/create-all-js-task-settings'

import distESLintTaskSettings
    from './tasks/js/create-dist-eslint-task-settings'





const allTasksSettings = [
    ...allStylusTasksSettingsForAllThemes,
    ...allJsTasksSettings,
    distESLintTaskSettings,
]

const highOrderTasks = buildHighOrderTasksForABatchOfTaskSettings({
    taskSettingsArray: allTasksSettings,

    beforeCleaningEveryThing: function() {
        console.log(`\n正在${chalk.red('删除')}所有已存在 JS 文件和所有${chalk.red('编译得到的')} CSS 文件`)
    },
    beforeBuildingEveryThingOnce: function() {
        console.log(`\n正在依照主题配置逐一${chalk.black.bgBlue('编译')} Stylus，并${chalk.black.bgBlue('复制')} JS`)
    },
    beforeWatchingEveryThing: function() {
        console.log(`\n正在依照主题配置逐一${chalk.black.bgBlue('监视')} Stylus 和 JS 文件的变动或诞生`)
    },
})




export const clean         = highOrderTasks.cleanAllOldOuput
export const buildOnce     = highOrderTasks.buildEverythingOnce
export const buildAndWatch = highOrderTasks.watchEverything

export default buildAndWatch
