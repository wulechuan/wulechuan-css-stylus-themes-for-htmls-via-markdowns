import chalk from 'chalk'


import
	allStylusTaskSettingsBuildingOptions
from '../configs/stylus-tasks'


import
	createTaskSettingsForOneTheme
from './1-create-task-settings-for-compilation-stylus-of-one-theme'

import
    buildHighOrderTasksForABatchOfTaskSettings
from '../lib/tasks-build-3-types-of-high-order-tasks'



const taskSettingsArray = allStylusTaskSettingsBuildingOptions.reduce((_taskSettingsArray, optionsForOneTheme) => {
    _taskSettingsArray.push(createTaskSettingsForOneTheme(optionsForOneTheme))
	return _taskSettingsArray
}, [])


const highOrderTasks = buildHighOrderTasksForABatchOfTaskSettings({
    taskSettingsArray,
    beforeCleaningEveryThing: function() {
        console.log(`\n正在${chalk.red('删除')}所有已存在的${chalk.red('编译得到的')} CSS 文件`)
    },
    beforeBuildingEveryThingOnce: function() {
        console.log(`\n正在依照主题配置逐一${chalk.black.bgBlue('编译')} Stylus`)
    },
    beforeWatchingEveryThing: function() {
        console.log(`\n正在依照主题配置逐一${chalk.black.bgBlue('监视')} Stylus 文件的变动或诞生`)
    },
})

export default highOrderTasks
