import {
    发布的配套Javascript之根文件夹之相对路径,
} from '../../../../本项目之全局配置项集'

import 构建一个任务闭环用以复制一组Javascript文件
    from '../../较为通用的/构建一个任务闭环用以复制一组-javascript-文件'

export default 构建一个任务闭环用以复制一组Javascript文件({
    descriptionOfInputsOfCoreTask: '源代码/原始的源代码/用于设计文章排版与配色方案的代码/js/.eslint.js',

    sourceGlobs: {
        rootFolderPath: './源代码/原始的源代码/用于设计文章排版与配色方案的代码/js',

        relativeGlobsSpecificallyForThisTaskCycle: [
            '.eslintrc.js',
        ],
    },

    outputFiles: {
        rootFolderPath: 发布的配套Javascript之根文件夹之相对路径,

        forSingleOrTwoOutputFiles: {
            fileBaseName: '.eslintrc',
            fileExtWithoutDot: 'js',
        },
    },

    compressions: {
        shouldNotOutputCompressedVersion: true,
    },
})
