# Wulechuan's Article CSS Styles Examples

<p class="document-author">wulechuan@live.com</p>

---

## Articles

### Linkages

Aliquip proident nulla ex cillum magna. Anim culpa dolor ullamco nulla culpa labore. Lorem dolor proident qui aliquip nulla. Do ex [external link 1 (www.bing.com)](https://www.bing.com/) anim tempor do veniam duis nulla ut culpa tempor dolore. Labore dolore ex anim [fake self-page link 2 (do not follow)](#fake-id-2) id. Anim et ex ex labore cupidatat anim proident laboris amet fugiat aute ad. Reprehenderit dolore cupidatat sit elit esse anim est aute [external link 2 (www.google.com)](https://www.google.com/) lorem ipsum.

A link to a section of the page itselfs should look a bit different from a link to another page. A so-called page local link looks like: [A Normal Image](#a-normal-image).

### Lists

See some lists below:

- Reprehenderit aute ea pariatur tempor labore. Ullamco do incididunt sint velit duis ipsum irure amet voluptate. Cupidatat et do occaecat `nulla`. Nulla voluptate enim aute `magna do` non nisi qui qui et et irure. Dolore mollit dolore adipisicing consectetur sit. Aliquip fugiat Lorem in sunt Lorem aliqua ex in sunt.

    Nisi minim nulla elit non ut labore **aliquip et deserunt** culpa. Sint amet est laborum eu irure voluptate. In id et proident nulla pariatur ex cupidatat labore aliqua.

- Non adipisicing consectetur laborum quis anim ea consequat.

    - Aliqua excepteur nostrud ad `ullamco` minim commodo esse
    - elit elit ea nulla.
    - Sint est elit sint minim.

- Sunt ex eiusmod reprehenderit ullamco _fugiat_ ex duis cupidatat velit. Cillum commodo mollit dolore occaecat. Nulla Lorem deserunt minim ea nostrud reprehenderit do qui anim duis dolor.

- Amet veniam exercitation aliquip enim fugiat ~~nostrud consectetur aute mollit ullamco exercitation.~~ Incididunt consequat Lorem veniam aute qui non occaecat est **sit sint nulla** ipsum duis.

- Mollit nisi quis laboris officia. Ut ullamco cupidatat ex mollit duis. Officia nulla esse commodo exercitation nostrud. Laboris amet sunt exercitation velit ea. Aliquip [fake self-page link 2 (do not follow)](#fake-id-2) ex ipsum nulla voluptate laboris sit cillum incididunt pariatur enim irure non. Nostrud commodo labore adipisicing ullamco occaecat fugiat enim mollit. Deserunt sunt aute in amet nostrud cupidatat amet adipisicing est consectetur aute ex irure.

    Velit mollit amet dolore eiusmod ad nulla. Adipisicing nostrud ut elit consectetur non sunt pariatur commodo eiusmod duis fugiat proident aute enim.

    1. Non adipisicing tempor deserunt ullamco dolore.
    2. Voluptate minim dolore sunt dolor cupidatat nulla duis tempor pariatur velit veniam. Commodo labore id nulla cillum incididunt nostrud laboris deserunt dolor id nisi.
    3. Cillum ipsum labore in ut excepteur culpa ipsum.
    4. Nostrud quis mollit Lorem qui ullamco dolor in mollit fugiat laborum.

    Et consequat eiusmod culpa eiusmod fugiat pariatur aliquip voluptate laborum. Est incididunt proident amet irure magna occaecat ad reprehenderit. Eu ullamco cupidatat qui ut ea sunt in nulla ullamco aliquip

- est dolore ex quis.


1. Eu irure minim do reprehenderit sint et labore ut in tempor. Velit in mollit deserunt consequat. Minim quis officia esse elit ex enim duis laboris <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd> aliqua consectetur. Officia esse proident magna consequat cillum. Dolore consequat proident ex ad nostrud tempor esse ullamco incididunt. Irure elit amet enim enim anim culpa id sunt quis quis laboris.

2. Qui et tempor sit irure cillum. Deserunt non cillum nisi nisi nisi ad consectetur nostrud consectetur [external link 1 (www.bing.com)](https://www.bing.com/) fugiat aliquip. Officia fugiat incididunt sint cupidatat incididunt dolore culpa deserunt commodo. Aliquip adipisicing enim occaecat proident quis. Eiusmod est nulla do duis nostrud anim.

    - Lorem duis
    - et qui dolor ex
    - dolore
    - Qui velit <kbd>Ctrl</kbd> key elit quis est consectetur
    - ullamco ut
    - consectetur proident sint laboris
    - cupidatat amet
    - velit
    - Ex enim cupidatat do
    - laborum est deserunt
    - est deserunt.

3. Sit aute est occaecat fugiat. Eu ipsum sit qui est sunt ex velit qui dolor eu adipisicing nulla. Duis minim reprehenderit laboris duis aliquip fugiat proident reprehenderit veniam magna esse ipsum quis ex. Proident reprehenderit officia deserunt sint enim.


### Inline Codes in Multiple Lines

Occaecat ea Lorem ut `officia` ea ad `nostrud`. Ut deserunt irure in dolore `voluptate` ad `reprehenderit` et sit. Cupidatat `nostrud` tempor `aliqua` ad id ex `labore` in. Ut deserunt irure pariatur `tempor` ex. Ex `irure` sit proident `consectetur` ipsum `pariatur`.


### Quoted Block

#### What is GitHub

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

---



## Videos

<video controls>
    <source src="./illustrates/flower.webm" type="video/webm">
    Sorry, your browser doesn't support embedded videos.
</video>


<details open>
<summary>A Video Nested in a Details Block</summary>
<video controls>
    <source src="./illustrates/flower.webm" type="video/webm">
    Sorry, your browser doesn't support embedded videos.
</video>
</details>

---



## Code Snippets

-   Code Snippet Nested under a List Item

    ```js
    function getCircleArea(r) {
        return 3.14159265 * r * r;
    }

    getCircleArea(100);
    ```

-   ```js
    function getCircumference(r) {
        return 2 * 3.14159265 * r;
    }

    getCircumference(100);
    ```


Below is a code snippet nested under details block.

<details open>
<summary>Foldable Code Snippet</summary>

```js
console.log(NaN === NaN); // false
```

</details>


### A JavaScript Snippet

```javascript
// This is a comment.
import something from 'somethingjs'

var myModule = require('my-module');

const author = {
    name: 'wulechuan',
    age: 40,
}

var newsThatAreNotNewsAnyMore = [
    'SOFTIMAGE Co\. Released SOFTIMAGE\|3D Extreme',
    'Discreet Released 3D STUDIO MAX',
    'Alias|Wavefront Released Maya\|Unlimited',
    'SOFTIMAGE Co\. Released SOFTIMAGE\|XSI Advanced',
    'Cebas Released Cinema 4D',
    'SideFX Released Houdini',
    'Pixar Released RenderMan',
    'MentalImages Released MentalRay',
    'SolidAngle Released Arnold Render',
    'NextLimit Released MaxwellRender',
    'RandomControl Released Arion Render',
    'OTOY Released OctaneRender',
]


let anUndefinedValue = undefined; // A semi looks like this
let aNull = null;

var anInteger = (19 + 3 * (79 - 51) + 2013) % 2

anInteger++;

++anInteger;

anInteger--;

Math.max(anInteger, -90)

const cellPhoneNumberRegExp = /^1\d{2}([- ]?\d{4}){2}$/

let cellPhoneNumber = '13345678901 '
cellPhoneNumber = cellPhoneNumber.trim()

const cellPhoneNumberIsValid = cellPhoneNumberRegExp.test(cellPhoneNumber)
console.log('cellPhoneNumberIsValid', cellPhoneNumberIsValid) // true

var aString = `Meaningless ${cellPhoneNumber} ` + !!!true +
    ' ' + 15 + ' ' + !false + Math.random().toFixed(4)


const aBoolean = true || false && !true && !!false || !0 &&
    !!1 || 9 < 6 && 8 >= 8 || NaN === NaN && 10 > 13;


var a, b, c, d = 11, e = 12, f, g = anInteger <= 1024 + -1e+8;
f = 2e-5 / 16;

let isAnArray = false
if (Array.isArray([])) {
    isAnArray = true
}

const regExp = new RegExp('\\w+', 'i')

const regExp1 = /^\[[^\<](\(|\))\$\{[a-z\d_-]+[\w\.]{16,}a*b*\*\\,\]\^"--toc.min\.js$/gi;
const regExp2 = /(^|<)[\]A-Za-z-_][_a-z\d_-:\$]*[^+][+-](>|$)/g
const regExp3 = /[^a+]([)-+])/

const windowMethods = Object.keys(window).map(k => window[k]).filter(p => typeof p === 'function')
console.log(windowMethods)

if (false) {
    throw TypeError('Should not throw here!')
}
if (a == undefined) {
    console.log('double equal signs used, instead of triple ones')
} else if (a != undefined) {
    console.log('"!=" used, instead of "!=="')
}

$(function (e) {
    alert('DOMs are ready')
    console.log(window.innerHeight, window.self, global)
})

const anArrowFunction = (count) => {
    for (var i = 0; i<count; i++) {
        if (i === 3) {
            continue
        }

        if (i !== 6) {
            console.log('Not six')
        }

        debugger

        switch (i % 2) {
            case 0:
            default:
                console.log(i, 'It\'s an even number.')
                break
            case 1:
                console.log(i, 'It\'s an odd number.')
                break
        }

        if (i >= 10000) {
            break
        }
    }
}

window.tempString = '\nhello\n unnecessary escaped chars: \m \p \- \.'
delete window.tempString


window['temp-string-2'] = `
    multiple
    lines
    are
    occupied.
`

var num = 10;

num += 2;
num -= 2;
num *= 2;
num /= 2;
num %= 2;

var now = new Date()

const ul = Array.prototype.slice.apply(
    document.querySelectorAll('ul.news-list')
)[0]

newsThatAreNotNewsAnyMore.forEach(msg => {
    const li = document.createElement('li')
    li.innerText = msg

    ul.appendChild(li)
})

console.log(
    newsThatAreNotNewsAnyMore.length,
    newsThatAreNotNewsAnyMore.join('').length
)

function addTwoNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }

    return NaN
}

async function anAsyncFunction(something, ...anything) {
    await new Promise(resolve => setTimeout(() => resolve(), 123))
    return +prompt('now please input a number:')
}

export default function isAPromiseObject(input) {
    /*
        A multi-lined
        comment
        with indentations
        looks like this.
    */
    return !!input && typeof input.then === 'function' && typeof input.done === 'function'
}

module.exports = { content: 'nothing' };

exports.author = 'wulechun@live.com';
```


### An HTML Snippet


```html
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Wulechuan's example document</title>
    <!-- A single line comment. -->
    <style id="my-embedded-styles">
        div {
            width:  100px;
            height: 200px;
            border: 6px solid #888;
            border-radius: 0.5em;
            box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2);
        }

        #app {
            display: flex;
            position: relative;
        }

        .bg-view {
            filter: blur(16px);
            transform: scaleX(-1);
        }

        #cover {
            backdrop-filter: blur(30px);
        }

        .box-1 { background-image: url('./images/beauties/beauty-1.jpg'); }
        .box-2 { background-image: url('./images/beauties/beauty-2.jpg'); }
        .box-3 { background-image: url('./images/beauties/beauty-3.jpg'); }
        .box-4 { background-image: url('./images/beauties/beauty-4.jpg'); }
    </style>
</head>
<body>
    <article>
        <h1>Welcome</h1>

        <p class="greeting">Hi everyone! This is
            <a target="_blank" href="mailto:wulechuan@live.com">wulechuan</a>。
        </p>

        <p id="lyric"><span class="content">Twinkle, Twinkle, Little Star</span></p>

        <ul>
            <li><span>A<em>B</em>C</span></li>
            <li><span>D<em>E</em>F</span></li>
            <li><span>G<em>H</em>I</span></li>
        </ul>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            perferendis similique minus recusandae numquam voluptates sequi soluta
            reiciendis. Doloremque, dolorum ex! Eaque voluptatem beatae ipsam
            eligendi ab fugiat laudantium facilis?</p>
    </article>

    <!--
        A multi-lined comment
        looks like
        this.
    -->

    <div id="app">
        <button id="one-button">A Button</button><br>
        <img id="beauty" src="./images/beauties/beauty-1.jpg" alt="A beauty were here" tilte="A gorgeous lady">
    </div>

    <script id="js-example-1" type="text/javascript">
        var button = document.querySelector('#one-button');
        var beautyImage = document.getElementById('beauty');

        button.onclick = function () {
            beautyImage.src = './images/beauties/beauty-2.jpg';
            beautyImage.title = 'Another gorgeous lady';
        };
    </script>

    <script id="js-example-2" async>
        const girl = document.querySelector('img')
        girl.addEventListener('mouseover', function (event) {
            this.src = './images/beauties/beauty-3.jpg'
            this.title = 'An amazingly beautifly girl'
        })
    </script>
</body>
</html>
```



### A CSS Snippet


```css
html {
    font-size: 20px;
}

body {
    padding: 3rem 1rem 4rem 1rem;
}

html, body {
    min-height: 100%;
}

#app {
    display: flex;
    position: relative;
    width: 100%;
    font-family: 'Segoe UI', 'Microsoft Yahei UI', serif;
}

.back-to-top {
    position: fixed;
    display: block;
    background-image: url('./images/black-rocket.png');
    width: 1.5rem;
    height: 1.5rem;
    overflow: hidden;
}

article, .article, p, .copywriting {
    color: black;
}

a {
    color: green;
}

.optional-line-break {
    display: block;
}

@media screen and (max-width: 600px) {
    .optional-line-break {
        display: none;
    }
}

a:hover {
    text-decoration: underline !important;
}

a[href^="#"] {
    color: blue;
}

@media (max-width: 900px) {

    html {
        font-size: 16px;
    }

    body {
        font-size: 1rem;
    }
}

.markdown-article,
.markdown-article-toc,
.markdown-article-back-to-top {
    display: block;
}

.markdown-article-back-to-top {
    border: 1px solid #778899;
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.4);
}

@keyframes fade-in {
    0%   { opacity: 0; }
    100% { opacity: 1; }
}

.my-container::before {
    content: '';
    display: block;
    border-color: black;
    background-color: currentColor;
    text-indent: -100px;
}

/* chief navigation */

nav ul {
    display: flex;
    justify-content: space-around !important;
    flex-wrap: wrap;
    list-style: none;
    padding: 20px 10px;
}

nav li {
    display: block;
    padding: 0;
    margin: 10px 5px;
    width: 90px;
    transition: all 0.4s ease-out;
}

.disc {
    transform: rotate(3.14159265rad);
    transform: rotate(180deg);
    transform: rotate(0.5turn);
}

/* news list */

.news-list {
    font-size: 1.2rem;
    list-style: none;
}

.news-list li {
    margin: 0.15em auto;
    padding: 0.25em 1em;
    background-color: #eee;
}

.news-list li:nth-child(even) {
    background-color: #d3d3d3;
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
        font-size: .707em; // 想注释一下，但一时间觉得没啥好写的。
        color blue
    }

    .blue {
        color navy
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


### XML Snippet

From a keyboard mapping configuration file of SOFTIMAGE|XSI.


```xml
<?xml version="1.0" encoding="iso-8859-1"?>
<xsi_file type="Keymap" xsi_version="9.5.184.0" syntax_version="1.0">
   <keymap name="lechuan_si2011SAP_default">
      <keylist name="" guid="{00000000-0000-0000-0000-000000000000}">
         <key
            name="Help"
            key="VK_F1"></key>
         <key
            name="Save Scene"
            key="S"
            modifier="DSCMD_CTRL"></key>
      </keylist>
      <keylist name="AM Transition Tool" guid="{4E7133BE-503D-41A2-84F8-48CA38BFAAAC}">
         <key
            name="Switch to Bridge transition"
            key="B"></key>
         <key
            name="Switch to Cardinal transition"
            key="C"></key>
         <key
            name="Switch to Standard transition"
            key="T"></key>
      <keylist name="AM Transition Tool" guid="{4E7133BE-503D-41A2-84F8-48CA38BFAAAC}">
      </keylist>
      <keylist name="XSI" guid="{50830560-31B5-11D0-82E7-00A0243E268D}">
         <key
            name="Frame All"
            key="A"></key>
         <key
            name="Frame Selection"
            key="F"></key>
         <key
            name="Navigate Tool"
            key="S"></key>
         <key
            name="Raycast Polygon Select Tool"
            key="U"></key>
         <key
            name="Select Parent in Branch"
            key="VK_UP"
            modifier="DSCMD_CTRL|DSCMD_ALT"></key>
         <key
            name="Select Tree"
            key="T"
            modifier="DSCMD_ALT"></key>
         <key
            name="Subdivide"
            key="D"
            modifier="DSCMD_SHIFT"></key>
         <key
            name="Switch to Model Toolbar"
            key="1"></key>
         <key
            name="Switch to Animate Toolbar"
            key="2"></key>
         <key
            name="Switch to Render Toolbar"
            key="3"></key>
         <key
            name="Switch to ICE Toolbar"
            key="4"></key>
         <key
            name="Switch to Simulate Toolbar"
            key="4"
            modifier="DSCMD_CTRL"></key>
         <key
            name="Scaling Tool"
            key="X"></key>
         <key
            name="Translate Tool"
            key="V"></key>
         <key
            name="Rotation Tool"
            key="C"></key>
         <key
            name="Undo"
            key="Z"
            modifier="DSCMD_ALT|DSCMD_SHIFT"></key>
      </keylist>
   </keymap>
</xsi_file>
```


## Table

### A Table

| Key        | Value           |
| ---------- | --------------- |
| Name       | Wulechuan       |
| Gender     | Male            |
| Birth Year | 1979            |
| Hometown   | Nanchang, China |
| Loved      | `SOFTIMAGE\|XSI` |


### Another Table, Which Contains Code Snippets

<table>
    <thead>
        <tr>
            <th style="width: 120px;">A</th>
            <th>B</th>
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
