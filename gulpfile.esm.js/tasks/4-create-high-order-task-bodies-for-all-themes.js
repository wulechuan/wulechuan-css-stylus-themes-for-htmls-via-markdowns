import chalk from 'chalk'


import {
	allCSSTaskSettingsTemplates,
} from '../configs'


import
	createOneGroupOfTaskSettingsViaOneTaskTemplate
from './1-create-one-group-of-task-settings-via-one-task-template'


import
	createGulpTaskBodiesForTaskSettingsOfOneTheme
from './3-create-task-bodies-for-one-task-settings'


import
    buildHighOrderTasksForABatchOfTaskSettings
from '../lib/tasks-build-3-types-of-high-order-tasks'



const taskSettingsArray = allCSSTaskSettingsTemplates.reduce((_taskSettingsArray, taskSettingsTemplate) => {
	_taskSettingsArray = [
		..._taskSettingsArray,
		...createOneGroupOfTaskSettingsViaOneTaskTemplate(taskSettingsTemplate),
	]

	return _taskSettingsArray
}, [])

taskSettingsArray.forEach(createGulpTaskBodiesForTaskSettingsOfOneTheme)




const highOrderTasks = buildHighOrderTasksForABatchOfTaskSettings({
    taskSettingsArray,
    beforeCleaningEveryThing: function() {
        console.log(`\n正在${chalk.red('删除')}所有已存在的${chalk.red('合并')}的 CSS 文件`)
    },
    beforeBuildingEveryThingOnce: function() {
        console.log(`\n正在依照主题配置逐一${chalk.black.bgBlue('合并')}所有 CSS 片段文件`)
    },
    beforeWatchingEveryThing: function() {
        console.log(`\n正在依照主题配置逐一${chalk.black.bgBlue('监视')}所有 CSS 片段文件的变动或诞生`)
    },
})

export default highOrderTasks
