import getSpecificTaskConfig
    from './0-get-a-specific-task-config-by-an-entry-stylus-file-sub-path'

import createOneTaskCycleViaOneSpecificTaskConfig
    from './3-create-a-task-cycle-via-a-specific-task-config'


export default function createOneTaskCycleViaOneEntryStylusFileSubPath(entryStylusFileSubPath) {
    const specificTaskConfig = getSpecificTaskConfig(entryStylusFileSubPath)
    const taskCycle = createOneTaskCycleViaOneSpecificTaskConfig(specificTaskConfig)
    return taskCycle
}
