const gulp = require('gulp');
const { sync: deleteFilesSync } = require('del');

const scopedGlobsLazilyWatchingMechanism = require('@wulechuan/scoped-glob-watchers');
const gulp3CommonPipelines               = require('@wulechuan/gulp-3-common-pipeline-presets');

const gulp3PipelineUtils = gulp3CommonPipelines.utilities;

const {
	printCompletionOfOneTask, // eslint-disable-line no-unused-vars
	forSettingsOfScopedLazyWatchers,
} = gulp3PipelineUtils;

const buildACSSStylusBuildingPipeline = gulp3CommonPipelines.specificPipelines.css.stylusCompilation;

const npmProjectRootPath = process.cwd();

/*
*
*
*
*
*
*
* *****************************************************
* 利用【工作流预设（pipeline presets）】构建的整套整套的任务集
* *****************************************************
*/

const allPipelinesForCSSOfDocs = [
	// 'markdown-styles-for-embedding-github',
	// 'markdown-styles-for-embedding-bitbucket',
	// 'markdown-styles-for-embedding-npmjs',
	'markdown-styles-for-vscode-built-in-preview',
].map((entryFileBaseName, index) => {
	return buildACSSStylusBuildingPipeline({
		taskNameKeyPart: `Markdown CSS (${index})`,
		sourceBasePath: 'source',
		outputBasePathOfBuilding: 'dist',
		buildingEntryGlobsRelativeToSourceBasePath: [ `${entryFileBaseName}.styl` ],
		builtSingleFileBaseName: entryFileBaseName,
		shouldNotGenerateMinifiedVersions: false
	});
})

/*
*
*
*
*
*
*
* ****************************************
*                Watchers
* ****************************************
*/

const scopedWatchingSettings = {};

forSettingsOfScopedLazyWatchers.appendMoreScopesViaPipelines({
	scopedWatchingSettingsToModify: scopedWatchingSettings,
	shouldTakeActionOnWatcherCreation: true,
	involvedPipelines: [
		...allPipelinesForCSSOfDocs,
	],
});

/*
*
*
*
*
*
*
* ****************************************
*             Compound Tasks
* ****************************************
*/

gulp.task('clean', [
	...allPipelinesForCSSOfDocs,
].map(pipeline => pipeline.taskNameOfDeletingFiles), thisTaskIsDone => {
	deleteFilesSync(staticFilesDeploymentRootPath);
	printCompletionOfOneTask('Delete "static" folder for deployment');
	thisTaskIsDone();
});

gulp.task('build once', [
	...allPipelinesForCSSOfDocs,
].map(pipeline => pipeline.taskNameOfMainTask));

gulp.task('build and then watch', (thisTaskIsDone) => {
	scopedGlobsLazilyWatchingMechanism.createWatchersAccordingTo(scopedWatchingSettings, {
		basePathForShorteningPathsInLog: npmProjectRootPath,
	});
	thisTaskIsDone();
});


gulp.task('default', ['build and then watch']);
