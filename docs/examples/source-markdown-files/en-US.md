

# Wulechuan's MarkDown CSS Styles Examples


## Basics

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



## Illustrates(Images)

### A Normal Image

![Duan er is a pretty boy](./illustrates/duan-er-pretty.jpg "Duan er is a pretty boy")

### An Image that is failed to load

![A Beauty](./images/beauty.jpg)


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


### A Stylus(CSS) Snippet

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
    <h4>This is a sub title</h4>
    <p>Irure aute aute aute ullamco deserunt deserunt cupidatat amet tempor eiusmod do ut quis qui. Nostrud esse irure pariatur ad aute ullamco sit reprehenderit magna. In aute enim qui veniam pariatur consectetur nulla ipsum consequat.</p>
</td>
</tr>
</tbody>
</table>
