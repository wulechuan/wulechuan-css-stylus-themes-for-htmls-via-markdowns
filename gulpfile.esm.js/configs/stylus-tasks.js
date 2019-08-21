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
        shouldSkipThisTask: false,
        entryStylusFileSubPath: '_default/all-wrapped--has-toc',
        outputCSSFileBaseName: '.default--wrapped--with-toc',
        shouldNotOutputUncompressedVersion: false,
        shouldNotOutputCompressedVersion: false,
        // shouldDiscardMostCommentsEvenIfNotCompressCSS: false,
    },
    {
        shouldSkipThisTask: false,
        entryStylusFileSubPath: '_default/all-wrapped--no-toc',
        outputCSSFileBaseName: '.default--wrapped--no-toc',
    },
    {
        shouldSkipThisTask: false,
        entryStylusFileSubPath: '_default/none-wrapped--has-toc',
        outputCSSFileBaseName: '.default--with-toc',
    },
    {
        shouldSkipThisTask: false,
        entryStylusFileSubPath: '_default/none-wrapped--no-toc',
        outputCSSFileBaseName: '.default--no-toc',
    },
    {
        shouldSkipThisTask: false,
        entryStylusFileSubPath: 'firefox-addon/firefox-addon-_default',
        outputCSSFileBaseName: '--firefox-addon.default',
    },
    {
        shouldSkipThisTask: false,
        entryStylusFileSubPath: 'typora/typora-_default',
        outputCSSFileBaseName: '--typora.default',
    },
    {
        shouldSkipThisTask: false,
        entryStylusFileSubPath: 'vscode/vscode-_default',
        outputCSSFileBaseName: '--vscode.default',
    },
]



const allStylusTaskSettingsBuildingOptions = allSpecificOptions
    .filter(options => !options.shouldSkipThisTask)
    .map(options => {
        const {
            entryStylusFileSubPath,
            outputCSSFileBaseName,
            shouldNotOutputUncompressedVersion,
            shouldNotOutputCompressedVersion,
            shouldDiscardMostCommentsEvenIfNotCompressCSS,
        } = options

        const entryStylusFileSubPath2 = `${entryStylusFileSubPath}.styl`
        const outputFileBaseName = `${outputFileBaseNameCommonPrefix}${outputCSSFileBaseName}`

        const taskSetDescription = `from ${
            chalk.black.bgMagenta(entryStylusFileSubPath2)
        }\n  to ${
            chalk.black.bgGreen(`${outputFileBaseName}.${outputFileExtWithoutDot}`)
        }\n`

        const specificSourceRelativeGlobs = [
            joinPathPOSIX(specificSourceGlobsCommonSubPath, entryStylusFileSubPath2)
        ]


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