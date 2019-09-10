import path from 'path'
import chalk from 'chalk'

import {
    sourceGlobsRootFolderPath,
    outputFolderPath,
    specificSourceGlobsCommonSubPath,
    outputFileBaseNameCommonPrefix,
    sharedSourceRelativeGlobs,
    extraSourceGlobsToWatch,
    allSpecificOptions,
} from '../../configs/theme-stylus-tasks'

import createTaskSettingsForOneTheme
    from './1-create-task-settings-for-compilation-stylus-of-one-theme'


const joinPathPOSIX = path.posix.join
const divLineForPrinting = '-'.repeat(75)

console.log('')
console.log(divLineForPrinting)

let theOnlyStylToBuildArgument = process.env.theOnlyStylToBuild
if (typeof theOnlyStylToBuildArgument === 'string') {
    theOnlyStylToBuildArgument = theOnlyStylToBuildArgument.trim()
}

let theOnlyStylToBuild = null
if (theOnlyStylToBuildArgument) {
    if (theOnlyStylToBuildArgument === 'true' ||
        theOnlyStylToBuildArgument ===  true
    ) {
        theOnlyStylToBuild = allSpecificOptions[0].entryStylusFileSubPath
    } else {
        theOnlyStylToBuild = theOnlyStylToBuildArgument
    }

    console.log(`theOnlyStylToBuildArgument = "${theOnlyStylToBuildArgument}"`)
    console.log(`        theOnlyStylToBuild = "${theOnlyStylToBuild}"`)
    console.log('')
}


let outputCSSFilesCount = 0

const allStylusTaskSettingsBuildingOptions = allSpecificOptions
    .filter(options => !options.shouldSkipThisTask && (
        !theOnlyStylToBuild || theOnlyStylToBuild === options.entryStylusFileSubPath
    ))
    .map(options => {
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
            // taskSetDescription,
            taskSetSourceDescription: entryStylusFileSubPath2,

            sourceGlobs: {
                rootFolderPath: sourceGlobsRootFolderPath,

                relativeGlobsSharedWithOtherTaskSets: sharedSourceRelativeGlobs,
                relativeGlobsSpecificallyForThisTaskSet: specificSourceRelativeGlobs,

                extraSourceGlobsToWatch,
            },

            outputFiles: {
                folderPath: outputFolderPath,
                fileBaseName: outputFileBaseName,
                fileExtWithoutDot: 'css',
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


console.log('Source scenario `.styl` file(s) count:', chalk.magenta(allStylusTaskSettingsBuildingOptions.length))
console.log('Should output    `.css` file(s) count:', chalk.green(outputCSSFilesCount))

const allStylusTasksSettingsForAllThemes = allStylusTaskSettingsBuildingOptions.map(createTaskSettingsForOneTheme)

console.log(divLineForPrinting)
console.log('')

export default allStylusTasksSettingsForAllThemes
