/* eslint no-unused-vars: [ 2, { varsIgnorePattern: '.*ContentString(ButMinified)?$' } ] */

const { // All 5 interfaces are here.
    cssFileEntries,
    jsFileEntries,
    lookupDictionaryByFileNames,

    syncGetDefaultCSSContentString,
    syncReadContentOfOneFileEntry,
} = require('..') // require this module

console.log('-'.repeat(60))
console.log(
    'All available files in @wulechuan/css-stylus-markdown-themes:',
    Object.keys(lookupDictionaryByFileNames)
)
console.log('-'.repeat(60))

const theDefaultCSSContentString = syncGetDefaultCSSContentString()

const alsoTheDefaultCSSContentString = syncReadContentOfOneFileEntry(
    'wulechuan-styles-for-html-via-markdown.default--no-toc.min.css'
)

const typoraCSSContentString = syncReadContentOfOneFileEntry(
    'wulechuan-styles-for-html-via-markdown--typora.default.css'
)

const the7thThemeContentString = syncReadContentOfOneFileEntry(
    cssFileEntries[6]
)

const theOnlyJavascriptContentString = syncReadContentOfOneFileEntry(
    jsFileEntries[0]
)

const alsoTheOnlyJavascriptContentStringButMinified = syncReadContentOfOneFileEntry(
    'table-of-contents-behaviours.min.js'
)

console.log(theDefaultCSSContentString)
// console.log(alsoTheDefaultCSSContentString)
// console.log(typoraCSSContentString)
// console.log(the7thThemeContentString)
// console.log(theOnlyJavascriptContentString)
// console.log(alsoTheOnlyJavascriptContentStringButMinified)
