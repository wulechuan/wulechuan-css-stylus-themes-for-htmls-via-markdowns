const path = require('path')

const {
    readFileSync,
    writeFileSync,
    existsSync,
    mkdirSync,
} = require('fs')

const joinPathPOSIX = path.posix.join

const shouldTestSingle = !!process.env.testSingle && !!process.env.testSingle.match(/^true\s*$/)
const shouldOutputDefaultThemingExampleToDocsFolder = !shouldTestSingle &&
    !!process.env.updateExampleDocs &&
    !!process.env.updateExampleDocs.match(/^true\s*$/)

let outputFilePathEnUS
let outputFilePathZhHansCN

if (shouldOutputDefaultThemingExampleToDocsFolder) {
    const realExamplesOutputFolderPath = './docs/examples/rendered/html'

    outputFilePathEnUS =     joinPathPOSIX(
        realExamplesOutputFolderPath,
        'default-theming-example.en-us.html'
    )

    outputFilePathZhHansCN = joinPathPOSIX(
        realExamplesOutputFolderPath,
        'default-theming-example.zh-hans-cn.html'
    )
} else {
    const testOutputFolderPath = './test/output'

    if (!existsSync(testOutputFolderPath)) {
        mkdirSync(testOutputFolderPath)
    }

    outputFilePathEnUS =     joinPathPOSIX(
        testOutputFolderPath,
        'theming-example.en-us.html'
    )

    outputFilePathZhHansCN = joinPathPOSIX(
        testOutputFolderPath,
        'theming-example.zh-hans-cn.html'
    )
}

const markdownToHTMLConverter = require('@wulechuan/generate-html-via-markdown')


const manipulationsOverHTML =  {
    shouldNotUseInternalCSSThemingFiles: true,
    // moduleCSSFileNameOfDefaultTheme: 'wulechuan-styles-for-html-via-markdown.default--no-toc.min.css',
    // moduleCSSFileNameOfDefaultThemeWithTOC: 'wulechuan-styles-for-html-via-markdown.default--with-toc.min.css',
    absolutePathsOfExtraFilesToEmbedIntoHTML: [
        joinPathPOSIX(process.env.PWD, './dist/css/wulechuan-styles-for-html-via-markdown.default--with-toc.min.css'),
        joinPathPOSIX(process.env.PWD, './dist/js/table-of-contents-behaviours.min.js'),
    ],
}




if (!shouldTestSingle) { // eslint-disable-line no-constant-condition
    const contentOfExampleMarkdownDocEnUS = readFileSync(joinPathPOSIX(
        './docs/examples/source-markdown-files',
        'default-theming-example.en-US.md'
    )).toString()

    writeFileSync(
        outputFilePathEnUS,
        markdownToHTMLConverter(contentOfExampleMarkdownDocEnUS, {
            shouldLogVerbosely: true,

            manipulationsOverHTML: {
                ...manipulationsOverHTML,

                htmlTagLanguage: 'en-US',
            },
        })
    )
}

if (true) { // eslint-disable-line no-constant-condition
    const contentOfExampleMarkdownDocZhHansCN = readFileSync(joinPathPOSIX(
        './docs/examples/source-markdown-files',
        'default-theming-example.zh-hans-CN.md'
    )).toString()

    writeFileSync(
        outputFilePathZhHansCN,
        markdownToHTMLConverter(contentOfExampleMarkdownDocZhHansCN, {
            // shouldLogVerbosely: true,

            sundries: {
                shouldConsoleLogsInChinese: true,
            },

            manipulationsOverHTML,
        })
    )
}
