const 彩色粉笔工具 = require('chalk')

const {
    诸排版与配色方案之构建任务各自特有之配置之汇总列表,
} = require('../../../00-任务之配置项集/针对构建所有须发布之层叠样式表之任务的')


module.exports = function getTaskConfigByEntryStylusFileSubPath(作为编译入口之Stylus文件之内层路径) {
    let theOnlyTaskSpecificConfig = null

    if (!作为编译入口之Stylus文件之内层路径) {
        theOnlyTaskSpecificConfig = 诸排版与配色方案之构建任务各自特有之配置之汇总列表[0]
    } else {
        const matchedTaskConfigs = 诸排版与配色方案之构建任务各自特有之配置之汇总列表.filter(taskConfig => {
            return taskConfig.作为编译入口之Stylus文件之内层路径 === 作为编译入口之Stylus文件之内层路径
        })

        const matchedTaskConfigsCount = matchedTaskConfigs.length

        if (matchedTaskConfigsCount !== 1) {
            throw new RangeError(`${matchedTaskConfigsCount} theme tasks matched by "${
                彩色粉笔工具.yellow(作为编译入口之Stylus文件之内层路径)
            }".\n    ${彩色粉笔工具.red('But 1 and only 1 expected.')}`)
        }

        theOnlyTaskSpecificConfig = matchedTaskConfigs[0]
    }

    return theOnlyTaskSpecificConfig
}
