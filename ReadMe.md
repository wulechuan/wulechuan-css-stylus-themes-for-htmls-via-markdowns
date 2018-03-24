<link rel="stylesheet" href="./dist/default.css">

# NPM Page

<dt>Package Name</dt>
<dd>

[@wulechuan/css-stylus-markdown-themes](https://www.npmjs.com/package/@wulechuan/css-stylus-markdown-themes)

</dd>
<dt>Author</dt>
<dd><p>南昌吴乐川</p></dd>
</dl>


# Introduction

This is a collection of themes that each
can be applied to shade any `Markdown` generated `HTML` contents.



# Usage


## Offline Usage

For offline usage, like working with Microsft [Visual Studio Code](https://code.visualstudio.com),
it's as easy as adding a markup inside your `Markdown` files, like so:

```html
<link rel="stylesheet" href="path/to/markdown-styles-for-vscode-built-in-preview.min.css">
```

> By the way,
> to easily open the rendered preview page
> for a markdown file in Microsoft Visual Studio Code,
> simply focus the markdown file,
> and then press <kbd>Ctrl</kbd>+<kbd>k</kbd> and then <kbd>v</kbd>. Notice that the `v` is **not** combind with
> a `ctrl`.


## Online Usage

Currently, there is **no** way
that we can insert customer stylesheets into markdown pages in `github.com` or `bitbucket.org`.

See <https://github.com/github/markup> for a reference.

> 2. The HTML is sanitized, aggressively removing things
>    that could harm you and your kin—such as
>   `script` tags, `inline-styles`, and `class` or `id` attributes.
>    See the sanitization filter for the full whitelist.





# Example

## Some Live Snippets Just for Experiences

A JavaScript Snippet
```javascript
module.exports = function isAPromiseObject(input) {
	return !!input && typeof input.then === 'function' && typeof input.done === 'function';
};
```

An HTML Snippet
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Wulechuan's Page</title>
</head>
<body>
    <article>Hi! This is wulechuan.</article>
</body>
</html>
```

A CSS Stylus Snippet
```css
& {
    box-sizing: content-box !important;
    max-width: articleBlockMaxWidth;
    margin: auto;
	line-height: 1.5;

    small {
        font-size: .707em;
    }

    h1, h2, h3, h4, h5, h6, dt {
        margin-left:  -0.5rem;
        margin-right: -0.5rem;
        padding:       0.5rem;
    }
}
```

## A Snapshot

Below is a snapshot of the rendered look of an `.md` file,
inside Microsoft Visual Studio Code,
rendered by the built-in markdown preview tool.

![Markdown Rendered Example 1](./docs/illustrates/markdown-theme-example.png "Markdown Rendered Example 1")
