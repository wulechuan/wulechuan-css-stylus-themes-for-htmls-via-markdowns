(function () {
    try {
        main()
    } catch (error) {
        alert(error.message)
    }



    function main () {
        const cssClassNameOfTOCItemAnchorsFakeHovering  = 'fake-hovering'
        const minWindowInnerWidthThatMeansWide          = 1000 // pixels
        const minWindowInnerWidthThatMeansOfMediumWidth = 600  // pixels
        const markdownArticleScrollingDOM = document.documentElement
        const markdownArticleParentDOM    = document.body
        const markdownArticleDOM          = document.querySelector('.markdown-article')
        const markdownArticleTOCPanelDOMSelector = '.markdown-article-toc'
        const themeTypeDetectingDOM = document.documentElement



        const pageLanguageIsChinese = !!document.documentElement.lang.match(/zh|cn|hans/i)
        console.log('pageLanguageIsChinese', pageLanguageIsChinese)
        const tocExists = markdownArticleParentDOM.classList.contains('markdown-article-toc-exists')
        const darkThemeIsApplied = detectWhetherTheDarkThemeIsApplied()



        const arraySlice = Array.prototype.slice



        let tocPanelDOM = null
        let tocPanelScrollingDOM = null
        let allTOCPanelItemAnchors = []
        let allPreCodeTags = []
        let pageSettingsForTakingSnapshotsWhenTOCPanelExpanded

        if (tocExists) {

            tocPanelDOM = document.querySelector(markdownArticleTOCPanelDOMSelector)
            allTOCPanelItemAnchors = arraySlice.apply(tocPanelDOM.querySelectorAll('ul > li > a, ol > li > a'))
            allPreCodeTags = arraySlice.apply(markdownArticleDOM.querySelectorAll('pre > code'))

            tocPanelScrollingDOM = tocPanelDOM.querySelector('.toc-list-level-1')
            if (!tocPanelScrollingDOM) {
                throw new Error('tocPanelScrollingDOM not found.')
            }

            const tocItemAnchor2 = tocPanelDOM.querySelector('.toc-list-level-1 > li:nth-child(2) > a')
            const tocItemAnchor3 = tocPanelDOM.querySelector('.toc-list-level-1 > li:nth-child(2) > a')

            const element2ToScrollArticleDownTo = markdownArticleDOM.querySelector('img[src="./illustrates/duan-er-pretty.jpg"]')
            const element3ToScrollArticleDownTo = markdownArticleDOM.querySelector('img[src="./illustrates/duan-er-pretty.jpg"]')

            if (pageLanguageIsChinese) {

                // const element1ToScrollArticleDownTo = findFirstNearestElementToText(allPreCodeTags, 'aBoolean')
                const allParagraphElements = Array.from(markdownArticleDOM.querySelectorAll('p'))
                const element1ToScrollArticleDownTo = findFirstNearestElementToText(allParagraphElements, '再来看看行文中的【代码词汇】')

                const tocItemAnchor1 = tocPanelDOM.querySelector([
                    'ul', 'ol',
                ].map(ULOrOL => `.toc-list-level-1 > li:nth-child(1) > ${ULOrOL} > li:nth-child(4) > a`).join(', '))

                if (!element1ToScrollArticleDownTo) {
                    throw new Error('element1ToScrollArticleDownTo not found.')
                }

                if (!element2ToScrollArticleDownTo) {
                    throw new Error('element2ToScrollArticleDownTo not found.')
                }

                if (!element3ToScrollArticleDownTo) {
                    throw new Error('element3ToScrollArticleDownTo not found.')
                }

                if (!tocItemAnchor1) {
                    throw new Error('tocItemAnchor1 not found.')
                }

                if (!tocItemAnchor2) {
                    throw new Error('tocItemAnchor2 not found.')
                }

                if (!tocItemAnchor3) {
                    throw new Error('tocItemAnchor2 not found.')
                }

                pageSettingsForTakingSnapshotsWhenTOCPanelExpanded = {
                    'in-wide-window': {
                        elementToScrollArticleDownTo: element1ToScrollArticleDownTo,
                        tocItemAnchorToFakeHover: tocItemAnchor1,
                        articleScrollYOffset: 25,
                        tocPanelScrollY: 27,
                    },

                    'in-window-of-medium-width': {
                        elementToScrollArticleDownTo: element2ToScrollArticleDownTo,
                        tocItemAnchorToFakeHover: tocItemAnchor2,
                        articleScrollYOffset: -79,
                        tocPanelScrollY: 300,
                    },

                    'in-narrow-window': {
                        elementToScrollArticleDownTo: element3ToScrollArticleDownTo,
                        tocItemAnchorToFakeHover: tocItemAnchor2,
                        articleScrollYOffset: -190, // Value diff from English article
                        tocPanelScrollY: 0,
                    },
                }

            } else {

                // const element1ToScrollArticleDownTo = findFirstNearestElementToText(allPreCodeTags, 'aBoolean')
                const allParagraphElements = Array.from(markdownArticleDOM.querySelectorAll('p'))
                const element1ToScrollArticleDownTo = findFirstNearestElementToText(allParagraphElements, 'italic phrase')

                const tocItemAnchor1 = tocPanelDOM.querySelector([
                    'ul', 'ol',
                ].map(ULOrOL => `.toc-list-level-1 > li:nth-child(1) > ${ULOrOL} > li:nth-child(2) > a`).join(', '))

                if (!element1ToScrollArticleDownTo) {
                    throw new Error('element1ToScrollArticleDownTo not found.')
                }

                if (!element2ToScrollArticleDownTo) {
                    throw new Error('element2ToScrollArticleDownTo not found.')
                }

                if (!element3ToScrollArticleDownTo) {
                    throw new Error('element3ToScrollArticleDownTo not found.')
                }

                if (!tocItemAnchor1) {
                    throw new Error('tocItemAnchor1 not found.')
                }

                if (!tocItemAnchor2) {
                    throw new Error('tocItemAnchor2 not found.')
                }

                if (!tocItemAnchor3) {
                    throw new Error('tocItemAnchor2 not found.')
                }

                pageSettingsForTakingSnapshotsWhenTOCPanelExpanded = {
                    'in-wide-window': {
                        elementToScrollArticleDownTo: element1ToScrollArticleDownTo,
                        tocItemAnchorToFakeHover: tocItemAnchor1,
                        articleScrollYOffset: -64,
                        tocPanelScrollY: 27,
                    },

                    'in-window-of-medium-width': {
                        elementToScrollArticleDownTo: element2ToScrollArticleDownTo,
                        tocItemAnchorToFakeHover: tocItemAnchor2,
                        articleScrollYOffset: -79,
                        tocPanelScrollY: 300,
                    },

                    'in-narrow-window': {
                        elementToScrollArticleDownTo: element3ToScrollArticleDownTo,
                        tocItemAnchorToFakeHover: tocItemAnchor2,
                        articleScrollYOffset: -480,
                        tocPanelScrollY: 0,
                    },
                }
            }



            const styleTagForTOCItemAnchorsFakeHover = document.createElement('style')

            if (darkThemeIsApplied) {
                styleTagForTOCItemAnchorsFakeHover.innerHTML = `
                html body nav.markdown-article-toc li > a[href^="#"].${cssClassNameOfTOCItemAnchorsFakeHovering} {
                    color: #6d8 !important;
                    border-color: rgba(255, 255, 255, 0.1) transparent!important;
                    background-color: #dfe1!important;
                    background-image: linear-gradient(to right, transparent 0.25em, rgba(255, 255, 255, 0.1) 4em, transparent) !important;
                }`
            } else {
                styleTagForTOCItemAnchorsFakeHover.innerHTML = `
                html body nav.markdown-article-toc li > a[href^="#"].${cssClassNameOfTOCItemAnchorsFakeHovering} {
                    color: #6f9 !important;
                    border-color: rgba(255, 255, 255, 0.19) transparent !important;
                    background-color: #dfe1 !important;
                    background-image: linear-gradient(to right, transparent 0.25em, rgba(255, 255, 255, 0.1) 4em, transparent) !important;
                }`
            }

            document.head.appendChild(styleTagForTOCItemAnchorsFakeHover)



            const styleTagForDisableAllTransitionsAndAnimations = document.createElement('style')

            if (darkThemeIsApplied) {
                styleTagForDisableAllTransitionsAndAnimations.innerHTML = `
                * {
                    transition: none !important;
                    animation: none !important;
                }`
            } else {
                styleTagForDisableAllTransitionsAndAnimations.innerHTML = `
                * {
                    transition: none !important;
                    animation: none !important;
                }`
            }

            document.head.appendChild(styleTagForDisableAllTransitionsAndAnimations)
        }

        // updateStatusesOfWindowAndTOCPanelItem()

        // window.addEventListener('resize', function () {
        //     updateStatusesOfWindowAndTOCPanelItem()
        // })

        document.addEventListener('click', function () {
            updateStatusesOfWindowAndTOCPanelItem()
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

        function windowIsWide() {
            return window.innerWidth >= minWindowInnerWidthThatMeansWide
        }

        function windowIsOfMediumWidth() {
            return !windowIsWide() && window.innerWidth >= minWindowInnerWidthThatMeansOfMediumWidth
        }

        // function windowIsNarrow() {
        //     return !windowIsWide() && !windowIsOfMediumWidth()
        // }

        function findFirstTextNodeContainingText(elementsArrayToSearchTextIn, text) {
            const [ firstMatchedCodeTag ] = elementsArrayToSearchTextIn.filter(code => code.innerText.match(text))

            if (!firstMatchedCodeTag) {
                return null
            }

            return searchChildTextNodes(firstMatchedCodeTag)


            function searchChildTextNodes(element) {
                const childNodes = arraySlice.apply(element.childNodes)
                const matchedTextNodes = childNodes.filter(n => {
                    return n.nodeType === 3 && !!n.nodeValue.match(text)
                })

                if (matchedTextNodes.length > 0) {
                    return matchedTextNodes[0]
                }

                for (let index = 0; index < element.children.length; index++) {
                    const childElement = element.children[index]
                    const foundTextNodeOfThisElement = searchChildTextNodes(childElement)
                    if (foundTextNodeOfThisElement) {
                        return foundTextNodeOfThisElement
                    }
                }

                return null
            }
        }

        function findFirstNearestElementToText(elementsArrayToSearchTextIn, text) {
            const firstMatchedTextNode = findFirstTextNodeContainingText(elementsArrayToSearchTextIn, text)
            if (!firstMatchedTextNode) {
                throw new Error('No <code> tag contains text "' + text + '"!')
            }

            const nearestElement = firstMatchedTextNode.previousElementSibling || firstMatchedTextNode.parentElement

            // console.log('First matched text node:', firstMatchedTextNode)
            // console.log('        Nearest element:', nearestElement)

            return nearestElement
        }

        function decideWindowScrollingTopValueAndTOCItemToHover() {
            const tocIsExpanded = tocExists && document.body.classList.contains('markdown-article-toc-is-visible')

            if (!tocIsExpanded) {
                return {
                    articleScrollY: 0,
                    tocItemAnchorToFakeHover: null,
                }
            }

            let rawConfig

            if (windowIsWide()) {
                rawConfig = pageSettingsForTakingSnapshotsWhenTOCPanelExpanded['in-wide-window']
            } else if (windowIsOfMediumWidth()) {
                rawConfig = pageSettingsForTakingSnapshotsWhenTOCPanelExpanded['in-window-of-medium-width']
            } else {
                rawConfig = pageSettingsForTakingSnapshotsWhenTOCPanelExpanded['in-narrow-window']
            }

            const {
                tocItemAnchorToFakeHover,
                articleScrollYOffset,
                tocPanelScrollY,
                elementToScrollArticleDownTo,
            } = rawConfig

            const articleScrollY = elementToScrollArticleDownTo.offsetTop + articleScrollYOffset

            console.debug('-'.repeat(19))
            console.debug('will scroll to near to', elementToScrollArticleDownTo)
            console.debug('will scroll these many pixels:', articleScrollY)
            console.debug('will highlight this TOC item:', tocItemAnchorToFakeHover)

            return {
                articleScrollY,
                tocPanelScrollY,
                tocItemAnchorToFakeHover,
            }
        }

        function updateStatusesOfWindowAndTOCPanelItem() {
            const {
                articleScrollY,
                tocPanelScrollY,
                tocItemAnchorToFakeHover,
            } = decideWindowScrollingTopValueAndTOCItemToHover()


            const isToScrollWindow = markdownArticleScrollingDOM === window
            console.debug('isToScrollWindow', isToScrollWindow, 'scrollY/scrollTop will be', articleScrollY)
            if (isToScrollWindow) {
                markdownArticleScrollingDOM.scrollY   = articleScrollY
            } else {
                markdownArticleScrollingDOM.scrollTop = articleScrollY
            }

            if (tocExists) {
                // console.log(tocItemAnchorToFakeHover)

                allTOCPanelItemAnchors.forEach(dom => dom.classList.toggle(
                    cssClassNameOfTOCItemAnchorsFakeHovering,
                    dom === tocItemAnchorToFakeHover
                ))

                tocPanelScrollingDOM.scrollTop = tocPanelScrollY

                if (tocItemAnchorToFakeHover) {
                    const liElement = tocItemAnchorToFakeHover.parentElement
                    if (!liElement.classList.contains('is-expanded')) {
                        liElement.classList.add('is-expanded')
                    }

                    if (liElement.classList.contains('is-collapsed')) {
                        liElement.classList.remove('is-collapsed')
                    }
                }
            }
        }
    }
})()
