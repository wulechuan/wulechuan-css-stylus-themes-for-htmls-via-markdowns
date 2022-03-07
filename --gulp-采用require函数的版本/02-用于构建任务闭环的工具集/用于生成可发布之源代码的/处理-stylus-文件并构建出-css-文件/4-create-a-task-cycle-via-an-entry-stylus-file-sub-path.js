const getSpecificTaskConfig
    = require('./0-get-a-specific-task-config-by-an-entry-stylus-file-sub-path')

const createOneTaskCycleViaOneSpecificTaskConfig
    = require('./3-create-a-task-cycle-via-a-specific-task-config')


module.exports = function createOneTaskCycleViaOneEntryStylusFileSubPath(作为编译入口之Stylus文件之内层路径) {
    const specificTaskConfig = getSpecificTaskConfig(作为编译入口之Stylus文件之内层路径)
    const taskCycle = createOneTaskCycleViaOneSpecificTaskConfig(specificTaskConfig)
    return taskCycle
}
