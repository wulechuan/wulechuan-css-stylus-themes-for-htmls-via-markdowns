import {
    cssDistFolderRelativePath,
} from '../../global-config'

export const sourceGlobsRootFolderPath        = './source/themes/stylus'
export const outputFolderPath                 = cssDistFolderRelativePath
export const specificSourceGlobsCommonSubPath = 'markdown-style-scenarios'
export const outputFileBaseNameCommonPrefix   = 'wulechuan-styles-for-html-via-markdown'

export const sharedSourceRelativeGlobs = []
export const extraSourceGlobsToWatch = []

export const specificTaskConfigsOfAllThemes = [
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: '_default/non-wrapped--has-toc',
        outputCSSFileBaseName: '.default--with-toc',
        shouldNotOutputUncompressedVersion: false,
        shouldNotOutputCompressedVersion: false,
        // shouldDiscardMostCommentsEvenIfNotCompressCSS: false,
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
