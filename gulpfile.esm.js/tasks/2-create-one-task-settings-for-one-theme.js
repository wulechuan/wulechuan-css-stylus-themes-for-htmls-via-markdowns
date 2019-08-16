import postCSS from 'gulp-postcss'


import {
    themeFileSuffixPlaceholderInTemplate,
    baseThemeNamePlaceholderInTemplate,
    highlightjsThemeNamePlaceholderInTemplate,
} from '../configs/css-building-templates/__strings-common-placeholders'


import
    getPluginsForOnePostCSSInstance
from '../lib/get-plugins-for-one-postcss-instance'


export default function createOneTaskSettingsForOneTheme({ taskSettingsTemplate, characteristics }) {
	const taskSettings = _combineTempalteAndCharacteristicsIntoOneTaskSettings({
		taskSettingsTemplate,
		characteristics
	})

	_addCSSCompressorSettingsToOneTaskSettings(taskSettings)

	return taskSettings
}






function _combineTempalteAndCharacteristicsIntoOneTaskSettings({ taskSettingsTemplate, characteristics }) {
	const {
		outputFolderPath,
		shouldDiscardMostCommentsEvenIfNotCompressCSS,
		description,
		outputFileBaseName,
		sourceRelativeGlobs,
    } = taskSettingsTemplate
    
    const {
        outputFileNameSuffix,
        baseThemeName,
        hjThemeName,
    } = characteristics

	const taskSettings = {
		outputFolderPath,
		shouldDiscardMostCommentsEvenIfNotCompressCSS,
	}

	if ('shouldNotOutputUncompressedVersion' in taskSettingsTemplate) {
		taskSettings.shouldNotOutputUncompressedVersion = taskSettingsTemplate.shouldNotOutputUncompressedVersion
	}

	if ('shouldOutputCompressedVersion' in taskSettingsTemplate) {
		taskSettings.shouldOutputCompressedVersion = taskSettingsTemplate.shouldOutputCompressedVersion
	}

	if ('sourceGlobsCommonSubPath' in taskSettingsTemplate) {
		taskSettings.sourceGlobsCommonSubPath = taskSettingsTemplate.sourceGlobsCommonSubPath
	}

	if (description) {
		taskSettings.description = description.replace(themeFileSuffixPlaceholderInTemplate, outputFileNameSuffix)
	}

	if (outputFileBaseName) {
		taskSettings.outputFileBaseName = outputFileBaseName.replace(themeFileSuffixPlaceholderInTemplate, outputFileNameSuffix)
	}

	taskSettings.sourceRelativeGlobs = sourceRelativeGlobs.map(glob => {
		return glob
			.replace(baseThemeNamePlaceholderInTemplate, baseThemeName)
			.replace(highlightjsThemeNamePlaceholderInTemplate, hjThemeName)
	})

	return taskSettings
}



function _addCSSCompressorSettingsToOneTaskSettings(taskSettings) {
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
}
