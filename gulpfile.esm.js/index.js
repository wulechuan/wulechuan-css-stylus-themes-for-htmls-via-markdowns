import path from 'path'


import {
	series as gulpBuildTaskSeries,
	parallel as gulpBuildParallelTasks,
	watch
} from 'gulp'


import del from 'del'
import chalk from 'chalk'


import {
	outputRootFolderPath,
	allCSSTaskTemplates,
} from './configs'


import
	createOneGroupOfTaskSettingsViaOneTaskTemplate
from './tasks/1-create-one-group-of-task-settings-via-one-task-template'


import
	createGulpTaskBodiesForTaskSettingsOfOneTheme
from './tasks/3-create-task-bodies-for-one-task-settings'



const allTaskSettingsArray = allCSSTaskTemplates.reduce((taskSettingsArray, taskSettingsTemplate) => {
	taskSettingsArray = [
		...taskSettingsArray,
		...createOneGroupOfTaskSettingsViaOneTaskTemplate(taskSettingsTemplate),
	]

	return taskSettingsArray
}, [])

allTaskSettingsArray.forEach(createGulpTaskBodiesForTaskSettingsOfOneTheme)




// Public tasks
export const clean = function() {
	console.log(`\n${chalk.red(`Deleting all built files in "${outputRootFolderPath}"`)}...\n`)

	return del(path.join(outputRootFolderPath, '**/*'))
}

export const buildOnce = gulpBuildTaskSeries(
	function printingInfo(cb) {
		console.log(`\n${chalk.green('Building once')}...\n`)
		cb()
	},

	gulpBuildParallelTasks(
		...allTaskSettingsArray.map(taskSettings => taskSettings.taskBodies.buildOnce)
	)
)

export const buildAndWatch = function (cb) {
	console.log(`\n${chalk.black.bgGreen('Watching source codes and building continually')}...\n`)

	allTaskSettingsArray.forEach(taskSettings => {
		watch(
			taskSettings.sourceGlobsToWatch,
			{ ignoreInitial: false },
			taskSettings.taskBodies.buildOnce
		)
	})

	cb()
}




// The default task
export default buildAndWatch
