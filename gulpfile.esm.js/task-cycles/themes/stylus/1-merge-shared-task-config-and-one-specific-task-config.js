import path from 'path'

import {
    sourceGlobsRootFolderPath,
    outputFolderPath,
    specificSourceGlobsCommonSubPath,
    outputFileBaseNameCommonPrefix,
    sharedSourceRelativeGlobs,
    extraSourceGlobsToWatch,
} from '../../../configs/theme-stylus'


const joinPathPOSIX = path.posix.join


export default function mergeSharedTaskConfigWithOneSpecificTaskConfig(specificTaskConfig) {
    const {
        entryStylusFileSubPath,
        outputCSSFileBaseName,
        shouldNotOutputUncompressedVersion,
        shouldNotOutputCompressedVersion,
        shouldDiscardMostCommentsEvenIfNotCompressCSS,
    } = specificTaskConfig

    if (shouldNotOutputUncompressedVersion && shouldNotOutputCompressedVersion) {
        throw new RangeError(`Why don't we output anything for "${entryStylusFileSubPath}"?`)
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
}
