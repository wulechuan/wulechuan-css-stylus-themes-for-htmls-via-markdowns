<link rel="stylesheet" href="./dist/wulechuan-styles-for-html-via-markdwon.default.css">

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

But at present, **there is only one theme availabe**.



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

> 1. The HTML is sanitized, aggressively removing things
>    that could harm you and your kin—such as
>   `script` tags, `inline-styles`, and `class` or `id` attributes.
>    See the sanitization filter for the full whitelist.





# Example

## Some Live Examples

### Linkages

Aliquip proident [Github.com](https://github.com) nulla ex cillum magna. Anim culpa dolor ullamco nulla culpa labore. Lorem dolor proident qui aliquip nulla. Do ex [nulla](#fake-id-1) anim tempor do veniam duis nulla ut culpa tempor dolore. Labore dolore ex anim [adipisicing esse do](#fake-id-2) id. Anim et ex ex labore cupidatat anim proident laboris amet fugiat aute ad. Reprehenderit dolore cupidatat sit elit esse anim est aute [consequat et nisi est](#fake-id-3).

### Inline Codes in Multiple Lines

Occaecat ea Lorem ut `officia` ea ad `nostrud`. Ut deserunt irure in dolore `voluptate` ad `reprehenderit` et sit. Cupidatat `nostrud` tempor `aliqua` ad id ex `labore` in. Ut deserunt irure pariatur `tempor` ex. Ex `irure` sit proident `consectetur` ipsum `pariatur`.


## Quoted Block


Lorem Lorem sint labore id deserunt voluptate adipisicing consectetur non. Amet proident consequat dolor aliqua ut fugiat aute consequat qui laborum veniam sunt sunt anim.

> ### Note
>
> [Mollit pariatur](https://github.com/) minim consequat consectetur ea.
> aliquip do incididunt culpa Lorem `commodo` cillum mollit officia.
>
> Lorem aute labore quis [proident qui](#fake-id) minim elit exercitation.
> Voluptate incididunt ullamco velit veniam consectetur nostrud pariatur.


Lorem sint labore id deserunt voluptate adipisicin.


## 中文（Chinese）示例

### 《千字文》[节选]


天地玄黄，宇宙洪荒。
日月盈昃，辰宿列张。
寒来暑往，秋收冬藏。
闰余成岁，律吕调阳。
云腾致雨，露结为霜。
金生丽水，玉出昆冈。
剑号巨阙，珠称夜光。
果珍李柰，菜重芥姜。

### 《荷塘月色》[节选]

曲曲折折的荷塘上面，弥望的是田田的叶子。叶子出水很高，像亭亭的舞女的裙。层层的叶子中间，零星地点缀着些白花，有袅娜地开着的，有羞涩地打着朵儿的；正如一粒粒的明珠，又如碧天里的星星，又如刚出浴的美人。微风过处，送来缕缕清香，仿佛远处高楼上渺茫的歌声似的。这时候叶子与花也有一丝的颤动，像闪电般，霎时传过荷塘的那边去了。叶子本是肩并肩密密地挨着，这便宛然有了一道凝碧的波痕。叶子底下是脉脉的流水，遮住了，不能见一些颜色；而叶子却更见风致了。

### <center>《马诗二十三首·其五》</center>

<center>
<em>【唐】 李贺</em>

大漠沙如雪，\
燕山月似钩。\
何当金络脑，\
快走踏清秋。
</center>

### 杂乱内容，仅用于视觉样式之呈示

一段文字中，会有**着重的文字**，也有*斜体的文字*。

这里是 GitHub，我本人有意将其译为【[吉特中心](https://github.com)】。当然，这显然并非官方译法。如果一个链接指向本文，则该链接看起来与其余链接稍有不同，如：本文《[Code Snippets](#code-snippets)》部分。

再来看看行文中的【代码词汇】或【术语】：例如`孙行者`和`计算机`。

计算机键盘快捷键，其视觉样式如是：<kbd>Ctrl</kbd>+<kbd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</kbd>；又例：<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>s</kbd>组合键广泛用于各自现代计算机软件，代表（将工作内容或文件）`另存为`之功能。

我们还可以引用一小段文字，比如一则笑话：

> 一日，一姑娘在家陪妈妈看电视剧。居中女主角爱上了外国男子。
> 女方家庭大力反对。最终，女主角与该外国男子分手。
> 观剧至此，姑娘问其母亲：
>
> > “如果我想跟老外结婚，你会怎么样？”
>
> 母亲不加思索地答道：
>
> > “你要是能嫁出去，别说外国人，就是外星人我都愿意！”

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
| Gender     | Male            |
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

## A Snapshot for Your Reference

Below is a snapshot of the rendered look of an `.md` file,
inside Microsoft Visual Studio Code,
rendered by the built-in markdown preview tool.

![Markdown Rendered Example 1](./docs/illustrates/markdown-theme-example.png "Markdown Rendered Example 1")
