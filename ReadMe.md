# Wulechuan's Markdown Themes

[简体中文版文档](./ReadMe.zh-hans-cn.md)


## Introduction

This is a collection of themes that each
can be applied to shade any `Markdown` generated `HTML` contents.




## npm Page

<dl>
<dt>Package Name</dt>
<dd>

[@wulechuan/css-stylus-markdown-themes](https://www.npmjs.com/package/@wulechuan/css-stylus-markdown-themes)

</dd>
<dt>Author</dt>
<dd><p>南昌吴乐川</p></dd>
</dl>



## Usage

Simply take any css file under the `dist/css` folder.



## Examples

### Raw MarkDown

- [en-US.md](./docs/examples/source-markdown-files/en-US.md)

### Generated HTML File

- [HTML](./docs/examples/rendered/html/en-us.html)

### Rendered HTML Snapshots(Pictures)

- [Snapshot in a wide window](./docs/examples/rendered/snapshots/en-US-example-in-a-wide-window.png)

- [Snapshot in a narrow window](./docs/examples/rendered/snapshots/en-US-example-in-a-narrow-window.png)




## Design CSS for a New Theme

### Steps

1. Create a `.styl` file under `./source/stylus/markdown-style-senarios/` folder, or a sub-folder if prefer.

2. In the newly created `.styl` file, write something like this:

    ```js
    //-------------------------------------------------
    // Set values for all variable.
    // Note:
    //     Any variable starts with underscore('_') is an optional variable.
    //     Others, required!
    //-------------------------------------------------

    codeBlocksThemeName = 'atom-one-dark'







    //-------------------------------------------------
    // Now all variables are set.
    // Let's import all parts.
    // Those parts will utilize
    // those variables and produce
    // customized css accordingly.
    //-------------------------------------------------

    @import '../to-assemble-all-parts'
    ```

3. To be detailed. Sorry!


### Code Blocks that are able to Colorize

See [.../code-blocks-themes/ReadMe.md](./source/stylus/markdown-style-parts/3-theming/code-blocks-themes/ReadMe.md).


### All Stylus Variables

See [.../markdown-style-senarios/ReadMe.md](./source/stylus/markdown-style-senarios/ReadMe.md).



## License

WTFPL
