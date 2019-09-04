<link rel="stylesheet" href="../../../dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# 吴乐川的 HTML 文章之样式集

- 回到 [中文文章列表页](../../../ReadMe.zh-hans-CN.md)


## Multilingual Editions of this Article

- [English (US)](../en-US/introduction.md)


## 简介

这是一套用于装饰从 MarkDown 文件生成的 HTML 内容的 CSS 样式集。以期改善文章之观感。

一图胜千言。如果你很清楚本工具之用途，并且急于查阅其应用示例，请阅读本文的《[应用效果示例](./application-examples.md)》章节。


### 本工具存在的意义

简而言之，是为了方便的创造一堆 CSS 文件。

#### 那么，为什么要创建这些 CSS 文件呢？

开发者们和工程师们常常要和 MarkDown 文件打交道。或许他们中不少人与我一样，喜欢自定义 MarkDown 文件的观感，令阅读更舒适。准确地说，其实是自定义由这些 MarkDown 文件所产生的 HTML 内容之观感。

**要装饰 HTML 就要用到 CSS 文件。** 故此。


#### CSS 文件为何不止一个？

1. 人们需要多种配色主题

    首先，我们可能需要多种配色主题，来满足不同环境照明条件下的阅读需求。二来，人人自有不同的色彩偏好。有些视力障碍者对文章的配色也有特别的需求。有些人或许还会随心情变换阅读时的配色主题。


2. 人们使用不同的软件工具

    何况，有些事情听起来简单，实则不然。用来阅读或处理 MarkDown 文件的工具和环境五花八门：

    - 有人喜欢用神奇的 [Typora](https://typora.io/) 来处理 MarkDown 文件。
    - 有人喜欢用 [Visual Studio Code](https://code.visualstudio.com/) 这样的代码编辑器来查看和编辑 MarkDown 文件。
    - 还有人喜欢或**必须**利用命令行工具批量将 MarkDown 文件生成 对应的 HTML 文件，然后自行阅读或**分发出去**。

    即便是**同一个 MarkDown 文件**，经由不同的工具，**产出的 HTML 内容也不尽相同**，有时可谓大相径庭。

**综上，不同的光照环境、个人偏好、心境、生理特征要求不同的配色，而不同的软件环境或软件处理工具，其 HTML 内容亦有差异。如此种种，往往需要不同的 CSS 文件。**



### 应用场景

一套即便主题配色，加上可选的特性，组合为一，称为一个【应用场景（scenarios）】。

例如，默认的【应用场景】是一套浅色的配色主题，加上一个【文章纲要列表】组件。对应的，该默认【应用场景】的输出文件包含一个 CSS 文件和一个 Javascript 文件。其中 CSS 的文件内容包含了针对基本配色的 CSS 规则和针对文章纲要列表的专用 CSS 规则两部分。而 Javascript 文件则专门针对文章纲要列表功能。

**故，可谓不同场景须不同 CSS 文件。** 当然，某些应用场景（如上例）还需要 Javascript 文件。

