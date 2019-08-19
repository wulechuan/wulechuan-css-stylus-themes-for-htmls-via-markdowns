import chalk from 'chalk'

import {
    themeFileSuffixPlaceholderInTemplate,
    baseThemeNamePlaceholderInTemplate,
    highlightjsThemeNamePlaceholderInTemplate,
} from './__strings-common-placeholders'

export default {
    shouldSkipThisTemplate: false,
    description: `Building CSS\n    senario: ${
        chalk.black.bgGreen('specifically for typora')
    },\n      theme: ${
        chalk.black.bgMagenta(themeFileSuffixPlaceholderInTemplate)
    }`,
    // outputFolderPath: '',
    outputFileBaseNameSuffix: `--typora.${themeFileSuffixPlaceholderInTemplate}`,
    shouldOutputCompressedVersion: false,
    shouldDiscardMostCommentsEvenIfNotCompressCSS: true,
    // sourceGlobsCommonSubPath: '',
    sourceRelativeGlobs: [
        '0-titles-for-output-css/_default-title.css',
        '1-never-change/**/*.css',
        '2-seldom-change/**/*.css',
        '3-optional/typora/**/*.css',
        `4-change-from-theme-to-theme/base-themes/${baseThemeNamePlaceholderInTemplate}/**/*.css`,
        `4-change-from-theme-to-theme/highlightjs-themes/${highlightjsThemeNamePlaceholderInTemplate}.css`,
        '9-media-of-printing.css',
    ],
}
