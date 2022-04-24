<link rel="stylesheet" href="../../../源代码/发布的源代码/文章排版与配色方案集/层叠样式表/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# Wulechuan&apos;s HTML Article Themes

## Navigation

- Go back to [ReadMe.en-US.md](./ReadMe.md)


## Multilingual Editions of this Article

- [本文之汉语版](../汉语/采用本工具开发一套新的文章排版与配色方案之详细步骤.md)





## Design CSS for a New Theme

This project utitlizes [Stylus](http://stylus-lang.com/) language to generate CSS files easily. And all Stylus codes are organaized into components.

### Steps

1. Create a `.styl` file under `./源代码/原始的源代码/用于设计文章排版与配色方案的代码/stylus/逐个应用场景选用样式零件并装配成完整样式表/` folder, or a sub-folder if prefer.

2. In the newly created `.styl` file, write something like this:

    ```stylus
    //-------------------------------------------------
    // Set values for all variable.
    // Note:
    //     Any variable starts with underscore('_')
    //     is an optional variable.
    //
    //     Others, required!
    //     As of v7.2.0, The only required stylus variable
    //     is named with prefix of "REQUIRED_".
    //     If there were any new required ones,
    //     they would also be named with the prefix.
    //-------------------------------------------------

    REQUIRED_sourceFolderNameOf_chosenThemingTypeOfCodeBlocks = 'atom-one-dark'

    _selectorOf_article_rootParent = 'body > #app'
    _selectorOf_article_root   = '.my-markdown-article'

    _selectorOf_article_backdropBackgroundColorCarrier = 'body'

    _selectorsOf_fontFamily_baseFontFamilyCarriers     = 'article, .my-markdown-article'



    //-------------------------------------------------
    // Now all variables are set.
    // Let's import all parts.
    // Those parts will utilize
    // those variables and produce
    // customized CSS accordingly.
    //-------------------------------------------------

    // We don't touch this line at all. It always writes this way.
    @import '../../文章排版和配色样式之零件库/1-根据给出的变量集将零件组装成完整样式表'

    ```

3. Add a gulpjs task, so that the gulp tools will load the `.styl` you just created and edited, and produce CSS file(s) accordingly. To do so, open the `./gulpfile.esm.js/任务之配置项集/针对构建所有须发布之层叠样式表之任务的.js`, inside the Javascript file, you add an entry to the `Array` named `specificTaskConfigsOfAllThemes`. Save the Javascript file, of course.

4.  Now you have 2 choices:

    -   Method 1 (NOT recommanded)

        **To build your theme again and again manually.** The releasing example HTML files do get updated, but NOT applying the new theme you are working on. Those example HTML files always apply the default theme rather. So basically you can't have a visual feedback of what you've changed to your new theme.

        The releasing example HTML files are for demostrations of my default theme only. So I purposely prevent it from applying other themes. Unless you change the default `.styl` referencing to make it imporing the new theme of your own. But trust me, that's NOT necessary, because remember? We have the second choice. See below(not right below, but a bit farther).

        Steps:

        1.  Open a command line tool, like **bash**, **Git Bash**, **PowerShell**, **WSL**, or **Windows comannd**.
        2.  `cd` to the folder of this repository.
        3.  type `npm run build` and press <kbd>enter</kbd> key.
        4.  Wait for the program to end.
        5.  Checkout the `./源代码/发布的源代码/文章排版与配色方案集/层叠样式表` folder for your own CSS file.



    -   Method 2 (**recommanded**)

        **To make computer automatically rebuild your theme whenever a change applies to ANY source `.styl` file of yours.** What's better, two auto-updating HTML files are generated for you, under the `./测试集/产生的临时文件/示例性-html-文件集（仅限于当前正在开发的排版与配色方案）/` folder. All you need to do is constantly refresh your web browser to see what've changed in either of the HTML files.

        Steps:

        1.  Remember the entry you've just added to the Array? There must be a property named `entryStylusFileSubPath` inside the entry, right? Now set the exact same sub-path in the `./gulpfile.esm.js/任务之配置项集/针对用于开发某一特定排版与配色方案的任务的.js` file.
        2.  Open a command line tool, like **bash**, **Git Bash**, **PowerShell**, **WSL**, or **Windows comannd**.
        3.  `cd` to the folder of this repository.
        4.  type `npm start` and press <kbd>enter</kbd> key.
        5.  Open either or both of the HTML files generated under the `./测试集/产生的临时文件/示例性-html-文件集（仅限于当前正在开发的排版与配色方案）/` folder with your favorite web browser(s).
        6.  Make some changes to your `.styl` files.
        7.  Refresh your web browser(s) to see the changes.
        8.  Also note that the `.css` files are constantly updating inside the `./源代码/发布的源代码/文章排版与配色方案集/层叠样式表/` folder. But I guess you seldom care about them during the development process.






### Code Blocks that are able to Colorize

See [code-blocks-theming.md](./code-blocks-theming.md).


### All Stylus Variables

See [stylus-variable-default-values.md](./stylus-variable-default-values.md).





### NPM Scripts for Developers

#### `start` and `start2`

Used for development of a single theme.

Starts a batch of file watchers to watch all source `.styl` files. As long as a change occurs, the CSS files of the involved theme will be re-compiled.


##### Usage in CLI

To run gulp in standard mode, do either

```bash
npm start
```

or

```bash
npm run start
```

> Either way, gulp exceptions(aka errors) are not swallowed.


To make gulp running in `--silent` mode, do this:

```bash
npm run start2
```

> This way results in a cleaner console but is difficult to debug gulp scripts.



#### `build` and `build2`

Compile all CSS files of all scenarios once.

##### Usage in CLI

To make gulp running in `--silent` mode, do

```bash
npm run build
```

> This results in a cleaner console but is difficult to debug gulp scripts.

> `npm run build` will automatically update the example HTML files, as long as the build itself is successful. While `build2` will **NOT** update example HTML files.


To run gulp in standard mode, do this:

```bash
npm run build2
```

> This way, gulp exceptions(aka errors) are not swallowed.

> `npm run build2` will **NOT** update example HTML files.



#### `clean` and `clean2`

Delete all generated CSS files of all scenarios. They exist in the `./源代码/发布的源代码/文章排版与配色方案集/层叠样式表/` folder .


> Note that if a scenario configuration changes its output CSS file basename, then the exiting CSS file(s) with old basename will **NOT** be erased by this script. You have to manually delete these old files.


##### Usage in CLI

To make gulp running in `--silent` mode, do

```bash
npm run clean
```

> This results in a cleaner console but is difficult to debug gulp scripts.


To run gulp in standard mode, do this:

```bash
npm run clean2
```




#### `updateExampleHTMLs` & `updateExampleHTMLs2`

To generate or update HTML files via example markdowns.

##### Usage in CLI

Gulp runs in `--silent` mode.

```bash
npm run updateExampleHTMLs
```

To run gulp in standard mode, do this:

```bash
npm run updateExampleHTMLs2
```





#### `eslint`

To lint all discovered Javascript files according to these globs:

- `./.eslintrc.js`
- `./gulpfile.esm.js/**/*.js`
- `./文档/文章排版与配色效果示例集/*.js`
- `./测试集/*.js`
- `./源代码/发布的源代码/本工具作为其他-javascript-工具之依赖模块时的代码/*.js`
- `./源代码/原始的源代码/用于设计文章排版与配色方案的代码/js/**/*.js`
- `./本项目之全局配置项集.js`

The famous [eslint](https://eslint.org) empowers this feature.


##### Usage in CLI

```bash
npm run eslint
```






#### `test`, `beforeGitCommit` & `prepublishOnly`

To run some tests. These 3 npm scripts are identical at present.

##### Usage in CLI

```bash
npm test
```

or

```bash
npm run test
```

```bash
npm run beforeGitCommit
```

> The `prepublishOnly` runs automatically before you publishing this npm package to the npm registry.

