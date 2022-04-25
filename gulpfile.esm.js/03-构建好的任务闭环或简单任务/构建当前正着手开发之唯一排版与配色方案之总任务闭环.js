import 彩色粉笔工具 from 'chalk'
import 路径工具 from 'path'

import {
    series   as 构建严格依序执行以下gulp任务之总任务,
    parallel as 构建并行运转以下Gulp任务之总任务,
} from 'gulp'

import {
    create3HighOrderTasksUponMultipleTaskCycles,
} from '@wulechuan/gulp-classical-task-cycle'

import 为所有排版与配色方案构建所有须发布之Javascript文件之诸任务闭环
    from '../02-用于构建任务闭环的工具集/用于生成可发布之源代码的/处理并构建出-javascript-文件/为所有须发布的-javascript-文件的构建任务逐一构建出任务闭环'

// import taskCycleOfCopyingESLintrcToDist
//     from '../02-用于构建任务闭环的工具集/用于生成可发布之源代码的/处理并构建出-javascript-文件/构建一个任务闭环用以复制发布内容专属的-eslintrc-文件'

import createOneTaskCycleViaOneEntryStylusFileSubPath
    from '../02-用于构建任务闭环的工具集/用于生成可发布之源代码的/处理-stylus-文件并构建出-css-文件/4-create-a-task-cycle-via-an-entry-stylus-file-sub-path'

import 构建一个任务闭环以将一Markdown文件转换成HTML文件
    from '../02-用于构建任务闭环的工具集/用于构建效果呈现示例之文章的/构建一个任务闭环以创建效果呈现示例之文章'

import 构建简单任务用以将某示例性HTML配套的插图等资源复制到目标文件夹
    from '../01-用于构建简单任务的工具集/构建简单任务用以将某示例性-html-配套的插图等资源复制到目标文件夹'

import {
    正着手开发的排版与配色方案之入口Stylus文件之相对路径,
} from '../00-任务之配置项集/针对用于开发某一特定排版与配色方案之任务的'



const 产出诸HTML文件之存放文件夹之相对路径  = './测试集/产生的临时文件/示例性-html-文件集（仅限于当前正在开发的排版与配色方案）'
const 自英国话文章产出之HTML文件之名称     = 'default-theming-example.--DEV--.en-us.html'
const 自汉语文章产出之HTML文件之名称 = 'default-theming-example.--DEV--.zh-hans-cn.html'
const 须额外嵌入各产出之HTML文件之文件之相对路径之列表 = [
    // '文档集/文章排版与配色效果示例集/示例性-html-文章的-title-标签之内容自动配置之逻辑.js',
    // '文档集/文章排版与配色效果示例集/示例性-html-文章的截图半自动化辅助逻辑.js',
]





const 用以为正着手开发之排版与配色方案构建层叠样式表文件之任务闭环 = createOneTaskCycleViaOneEntryStylusFileSubPath(
    正着手开发的排版与配色方案之入口Stylus文件之相对路径
)

const distCSSFilePathToUse = 用以为正着手开发之排版与配色方案构建层叠样式表文件之任务闭环.不必产出压缩过的层叠样式表和压缩过的Javascript文件 ?
    用以为正着手开发之排版与配色方案构建层叠样式表文件之任务闭环.outputFilePath1 : // uncompressed version
    用以为正着手开发之排版与配色方案构建层叠样式表文件之任务闭环.outputFilePath2   // compressed/minified version

const 欲采用的已发布之层叠样式表文件之名称 = 路径工具.basename(distCSSFilePathToUse)
console.log('\n欲采用的已发布之层叠样式表文件之名称：', 彩色粉笔工具.magenta(欲采用的已发布之层叠样式表文件之名称))


const 用以将一个Markdown文件转换为HTML文件之任务闭环 = 构建一个任务闭环以将一Markdown文件转换成HTML文件({
    欲采用的已发布之层叠样式表文件之名称,
    产出诸HTML文件之存放文件夹之相对路径,
    自英国话文章产出之HTML文件之名称,
    自汉语文章产出之HTML文件之名称,
    须额外嵌入各产出之HTML文件之文件之相对路径之列表,
})


const 构建单一排版与配色方案所涉一切任务闭环之列表 = [
    用以为正着手开发之排版与配色方案构建层叠样式表文件之任务闭环,

    // 此处，为降低任务设计之难度，故意不分青红皂白构建所有方案之所有 Javascript 文件。
    ...为所有排版与配色方案构建所有须发布之Javascript文件之诸任务闭环,

    // 但在研发某一款【】时，无须构建 .eslintrc.js 这一文件。下方代码故意保留，仅为辅助读者理解罢了。
    // taskCycleOfCopyingESLintrcToDist,
]





const 为着手开发之排版与配色方案构建所有产出 = 构建并行运转以下Gulp任务之总任务(
    ...构建单一排版与配色方案所涉一切任务闭环之列表.map(taskCycle => taskCycle.taskBodies.buildNewOutputs)
)

const 删除业已存在之HTML文件之任务之本体函数 = 用以将一个Markdown文件转换为HTML文件之任务闭环.taskBodies.cleanOldOutputs
const 构建完整范文及其配套插图等资源之诸任务之总任务之函数 = 构建并行运转以下Gulp任务之总任务(
    用以将一个Markdown文件转换为HTML文件之任务闭环.taskBodies.buildNewOutputs,
    构建简单任务用以将某示例性HTML配套的插图等资源复制到目标文件夹(产出诸HTML文件之存放文件夹之相对路径)
)

const 构建所有文件 = 构建严格依序执行以下gulp任务之总任务(
    为着手开发之排版与配色方案构建所有产出,
    构建完整范文及其配套插图等资源之诸任务之总任务之函数
)

const 删除所有业已存在的旧版文件 = 构建并行运转以下Gulp任务之总任务(
    ...构建单一排版与配色方案所涉一切任务闭环之列表.map(某任务闭环 => 某任务闭环.taskBodies.cleanOldOutputs),
    删除业已存在之HTML文件之任务之本体函数
)



const 用于描述欲监视之所有文件的文件甄选描述符集 = [
    ...构建单一排版与配色方案所涉一切任务闭环之列表.reduce((所涉一切文件甄选描述符集, 某任务闭环) => {
        return [
            ...所涉一切文件甄选描述符集,
            ...某任务闭环.sourceGlobsToWatch,
        ]
    }, []),
    ...用以将一个Markdown文件转换为HTML文件之任务闭环.sourceGlobsToWatch,
]

console.log('用于描述欲监视之所有文件的【文件甄选描述符（外国话所谓 glob ）】集：', 用于描述欲监视之所有文件的文件甄选描述符集)

const simplifiedTaskCycleForCompoundTaskOfBuildingSingleTheme = {
    sourceGlobsToWatch: 用于描述欲监视之所有文件的文件甄选描述符集,
    taskBodies: {
        cleanOldOutputs: 删除所有业已存在的旧版文件,
        buildNewOutputs: 构建所有文件,
    },
}

export default create3HighOrderTasksUponMultipleTaskCycles({
    taskCyclesInPallarel: [ simplifiedTaskCycleForCompoundTaskOfBuildingSingleTheme ],

    beforeBuildingEveryThingOnce: function() {
        console.log(`\n正在依照唯一主题之配置${彩色粉笔工具.black.bgBlue('编译')} Stylus，并${彩色粉笔工具.black.bgBlue('复制')} JS`)
    },
})


