<link rel="stylesheet" href="../../../源代码/发布的源代码/文章排版与配色方案集/层叠样式表/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">

# Wulechuan&apos;s HTML Article Themes

## Navigation

- Go back to [ReadMe.en-US.md](./ReadMe.md)


## Multilingual Editions of this Article

- [本文之汉语版](../汉语/本工具之简介.md)


## Introduction

This is a collection of themes that each
can be applied to shade(decorate) any `MarkDown` generated `HTML` contents.

A picture paints a thousand words. If you know what this tool provides, and are eager to see some visual examples, check [Application Examples](./application-examples.md).


### Why does this Tool Exist

Simply for easier designing and generating more CSS files.


### Why do we need a CSS file like any one of them generated by this tool

Well, we developers and engineers work with MarkDown files all the time. And many of us, I guess like me, would like to customize the look and feel of those MarkDown files, more precisely, to customize the HTML contents rendered(generated) according to those MarkDown files.

**To modify the look and feel of HTML, we use CSS files.** Thats why.


### Well CSS Files. But Why Multiple

Then why do we need so many CSS files?

First, we might need different themes for different ambient lighting conditions, or even for different feelings.

Second, well, we should know that a thing sounds easily to deal with, like reading a MarkDown file, is not that simple in fact. We have different tools and environments.

- Some people prefer tools like [Typora](https://typora.io/).
- Others are used to use code editors like [Visual Studio Code](https://code.visualstudio.com).
- And there are often some other HTML files that are directly generated by some command line tools, in batch.

Different tools produce **different** HTML contents out of the **same** source MarkDown file.

**In short, different lighting conditions, different tools or software environments need different CSS file.**


### Scenarios

A combination of one theming and some optional features is called a **scenario**.

For example, the default scenraio is a combination of a light-colored theme and a table of contents(TOC) component. So the output file set of the said scenario includes a CSS file, containing both **the main article theming CSS rules**, as well as some **extra CSS rules** specifically for the TOC component, and **a Javascript file**, which is also for the TOC.

**In words, different scenario needs different CSS file.** And some scenarios (e.g. the default one) also need some Javascript file(s).

