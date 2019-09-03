import path from 'path'
import postCSS from 'gulp-postcss'

import
    getPluginsForOnePostCSSInstance
from '../../lib/get-plugins-for-one-postcss-instance'

import
	createGulpTaskBodiesForTaskSettingsOfOneTheme
from './2-create-task-bodies-for-one-task-settings'




const joinPathPOSIX = path.posix.join

export default function createTaskSettingsForOneTheme(taskSettingsOptions) {
	const {
		taskSetDescription,
		sourceGlobsRootFolderPath,
		sharedSourceRelativeGlobs,
		specificSourceRelativeGlobs,
		extraSourceGlobsToWatch,
		outputFolderPath,
		outputFileBaseName,
		outputFileExtWithoutDot,
		shouldNotOutputUncompressedVersion,
		shouldNotOutputCompressedVersion,
		shouldDiscardMostCommentsEvenIfNotCompressCSS,
	} = taskSettingsOptions

	const outputFileName1 = `${outputFileBaseName}.${outputFileExtWithoutDot}`
	const outputFileName2 = `${outputFileBaseName}.min.${outputFileExtWithoutDot}`

	const outputFilePath1 = joinPathPOSIX(outputFolderPath, outputFileName1)
	const outputFilePath2 = joinPathPOSIX(outputFolderPath, outputFileName2)
	
	const allPossibleOutputFilePaths = [
		outputFilePath1,
		outputFilePath2,
	]


	const _sharedSourceRelativeGlobs   = !Array.isArray(sharedSourceRelativeGlobs)   ? [] : sharedSourceRelativeGlobs
	const _specificSourceRelativeGlobs = !Array.isArray(specificSourceRelativeGlobs) ? [] : specificSourceRelativeGlobs
	const _extraSourceGlobsToWatch     = !Array.isArray(extraSourceGlobsToWatch)     ? [] : extraSourceGlobsToWatch

	const allSourceRelativeGlobs = [
		..._sharedSourceRelativeGlobs,
		..._specificSourceRelativeGlobs,
	]

	const sourceGlobs = allSourceRelativeGlobs.map(
		glob => joinPathPOSIX(sourceGlobsRootFolderPath, glob)
	)

	const sourceGlobsToWatch = [
		...sourceGlobs,
		..._extraSourceGlobsToWatch,
	]

	const compressorOptions1 = getPluginsForOnePostCSSInstance(false, !!shouldDiscardMostCommentsEvenIfNotCompressCSS)
	const compressorOptions2 = getPluginsForOnePostCSSInstance(true)

	const compressor1 = compressorOptions1 ? postCSS : null
	const compressor2 = compressorOptions2 ? postCSS : null



	const taskSettings = {
		taskSetDescription: taskSetDescription || `Producing "${outputFileName1}"`,

		outputFolderPath,
		outputFileBaseName,
		outputFileExtWithoutDot,
		outputFileName1,
		outputFileName2,
		outputFilePath1,
		outputFilePath2,
		allPossibleOutputFilePaths,

		sourceGlobsRootFolderPath, // Simply a backup, not likely to use.
		sourceGlobs,
		sourceGlobsToWatch,

		shouldNotOutputUncompressedVersion:            !!shouldNotOutputUncompressedVersion,
		shouldNotOutputCompressedVersion:              !!shouldNotOutputCompressedVersion,
		shouldDiscardMostCommentsEvenIfNotCompressCSS: !!shouldDiscardMostCommentsEvenIfNotCompressCSS,

		// Even if we don't compress files,
		// we might still want to operate the output file somehow.
		compressor1,
		compressorOptions1,

		// Always means to compress.
		compressor2,
		compressorOptions2,

		taskBodies: {
			// Body functions will create later on.
		},
	}

	createGulpTaskBodiesForTaskSettingsOfOneTheme(taskSettings)

	return taskSettings
}
