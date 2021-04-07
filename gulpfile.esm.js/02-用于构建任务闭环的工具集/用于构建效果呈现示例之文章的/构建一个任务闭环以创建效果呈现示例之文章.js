import 粉笔 from 'chalk'

import 路径工具 from 'path'

import { readFileSync, writeFileSync } from 'fs'
import 删除文件 from 'del'

import {
    mkdirpSync,
} from 'fs-extra'

import {
    parallel as 构建并行运转以下Gulp任务之总任务,
} from 'gulp'


import 构建一个用于将Markdown内容字符串转换为HTML字符串的转换器 from '@wulechuan/generate-html-via-markdown/源代码/转换器之构建器'


import {
    以文件名称为索引之所有文件简易描述项之字典,
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

const 将Markdown内容字符串转换为HTML内容的转换器 = 构建一个用于将Markdown内容字符串转换为HTML字符串的转换器({
    peer依赖包提供用以获取某特定文件之完整内容字符串之函数: 获取某一已发布之文件之完整内容字符串,
    peer依赖包提供的以文件名称为索引之所有文件简易描述项之字典: 以文件名称为索引之所有文件简易描述项之字典,
    不应采纳本工具之源代码之缓存版本以应对本工具研发阶段之要求: false,
    应输出MarkdownIt生态工具集之原始产出以便验证之而非输出正式内容: false,
})





export default function 构建一个任务闭环以将一Markdown文件转换成HTML文件({
    欲采用的已发布之层叠样式表文件之名称: 须嵌入HTML文件的层叠样式表文件之文件名称,
    产出诸HTML文件之存放文件夹之相对路径: 存放示例性HTML文件之文件夹之相对路径,
    自汉语文章产出之HTML文件之名称: 汉语版HTML文件之文件名称,
    自英国话文章产出之HTML文件之名称: 英国话版的HTML文件之文件名称,
    须额外嵌入各产出之HTML文件之文件之相对路径之列表: 其他须一并嵌入HTML文件的Javascript文件之相对路径集,
}) {
    mkdirpSync(存放示例性HTML文件之文件夹之相对路径)

    const 其他须一并嵌入HTML文件的Javascript文件之绝对路径集 = 其他须一并嵌入HTML文件的Javascript文件之相对路径集.map(
        某相对路径 => 遵循POSIX标准拼接路径(本项目之根文件夹之绝对路径, 某相对路径)
    )

    let 不应采用任何由本工具内建之层叠样式表 = false
    let 须要须嵌入HTML文件的各文件之绝对路径集 = []

    if (须嵌入HTML文件的层叠样式表文件之文件名称) {
        不应采用任何由本工具内建之层叠样式表 = true

        须要须嵌入HTML文件的各文件之绝对路径集.push(
            遵循POSIX标准拼接路径(
                本项目之根文件夹之绝对路径,
                '源代码/发布的源代码/文章排版与配色方案集/层叠样式表',
                须嵌入HTML文件的层叠样式表文件之文件名称
            )
        )

        if (须嵌入HTML文件的层叠样式表文件之文件名称.match(/--with-toc\.(min\.)?css$/)) {
            须要须嵌入HTML文件的各文件之绝对路径集.push(
                遵循POSIX标准拼接路径(
                    本项目之根文件夹之绝对路径,
                    '源代码/发布的源代码/文章排版与配色方案集/javascript',
                    'table-of-contents-and-back-to-top-anchor-behaviors.min.js'
                )
            )
        }
    }



    须要须嵌入HTML文件的各文件之绝对路径集 = [
        ...须要须嵌入HTML文件的各文件之绝对路径集,
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





    const 构建所有HTML文件 = 构建并行运转以下Gulp任务之总任务(
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



    function 构建汉语版的HTML文件(通知Gulp该任务结束之回调函数) {
        writeFileSync(
            汉语版HTML文件之绝对路径,

            将Markdown内容字符串转换为HTML内容的转换器(
                readFileSync(sourceMarkdownFileZhHansCN).toString(),

                {
                    须在控制台打印详尽细节: false,

                    对HTML做进一步处理之阶段: {
                        不应采用任何由本工具内建之层叠样式表,
                        凡内容须注入产出之HTML中之所有外来文件: {
                            应禁止采用Require语句对这些文件之缓存内容以确保计算机进程反复读取各文件时恒取用各文件最新之内容全文: true,
                            依次给出之外来文件之绝对路径序列: 须要须嵌入HTML文件的各文件之绝对路径集,
                        },
                    },

                    杂项: {
                        控制台打印信息须改用英国话: false,
                    },
                }
            )
        )

        通知Gulp该任务结束之回调函数()
    }



    function 构建英国话版的HTML文件(通知Gulp该任务结束之回调函数) {
        writeFileSync(
            英国话版HTML文件之绝对路径,

            将Markdown内容字符串转换为HTML内容的转换器(
                readFileSync(sourceMarkdownFileEnUS).toString(),

                {
                    须在控制台打印详尽细节: false,

                    对HTML做进一步处理之阶段: {
                        不应采用任何由本工具内建之层叠样式表,
                        产出之HTML文件之HTML标签之语言属性之取值: 'en-US',
                        凡内容须注入产出之HTML中之所有外来文件: {
                            应禁止采用Require语句对这些文件之缓存内容以确保计算机进程反复读取各文件时恒取用各文件最新之内容全文: true,
                            依次给出之外来文件之绝对路径序列: 须要须嵌入HTML文件的各文件之绝对路径集,
                        },
                    },

                    杂项: {
                        控制台打印信息须改用英国话: true,
                    },
                }
            )
        )

        通知Gulp该任务结束之回调函数()
    }
}
