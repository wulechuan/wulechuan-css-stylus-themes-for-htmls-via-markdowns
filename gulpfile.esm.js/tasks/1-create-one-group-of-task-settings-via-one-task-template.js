import {
	baseThemeCandidates,
	highlightjsThemeCandidates,

	defaultBaseThemeName,
	defaultHighlightjsThemeName,
} from '../configs'

import
	createOneTaskSettingsForOneTheme
from './2-create-one-task-settings-for-one-theme'


export default function createOneGroupOfTaskSettingsViaOneTaskTemplate(taskSettingsTemplate) {
    const allTaskSettingsViaThisTemplate = []

    if (taskSettingsTemplate.shouldSkipThisTemplate) {
		return allTaskSettingsViaThisTemplate
	}

	const _baseThemeCandidates = [
		'default',
		...baseThemeCandidates,
	]
	const _highlightjsThemeCandidates = [
		'default',
		...highlightjsThemeCandidates,
	]

	_baseThemeCandidates.forEach(baseThemeName => {

		_highlightjsThemeCandidates.forEach(hjThemeName => {
			if (baseThemeName === 'default' && hjThemeName !== 'default') {
				return
			}

			if (baseThemeName !== 'default' && hjThemeName === 'default') {
				return
			}

			if (baseThemeName === defaultBaseThemeName && hjThemeName === defaultHighlightjsThemeName) {
				return
			}

			let decidedBaseThemeName
			let decidedHjThemeName
			let decidedOutputFileNameSuffix

			if (baseThemeName === 'default' && hjThemeName === 'default') {
				decidedBaseThemeName        = defaultBaseThemeName
				decidedHjThemeName          = defaultHighlightjsThemeName
				decidedOutputFileNameSuffix = 'default'
			} else {
				decidedBaseThemeName        = baseThemeName
				decidedHjThemeName          = hjThemeName
				decidedOutputFileNameSuffix = `${decidedBaseThemeName}.${decidedHjThemeName}`
			}

			const themeSettings = createOneTaskSettingsForOneTheme({
				taskSettingsTemplate,
				characteristics: {
					outputFileNameSuffix: decidedOutputFileNameSuffix,
					baseThemeName:        decidedBaseThemeName,
					hjThemeName:          decidedHjThemeName,
				},
			})

			allTaskSettingsViaThisTemplate.push(themeSettings)
		})
    })
    
    return allTaskSettingsViaThisTemplate
}
