<link rel="stylesheet" href="../../../dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# 吴乐川的 HTML 文章之样式集

- 回到 [中文文章列表页](../../../ReadMe.zh-hans-CN.md)


## Multilingual Editions of this Article

- [English (US)](../en-US/supported-scenarios.md)




## 业已支持的应用场景

> 关于【应用场景】，参阅 [简介](./introduction.md).

目前已支持 4 种应用场景。如下：

1. [用于独立存在的 HTML](#用于独立存在的-HTML) （此为默认应用场景）
2. 用于 [微软 Visual Studio Code 的 Markdown 预览页](#微软-visual-studio-code-的-markdown-预览页)
3. 用于 [火狐浏览器的名为 “Markdown Viewer Webext” 的扩展程序](#火狐浏览器的名为-“markdown-viewer-webext”-的扩展程序)
4. 用于 [Typora 软件的自定义主题](#typora-软件的自定义主题)





### 用于独立存在的 HTML

粗略的想像，该场景应该仅有一个 CSS 文件。然乎？非也！

- 因为依据 CSS 选择器被“包裹”与否，输出的内容会有两种变体。
- 并且，针对这些功能“孱弱”的 HTML 文件，我还额外设计了“文章纲要列表（英语为 TOC）”的样式。而这部分样式我设计成了可选的。故而，有否纲要也会产生变体。

排列组合不难算出，默认场景的变体共有 4 种，合计 8 个 CSS 文件，如下：

1. 选择器被 `.markdown-article` 包裹，无纲要列表

    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--wrapped--no-toc.css`
    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--wrapped--no-toc.min.css`

2. 选择器被 `.markdown-article` 包裹，有纲要列表

    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--wrapped--with-toc.css`
    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--wrapped--with-toc.min.css`

    > 使用该版本的 CSS 时，不要忘记配套使用 `table-of-contents-behaviours.js`。



3. 选择器未被包裹，无纲要列表

    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--no-toc.css`
    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--no-toc.min.css`




4. 选择器未被包裹，有纲要列表

    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--with-toc.css`
    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--with-toc.min.css`

    > 使用该版本的 CSS 时，不要忘记配套使用 `table-of-contents-behaviours.js`。



#### 默认场景中【文章纲要列表】的 HTML 标签结构

纲要的 HTML 标签结构主体来源于 [markdown-it-toc-done-right](https://www.npmjs.com/package/markdown-it-toc-done-right)，并配上我认为必要的少量额外标签。其结构如下：


```html
<html>
<body>
    <article class="markdown-article"> <!-- 我设计的额外包裹层 -->
        <!-- 此处为由 `markdown-it` 产生的一切正文内容 -->
    </article>
    <nav class="markdown-article-toc"></nav> <!-- 此为由 `markdown-it-toc-done-right` 插件产生的一切内容。nav 标签本身亦包含其中。不过我自定义了改 nav 的 CSS 类名。 -->
    <button class="markdown-article-toc-toggling-button"></button> <!-- 我设计的纲要面板切换按钮 -->
</body>
</html>
```

> 自动化产生 HTML 的 Javascript 程序不包含在本工具中。因为我认为其超出了本工具的工作主题。
>
> 本工具中针对该纲要列表的 CSS 定义确实于上述 Javascript 程序存在耦合。但我认为囊括这些与外界耦合的 CSS 定义是必要的，恰如本工具另有囊括之 CSS 定义与 Typora、Visual Studio Code 耦合一样。
>
> 顺便提一下，我的上述转化程序虽基于业已成熟的 markdown-it 生态，但我的程序本身还不够成熟，故亦未单独设立公开的 Git 仓库。

---

### 微软 Visual Studio Code 的 Markdown 预览页

文件：

- `./dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css`


该版本的 CSS 文件专门用于在微软 [Visual Studio Code](https://code.visualstudio.com) 中对 MarkDown 文件的【预览】页。

#### 用法

在你的 MarkDown 文件的任何位置（例如文档首部）添加一句原生 HTML 代码。而后在 Visual Studio Code 中照常预览该 MarkDown 文件即可。

须添加的原生 HTML 代码如下：

```html
<link rel="stylesheet" href="{你想选用的CSS文件的存放路径}/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">
```

> 提示：添加原始 HTML 代码的动作本身就可在 Visual Studio Code 中完成。


---


### 火狐浏览器的名为 “Markdown Viewer Webext” 的扩展程序

文件：

- `./dist/css/wulechuan-styles-for-html-via-markdown--firefox-addon.default.css`

该 CSS 的内容专用于配置火狐浏览器的一个很棒的扩展程序，名为“[Markdown Viewer Webext](https://addons.mozilla.org/zh-CN/firefox/addon/markdown-viewer-webext/)”。


用法

1. **请确保上述扩展程序已经安装**
2. 打开火狐浏览器，按下组合键 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>a</kbd>，以打开火狐浏览器的“**附加组件管理器**”。
3. 找到名为“**Markdown Viewer Webext**”的扩展程序，点击它。这将打开该扩展程序的信息页。
4. 在信息页中点击“**选项**”页签。
5. 向下滚动页面，直至找到标题为“**Custom CSS**”的小节。在该节中，可见一个**多行文本输入框**。
6. 将 `...--firefox-addon.default.css` 文件的完整内容复制并粘贴到上述多行文本输入框中，**替换**文本框中的原有内容。
7. 在文本输入框外部任何地方单击鼠标，即可令新的 CSS 内容生效。同时，一行简单的绿色文字“**SAVED**”可为佐证。
8. 不妨用火狐浏览器打开一个 MarkDown 文件，体会观感。

> 注意：非但正文观感会有变化，由火狐浏览器扩展程序自动产生的包含“纲要”和“导出按钮”的小面板，其观感也一并被我的 CSS 更改了。

---

### Typora 软件的自定义主题

文件：

- `./dist/css/wulechuan-styles-for-html-via-markdown--typora.default.css`

[Typora](https://typora.io/) 是一个备受好评的 MarkDown 处理软件。即可阅读，亦可直接编辑。该软件允许用户自定义其产生的 HTML 内容之观感、式样。

详见官方文档（英语）：《[Install Theme](http://theme.typora.io/doc/Install-Theme/)》。
