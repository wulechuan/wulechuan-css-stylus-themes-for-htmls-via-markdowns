/// <reference path="./index.d.ts" />

// 【文件甄选描述符】即外国话所谓 “ glob ”、“ globs ”。
const 甄选描述符之工具 = require('globby')
const 路径工具 = require('path')
const 文件系统工具 = require('fs')
const 粉笔 = require('chalk')

const {
    发布的层叠样式表之根文件夹之相对路径,
    发布的配套Javascript之根文件夹之相对路径,
} = require('../../../本项目之全局配置项集')

const 本项目官方选定之所谓默认的Javascript文件之名称之基本名 = 'table-of-contents-and-back-to-top-anchor-behaviors'
const 本项目所谓默认的Javascript文件之未压缩版之文件完整名称 = `${本项目官方选定之所谓默认的Javascript文件之名称之基本名}.js`
const 本项目所谓默认的Javascript文件之已压缩版之文件完整名称 = `${本项目官方选定之所谓默认的Javascript文件之名称之基本名}.min.js`

const { basename: 从文件路径中提取文件名称 } = 路径工具
const { join: 遵循POSIX标准拼接路径 } = 路径工具.posix

const { sync: 根据文件甄选描述符扫描文件系统并求出所有匹配的文件之绝对路径 } = 甄选描述符之工具

const { readFileSync: 非回调式读取文件内容 } = 文件系统工具





const 本项目之根路径 = 路径工具.dirname(require.resolve('../../../package.json'))

const 用于将层叠样式表文件与Javascript文件进行配对关联的配置项集 = require('./令发布的层叠样式表与-javascript-文件建立关联')


const 所有已发布的层叠样式表文件之甄选描述符 = 遵循POSIX标准拼接路径(本项目之根路径, 发布的层叠样式表之根文件夹之相对路径, '**/*.css').replace(/\\/g, '/')
const 所有已发布的Javascript文件之甄选描述符 = 遵循POSIX标准拼接路径(本项目之根路径,  发布的配套Javascript之根文件夹之相对路径, '**/*.js' ).replace(/\\/g, '/')

const 所有已发布之层叠样式表文件之绝对路径 = 根据文件甄选描述符扫描文件系统并求出所有匹配的文件之绝对路径(所有已发布的层叠样式表文件之甄选描述符)
const 所有已发布之Javascript文件之绝对路径 = 根据文件甄选描述符扫描文件系统并求出所有匹配的文件之绝对路径(所有已发布的Javascript文件之甄选描述符)

const 所有已发布之层叠样式表文件之简易描述项之集 = 所有已发布之层叠样式表文件之绝对路径.map(根据文件路径构建文件简易描述项)
const 所有已发布之Javascript文件之简易描述项之集 = 所有已发布之Javascript文件之绝对路径.map(根据文件路径构建文件简易描述项)

所有已发布之层叠样式表文件之简易描述项之集.forEach(某层叠样式表之文件描述项 => {
    return 依照配置将一组Javascript与某层叠样式表进行配对关联(
        某层叠样式表之文件描述项,
        用于将层叠样式表文件与Javascript文件进行配对关联的配置项集
    )
})

const 以文件名称为索引之所有文件简易描述项之字典 = 所有已发布之层叠样式表文件之简易描述项之集.concat(
    所有已发布之Javascript文件之简易描述项之集
).reduce((汇总字典, 某文件之简易描述项) => {
    汇总字典[某文件之简易描述项.文件名称] = 某文件之简易描述项
    return 汇总字典
}, {})





// console.log('-'.repeat(60))
// console.log(本项目之根路径)
// console.log(所有已发布之层叠样式表文件之简易描述项之集)
// console.log(所有已发布之Javascript文件之简易描述项之集)
// console.log('-'.repeat(60))





module.exports = {
    所有已发布之层叠样式表文件之简易描述项之集,
    所有已发布之Javascript文件之简易描述项之集,

    以文件名称为索引之所有文件简易描述项之字典,

    // 已因命名不够明确而废弃（仍可用但不推荐）。请改用 “ 以文件名称为索引之所有文件简易描述项之字典 ”。
    以文件名称为索引之所有文件之字典: 以文件名称为索引之所有文件简易描述项之字典,

    获取某一已发布之文件之完整内容字符串,
    获取本项目官方选定之所谓默认层叠样式表之完整内容字符串,
    获取本项目官方选定之所谓默认Javascript之完整内容字符串,

    // 以下为陈旧的采用外国字命名之诸接口。

    cssFileEntries: 所有已发布之层叠样式表文件之简易描述项之集,
    jsFileEntries: 所有已发布之Javascript文件之简易描述项之集,

    allFileEntriesKeyingByFileNames: 以文件名称为索引之所有文件简易描述项之字典,

    syncGetContentStringOfOneFileEntry: 获取某一已发布之文件之完整内容字符串,
    syncGetContentStringOfDefaultCSS: 获取本项目官方选定之所谓默认层叠样式表之完整内容字符串,
    syncGetContentStringOfDefaultTOCJavascript: 获取本项目官方选定之所谓默认Javascript之完整内容字符串,
}





function 根据文件路径构建文件简易描述项(某文件之绝对路径) {
    const 文件名称 = 从文件路径中提取文件名称(某文件之绝对路径)
    const 文件之相对路径 = 路径工具.relative(本项目之根路径, 某文件之绝对路径)
    return {
        文件名称,
        文件之相对路径,
        文件之绝对路径: 某文件之绝对路径,
        文件内容全文: '',

        // 以下为陈旧的采用外国字命名之诸接口。

        fileName: 文件名称,
        fileRelativePath: 文件之相对路径,
        fileAbsolutePath: 某文件之绝对路径,
        fileContent: '',
    }
}





function 依照配置将一组Javascript与某层叠样式表进行配对关联(某层叠样式表之文件描述项, 将Javascript与层叠样式表文件配对关联的配置集) {
    const { 文件名称: 层叠样式表文件之名称 } = 某层叠样式表之文件描述项

    if (!层叠样式表文件之名称.match(/\.css$/) || 某层叠样式表之文件描述项.所有应与之配套使用之Javascript之文件名称 || 某层叠样式表之文件描述项.associatedJavascriptFileNames) {
        return
    }

    const 所有应与该叠样式表配套使用的Javascript之文件名称 = 将Javascript与层叠样式表文件配对关联的配置集.reduce(
        (搜集好的应关联的Javascript文件之总集, 定义关联的配置项) => {
            if (定义关联的配置项.用于匹配层叠样式表文件名称的正则表达式集.some(用于匹配文件名称的某正则表达式 => {
                return 用于匹配文件名称的某正则表达式.test(层叠样式表文件之名称)
            })) {
                搜集好的应关联的Javascript文件之总集 = [
                    ...搜集好的应关联的Javascript文件之总集,
                    ...定义关联的配置项.凡匹配之层叠样式表均应该关联的Javascript文件集,
                ]
            }

            return 搜集好的应关联的Javascript文件之总集
        },

        [] // 搜集好的应关联的Javascript文件之总集
    )

    if (所有应与该叠样式表配套使用的Javascript之文件名称.length < 1) {
        return
    }

    某层叠样式表之文件描述项.associatedJavascriptFileNames = 所有应与该叠样式表配套使用的Javascript之文件名称
    某层叠样式表之文件描述项.所有应与之配套使用之Javascript之文件名称 = 所有应与该叠样式表配套使用的Javascript之文件名称
}



function 非回调式读取文件内容为字符串(文件之绝对路径) {
    return 非回调式读取文件内容(文件之绝对路径).toString()
}



function 拾取某一文件描述对象(文件描述项或文件名称) {
    let 命中的文件简易描述项
    let 命中的文件之名称

    if (文件描述项或文件名称) {
        if (typeof 文件描述项或文件名称 === 'object') {
            命中的文件简易描述项 = 文件描述项或文件名称
            命中的文件之名称 = 命中的文件简易描述项.文件名称
        } else if (typeof 文件描述项或文件名称 === 'string') {
            命中的文件之名称 = 文件描述项或文件名称
            命中的文件简易描述项 = 以文件名称为索引之所有文件简易描述项之字典[命中的文件之名称]
        }
    }

    // console.log('\n\n文件描述项或文件名称', 文件描述项或文件名称, '\n命中的文件简易描述项', 命中的文件简易描述项, '\n命中的文件之名称', 命中的文件之名称)

    if (!命中的文件简易描述项 || !命中的文件之名称) {
        // console.log('以文件名称为索引之所有文件简易描述项之字典', Object.keys(以文件名称为索引之所有文件简易描述项之字典))
        throw new TypeError(`\n    ${
            粉笔.red('@wulechuan/css-stylus-markdown-themes：')
        }\n${
            ' '.repeat(8)
        }${
            粉笔.red('欲读取某文件之内容全文时，给出的【文件名称】或【文件简易描述项】无效。')
        }\n\n        文件描述项或文件名称 = "${
            粉笔.yellow(文件描述项或文件名称)
        }"\n        命中的文件之名称     = "${
            粉笔.yellow(命中的文件之名称)
        }"\n`)
    }

    return 命中的文件简易描述项
}




function 获取某一已发布之文件之完整内容字符串(文件描述项或文件名称, 不应采用已经缓存的旧内容, 获取配套默认Javascript的配置项集) {
    const 命中的文件简易描述项 = 拾取某一文件描述对象(文件描述项或文件名称)

    if (命中的文件简易描述项.文件内容全文 && !不应采用已经缓存的旧内容) {
        return 命中的文件简易描述项.文件内容全文
    }

    const { 文件之绝对路径 } = 命中的文件简易描述项
    const 文件名称 = 从文件路径中提取文件名称(文件之绝对路径)

    if ([
        本项目所谓默认的Javascript文件之未压缩版之文件完整名称,
        本项目所谓默认的Javascript文件之已压缩版之文件完整名称,
    ].includes(文件名称)) {
        return 获取本项目官方选定之所谓默认Javascript之完整内容字符串(不应采用已经缓存的旧内容, 获取配套默认Javascript的配置项集)
    }

    // 读取后立即将文件内容进行缓存。
    命中的文件简易描述项.文件内容全文 = 非回调式读取文件内容为字符串(文件之绝对路径)

    return 命中的文件简易描述项.文件内容全文
}



function 获取本项目官方选定之所谓默认层叠样式表之完整内容字符串(不应采用已经缓存的旧内容) {
    return 获取某一已发布之文件之完整内容字符串(
        'wulechuan-styles-for-html-via-markdown.default--no-toc.min.css',
        不应采用已经缓存的旧内容
    )
}





function 获取本项目官方选定之所谓默认Javascript之完整内容字符串(不应采用已经缓存的旧内容, 本函数之配置项集) {
    const 命中的文件简易描述项 = 拾取某一文件描述对象(本项目所谓默认的Javascript文件之已压缩版之文件完整名称)

    const 须从文件系统重新读取文件内容 = !命中的文件简易描述项.文件内容全文 || 不应采用已经缓存的旧内容

    if (!须从文件系统重新读取文件内容 && !本函数之配置项集) {
        return 命中的文件简易描述项.文件内容全文
    }

    if (!本函数之配置项集 || typeof 本函数之配置项集 !== 'object' || Array.isArray(本函数之配置项集)) {
        本函数之配置项集 = {}
    }





    const {
        // 注意： 【展开文章纲要列表面板】与【展开文章纲要列表的某一条目】并非一回事。

        为求文章纲要列表简洁明了故意仅显示两层条目以至于较深层级条目形同作废,
        shouldShowOnlyTwoLevelsOfTOCItemsAtMost,

        浏览器打开HTML文章最初之时文章纲要列表中凡层级深于该值之条目均应收叠,
        atBeginingShouldCollapseAllTOCItemsOfLevelsGreaterThan,

        浏览器打开HTML文章最初之时若浏览器窗口足够宽大则直接展开文章纲要列表之面板,
        atBeginingShouldExpandTOCWhenWindowIsWideEnough,
    } = 本函数之配置项集





    const 应从文件内容首部截取的待编辑部分之长度之保守值 = [ // 以下摘取了源代码之首部之原始片段，用以计算该段代码之字符串长度。
        'window.shouldShowOnlyTwoLevelsOfTOCItemsAtMost = false\n',
        'window.atBeginingShouldCollapseAllTOCItemsOfLevelsGreaterThan = 1\n',
        'window.atBeginingShouldExpandTOCWhenWindowIsWideEnough = false\n',
    ].join('').length + 51 // 在已知的应截取的字符串之长度上再加上一个靠谱的正整数，以求保险。





    let 该Javascript文件之完整原始内容

    if (须从文件系统重新读取文件内容) {
        该Javascript文件之完整原始内容 = 非回调式读取文件内容为字符串(命中的文件简易描述项.fileAbsolutePath)
    } else {
        该Javascript文件之完整原始内容 = 命中的文件简易描述项.文件内容全文
    }

    let   首部须编辑之片段 = 该Javascript文件之完整原始内容.slice(0, 应从文件内容首部截取的待编辑部分之长度之保守值)
    const 余下不应变动之片段 = 该Javascript文件之完整原始内容.slice(应从文件内容首部截取的待编辑部分之长度之保守值)





    let _为求文章纲要列表简洁明了故意仅显示两层条目

    if (typeof shouldShowOnlyTwoLevelsOfTOCItemsAtMost !== 'undefined') {
        _为求文章纲要列表简洁明了故意仅显示两层条目 = !!shouldShowOnlyTwoLevelsOfTOCItemsAtMost
    }

    if (typeof 为求文章纲要列表简洁明了故意仅显示两层条目以至于较深层级条目形同作废 !== 'undefined') {
        _为求文章纲要列表简洁明了故意仅显示两层条目 = !!为求文章纲要列表简洁明了故意仅显示两层条目以至于较深层级条目形同作废
    }

    if (typeof _为求文章纲要列表简洁明了故意仅显示两层条目 === 'boolean') {
        首部须编辑之片段 = 首部须编辑之片段.replace(
            /\b(window.shouldShowOnlyTwoLevelsOfTOCItemsAtMost\s*=\s*)(true|false|!0|!1)\b/,
            `$1${_为求文章纲要列表简洁明了故意仅显示两层条目}`
        )
    }





    let _最初之时文章纲要列表中凡层级深于该值之条目均应收叠

    if (
        typeof atBeginingShouldCollapseAllTOCItemsOfLevelsGreaterThan === 'number' &&
        atBeginingShouldCollapseAllTOCItemsOfLevelsGreaterThan >= 0
    ) {
        _最初之时文章纲要列表中凡层级深于该值之条目均应收叠 = atBeginingShouldCollapseAllTOCItemsOfLevelsGreaterThan
    }

    if (
        typeof 浏览器打开HTML文章最初之时文章纲要列表中凡层级深于该值之条目均应收叠 === 'number' &&
        浏览器打开HTML文章最初之时文章纲要列表中凡层级深于该值之条目均应收叠 >= 0
    ) {
        _最初之时文章纲要列表中凡层级深于该值之条目均应收叠 = 浏览器打开HTML文章最初之时文章纲要列表中凡层级深于该值之条目均应收叠
    }

    if (typeof _最初之时文章纲要列表中凡层级深于该值之条目均应收叠 === 'number') {
        首部须编辑之片段 = 首部须编辑之片段.replace(
            /\b(window.atBeginingShouldCollapseAllTOCItemsOfLevelsGreaterThan\s*=\s*)(NaN|\d+)\b/,
            `$1${_最初之时文章纲要列表中凡层级深于该值之条目均应收叠}`
        )
    }





    let _最初之时若浏览器窗口足够宽大则直接展开文章纲要面板

    if (typeof atBeginingShouldExpandTOCWhenWindowIsWideEnough !== 'undefined') {
        _最初之时若浏览器窗口足够宽大则直接展开文章纲要面板 = !!atBeginingShouldExpandTOCWhenWindowIsWideEnough
    }

    if (typeof 浏览器打开HTML文章最初之时若浏览器窗口足够宽大则直接展开文章纲要列表之面板 !== 'undefined') {
        _最初之时若浏览器窗口足够宽大则直接展开文章纲要面板 = !!浏览器打开HTML文章最初之时若浏览器窗口足够宽大则直接展开文章纲要列表之面板
    }

    if (typeof _最初之时若浏览器窗口足够宽大则直接展开文章纲要面板 === 'boolean') {
        首部须编辑之片段 = 首部须编辑之片段.replace(
            /\b(window.atBeginingShouldExpandTOCWhenWindowIsWideEnough\s*=\s*)(true|false|!0|!1)\b/,
            `$1${_最初之时若浏览器窗口足够宽大则直接展开文章纲要面板}`
        )
    }





    const 修订好的文件内容全文 = `${首部须编辑之片段}${余下不应变动之片段}`

    命中的文件简易描述项.文件内容全文 = 修订好的文件内容全文

    return 修订好的文件内容全文
}
