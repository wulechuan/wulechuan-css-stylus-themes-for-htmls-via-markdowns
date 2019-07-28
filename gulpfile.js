
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

const subPathOfSourceCSS = 'new-version--pure-css'


const baseThemeCandidates = [
	'theme-1',
]
const highlightjsThemeCandidates = [
	'atom-one-dark',
	'agate',
	'tomorrow-night',
]


const defaultBaseThemeName = baseThemeCandidates[0]
const defaultHighlightjsThemeName = highlightjsThemeCandidates[0]

const themeFileSuffixPlaceholderInTemplate = '<output-theme-file-name-suffix>'
const baseThemeNamePlaceholderInTemplate = '<base-theme-name>'
const highlightjsThemeNamePlaceholderInTemplate = '<highlightjs-theme-name>'

const allCSSTaskTemplates = [
	{
		description: `Building CSS: the generic version, theme "${themeFileSuffixPlaceholderInTemplate}"`,
		outputFolderPath: outputRootFolderPath,
		outputFileBaseName: `wulechuan-styles-for-html-via-markdwon.${themeFileSuffixPlaceholderInTemplate}`,
		sourceGlobsCommonSubPath: subPathOfSourceCSS,
		sourceRelativeGlobs: [
			'0-never-change/1-base-and-common.css',
			'0-never-change/2-customized-selectors.css',
			'0-never-change/3-small-windows.css',
			'1-seldom-change/0-tag-names.css',
			`2-change-from-theme-to-theme/${baseThemeNamePlaceholderInTemplate}/**/*.css`,
			`2-change-from-theme-to-theme/highlightjs-themes/${highlightjsThemeNamePlaceholderInTemplate}.css`,
			'3-media-of-printing.css',
		],
	},
	{
		description: `Building CSS: specifically for firefox addon "Markdown Viewer Webext", theme "${themeFileSuffixPlaceholderInTemplate}"`,
		outputFolderPath: outputRootFolderPath,
		outputFileBaseName: `wulechuan-styles-for-html-via-markdwon--firefox-addon.${themeFileSuffixPlaceholderInTemplate}`,
		shouldOutputCompressedVersion: false,
		sourceGlobsCommonSubPath: subPathOfSourceCSS,
		sourceRelativeGlobs: [
			'0-never-change/0-title-for-firefox-addon.css',
			'0-never-change/1-base-and-common.css',
			'0-never-change/2-customized-selectors.css',
			'0-never-change/3-small-windows.css',
			'1-seldom-change/0-tag-names.css',
			`2-change-from-theme-to-theme/${baseThemeNamePlaceholderInTemplate}/**/*.css`,
			`2-change-from-theme-to-theme/highlightjs-themes/${highlightjsThemeNamePlaceholderInTemplate}.css`,
			'3-media-of-printing.css',
			'4-firefox-addon-specific.css',
		],
	},
]






const allCSSTasks = []
allCSSTaskTemplates.forEach(template => {
	const _baseThemeCandidates = [
		'default',
		...baseThemeCandidates,
	]
	const _highlightjsThemeCandidates = [
		'default',
		...highlightjsThemeCandidates,
	]

	_baseThemeCandidates.forEach(baseThemeName => {
		_highlightjsThemeCandidates.forEach(hjThemeName => {
			if (baseThemeName === 'default' && hjThemeName !== 'default') {
				return
			}

			if (baseThemeName !== 'default' && hjThemeName === 'default') {
				return
			}

			if (baseThemeName === defaultBaseThemeName && hjThemeName === defaultHighlightjsThemeName) {
				return
			}

			let _baseThemeName
			let _hjThemeName
			let _outputFileNameSuffix

			if (baseThemeName === 'default' && hjThemeName === 'default') {
				_baseThemeName = defaultBaseThemeName
				_hjThemeName = defaultHighlightjsThemeName
				_outputFileNameSuffix = 'default'
			} else {
				_baseThemeName = baseThemeName
				_hjThemeName = hjThemeName
				_outputFileNameSuffix = `${_baseThemeName}.${_hjThemeName}`
			}

			const themeSettings = createCSSTaskSettingsForOneTheme(
				template,
				_outputFileNameSuffix,
				_baseThemeName,
				_hjThemeName
			)

			allCSSTasks.push(themeSettings)
		})
	})
})

function createCSSTaskSettingsForOneTheme(cssTaskSettingsTemplate, outputFileNameSuffix, baseThemeName, hjThemeName) {
	const {
		outputFolderPath,
		description,
		outputFileBaseName,
		sourceRelativeGlobs,
	} = cssTaskSettingsTemplate

	const cssTaskSettings = {
		outputFolderPath,
	}

	if ('shouldNotOutputUncompressedVersion' in cssTaskSettingsTemplate) {
		cssTaskSettings.shouldNotOutputUncompressedVersion = cssTaskSettingsTemplate.shouldNotOutputUncompressedVersion
	}

	if ('shouldOutputCompressedVersion' in cssTaskSettingsTemplate) {
		cssTaskSettings.shouldOutputCompressedVersion = cssTaskSettingsTemplate.shouldOutputCompressedVersion
	}

	if ('sourceGlobsCommonSubPath' in cssTaskSettingsTemplate) {
		cssTaskSettings.sourceGlobsCommonSubPath = cssTaskSettingsTemplate.sourceGlobsCommonSubPath
	}

	if (description) {
		cssTaskSettings.description = description.replace(themeFileSuffixPlaceholderInTemplate, outputFileNameSuffix)
	}

	if (outputFileBaseName) {
		cssTaskSettings.outputFileBaseName = outputFileBaseName.replace(themeFileSuffixPlaceholderInTemplate, outputFileNameSuffix)
	}

	cssTaskSettings.sourceRelativeGlobs = sourceRelativeGlobs.map(glob => {
		return glob
			.replace(baseThemeNamePlaceholderInTemplate, baseThemeName)
			.replace(highlightjsThemeNamePlaceholderInTemplate, hjThemeName)
	})

	return cssTaskSettings
}



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

	if (!('shouldNotOutputUncompressedVersion' in taskSettings)) {
		taskSettings.shouldNotOutputUncompressedVersion = false
	}

	if (!('shouldOutputCompressedVersion' in taskSettings)) {
		taskSettings.shouldOutputCompressedVersion = true
	}

	taskSettings.compressor = minifyCSS
	taskSettings.compressorOptions = cssminOptions

	createGulpTaskBodiesViaSettings(taskSettings)
}



allCSSTasks.forEach(createGulpTaskBodiesForBuildingCSS)




// Public tasks
exports.clean = function () {
	console.log(`Deleting all built files in "${outputRootFolderPath}"...`)
	return del(path.join(outputRootFolderPath, '**/*'))
}

exports.buildOnce = gulpBuildParallelTasks(
	...allCSSTasks.map(taskSettings => taskSettings.taskBodies.buildOnce)
)

exports.buildAndWatch = function (cb) {
	allCSSTasks.forEach(taskSettings => {
		watch(
			taskSettings.sourceGlobsToWatch,
			{ ignoreInitial: false },
			taskSettings.taskBodies.buildOnce
		)
	})
	cb()
}




// The default task
exports.default = exports.buildAndWatch
