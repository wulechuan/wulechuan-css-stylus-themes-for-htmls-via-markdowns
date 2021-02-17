<link rel="stylesheet" href="../../../源代码/发布的源代码/层叠样式表/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# Wulechuan's HTML Article Themes

- Go back to [ReadMe.en-US.md](../../../ReadMe.en-US.md)


## Multilingual Editions of this Article

- [本文之汉语版](../汉语/本工具构建层叠样式表时所采用之内在规则之介绍.md)


## How does this Tool Work

### CSS are compiled out of Stylus

I designed a flex framework. Upon that there are several provided [Stylus](http://stylus-lang.com/) files (`.styl`) as configurations, each targeting different environment/scenario. So multiple versions of CSS can be produced in one go. For each scenario, we get 1 or 2 `.css` files. If 2 are produced, that's because one of them is a minified CSS. If only 1 CSS file is produced, then depending on the configuration, it can be either an uncompress one or a compress one.

**In short, each `.styl` file is a configuration, targeting one scenario, and produces CSS file(s).**

> What is a so-called scenario? See [Introduction](./introduction.md#scenarios).


For examples:

- there is a `typora/typora-_default.styl`. And a CSS file named `wulechuan-styles-for-html-via-markdown--typora.default.css` is produced accordingly.

- there is a `firefox-addon/firefox-addon-_default.styl`. A CSS file named `wulechuan-styles-for-html-via-markdown--firefox-addon.default.css` is produced as well.

> Note that this tool, at present, only provide CSS files, plus a javascript file as a page part. This tool does **NOT** providing any functionality for converting a markdown file into an HTML file.
>
> The said javascript file is named `table-of-contents-and-back-to-top-anchor-behaviors.js`. And it's obviously for setting up the TOC.


### Are CSS Selectors Wrapped Safely?

Well, for the generated CSS files, there are two sets of them. One is wrapped, the other is non-wrapped.

- By wrapped, I mean CSS selectors like `a`, `ul`, `table`, `pre`, etc. are wrapped under a class name.

    > By default the class name is `.markdown-article`.
    >
    > You can customize the class name differently for each and every scenario easily, in the corresponding `.styl` file.

    So in the generated CSS file, you get CSS rules like these:

    ```css
    .markdwon-article a     { /* declarations */ }
    .markdwon-article ul    { /* declarations */ }
    .markdwon-article table { /* declarations */ }
    .markdwon-article pre   { /* declarations */ }
    ```

- By non-wrapped, I mean CSS selectors like `a`, `ul`, `table`, `pre`, etc. are **NOT** wrapped. So in the generated CSS file, you always get rules like these:

    ```css
    a     { /* declarations */ }
    ul    { /* declarations */ }
    table { /* declarations */ }
    pre   { /* declarations */ }
    ```

