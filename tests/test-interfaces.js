/* eslint no-unused-vars: [ 2, { varsIgnorePattern: '.*ContentString(ButNotMinified)?$' } ] */
const chalk = require('chalk')

const { // All 6 interfaces are here.
    cssFileEntries,
    jsFileEntries,
    allFileEntriesKeyingByFileNames,

    syncGetContentStringOfOneFileEntry,
    syncGetContentStringOfDefaultCSS,
    syncGetContentStringOfDefaultTOCJavascript,
} = require('..') // require this module

const separationLine = '='.repeat(79)
const separationLine2 = `\n${separationLine}`







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




console.log(separationLine2)


console.log(chalk.rgb(234, 79, 219)(theDefaultCSSContentString.slice(0, 512)))
console.log('-'.repeat(51))
console.log(`${
    chalk.green(theDefaultCSSContentString.length)
} ${
    chalk.blue('bytes in total.')
}${
    theDefaultCSSContentString.length > 512 ? ' Has sliced down to [0, 512)' : ''
}`)


console.log(separationLine2)


console.log(chalk.rgb(192, 150, 87)(theDefaultAndOnlyTOCJavascriptContentString.slice(0, 512)))
console.log('-'.repeat(51))
console.log(`${
    chalk.green(theDefaultAndOnlyTOCJavascriptContentString.length)
} ${
    chalk.blue('bytes in total.')
}${
    theDefaultAndOnlyTOCJavascriptContentString.length > 512 ? ' Has sliced down to [0, 512)' : ''
}`)


console.log(separationLine2)


const allCSSFileNames = Object.keys(allFileEntriesKeyingByFileNames)
console.log(
    '\nAll available files in @wulechuan/css-stylus-markdown-themes:',
    allCSSFileNames
)
console.log('-'.repeat(51))
console.log(`${
    chalk.red(allCSSFileNames.length)
} ${
    chalk.blue('files in total.')
}`)
