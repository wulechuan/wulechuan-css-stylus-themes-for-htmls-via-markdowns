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


const thisModuleRootFolderPath = process.cwd()



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




export default function createTaskCycleForGeneratingHTMLsForExampleMarkdowns({
    distCSSFileNameToUse,
    exampleOutputHTMLFilesFolderPath,
}) {
    const absolutePathOfJavascriptForUpdatingHTMLTitle = joinPathPOSIX(
        thisModuleRootFolderPath,
        'docs/examples/',
        'auto-update-html-document-title.js'
    )

    const absolutePathsOfExtraFilesToEmbedIntoHTML = []

    if (distCSSFileNameToUse) {
        absolutePathsOfExtraFilesToEmbedIntoHTML.push(
            joinPathPOSIX(thisModuleRootFolderPath, 'dist/css', distCSSFileNameToUse)
        )

        if (distCSSFileNameToUse.match(/--with-toc\.(min\.)?css$/)) {
            absolutePathsOfExtraFilesToEmbedIntoHTML.push(
                joinPathPOSIX(thisModuleRootFolderPath, 'dist/js', 'table-of-contents-behaviours.min.js')
            )
        }
    }


    absolutePathsOfExtraFilesToEmbedIntoHTML.push(absolutePathOfJavascriptForUpdatingHTMLTitle)



    const outputFilePathEnUS = joinPathPOSIX(
        thisModuleRootFolderPath,
        exampleOutputHTMLFilesFolderPath,
        exampleOutputHTMLFileNameEnUS
    )

    const outputFilePathZhHansCN = joinPathPOSIX(
        thisModuleRootFolderPath,
        exampleOutputHTMLFilesFolderPath,
        exampleOutputHTMLFileNameZhHansCN
    )

    const allPossibleOutputFilePaths = [
        outputFilePathEnUS,
        outputFilePathZhHansCN,
    ]





    const manipulationsOverHTML = {
        shouldNotUseInternalCSSThemingFiles: !!distCSSFileNameToUse,
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
            'source/themes/stylus/markdown-style-parts/**/*.styl',
            absolutePathOfJavascriptForUpdatingHTMLTitle,
        ],
        taskBodies: {
            cleanOldOutputs: cleanBothOldHTMLFiles,
            buildNewOutputs: buildBothNewHTMLFiles,
        },
    }



    function cleanBothOldHTMLFiles() {
        console.log(`\n${chalk.red('Deleting these files if exist')}:`)
        allPossibleOutputFilePaths.forEach(filePath => console.log('    ', chalk.yellow(filePath)))
        return del(allPossibleOutputFilePaths)
    }



    function generateHTMLOfEnUS(cb) {
        // console.log('reading', sourceMarkdownFileEnUS)
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

                    sundries: {
                        // shouldDisableCachingForInternalThemeFiles: true,
                        shouldDisableCachingForExternalFiles: true,
                    },
                }
            )
        )

        cb()
    }


    function generateHTMLOfZhHansCN(cb) {
        // console.log('reading', sourceMarkdownFileZhHansCN)
        writeFileSync(
            outputFilePathZhHansCN,

            markdownToHTMLConverter(
                readFileSync(sourceMarkdownFileZhHansCN).toString(),

                {
                    shouldLogVerbosely: false,

                    sundries: {
                        shouldConsoleLogsInChinese: true,
                        // shouldDisableCachingForInternalThemeFiles: true,
                        shouldDisableCachingForExternalFiles: true,
                    },

                    manipulationsOverHTML,
                }
            )
        )

        cb()
    }
}
