import chalk from 'chalk'

import buildHighOrderTasksForABatchOfTaskSettings
    from '../../utils/tasks-build-3-types-of-high-order-tasks'

import mergeSpecificTaskConfigsWithSharedConfigsAndCreateTaskSettings
    from '../../tasks/themes/stylus/2-create-all-task-settings-for-all-themes'

import allThemeJavascriptTasksSettings
    from '../../tasks/themes/js/create-all-theme-js-task-settings'

import TaskSettingsOfCopyingESLintrcToDist
    from '../../tasks/themes/js/create-task-settings-for-copying-dist-eslintrc'




import {
    specificTaskConfigsOfAllThemes,
} from '../../configs/theme-stylus-tasks'



const allTasksSettingsForAllThemes = [
    ...mergeSpecificTaskConfigsWithSharedConfigsAndCreateTaskSettings(specificTaskConfigsOfAllThemes),
    ...allThemeJavascriptTasksSettings,
    TaskSettingsOfCopyingESLintrcToDist,
]

export default buildHighOrderTasksForABatchOfTaskSettings({
    taskSettingsArray: allTasksSettingsForAllThemes,

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
