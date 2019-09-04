<link rel="stylesheet" href="../../../dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# 吴乐川的 HTML 文章之样式集

- 回到 [中文文章列表页](../../../ReadMe.zh-hans-CN.md)


## Multilingual Editions of this Article

- [English (US)](../en-US/how-does-this-tool-work.md)



## 本工具如何构建出 CSS 文件？

### CSS 文件均由 Stylus 源文件构建而得

我设计了一个稍带灵活性的框架。在此框架之上，我给出了一组 [Stylus](http://stylus-lang.com/) （`.styl`）文件，作为【配置】文件。本工具中配带的基于 Gulpjs 生态的 Javascript 程序会读取这些配置，并根据每个配置文件逐一产出对应的 CSS 文件，1 到 2 个。如果产出 2 个 CSS 是因为其中一个是压缩过的版本。如果仅产出 1 个，则依据具体配置，它既可能是未压缩的版本，也可能是压缩过的版本。

**简而言之，一个 `.styl` 文件配置一个【应用场景】，并产出 CSS 文件。**

> 关于【应用场景】，参阅 [简介](./introduction.md#应用场景).


例如：

- 本项目中有一个名为 `typora/typora-_default.styl` 的文件。对应生成一个名为 `wulechuan-styles-for-html-via-markdown--typora.default.css` 的 CSS 文件。

- 本项目中还有一个名为 `firefox-addon/firefox-addon-_default.styl` 的文件。对应生成一个名为 `wulechuan-styles-for-html-via-markdown--firefox-addon.default.css` 的 CSS 文件。


> 注意：本工具目前仅提供 CSS 文件，外加一个 Javascript 文件，作为零件备用于你的 HTML 中。本工具**并不**提供从 MarkDown 文件生成对应 HTML 内容之功能。
>
> 另，上文提及的备用 Javascript 零件名为 `table-of-contents-behaviours.js`。顾名思义，其用于配置 HTML 中的“**文章纲要列表（英语为 TOC）**”之交互行为。具体而言，无外乎点击一个按钮，即可显示或隐藏文章纲要列表。


### 在构建出的 CSS 中，选择器有否外层包裹的类名？

本工具产出的 CSS 文件不妨分为两类。一类是 CSS 选择器被包裹的版本，另一类是 CSS 选择器未被包裹的版本。

- 所谓“被包裹”，是指诸如 `a`、`ul`、`table` 和 `pre` 等在内的 CSS 选择器均冠以一个自定义的 CSS 类名。

    > 该类名默认为 `.markdown-article`。
    >
    > 在每个应用场景的配置 `.stly` 中，均可单独配置该类名。故而令针对不同应用场景构建而得的 CSS，其包裹类名也可是独特的。

    在输出文件中，你将看到类似如下之内容：

    ```css
    .markdwon-article a     { /* declarations */ }
    .markdwon-article ul    { /* declarations */ }
    .markdwon-article table { /* declarations */ }
    .markdwon-article pre   { /* declarations */ }
    ```

- 所谓“未被包裹”，是指诸如 `a`、`ul`、`table` 和 `pre` 等在内的 CSS 选择器的外层没有冠以额外的自定义 CSS 类名。故而，在输出的 CSS 文件中，会有类似如下之内容：

    ```css
    a     { /* declarations */ }
    ul    { /* declarations */ }
    table { /* declarations */ }
    pre   { /* declarations */ }
    ```

