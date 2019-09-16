import path from 'path'
import chalk from 'chalk'

import {
    sourceGlobsRootFolderPath,
    outputFolderPath,
    specificSourceGlobsCommonSubPath,
    outputFileBaseNameCommonPrefix,
    sharedSourceRelativeGlobs,
    extraSourceGlobsToWatch,
} from '../../../configs/theme-stylus-tasks'

import createTaskCycleForOneTheme
    from './1-create-task-settings-for-compilation-stylus-of-one-theme'


const joinPathPOSIX = path.posix.join
const divLineForPrinting = '-'.repeat(75)



export default function mergeSpecificTaskConfigsWithSharedConfigs(specificTaskConfigs) {
    let outputCSSFilesCount = 0

    console.log('')
    console.log(divLineForPrinting)


    const allMergedTaskConfigs = specificTaskConfigs.map(options => {
        const {
            entryStylusFileSubPath,
            outputCSSFileBaseName,
            shouldNotOutputUncompressedVersion,
            shouldNotOutputCompressedVersion,
            shouldDiscardMostCommentsEvenIfNotCompressCSS,
        } = options

        if (shouldNotOutputUncompressedVersion && shouldNotOutputCompressedVersion) {
            throw new RangeError(`Why don't we output anything for "${entryStylusFileSubPath}"?`)
        }

        if (!shouldNotOutputUncompressedVersion) {
            outputCSSFilesCount++
        }

        if (!shouldNotOutputCompressedVersion) {
            outputCSSFilesCount++
        }

        const entryStylusFileSubPath2 = `${entryStylusFileSubPath}.styl`
        const outputFileBaseName = `${outputFileBaseNameCommonPrefix}${outputCSSFileBaseName}`

        const specificSourceRelativeGlobs = [
            joinPathPOSIX(specificSourceGlobsCommonSubPath, entryStylusFileSubPath2),
        ]


        return {
            // descriptionOfCoreTask,
            descriptionOfInputsOfCoreTask: entryStylusFileSubPath2,

            sourceGlobs: {
                rootFolderPath: sourceGlobsRootFolderPath,

                relativeGlobsSharedWithOtherTaskCycles: sharedSourceRelativeGlobs,
                relativeGlobsSpecificallyForThisTaskCycle: specificSourceRelativeGlobs,

                extraSourceGlobsToWatch,
            },

            outputFiles: {
                rootFolderPath: outputFolderPath,

                forSingleOrTwoOutputFiles: {
                    fileBaseName: outputFileBaseName,
                    fileExtWithoutDot: 'css',
                },
            },

            compressions: {
                shouldNotOutputUncompressedVersion,
                shouldNotOutputCompressedVersion,
            },

            extraOptions: {
                shouldDiscardMostCommentsEvenIfNotCompressCSS,
            },
        }
    })


    console.log('Source scenario `.styl` file(s) count:', chalk.magenta(allMergedTaskConfigs.length))
    console.log('Should output    `.css` file(s) count:', chalk.green(outputCSSFilesCount))

    const allStylusTasksSettings = allMergedTaskConfigs.map(createTaskCycleForOneTheme)

    console.log(divLineForPrinting)
    console.log('')


    return allStylusTasksSettings
}
