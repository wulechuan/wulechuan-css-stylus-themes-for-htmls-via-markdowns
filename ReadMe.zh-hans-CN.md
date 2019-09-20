<link rel="stylesheet" href="./dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# 吴乐川的 HTML 文章之样式集

## Multilingual Editions of this Article

- [English version of this ReadMe](./ReadMe.md)




## NPM 页

<dl>
<dt>NPM 包名</dt>
<dd>

[@wulechuan/css-stylus-markdown-themes](https://www.npmjs.com/package/@wulechuan/css-stylus-markdown-themes)

</dd>
<dt>作者</dt>
<dd><p>南昌吴乐川</p></dd>
</dl>


## 此物何用

本品可方便的产出一组 CSS 文件。并且额外提供了一个很小巧的 JavaScript 接口，使得其它 JavaScript 工具包亦可较方便的使用这些 CSS 文件之内容。



## 文档章节

> 以下章节均存在于单独的文件中，并非本文章之部分。

- 《[简介](./docs/refs/zh-hans-CN/introduction.md)》
- 《[应用效果示例（含最终视觉效果）](./docs/refs/zh-hans-CN/application-examples.md)》
- 《[本工具如何构建出 CSS 文件](./docs/refs/zh-hans-CN/how-does-this-tool-work.md)》
- 《[业已支持的应用场景](./docs/refs/zh-hans-CN/supported-scenarios.md)》
- 《[制作一套新的 CSS 主题](./docs/refs/zh-hans-CN/develope-css-for-a-new-theme.md)》




## 应用效果示例

一图胜千言。以下二图展示了一篇应用了本工具之默认 CSS 样式的文章之样貌。


> 以下二图文件较大，文件大小在百万字节级别。


- [en-US Example: in a wide window, with TOC collapsed](./docs/examples/rendered/snapshots/en-US-example-1-in-a-wide-window-with-toc-collapsed.png)

- [zh-Hans-CN: 大尺寸浏览器中的效果，文章纲要列表已收叠](./docs/examples/rendered/snapshots/zh-Hans-CN-1-大尺寸浏览器中的效果-文章纲要列表已收叠.png)


更多例图，见《[应用效果示例](./docs/refs/zh-hans-CN/application-examples.md)》一文。




## 使用说明

- 如果你采用我的主题文件的初衷仅仅是要将你手头的一些 Markdown 文件转换成对应的 HTML 文件，那么我有以下建议：

    > 你大可以自行使用引用本 npm 包中的 CSS 文件，或自行调用本 npm 包之 JavaScript 接口，以在构建你自己的 HTML 内容时，利用这些 CSS 为其做装点。但显然需要费些功夫。更糟的是，或许此时你恰恰尚无你自己的一套解决办法来将 MarkDown 转换成 HTML，正考虑自己搭建一套工具。那么好消息来了！我强烈推荐我创建的另外两个 npm 包。它们专用于轻松快速从 Markdown 内容构建 HTML 内容，并且二者都应用了本 npm 包中的 CSS 内容和配套 JavaScript 脚本。我在本说明[文档的尾部](#相关推广)也推广了这两个软件包。你无需再另起炉灶了。它们定能助你一臂之力！

- 如果你取用我的主题文件另有意图，并且须搞懂如何使用本 npm 包，那么欢迎继续阅读本文档。你要的内容就在下方。


### 手工取用本工具所生成的文件

#### 取用 CSS 文件

请在 `./dist/css` 文件夹下自行获取所需文件。

#### 取用 Javascript 文件

请在 `./dist/js` 文件夹下自行获取所需文件。


### 将本项目主文件作为 Nodejs 模块调用

```js
const { // 全部接口如下，共 6 个。
    cssFileEntries,                  // 这是一个数组，其成员均为简易文件描述对象。
    jsFileEntries,                   // 这是一个数组，其成员均为简易文件描述对象。
    allFileEntriesKeyingByFileNames, // 这是一个对象，用于依据【文件名】检索简易文件描述对象。

    syncGetContentStringOfOneFileEntry,         // 这是一个方法函数，返回一个字符串。
    syncGetContentStringOfDefaultCSS,           // 这是一个方法函数，返回一个字符串。
    syncGetContentStringOfDefaultTOCJavascript, // 这是一个方法函数，返回一个字符串。
} = require('@wulechuan/css-stylus-markdown-themes') // require 本模块


console.log('-'.repeat(60))
console.log(
    'All available files in @wulechuan/css-stylus-markdown-themes:',
    Object.keys(allFileEntriesKeyingByFileNames)
)
console.log('-'.repeat(60))

const theDefaultCSSContentString = syncGetContentStringOfDefaultCSS()

const alsoTheDefaultCSSContentString = syncGetContentStringOfOneFileEntry(
    'wulechuan-styles-for-html-via-markdown.default--no-toc.min.css'
)

const typoraCSSContentString = syncGetContentStringOfOneFileEntry(
    'wulechuan-styles-for-html-via-markdown--typora.default.css'
)

const the7thThemeContentString = syncGetContentStringOfOneFileEntry(
    cssFileEntries[6]
)

const theDefaultAndOnlyTOCJavascriptContentString = syncGetContentStringOfDefaultTOCJavascript()

const alsoTheOnlyTOCJavascriptContentString = syncGetContentStringOfOneFileEntry(
    'table-of-contents-behaviours.min.js'
)

const stillTheOnlyTOCJavascriptContentStringButNotMinified = syncGetContentStringOfOneFileEntry(
    jsFileEntries[0]
)
```



-----


## 相关推广

鄙人另有一款 NPM 包，名为“[@wulechuan/generate-html-via-markdown](https://www.npmjs.com/package/@wulechuan/generate-html-via-markdown)”。为便于指称，暂将其叫做“甲”。甲可将提供的 MarkDown 字符串转换成 HTML 字符串。此时，甲会采用本工具所预先生成的 CSS 文件来装饰甲自身产生的 HTML 内容。

鄙人还有一款 NPM 包，名为“[@wulechuan/gulp-markdown-to-html](https://www.npmjs.com/package/@wulechuan/gulp-markdown-to-html)”，且作“乙”。乙恰如甲的一个包覆层，使得乙中之功能特性可以适配 [Gulpjs](https://gulpjs.com) 任务流水线。





## 未来计划

- 考虑引入更多的 Stylus 变量，来控制主题。但我有疑虑。过分工程化可能反而导致源代码难以理解，不便定制。
- 制作更多的主题？深色款？
- 更多的【基本主题】+【代码着色主题】的组合项？
- 覆盖 Typora 中“纲要列表”的原有样式？


## 许可证类型

WTFPL

> 注意：
>
> 我未研究过许可证的约束。因此姑且声明为 WTFPL 类型。但实际上该许可证类型可能与我采用的开源模块有冲突。

