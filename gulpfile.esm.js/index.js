import highOrderTasks from './tasks/4-create-high-order-task-bodies-for-all-themes'

console.log('highOrderTasks', highOrderTasks)


export const clean         = highOrderTasks.cleanAllOldOuput
export const buildOnce     = highOrderTasks.buildEverythingOnce
export const buildAndWatch = highOrderTasks.watchEverything


// The default task
export default buildAndWatch
