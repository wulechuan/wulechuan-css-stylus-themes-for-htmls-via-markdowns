<link rel="stylesheet" href="../../dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# Stylus Variable Default Values

```stylus
_optionalSecondaryTitleBlockSourceFileName = '' // Empty means no secondary title at all. Example: _optionalSecondaryTitleBlockSourceFileName = 'firefox-addon'

_fontFamily_baseFontFamilyCarrierSelectors      = 'html'
_fontFamily_monospaceFontFamilyCarrierSelectors = 'kbd, pre, code'

_markdownArticleRootSelector = '' // Empty means no selector at all
_markdownArticleParentSelector = 'body' // This is also the parent of the div.markdown-article-toc-panel, if the div exists.

_markdownArticleBackplateBackgroundColorCarrierSelector = 'html'

_baseThemeName = 'theme-0'
_codeBlocksTypeName = 'highlightjs' // either of [ 'highlightjs', 'code-mirror' ]

_fontFamily_shouldMarkAsImportantRule = false
_markdownArticleShouldNotScrollSmoothly = false
_shouldNotOutputTitleBlock = false
_shouldWrapLayoutRulesWith_markdownArticleRootSelector = false
_shouldWrapBaseThemingRulesWith_markdownArticleRootSelector = false
_shouldWrapCodeBlockThemingRulesWith_markdownArticleRootSelector = false
```
