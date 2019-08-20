# 吴乐川的文章默认样式的示例

<p class="document-author">作者：吴乐川</p>

----

## 自然语言范文

### 《千字文》[节选]

天地玄黄，宇宙洪荒。
日月盈昃，辰宿列张。
寒来暑往，秋收冬藏。
闰余成岁，律吕调阳。
云腾致雨，露结为霜。
金生丽水，玉出昆冈。
剑号巨阙，珠称夜光。
果珍李柰，菜重芥姜。



### 2019年6月18日 日记 [节选]

出了家门，我二人在单元门的雨檐下站着，我左手挎着端儿的书包，双手用力把伞撑开。开伞时左臂自然会有些吃力，我于是小声嘟囔了一句：“这包这么重啊！现在的孩子（上）幼儿园就背这么多书！”

有道是言者无意，听者有心。我这随口一句话，端儿听了立刻很认真地说：“爸爸，（书包）给我背吧。我自己来背。”我推辞说：“没事儿，爸爸可以拿。”端儿又道：“爸爸，你一只手（拿），我两只手（指双肩）！我自己能行！”

“爸爸，你一只手，我两只手。”看似多么简单的一句话，我这当大人的却一下子感动了，只觉得一股暖流涌入心间。我也不再争了，顺他的意，帮着他把书包背好。



### 唐诗

<center>
<h4>《马诗二十三首·其五》</h4>

<em>【唐】 李贺</em>

大漠沙如雪，\
燕山月似钩。\
何当金络脑，\
快走踏清秋。
</center>

### 杂乱内容，仅用于视觉样式之呈示

一段文字中，会有**着重的文字**，也有*斜体的文字*。

这里是 GitHub，我本人有意将其译为【[吉特中心](https://github.com)】。当然，这显然并非官方译法。如果一个链接指向本文，则该链接看起来与其余链接稍有不同，如：本文《[程序代码片段示例集](#程序代码片段示例集)》部分。

再来看看行文中的【代码词汇】或【术语】：例如`孙行者`和`计算机`。

计算机键盘快捷键，其视觉样式如是：<kbd>Ctrl</kbd>+<kbd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</kbd>；又例：<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>s</kbd>组合键广泛用于各自现代计算机软件，代表（将工作内容或文件）`另存为`（一文件）之功能。

我们还可以引用一小段文字。例如，子曰：

> 学而时习之 不亦说乎 有朋自远方来 不亦乐乎 人不知而不愠 不亦君子乎



## 插图

### 正常的插图

![端儿美丽](./illustrates/duan-er-pretty.jpg "端儿美丽")


### 加载失败的插图

![大美女](./images/beauty.jpg)


---

## 程序代码片段示例集

### Javascript 代码片段

```javascript
module.exports = function isAPromiseObject(input) {
    return !!input && typeof input.then === 'function' && typeof input.done === 'function';
};
```

### HTML 代码片段

```html
<!DOCTYPE html>
<html lang="zh-Hans-CN">
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

### Stylus(CSS) 代码片段

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



## 表格

### MarkDown 表格

| 项目      | 内容             |
| --------- | --------------- |
| 姓名      | 吴乐川           |
| 性别      | 男              |
| 出生年份   | 1979            |
| 家乡      | 南昌市           |
| 所爱      | `SOFTIMAGE|XSI` |



### HTML 表格内嵌几种代码片段

<table>
    <thead>
        <tr>
            <th style="width: 120px;">甲</td>
            <th>乙</td>
        </tr>
    </thead>
<tbody>
<tr>
<td>
    Javascript
</td>
<td>

```javascript
const aSnippetInsideATable = '你好';
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
    普通文本
</td>
<td>
<h4>《荷塘月色》[节选]</h4>

<p>曲曲折折的荷塘上面，弥望的是田田的叶子。叶子出水很高，像亭亭的舞女的裙。层层的叶子中间，零星地点缀着些白花，有袅娜地开着的，有羞涩地打着朵儿的；正如一粒粒的明珠，又如碧天里的星星，又如刚出浴的美人。微风过处，送来缕缕清香，仿佛远处高楼上渺茫的歌声似的。这时候叶子与花也有一丝的颤动，像闪电般，霎时传过荷塘的那边去了。叶子本是肩并肩密密地挨着，这便宛然有了一道凝碧的波痕。叶子底下是脉脉的流水，遮住了，不能见一些颜色；而叶子却更见风致了。</p>
</td>
</tr>
</tbody>
</table>

