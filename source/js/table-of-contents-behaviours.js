setupAndStartApp()

function setupAndStartApp() {
    const cssClassNameTOCExists            = 'markdown-article-toc-exists'
    const cssClassNameTOCIsVisible         = 'markdown-article-toc-is-visible'
    const cssClassNameTOCItemHasNestedList = 'has-nested-toc-list'
    const cssClassNameTOCItemIsCollapsed   = 'is-collapsed'
    const cssClassNameTOCTogglingButton    = 'markdown-article-toc-toggling-button'

    const selectorOfArticleRoot            = '.markdown-article'
    const selectorOfBackToTopLink          = '.markdown-article-back-to-top'
    const selectorOfTOCRoot                = 'nav.markdown-article-toc'

    const maxWindowWidthWhenTOCPanelCoversEntirePage     = 600  // pixels
    const maxWindowWidthToEnableArticleClickingToHideTOC = 1000 // pixels



    const articleRoot = document.querySelector(selectorOfArticleRoot)
    if (!articleRoot) {
        return
    }

    const tocRoot = document.querySelector(selectorOfTOCRoot)
    if (!tocRoot) {
        return
    }

    const backToTopLink = document.querySelector(selectorOfBackToTopLink)
    if (backToTopLink) {
        backToTopLink.onclick = onBackToTopLinkClick
    }

    articleRoot.onclick = onArticleClick

    const documentBody = document.body

    const tocElementsCommonParentNode = documentBody

    const tocStatusCSSClassNamesCarrier = documentBody
    tocStatusCSSClassNamesCarrier.classList.add(cssClassNameTOCExists) // Simply make sure

    makeTOCItemsEachCollapsible()

    buildTOCPanelTogglingButton()


    let tocIsVisible
    showOrHideTOCPanel(false)



    // ----------------------------------------------------------------




    function buildTOCPanelTogglingButton() {
        /**
         * 我倾向于用 Javascript 来临时构建该按钮。
         * 因为如果一共苛刻的环境仅允许读文档，而不允许
         * Javascript 程序运行，那咱们还要切换按钮干嘛？
         *
         * ---------------------------------------------
         *
         * I prefer to build button via Javascript,
         * because otherwise when Javascript is not allowed,
         * why do we need a button that cannot work?
         */


        let tocTogglingButton = document.querySelector(`.${cssClassNameTOCTogglingButton}`)

        /**
         * 万一按钮确实业已存在呢？比如工具构建好了静态的按钮？那就不必再创建一个新的了。
         * What if the button already exists? Then we simply don't create one more.
         */
        if (!tocTogglingButton) {
            tocTogglingButton = document.createElement('button')
            tocTogglingButton.className = cssClassNameTOCTogglingButton

            if (tocElementsCommonParentNode === documentBody) {
                tocElementsCommonParentNode.insertBefore(tocTogglingButton, document.scripts[0])
            } else {
                tocElementsCommonParentNode.appendChild(tocTogglingButton)
            }
        }

        if (tocTogglingButton.onclick === null) {
            tocTogglingButton.onclick = onTOCTogglingButtonClick
        }

        return tocTogglingButton
    }

    function onTOCTogglingButtonClick() {
        showOrHideTOCPanel(!tocIsVisible)
    }

    function showOrHideTOCPanel(isToShowIt) {
        tocStatusCSSClassNamesCarrier.classList.toggle(cssClassNameTOCIsVisible, isToShowIt)
        tocIsVisible = isToShowIt
    }

    function isTOCPanelFloatingOverArticle() {
        return window.innerWidth <= maxWindowWidthToEnableArticleClickingToHideTOC
    }

    function isTOCPanelCoveringEntirePage() {
        return window.innerWidth <= maxWindowWidthWhenTOCPanelCoversEntirePage
    }

    function onArticleClick() {
        if (!isTOCPanelFloatingOverArticle()) {
            return
        }

        showOrHideTOCPanel(false)
    }

    function onBackToTopLinkClick() {
        if (!isTOCPanelCoveringEntirePage()) {
            return
        }

        showOrHideTOCPanel(false)
    }

    function makeTOCItemsEachCollapsible() {
        const lis = Array.prototype.slice.apply(tocRoot.querySelectorAll('li'))
        lis.forEach(li => {
            if (li.querySelectorAll('li').length > 0) {
                li.classList.add(cssClassNameTOCItemHasNestedList)
                li.hasNestedList = true
                li.selfAnchor = li.querySelector('a')
                li.onclick = tocItemAnchorClickHandler
            }
        })

        const lisLevel1 = Array.prototype.slice.apply(tocRoot.querySelector('ol, ul').children)
        lisLevel1.forEach(li => {
            if (li.hasNestedList) {
                li.isCollapsible = true
            }

            li.classList.add(cssClassNameTOCItemIsCollapsed)
        })
    }

    function tocItemAnchorClickHandler(e) {
        e.stopPropagation()

        const { srcElement } = e

        if (srcElement !== this && srcElement !== this.selfAnchor) {
            return undefined
        }

        let TOCItemIsAllowedToCollapse = this.isCollapsible
        let shouldNotFollowLinkOfThisTOCItem = false

        if (isTOCPanelCoveringEntirePage()) {
            TOCItemIsAllowedToCollapse = false
        }

        if (TOCItemIsAllowedToCollapse) {
            if (this.classList.contains(cssClassNameTOCItemIsCollapsed)) {
                this.classList.remove(cssClassNameTOCItemIsCollapsed)
            } else {
                this.classList.add(cssClassNameTOCItemIsCollapsed)
                shouldNotFollowLinkOfThisTOCItem = true
            }
        } else {
            this.classList.remove(cssClassNameTOCItemIsCollapsed)
        }

        if (shouldNotFollowLinkOfThisTOCItem) {
            return false
        }
    }
}
