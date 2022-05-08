/**
 * Automatically update `document.title` according to:
 *     - page language
 *     - `window.innerWidth`
 *     - expansion state of toc
 *
 * so that, when we save a screenshot png in the firefox,
 * the png file is named correctly, ~~ALWAYS~~.
 * BUT with a prefix!
 *
 * Please also refer to this bash file:
 *     `<this-repo-root-folder>/to-collect-firefox-screenshot-files.sh`
 * to automatially rename files and move renamed files
 * into correct folder.
 */

(function () {
    const pageLanguageIsChinese = !!document.documentElement.lang.match(/zh|-?CN|-?[hH]ans/i)
    const themeTypeDetectingDOM = document.documentElement
    const darkThemeIsApplied = detectWhetherTheDarkThemeIsApplied()

    updateDocumentTitle()

    window.addEventListener('resize', function () {
        updateDocumentTitle()
    })

    document.addEventListener('click', function () {
        updateDocumentTitle()
    })





    function detectWhetherTheDarkThemeIsApplied() {
        const computedStyle = window.getComputedStyle(themeTypeDetectingDOM)
        const { backgroundColor } = computedStyle
        const rgbValues = backgroundColor.split(/[(),]/).slice(1, 4).map(s => parseInt(s))

        // console.log('html { background-color:', backgroundColor, '}')
        console.log('html background color RGB values:', ...rgbValues)

        return rgbValues.reduce((allDark, v) => {
            return allDark && v <= 30
        }, true)
    }

    function updateDocumentTitle() {
        const windowInnerWidth = window.innerWidth

        const tocExists     =              document.body.classList.contains('markdown-article-toc-exists')
        const tocIsExpanded = tocExists && document.body.classList.contains('markdown-article-toc-is-visible')


        if (pageLanguageIsChinese) {
            const themeTypeString = darkThemeIsApplied ? '默认深色' : '默认浅色'
            const tocStatusString = !tocExists ? '无目录' : (tocIsExpanded ? '目录已展开': '目录已收叠')

            if (windowInnerWidth > 900) {
                document.title = `示例：简体中文范文配${themeTypeString}主题，1-在宽大尺寸浏览器中的效果（${tocStatusString}）`
            } else if (windowInnerWidth > 600) {
                document.title = `示例：简体中文范文配${themeTypeString}主题，2-在中等尺寸浏览器中的效果（${tocStatusString}）`
            } else {
                document.title = `示例：简体中文范文配${themeTypeString}主题，3-在窄小尺寸浏览器中的效果（${tocStatusString}）`
            }

        } else {
            const themeTypeString = darkThemeIsApplied ? 'default-dark-colored-theme' : 'default-light-colored-theme'
            const tocStatusString = !tocExists ? 'without-toc' : (tocIsExpanded ? 'with-toc-expanded' : 'with-toc-collapsed')

            if (windowInnerWidth > 900) {
                document.title = `example_en-US_${themeTypeString}_1-in-a-wide-window_${tocStatusString}`
            } else if (windowInnerWidth > 600) {
                document.title = `example_en-US_${themeTypeString}_2-in-a-window-of-medium-width_${tocStatusString}`
            } else {
                document.title = `example_en-US_${themeTypeString}_3-in-a-narrow-window_${tocStatusString}`
            }
        }
    }
})()
