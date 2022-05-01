window.shouldShowOnlyTwoLevelsOfTOCItemsAtMost = false
window.atBeginingShouldCollapseAllTOCItemsOfLevelsGreaterThan = 1
window.atBeginingShouldExpandTOCWhenWindowIsWideEnough = false

;(function setupAndStartApp () {
    const gitRepoURIs = [
        'https://gitee.com/nanchang-wulechuan/wulechuan-css-stylus-themes-for-htmls-via-markdowns.git',
        // 'https://code.aliyun.com/wulechuan/wulechuan-themes-for-htmls-via-markdowns.git',
        'https://github.com/wulechuan/wulechuan-css-stylus-themes-for-htmls-via-markdowns.git',
    ]

    const lengthOfLongestURI = gitRepoURIs.reduce((maxLength, uri) => Math.max(maxLength, uri.length), 0)
    const fullWidth = lengthOfLongestURI + 0
    const chineseFullWidth = Math.floor(fullWidth / 2) + 6 // 除以 2 得到的汉字宽限并不准确，不妨加上几个字。

    const printSingleLine = '-'.repeat(fullWidth)
    const printDoubleLine = '='.repeat(fullWidth)

    const emailAddress = 'wulechuan@live.com'
    const timeStamp = '北京时间 2022-05-01'

    const welcomeZhHansCN = '欢迎使用吴乐川设计的用于“控制文章目录之交互”的控制器。'
    const welcomeEn = 'Welcome to wulechuan\'s article TOC controller.'

    const words = '中国人——特别是汉族人，理应坚持广泛、规范地使用汉语。凡非必要之情形不说外国话、不用外国字。此乃天经地义！\n然则每当必要，亦不排斥采用外国之语言。不妨博世界之学问，养中国之精神。\n本人亦支持少数民族坚持采用自己民族的传统语言。仍须强调，凡中国人，皆应会用汉语、积极使用汉语，此乃中华各民族之大一统之必由。'

    const wordLines = []
    words.split('\n').forEach(rawLine => {
        wordLines.push('')

        wordLines.push('    ' + rawLine.slice(0, chineseFullWidth - 4))

        let restWords = rawLine.slice(chineseFullWidth - 4)

        while (restWords.length > 0) {
            const matchingResult = restWords.match(/^(，|。|！|，”|。”|！”| 》，|》。| 》！| 》，”| 》。”| 》！”)/)
            if (matchingResult) {
                const $1 = matchingResult[1]
                const lastLine = wordLines[wordLines.length - 1]
                wordLines[wordLines.length - 1] = lastLine + $1
                restWords = restWords.slice($1.length)
            }

            const newLine = restWords.slice(0, chineseFullWidth)
            if (newLine) {
                wordLines.push(newLine)
            }
            restWords = restWords.slice(newLine.length)
        }
    })

    console.log(
        `\n${
            printDoubleLine
        }\n\n%c${
            welcomeZhHansCN
        }%c\n（ ${
            welcomeEn
        } ）\n\n${
            ' '.repeat(fullWidth - emailAddress.length)
        }${
            emailAddress
        }\n${
            ' '.repeat(fullWidth - timeStamp.length - 3)
        }${
            timeStamp
        }\n\n${
            printSingleLine
        }\n\n${
            gitRepoURIs.join('\n')
        }\n\n${
            printSingleLine
        }\n${
            wordLines.join('\n')
        }\n\n${
            printDoubleLine
        }\n\n\n`,

        [
            'font-family: sans-serif;',
            'font-size: 1.25em;',
            'display: inline-block;',
            'vertical-align: baseline;',
            'color: #000;',
            'text-shadow: 0.5px 0.5px 2px rgba(0, 0, 0, 0.51);',
            'background-color: #ffe0be;',
            'border-radius: 3px;',
            'margin: 0.5em 0;',
            'padding: 0.5em 1em 0.5em 1.5em;',
        ].join(''),

        null
    )

    const cssClassNameTOCExists                  = 'markdown-article-toc-exists'
    const cssClassNameTOCIsVisible               = 'markdown-article-toc-is-visible'
    const cssClassNameTOCItemHasNestedList       = 'has-nested-toc-list'
    const cssClassNameTOCItemIsCollapsed         = 'is-collapsed'
    const cssClassNameTOCItemIsExpanded          = 'is-expanded'
    const cssClassNameTOCTogglingButton          = 'markdown-article-toc-toggling-button'
    const cssClassNameTOCShowsOnly2LevelsOfItems = 'should-show-2-levels-at-most'

    const selectorOfArticleRoot                  = '.markdown-article'
    const selectorOfBackToTopLink                = '.markdown-article-back-to-top'
    const selectorOfTOCRoot                      = 'nav.markdown-article-toc'

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

    tocRoot.classList.toggle(
        cssClassNameTOCShowsOnly2LevelsOfItems,
        window.shouldShowOnlyTwoLevelsOfTOCItemsAtMost
    )

    const backToTopLink = document.querySelector(selectorOfBackToTopLink)
    if (backToTopLink) {
        backToTopLink.onclick = onBackToTopLinkClick
    }

    articleRoot.onclick = onArticleClick

    const documentBody = document.body

    const tocElementsCommonParentNode = documentBody

    const tocStatusCSSClassNamesCarrier = documentBody
    tocStatusCSSClassNamesCarrier.classList.add(cssClassNameTOCExists) // Simply make sure

    markLevelIdForTOCAllItems(tocRoot)
    makeTOCItemsEachCollapsible()

    buildTOCPanelTogglingButton()


    let tocIsVisible
    let lastURLHashString = ''

    showOrHideTOCPanel(
        window.atBeginingShouldExpandTOCWhenWindowIsWideEnough &&
        window.innerWidth >= maxWindowWidthToEnableArticleClickingToHideTOC
    )



    // ----------------------------------------------------------------




    function buildTOCPanelTogglingButton () {
        /**
         * 我倾向于用 Javascript 来临时构建该按钮。
         * 因为如果一个苛刻的环境仅允许读文档，而不允许
         * Javascript 程序运行，那咱们还要切换按钮干嘛？
         *
         * ---------------------------------------------
         *
         * I prefer to build this button via Javascript,
         * because otherwise when Javascript is not allowed,
         * why do we need a button that cannot work?
         */


        let tocTogglingButton = document.querySelector(`.${cssClassNameTOCTogglingButton}`)

        /**
         * 万一按钮确实已经存在呢？比如工具构建好了静态的按钮？那就不必再创建一个新的了。
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

    function onTOCTogglingButtonClick () {
        showOrHideTOCPanel(!tocIsVisible)
    }

    function showOrHideTOCPanel (isToShowIt) {
        tocStatusCSSClassNamesCarrier.classList.toggle(cssClassNameTOCIsVisible, isToShowIt)
        tocIsVisible = isToShowIt
    }

    function isTOCPanelFloatingOverArticle () {
        return window.innerWidth <= maxWindowWidthToEnableArticleClickingToHideTOC
    }

    function isTOCPanelCoveringEntirePage () {
        return window.innerWidth <= maxWindowWidthWhenTOCPanelCoversEntirePage
    }

    function onArticleClick () {
        if (!isTOCPanelFloatingOverArticle()) {
            return
        }

        showOrHideTOCPanel(false)
    }

    function onBackToTopLinkClick () {
        if (!isTOCPanelCoveringEntirePage()) {
            return
        }

        showOrHideTOCPanel(false)
    }

    function markLevelIdForTOCAllItems (listRootParent, currentLevel) {
        const listRoot = listRootParent.querySelector('ol, ul')
        if (!listRoot) { return }

        if (!currentLevel) {
            currentLevel = 1
        }

        listRoot.classList.add(`toc-list-level-${currentLevel}`)

        const lis = Array.prototype.slice.apply(listRoot.children)
            .filter(el => el.tagName.toLowerCase() === 'li')

        lis.forEach(li => {
            li.tocLevelId = currentLevel
            li.classList.add(`toc-list-level-${currentLevel}-item`)
            markLevelIdForTOCAllItems(li, currentLevel + 1)
        })
    }

    function makeTOCItemsEachCollapsible () {
        const lis = Array.prototype.slice.apply(tocRoot.querySelectorAll('li'))
        lis.forEach(li => {
            if (li.querySelectorAll('li').length > 0) {
                const selfAnchor = li.querySelector('a')

                li.classList.add(cssClassNameTOCItemHasNestedList)
                li.hasNestedList = true
                li.isCollapsible = false // Temporary init value, might change below
                li.selfAnchor = selfAnchor
                li.onclick = tocItemAnchorClickHandler
            }
        })

        let allCollapsibleLis
        if (window.shouldShowOnlyTwoLevelsOfTOCItemsAtMost) {
            const lisOfLevel1 = tocRoot.querySelector('ol, ul').children
            allCollapsibleLis = lisOfLevel1
        } else {
            allCollapsibleLis = tocRoot.querySelectorAll(`li.${cssClassNameTOCItemHasNestedList}`)
        }

        Array.prototype.slice.apply(allCollapsibleLis).forEach(li => {
            li.isCollapsible = true
            const liShouldExpand = li.tocLevelId <= window.atBeginingShouldCollapseAllTOCItemsOfLevelsGreaterThan
            collapseOrExpandSingleLiElement(li, liShouldExpand)
        })
    }

    function tocItemAnchorClickHandler (e) {
        e.stopPropagation()

        const { srcElement } = e
        const liElement = this
        const { selfAnchor } = liElement

        if (srcElement !== liElement && srcElement !== selfAnchor) {
            return undefined
        }

        const hrefOfThisAnchor = selfAnchor.href
        let hashOfThisAnchor = ''

        if (hrefOfThisAnchor.match(/#/)) {
            hashOfThisAnchor = `#${hrefOfThisAnchor.split('#').pop()}`
        }



        const shouldGoToHashOfThisAnchor = !!hashOfThisAnchor && (lastURLHashString !== hashOfThisAnchor)
        const forceToExpand = shouldGoToHashOfThisAnchor

        lastURLHashString = hashOfThisAnchor

        let TOCItemIsCollapsibleInCurrentSituation = liElement.isCollapsible

        if (isTOCPanelCoveringEntirePage()) {
            TOCItemIsCollapsibleInCurrentSituation = false
        }

        if (TOCItemIsCollapsibleInCurrentSituation) {
            const { classList } = liElement
            const liShouldExpand = classList.contains(cssClassNameTOCItemIsCollapsed) || forceToExpand
            collapseOrExpandSingleLiElement(liElement, liShouldExpand)
        }
    }

    function collapseOrExpandSingleLiElement (liElement, shouldExpand) {
        const { classList } = liElement
        if (shouldExpand) {
            if (!classList.contains(cssClassNameTOCItemIsExpanded)) {
                classList.add(cssClassNameTOCItemIsExpanded)
            }
            if (classList.contains(cssClassNameTOCItemIsCollapsed)) {
                classList.remove(cssClassNameTOCItemIsCollapsed)
            }
        } else {
            if (!classList.contains(cssClassNameTOCItemIsCollapsed)) {
                classList.add(cssClassNameTOCItemIsCollapsed)
            }
            if (classList.contains(cssClassNameTOCItemIsExpanded)) {
                classList.remove(cssClassNameTOCItemIsExpanded)
            }
        }
    }
})()
