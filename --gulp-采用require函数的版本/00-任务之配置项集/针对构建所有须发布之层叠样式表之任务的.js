const {
    发布的层叠样式表之根文件夹之相对路径: _发布的层叠样式表之根文件夹之相对路径,
} = require('../../本项目之全局配置项集')

const 所涉一切文件甄选描述符之公共根文件夹之相对路径 = './源代码/原始的源代码/用于设计文章排版与配色方案的代码/stylus'
const 发布的层叠样式表之根文件夹之相对路径 = _发布的层叠样式表之根文件夹之相对路径
const 所有应用场景之入口Stylus文件相对路径之公共起始部分 = '逐个应用场景选用样式零件并装配成完整样式表'
const 产出之一切层叠样式表文件之名称之共有前缀 = 'wulechuan-styles-for-html-via-markdown'

const sharedSourceRelativeGlobs = []
const extraSourceGlobsToWatch = []

const 诸排版与配色方案之构建任务各自特有之配置之汇总列表 = [
    {
        // 应忽略该任务: true,
        作为编译入口之Stylus文件之内层路径: '_default/non-wrapped--has-toc',
        编译Stylus最终产出之层叠样式表文件之名称之特征部分: '.default--with-toc',
    },
    {
        // 应忽略该任务: true,
        作为编译入口之Stylus文件之内层路径: '_default/non-wrapped--no-toc',
        编译Stylus最终产出之层叠样式表文件之名称之特征部分: '.default--no-toc',
    },
    {
        // 应忽略该任务: true,
        作为编译入口之Stylus文件之内层路径: '_default/all-wrapped--has-toc',
        编译Stylus最终产出之层叠样式表文件之名称之特征部分: '.default--wrapped--with-toc',
    },
    {
        // 应忽略该任务: true,
        作为编译入口之Stylus文件之内层路径: '_default/all-wrapped--no-toc',
        编译Stylus最终产出之层叠样式表文件之名称之特征部分: '.default--wrapped--no-toc',
    },

    // ----------------------------------------------------

    {
        // 应忽略该任务: true,
        作为编译入口之Stylus文件之内层路径: '_generic/_default-dark-colored-article-theme/non-wrapped--has-toc',
        编译Stylus最终产出之层叠样式表文件之名称之特征部分: '.default-dark--with-toc',
    },
    {
        // 应忽略该任务: true,
        作为编译入口之Stylus文件之内层路径: '_generic/_default-dark-colored-article-theme/non-wrapped--no-toc',
        编译Stylus最终产出之层叠样式表文件之名称之特征部分: '.default-dark--no-toc',
    },
    {
        // 应忽略该任务: true,
        作为编译入口之Stylus文件之内层路径: '_generic/_default-dark-colored-article-theme/all-wrapped--has-toc',
        编译Stylus最终产出之层叠样式表文件之名称之特征部分: '.default-dark--wrapped--with-toc',
    },
    {
        // 应忽略该任务: true,
        作为编译入口之Stylus文件之内层路径: '_generic/_default-dark-colored-article-theme/all-wrapped--no-toc',
        编译Stylus最终产出之层叠样式表文件之名称之特征部分: '.default-dark--wrapped--no-toc',
    },

    // ----------------------------------------------------

    {
        // 应忽略该任务: true,
        作为编译入口之Stylus文件之内层路径: '_generic/_default-light-colored-article-theme--atom-one-dark/non-wrapped--has-toc',
        编译Stylus最终产出之层叠样式表文件之名称之特征部分: '.generic-default-light--atom-one-dark--with-toc',
    },
    {
        // 应忽略该任务: true,
        作为编译入口之Stylus文件之内层路径: '_generic/_default-light-colored-article-theme--atom-one-dark/non-wrapped--no-toc',
        编译Stylus最终产出之层叠样式表文件之名称之特征部分: '.generic-default-light--atom-one-dark--no-toc',
    },
    {
        // 应忽略该任务: true,
        作为编译入口之Stylus文件之内层路径: '_generic/_default-light-colored-article-theme--atom-one-dark/all-wrapped--has-toc',
        编译Stylus最终产出之层叠样式表文件之名称之特征部分: '.generic-default-light--atom-one-dark--wrapped--with-toc',
    },
    {
        // 应忽略该任务: true,
        作为编译入口之Stylus文件之内层路径: '_generic/_default-light-colored-article-theme--atom-one-dark/all-wrapped--no-toc',
        编译Stylus最终产出之层叠样式表文件之名称之特征部分: '.generic-default-light--atom-one-dark--wrapped--no-toc',
    },

    // ----------------------------------------------------

    {
        // 应忽略该任务: true,
        作为编译入口之Stylus文件之内层路径: 'firefox-addon/firefox-addon-_default',
        编译Stylus最终产出之层叠样式表文件之名称之特征部分: '--firefox-addon.default',
        不必产出压缩过的层叠样式表和压缩过的Javascript文件: true,
    },
    {
        // 应忽略该任务: true,
        作为编译入口之Stylus文件之内层路径: 'typora/typora-_default',
        编译Stylus最终产出之层叠样式表文件之名称之特征部分: '--typora.default',
        不必产出压缩过的层叠样式表和压缩过的Javascript文件: true,
    },
    {
        // 应忽略该任务: true,
        作为编译入口之Stylus文件之内层路径: 'vscode/vscode-_default',
        编译Stylus最终产出之层叠样式表文件之名称之特征部分: '--vscode.default',
        shouldNotOutputUncompressedVersion: true,
    },
]

module.exports = {
    所涉一切文件甄选描述符之公共根文件夹之相对路径,
    发布的层叠样式表之根文件夹之相对路径,
    所有应用场景之入口Stylus文件相对路径之公共起始部分,
    产出之一切层叠样式表文件之名称之共有前缀,
    sharedSourceRelativeGlobs,
    extraSourceGlobsToWatch,
    诸排版与配色方案之构建任务各自特有之配置之汇总列表,
}
