
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
const postCSS = require('gulp-postcss')
const cssNano = require('cssnano')





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
		shouldDiscardMostCommentsEvenIfNotCompressCSS: false,
		sourceRelativeGlobs: [
			'0-never-change/**/*.css',
			'1-seldom-change/**/*.css',
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
		shouldDiscardMostCommentsEvenIfNotCompressCSS: true,
		sourceRelativeGlobs: [
			'0-title-for-firefox-addon.css',
			'0-never-change/**/*.css',
			'1-seldom-change/**/*.css',
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
		shouldDiscardMostCommentsEvenIfNotCompressCSS,
		description,
		outputFileBaseName,
		sourceRelativeGlobs,
	} = cssTaskSettingsTemplate

	const cssTaskSettings = {
		outputFolderPath,
		shouldDiscardMostCommentsEvenIfNotCompressCSS,
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



function createGulpTaskBodiesForConcatenationViaSettings(taskSettings) {
	const {
		sourceGlobsCommonSubPath,
		sourceRelativeGlobs,
		outputFolderPath,
		outputFileBaseName,
		outputFileExt,
		shouldNotOutputUncompressedVersion,
		shouldOutputCompressedVersion,
		compressor,
		compressorOptions1, // Even if we don't compress files, we might still want to operate the output file somehow.
		compressorOptions2,
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
				!shouldNotOutputUncompressedVersion && typeof compressor === 'function',
				compressor(compressorOptions1)
			))
			.pipe(gulpIf(
				!shouldNotOutputUncompressedVersion,
				gulpWrite(outputFolderPath)
			))


			.pipe(gulpIf(
				shouldOutputCompressedVersion && typeof compressor === 'function',
				compressor(compressorOptions2)
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

	taskSettings.compressor = postCSS
	taskSettings.compressorOptions1 = getPluginsForOnePostCSSInstance(false, taskSettings.shouldDiscardMostCommentsEvenIfNotCompressCSS)
	taskSettings.compressorOptions2 = getPluginsForOnePostCSSInstance(true,  taskSettings.shouldDiscardMostCommentsEvenIfNotCompressCSS)

	createGulpTaskBodiesForConcatenationViaSettings(taskSettings)
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
