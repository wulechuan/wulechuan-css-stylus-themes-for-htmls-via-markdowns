<link rel="stylesheet" href="./dist/markdown-styles-for-vscode-built-in-preview.min.css">

# Introduction

This is a collection of themes that each
can be applied to shade any `Markdown` generated `HTML` contents.



# Usage


## Offline Usage

For offline usage, like working with Microsft [Visual Studio Code](https://code.visualstudio.com),
it's as easy as adding a markup inside your `Markdown` files, like so:

```md
<link rel="stylesheet" href="path/to/markdown-styles-for-vscode-built-in-preview.min.css">
```


## Online Usage

Currently, there is **no** way
that we can insert customer stylesheets into markdown pages in `github.com` or `bitbucket.org`.

See <https://github.com/github/markup> for a reference.

> 2. The HTML is sanitized, aggressively removing things
>    that could harm you and your kin—such as
>   `script` tags, `inline-styles`, and `class` or `id` attributes.
>    See the sanitization filter for the full whitelist.





# Example

Below is a snapshot of the rendered look of an `.md` file,
inside Microsoft Visual Studio Code,
rendered by the built-in markdown preview tool.

![Markdown Rendered Example 1](./docs/illustrates/markdown-theme-example.png "Markdown Rendered Example 1")




<style type="text/css">
.markdown {
  font-family: 'Microsoft Yahei UI', '微软雅黑';
}
.markdown kbd,
.markdown pre,
.markdown code {
  font-family: 'PT Mono', 'consolas', 'Courier New', monospace;
}
.markdown {
  padding: 48px 72px;
  line-height: 1.5;
}
.markdown h1 {
  margin-top: 192px !important;
  margin-bottom: 36px !important;
  font-size: 67.19999999999999px;
}
.markdown h2 {
  margin-top: 96px !important;
  margin-bottom: 24px !important;
  font-size: 43.2px;
}
.markdown h3 {
  margin-top: 72px !important;
  margin-bottom: 12px !important;
  font-size: 28.799999999999997px;
}
.markdown h4 {
  margin-top: 48px !important;
  margin-bottom: 12px !important;
  font-size: 26.400000000000002px;
}
.markdown h5 {
  margin-top: 36px !important;
  margin-bottom: 12px !important;
  font-size: 24px;
}
.markdown pre {
  font-size: 24px;
}
.markdown kbd,
.markdown pre,
.markdown code {
  border-radius: 6px !important;
}
.markdown table,
.markdown p,
.markdown li,
.markdown dd {
  font-size: 24px;
}
@media screen and (max-width: 1440px) {
  .markdown {
    padding: 36px 54px;
    line-height: 1.5;
  }
  .markdown h1 {
    margin-top: 144px !important;
    margin-bottom: 27px !important;
    font-size: 50.4px;
  }
  .markdown h2 {
    margin-top: 72px !important;
    margin-bottom: 18px !important;
    font-size: 32.4px;
  }
  .markdown h3 {
    margin-top: 54px !important;
    margin-bottom: 9px !important;
    font-size: 21.599999999999998px;
  }
  .markdown h4 {
    margin-top: 36px !important;
    margin-bottom: 9px !important;
    font-size: 19.8px;
  }
  .markdown h5 {
    margin-top: 27px !important;
    margin-bottom: 9px !important;
    font-size: 18px;
  }
  .markdown pre {
    font-size: 18px;
  }
  .markdown kbd,
  .markdown pre,
  .markdown code {
    border-radius: 4.5px !important;
  }
  .markdown table,
  .markdown p,
  .markdown li,
  .markdown dd {
    font-size: 18px;
  }
}
.markdown {
  box-sizing: content-box !important;
  max-width: 1440px;
  margin: auto;
  line-height: 1.5;
}
.markdown h1 {
  font-weight: 300;
}
.markdown h2 {
  font-weight: 300;
}
.markdown h3 {
  font-weight: 500;
}
.markdown h4 {
  font-weight: 500;
}
.markdown h5 {
  font-weight: 600;
}
.markdown small {
  font-size: 0.707em;
}
.markdown h1,
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6,
.markdown dt {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  padding: 0.5rem;
}
.markdown ul,
.markdown ol,
.markdown p,
.markdown dd {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.markdown pre {
  padding: 0 !important;
  margin-left: 1rem;
  margin-right: 1rem;
}
.markdown table pre:last-child {
  margin-bottom: 0;
}
.markdown blockquote {
  margin-left: 2.5rem;
  margin-right: 1.5rem;
}
.markdown blockquote ul,
.markdown blockquote ol,
.markdown blockquote p,
.markdown blockquote dd {
  margin-left: 0;
  margin-right: 0;
}
.markdown blockquote pre {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.markdown hr {
  margin: 1rem 0;
  padding: 0;
  height: 0;
  overflow: hidden;
  border-width: 1px 0 0;
  border-style: solid;
}
.markdown img {
  border-style: solid;
  border-width: 8px;
}
.markdown a,
.markdown code {
  font-size: inherit !important;
}
.markdown h1,
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6,
.markdown dt {
  text-align: left;
  border-width: 0;
}
.markdown ul,
.markdown ol,
.markdown dl,
.markdown blockquote {
  margin-top: 0.5em;
  margin-bottom: 1.5em;
}
.markdown p {
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  padding: 0.25em 0.5em;
}
.markdown li {
  margin: 1em 0 2em;
}
.markdown ul,
.markdown ol {
  padding-left: 3em;
}
.markdown blockquote,
.markdown table {
  padding: 0.5em 1em;
  border-left-width: 0.25em;
}
.markdown blockquote ul:last-child,
.markdown table ul:last-child,
.markdown blockquote ol:last-child,
.markdown table ol:last-child,
.markdown blockquote dl:last-child,
.markdown table dl:last-child,
.markdown blockquote li:last-child,
.markdown table li:last-child {
  margin-bottom: 0 !important;
}
.markdown code {
  display: inline-block;
  font-weight: normal;
  font-style: normal;
  border-width: 1px;
  border-style: solid;
  padding: 0.25em 0.5em;
  margin: 0 0.25em;
}
.markdown pre {
  overflow-x: scroll;
}
.markdown pre code {
  line-height: 1.25;
  border-width: 0;
  display: block;
}
.markdown pre code > * {
  line-height: 1.25;
  padding: 0;
}
.markdown :first-child {
  margin-top: 0 !important;
}
.markdown {
  background-color: #d3d3d3;
}
.markdown a,
.markdown a:visited {
  color: #1faced !important;
}
.markdown a:hover,
.markdown a:focus,
.markdown a:active {
  color: #35b4ef !important;
}
.markdown img {
  border-color: rgba(136,136,136,0.5);
}
.markdown h1,
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6,
.markdown dt {
  color: #000;
}
.markdown,
.markdown strong,
.markdown b,
.markdown em,
.markdown h1,
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6,
.markdown dt,
.markdown p,
.markdown li,
.markdown dd,
.markdown blockquote,
.markdown table {
  color: #333;
}
.markdown > code,
.markdown strong > code,
.markdown b > code,
.markdown em > code,
.markdown h1 > code,
.markdown h2 > code,
.markdown h3 > code,
.markdown h4 > code,
.markdown h5 > code,
.markdown h6 > code,
.markdown dt > code,
.markdown p > code,
.markdown li > code,
.markdown dd > code,
.markdown blockquote > code,
.markdown table > code {
  color: #875179 !important;
  border-color: rgba(0,0,0,0.219);
  background-color: rgba(255,255,255,0.319);
}
.markdown hr {
  border-color: rgba(0,0,0,0.219);
  background-color: rgba(0,0,0,0.219);
}
.markdown table,
.markdown td,
.markdown th {
  border-color: #999 !important;
}
.markdown pre code {
  color: #fff;
  background-color: #000;
}
.markdown pre code > * {
  background-color: transparent !important;
}
.markdown blockquote {
  background-color: rgba(136,136,136,0.1) !important;
  border-color: #1faced !important;
}
@media print {
  .markdown a,
  .markdown a:visited {
    text-decoration: underline;
  }
  .markdown a[href]:after {
    content: ' (' attr(href) ')';
  }
  .markdown abbr[title]:after {
    content: ' (' attr(title) ')';
  }
  .markdown a[href^='#']:after,
  .markdown a[href^='javascript:']:after {
    content: '';
  }
  .markdown pre,
  .markdown blockquote {
    page-break-inside: avoid;
  }
  .markdown thead {
    display: table-header-group;
  }
  .markdown tr,
  .markdown img {
    page-break-inside: avoid;
  }
  .markdown img {
    max-width: 100% !important;
  }
  .markdown p,
  .markdown h2,
  .markdown h3 {
    orphans: 3;
    widows: 3;
  }
  .markdown h2,
  .markdown h3 {
    page-break-after: avoid;
  }
}
</style>