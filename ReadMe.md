<link rel="stylesheet" href="./dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# Wulechuan's HTML Article Themes


## Multilingual Editions of this Article

- [简体中文版文档](./ReadMe.zh-hans-CN.md)




## NPM Page

<dl>
<dt>Package Name</dt>
<dd>

[@wulechuan/css-stylus-markdown-themes](https://www.npmjs.com/package/@wulechuan/css-stylus-markdown-themes)

</dd>
<dt>Author</dt>
<dd><p>wulechuan (南昌吴乐川)</p></dd>
</dl>


## What's This

This tool generates multiple CSS files easily. It also provide a tiny js interface, so that other js tools can utilize contents of those CSS files easily.

**News: Now we have a dark theme.**

## Documentation Chapters

> These links lead to a different page each.

- [Introduction](./docs/refs/en-US/introduction.md)
- [How does this Tool Work](./docs/refs/en-US/how-does-this-tool-work.md)
- [Application Examples](./docs/refs/en-US/application-examples.md)
- [Supported Scenarios so far](./docs/refs/en-US/supported-scenarios.md)
- [Develope CSS for a New Theme](./docs/refs/en-US/develope-css-for-a-new-theme.md)




## Visual Examples

A picture paints a thousand words.

The pictures below showcase how does an article look and feel as the default CSS generated by this tool is applied to the article.

> These pictures are huge (file sizes in mega bytes).

### Examples with a Light-colored Theme Applied


- [Snapshot: In default light-colored theme, in a wide window, with toc collapsed](./docs/examples/rendered/snapshots/example_en-US_default-light-colored-theme_1-in-a-wide-window_with-toc-collapsed.png)
- [示例：简体中文范文配默认浅色主题，在宽大尺寸浏览器中的效果（目录已收叠）](./docs/examples/rendered/snapshots/示例：简体中文范文配默认浅色主题，1-在宽大尺寸浏览器中的效果（目录已收叠）.png)

### Examples with a Dark-colored Theme Applied

- [Snapshot: In default dark-colored theme, in a wide window, with toc collapsed](./docs/examples/rendered/snapshots/example_en-US_default-dark-colored-theme_1-in-a-wide-window_with-toc-collapsed.png)
- [示例：简体中文范文配默认深色主题，在宽大尺寸浏览器中的效果（目录已收叠）](./docs/examples/rendered/snapshots/示例：简体中文范文配默认深色主题，1-在宽大尺寸浏览器中的效果（目录已收叠）.png)


### All Available Example Pictures

For more pictures, see:

- [Application Examples (en-US)](./docs/refs/en-US/application-examples.md).
- [Application Examples (zh-hans-CN)](./docs/refs/zh-hans-CN/application-examples.md).





## Usage

- If your purpose is to build some HTMLs out of some Markdown documents, and you'd like to utilize my themes(thanks), then please consider this advise:

    > Surely you can use CSS files in this package directly, as long as you have your own tool pipeline for converting MarkDowns into HTMLs. But some of you MIGHT not even have an pipeline. Then I highly recommand you to checkout the other 3 packages of mine, which are designed specifically for converting Markdowns into HTMLs. All 3 of them utilize CSS files generated by this package. And all are promoted right inside this article, [below](#promotions). With the helps of any of the promoted packages, you can convert your Markdown files with just tiny little efforts.

- Well, if you really need to take my theme CSS in some other way, please read on.

### Manually get Files

#### CSS Files

Simply use any CSS file located under `./dist/css` folder.

#### Javascript File(s)

Simply use any Javascript file located under `./dist/js` folder.



### Use as a Nodejs Package

```js
const { // All 6 interfaces are here.
    cssFileEntries,                  // An array of object(s).
    jsFileEntries,                   // An array of object(s).
    allFileEntriesKeyingByFileNames, // An object as a dictionary.

    syncGetContentStringOfOneFileEntry,         // A method that returns a string.
    syncGetContentStringOfDefaultCSS,           // A method that returns a string.
    syncGetContentStringOfDefaultTOCJavascript, // A method that returns a string.
} = require('@wulechuan/css-stylus-markdown-themes') // require this module

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
    'table-of-contents-and-back-to-top-anchor-behaviors.min.js'
)

const stillTheOnlyTOCJavascriptContentStringButNotMinified = syncGetContentStringOfOneFileEntry(
    jsFileEntries[0]
)
```


-----


## Promotions

There's another npm package of mine, named "[@wulechuan/generate-html-via-markdown](https://www.npmjs.com/package/@wulechuan/generate-html-via-markdown)". For conveniences, let's call it package A. Package A converts a provided MarkDown string into an HTML string, and utilizes the CSS themes provided here to decorate the generated HTML contents.

Yet there is a third npm package of mine, name "[@wulechuan/gulp-markdown-to-html](https://www.npmjs.com/package/@wulechuan/gulp-markdown-to-html)". Let's call it package B. Package B works like a wrapper of the package A, make functionalities of A work just fine in [Gulpjs](https://gulpjs.com) pipelines.

There is another npm package of mine, name "[@wulechuan/markdown-to-html-via-cli](https://www.npmjs.com/package/@wulechuan/markdown-to-html-via-cli)". Let's call it package C. Package C works like another wrapper of the package A, make functionalities of A work just fine in CLI environments. This is a really easy way for you to convert any MarkDown files into HTML files, in batch!


## TODOS

- If zero items In TOC, TOC and its toggling button should **NOT** show at all.
- Consider introducing more stylus variables for theming. I'm not sure it worths me at present. Too many arguments would make this tool much worse to understand.
- Typora built-in TOC styling?



## License

WTFPL

> NOTE:
>
> I'm not an expert about license types. So I temporarily use WTFPL. But I guess this type of license might conflict with the ones used by those npm packages I'm utilizing.

