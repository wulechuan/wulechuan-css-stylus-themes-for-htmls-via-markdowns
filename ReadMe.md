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

This will be a collection of themes that each
can be applied to shade any `Markdown` generated `HTML` contents.

But at present, there is only one theme avaialbe.



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

## Some Live Examples

### Linkages

Aliquip proident [Github.com](https://github.com) nulla ex cillum magna. Anim culpa dolor ullamco nulla culpa labore. Lorem dolor proident qui aliquip nulla. Do ex [nulla](#) anim tempor do veniam duis nulla ut culpa tempor dolore. Labore dolore ex anim [adipisicing esse do](#) id. Anim et ex ex labore cupidatat anim proident laboris amet fugiat aute ad. Reprehenderit dolore cupidatat sit elit esse anim est aute [consequat et nisi est](#).

### Inline Codes in Multiple Lines
Occaecat ea Lorem ut `officia` ea ad `nostrud`. Ut deserunt irure in dolore `voluptate` ad `reprehenderit` et sit. Cupidatat `nostrud` tempor `aliqua` ad id ex `labore` in. Ut deserunt irure pariatur `tempor` ex. Ex `irure` sit proident `consectetur` ipsum `pariatur`.


## 中文（Chinese）示例

### 第三级标题

送市列凡只术？`道彩失客`即。收适引[吉特中心](https://github.com)主罪型但台观物他切？群飞困康伙稜跳由藏千啊`查游认`究坦。开整`打会过刚`？皮证好`速接窗红究饭`含忽量`戏`当险。验木被分标奥`喝吗除`刚级`幸敢`？班露弄回`往十品`告梦`营`脑认祖便妈竟？

牛现组睛贵两<kbd>Ctrl</kbd>庭意王？你西孤`委脑单最易调`法祖娜义细坦！联只边离馆诺值蜖备罗这字旅众！算关色乱弹只个决莫遗到名阿餐报戴走华。毕继表准顶道授研伤？妹枪奖[身首耳贝基动整](#)。坐化痛请眼性名沉同至兴渐维获词。


## Code Snippets

### A JavaScript Snippet

```javascript
module.exports = function isAPromiseObject(input) {
	return !!input && typeof input.then === 'function' && typeof input.done === 'function';
};
```

### An HTML Snippet

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

### A CSS Stylus Snippet

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

## Table

### A Table

| Key        | Value           |
| ---------- | --------------- |
| Name       | wulechuan       |
| Gender     | Make            |
| Birth Year | 1979            |
| Hometown   | Nanchang, China |
| Loved      | `SOFTIMAGE|XSI` |

### Another Table, Which Contains Code Snippets

<table>
    <thead>
        <tr>
            <th>A</td>
            <th>B</td>
        </tr>
    </thead>
    <tbody>
<tr>
<td>
    javascript
</td>
<td>

```javascript
const aSnippetInsideATable = 'hello';
```

</td>
</tr>
<tr>
<td>
    css
</td>
<td>

```css
.wulechuan {
    color: #790319;
}
```

</td>
</tr>
<tr>
<td>
    regular text
</td>
<td>
    Irure aute aute aute ullamco deserunt deserunt cupidatat amet tempor eiusmod do ut quis qui. Nostrud esse irure pariatur ad aute ullamco sit reprehenderit magna. In aute enim qui veniam pariatur consectetur nulla ipsum consequat.
</td>
</tr>
    </tbody>
</table>

## Quoted Block


Lorem Lorem sint labore id deserunt voluptate adipisicing consectetur non. Amet proident consequat dolor aliqua ut fugiat aute consequat qui laborum veniam sunt sunt anim. Ullamco pariatur ipsum minim ut anim. Commodo aliquip voluptate mollit ut commodo. Amet adipisicing eu quis non. Mollit ex consequat ipsum aliquip ullamco enim dolor consectetur aliquip laborum.

> ### Note
> Mollit pariatur minim consequat consectetur ea. 
> aliquip do incididunt culpa Lorem commodo cillum mollit officia.
>
> Lorem aute labore quis proident qui minim elit exercitation.
> Voluptate incididunt ullamco velit veniam consectetur nostrud pariatur.


Lorem Lorem sint labore id deserunt voluptate adipisicin.

## A Snapshot for Your References

Below is a snapshot of the rendered look of an `.md` file,
inside Microsoft Visual Studio Code,
rendered by the built-in markdown preview tool.

![Markdown Rendered Example 1](./docs/illustrates/markdown-theme-example.png "Markdown Rendered Example 1")
