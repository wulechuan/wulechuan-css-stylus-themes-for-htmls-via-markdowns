import path from 'path'

import {
	src as gulpRead,
	dest as gulpWrite,
	series as gulpBuildTaskSeries,
	parallel as gulpBuildParallelTasks,
	watch
} from 'gulp'


import del from 'del'
import chalk from 'chalk'

import gulpArrayPipe from 'gulp-pipe'
import rename from 'gulp-rename'
import concatInto from 'gulp-concat'
import postCSS from 'gulp-postcss'
import cssNano from 'cssnano'





import {
	sourceRootFolderPath,
	outputRootFolderPath,

	allCSSTaskTemplates,
} from './configs'



import
	createOneGroupOfTaskSettingsViaOneTaskTemplate
from './tasks/1-create-one-group-of-task-settings-via-one-task-template'




const allTaskSettingsArray = allCSSTaskTemplates.reduce((taskSettingsArray, taskSettingsTemplate) => {
	taskSettingsArray = [
		...taskSettingsArray,
		...createOneGroupOfTaskSettingsViaOneTaskTemplate(taskSettingsTemplate),
	]

	return taskSettingsArray
}, [])




function createGulpTaskBodiesForConcatenationViaSettings(taskSettings) {
	const {
		sourceGlobsCommonSubPath,
		sourceRelativeGlobs,
		outputFolderPath,
		outputFileBaseName,
		outputFileExt,
		shouldNotOutputUncompressedVersion,
		shouldOutputCompressedVersion,
		compressor1, // Even if we don't compress files, we might still want to operate the output file somehow.
		compressor2,
		compressorOptions1, // Even if we don't compress files, we might still want to operate the output file somehow.
		compressorOptions2,
	} = taskSettings

	const compressor1IsProvided = typeof compressor1 === 'function'
	const compressor2IsProvided = typeof compressor2 === 'function'


	if (!outputFolderPath) {
		throw TypeError('"outputFolderPath" is required for a task settings object.')
	}

	if (!sourceRelativeGlobs) {
		throw TypeError('"sourceRelativeGlobs" is required for a task settings object.')
	}

	if (!outputFileBaseName) {
		throw TypeError('"outputFileBaseName" is required for a task settings object.')
	}

	if (!outputFileExt) {
		throw TypeError('"outputFileExt" is required for a task settings object.')
	}





	const cssSourceGlobs = sourceRelativeGlobs.map(relativeGlob => {
		return path.join(sourceRootFolderPath, sourceGlobsCommonSubPath, relativeGlob).replace(/\\/g, '/')
	})

	const outputFileName1 = `${outputFileBaseName}.${outputFileExt}`
	const outputFileName2 = `${outputFileBaseName}.min.${outputFileExt}`

	const outputFileNames = []

	if (!shouldNotOutputUncompressedVersion) {
		outputFileNames.push(outputFileName1)
	}

	if (shouldOutputCompressedVersion) {
		outputFileNames.push(outputFileName2)
	}

	taskSettings.sourceGlobsToWatch = cssSourceGlobs
	taskSettings.outputFileNames = outputFileNames

	if (!taskSettings.description) {
		taskSettings.description = `producing "${outputFileName1}"`
	}

	if (!taskSettings.taskBodies) {
		taskSettings.taskBodies = {}
	}



	const {
		description: taskDescription,
		taskBodies,
	} = taskSettings

	taskBodies.buildOnce = gulpBuildTaskSeries(taskPreparations, taskMainPart)




	function taskPreparations() {
		const possibleOutputFilePaths = [
			outputFileName1,
			outputFileName2,
		].map(baseName => path.join(outputFolderPath, baseName))

		console.log(`\n${chalk.red('Deleting these files if exist')}:`)
		possibleOutputFilePaths.forEach(filePath => console.log('    ', chalk.yellow(filePath)))

		return del(possibleOutputFilePaths)
	}

	function taskMainPart() {
		console.log(`\n${taskDescription}`)

		const pipe = [
			gulpRead(cssSourceGlobs),
			concatInto(outputFileName1),
		]

		if (!shouldNotOutputUncompressedVersion) {
			if (compressor1IsProvided) {
				pipe.push(compressor1(compressorOptions1))
			}

			pipe.push(gulpWrite(outputFolderPath))
		}

		if (shouldOutputCompressedVersion) {
			if (compressor2IsProvided) {
				pipe.push(compressor2(compressorOptions2))
			}

			pipe.push(rename(fullPathName => {
				fullPathName.basename += '.min'
				return fullPathName
			}))

			pipe.push(gulpWrite(outputFolderPath))
		}

		return gulpArrayPipe(pipe)
	}
}


function getPluginsForOnePostCSSInstance(shouldCompressCSS, shouldDiscardMostCommentsEvenIfNotCompressCSS) {
	const pluginsForPostCSS = [
		// autoprefixer({browsers: ['last 1 version']}),
	]


	const cssNanoOptions = {}
	let shouldUseCSSNano = false
	if (shouldCompressCSS) {

		shouldUseCSSNano = true
		cssNanoOptions.preset = 'default'

	} else if (shouldDiscardMostCommentsEvenIfNotCompressCSS) {

		shouldUseCSSNano = true
		const customizedOptions = {
			rawCache: false,
			calc: false,
			colormin: false,
			convertValues: false,
			// discardComments: true,
			discardDuplicates: false,
			discardEmpty: false,
			discardOverridden: false,
			mergeLonghand: false,
			mergeRules: false,
			minifyFontValues: false,
			minifyGradients: false,
			minifyParams: false,
			minifySelectors: false,
			normalizeCharset: false,
			normalizeDisplayValues: false,
			normalizePositions: false,
			normalizeRepeatStyle: false,
			normalizeString: false,
			normalizeTimingFunctions: false,
			normalizeUnicode: false,
			normalizeUrl: false,
			normalizeWhitespace: false,
			orderedValues: false,
			reduceInitial: false,
			reduceTransforms: false,
			svgo: false,
			uniqueSelectors: false,
		}

		cssNanoOptions.preset = [ 'default', customizedOptions ]

	}

	if (shouldUseCSSNano) {
		pluginsForPostCSS.push(cssNano(cssNanoOptions))
	}

	if (pluginsForPostCSS.length < 1) {
		return null
	}

	return pluginsForPostCSS
}

function createGulpTaskBodiesForBuildingCSS(taskSettings) {
	taskSettings.outputFileExt = 'css'

	if (!('shouldNotOutputUncompressedVersion' in taskSettings)) {
		taskSettings.shouldNotOutputUncompressedVersion = false
	}

	if (!('shouldOutputCompressedVersion' in taskSettings)) {
		taskSettings.shouldOutputCompressedVersion = true
	}

	const compressorOptions1 = getPluginsForOnePostCSSInstance(false, taskSettings.shouldDiscardMostCommentsEvenIfNotCompressCSS)
	const compressorOptions2 = getPluginsForOnePostCSSInstance(true,  taskSettings.shouldDiscardMostCommentsEvenIfNotCompressCSS)

	taskSettings.compressor1 = compressorOptions1 ? postCSS : null
	taskSettings.compressor2 = compressorOptions2 ? postCSS : null
	taskSettings.compressorOptions1 = compressorOptions1
	taskSettings.compressorOptions2 = compressorOptions2

	createGulpTaskBodiesForConcatenationViaSettings(taskSettings)
}



allTaskSettingsArray.forEach(createGulpTaskBodiesForBuildingCSS)




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
