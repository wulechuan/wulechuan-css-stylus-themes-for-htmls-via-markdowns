import highOrderTasks from './tasks/3-create-high-order-task-bodies-for-all-themes'

export const clean         = highOrderTasks.cleanAllOldOuput
export const buildOnce     = highOrderTasks.buildEverythingOnce
export const buildAndWatch = highOrderTasks.watchEverything

export default buildAndWatch
