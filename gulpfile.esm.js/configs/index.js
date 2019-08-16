import
	cssTaskTemplateGeneric
from './css-building-templates/_generic'

import
	cssTaskTemplateForFirefoxAddon
from './css-building-templates/for-firefox-addon-markdown-viewer'

import
	cssTaskTemplateForTypora
from './css-building-templates/for-typora'





export const sourceRootFolderPath = 'source'
export const outputRootFolderPath = 'dist'

export const subPathOfSourceCSS = 'new-version--pure-css'


export const outputFileNamePrefix = 'wulechuan-styles-for-html-via-markdwon'

export const baseThemeCandidates = [
	'theme-1',
]
export const highlightjsThemeCandidates = [
	'atom-one-dark',
	// 'agate',
	// 'tomorrow-night',
]


export const defaultBaseThemeName = baseThemeCandidates[0]
export const defaultHighlightjsThemeName = highlightjsThemeCandidates[0]



export const allCSSTaskSettingsTemplates = [
	{
		outputFolderPath: outputRootFolderPath,
		outputFileBaseName: `${outputFileNamePrefix}${cssTaskTemplateGeneric.outputFileBaseNameSuffix}`,
		sourceGlobsCommonSubPath: subPathOfSourceCSS,

		...cssTaskTemplateGeneric,
	},
	{
		outputFolderPath: outputRootFolderPath,
		outputFileBaseName: `${outputFileNamePrefix}${cssTaskTemplateForFirefoxAddon.outputFileBaseNameSuffix}`,
		sourceGlobsCommonSubPath: subPathOfSourceCSS,

		...cssTaskTemplateForFirefoxAddon,
	},
	{
		outputFolderPath: outputRootFolderPath,
		outputFileBaseName: `${outputFileNamePrefix}${cssTaskTemplateForTypora.outputFileBaseNameSuffix}`,
		sourceGlobsCommonSubPath: subPathOfSourceCSS,

		...cssTaskTemplateForTypora,
	},
]
