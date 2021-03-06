import mergeSharedTaskConfigWithOneSpecificTaskConfig
    from './1-merge-shared-task-config-and-one-specific-task-config'

import createOneTaskCycleViaOneMergedTaskConfig
    from './2-create-a-task-cycle-via-a-merged-task-config'

export default function createOneTaskCycleViaOneSpecificTaskConfig(specificTaskConfig) {
    const mergedTaskConfig = mergeSharedTaskConfigWithOneSpecificTaskConfig(specificTaskConfig)
    const taskCycle = createOneTaskCycleViaOneMergedTaskConfig(mergedTaskConfig)
    return taskCycle
}
