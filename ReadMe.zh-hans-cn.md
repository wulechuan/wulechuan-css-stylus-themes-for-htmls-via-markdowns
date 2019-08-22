<link rel="stylesheet" href="./dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# 吴乐川的 MarkDown 文件样式集


[English version of this ReadMe](./ReadMe.md)




## npm 页

<dl>
<dt>npm 包名</dt>
<dd>

[@wulechuan/css-stylus-markdown-themes](https://www.npmjs.com/package/@wulechuan/css-stylus-markdown-themes)

</dd>
<dt>作者</dt>
<dd><p>南昌吴乐川</p></dd>
</dl>





## 简介

这是一套用于装饰从 MarkDown 文件生成的 HTML 内容的 CSS 样式集。


## 本工具存在的意义

简而言之，为了方便的创造一堆 CSS 文件。

那么，为什么要创建这些 CSS 文件呢？

开发者们和工程师们常常要和 MarkDown 文件打交道。或许他们中不少人与我一样，喜欢自定义 MarkDown 文件的观感，令阅读更舒适。准确地说，其实是自定义有这些 MarkDown 文件所产生的 HTML 内容。

**装饰 HTML 当然就要用到 CSS 文件。**故此。


## CSS 为何不止一个？

首先，我们可能需要多种配色主题，来满足不同环境照明条件下的约定需求。何况，我们有些人或许还会随心情变换阅读时的配色主题。

其次，有些事情听起来简单，实则不然。用来阅读或处理 MarkDown 文件的工具和环境五花八门：

- 有人喜欢用神奇的 [Typora](https://typora.io/) 来处理 MarkDown 文件。
- 有人喜欢用 [Visual Studio Code](https://code.visualstudio.com/) 这样的代码编辑器来查看和编辑 MarkDown 文件。
- 还有人喜欢或必须利用命令行工具批量将 MarkDown 文件生成 对应的 HTML 文件，然后自行阅读或分发出去。

级别是同一个 MarkDown 文件，经由不同的工具，产出的 HTML 内容也不尽相同。有时可谓大相径庭。

因此，不同的光照环境、软件环境或工具，都需要不同的 CSS 文件。

> 我们不妨将上述不同情形统一称呼为【场景（scenarios）】。


### 本工具如何创建 CSS？

我设计了一个稍带灵活性的框架。在此框架之上，我给出了一组 [stylus](http://stylus-lang.com/) （`.styl`）文件，作为【配置】文件。我的程序会读取这些配置，并根据每个配置文件逐一产出对应的 CSS 文件，1 到 2 个。如果产出 2 个 CSS 是因为其中一个是压缩过的版本。如果仅产出 1 个，则依据具体配置，它可能未压缩的版本，有可能是压缩过的版本。

简而言之，一个 `.styl` 文件配置一个【场景】，并产出 CSS 文件。

例如：

- 本项目中有一个名为 `typora/typora-_default.styl` 的文件。对应生成一个名为 `wulechuan-styles-for-html-via-markdown--typora.default.css` 的 CSS 文件。

- 本项目中还有一个名为 `firefox-addon/firefox-addon-_default.styl` 的文件。对应生成一个名为 `wulechuan-styles-for-html-via-markdown--firefox-addon.default.css` 的 CSS 文件。


> 注意：本工具目前仅提供 CSS 文件，外加一个备用的 Javascript 文件。本工具**并不**提供从 MarkDown 文件转化生成 HTML 内容的功能。
>
> 上文提及的 Javascript 名为 `table-of-contents-behaviours.js`。顾名思义，其用于配置 HTML 中的“文章纲要列表（英语为 TOC）”的交互行为。


### CSS 选择器有否外层包裹的类名？

产出的 CSS 文件不妨分为两类。一类是 CSS 选择器被包裹的版本，另一类是 CSS 选择器未被包裹的版本。

所谓“被包裹”，是指诸如 `a`、`ul`、`table` 和 `pre` 等在内的 CSS 选择器均冠以一个自定义的 CSS 类名。该类名默认为 `.markdown-article`。

> 在每个场景的配置 `.stly` 中，均可单独配置该类名。故而令针对不同场景输出的 CSS，其包裹类名也是独特的。

在输出文件中，你将看到类似如下之内容：

```css
.markdwon-article a     { /* declarations */ }
.markdwon-article ul    { /* declarations */ }
.markdwon-article table { /* declarations */ }
.markdwon-article pre   { /* declarations */ }
```

所谓“未被包裹”，是指诸如 `a`、`ul`、`table` 和 `pre` 等在内的 CSS 选择器的外层没有冠以额外的自定义 CSS 类名。故而，在输出的 CSS 文件中，会有类似如下之内容：

```css
a     { /* declarations */ }
ul    { /* declarations */ }
table { /* declarations */ }
pre   { /* declarations */ }
```




## 效果示例

### 原始 MarkDown 文件

- [zh-Hans-CN.md](./docs/examples/source-markdown-files/zh-Hans-CN.md)

### 生成的 HTML 文件

- [HTML](./docs/examples/rendered/html/zh-hans-cn.html)


### 渲染的 HTML 的截图

- [窗口较宽时的效果（纲要列表已收叠）](./docs/examples/rendered/snapshots/zh-Hans-CN-窗口较宽时的效果（纲要列表已收叠）.png)

- [窗口较宽时的效果（纲要列表已展开）](./docs/examples/rendered/snapshots/zh-Hans-CN-窗口较宽时的效果（纲要列表已展开）.png)

- [窗口较窄时的效果（纲要列表已收叠）](./docs/examples/rendered/snapshots/zh-Hans-CN-窗口较窄时的效果（纲要列表已收叠）.png)





## 业已支持的场景

### 默认场景（用在独立存在的 HTML 中）

粗略的想像，该场景应该仅有一个 CSS 文件。对吗？错！因为 CSS 类名被“包裹”与否，会产生变体。并且，针对这些“可怜”的独立存在的 HTML 文件，我还额外设计了“文章纲要列表（英语为 TOC）”的样式。而这部分样式我设计成了可选的。故而，有否纲要也会产生变体。排列组合不难算出，变体共有四种，如下：

1. 选择器被包裹，无纲要

    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--wrapped--no-toc.css`
    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--wrapped--no-toc.min.css`

2. 选择器被包裹，有纲要

    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--wrapped--with-toc.css`
    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--wrapped--with-toc.min.css`

    > 使用该版本的 CSS 时，不要忘记配套使用 `table-of-contents-behaviours.js`。



3. 选择器未被包裹，无纲要

    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--no-toc.css`
    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--no-toc.min.css`




4. 选择器未被包裹，有纲要

    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--with-toc.css`
    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--with-toc.min.css`

    > 使用该版本的 CSS 时，不要忘记配套使用 `table-of-contents-behaviours.js`。



#### 默认场景中纲要的 HTML 标签结构

纲要的 HTML 标签结构主体来源于 [markdown-it-toc-done-right](https://www.npmjs.com/package/markdown-it-toc-done-right)，并配上我认为必要的少量额外标签。其结构如下：


```html
<html>
<body>
    <article class="markdown-article"> <!-- 我设计的额外包裹层 -->
        <!-- 此处为由 `markdown-it` 产生的一切正文内容 -->
    </article>
    <div class="markdown-article-toc-panel"> <!-- 我设计的额外包裹层 -->
        <nav class="table-of-contents"></nav> <!-- 这是由 `markdown-it-toc-done-right` 产生的纲要，其中包括该 nav 标签。 -->
    </div>
    <button class="markdown-article-toc-toggling-button"></button> <!-- 我设计的纲要面板切换按钮 -->
</body>
</html>
```

---

### 微软 Visual Studio Code 的 Markdown 预览页

文件：

- `./dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css`


该版本的 CSS 文件专门用于在微软 [Visual Studio Code](https://code.visualstudio.com) 中的 MarkDown 文件对应的【预览】页中。

> 用法：
>
> 在你的 MarkDown 文件的任何位置（例如文档首部）添加一句原生 HTML 代码。而后在 Visual Studio Code 中照常预览该 MarkDown 文件即可。
>
> 须添加的原生 HTML 代码如下：
>
> ```html
> <link rel="stylesheet" href="{你想选用的CSS文件的存放路径}/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">
> ```

---


### 火狐浏览器的名为 "Markdown Viewer Webext" 的扩展程序

文件：

- `./dist/css/wulechuan-styles-for-html-via-markdown--firefox-addon.default.css`

该 CSS 的内容专用于配置火狐浏览器的一个很棒的扩展程序，名为“[Markdown Viewer Webext](https://addons.mozilla.org/zh-CN/firefox/addon/markdown-viewer-webext/)”。


> 用法：
>
> 1. **请确保上述扩展程序已经安装**
> 2. 打开火狐浏览器，按下组合键 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>a</kbd>，以打开火狐浏览器的“附加组件管理器”。
> 3. 找到名为“**Markdown Viewer Webext**”的扩展程序，点击它。这将打开该扩展程序的信息页。
> 4. 在信息页中点击“**选项**”页签。
> 5. 向下滚动页面，直至找到标题为“**Custom CSS**”的章节。在该节中，可见一个多行文本输入框。
> 6. 将 `...--firefox-addon.default.css` 文件的完整内容复制并粘贴到上述多行文本输入框中，替换文本框中的原有内容。
> 7. 在文本输入框外部任何地方单击鼠标，即可令新的 CSS 内容生效。同时，一行简单的绿色文字“**SAVED**”可为佐证。
> 8. 用火狐浏览器打开一个 MarkDown 文件，体会观感。

> 注意：分担正文观感会有变换，火狐浏览器扩展程序自动产生的包含“纲要”和“导出按钮”的小面板的观感，也一并被我的 CSS 更改了。

---

### 作为 Typora 软件的自定义主体

文件：

- `./dist/css/wulechuan-styles-for-html-via-markdown--typora.default.css`

[Typora](https://typora.io/) 是一个备受好评的 MarkDown 处理软件。即可阅读，亦可直接编辑。该软件允许用户自定义其产生的 HTML 内容之观感、式样。

详见官方文档（英语）：《[Install Theme](http://theme.typora.io/doc/Install-Theme/)》。

---




## 制作一套新的 CSS 主题

### 步骤


1. 在 `./source/stylus/markdown-style-scenarios/` 文件或其子文件夹内创建一个新的 `.styl` 文件。

2. 在新创建的 `.styl` 文件中，撰写类似以下内容的代码：

    ```stylus
    //-------------------------------------------------
    // 设置控制主题构建的各个变量
    // 提示：
    //     凡名称以下划线（'_'）开头的变量，都是可省略的变量。
    //     其余变量必须配置。否则 Stylus 编译时将报错，并中止。
    //-------------------------------------------------

    codeBlocksThemeName = 'atom-one-dark'







    //-------------------------------------------------
    // 至此，所有变量已经配置完成，仅需导入装配模板文件即可。
    // 该装配模板会自动根据上方定义的变量来构建 css 文件。
    //-------------------------------------------------

    @import '../to-assemble-all-parts'
    ```


3. 增加一组 gulpjs 任务，用来专门处理你新建的 `.styl` 文件，并产生对应的 CSS 文件。首先，打开 `./gulpfile.esm.js/configs/stylus-tasks.js` 这一 Javascript 文件。在名为 `allSpecificOptions` 的数组中添加一项，声明你的源 `.styl` 文件路径，以及你要产生的 CSS 文件的文件名。勿忘保存你的改动。

4. 打开一款命令行工具，例如 **bash**、**Git Bash**、**PowerShell**、**WSL** 或 **Windows comannd**。然后：

    - 利用 `cd` 命令将工作目录切换到本项目的根文件夹或内层文件夹。
    - 输入 type `npm run build` 并回车。
    - 等待程序运行结束。

5. 在 `./dist/css` 文件夹可找到新生成的 CSS 文件。




### 可着色代码块

参阅 [code-blocks-theming.md](./docs/refs/code-blocks-theming.md)。


### 所有可配置的 Stylus 变量

参阅 [stylus-variable-default-values.md](./docs/refs/stylus-variable-default-values.md)。



## 未来计划

- 考虑引入更多的 Stylus 变量，来控制主题。
- 设计 Gulp 任务来处理将用于 HTML 文件中的那些 Javascript 文件。
- 制作更多的主题？深色款？更多的【基本主题】+【代码着色主题】的组合项？
- 覆盖 Typora 目录的原有样式?


## 许可证类型

WTFPL

> 注意：
>
> 我未研究过许可证的约束。因此姑且声明为 WTFPL 类型。但实际上该许可证类型可能与我采用的开源模块有冲突。

