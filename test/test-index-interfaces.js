/* eslint no-unused-vars: [ 2, { varsIgnorePattern: '.*ContentString(ButNotMinified)?$' } ] */

const { // All 6 interfaces are here.
    cssFileEntries,
    jsFileEntries,
    allFileEntriesKeyingByFileNames,

    syncGetContentStringOfOneFileEntry,
    syncGetContentStringOfDefaultCSS,
    syncGetContentStringOfDefaultTOCJavascript,
} = require('@wulechuan/css-stylus-markdown-themes') // require this module

const separationLine = '-'.repeat(79)
const separationLine2 = `\n${separationLine}\n`




console.log(separationLine2)



const theDefaultCSSContentString = syncGetContentStringOfDefaultCSS()

const alsoTheDefaultCSSContentString = syncGetContentStringOfOneFileEntry(
    'wulechuan-styles-for-html-via-markdown.default--no-toc.min.css'
)

const typoraCSSContentString = syncGetContentStringOfOneFileEntry(
    'wulechuan-styles-for-html-via-markdown--typora.default.css'
)

const the7thThemeContentString = syncGetContentStringOfOneFileEntry(
    cssFileEntries[6]
)

const theDefaultAndOnlyTOCJavascriptContentString = syncGetContentStringOfDefaultTOCJavascript()

const alsoTheOnlyTOCJavascriptContentString = syncGetContentStringOfOneFileEntry(
    'table-of-contents-behaviours.min.js'
)

const stillTheOnlyTOCJavascriptContentStringButNotMinified = syncGetContentStringOfOneFileEntry(
    jsFileEntries[0]
)



console.log(theDefaultCSSContentString)
// console.log(alsoTheDefaultCSSContentString)
// console.log(typoraCSSContentString)
// console.log(the7thThemeContentString)

console.log(separationLine2)

console.log(theDefaultAndOnlyTOCJavascriptContentString)
// console.log(alsoTheOnlyTOCJavascriptContentString)
// console.log(stillTheOnlyTOCJavascriptContentStringButNonMinified)




console.log(separationLine2)
console.log(
    'All available files in @wulechuan/css-stylus-markdown-themes:',
    Object.keys(allFileEntriesKeyingByFileNames)
)
console.log(separationLine2)

