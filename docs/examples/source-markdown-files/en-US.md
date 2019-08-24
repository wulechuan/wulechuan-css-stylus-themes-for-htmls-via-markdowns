<link rel="stylesheet" href="../../../dist/css/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# Wulechuan's MarkDown CSS Styles Examples


## Articles

### Linkages

Aliquip proident nulla ex cillum magna. Anim culpa dolor ullamco nulla culpa labore. Lorem dolor proident qui aliquip nulla. Do ex [external link 1 (www.bing.com)](https://www.bing.com/) anim tempor do veniam duis nulla ut culpa tempor dolore. Labore dolore ex anim [fake self-page link 2 (do not follow)](#fake-id-2) id. Anim et ex ex labore cupidatat anim proident laboris amet fugiat aute ad. Reprehenderit dolore cupidatat sit elit esse anim est aute [external link 2 (www.google.com)](https://www.google.com/) lorem ipsum.

A link to a section of the page itselfs should look a bit different from a link to another page. A so-called page local link looks like: [A Normal Image](#a-normal-image).

### Inline Codes in Multiple Lines

Occaecat ea Lorem ut `officia` ea ad `nostrud`. Ut deserunt irure in dolore `voluptate` ad `reprehenderit` et sit. Cupidatat `nostrud` tempor `aliqua` ad id ex `labore` in. Ut deserunt irure pariatur `tempor` ex. Ex `irure` sit proident `consectetur` ipsum `pariatur`.


### Quoted Block

#### What is GitHub?

According to [KORBIN BROWN](https://www.howtogeek.com/180167/htg-explains-what-is-github-and-what-do-geeks-use-it-for/):

> ### GitHub
>
> [Github](https://github.com/ "https://github.com") is a website and service that we hear geeks rave about all the time, yet a lot of people don’t really understand what it does. Want to know what all the GitHub hubbub is about? Read on to find out.

See, it's a website for anyone, but mostly engineers.



## Illustrates(Images)

### A Normal Image

![Duan er is a pretty boy](./illustrates/duan-er-pretty.jpg "Duan er is a pretty boy")

### An Image that Fails to Load

![A Beauty](./images/beauty.jpg)


## Code Snippets

### A JavaScript Snippet

```javascript
// This is a comment.
import something from 'somethingjs'

const author = {
    name: 'wulechuan',
    age: 40,
}

export default function isAPromiseObject(input) {
    /*
        This is a multi-lined
        comment
        with indentations.
    */
    return !!input && typeof input.then === 'function' && typeof input.done === 'function'
}
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
    <!-- A single line comment. -->
</head>
<body>
    <article>Hi! This is wulechuan.</article>
    <!--
        A multi-lined comment
        looks like
        this.
    -->
</body>
</html>
```


### A CSS Snippet

```css
body {
    padding: 3rem 1rem 4rem 1rem;
}

@media (max-width: 900px) {

    html {
        font-size: 16px;
    }

    body {
        font-size: 1rem;
    }
}
```


### A Stylus(CSS) Snippet

```stylus
& {
    box-sizing: content-box !important;
    max-width: articleBlockMaxWidth;
    margin: auto;
    line-height: 1.5;

    small {
        font-size: .707em; // Comment
    }

    /*
        A multi-lined comment,
        looks
        like this.
    */

    h1, h2, h3, h4, h5, h6, dt {
        padding:       0.5rem;
        margin-left:  -0.5rem; // Compensation to the padding-left
        margin-right: -0.5rem; // Compensation to the padding-right
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
            <th style="width: 120px;">A</td>
            <th>B</td>
        </tr>
    </thead>
<tbody>
<tr>
<td>
    Javascript
</td>
<td>

```javascript
const aSnippetInsideATable = 'hello';
```

</td>
</tr>
<tr>
<td>
    CSS
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
    <h4>This is a sub title inside a table cell</h4>
    <p>Irure aute aute aute ullamco deserunt deserunt cupidatat amet tempor eiusmod do ut quis qui. Nostrud esse irure pariatur ad aute ullamco sit reprehenderit magna. In aute enim qui veniam pariatur consectetur nulla ipsum consequat.</p>
</td>
</tr>
</tbody>
</table>
