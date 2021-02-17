import 粉笔 from 'chalk'

import 路径工具 from 'path'

import { readFileSync, writeFileSync } from 'fs'
import 删除文件 from 'del'

import {
    mkdirpSync,
} from 'fs-extra'

import {
    parallel as 构建并行运转的一组Gulp任务,
} from 'gulp'


import createAnMarkDownToHTMLConverter from '@wulechuan/generate-html-via-markdown/core'


import {
    以文件名称为索引之所有文件之字典,
    获取某一已发布之文件之完整内容字符串,
} from '../../..'





const { join: 遵循POSIX标准拼接路径 } = 路径工具.posix


const exampleSourceMarkdonwFilesFolderPath  = './文档/文章排版与配色效果示例集/原始的-markdown-格式的文章'
const exampleSourceMarkdownFileNameEnUS     = 'theming-example-article.en-US.md'
const exampleSourceMarkdownFileNameZhHansCN = 'theming-example-article.zh-hans-CN.md'




const 本项目之根文件夹之绝对路径 = process.cwd().replace(/\\/g, '/')



const sourceMarkdownFileEnUS = 遵循POSIX标准拼接路径(
    exampleSourceMarkdonwFilesFolderPath,
    exampleSourceMarkdownFileNameEnUS
)

const sourceMarkdownFileZhHansCN = 遵循POSIX标准拼接路径(
    exampleSourceMarkdonwFilesFolderPath,
    exampleSourceMarkdownFileNameZhHansCN
)

const 将Markdown内容的字符串转换成HTML内容的字符串 = createAnMarkDownToHTMLConverter({
    themesPeerPackageAllDistFileEntriesKeyingByFileNames: 以文件名称为索引之所有文件之字典,
    syncGetContentStringOfOneFileOfThePeerModuleOfThemes: 获取某一已发布之文件之完整内容字符串,
})




export default function createTaskCycleForGeneratingHTMLsForExampleMarkdowns({
    欲采用的已发布之层叠样式表文件之名称: 须嵌入HTML文件的层叠样式表文件之文件名称,
    exampleOutputHTMLFilesFolderPath: 存放示例性HTML文件之文件夹之相对路径,
    exampleOutputHTMLFileNameZhHansCN: 汉语版HTML文件之文件名称,
    exampleOutputHTMLFileNameEnUS: 英国话版的HTML文件之文件名称,
    subPathsOfExtraHelperFilesToEmbed: 其他须一并嵌入HTML文件的Javascript文件之相对路径集,
}) {
    mkdirpSync(存放示例性HTML文件之文件夹之相对路径)

    const 其他须一并嵌入HTML文件的Javascript文件之绝对路径集 = 其他须一并嵌入HTML文件的Javascript文件之相对路径集.map(
        某相对路径 => 遵循POSIX标准拼接路径(本项目之根文件夹之绝对路径, 某相对路径)
    )

    let 首要须嵌入HTML文件的各文件之绝对路径集 = []

    if (须嵌入HTML文件的层叠样式表文件之文件名称) {
        首要须嵌入HTML文件的各文件之绝对路径集.push(
            遵循POSIX标准拼接路径(本项目之根文件夹之绝对路径, '源代码/发布的源代码/层叠样式表', 须嵌入HTML文件的层叠样式表文件之文件名称)
        )

        if (须嵌入HTML文件的层叠样式表文件之文件名称.match(/--with-toc\.(min\.)?css$/)) {
            首要须嵌入HTML文件的各文件之绝对路径集.push(
                遵循POSIX标准拼接路径(本项目之根文件夹之绝对路径, '源代码/发布的源代码/javascript', 'table-of-contents-and-back-to-top-anchor-behaviors.min.js')
            )
        }
    }


    首要须嵌入HTML文件的各文件之绝对路径集 = [
        ...首要须嵌入HTML文件的各文件之绝对路径集,
        ...其他须一并嵌入HTML文件的Javascript文件之绝对路径集,
    ]



    const 汉语版HTML文件之绝对路径 = 遵循POSIX标准拼接路径(
        本项目之根文件夹之绝对路径,
        存放示例性HTML文件之文件夹之相对路径,
        汉语版HTML文件之文件名称
    )

    const 英国话版HTML文件之绝对路径 = 遵循POSIX标准拼接路径(
        本项目之根文件夹之绝对路径,
        存放示例性HTML文件之文件夹之相对路径,
        英国话版的HTML文件之文件名称
    )

    const 一切可能存在的旧输出文件之绝对路径集 = [
        汉语版HTML文件之绝对路径,
        英国话版HTML文件之绝对路径,
    ]





    const manipulationsOverHTML = {
        shouldNotUseInternalCSSThemingFiles: !!须嵌入HTML文件的层叠样式表文件之文件名称,
        absolutePathsOfExtraFilesToEmbedIntoHTML: 首要须嵌入HTML文件的各文件之绝对路径集,
    }

    const 构建所有HTML文件 = 构建并行运转的一组Gulp任务(
        构建汉语版的HTML文件,
        构建英国话版的HTML文件
    )

    return {
        sourceGlobsToWatch: [
            sourceMarkdownFileEnUS,
            sourceMarkdownFileZhHansCN,
            '源代码/原始的源代码/用于设计文章排版与配色方案的代码/stylus/文章排版和配色样式之零件库/**/*.styl',
            ...其他须一并嵌入HTML文件的Javascript文件之绝对路径集,
        ],
        taskBodies: {
            cleanOldOutputs: 删除所有旧版HTML文件,
            buildNewOutputs: 构建所有HTML文件,
        },
    }



    function 删除所有旧版HTML文件() {
        console.log(`\n${粉笔.red('Deleting these files if exist')}:`)
        一切可能存在的旧输出文件之绝对路径集.forEach(filePath => console.log('    ', 粉笔.yellow(filePath)))
        return 删除文件(一切可能存在的旧输出文件之绝对路径集)
    }



    function 构建英国话版的HTML文件(通知Gulp该任务结束之回调函数) {
        writeFileSync(
            英国话版HTML文件之绝对路径,

            将Markdown内容的字符串转换成HTML内容的字符串(
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

        通知Gulp该任务结束之回调函数()
    }


    function 构建汉语版的HTML文件(通知Gulp该任务结束之回调函数) {
        writeFileSync(
            汉语版HTML文件之绝对路径,

            将Markdown内容的字符串转换成HTML内容的字符串(
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

        通知Gulp该任务结束之回调函数()
    }
}
