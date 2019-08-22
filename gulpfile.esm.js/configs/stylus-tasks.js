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
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: '_default/non-wrapped--has-toc',
        outputCSSFileBaseName: '.default--with-toc',
        shouldNotOutputUncompressedVersion: false,
        shouldNotOutputCompressedVersion: false,
        // shouldDiscardMostCommentsEvenIfNotCompressCSS: false,
    },
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: '_default/non-wrapped--no-toc',
        outputCSSFileBaseName: '.default--no-toc',
    },
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: '_default/all-wrapped--has-toc',
        outputCSSFileBaseName: '.default--wrapped--with-toc',
    },
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: '_default/all-wrapped--no-toc',
        outputCSSFileBaseName: '.default--wrapped--no-toc',
    },
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: 'firefox-addon/firefox-addon-_default',
        outputCSSFileBaseName: '--firefox-addon.default',
        shouldNotOutputCompressedVersion: true,
    },
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: 'typora/typora-_default',
        outputCSSFileBaseName: '--typora.default',
        shouldNotOutputCompressedVersion: true,
    },
    {
        // shouldSkipThisTask: true,
        entryStylusFileSubPath: 'vscode/vscode-_default',
        outputCSSFileBaseName: '--vscode.default',
        shouldNotOutputUncompressedVersion: true,
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

        if (shouldNotOutputUncompressedVersion && shouldNotOutputCompressedVersion) {
            throw new RangeError(`Why don\'t we output anything for "${entryStylusFileSubPath}"?`)
        }

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
