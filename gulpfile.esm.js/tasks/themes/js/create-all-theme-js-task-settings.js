import jsTaskBuildingOptions
    from '../../../configs/theme-js-tasks'

import createOneTaskSettingsForCopyingJavascriptFiles
    from '../../../utils/create-one-task-settings-for-copying-javascript-files'

export default jsTaskBuildingOptions.map(createOneTaskSettingsForCopyingJavascriptFiles)
