import 路径工具 from 'path'

import {
    所涉一切文件甄选描述符之公共根文件夹之相对路径,
    发布的层叠样式表之根文件夹之相对路径,
    所有应用场景之入口Stylus文件相对路径之公共起始部分,
    产出之一切层叠样式表文件之名称之共有前缀,
    sharedSourceRelativeGlobs,
    extraSourceGlobsToWatch,
} from '../../../00-任务之配置项集/针对构建所有须发布之层叠样式表之任务的'



const { join: 遵循POSIX标准拼接路径 } = 路径工具.posix



export default function mergeSharedTaskConfigWithOneSpecificTaskConfig(specificTaskConfig) {
    const {
        作为编译入口之Stylus文件之内层路径,
        编译Stylus最终产出之层叠样式表文件之名称之特征部分,
        shouldNotOutputUncompressedVersion,
        不必产出压缩过的层叠样式表和压缩过的Javascript文件,
        shouldDiscardMostCommentsEvenIfNotCompressCSS,
    } = specificTaskConfig

    if (shouldNotOutputUncompressedVersion && 不必产出压缩过的层叠样式表和压缩过的Javascript文件) {
        throw new RangeError(`Why don't we output anything for "${作为编译入口之Stylus文件之内层路径}"?`)
    }

    const 作为编译入口之Stylus文件之内层路径2 = `${作为编译入口之Stylus文件之内层路径}.styl`
    const outputFileBaseName = `${产出之一切层叠样式表文件之名称之共有前缀}${编译Stylus最终产出之层叠样式表文件之名称之特征部分}`

    const specificSourceRelativeGlobs = [
        遵循POSIX标准拼接路径(所有应用场景之入口Stylus文件相对路径之公共起始部分, 作为编译入口之Stylus文件之内层路径2),
    ]



    return {
        // descriptionOfCoreTask,
        descriptionOfInputsOfCoreTask: 作为编译入口之Stylus文件之内层路径2,

        sourceGlobs: {
            rootFolderPath: 所涉一切文件甄选描述符之公共根文件夹之相对路径,

            relativeGlobsSharedWithOtherTaskCycles: sharedSourceRelativeGlobs,
            relativeGlobsSpecificallyForThisTaskCycle: specificSourceRelativeGlobs,

            extraSourceGlobsToWatch,
        },

        outputFiles: {
            rootFolderPath: 发布的层叠样式表之根文件夹之相对路径,

            forSingleOrTwoOutputFiles: {
                fileBaseName: outputFileBaseName,
                fileExtWithoutDot: 'css',
            },
        },

        compressions: {
            shouldNotOutputUncompressedVersion,
            shouldNotOutputCompressedVersion: 不必产出压缩过的层叠样式表和压缩过的Javascript文件,
        },

        extraOptions: {
            shouldDiscardMostCommentsEvenIfNotCompressCSS,
        },
    }
}
