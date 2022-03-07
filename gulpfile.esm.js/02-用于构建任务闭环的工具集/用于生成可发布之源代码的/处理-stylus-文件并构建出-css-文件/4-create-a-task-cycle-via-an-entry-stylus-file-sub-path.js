import getSpecificTaskConfig
    from './0-get-a-specific-task-config-by-an-entry-stylus-file-sub-path'

import createOneTaskCycleViaOneSpecificTaskConfig
    from './3-create-a-task-cycle-via-a-specific-task-config'


export default function createOneTaskCycleViaOneEntryStylusFileSubPath(作为编译入口之Stylus文件之内层路径) {
    const specificTaskConfig = getSpecificTaskConfig(作为编译入口之Stylus文件之内层路径)
    const taskCycle = createOneTaskCycleViaOneSpecificTaskConfig(specificTaskConfig)
    return taskCycle
}
