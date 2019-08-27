<link rel="stylesheet" href="../../dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# Stylus Variable Default Values

```stylus
// Empty means no secondary title at all.
// Example: _optionalSecondaryTitleBlockSourceFileName = 'firefox-addon'
_optionalSecondaryTitleBlockSourceFileName = ''


_selectorsOf_fontFamily_baseFontFamilyCarriers      = 'html'
_selectorsOf_fontFamily_monospaceFontFamilyCarriers = 'kbd, pre, code'

_selectorOf_markdownArticleRoot = '' // Empty means no selector at all
_selectorOf_markdownArticleParent = 'body' // This is also the parent of the div.markdown-article-toc-panel, if the div exists.

_selectorOf_markdownArticleBackplateBackgroundColorCarrier = 'html'

_selectorOf_tocByMarkdownItTOCDoneRight = 'nav.markdown-article-toc'
_selectorOf_backToTopLink = '.markdown-article-back-to-top'

_folderNameOf_baseTheme = 'theme-0'
_folderNameOf_codeBlocksType = 'highlightjs' // either of [ 'highlightjs', 'code-mirror' ]

_fontFamily_shouldMarkAsImportantRule = false
_markdownArticleShouldNotScrollSmoothly = false // true means: { scroll-behavior: smooth }

_shouldNotOutputTitleBlock = false
_shouldIncludeBackToTopLink = false
_shouldNotOnlyShow2LevelsOfTOCItems = false // true means show all levels of TOC items.

_shouldWrapLayoutRulesWith_selectorOf_markdownArticleRoot = false
_shouldWrapBaseThemingRulesWith_selectorOf_markdownArticleRoot = false
_shouldWrapCodeBlockThemingRulesWith_selectorOf_markdownArticleRoot = false
```
