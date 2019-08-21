import path from 'path'
import chalk from 'chalk'


import {
	src    as gulpRead,
	dest   as gulpWrite,
	series as gulpBuildTaskSeries,
} from 'gulp'


import gulpArrayPipe from 'gulp-pipe'
import rename from 'gulp-rename'
import gulpStylus from 'gulp-stylus'
import del from 'del'


export default function createGulpTaskBodiesForTaskSettingsOfOneTheme(taskSettings) {
	const {
		taskSetDescription,

		outputFolderPath,
		// outputFileBaseName,
		// outputFileExtWithoutDot,
		outputFileName1,
		outputFileName2,
		// outputFilePath1,
		// outputFilePath2,
		allPossibleOutputFilePaths,

		// sourceGlobsRootFolderPath,
		sourceGlobs,
		// sourceGlobsToWatch,


		shouldNotOutputUncompressedVersion,
		shouldNotOutputCompressedVersion,
		// shouldDiscardMostCommentsEvenIfNotCompressCSS,

		// Even if we don't compress files,
		// we might still want to operate the output file somehow.
		compressor1,
		compressorOptions1,

		// Always means to compress.
		compressor2,
		compressorOptions2,

		taskBodies,
	} = taskSettings

	const compressor1IsProvided = typeof compressor1 === 'function'
	const compressor2IsProvided = typeof compressor2 === 'function'

	taskBodies.cleanOldOutput = toCleanOldOutputCSSFile
	taskBodies.buildNewOutput = gulpBuildTaskSeries(
		toCleanOldOutputCSSFile,
		toBuildNewCSSFileByCompilingStylusFiles
	)




	function toCleanOldOutputCSSFile() {
		console.log(`\n${chalk.red('Deleting these files if exist')}:`)
		allPossibleOutputFilePaths.forEach(filePath => console.log('    ', chalk.yellow(filePath)))
		return del(allPossibleOutputFilePaths)
	}

	function toBuildNewCSSFileByCompilingStylusFiles() {
		console.log(`\n${taskSetDescription}`)

		const pipe = [
			gulpRead(sourceGlobs),
			gulpStylus(),
		]

		if (!shouldNotOutputUncompressedVersion) {
			if (compressor1IsProvided) {
				pipe.push(compressor1(compressorOptions1))
			}

			pipe.push(rename(outputFileName1))
			pipe.push(gulpWrite(outputFolderPath))
		}

		if (!shouldNotOutputCompressedVersion) {
			if (compressor2IsProvided) {
				pipe.push(compressor2(compressorOptions2))
			}

			pipe.push(rename(outputFileName2))
			pipe.push(gulpWrite(outputFolderPath))
		}

		return gulpArrayPipe(pipe)
	}
}


