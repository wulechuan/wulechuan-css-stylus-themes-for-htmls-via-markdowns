import path from 'path'
import chalk from 'chalk'

const joinPathPOSIX = path.posix.join

const sourceGlobsRootFolderPath        = './source/stylus'
const outputFolderPath                 = './dist/css'
const specificSourceGlobsCommonSubPath = 'markdown-style-senarios'
const outputFileBaseNameCommonPrefix   = 'wulechuan-styles-for-html-via-markdown'

const sharedSourceRelativeGlobs = []

const extraSourceGlobsToWatch = [
    'markdown-style-parts',
    'utils',
]



const outputFileExtWithoutDot = 'css'


const allSpecificOptions = [
    {
        entryStylusFileSubPath: '_default/all-wrapped--has-toc',
        outputCSSFileBaseName: '.default--wrapped--with-toc',
        shouldNotOutputUncompressedVersion: false,
        shouldNotOutputCompressedVersion: false,
        // shouldDiscardMostCommentsEvenIfNotCompressCSS: false,
    },
    {
        entryStylusFileSubPath: '_default/all-wrapped--no-toc',
        outputCSSFileBaseName: '.default--wrapped--no-toc',
    },
    {
        entryStylusFileSubPath: '_default/none-wrapped--has-toc',
        outputCSSFileBaseName: '.default--with-toc',
    },
    {
        entryStylusFileSubPath: '_default/none-wrapped--no-toc',
        outputCSSFileBaseName: '.default--no-toc',
    },
    {
        entryStylusFileSubPath: 'firefox-addon/firefox-addon-_default',
        outputCSSFileBaseName: '--firefox-addon.default',
    },
    {
        entryStylusFileSubPath: 'typora/typora-_default',
        outputCSSFileBaseName: '--typora.default',
    },
    {
        entryStylusFileSubPath: 'vscode/vscode-_default',
        outputCSSFileBaseName: '--vscode.default',
    },
]



const allStylusTaskSettingsBuildingOptions = allSpecificOptions.map(options => {
    const {
        entryStylusFileSubPath,
        outputCSSFileBaseName,
        shouldNotOutputUncompressedVersion,
        shouldNotOutputCompressedVersion,
        shouldDiscardMostCommentsEvenIfNotCompressCSS,
    } = options

    const entryStylusFileSubPath2 = `${entryStylusFileSubPath}.styl`

    const taskSetDescription = `from ${
        chalk.black.bgMagenta(entryStylusFileSubPath2)
    }\n  to ${
        chalk.green(`...${outputCSSFileBaseName}.${outputFileExtWithoutDot}`)
    }`

    const specificSourceRelativeGlobs = [
        joinPathPOSIX(specificSourceGlobsCommonSubPath, entryStylusFileSubPath2)
    ]

    const outputFileBaseName = `${outputFileBaseNameCommonPrefix}${outputCSSFileBaseName}`

    return {
        taskSetDescription,
        sourceGlobsRootFolderPath,
        sharedSourceRelativeGlobs,
        specificSourceRelativeGlobs,
        extraSourceGlobsToWatch,
        outputFolderPath,
        outputFileBaseName,
        outputFileExtWithoutDot,
        shouldNotOutputUncompressedVersion,
        shouldNotOutputCompressedVersion,
        shouldDiscardMostCommentsEvenIfNotCompressCSS,
    }
})


export default allStylusTaskSettingsBuildingOptions
