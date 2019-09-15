import cssNano from 'cssnano'


export default function getPluginsForOnePostCSSInstance(shouldCompressCSS, shouldDiscardMostCommentsEvenIfNotCompressCSS) {
    const pluginsForPostCSS = [
        // autoprefixer({browsers: ['last 1 version']}),
    ]


    const cssNanoOptions = {}
    let shouldUseCSSNano = false
    if (shouldCompressCSS) {

        shouldUseCSSNano = true
        cssNanoOptions.preset = 'default'

    } else if (shouldDiscardMostCommentsEvenIfNotCompressCSS) {

        shouldUseCSSNano = true
        const customizedOptions = {
            rawCache: false,
            calc: false,
            colormin: false,
            convertValues: false,
            // discardComments: true,
            discardDuplicates: false,
            discardEmpty: false,
            discardOverridden: false,
            mergeLonghand: false,
            mergeRules: false,
            minifyFontValues: false,
            minifyGradients: false,
            minifyParams: false,
            minifySelectors: false,
            normalizeCharset: false,
            normalizeDisplayValues: false,
            normalizePositions: false,
            normalizeRepeatStyle: false,
            normalizeString: false,
            normalizeTimingFunctions: false,
            normalizeUnicode: false,
            normalizeUrl: false,
            normalizeWhitespace: false,
            orderedValues: false,
            reduceInitial: false,
            reduceTransforms: false,
            svgo: false,
            uniqueSelectors: false,
        }

        cssNanoOptions.preset = [ 'default', customizedOptions ]

    }

    if (shouldUseCSSNano) {
        pluginsForPostCSS.push(cssNano(cssNanoOptions))
    }

    if (pluginsForPostCSS.length < 1) {
        return null
    }

    return pluginsForPostCSS
}
