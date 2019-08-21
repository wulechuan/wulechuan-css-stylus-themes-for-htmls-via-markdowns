<link rel="stylesheet" href="./dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# 吴乐川的 MarkDown 文件样式集


[English version of this ReadMe](./ReadMe.md)


# 简介

这是一套用于装饰从 MarkDown 文件生成的 HTML 内容的 CSS 样式集。



# npm 页

<dl>
<dt>npm 包名</dt>
<dd>

[@wulechuan/css-stylus-markdown-themes](https://www.npmjs.com/package/@wulechuan/css-stylus-markdown-themes)

</dd>
<dt>作者</dt>
<dd><p>南昌吴乐川</p></dd>
</dl>




# 用法

请任选 `dist/css` 文件夹下的 css 文件。




# 效果示例

## 原始 MarkDown 文件

- [zh-Hans-CN.md](./docs/examples/source-markdown-files/zh-Hans-CN.md)

## 生成的 HTML 文件

- [HTML](./docs/examples/rendered/html/zh-hans-cn.html)


## 渲染的 HTML 的截图

- [窗口较宽时的效果](./docs/examples/rendered/snapshots/zh-Hans-CN-窗口较宽时的效果.png)

- [窗口较窄时的效果](./docs/examples/rendered/snapshots/zh-Hans-CN-窗口较窄时的效果.png)



## 制作一套新的 CSS 主题文件

### 步骤


1. 在 `./source/stylus/markdown-style-senarios/` 文件或其子文件夹内创建一个新的 `.styl` 文件。

2. 在新创建的 `.styl` 文件中，撰写类似以下内容的代码：

    ```js
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


3. 如何配置 Gulpjs 的任务。暂从略。抱歉！




### 可着色代码块

参阅 [code-blocks-theming.md](./docs/refs/code-blocks-theming.md)。


### 所有可配置的 Stylus 变量

参阅 [stylus-variable-default-values.md](./docs/refs/stylus-variable-default-values.md)。



## TODOS

- 考虑引入更多的 Stylus 变量，来控制主题。
- 文档完善（特别是自定义主题的步骤）。
- 设计 Gulp 任务来处理将用于 HTML 文件中的那些 Javascript 文件。
- 修复 vscode 预览窗口中代码块背景色不正确的问题。
- 制作更多的主题？深色款？更多的【基本主题】+【代码着色主题】的组合项？
- 覆盖 Typora 目录的原有样式?


## 许可证类型

WTFPL

