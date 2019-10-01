import chalk from 'chalk'
import path from 'path'
import { readFileSync, writeFileSync } from 'fs'
import del from 'del'

import {
    mkdirpSync,
} from 'fs-extra'

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



const exampleSourceMarkdonwFilesFolderPath  = './docs/examples/source-markdown-files'
const exampleSourceMarkdownFileNameEnUS     = 'theming-example-article.en-US.md'
const exampleSourceMarkdownFileNameZhHansCN = 'theming-example-article.zh-hans-CN.md'




const thisModuleRootFolderPath = process.cwd().replace(/\\/g, '/')



const sourceMarkdownFileEnUS = joinPathPOSIX(
    exampleSourceMarkdonwFilesFolderPath,
    exampleSourceMarkdownFileNameEnUS
)

const sourceMarkdownFileZhHansCN = joinPathPOSIX(
    exampleSourceMarkdonwFilesFolderPath,
    exampleSourceMarkdownFileNameZhHansCN
)

const markdownToHTMLConverter = createAnMarkDownToHTMLConverter({
    themesPeerPackageAllDistFileEntriesKeyingByFileNames: allFileEntriesKeyingByFileNames,
    syncGetContentStringOfOneFileOfThePeerModuleOfThemes: syncGetContentStringOfOneFileEntry,
})




export default function createTaskCycleForGeneratingHTMLsForExampleMarkdowns({
    distCSSFileNameToUse,
    exampleOutputHTMLFilesFolderPath,
    exampleOutputHTMLFileNameEnUS,
    exampleOutputHTMLFileNameZhHansCN,
    subPathsOfExtraHelperFilesToEmbed,
}) {
    mkdirpSync(exampleOutputHTMLFilesFolderPath)

    const absolutePathsOfExtraJavascriptsToEmbed =subPathsOfExtraHelperFilesToEmbed.map(
        subPath => joinPathPOSIX(thisModuleRootFolderPath, subPath)
    )

    let absolutePathsOfExtraFilesToEmbedIntoHTML = []

    if (distCSSFileNameToUse) {
        absolutePathsOfExtraFilesToEmbedIntoHTML.push(
            joinPathPOSIX(thisModuleRootFolderPath, 'dist/css', distCSSFileNameToUse)
        )

        if (distCSSFileNameToUse.match(/--with-toc\.(min\.)?css$/)) {
            absolutePathsOfExtraFilesToEmbedIntoHTML.push(
                joinPathPOSIX(thisModuleRootFolderPath, 'dist/js', 'table-of-contents-and-back-to-top-anchor-behaviors.min.js')
            )
        }
    }


    absolutePathsOfExtraFilesToEmbedIntoHTML = [
        ...absolutePathsOfExtraFilesToEmbedIntoHTML,
        ...absolutePathsOfExtraJavascriptsToEmbed,
    ]



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
            'source/themes/stylus/article-style-parts/**/*.styl',
            ...absolutePathsOfExtraJavascriptsToEmbed,
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
