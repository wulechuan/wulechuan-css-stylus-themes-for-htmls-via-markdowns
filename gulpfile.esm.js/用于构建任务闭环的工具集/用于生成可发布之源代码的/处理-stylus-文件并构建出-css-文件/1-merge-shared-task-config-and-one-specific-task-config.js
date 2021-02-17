import 路径工具 from 'path'

import {
    sourceGlobsRootFolderPath,
    outputFolderPath,
    specificSourceGlobsCommonSubPath,
    outputFileBaseNameCommonPrefix,
    sharedSourceRelativeGlobs,
    extraSourceGlobsToWatch,
} from '../../../任务之配置项集/针对构建所有须发布之层叠样式表之任务的'



const { join: 遵循POSIX标准拼接路径 } = 路径工具.posix



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
        遵循POSIX标准拼接路径(specificSourceGlobsCommonSubPath, entryStylusFileSubPath2),
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
