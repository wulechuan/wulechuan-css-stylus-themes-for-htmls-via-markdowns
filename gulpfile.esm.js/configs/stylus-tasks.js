import path from 'path'
import chalk from 'chalk'

const joinPathPOSIX = path.posix.join

const sourceGlobsRootFolderPath        = './source/stylus'
const outputFolderPath                 = './dist/css'
const specificSourceGlobsCommonSubPath = 'markdown-style-scenarios'
const outputFileBaseNameCommonPrefix   = 'wulechuan-styles-for-html-via-markdown'

const sharedSourceRelativeGlobs = []

const extraSourceGlobsToWatch = [
    /*
        All these are imported by stylus compiler, 
        no need to watch them at all.
    */

    // 'markdown-style-parts',
    // 'utils',
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


const divLineForPrinting = '-'.repeat(75)

console.log('')
console.log(divLineForPrinting)

let theOnlyStylToBuildArgument = process.env.theOnlyStylToBuild
if (typeof theOnlyStylToBuildArgument === 'string') {
    theOnlyStylToBuildArgument = theOnlyStylToBuildArgument.trim()
}

let theOnlyStylToBuild = null
if (theOnlyStylToBuildArgument) {
    if (theOnlyStylToBuildArgument === 'true' ||
        theOnlyStylToBuildArgument ===  true
    ) {
        theOnlyStylToBuild = allSpecificOptions[0].entryStylusFileSubPath
    } else {
        theOnlyStylToBuild = theOnlyStylToBuildArgument
    }

    console.log(`theOnlyStylToBuildArgument = "${theOnlyStylToBuildArgument}"`)
    console.log(`        theOnlyStylToBuild = "${theOnlyStylToBuild}"`)
    console.log('')
}


let outputCSSFilesCount = 0

const allStylusTaskSettingsBuildingOptions = allSpecificOptions
    .filter(options => !options.shouldSkipThisTask && (
        !theOnlyStylToBuild || theOnlyStylToBuild === options.entryStylusFileSubPath
    ))
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

        if (!shouldNotOutputUncompressedVersion) {
            outputCSSFilesCount++
        }

        if (!shouldNotOutputCompressedVersion) {
            outputCSSFilesCount++
        }

        const willOutput2CSSFiles = !shouldNotOutputUncompressedVersion && !shouldNotOutputCompressedVersion
        const willOutputMinCSSFileOnly = shouldNotOutputUncompressedVersion && !shouldNotOutputCompressedVersion

        const entryStylusFileSubPath2 = `${entryStylusFileSubPath}.styl`
        const outputFileBaseName = `${outputFileBaseNameCommonPrefix}${outputCSSFileBaseName}`

        const taskSetDescription = `from ${
            chalk.black.bgMagenta(entryStylusFileSubPath2)
        }\n  to ${
            chalk.black.bgGreen(
                `${outputFileBaseName}${
                    chalk.black.bgRed(willOutputMinCSSFileOnly ? '.min' : '')
                }.${outputFileExtWithoutDot}`
            )
        }${
            willOutput2CSSFiles ? ' (+ .min)' : ''
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


console.log('Source `.styl` file(s) count:      ', chalk.magenta(allStylusTaskSettingsBuildingOptions.length))
console.log('Should output `.css` file(s) count:', chalk.green(outputCSSFilesCount))

console.log(divLineForPrinting)
console.log('')

export default allStylusTaskSettingsBuildingOptions
