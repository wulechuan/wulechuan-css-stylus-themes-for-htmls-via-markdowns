<link rel="stylesheet" href="../../../dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# 吴乐川的 HTML 文章之样式集

- 回到 [中文文章列表页](../../../ReadMe.zh-hans-CN.md)


## Multilingual Editions of this Article

- [English (US)](../en-US/develope-css-for-a-new-theme.md)




## 制作一套新的 CSS 主题

本工具采用 [Stylus](http://stylus-lang.com/) 语言来快速构建 CSS 文件。并且，诸多代码都工整分散在一个个 Stylus 模块中。

### 步骤


1. 在 `./source/stylus/article-style-scenarios/` 文件或其子文件夹内创建一个新的 `.styl` 文件。

2. 在新创建的 `.styl` 文件中，撰写类似以下内容的代码：

    ```stylus
    //-------------------------------------------------
    // 设置控制主题构建的各个变量
    // 提示：
    //     凡名称以下划线（'_'）开头的变量，都是可省略的变量。
    //     其余变量必须配置，否则 Stylus 编译时将报错，并中止。
    //-------------------------------------------------

    codeBlocksThemeName = 'atom-one-dark'

    _selectorOf_markdownArticleParent = 'body > #app'
    _selectorOf_markdownArticleRoot   = '.my-markdown-article'

    _selectorOf_markdownArticleBackplateBackgroundColorCarrier = 'body'

    _selectorsOf_fontFamily_baseFontFamilyCarriers = 'html, article, .my-markdown-article'







    //-------------------------------------------------
    // 至此，所有变量已经配置完成，仅需导入装配模板文件即可。
    // 该装配模板会自动根据上方定义的变量来构建 css 文件。
    //-------------------------------------------------

    @import '../../article-style-parts/assemble-article-styles' // 该句不必触碰。恒定如此。

    ```


3. 增加一组 gulpjs 任务，用来专门处理你新建的 `.styl` 文件，并产生对应的 CSS 文件。首先，打开 `./gulpfile.esm.js/configs/stylus-tasks.js` 这一 Javascript 文件。在名为 `allSpecificOptions` 的数组中添加一项，声明你的源 `.styl` 文件路径，以及你要产生的 CSS 文件的文件名。勿忘保存你的改动。

4. 接下来的最后一个大步骤，有两种做法，任选其一即可。

    -   方法一（不推荐）

        每当修订了任一 `.styl` 文件后，反复手工构建 `.css` 文件。由此，用于发布的示例 HTML 确实会被更新，但这些 HTML **不会**应用你正在开发的新主题！它们总是应用我的默认主题 CSS！也就是说，虽然你成功构建了对应你的新主题的 `.css` 文件，但是你无法直观的在视觉上看到这些主题的效果。

        令用于发布的示例 HTML 总是应用我的默认主题，这一做法是我有意为之。这些 HTML 文件本就不是用于开发过程中查阅开发结果的。除非你费点心思更改默认主题之 `.styl` 文件的指向，令其 `@import` 你正在研发的主题的 `.styl`。这样做显然很麻烦，但好消息是，你根本不必如此费事！别忘了我们还有方法二可选！请阅读下文。

        本方法之小步骤：

        1.  打开一款命令行工具，例如 **bash**、**Git Bash**、**PowerShell**、**WSL** 或 **Windows comannd**。
        2.  利用 `cd` 命令将工作目录切换到本项目的根文件夹或内层文件夹。
        3.  输入 type `npm run build` 并回车。
        4.  等待程序运行结束。
        5.  在 `./dist/css` 文件夹可找到新生成的 `.css` 文件。

    -   方法二（推荐）

        每当修订了任一 `.styl` 文件后，令计算机自动检测到这些文件的变动，并全自动的重新构建对应的 `.css` 文件。更棒的是，计算机还会同时全自动构建出两个 HTML 文件，它们均已应用你正在研发的新样式！这两个 HTML 文件会存放在 `./tests/output/` 文件夹内。借助它们，你可以即时直观查看新样式的面貌。你仅需在浏览器中反复刷新你的 HTML 网页即可。

        本方法之小步骤：

        1.  还记得你在第 3 个大步骤中，在一个数组中添加了一条记录吗？在那条记录中，你指明过你要研发的新主题的入口 `.styl` 文件，对吧？
        2.  打开一款命令行工具，例如 **bash**、**Git Bash**、**PowerShell**、**WSL** 或 **Windows comannd**。
        3.  利用 `cd` 命令将工作目录切换到本项目的根文件夹或内层文件夹。
        4.  输入 type `npm start` 并回车。
        5.  在你惯用的网页浏览器中打开位于 `./tests/output/` 文件夹内的两个 HTML 文件。
        6.  开始研发你的主题。你对 `.styl` 文件的任何改动（保存后），计算机都会检测到。
        7.  回到浏览器，刷新网页。查看最新的效果。
        8.  提醒一下，在 `./dist/css` 文件夹也可找到新生成的 `.css` 文件。但说实话，在研发过程中，你多半不会去在意这些 `.css` 文件了。须待你的研发告一段落，或许你才愿意看一看它们。









### 可着色代码块

参阅 《[可着色代码块的说明](./code-blocks-theming.md)》。


### 所有可配置的 Stylus 变量

参阅 《[stylus-variable-default-values.md](../en-US/stylus-variable-default-values.md)》。




### 面向开发者的 NPM 脚本

#### `start` 与 `start2`

用于专注开发单一主体的情形。如果不知名，则所针对的主题（场景）为**未包裹类名** 、且包含 TOC 的 _default 场景。

该脚本会启动一组文件监视器（Watchers）来持续监视所有 `.styl` 源文件。一旦任何源文件有变更，或监视文件夹中有新的 `.styl` 文件诞生或移入，则自动重新编译出所涉【场景】对应的 CSS 文件。


##### 命令行用法

令 Gulp 运行在静默模式（`--silent`），则执行：

```bash
npm start
```

或

```bash
npm run start
```

> 这将令控制台输出更干净简洁，但也带来难以调试 Gulp 脚本的问题。


要令 Gulp 运行在标准模式，则执行：


```bash
npm run start2
```



#### `build` 与 `build2`

为所有【场景】编译输出 CSS 文件一次。


##### 命令行用法

令 Gulp 运行在静默模式（`--silent`），则执行：

```bash
npm run build
```

> 这将令控制台输出更干净简洁，但也带来难以调试 Gulp 脚本的问题。

> `npm run build` 如果执行成功，还会自动更新示例文档的 HTML 版本。但 `build2` 不会更新示例 HTML。


要令 Gulp 运行在标准模式，则执行：


```bash
npm run build2
```

> `npm run build2` 不会更新示例 HTML。


#### `clean` 与 `clean2`


删除 `./dist/css/` 内的所有【场景】对应的 CSS 文件。

> 如果一个场景配置中的输出文件名变更了，那么很遗憾，采用老旧名称的 CSS 文件不会被该脚本清楚。须手工删除。



##### 命令行用法

令 Gulp 运行在静默模式（`--silent`），则执行：

```bash
npm run clean
```

> 这将令控制台输出更干净简洁，但也带来难以调试 Gulp 脚本的问题。


要令 Gulp 运行在标准模式，则执行：

```bash
npm run clean2
```




#### `updateExampleHTMLs`

用于更新范例 Markdown 文件所对应的 HTML 文件。其中，仅默认主题会被嵌入所生成的 HTML 文件中。

##### 命令行用法

Gulp 会运行在静默模式下，即启用 `--silent` 的模式。


```bash
npm run updateExampleHTMLs
```





#### `eslint`

采用 [eslint](https://eslint.org) 来检验所有匹配以下任一 glob 的 Javascript 文件：

- `./.eslintrc.js`
- `./gulpfile.esm.js/**/*.js`
- `./test/*.js`
- `./source/module/**/*.js`
- `./source/themes/js/**/*.js`
- `./global-config.js`
- `./index.js`


##### 命令行用法

```bash
npm run eslint
```






#### `test`

先自动运行 `eslint` 脚本（见上文），然后运行 `./test/test-index-interfaces.js` 这一文件。

##### 命令行用法

```bash
npm test
```

或

```bash
npm run test
```

