import
	cssTaskTemplateGeneric
from './css-building-templates/_generic'

import
	cssTaskTemplateGenericWithTOC
from './css-building-templates/_generic-with-toc'

import
	cssTaskTemplateForFirefoxAddon
from './css-building-templates/for-firefox-addon-markdown-viewer'

import
	cssTaskTemplateForTypora
from './css-building-templates/for-typora'





export const cssSourceRootFolderPath = 'source/css'
export const cssOutputRootFolderPath = 'dist/css'

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
		outputFolderPath: cssOutputRootFolderPath,
		outputFileBaseName: `${outputFileNamePrefix}${cssTaskTemplateGeneric.outputFileBaseNameSuffix}`,
		sourceGlobsCommonSubPath: subPathOfSourceCSS,

		...cssTaskTemplateGeneric,
	},
	{
		outputFolderPath: cssOutputRootFolderPath,
		outputFileBaseName: `${outputFileNamePrefix}${cssTaskTemplateGenericWithTOC.outputFileBaseNameSuffix}`,
		sourceGlobsCommonSubPath: subPathOfSourceCSS,

		...cssTaskTemplateGenericWithTOC,
	},
	{
		outputFolderPath: cssOutputRootFolderPath,
		outputFileBaseName: `${outputFileNamePrefix}${cssTaskTemplateForFirefoxAddon.outputFileBaseNameSuffix}`,
		sourceGlobsCommonSubPath: subPathOfSourceCSS,

		...cssTaskTemplateForFirefoxAddon,
	},
	{
		outputFolderPath: cssOutputRootFolderPath,
		outputFileBaseName: `${outputFileNamePrefix}${cssTaskTemplateForTypora.outputFileBaseNameSuffix}`,
		sourceGlobsCommonSubPath: subPathOfSourceCSS,

		...cssTaskTemplateForTypora,
	},
]
