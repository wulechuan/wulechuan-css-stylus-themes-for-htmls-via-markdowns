(function () {
    const styleElementInnerHTML = `    ${[
        '.markdown-article, button, input, option, select, textarea, nav.markdown-article-toc {',
        '    font-family: "微软雅黑"',
        '}',

        'kbd, pre > code {',
        '    font-family: "Cascadia Code", "PT Mono", consolas, 微软雅黑',
        '}',
    ].join('\n    ')}\n`
    console.log(styleElementInnerHTML)

    const styleElement = document.createElement('style')
    styleElement.innerHTML = styleElementInnerHTML

    document.body.appendChild(styleElement)

    setTimeout(() => {
        alert('为方便截图，字体（font-family）已经被临时偷换。请放心，这仅仅影响到须截图的范文。')
    }, 515)
})()
