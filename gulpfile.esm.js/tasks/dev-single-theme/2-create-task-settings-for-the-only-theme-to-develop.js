import mergeSpecificTaskConfigsWithSharedConfigsAndCreateTaskSettings
    from '../../tasks/themes/stylus/2-create-all-task-settings-for-all-themes'

import getTaskConfigOfTheOnlyThemeToDevelop
    from './1-get-specific-task-config-of-the-only-theme-to-develop'



export default function createTaskSettingsForTheOnlyThemeToDevelop(entryStylusFileSubPathOfTheOnlyThemeToDevelop) {
    const specificTaskConfigOfTheOnlyThemeToDevelop = getTaskConfigOfTheOnlyThemeToDevelop(
        entryStylusFileSubPathOfTheOnlyThemeToDevelop
    )

    const [ taskSettingsOfTheOnlyTheme ] = mergeSpecificTaskConfigsWithSharedConfigsAndCreateTaskSettings(
        [
            specificTaskConfigOfTheOnlyThemeToDevelop,
        ]
    )

    return taskSettingsOfTheOnlyTheme
}
