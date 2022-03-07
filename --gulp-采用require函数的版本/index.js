const {
    series: 构建严格依序执行以下gulp任务之总任务,
} = require('gulp')

const 批量构建所有排版与配色方案之诸任务之总任务闭环
    = require('./03-构建好的任务闭环或简单任务/批量构建所有排版与配色方案之诸任务之总任务闭环')

const 构建当前正着手开发之唯一排版与配色方案之总任务闭环
    = require('./03-构建好的任务闭环或简单任务/构建当前正着手开发之唯一排版与配色方案之总任务闭环')

const {
    将所有须产出之HTML文件对应之插图等媒体资源复制到位之任务之本体函数,
    并驾齐驱构建多篇文章之HTML之诸任务之总任务闭环,
} = require('./03-构建好的任务闭环或简单任务/并驾齐驱构建多篇文章之-html-之诸任务之总任务闭环')


const cleanAll           = 批量构建所有排版与配色方案之诸任务之总任务闭环.cleanAllOldOuputs
const buildAllThemesOnce = 批量构建所有排版与配色方案之诸任务之总任务闭环.buildEverythingOnce

const devSingleThemeOnce = 构建当前正着手开发之唯一排版与配色方案之总任务闭环.buildEverythingOnce
const devSingleTheme     = 构建当前正着手开发之唯一排版与配色方案之总任务闭环.watchEverything

const updateExampleHTMLs = 构建严格依序执行以下gulp任务之总任务(
    将所有须产出之HTML文件对应之插图等媒体资源复制到位之任务之本体函数,
    并驾齐驱构建多篇文章之HTML之诸任务之总任务闭环.buildEverythingOnce
)

module.exports = devSingleTheme

module.exports.cleanAll = cleanAll
module.exports.buildAllThemesOnce = buildAllThemesOnce
module.exports.devSingleThemeOnce = devSingleThemeOnce
module.exports.devSingleTheme = devSingleTheme
module.exports.updateExampleHTMLs = updateExampleHTMLs
