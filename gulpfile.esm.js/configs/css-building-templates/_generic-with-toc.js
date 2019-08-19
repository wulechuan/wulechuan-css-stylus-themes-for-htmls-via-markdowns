import chalk from 'chalk'

import {
    themeFileSuffixPlaceholderInTemplate,
    baseThemeNamePlaceholderInTemplate,
    highlightjsThemeNamePlaceholderInTemplate,
} from './__strings-common-placeholders'

export default {
    shouldSkipThisTemplate: false, // default value is `false`
    description: `Building CSS\n    senario: ${
        chalk.black.bgGreen('the generic version (with TOC)')
    },\n      theme: ${
        chalk.black.bgMagenta(themeFileSuffixPlaceholderInTemplate)
    }`,
    // outputFolderPath: '',
    outputFileBaseNameSuffix: `.${themeFileSuffixPlaceholderInTemplate}--with-toc`,
    shouldOutputCompressedVersion: true, // default value is `true`
    shouldDiscardMostCommentsEvenIfNotCompressCSS: false,
    // sourceGlobsCommonSubPath: '',
    sourceRelativeGlobs: [
        '0-titles-for-output-css/_default-title.css',
        '1-never-change/**/*.css',
        '2-seldom-change/**/*.css',
        '3-optional/table-of-contents--markdown-it-toc-done-write/**/*.css',
        `4-change-from-theme-to-theme/base-themes/${baseThemeNamePlaceholderInTemplate}/**/*.css`,
        `4-change-from-theme-to-theme/highlightjs-themes/${highlightjsThemeNamePlaceholderInTemplate}.css`,
        '9-media-of-printing.css',
    ],
}