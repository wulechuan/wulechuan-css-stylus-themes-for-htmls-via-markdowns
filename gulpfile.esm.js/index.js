import {
    series as 构建严格依序执行以下gulp任务之总任务,
} from 'gulp'

import 批量构建所有排版与配色方案之诸任务之总任务闭环
    from './构建好的任务闭环或简单任务/批量构建所有排版与配色方案之诸任务之总任务闭环'

import 构建当前正着手开发之唯一排版与配色方案之总任务闭环
    from './构建好的任务闭环或简单任务/构建当前正着手开发之唯一排版与配色方案之总任务闭环'

import {
    将所有须产出之HTML文件对应之插图等媒体资源复制到位之任务之本体函数,
    并驾齐驱构建多篇文章之HTML之诸任务之总任务闭环,
} from './构建好的任务闭环或简单任务/并驾齐驱构建多篇文章之-html-之诸任务之总任务闭环'


export const cleanAll           = 批量构建所有排版与配色方案之诸任务之总任务闭环.cleanAllOldOuputs
export const buildAllThemesOnce = 批量构建所有排版与配色方案之诸任务之总任务闭环.buildEverythingOnce

export const devSingleThemeOnce = 构建当前正着手开发之唯一排版与配色方案之总任务闭环.buildEverythingOnce
export const devSingleTheme     = 构建当前正着手开发之唯一排版与配色方案之总任务闭环.watchEverything

export const updateExampleHTMLs = 构建严格依序执行以下gulp任务之总任务(
    将所有须产出之HTML文件对应之插图等媒体资源复制到位之任务之本体函数,
    并驾齐驱构建多篇文章之HTML之诸任务之总任务闭环.buildEverythingOnce
)

export default devSingleTheme
