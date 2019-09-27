import jsTaskBuildingOptions
    from '../../../configs/theme-javascripts'

import createOneTaskCycleForCopyingJavascriptFiles
    from '../../../utils/create-one-task-cycle-for-copying-javascript-files'

export default jsTaskBuildingOptions.map(createOneTaskCycleForCopyingJavascriptFiles)
