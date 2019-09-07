<link rel="stylesheet" href="../../../dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# Wulechuan's HTML Article Themes

- Go back to [ReadMe.md](../../../ReadMe.md)


## Multilingual Editions of this Article

- [本文之简体中文版](../zh-hans-CN/develope-css-for-a-new-theme.md)





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

See [code-blocks-theming.md](./code-blocks-theming.md).


### All Stylus Variables

See [stylus-variable-default-values.md](./stylus-variable-default-values.md).





### NPM Scripts for Developers

#### `start` and `start2`

Starts a batch of file watchers to watch all source `.styl` files. As long as a change occurs, the CSS files of the involved scenario will be re-compiled.


##### Usage in CLI

To make gulp running in `--silent` mode, do either

```bash
npm start
```

or

```bash
npm run start
```

> Either way results in a cleaner console but is difficult to debug gulp scripts.


To run gulp in standard mode, do this:

```bash
npm run start2
```



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

> `npm run build2` will **NOT** update example HTML files.



#### `clean` and `clean2`

Delete all generated CSS files of all scenarios. They exist in the `./dist/css/` folder .


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




#### `dev-1`


To compile all scenarios again and again is really time consuming. Sometimes we need to run some quick experiments. Then you run this script, instead of `npm run build`. This script is configured to compile the first sceneario in the `stylus-tasks.js` file.

> In fact, which scenario to compile is also configurable. But not via command line argument. You have to manually modify the `package.json` file.
>
> - `set theOnlyStylToBuild=true` means to compile only the first scenario;
> - `set theOnlyStylToBuild=vscode/vscode-_default` menas to compile only the scenario named `vscode/vscode-_default`.

##### Usage in CLI

Gulp runs in standard mode.

```bash
npm run dev-1
```





#### `eslint`

To lint all discovered Javascript files according to these globs:

- `./.eslintrc.js`
- `./gulpfile.esm.js/**/*.js`
- `./test/*.js`
- `./source/module/**/*.js`
- `./source/themes/js/**/*.js`
- `./global-config.js`
- `./index.js`

The famous [eslint](https://eslint.org) empowers this feature.


##### Usage in CLI

```bash
npm run eslint
```






#### `test`

To run the test Javasctip file: `./test/index.js`.

##### Usage in CLI

```bash
npm test
```

or

```bash
npm run test
```


