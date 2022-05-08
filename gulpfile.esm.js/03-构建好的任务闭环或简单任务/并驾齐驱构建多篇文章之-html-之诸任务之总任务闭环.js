import 彩色粉笔工具 from 'chalk'

import {
    parallel as 构建并行运转以下Gulp任务之总任务,
} from 'gulp'

import {
    create3HighOrderTasksUponMultipleTaskCycles,
} from '@wulechuan/gulp-classical-task-cycle'

import 构建一个任务闭环以将一Markdown文件转换成HTML文件
    from '../02-用于构建任务闭环的工具集/用于构建效果呈现示例之文章的/构建一个任务闭环以创建效果呈现示例之文章'

import 构建简单任务用以将某示例性HTML配套的插图等资源复制到目标文件夹
    from '../01-用于构建简单任务的工具集/构建简单任务用以将某示例性-html-配套的插图等资源复制到目标文件夹'



const 产出之HTML文件之名称_汉语文章配以亮色方案 = 'example.zh-hans-cn.default-light-colored-theme.html'
const 产出之HTML文件之名称_汉语文章配以暗色方案 = 'example.zh-hans-cn.default-dark-colored-theme.html'

const 产出之HTML文件之名称_英国话文章配以亮色方案 = 'example.en-us.default-light-colored-theme.html'
const 产出之HTML文件之名称_英国话文章配以暗色方案 = 'example.en-us.default-dark-colored-theme.html'

const 须囊括于本工具发布内容中之HTML范文之_凡配以亮色方案者_之存放文件夹之相对路径 = './文档集/文章排版与配色效果示例集/以-html-格式渲染好的文章成品/html'
const 须囊括于本工具发布内容中之HTML范文之_凡配以暗色方案者_之存放文件夹之相对路径 = './文档集/文章排版与配色效果示例集/以-html-格式渲染好的文章成品/html'
const 不囊括于本工具发布内容之中而仅作截图辅助工具之用之所有HTML文件之存放文件夹之相对路径 = './测试集/产生的临时文件/示例性-html-文件集（均嵌有半自动化截图辅助逻辑）'

const 须额外嵌入各产出之HTML文件之文件之相对路径之列表 = [
    '文档集/文章排版与配色效果示例集/示例性-html-文章的-html-title-标签之内容自动配置之逻辑.js',
    '文档集/文章排版与配色效果示例集/示例性-html-文章的-为制作截图而偷换-font-family-之逻辑.js',
    '文档集/文章排版与配色效果示例集/示例性-html-文章的截图半自动化辅助逻辑.js',
]

const 用于构建各范文之诸任务闭环之列表 = [
    构建一个任务闭环以将一Markdown文件转换成HTML文件({
        // 欲采用的已发布之层叠样式表文件之名称: 'wulechuan-styles-for-html-via-markdown.default--with-toc.min.css',
        产出诸HTML文件之存放文件夹之相对路径: 须囊括于本工具发布内容中之HTML范文之_凡配以亮色方案者_之存放文件夹之相对路径,
        自汉语文章产出之HTML文件之名称: 产出之HTML文件之名称_汉语文章配以亮色方案,
        自英国话文章产出之HTML文件之名称: 产出之HTML文件之名称_英国话文章配以亮色方案,
        须额外嵌入各产出之HTML文件之文件之相对路径之列表: [],
    }),
    构建一个任务闭环以将一Markdown文件转换成HTML文件({
        欲采用的已发布之层叠样式表文件之名称: 'wulechuan-styles-for-html-via-markdown.default-dark--with-toc.min.css',
        产出诸HTML文件之存放文件夹之相对路径: 须囊括于本工具发布内容中之HTML范文之_凡配以暗色方案者_之存放文件夹之相对路径,
        自汉语文章产出之HTML文件之名称: 产出之HTML文件之名称_汉语文章配以暗色方案,
        自英国话文章产出之HTML文件之名称: 产出之HTML文件之名称_英国话文章配以暗色方案,
        须额外嵌入各产出之HTML文件之文件之相对路径之列表: [],
    }),

    /**
     * 以下两组任务构建的 HTML 文件看似与上方任务构建的 HTML 文件无异。
     * 实则下方的 HTML 注入了额外的 Javascript 代码，用以辅助本人在为各 HTML 制作大量截图时提供便利。
     */
    构建一个任务闭环以将一Markdown文件转换成HTML文件({
        // 欲采用的已发布之层叠样式表文件之名称: 'wulechuan-styles-for-html-via-markdown.default--with-toc.min.css',
        产出诸HTML文件之存放文件夹之相对路径: 不囊括于本工具发布内容之中而仅作截图辅助工具之用之所有HTML文件之存放文件夹之相对路径,
        自汉语文章产出之HTML文件之名称: 产出之HTML文件之名称_汉语文章配以亮色方案,
        自英国话文章产出之HTML文件之名称: 产出之HTML文件之名称_英国话文章配以亮色方案,
        须额外嵌入各产出之HTML文件之文件之相对路径之列表,
    }),
    构建一个任务闭环以将一Markdown文件转换成HTML文件({
        欲采用的已发布之层叠样式表文件之名称: 'wulechuan-styles-for-html-via-markdown.default-dark--with-toc.min.css',
        产出诸HTML文件之存放文件夹之相对路径: 不囊括于本工具发布内容之中而仅作截图辅助工具之用之所有HTML文件之存放文件夹之相对路径,
        自英国话文章产出之HTML文件之名称: 产出之HTML文件之名称_英国话文章配以暗色方案,
        自汉语文章产出之HTML文件之名称: 产出之HTML文件之名称_汉语文章配以暗色方案,
        须额外嵌入各产出之HTML文件之文件之相对路径之列表,
    }),
]


export const 将所有须产出之HTML文件对应之插图等媒体资源复制到位之任务之本体函数 = 构建并行运转以下Gulp任务之总任务(
    ...[
        须囊括于本工具发布内容中之HTML范文之_凡配以亮色方案者_之存放文件夹之相对路径,
        须囊括于本工具发布内容中之HTML范文之_凡配以暗色方案者_之存放文件夹之相对路径,
        不囊括于本工具发布内容之中而仅作截图辅助工具之用之所有HTML文件之存放文件夹之相对路径,
    ].map(构建简单任务用以将某示例性HTML配套的插图等资源复制到目标文件夹)
)

export const 并驾齐驱构建多篇文章之HTML之诸任务之总任务闭环 = create3HighOrderTasksUponMultipleTaskCycles({
    taskCyclesInPallarel: 用于构建各范文之诸任务闭环之列表,

    beforeBuildingEveryThingOnce: function() {
        console.log(`\n正在采用默认主题${彩色粉笔工具.black.bgBlue('构建所有语言版本的示例文档')}的 HTML 文件`)
    },
})
