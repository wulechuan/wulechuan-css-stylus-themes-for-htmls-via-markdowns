const mergeSharedTaskConfigWithOneSpecificTaskConfig
    = require('./1-merge-shared-task-config-and-one-specific-task-config')

const createOneTaskCycleViaOneMergedTaskConfig
    = require('./2-create-a-task-cycle-via-a-merged-task-config')

module.exports = function createOneTaskCycleViaOneSpecificTaskConfig(specificTaskConfig) {
    const mergedTaskConfig = mergeSharedTaskConfigWithOneSpecificTaskConfig(specificTaskConfig)
    const taskCycle = createOneTaskCycleViaOneMergedTaskConfig(mergedTaskConfig)
    return taskCycle
}
