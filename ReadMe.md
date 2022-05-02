# 吴乐川的 HTML 文章排版与配色之方案集

<link rel="stylesheet" href="./源代码/发布的源代码/文章排版与配色方案集/层叠样式表/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">


> 中国人——特别是汉族人，理应坚持广泛、规范地使用汉语。凡非必要之情形不说外国话、不用外国字。此乃天经地义！然则每当必要，亦不排斥采用外国之语言。不妨 **博世界之学问，养中国之精神** 。
>
> 本人亦支持少数民族坚持采用自己民族的传统语言。仍须强调，凡中国人，皆应会用汉语、积极使用汉语，此乃中华各民族之大一统之必由。



## Multilingual Editions of this Article

- [English edition of this ReadMe](./文档集集/说明书/en-US/ReadMe.md)




## NPM 页

<dl>
<dt>NPM 包名</dt>
<dd>

[@wulechuan/css-stylus-markdown-themes](https://www.npmjs.com/package/@wulechuan/css-stylus-markdown-themes)

</dd>
<dt>作者</dt>
<dd><p>南昌吴乐川</p></dd>
</dl>





## 源代码仓库

| <span style="display:inline-block;width:180px;">提供仓库服务之组织</span> | <span style="display:inline-block;width:150px;">仓库组织之国别</span> | 仓库地址 |
| ------------- | :----------: | ------- |
| 码云           | 中华人民共和国 | [https://gitee.com/nanchang-wulechuan/wulechuan-css-stylus-themes-for-htmls-via-markdowns](https://gitee.com/nanchang-wulechuan/wulechuan-css-stylus-themes-for-htmls-via-markdowns) |
| 阿里云之代码仓库 | 中华人民共和国 | [https://code.aliyun.com/wulechuan/wulechuan-themes-for-htmls-via-markdowns](https://code.aliyun.com/wulechuan/wulechuan-themes-for-htmls-via-markdowns) |
| GitHub         | 美           | [https://github.com/wulechuan/wulechuan-css-stylus-themes-for-htmls-via-markdowns](https://github.com/wulechuan/wulechuan-css-stylus-themes-for-htmls-via-markdowns) |



## 此物何用

本工具提供两类基本功能。且二者紧密相关。

1.  本工具用于构建一组层叠样式表（即外国话所谓 CSS）文件。


2.  本工具亦提供了一组现成的层叠样式表文件。

凡这些样式表，不论是本工具现成提供的还是开发者采用本工具自己创建的，均可用于美化采用超文本标记语言（即 HTML）格式的文章。于任一文章，不必同时取用多个样式表文件，仅取其一足矣。

本品还提供了一个 JavaScript 编程接口，使得其它 JavaScript 工具包亦可以程序化之方式使用这些层叠样式表文件之内容。详见下文《[以程序化之方式取用本工具提供之内容](#以程序化之方式取用本工具提供之内容)》一节。


> 不妨强调，于开发者而言，本品可以是一个样式表**构建工具**，用以相对方便地构建出新的符合特定喜好或需求的样式表文件。




## 文档集

> 以下章节均存在于单独的文件中，并非本文章之部分。

- 《[本工具之简介](./文档集/说明书/汉语/本工具之简介.md)》
- 《[关于文章排版与配色效果示例集的说明（含最终视觉效果）](./文档集/说明书/汉语/关于文章排版与配色效果示例集的说明.md)》
- 《[本工具构建层叠样式表时所采用之内在规则之介绍](./文档集/说明书/汉语/本工具构建层叠样式表时所采用之内在规则之介绍.md)》
- 《[业已支持的应用场景](./文档集/说明书/汉语/业已支持的应用场景.md)》
- 《[采用本工具开发一套新的文章排版与配色方案之详细步骤](./文档集/说明书/汉语/采用本工具开发一套新的文章排版与配色方案之详细步骤.md)》




## 应用效果示例

本工具配备了两篇范文，汉语一篇，英语一篇，均套用了本工具之默认样式，以示效果。

### 已转换为 HTML 格式的范文副本

范文之截图可以较好地展示文章之（视觉层面的）样貌。但截图文件往往较大，有些竟在**百万字节**级别。因此，不妨在此先给出 HTML 文件。截图在后文也会一并给出。


HTML 范文如下：

-   《[HTML 范文（汉语版，浅色）](./文档集/文章排版与配色效果示例集/以-html-格式渲染好的文章成品/html/example.zh-hans-cn.default-light-colored-theme.html)》
-   《[HTML 范文（汉语版，深色）](./文档集/文章排版与配色效果示例集/以-html-格式渲染好的文章成品/html/example.zh-hans-cn.default-dark-colored-theme.html)》
-   《[HTML 范文（英语版，浅色）](./文档集/文章排版与配色效果示例集/以-html-格式渲染好的文章成品/html/example.en-us.default-light-colored-theme.html)》
-   《[HTML 范文（英语版，深色）](./文档集/文章排版与配色效果示例集/以-html-格式渲染好的文章成品/html/example.en-us.default-dark-colored-theme.html)》



### HTML 范文的截图

一图胜千言。以下将给出范文之截图。

> 以下各图较大，文件大小在**百万字节**级别。若网络不佳不便阅图，亦可改为下载 HTML 文件观察其面貌。见上文《[已转换为 HTML 格式的范文副本](#已转换为%20HTML%20格式的范文副本)》。


#### 范文富有特色的大幅截图


1.  应用了**默认浅色主题**的范文之截图

    -  《示例：简体中文范文配默认**浅色**主题，在宽大尺寸浏览器中的效果（目录已收叠）》


        - [由（本说明书的）解析程序自动决定之存放地点的版本](./文档集/文章排版与配色效果示例集/以-html-格式渲染好的文章成品/各文章最终呈现效果之截图/示例：简体中文范文配默认浅色主题，1-在宽大尺寸浏览器中的效果（目录已收叠）.png)

        - [存放在 Gitee 中的版本，便于中国大陆地区查阅](https://gitee.com/nanchang-wulechuan/wulechuan-css-stylus-themes-for-htmls-via-markdowns/blob/master/%E6%96%87%E6%A1%A3%E9%9B%86/%E6%96%87%E7%AB%A0%E6%8E%92%E7%89%88%E4%B8%8E%E9%85%8D%E8%89%B2%E6%95%88%E6%9E%9C%E7%A4%BA%E4%BE%8B%E9%9B%86/%E4%BB%A5-html-%E6%A0%BC%E5%BC%8F%E6%B8%B2%E6%9F%93%E5%A5%BD%E7%9A%84%E6%96%87%E7%AB%A0%E6%88%90%E5%93%81/%E5%90%84%E6%96%87%E7%AB%A0%E6%9C%80%E7%BB%88%E5%91%88%E7%8E%B0%E6%95%88%E6%9E%9C%E4%B9%8B%E6%88%AA%E5%9B%BE/%E7%A4%BA%E4%BE%8B%EF%BC%9A%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87%E8%8C%83%E6%96%87%E9%85%8D%E9%BB%98%E8%AE%A4%E6%B5%85%E8%89%B2%E4%B8%BB%E9%A2%98%EF%BC%8C1-%E5%9C%A8%E5%AE%BD%E5%A4%A7%E5%B0%BA%E5%AF%B8%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%AD%E7%9A%84%E6%95%88%E6%9E%9C%EF%BC%88%E7%9B%AE%E5%BD%95%E5%B7%B2%E6%94%B6%E5%8F%A0%EF%BC%89.png)


    -  《示例：In default **light-colored** theme, in a wide window, with toc collapsed》。

        -   [由（本说明书的）解析程序自动决定之存放地点的版本](./文档集/文章排版与配色效果示例集/以-html-格式渲染好的文章成品/各文章最终呈现效果之截图/example_en-US_default-light-colored-theme_1-in-a-wide-window_with-toc-collapsed.png)

        -   [存放在 Gitee 中的版本，便于中国大陆地区查阅](https://gitee.com/nanchang-wulechuan/wulechuan-css-stylus-themes-for-htmls-via-markdowns/blob/master/%E6%96%87%E6%A1%A3%E9%9B%86/%E6%96%87%E7%AB%A0%E6%8E%92%E7%89%88%E4%B8%8E%E9%85%8D%E8%89%B2%E6%95%88%E6%9E%9C%E7%A4%BA%E4%BE%8B%E9%9B%86/%E4%BB%A5-html-%E6%A0%BC%E5%BC%8F%E6%B8%B2%E6%9F%93%E5%A5%BD%E7%9A%84%E6%96%87%E7%AB%A0%E6%88%90%E5%93%81/%E5%90%84%E6%96%87%E7%AB%A0%E6%9C%80%E7%BB%88%E5%91%88%E7%8E%B0%E6%95%88%E6%9E%9C%E4%B9%8B%E6%88%AA%E5%9B%BE/example_en-US_default-light-colored-theme_1-in-a-wide-window_with-toc-collapsed.png)


1.  应用了**默认深色主题**的范文之截图

    -   《示例：简体中文范文配默认**深色**主题，在宽大尺寸浏览器中的效果（目录已收叠）》

        -   [由（本说明书的）解析程序自动决定之存放地点的版本](./文档集/文章排版与配色效果示例集/以-html-格式渲染好的文章成品/各文章最终呈现效果之截图/示例：简体中文范文配默认深色主题，1-在宽大尺寸浏览器中的效果（目录已收叠）.png)

        -   [存放在 Gitee 中的版本，便于中国大陆地区查阅](https://gitee.com/nanchang-wulechuan/wulechuan-css-stylus-themes-for-htmls-via-markdowns/blob/master/%E6%96%87%E6%A1%A3%E9%9B%86/%E6%96%87%E7%AB%A0%E6%8E%92%E7%89%88%E4%B8%8E%E9%85%8D%E8%89%B2%E6%95%88%E6%9E%9C%E7%A4%BA%E4%BE%8B%E9%9B%86/%E4%BB%A5-html-%E6%A0%BC%E5%BC%8F%E6%B8%B2%E6%9F%93%E5%A5%BD%E7%9A%84%E6%96%87%E7%AB%A0%E6%88%90%E5%93%81/%E5%90%84%E6%96%87%E7%AB%A0%E6%9C%80%E7%BB%88%E5%91%88%E7%8E%B0%E6%95%88%E6%9E%9C%E4%B9%8B%E6%88%AA%E5%9B%BE/%E7%A4%BA%E4%BE%8B%EF%BC%9A%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87%E8%8C%83%E6%96%87%E9%85%8D%E9%BB%98%E8%AE%A4%E6%B7%B1%E8%89%B2%E4%B8%BB%E9%A2%98%EF%BC%8C1-%E5%9C%A8%E5%AE%BD%E5%A4%A7%E5%B0%BA%E5%AF%B8%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%AD%E7%9A%84%E6%95%88%E6%9E%9C%EF%BC%88%E7%9B%AE%E5%BD%95%E5%B7%B2%E6%94%B6%E5%8F%A0%EF%BC%89.png)

    -   《示例：In default **dark-colored** theme, in a wide window, with toc collapsed》。

        -   [由（本说明书的）解析程序自动决定之存放地点的版本](./文档集/文章排版与配色效果示例集/以-html-格式渲染好的文章成品/各文章最终呈现效果之截图/example_en-US_default-dark-colored-theme_1-in-a-wide-window_with-toc-collapsed.png)

        -   [存放在 Gitee 中的版本，便于中国大陆地区查阅](https://gitee.com/nanchang-wulechuan/wulechuan-css-stylus-themes-for-htmls-via-markdowns/blob/master/%E6%96%87%E6%A1%A3%E9%9B%86/%E6%96%87%E7%AB%A0%E6%8E%92%E7%89%88%E4%B8%8E%E9%85%8D%E8%89%B2%E6%95%88%E6%9E%9C%E7%A4%BA%E4%BE%8B%E9%9B%86/%E4%BB%A5-html-%E6%A0%BC%E5%BC%8F%E6%B8%B2%E6%9F%93%E5%A5%BD%E7%9A%84%E6%96%87%E7%AB%A0%E6%88%90%E5%93%81/%E5%90%84%E6%96%87%E7%AB%A0%E6%9C%80%E7%BB%88%E5%91%88%E7%8E%B0%E6%95%88%E6%9E%9C%E4%B9%8B%E6%88%AA%E5%9B%BE/example_en-US_default-dark-colored-theme_1-in-a-wide-window_with-toc-collapsed.png)


#### 范文的所有截图

两篇范文之截图不止于上文中提及的四幅。更多图例，见：

- 《[应用效果示例（汉语版）](./文档集/说明书/汉语/关于文章排版与配色效果示例集的说明.md)》
- 《[应用效果示例（英语版）](./文档集/说明书/en-US/application-examples.md)》

#### 范文截图制作指南

另，日常制作网页截图是很简单的事情，但本工具之范文篇幅巨大，为其截图确须一定经验和技巧。见《[示范文章之截图之制作指南](./文档集/说明书/汉语/示范文章之截图之制作指南.md)》。





## 使用说明

### 使用须知

本工具提供一组层叠样式表（CSS）文件，及配套的 JavaScript 文件（目前仅一个这样的 JavaScript 文件）。它们可用于装点 HTML 文章之样貌，也为文章提供额外的交互行为。应该指出，被装点的文章可以是任何人以任何方式创建的 HTML 文件，但常见的情形往往是这些 HTML 文件系从 MarkDown 文件转换而得。**但重点在于本工具提供的主体内容仅限层叠样式表文件。**

换言之，本工具**并不能**将 Markdown 文件转换为对应的 HTML 文件。本工具假定诸君各自另有办法将 Markdown 内容转换成 HTML 内容，诸君采用本工具仅仅是希望取其中的 CSS 对诸君的 HTML 做进一步的排版美化。于此种情形，用法再简单不过——**自行取用那些 CSS 文件**即可。


所谓自行取用，即是说诸君在本项目之发布文件夹中自行找到中意之 CSS 文件（及配套 JavaScript 文件），采用之。且于单一 HTML 文件，在本工具提供之所有 CSS 文件取用其任一足矣，不必取用多者。

又，取用本工具提供之 CSS 、 JavaScript 文件之内容时，若每每人为复制、粘贴，未免麻烦。尤其是在面对批量运用或自动化运用之要求时，开发人员当然希望能编写程序调集所需资源加以运用。刚巧本工具确实提供了专门的 JavaScript 编程接口，以 **JavaScript 文本（string）** 之形式提供各 CSS 、 JavaScript 文件之内容。见下文《[以程序化之方式取用本工具提供之内容](#以程序化之方式取用本工具提供之内容)》。


> 不过，不论是手工直接取用本工具中之 CSS 文件，还是调用本工具之 JavaScript 接口取用这些 CSS 文件，都没有解决一部分读者的困难：你们的初衷是要将手头的一些 Markdown 文件转换成 HTML 文件，而采用我提供的这些 CSS 只是锦上添花式的要求。临用之际，单单一个 CSS 文件显然不解燃眉之急。
>
> 此种情形下，诸君首先需要的是一款可以进行文件格式转换之工具，而后才考虑如何将本工具提供之 CSS 嵌入 HTML 之中。
>
> 那么新的问题来了，我能不能**顺便**推荐几款能将 MarkDown 文件转换至 HTML 文件的工具呢？当然！鄙人毛遂自荐，愿助诸君一臂之力！鄙人另行自创有三个工具，专用于轻松、快速地从 Markdown 内容构建对应之 HTML 内容。且三者均默认采用本工具发布之 CSS 之内容（及配套 JavaScript 内容）。我在[本说明书之尾部](#相关工具之推广)亦对此三款软件包做了推广。诸君无需另起炉灶了！唯愿三者之任一能对君有所裨益！


又，如果阁下取用本工具中之 CSS 主题文件另有意图，即与将 Markdown 转换至 HTML 之事毫无干系，那么或许更应该了解如何编写程序调集所需的由本工具提供之 CSS 资源加以运用。见下文《[以程序化之方式取用本工具提供之内容](#以程序化之方式取用本工具提供之内容)》。


### 手工取用本工具的文件

#### 取用 CSS 文件

请在 `./源代码/发布的源代码/文章排版与配色方案集/层叠样式表` 文件夹下自行获取所需的样式表文件。

#### 取用 Javascript 文件

请在 `./源代码/发布的源代码/文章排版与配色方案集/javascript` 文件夹下自行获取所需的 JavaScript 文件。


### 以程序化之方式取用本工具提供之内容

取用本工具提供之 CSS 、 JavaScript 文件之内容时，若每每人为复制、粘贴，未免麻烦，亦无从实现批量运用、自动化运用。

在面对批量运用或自动化运用之要求时，开发人员当然希望能编写程序调集所需资源加以运用。本工具确实提供了专门的 JavaScript 编程接口，以 JavaScript 字符串数据的形式提供各 CSS 、 JavaScript 文件之内容。

> 本工具还额外提供了编程接口配套的 TypeScript 类型定义：\
> `源代码/发布的源代码/本工具作为其他-javascript-工具之依赖模块时的代码/index.d.ts`

#### 以程序化之方式取用本工具提供之内容之示范代码

> 下例中代码之主体节选自本项目的\
> 《`测试集/用于测试本项目之-javascript-接口的测试代码集.js`》。

```js
const {
    /**
     * 全 13 个接口项如下。
     * 其中 6 个是采用汉语命名的，是新的。
     * 另有 1 个虽也是汉语命名的，但已废弃。
     * 另 6 个是采用外国字命名的，是旧的。
     */

    // 这是一个数组。
    所有已发布之层叠样式表文件之简易描述项之集,

    // 这是一个数组。
    所有已发布之Javascript文件之简易描述项之集,

    // 这是一个对象。
    以文件名称为索引之所有文件简易描述项之字典,

    // 这是一个方法函数，返回一个字符串。
    获取某一已发布之文件之完整内容字符串,

    // 这是一个方法函数，返回一个字符串。
    获取本项目官方选定之所谓默认层叠样式表之完整内容字符串,

    // 这是一个方法函数，返回一个字符串。
    获取本项目官方选定之所谓默认Javascript之完整内容字符串,

    // ------------------------------------------------

    // 已因命名不够明确而废弃（仍可用但不推荐）。
    // 请改用 “ 以文件名称为索引之所有文件简易描述项之字典 ”。
    以文件名称为索引之所有文件之字典,

    // ------------------------------------------------

    // 以下为陈旧的采用外国字命名之诸接口。

    // 这是一个数组，其成员均为简易文件描述对象。
    cssFileEntries,

    // 这是一个数组，其成员均为简易文件描述对象。
    jsFileEntries,

    // 这是一个对象，用于依据【文件名】检索简易文件描述对象。
    allFileEntriesKeyingByFileNames,

    // 这是一个方法函数，返回一个字符串。
    syncGetContentStringOfOneFileEntry,

    // 这是一个方法函数，返回一个字符串。
    syncGetContentStringOfDefaultCSS,

    // 这是一个方法函数，返回一个字符串。
    syncGetContentStringOfDefaultTOCJavascript,
} = require('@wulechuan/css-stylus-markdown-themes') // require 本模块





const 所谓默认层叠样式表文件之内容全文 = 获取本项目官方选定之所谓默认层叠样式表之完整内容字符串()

const 这也是默认层叠样式表文件之内容全文 = 获取某一已发布之文件之完整内容字符串(
    'wulechuan-styles-for-html-via-markdown.default--no-toc.min.css'
)

const 这是针对Typora软件环境的层叠样式表文件之内容全文 = 获取某一已发布之文件之完整内容字符串(
    'wulechuan-styles-for-html-via-markdown--typora.default.css'
)

const 这是第7个层叠样式表文件之内容全文 = 获取某一已发布之文件之完整内容字符串(
    所有已发布之层叠样式表文件之简易描述项之集[6]
)





// 以下演示了三种不同的方法，其任一均可获得默认的并且也是目前唯一的 JavaScript 文件之内容全文。
const 这是所谓默认同时也是目前唯一的Javascript文件之内容全文 = 获取本项目官方选定之所谓默认Javascript之完整内容字符串()

const 这也是目前唯一的Javascript文件之内容全文 = 获取某一已发布之文件之完整内容字符串(
    'table-of-contents-and-back-to-top-anchor-behaviors.min.js'
)

const 这还是目前唯一的Javascript文件之内容全文 = 获取某一已发布之文件之完整内容字符串(
    所有已发布之Javascript文件之简易描述项之集[0]
)
```


#### 本工具特有的所谓“文件简易描述项”

其 TypeScript 类型定义如下：

```typescript
declare type 范_吴乐川用于美化文章的层叠样式表集_文件简易描述项 = {
    文件名称: string;
    文件之相对路径: string;
    文件之绝对路径: string;
    文件内容全文: string;

    // 以下为陈旧的采用外国字命名之诸接口。

    fileName: string;
    fileRelativePath: string;
    fileAbsolutePath: string;
    fileContent: string;
};
```

#### 获取本工具发布之各排版与配色方案公用的（且目前唯一的） JavaScript 文件

首先，**须知本工具提供两类用途不同之 JavaScript 。**

1.  一类是用于注入 HTML 文章以控制 HTML 文章之【纲要】的。
1.  另一类是本工具提供的程序化接口，它并不直接作用于你的任何 HTML，而仅仅是对外提供本 NPM 包之 CSS 以及第一类 JavaScript 。

为方便指代，不妨：

1.  称第一类 JavaScript 为所谓“**文章行为之 js** ”，简称“**文章 js**”。目前恰好仅有一个这样的 js 文件。它为本工具发布之各色【文章排版与配色方案】所公用。
1.  而称第二类 JavaScript 为所谓“**本工具接口之 js** ”，简称“**接口 js** ”。

又，借助“**接口 js**”获取“**文章 js**”之内容时，“接口 js”还**允许对“文章 js”之内容进行些许临时定制**。故而，最终获得的内容字符串有异于本工具存储的原始版本。换言之，你调用本工具的“**接口 js**”中的某接口函数时，可在接口函数的某一项参数传入【配置项集】，以对 “**文章 js**”之内容做些许改变。

> 有两个不同的接口函数各自可以接受该配置项集，但形参位置不同。
> 1.  第一个函数是\
> `总接口.获取某一已发布之文件之完整内容字符串` ，它在**第 3 形参**接受上述【配置项集】。
>
> 1.  第二个函数是\
> `总接口.获取本项目官方选定之所谓默认Javascript之完整内容字符串` ，它在**第 2 形参**接受上述【配置项集】。

上述【配置项集】之 TypeScript 类型定义如下：

```typescript
declare type 范_吴乐川用于美化文章的层叠样式表集_拾取默认Javascript文件之函数之第二参数 = {
    /**
     * 注意：
     * 【展开文章纲要列表面板】与【展开文章纲要列表的某一条目】不是一回事。
     */

    为求文章纲要列表简洁明了故意仅显示两层条目以至于较深层级条目形同作废?: boolean;
    浏览器打开HTML文章最初之时文章纲要列表中凡层级深于该值之条目均应收叠?: number;
    浏览器打开HTML文章最初之时若浏览器窗口足够宽大则直接展开文章纲要列表之面板?: boolean;

    // 以下为陈旧的采用外国字命名之诸接口。

    shouldShowOnlyTwoLevelsOfTOCItemsAtMost?: boolean;
    atBeginingShouldCollapseAllTOCItemsOfLevelsGreaterThan?: number;
    atBeginingShouldExpandTOCWhenWindowIsWideEnough?: boolean;
};
```


#### 接口重大变更记录

- 2022 年 04 月 27 日，本工具之版本从 `v7.4.2` 升迁至 `v7.5.0` 时， JavaScript 代码没有任何变动。**但针对 TypeScript 的类型定义全部更名。** 由原来的以“`类型定义之`”开头，统一变更为以“`范_`”开头。故而有此版本变动。

-----


## 相关工具之推广

鄙人另有一款 NPM 包，名为“[@wulechuan/generate-html-via-markdown](https://www.npmjs.com/package/@wulechuan/generate-html-via-markdown)”。为便于指称，不妨暂称“**甲**”。调用甲之接口，可将传入该接口的 Markdown 字符串转换成 HTML 字符串。此时，甲默认会采用本工具提供的 CSS 文件来装饰甲自身产生的 HTML 之内容。

鄙人还有一款 NPM 包，名为“[@wulechuan/gulp-markdown-to-html](https://www.npmjs.com/package/@wulechuan/gulp-markdown-to-html)”，且作“**乙**”。乙恰如甲的一个包覆层，使得甲中之功能特性可以适配 [Gulpjs](https://gulpjs.com) 任务流水线。

鄙人还有一款 NPM 包，名为“[@wulechuan/markdown-to-html-via-cli](https://www.npmjs.com/package/@wulechuan/markdown-to-html-via-cli)”，且作“**丙**”。丙恰如甲的另一个包覆层，使得任何人在安装丙后（**无须另行安装甲**），即可在命令行环境轻松使用甲之功能，实现从文件到文件的**批量转换**。且丙设计有多种命令行参数，以便定制输出之 HTML 之具体细节。诸君毋需担心命令行参数记忆负担过重之问题，仅需“`--help`”一招，即可解君之忧。





## 未来计划

暂无。


## 版本 6 及更旧版本之源代码业已删除

本工具之源代码中故意包括了不少范文截图。这些范文单张尺寸已经不小。何况本工具开发之早期阶段（版本 1 至版本 6）本人频繁调整样式风貌，频繁提交代码。而每每风貌变动，截图亦须重制。这些截图之每一个版本亦虽代码提交至代码仓库（例如“码云”）。久而久之，仓库异常庞大臃肿，累计巨达 600 多百万字节（外国话所谓 MB，不佳之译法所谓“兆字节”）。无奈，本人于 2021 年初彻底抛弃了代码仓库中的旧代码，从头提交了全新的代码。并从那时起极为谨慎的更新范文截图。因此：

1.  旧版代码不复存在。
2.  当前的范文截图常常与代码所能产出之真正面貌有所差异，因为范文更新进度多半时候落后于代码，也落后于 NPM 版本发布。

    > 最末发布的截图系针对本工具之 `v7.6.0` 版，各图均制作于 2022 年 5 月 1 日。
    >
    > 但若再有新图发布替换旧图，亦可因为本人遗漏对此文之修订而令上述版本、发布日期均不实。


3.  未来是否因为代码仓库累计尺寸巨大而再次清空代码仓库从头提交代码，亦未可知。


## 许可证类型

WTFPL

> ### 注意
>
> 我未研究过许可证的约束。因此姑且声明为 WTFPL 类型。但实际上该许可证类型可能与我采用的开源模块有冲突。

