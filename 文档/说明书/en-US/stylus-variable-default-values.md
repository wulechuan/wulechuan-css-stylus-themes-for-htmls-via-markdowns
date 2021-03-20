<link rel="stylesheet" href="../../../源代码/发布的源代码/文章排版与配色方案集/层叠样式表/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# Wulechuan's HTML Article Themes

- Go back to [ReadMe.en-US.md](./ReadMe.md)


## Multilingual Editions of this Article

- Nothing yet.


## Stylus Variables

### Default Values

```stylus
// * * * * * * * * * * * * * * *  * * * * * * * * * * * * *
// *                    CSS Selectors                     *
// * * * * * * * * * * * * * * *  * * * * * * * * * * * * *

// This is also the parent of the `div.markdown-article-toc-panel`, if the div exists.
_selectorOf_article_rootParent = 'body'

// Empty string or `null` means no selector at all
_selectorOf_article_root = ''

_selectorOf_article_backdropBackgroundColorCarrier = 'html'
_selectorOf_article_headingsPermantLinkAnchors     = '.header-anchor'



_selectorsOf_fontFamily_baseFontFamilyCarriers      = _selectorOf_article_root
_selectorsOf_fontFamily_monospaceFontFamilyCarriers = 'kbd, pre, code'
_selectorsOf_fontSize_baseFontSizeCarriers          = _selectorOf_article_root



_selectorOf_backToTopLink                = '.markdown-article-back-to-top'
_selectorOf_TOC_byMarkdownItTOCDoneRight = 'nav.markdown-article-toc'





// * * * * * * * * * * * * * * *  * * * * * * * * * * * * *
// *           Names of Source Files or Folders           *
// * * * * * * * * * * * * * * *  * * * * * * * * * * * * *

_sourceFolderNameOf_articleChiefTheming = 'theme-0'



// Note: allowed value is either of [ 'highlightjs', 'code-mirror' ]
_sourceFolderNameOf_chosenTechniqueTypeOfCodeBlocks = 'highlightjs'


// Empty string or `null` means no secondary title at all.
// Example: _sourceFileOrFolderNameOf_secondaryTitleBlockInBeginningOfEachOutputCSSFile = 'firefox-addon'
_sourceFileOrFolderNameOf_secondaryTitleBlockInBeginningOfEachOutputCSSFile = null



_sourceFileOrFolderNamesOf_articleLayout_______additionalParts = null
_sourceFileOrFolderNamesOf_articleChiefTheming_additionalParts = null
_sourceFileOrFolderNamesOf_codeBlockTheming____additionalParts = null





// * * * * * * * * * * * * * * *  * * * * * * * * * * * * *
// *                   Boolean Switches                   *
// * * * * * * * * * * * * * * *  * * * * * * * * * * * * *

// * * * * * * Stylus Compilation Switch(es) * * * * * *
_shouldNotWriteTitleBockAtBeginningOfEachOutputCSSFile = false



// * * * * * * CSS Rule Switches * * * * * *

_shouldWrapAllCSSRulesOf_artcileLayout______withSelectorOf_article_root = false
_shouldWrapAllCSSRulesOf_articleBaseTheming_withSelectorOf_article_root = false
_shouldWrapAllCSSRulesOf_codeBlockTheming___withSelectorOf_article_root = false



// * * * * * * CSS Value Switches * * * * * *

_shouldMarkImportantForValueOf_fontFamily = false

// Being `true` means: { scroll-behavior: smooth }
_shouldNotEnableScrollSmoothlyFor_article_root = false



// * * * * * * Generic Optional Part(s) Switch(es) * * * * * *

_shouldIncludeGenerialOptionalPart_backToTopLink = false

```
