const path = require('path')
const { readFileSync, writeFileSync } = require('fs')

const {
    allFileEntriesKeyingByFileNames,
    syncGetContentStringOfOneFileEntry,
} = require('..')

const markdownToHTMLConverter = require('@wulechuan/generate-html-via-markdown/core')({
    themesPeerModuleAllFileEntriesKeyingByFileNames: allFileEntriesKeyingByFileNames,
    syncGetContentStringOfOneFileOfThePeerModuleOfThemes: syncGetContentStringOfOneFileEntry,
})




const exampleSourceMarkdonwFilesFolderPath = './docs/examples/source-markdown-files'
const exampleSourceMarkdownFileNameEnUS = 'default-theming-example.en-US.md'
const exampleSourceMarkdownFileNameZhHansCN = 'default-theming-example.zh-hans-CN.md'

const exampleOutputHTMLFilesFolderPath = './test/output'
const exampleOutputHTMLFileNameEnUS = 'default-theming-example.en-us.html'
const exampleOutputHTMLFileNameZhHansCN = 'default-theming-example.zh-hans-cn.html'




const joinPathPOSIX = path.posix.join




const shouldTestSingle = !!process.env.testSingle && !!process.env.testSingle.match(/^true\s*$/)

const manipulationsOverHTML = {
    shouldNotUseInternalCSSThemingFiles: true,
    absolutePathsOfExtraFilesToEmbedIntoHTML: [
        joinPathPOSIX(process.env.PWD, './dist/css/wulechuan-styles-for-html-via-markdown.default--with-toc.min.css'),
        joinPathPOSIX(process.env.PWD, './dist/js/table-of-contents-behaviours.min.js'),
    ],
}





if (!shouldTestSingle) {
    writeFileSync(
        joinPathPOSIX(
            exampleOutputHTMLFilesFolderPath,
            exampleOutputHTMLFileNameEnUS
        ),

        markdownToHTMLConverter(
            readFileSync(joinPathPOSIX(
                exampleSourceMarkdonwFilesFolderPath,
                exampleSourceMarkdownFileNameEnUS
            )).toString(),

            {
                shouldLogVerbosely: shouldTestSingle,

                manipulationsOverHTML: {
                    ...manipulationsOverHTML,

                    htmlTagLanguage: 'en-US',
                },
            }
        )
    )
}


if (true) { // eslint-disable-line no-constant-condition
    writeFileSync(
        joinPathPOSIX(
            exampleOutputHTMLFilesFolderPath,
            exampleOutputHTMLFileNameZhHansCN
        ),

        markdownToHTMLConverter(
            readFileSync(joinPathPOSIX(
                exampleSourceMarkdonwFilesFolderPath,
                exampleSourceMarkdownFileNameZhHansCN
            )).toString(),

            {
                shouldLogVerbosely: shouldTestSingle,

                sundries: {
                    shouldConsoleLogsInChinese: true,
                },

                manipulationsOverHTML,
            }
        )
    )
}
