import chalk from 'chalk'
import path from 'path'
import { readFileSync, writeFileSync } from 'fs'
import del from 'del'


import {
    // series   as gulpBuildTaskSeries,
    parallel as gulpBuildParallelTasks,
} from 'gulp'


import createAnMarkDownToHTMLConverter from '@wulechuan/generate-html-via-markdown/core'


import {
    allFileEntriesKeyingByFileNames,
    syncGetContentStringOfOneFileEntry,
} from '../../..'




const joinPathPOSIX = path.posix.join



const exampleSourceMarkdonwFilesFolderPath = './docs/examples/source-markdown-files'
const exampleSourceMarkdownFileNameEnUS = 'default-theming-example.en-US.md'
const exampleSourceMarkdownFileNameZhHansCN = 'default-theming-example.zh-hans-CN.md'

const exampleOutputHTMLFileNameEnUS = 'default-theming-example.en-us.html'
const exampleOutputHTMLFileNameZhHansCN = 'default-theming-example.zh-hans-cn.html'






const sourceMarkdownFileEnUS = joinPathPOSIX(
    exampleSourceMarkdonwFilesFolderPath,
    exampleSourceMarkdownFileNameEnUS
)

const sourceMarkdownFileZhHansCN = joinPathPOSIX(
    exampleSourceMarkdonwFilesFolderPath,
    exampleSourceMarkdownFileNameZhHansCN
)

const markdownToHTMLConverter = createAnMarkDownToHTMLConverter({
    themesPeerModuleAllFileEntriesKeyingByFileNames: allFileEntriesKeyingByFileNames,
    syncGetContentStringOfOneFileOfThePeerModuleOfThemes: syncGetContentStringOfOneFileEntry,
})




export default function createTaskSettingsForGeneratingHTMLsForExampleMarkdowns({
    distCSSFilePathToUse,
    exampleOutputHTMLFilesFolderPath,
}) {
    const absolutePathsOfExtraFilesToEmbedIntoHTML = [
        joinPathPOSIX(process.env.PWD, distCSSFilePathToUse),
    ]

    if (distCSSFilePathToUse.match(/--with-toc\.(min\.)?css$/)) {
        absolutePathsOfExtraFilesToEmbedIntoHTML.push(
            joinPathPOSIX(process.env.PWD, './dist/js/table-of-contents-behaviours.min.js')
        )
    }



    const outputFilePathEnUS = joinPathPOSIX(
        exampleOutputHTMLFilesFolderPath,
        exampleOutputHTMLFileNameEnUS
    )

    const outputFilePathZhHansCN = joinPathPOSIX(
        exampleOutputHTMLFilesFolderPath,
        exampleOutputHTMLFileNameZhHansCN
    )

    const allPossibleOutputFilePaths = [
        outputFilePathEnUS,
        outputFilePathZhHansCN,
    ]





    const manipulationsOverHTML = {
        shouldNotUseInternalCSSThemingFiles: true,
        absolutePathsOfExtraFilesToEmbedIntoHTML,
    }

    const buildBothNewHTMLFiles = gulpBuildParallelTasks(
        generateHTMLOfEnUS,
        generateHTMLOfZhHansCN
    )

    return {
        sourceGlobsToWatch: [
            sourceMarkdownFileEnUS,
            sourceMarkdownFileZhHansCN,
        ],
        taskBodies: {
            cleanOldOutput: cleanBothOldHTMLFiles,
            buildNewOutput: buildBothNewHTMLFiles,
        },
    }



    function cleanBothOldHTMLFiles() {
        console.log(`\n${chalk.red('Deleting these files if exist')}:`)
        allPossibleOutputFilePaths.forEach(filePath => console.log('    ', chalk.yellow(filePath)))
        return del(allPossibleOutputFilePaths)
    }



    function generateHTMLOfEnUS(cb) {
        writeFileSync(
            outputFilePathEnUS,

            markdownToHTMLConverter(
                readFileSync(sourceMarkdownFileEnUS).toString(),

                {
                    shouldLogVerbosely: false,

                    manipulationsOverHTML: {
                        ...manipulationsOverHTML,

                        htmlTagLanguage: 'en-US',
                    },
                }
            )
        )

        cb()
    }


    function generateHTMLOfZhHansCN(cb) {
        writeFileSync(
            outputFilePathZhHansCN,

            markdownToHTMLConverter(
                readFileSync(sourceMarkdownFileZhHansCN).toString(),

                {
                    shouldLogVerbosely: false,

                    sundries: {
                        shouldConsoleLogsInChinese: true,
                    },

                    manipulationsOverHTML,
                }
            )
        )

        cb()
    }
}
