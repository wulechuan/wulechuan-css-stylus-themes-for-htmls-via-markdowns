const {
    发布的配套Javascript之根文件夹之相对路径,
} = require('../../本项目之全局配置项集')

module.exports = [
    {
        descriptionOfInputsOfCoreTask: '源代码/原始的源代码/用于设计文章排版与配色方案的代码/js/table-of-contents-and-back-to-top-anchor-behaviors.js',

        sourceGlobs: {
            rootFolderPath: './源代码/原始的源代码/用于设计文章排版与配色方案的代码/js',

            // relativeGlobsSharedWithOtherTaskCycles: [],
            relativeGlobsSpecificallyForThisTaskCycle: [
                'table-of-contents-and-back-to-top-anchor-behaviors.js',
            ],
            // extraSourceGlobsToWatch: [],
        },

        outputFiles: {
            rootFolderPath: 发布的配套Javascript之根文件夹之相对路径,

            forSingleOrTwoOutputFiles: {
                fileBaseName: 'table-of-contents-and-back-to-top-anchor-behaviors',
                fileExtWithoutDot: 'js',
            },
        },

        compressions: {},
    },
]
