<link rel="stylesheet" href="../../../dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# 吴乐川的 HTML 文章之样式集

- 回到 [中文文章列表页](../../../ReadMe.zh-hans-CN.md)


## Multilingual Editions of this Article

- [English (US)](../en-US/develope-css-for-a-new-theme.md)




## 制作一套新的 CSS 主题

本工具采用 [Stylus](http://stylus-lang.com/) 语言来快速构建 CSS 文件。并且，诸多代码都工整分散在一个个 Stylus 模块中。

### 步骤


1. 在 `./source/stylus/markdown-style-scenarios/` 文件或其子文件夹内创建一个新的 `.styl` 文件。

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

    @import '../to-assemble-all-parts' // 该句不必触碰。恒定如此。

    ```


3. 增加一组 gulpjs 任务，用来专门处理你新建的 `.styl` 文件，并产生对应的 CSS 文件。首先，打开 `./gulpfile.esm.js/configs/stylus-tasks.js` 这一 Javascript 文件。在名为 `allSpecificOptions` 的数组中添加一项，声明你的源 `.styl` 文件路径，以及你要产生的 CSS 文件的文件名。勿忘保存你的改动。

4. 打开一款命令行工具，例如 **bash**、**Git Bash**、**PowerShell**、**WSL** 或 **Windows comannd**。然后：

    - 利用 `cd` 命令将工作目录切换到本项目的根文件夹或内层文件夹。
    - 输入 type `npm run build` 并回车。
    - 等待程序运行结束。

    > 在命令行环境中，亦可以运行 `npm start`，以自动检测源文件改动，并即刻输出新版的 CSS 文件。

5. 在 `./dist/css` 文件夹可找到新生成的 CSS 文件。





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

