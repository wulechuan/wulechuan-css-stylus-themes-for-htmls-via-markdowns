import chalk from 'chalk'

import {
    themeFileSuffixPlaceholderInTemplate,
    baseThemeNamePlaceholderInTemplate,
    highlightjsThemeNamePlaceholderInTemplate,
} from './__strings-common-placeholders'

export default {
    shouldSkipThisTemplate: false, // default value is `false`
    description: `Building CSS\n    senario: ${
        chalk.black.bgGreen('the generic version')
    },\n      theme: ${
        chalk.black.bgMagenta(themeFileSuffixPlaceholderInTemplate)
    }`,
    // outputFolderPath: '',
    outputFileBaseNameSuffix: `.${themeFileSuffixPlaceholderInTemplate}`,
    shouldOutputCompressedVersion: true, // default value is `true`
    shouldDiscardMostCommentsEvenIfNotCompressCSS: false,
    // sourceGlobsCommonSubPath: '',
    sourceRelativeGlobs: [
        '0-never-change/**/*.css',
        '1-seldom-change/**/*.css',
        `2-change-from-theme-to-theme/${baseThemeNamePlaceholderInTemplate}/**/*.css`,
        `2-change-from-theme-to-theme/highlightjs-themes/${highlightjsThemeNamePlaceholderInTemplate}.css`,
        '3-media-of-printing.css',
        '4-typora/**/*.css',
    ],
}
