import createOneAbstractTaskSet from './_create-one-abstract-task-set'

// import gulpUglifyJs from 'gulp-uglify'
import gulpTerser from 'gulp-terser'

export default function createOneSetOfTasksForCopyingJavascriptFiles(options) {
    const {
        taskSetDescription,
        taskSetSourceDescription,
		sourceGlobs,
		outputFiles,
		compressions, // is a required property here, for simplicity
    } = options

	return createOneAbstractTaskSet({
        taskSetDescription,
        taskSetSourceDescription,

        sourceGlobs,
        outputFiles,

        compressions: {
            ...compressions,

			compressor2: gulpTerser,
            compressorOptions2: {
                // nothing yet
            },
        },
	})
}
