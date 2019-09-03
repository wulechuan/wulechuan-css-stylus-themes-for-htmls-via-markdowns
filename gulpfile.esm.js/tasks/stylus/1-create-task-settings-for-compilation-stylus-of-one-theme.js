import postCSS from 'gulp-postcss'
import gulpStylus from 'gulp-stylus'

import
	createOneAbstractTaskSet
from '../../lib/_create-one-abstract-task-set'

import
    getPluginsForOnePostCSSInstance
from '../../lib/get-plugins-for-one-postcss-instance'



export default function createTaskSettingsForOneTheme(taskSettingsOptions) {
    const {
		taskSetDescription,
		taskSetSourceDescription,
		sourceGlobs,
		outputFiles,
		compressions, // is a required property here, for simplicity

		extraOptions: {
			shouldDiscardMostCommentsEvenIfNotCompressCSS,
		},
	} = taskSettingsOptions

	const _shouldDiscardComments = !!shouldDiscardMostCommentsEvenIfNotCompressCSS
	
	const compressorOptions1 = getPluginsForOnePostCSSInstance(false, _shouldDiscardComments)
	const compressorOptions2 = getPluginsForOnePostCSSInstance(true)

	const compressor1 = postCSS
	const compressor2 = postCSS

	return createOneAbstractTaskSet({
		taskSetDescription,
		taskSetSourceDescription,

		sourceGlobs,
        outputFiles,

        compressions: {
            ...compressions,

			compressor1IsEnabled: _shouldDiscardComments,
			compressor1,
            compressorOptions1,

			compressor2IsDisabled: false,
			compressor2,
            compressorOptions2,
		},

		sourceContentFirstProcessor: gulpStylus,
	})
}
