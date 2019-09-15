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
 *     `<this-repo-root-folder>/collect-firefox-screenshot-files.sh`
 * to automatially rename files and move renamed files
 * into correct folder.
 */

(function () {
    const pageLanguageIsChinese = !!document.documentElement.lang.match(/zh|-?CN|-?[hH]ans/i)

    updateDocumentTitle()

    window.addEventListener('resize', function () {
        updateDocumentTitle()
    })

    document.addEventListener('click', function () {
        updateDocumentTitle()
    })






    function updateDocumentTitle() {
        const windowInnerWidth = window.innerWidth

        const tocExists     =              document.body.classList.contains('markdown-article-toc-exists')
        const tocIsExpanded = tocExists && document.body.classList.contains('markdown-article-toc-is-visible')


        if (pageLanguageIsChinese) {
            const tocStatusString = !tocExists ? '-无文章纲要列表' : (tocIsExpanded ? '-文章纲要列表已展开': '-文章纲要列表已收叠')

            if (windowInnerWidth > 900) {
                document.title = 'zh-Hans-CN-1-大尺寸浏览器中的效果'   + tocStatusString
            } else if (windowInnerWidth > 600) {
                document.title = 'zh-Hans-CN-2-中等尺寸浏览器中的效果' + tocStatusString
            } else {
                document.title = 'zh-Hans-CN-3-窄小尺寸浏览器中的效果' + tocStatusString
            }

        } else {
            const tocStatusString = !tocExists ? '-without-toc' : (tocIsExpanded ? '-with-toc-expanded' : '-with-toc-collapsed')

            if (windowInnerWidth > 900) {
                document.title = 'en-US-example-1-in-a-wide-window'            + tocStatusString
            } else if (windowInnerWidth > 600) {
                document.title = 'en-US-example-2-in-a-window-of-medium-width' + tocStatusString
            } else {
                document.title = 'en-US-example-3-in-a-narrow-window'          + tocStatusString
            }
        }
    }
})()
