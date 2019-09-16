import jsTaskBuildingOptions
    from '../../../configs/theme-javascripts'

import createOneTaskCycleForCopyingJavascriptFiles
    from '../../../utils/create-one-task-settings-for-copying-javascript-files'

export default jsTaskBuildingOptions.map(createOneTaskCycleForCopyingJavascriptFiles)
