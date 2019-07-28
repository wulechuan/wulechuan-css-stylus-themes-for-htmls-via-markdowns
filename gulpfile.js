
const path = require('path')

const gulp = require('gulp')
const {
	src: gulpRead,
	dest: gulpWrite,
	series: gulpBuildTaskSeries,
	parallel: gulpBuildParallelTasks,
	watch
} = gulp


const del = require('del')

const gulpIf = require('gulp-if');
const rename = require('gulp-rename')
const concatInto = require('gulp-concat')
const minifyCSS = require('gulp-cssmin')

const cssminOptions = {
	advanced: false
}




// Globs and task settings

const sourceRootFolderPath = 'source'
const outputRootFolderPath = 'dist'

const subPathOfSourceCSS = 'hand-coded-new-version'
const allCSSTasks = [
	// {
	// 	description: 'Building CSS: the generic version',
	// 	sourceGlobsCommonSubPath: subPathOfSourceCSS,
	// 	sourceRelativeGlobs: [ '*.css' ],
	// 	outputFolderPath: outputRootFolderPath,
	// 	outputFileBaseName: 'wulechuan-style-for-html-via-markdwon',
	// },
	{
		description: 'Building CSS: specifically for firefox addon "Markdown Viewer Webext"',
		sourceGlobsCommonSubPath: subPathOfSourceCSS,
		sourceRelativeGlobs: [ '*.css' ],
		outputFolderPath: outputRootFolderPath,
		outputFileBaseName: 'wulechuan-style-for-html-via-markdwon--firefox-addon',
	},
]


function createGulpTaskBodiesViaSettings(taskSettings) {
	const {
		sourceGlobsCommonSubPath,
		sourceRelativeGlobs,
		outputFolderPath,
		outputFileBaseName,
		outputFileExt,
		shouldNotOutputUncompressedVersion,
		shouldOutputCompressedVersion,
		compressor,
		compressorOptions,
	} = taskSettings

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
		return path.join(sourceRootFolderPath, sourceGlobsCommonSubPath, relativeGlob)
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

		console.log('[Task] Deleting these files if exist:')
		possibleOutputFilePaths.forEach(filePath => console.log('\t', filePath))

		return del(possibleOutputFilePaths)
	}

	function taskMainPart() {
		console.log(`[Task] "${taskDescription}"`)

		return gulpRead(cssSourceGlobs)
			.pipe(concatInto(outputFileName1))


			.pipe(gulpIf(
				!shouldNotOutputUncompressedVersion,
				gulpWrite(outputFolderPath)
			))


			.pipe(gulpIf(
				shouldOutputCompressedVersion,
				compressor(compressorOptions)
			))
			.pipe(gulpIf(
				shouldOutputCompressedVersion,
				rename((fullPathName) => {
					fullPathName.basename += '.min'
					return fullPathName
				})
			))
			.pipe(gulpIf(
				shouldOutputCompressedVersion,
				gulpWrite(outputFolderPath)
			))
	}
}


function createGulpTaskBodiesForBuildingCSS(taskSettings) {
	taskSettings.outputFileExt = 'css'

	// taskSettings.shouldNotOutputUncompressedVersion = false
	taskSettings.shouldOutputCompressedVersion = true

	taskSettings.compressor = minifyCSS
	taskSettings.compressorOptions = cssminOptions

	createGulpTaskBodiesViaSettings(taskSettings)
}



allCSSTasks.forEach(createGulpTaskBodiesForBuildingCSS)




// Public tasks
exports.clean = function () {
	console.log(`Deleting all built files in "${pathBuildRoot}"...`)
	del(path.join(pathBuildRoot, '**/*'))
}

exports.buildOnce = gulpBuildParallelTasks(
	allCSSTasks.map(taskSettings => taskSettings.taskBodies.buildOnce)
)

exports.buildAndWatch = gulpBuildParallelTasks(
	allCSSTasks.map(taskSettings => {
		return watch(taskSettings.sourceGlobsToWatch, taskSettings.taskBodies.buildOnce)
	})
)


// The default task
exports.default = exports.buildAndWatch
