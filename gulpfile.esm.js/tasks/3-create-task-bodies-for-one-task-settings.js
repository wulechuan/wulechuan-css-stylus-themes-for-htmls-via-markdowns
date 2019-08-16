import path from 'path'
import chalk from 'chalk'


import {
	src    as gulpRead,
	dest   as gulpWrite,
	series as gulpBuildTaskSeries,
} from 'gulp'


import gulpArrayPipe from 'gulp-pipe'
import rename from 'gulp-rename'
import concatInto from 'gulp-concat'
import del from 'del'


import {
    sourceRootFolderPath,
} from '../configs'


export default function createGulpTaskBodiesForTaskSettingsOfOneTheme(taskSettings) {
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

	taskBodies.cleanOldOutput = toCleanOldMergedCSSFile
	taskBodies.buildNewOutput = gulpBuildTaskSeries(toCleanOldMergedCSSFile, toBuildNewCSSFileByMergingSnippets)




	function toCleanOldMergedCSSFile() {
		const possibleOutputFilePaths = [
			outputFileName1,
			outputFileName2,
		].map(baseName => path.join(outputFolderPath, baseName))

		console.log(`\n${chalk.red('Deleting these files if exist')}:`)
		possibleOutputFilePaths.forEach(filePath => console.log('    ', chalk.yellow(filePath)))

		return del(possibleOutputFilePaths)
	}

	function toBuildNewCSSFileByMergingSnippets() {
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


