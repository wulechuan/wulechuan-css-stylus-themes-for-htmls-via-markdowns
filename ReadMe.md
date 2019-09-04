<link rel="stylesheet" href="./dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# Wulechuan's HTML Article Themes

[简体中文版文档](./ReadMe.zh-hans-cn.md)




## npm Page

<dl>
<dt>Package Name</dt>
<dd>

[@wulechuan/css-stylus-markdown-themes](https://www.npmjs.com/package/@wulechuan/css-stylus-markdown-themes)

</dd>
<dt>Author</dt>
<dd><p>wulechuan (南昌吴乐川)</p></dd>
</dl>




## Introduction

This is a collection of themes that each
can be applied to shade any `Markdown` generated `HTML` contents.

A picture paints a thousand words. If you know what this tool provides, and are eager to see some visual examples, check [Examples](#examples) below.


### Why does this Tool Exist?

Simply for easier designing and generating more CSS files.

#### Why do we need a CSS file like any one of them generated by this tool?

Well, we developers and engineers work with markdown files all the time. And many of us, I guess like me, would like to customize the look and feel of those markdown files, more precisely, to customize the HTML contents rendered(generated) according to those markdown files.

**To modify the look and feel of HTML, we use CSS files.** Thats why.


#### Well CSS Files. But Why Multiple?

Then why do we need so many CSS files?

First, we might need different themes for different ambient lighting conditions, or even for different feelings.

Second, well, we should know that a thing sounds easily to deal with, like reading a markdown file, is not that simple in fact. We have different tools and environments.

- Some people prefer tools like [Typora](https://typora.io/).
- Others are used to use code editors like [Visual Studio Code](https://code.visualstudio.com).
- And there are often some other HTML files that are directly generated by some command line tools, in batch.

Different tools produce **different** HTML contents out of the **same** source markdown file.

So, in short, different lighting conditions, different tools or software environments need different CSS file.

> By the way, I also call these tools and environemts "scenarios" in general. So we can say different scenario needs different CSS file.



### How does this Tool Work?

I designed a flex framework. Upon that there are several provided [Stylus](http://stylus-lang.com/) files (`.styl`) as configurations. So that multiple versions of CSS can be produced in one go, each targeting different environment/scenario. For each scenario, we get 1 or 2 `.css` files. If 2 are produced, that's because one of them is a minified CSS. If only 1 CSS file is produced, then depending on the configuration, it can be either an uncompress one or a compress one.

In short, each `.styl` file is a configuration, targeting one scenario, and produces CSS file(s).

For examples:

- there is a `typora/typora-_default.styl`. And a CSS file named `wulechuan-styles-for-html-via-markdown--typora.default.css` is produced accordingly.

- there is a `firefox-addon/firefox-addon-_default.styl`. A CSS file named `wulechuan-styles-for-html-via-markdown--firefox-addon.default.css` is produced as well.

> Note that this tool, at present, only provide CSS files, plus a javascript file as a page part. This tool does **NOT** providing any functionality for converting a markdown file into an HTML file.
>
> The said javascript file is named `table-of-contents-behaviours.js`. And it's obviously for setting up the TOC.


#### Are CSS Selectors Wrapped Safely?

Well, for the generated CSS files, there are two sets of them. One is wrapped, the other is non-wrapped.

- By wrapped, I mean CSS selectors like `a`, `ul`, `table`, `pre`, etc. are wrapped under a class name.

    > By default the class name is `.markdown-article`.
    >
    > You can customize the class name differently for each and every scenario easily, in the corresponding `.styl` file.

    So in the generated CSS file, you get CSS rules like these:

    ```css
    .markdwon-article a     { /* declarations */ }
    .markdwon-article ul    { /* declarations */ }
    .markdwon-article table { /* declarations */ }
    .markdwon-article pre   { /* declarations */ }
    ```

- By non-wrapped, I mean CSS selectors like `a`, `ul`, `table`, `pre`, etc. are **NOT** wrapped. So in the generated CSS file, you always get rules like these:

    ```css
    a     { /* declarations */ }
    ul    { /* declarations */ }
    table { /* declarations */ }
    pre   { /* declarations */ }
    ```





## Examples

A picture paints a thousand words.

I've purposely prepared an example markdown article. I generate an HTML file out of the markdown. And I decorate the HTML with the "default" CSS file generated by this tool. Now everybody can see.

### Raw MarkDown

- [en-US.md](./docs/examples/source-markdown-files/en-US.md)

### Generated HTML File

- [HTML](./docs/examples/rendered/html/default-theming-example-en-us.html)

### HTML Snapshots(Pictures)

- Snapshot in a wide window (TOC collapsed)

    [![](./docs/examples/rendered/snapshots/en-US-example-in-a-wide-window-toc-collapsed.png)](./docs/examples/rendered/snapshots/en-US-example-in-a-wide-window-toc-collapsed.png)

- Snapshot in a wide window (TOC expanded)

    [![](./docs/examples/rendered/snapshots/en-US-example-in-a-wide-window-toc-expanded.png)](./docs/examples/rendered/snapshots/en-US-example-in-a-wide-window-toc-expanded.png)

- Snapshot in a narrow window

    [![](./docs/examples/rendered/snapshots/en-US-example-in-a-narrow-window-toc-collapsed.png)](./docs/examples/rendered/snapshots/en-US-example-in-a-narrow-window-toc-collapsed.png)

---



## Supported scenarios So Far

### Default scenario (For Standalone HTML Files)

Conceptly, it would be a standalone CSS file. **BUT** it has variantions.

Why are there so many variantions?

Well, first, as you might have read above, there are variations of wrapped, and non-wrapped.

Then, I've also prepared some CSS rules for table of contents(TOC) parts. And the TOC parts are optional, thus more variations exist.

Combining the factors mentioned above, there exist 4 variants of the "default" CSS style, in 8 files. They are:

1. **Selectors wrapped, no TOC**

    - CSS selectors are wrapped under the `.markdown-article` class name
    - CSS rules for table of contents parts are **excluded**

    Files:

    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--wrapped--no-toc.css`
    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--wrapped--no-toc.min.css`



2. **Selectors wrapped, with TOC**

    - CSS selectors are wrapped under the `.markdown-article` class name
    - CSS rules for table of contents parts are **included**,

    Files:

    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--wrapped--with-toc.css`
    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--wrapped--with-toc.min.css`

    > Don't forget to use the `table-of-contents-behaviours.js` together with either of these CSS files.



3. **Selectors non-wrapped, no TOC**

    - CSS selectors are **NOT** wrapped under any class name
    - CSS rules for table of contents parts are **excluded**

    Files:

    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--no-toc.css`
    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--no-toc.min.css`


4. **Selectors non-wrapped, with TOC**

    - CSS selectors are **NOT** wrapped under any class name
    - CSS rules for table of contents parts are **included**

    Files:

    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--with-toc.css`
    - `./dist/css/wulechuan-styles-for-html-via-markdown.default--with-toc.min.css`


    > Don't forget to use the `table-of-contents-behaviours.js` together with either of these CSS files.


The markup structure of the said TOC parts are based on the output of [markdown-it-toc-done-right](https://www.npmjs.com/package/markdown-it-toc-done-right). For your references, the TOC markup structure is here:

```html
<html>
<body>
    <article class="markdown-article"> <!-- Additional wrapper desgined by me -->
        <!-- Anything generated by `markdown-it` goes here -->
    </article>
    <nav class="markdown-article-toc"></nav> <!-- Everything generated by `markdown-it-toc-done-right`, including the nav tag itself. But I've customized the className. -->
    <button class="markdown-article-toc-toggling-button"></button> <!-- Additional button desgined by me -->
</body>
</html>
```

> This tool does **NOT** provide any Javascript programs for converting a markdown file into an HTML file. I insist that the converting tool should exist apart from this one. Because the converting functionality is out of the scope of this tool.
>
> The existence of the CSS definitions over the TOC HTML parts generated outside this tool is acceptable to me. Otherwise, I should not include anything for Typora or Vistual Studio Code either, should I?
>
> BTW, the converting tool is not for public yet. 'Cause I'm not sure it's ready.

---


### Microsoft Visual Studio Code Markdown preview Page

File:

- `./dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css`

This one is specifically for the preview page generated inside Microsoft [Visual Studio Code](https://code.visualstudio.com).

#### Usage

Add a raw HTML line (see below) into your markdown file, and then preview the markdown file in your VS Code as normal.

The HTML line to embed into your markdown file looks like this:

```html
<link rel="stylesheet" href="{YOUR_REAL_FILE_PATH_HERE}/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">
```

---


### The Firefox addon "Markdown Viewer Webext"

File:

- `./dist/css/wulechuan-styles-for-html-via-markdown--firefox-addon.default.css`

This one is specifically for the nice markdown processing addon of Firefox browser. The addon is named "[Markdown Viewer Webext](https://addons.mozilla.org/zh-CN/firefox/addon/markdown-viewer-webext/)".

#### Usage

1. **Make sure the said addon is installed already**
2. open your Firefox browser, press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>a</kbd> to open the Addon Manager page of firefox.
3. Find the addon named "**Markdown Viewer Webext**" and click it. Then you are led to the info page of the addon.
4. Click the "**Options**" tab. Then you see the panel of options of the addon.
5. Scroll down a bit the panel and find the section of title "**Custom CSS**". Below the title you see **a multi-lined text input box**.
6. Copy the entire content of the `...--firefox-addon.default.css` file, and paste into the input box, **replacing** the existing content of the input box.
7. Click anywhere outside the input box. This simple action will make the new content take effects. And you see a green text reading "**SAVED**" for an approval.
8. Open any markdown file with your Firefox browser and see the result.

> Note that the lookings of the TOC automatically generated by the addon is also customized by my CSS.

---



### As a Custom Theme of Typora

File:

- `./dist/css/wulechuan-styles-for-html-via-markdown--typora.default.css`

[Typora](https://typora.io/) is a really great tool for both reading and writing markdown files. The app allows users to customize the look and feel of the markdown(HTML in fact) inside it.

See the official doc on the subject: [Install Theme](http://theme.typora.io/doc/Install-Theme/).

---



## Usage

### Manually get CSS Files

Simply use any CSS file located under `./dist/css` folder.


### Manually get Javascript Files

Simply use any Javascript file located under `./dist/js` folder.



### Use as an Nodejs Package

```js
const { // All 5 interfaces are here.
    cssFileEntries,                 // An array of object(s).
    jsFileEntries,                  // An array of object(s).
    lookupDictionaryByFileNames,    // An object as a dictionary.

    syncGetDefaultCSSContentString, // A method that returns a string.
    syncReadContentOfOneThemeEntry, // A method that returns a string.
} = require('@wulechuan/css-stylus-markdown-themes') // require this module

console.log('-'.repeat(60))
console.log(
    'All available files in @wulechuan/css-stylus-markdown-themes:',
    Object.keys(lookupDictionaryByFileNames)
)
console.log('-'.repeat(60))

const theDefaultCSSContentString = syncGetDefaultCSSContentString()

const alsoTheDefaultCSSContentString = syncReadContentOfOneThemeEntry(
    'wulechuan-styles-for-html-via-markdown.default--no-toc.min.css'
)

const typoraCSSContentString = syncReadContentOfOneThemeEntry(
    'wulechuan-styles-for-html-via-markdown--typora.default.css'
)

const the7thThemeContentString = syncReadContentOfOneThemeEntry(
    cssFileEntries[6]
)

const theOnlyJavascriptContentString = syncReadContentOfOneThemeEntry(
    jsFileEntries[0]
)

const alsoTheOnlyJavascriptContentStringButMinified = syncReadContentOfOneThemeEntry(
    'table-of-contents-behaviours.min.js'
)
```


## Design CSS for a New Theme

This project utitlizes [Stylus](http://stylus-lang.com/) language to generate CSS files easily, and are organaized into Stylus components.

### Steps

1. Create a `.styl` file under `./source/stylus/markdown-style-scenarios/` folder, or a sub-folder if prefer.

2. In the newly created `.styl` file, write something like this:

    ```stylus
    //-------------------------------------------------
    // Set values for all variable.
    // Note:
    //     Any variable starts with underscore('_') is an optional variable.
    //     Others, required!
    //-------------------------------------------------

    codeBlocksThemeName = 'atom-one-dark'

    _selectorOf_markdownArticleParent = 'body > #app'
    _selectorOf_markdownArticleRoot   = '.my-markdown-article'

    _selectorOf_markdownArticleBackplateBackgroundColorCarrier = 'body'

    _selectorsOf_fontFamily_baseFontFamilyCarriers = 'html, article, .my-markdown-article'



    //-------------------------------------------------
    // Now all variables are set.
    // Let's import all parts.
    // Those parts will utilize
    // those variables and produce
    // customized CSS accordingly.
    //-------------------------------------------------

    @import '../to-assemble-all-parts' // We don't touch this line at all. It always writes this way.

    ```

3. Add a gulpjs task, so that the gulp tools will load the `.styl` you just created and edited, and produce CSS file(s) accordingly. To do so, open the `./gulpfile.esm.js/configs/stylus-tasks.js`, inside the Javascript file, you add an entry to the `Array` named `allSpecificOptions`. Save the Javascript file, of course.

4. Open a command line tool, like **bash**, **Git Bash**, **PowerShell**, **WSL**, or **Windows comannd**, then:
    - `cd` to the folder of this repository
    - type `npm run build` and press <kbd>enter</kbd> key
    - Wait for the program to end.

    > You can also type `npm start` to start a watcher on all source `.styl` files.

5. Checkout the `./dist/css` folder for your own CSS file.



### Code Blocks that are able to Colorize

See [code-blocks-theming.md](./docs/refs/en-US/code-blocks-theming.md).


### All Stylus Variables

See [stylus-variable-default-values.md](./docs/refs/en-US/stylus-variable-default-values.md).


## NPM Scripts

### `start`

```bash
npm start
```

or

```bash
npm run start
```

Starts a batch of file watchers to watch all source `.styl` files. As long as a change occurs, the CSS files of the involved scenario will be re-compiled.


### `build`

```bash
npm run build
```

Compile all CSS files of all scenarios once.


### `clean`


```bash
npm run clean
```

Delete all generated CSS files of all scenarios. They exist in the `./dist/css/` folder .

> Note that if a scenario configuration changes its output CSS file basename, then the exiting CSS file(s) with old basename will **NOT** be erased by this script. You have to manually delete these old files.


### `try-1`

```bash
npm run try-1
```

To compile all scenarios again and again is really time consuming. Sometimes we need to run some quick experiments. Then you run this script, instead of `npm run build`. This script is configured to compile the first sceneario in the `stylus-tasks.js` file.

> In fact, which scenario to compile is also configurable. But not via command line argument. You have to manually modify the `package.json` file.
>
> - `set theOnlyStylToBuild=true` means to compile only the first scenario;
> - `set theOnlyStylToBuild=vscode/vscode-_default` menas to compile only the scenario named `vscode/vscode-_default`.



## TODOS

- Consider introducing more stylus variables for theming. I'm not sure it worths me at present. Too many arguments would make this tool much worse to understand.
- Gulp task for processing javascript files which will used in HTML files via Markdowns.
- More base themes?
- More combinations of base themes and code block themes?
- Typora built-in TOC styling?



## License

WTFPL

> NOTE:
>
> I'm not an expert about license types. So I temporarily use WTFPL. But I guess this type of license might conflict with the ones used by those npm packages I'm utilizing.
