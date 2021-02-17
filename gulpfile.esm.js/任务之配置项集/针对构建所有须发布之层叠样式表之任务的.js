import {
    发布的层叠样式表之根文件夹之相对路径,
} from '../../本项目之全局配置项集'

export const sourceGlobsRootFolderPath        = './源代码/原始的源代码/用于设计文章排版与配色方案的代码/stylus'
export const outputFolderPath                 = 发布的层叠样式表之根文件夹之相对路径
export const specificSourceGlobsCommonSubPath = '逐个应用场景选用样式零件并装配成完整样式表'
export const outputFileBaseNameCommonPrefix   = 'wulechuan-styles-for-html-via-markdown'

export const sharedSourceRelativeGlobs = []
export const extraSourceGlobsToWatch = []

export const specificTaskConfigsOfAllThemes = [
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: '_default/non-wrapped--has-toc',
        outputCSSFileBaseName: '.default--with-toc',
    },
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: '_default/non-wrapped--no-toc',
        outputCSSFileBaseName: '.default--no-toc',
    },
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: '_default/all-wrapped--has-toc',
        outputCSSFileBaseName: '.default--wrapped--with-toc',
    },
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: '_default/all-wrapped--no-toc',
        outputCSSFileBaseName: '.default--wrapped--no-toc',
    },

    // ----------------------------------------------------

    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: '_generic/_default-dark-colored-article-theme/non-wrapped--has-toc',
        outputCSSFileBaseName: '.default-dark--with-toc',
    },
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: '_generic/_default-dark-colored-article-theme/non-wrapped--no-toc',
        outputCSSFileBaseName: '.default-dark--no-toc',
    },
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: '_generic/_default-dark-colored-article-theme/all-wrapped--has-toc',
        outputCSSFileBaseName: '.default-dark--wrapped--with-toc',
    },
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: '_generic/_default-dark-colored-article-theme/all-wrapped--no-toc',
        outputCSSFileBaseName: '.default-dark--wrapped--no-toc',
    },

    // ----------------------------------------------------

    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: '_generic/_default-light-colored-article-theme--atom-one-dark/non-wrapped--has-toc',
        outputCSSFileBaseName: '.generic-default-light--atom-one-dark--with-toc',
    },
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: '_generic/_default-light-colored-article-theme--atom-one-dark/non-wrapped--no-toc',
        outputCSSFileBaseName: '.generic-default-light--atom-one-dark--no-toc',
    },
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: '_generic/_default-light-colored-article-theme--atom-one-dark/all-wrapped--has-toc',
        outputCSSFileBaseName: '.generic-default-light--atom-one-dark--wrapped--with-toc',
    },
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: '_generic/_default-light-colored-article-theme--atom-one-dark/all-wrapped--no-toc',
        outputCSSFileBaseName: '.generic-default-light--atom-one-dark--wrapped--no-toc',
    },

    // ----------------------------------------------------

    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: 'firefox-addon/firefox-addon-_default',
        outputCSSFileBaseName: '--firefox-addon.default',
        shouldNotOutputCompressedVersion: true,
    },
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: 'typora/typora-_default',
        outputCSSFileBaseName: '--typora.default',
        shouldNotOutputCompressedVersion: true,
    },
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: 'vscode/vscode-_default',
        outputCSSFileBaseName: '--vscode.default',
        shouldNotOutputUncompressedVersion: true,
    },
]
