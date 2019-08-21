# Stylus Variable Default Values

```js
_optionalSecondaryTitleBlockSourceFileName = '' // Empty means no secondary title at all. Example: _optionalSecondaryTitleBlockSourceFileName = 'firefox-addon'

_fontFamily_baseFontFamilyCarrierSelectors      = 'html'
_fontFamily_monospaceFontFamilyCarrierSelectors = 'kbd, pre, code'

_markdownArticleRootSelector = '' // Empty means no selector at all
_markdownArticleParentSelector = 'body' // This is also the parent of the div.markdown-article-toc-panel, if the div exists.
_markdownArticleParentParentSelector = 'html'
_markdownArticleBackplateBackgroundColorCarrierSelector = 'html'

_baseThemeName = 'theme-0'
_codeBlocksTypeName = 'highlightjs' // either of [ 'highlightjs', 'code-mirror' ]

_shouldNotOutputTitleBlock = false
_shouldWrapLayoutRulesWith_markdownArticleRootSelector = false
_shouldWrapBaseThemingRulesWith_markdownArticleRootSelector = false
_shouldWrapCodeBlockThemingRulesWith_markdownArticleRootSelector = false
```
