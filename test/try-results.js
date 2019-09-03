const { // All 5 interfaces are here.
    defaultCSSContentString,
    cssFileEntries,
    jsFileEntries,
    lookupDictionaryByFileNames,
    syncReadContentOfOneThemeEntry,
} = require('..') // require this module

console.log('-'.repeat(60))
console.log('All available files in @wulechuan/css-stylus-markdown-themes:', Object.keys(lookupDictionaryByFileNames))
console.log('-'.repeat(60))

const alsoTheDefaultCSSContentString = syncReadContentOfOneThemeEntry(
    'wulechuan-styles-for-html-via-markdown.default--no-toc.min.css'
)

const typoraCSSContentString = syncReadContentOfOneThemeEntry(
    'wulechuan-styles-for-html-via-markdown--typora.default.css'
)

const the7thThemeContentString = syncReadContentOfOneThemeEntry(
    cssFileEntries[6]
)

const theOnlyJavascriptContentString = syncReadContentOfOneThemeEntry(
    jsFileEntries[0]
)

const alsoTheOnlyJavascriptContentStringButMinified = syncReadContentOfOneThemeEntry(
    'table-of-contents-behaviours.min.js'
)

console.log(defaultCSSContentString)
// console.log(alsoTheDefaultCSSContentString)
// console.log(typoraCSSContentString)
// console.log(the7thThemeContentString)
// console.log(theOnlyJavascriptContentString)
// console.log(alsoTheOnlyJavascriptContentStringButMinified)
