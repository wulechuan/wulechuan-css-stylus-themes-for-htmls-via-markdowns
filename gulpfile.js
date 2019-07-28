
const path = require('path')

const gulp = require('gulp')
const gulpSequence = require('gulp-sequence')
const gaze = require('gaze')


const rename = require('gulp-rename')
const del = require('del')


const concatInto = require('gulp-concat')
const minifyCSS = require('gulp-cssmin')

const cssminOptions = {
	advanced: false
}


const sourceRootFolderPath = 'source'
const outputRootFolderPath = 'dist'

const subPathOfSourceCSS = 'hand-coded-new-version'

const allGlobsToWatch = path.join(sourceRootFolderPath, '**/*')

const cssTasksSettings = {
	// 'Building CSS: generic version': {
	// 	cssSourceGlobs: [ '*.css' ],
	// 	outputFolderPath: outputRootFolderPath,
	// 	outputCSSFileBaseName: 'wulechuan-style-for-html-via-markdwon',
	// },
	'Building CSS: firefox addon specific version': {
		cssSourceGlobs: [ '*.css' ],
		outputFolderPath: outputRootFolderPath,
		outputCSSFileBaseName: 'wulechuan-style-for-html-via-markdwon--firefox-addon',
	},
}






function createGulpTasksForBuildingCSS(gulpTaskName, options) {
	const {
		sourceCSSRelativeGlobs,
		outputFolderPath,
		outputCSSFileBaseName,
	} = options

	const cssSourceGlobs = sourceCSSRelativeGlobs.map(relativeGlob => {
		return path.join(sourceRootFolderPath, subPathOfSourceCSS, relativeGlob)
	})

	const gulpPreparationTaskName = `${gulpTaskName} - preparations`

	const outputCSSFileName1 = `${outputCSSFileBaseName}.css`
	const outputCSSFileName2 = `${outputCSSFileBaseName}.min.css`

	const outputFilePaths = [
		outputCSSFileName1,
		outputCSSFileName2,
	].map(baseName => path.join(outputFolderPath, baseName))

	gulp.task(gulpPreparationTaskName, () => {
		console.log('Deleting these files if exist:')
		outputFilePaths.forEach(filePath => console.log('\t', filePath))
		return del(outputFilePaths)
	})

	gulp.task(gulpTaskName, [ gulpPreparationTaskName ], () => {
		return gulp.src(cssSourceGlobs)
			.pipe(concatInto(outputCSSFileName1))
			.pipe(gulp.dest(outputFolderPath))

			.pipe(minifyCSS(cssminOptions))
			.pipe(rename((fullPathName) => {
				fullPathName.basename += '.min'
				return fullPathName
			}))
			.pipe(gulp.dest(outputFolderPath))
	})
}

Object.keys(cssTasksSettings).forEach(gulpTaskName => {
	createGulpTasksForBuildingCSS( gulpTaskName, cssTasksSettings[gulpTaskName])
})






// Top level tasks
gulp.task('build-once', Object.keys(cssTasksSettings))
gulp.task('build-and-watch', [ 'build-once' ], (onThisTaskDone) => {
	gaze(allGlobsToWatch, (error, watcher) => {
		if (error) {
			throw error
		}

		const watchedFiles = watcher.relative()
		console.log('watching:\n', watchedFiles)

		watcher.on('all', (event, filepath) => {
			gulpSequence('build-once')(onThisTaskDone)
		})
	})
})
gulp.task('clean', () => {
	console.log(`Deleting all built files in "${pathBuildRoot}"...`)
	del(path.join(pathBuildRoot, '**/*'))
})





// The default task
gulp.task('default', [ 'build-once' ])
