import path from 'path'
import chalk from 'chalk'

import {
    src    as gulpRead,
    dest   as gulpWrite,
    series as gulpBuildTaskSeries,
} from 'gulp'

import gulpArrayPipe from 'gulp-pipe'
import rename from 'gulp-rename'
import del from 'del'

const joinPathPOSIX = path.posix.join

export default function createOneAbstractTaskSet(options) {
    const {
        sourceGlobs: { // [required].
            rootFolderPath: sourceGlobsRootFolderPath, // [required] A path string relative to `process.env.PWD`.

            relativeGlobsSharedWithOtherTaskSets,      // [optional] An array of path strings, each relative to rootFolderPath.
            relativeGlobsSpecificallyForThisTaskSet,   // [required] An array of path strings, each relative to rootFolderPath.

            extraSourceGlobsToWatch,                   // [optional] An array of path strings, each relative to `process.env.PWD`.
        },

        outputFiles: { // [required].
            folderPath:        outputFolderPath,        // [required] A path string relative to `process.env.PWD`.
            fileBaseName:      outputFileBaseName,      // [required] A string.
            fileExtWithoutDot: outputFileExtWithoutDot, // [required] A string.
        },

        sourceContentFirstProcessor, // [optional] A function, e.g. stylus, less, sass, etc.
    } = options



    let {
        taskSetDescription,       // [optional] Should be a string if provided.
        taskSetSourceDescription, // [optional] Should be a string if provided.

        compressions, /*
            [optional] Should be an object if provided.
            ---------------------------------------------
                Why does compressor1 exist?
                Well, even if we don't compress files,
                we might still want to operate the output
                file somehow.
                Think about postcss. We might need to get
                rid of most comments even if we don't
                compress css rules.
                -----------------------------------------
                Compressor2 always stands for producing
                a fully compressed output file.
            -------------------------------------------------

            Full example:
            -------------------------------------------------
            compressions: {
                shouldNotOutputUncompressedVersion, // [optional] A boolean. Default is false.
                shouldNotOutputCompressedVersion,   // [optional] A boolean. Default is false.

                compressor1IsEnabled,               // [optional] A boolean. Default is false.
                compressor1,                        // [optional] Should be a function if provided.
                compressorOptions1,                 // [optional] Any thing the corresponding compressor accepts.

                compressor2IsDisabled,              // [optional] A boolean. Default is false.
                compressor2,                        // [optional] Should be a function if provided.
                compressorOptions2,                 // [optional] Any thing the corresponding compressor accepts.
            },
        */


        taskBodies, /*
            [optional] Should be an object if provided.
            ---------------------------------------------

            Full example:
            ---------------------------------------------
            taskBodies: {
                cleanOldOutputs, // [optional] Should be a function if provided.
                buildNewOutputs, // [optional] Should be a function if provided.
            },
        */
    } = options





    const outputFileName1 = `${outputFileBaseName}.${    outputFileExtWithoutDot}`
    const outputFileName2 = `${outputFileBaseName}.min.${outputFileExtWithoutDot}`

    const outputFilePath1 = joinPathPOSIX(outputFolderPath, outputFileName1)
    const outputFilePath2 = joinPathPOSIX(outputFolderPath, outputFileName2)

    const allPossibleOutputFilePaths = [
        outputFilePath1,
        outputFilePath2,
    ]

    const _relativeGlobsSharedWithOtherTaskSets    = !Array.isArray(relativeGlobsSharedWithOtherTaskSets)    ? [] : relativeGlobsSharedWithOtherTaskSets
    const _relativeGlobsSpecificallyForThisTaskSet = !Array.isArray(relativeGlobsSpecificallyForThisTaskSet) ? [] : relativeGlobsSpecificallyForThisTaskSet
    const _extraSourceGlobsToWatch                 = !Array.isArray(extraSourceGlobsToWatch)                 ? [] : extraSourceGlobsToWatch

    const allSourceRelativeGlobs = [
        ..._relativeGlobsSharedWithOtherTaskSets,
        ..._relativeGlobsSpecificallyForThisTaskSet,
    ]

    const sourceGlobs = allSourceRelativeGlobs.map(
        glob => joinPathPOSIX(sourceGlobsRootFolderPath, glob)
    )

    const sourceGlobsToWatch = [
        ...sourceGlobs,
        ..._extraSourceGlobsToWatch,
    ]






    if (compressions === false) {
        compressions = {
            shouldNotOutputUncompressedVersion: false,
            shouldNotOutputCompressedVersion: true,
        }
    } else if (compressions === true || !compressions) {
        compressions = {
            shouldNotOutputUncompressedVersion: false,
            shouldNotOutputCompressedVersion: false,
        }
    } else if (typeof compressions !== 'object' || Array.isArray(compressions)) {
        // What the fuck!
    }





    const {
        compressor1IsEnabled = false,
        compressor1 = null,
        compressorOptions1 = null,

        compressor2IsDisabled = false,
        compressor2 = null,
        compressorOptions2 = null,
    } = compressions

    let {
        shouldNotOutputUncompressedVersion,
        shouldNotOutputCompressedVersion,
    } = compressions


    const compressor1IsProvidedAndAllowed =   compressor1IsEnabled && typeof compressor1 === 'function'
    const compressor2IsProvidedAndAllowed = !compressor2IsDisabled && typeof compressor2 === 'function'

    shouldNotOutputUncompressedVersion = !!shouldNotOutputUncompressedVersion
    shouldNotOutputCompressedVersion   = !!shouldNotOutputCompressedVersion


    const willOutputTwoFiles          = !shouldNotOutputUncompressedVersion && !shouldNotOutputCompressedVersion
    const willOutputMininfiedFileOnly =  shouldNotOutputUncompressedVersion && !shouldNotOutputCompressedVersion

    if (!taskSetDescription) {
        taskSetDescription = ''


        if (taskSetSourceDescription) {
            taskSetDescription += [
                `From    ${chalk.black.bgMagenta(taskSetSourceDescription)}`,
                '',
            ].join('\n')
        } else {
            taskSetSourceDescription = ''
        }


        taskSetDescription += [
            `Produce ${
                chalk.black.bgGreen(
                    `${outputFileBaseName}${
                        chalk.black.bgRed(willOutputMininfiedFileOnly ? '.min' : '')
                    }.${outputFileExtWithoutDot}`
                )
            }${
                willOutputTwoFiles ? ' (+ .min)' : ''
            }`,
            '',
        ].join('\n')
    }


    if (taskBodies) {
        if (typeof taskBodies !== 'object' || Array.isArray(taskBodies)) {
            // What the fuck!
        }
    } else {
        taskBodies = {}
    }

    if (typeof taskBodies.cleanOldOutputs !== 'function') {
        taskBodies.cleanOldOutputs = toCleanOldOutputFilesTheDefaultWay
    }


    if (typeof taskBodies.buildNewOutputs !== 'function') {
        taskBodies.buildNewOutputs = gulpBuildTaskSeries(
            toCleanOldOutputFilesTheDefaultWay,
            toBuildSourceFilesTheDefaultWay
        )
    }


    const taskSettings = {
        taskSetDescription,
        taskSetSourceDescription, // Simply a backup, not likely to use.

        outputFolderPath,
        outputFileBaseName,
        outputFileName1,
        outputFileName2,
        outputFilePath1,
        outputFilePath2,
        allPossibleOutputFilePaths,

        sourceGlobsRootFolderPath, // Simply a backup, not likely to use.
        sourceGlobs,
        sourceGlobsToWatch,

        shouldNotOutputUncompressedVersion,
        shouldNotOutputCompressedVersion,

        compressor1IsEnabled,
        compressor1,
        compressorOptions1,

        compressor2IsDisabled,
        compressor2,
        compressorOptions2,

        taskBodies,
    }

    return taskSettings





    function toCleanOldOutputFilesTheDefaultWay() {
        console.log(`\n${chalk.red('Deleting these files if exist')}:`)
        allPossibleOutputFilePaths.forEach(filePath => console.log('    ', chalk.yellow(filePath)))
        return del(allPossibleOutputFilePaths)
    }

    function toBuildSourceFilesTheDefaultWay() {
        console.log(`\n${taskSetDescription}`)

        const pipe = [ gulpRead(sourceGlobs) ]

        if (typeof sourceContentFirstProcessor === 'function') {
            pipe.push(sourceContentFirstProcessor())
        }

        if (!shouldNotOutputUncompressedVersion) {
            if (compressor1IsProvidedAndAllowed) {
                pipe.push(compressor1(compressorOptions1))
            }

            pipe.push(rename(outputFileName1))
            pipe.push(gulpWrite(outputFolderPath))
        }

        if (!shouldNotOutputCompressedVersion) {
            if (compressor2IsProvidedAndAllowed) {
                pipe.push(compressor2(compressorOptions2))
            }

            pipe.push(rename(outputFileName2))
            pipe.push(gulpWrite(outputFolderPath))
        }

        return gulpArrayPipe(pipe)
    }
}
