/* eslint no-unused-vars: [ 2, { varsIgnorePattern: '.*文件之内容全文$' } ] */
const 粉笔 = require('chalk')

const { // 全 6 个接口项如下：
    所有已发布之层叠样式表文件之简易描述项之集,
    所有已发布之Javascript文件之简易描述项之集,
    以文件名称为索引之所有文件之字典,

    获取某一已发布之文件之完整内容字符串,
    获取本项目官方选定之所谓默认层叠样式表之完整内容字符串,
    获取本项目官方选定之所谓默认Javascript之完整内容字符串,
} = require('..') // 将本项目视为一个 nodejs 模块并加载之。

const 纯分隔线 = '='.repeat(79)
const 上方留有空白行的分隔线 = `\n${纯分隔线}`







const 所谓默认层叠样式表文件之内容全文 = 获取本项目官方选定之所谓默认层叠样式表之完整内容字符串()

const 这也是默认层叠样式表文件之内容全文 = 获取某一已发布之文件之完整内容字符串(
    'wulechuan-styles-for-html-via-markdown.default--no-toc.min.css'
)

const 这是针对Typora软件环境的层叠样式表文件之内容全文 = 获取某一已发布之文件之完整内容字符串(
    'wulechuan-styles-for-html-via-markdown--typora.default.css'
)

const 这是第7个层叠样式表文件之内容全文 = 获取某一已发布之文件之完整内容字符串(
    所有已发布之层叠样式表文件之简易描述项之集[6]
)





// 以下演示了三种不同的方法，其任一均可获得默认的并且也是目前唯一的 JavaScript 文件之内容全文。
const 这是所谓默认同时也是目前唯一的Javascript文件之内容全文 = 获取本项目官方选定之所谓默认Javascript之完整内容字符串()

const 这也是目前唯一的Javascript文件之内容全文 = 获取某一已发布之文件之完整内容字符串(
    'table-of-contents-and-back-to-top-anchor-behaviors.min.js'
)

const 这还是目前唯一的Javascript文件之内容全文 = 获取某一已发布之文件之完整内容字符串(
    所有已发布之Javascript文件之简易描述项之集[0]
)





console.log(上方留有空白行的分隔线)


console.log(粉笔.rgb(234, 79, 219)(所谓默认层叠样式表文件之内容全文.slice(0, 512)))
console.log('-'.repeat(51))
console.log(`${
    粉笔.blue('文件全文总计')
} ${
    粉笔.green(所谓默认层叠样式表文件之内容全文.length)
} ${
    粉笔.blue('字符。')
}${
    所谓默认层叠样式表文件之内容全文.length > 512 ? ' 仅截取前 512 字符展示于上方。' : ''
}`)



console.log(上方留有空白行的分隔线)



console.log(粉笔.rgb(192, 150, 87)(这是所谓默认同时也是目前唯一的Javascript文件之内容全文.slice(0, 512)))
console.log('-'.repeat(51))
console.log(`${
    粉笔.blue('文件全文总计')
} ${
    粉笔.green(这是所谓默认同时也是目前唯一的Javascript文件之内容全文.length)
} ${
    粉笔.blue('字符。')
}${
    这是所谓默认同时也是目前唯一的Javascript文件之内容全文.length > 512 ? ' 仅截取前 512 字符展示于上方。' : ''
}`)



console.log(上方留有空白行的分隔线)



const 本项目发布的所有层叠样式表和Javascript文件之名称列表 = Object.keys(以文件名称为索引之所有文件之字典)
console.log(
    '\n@wulechuan/css-stylus-markdown-themes 项目发布的所有层叠样式表和Javascript文件之名称列表：',
    本项目发布的所有层叠样式表和Javascript文件之名称列表
)
console.log('-'.repeat(51))
console.log(`${
    粉笔.blue('本项目合计发布了')
} ${
    粉笔.red(本项目发布的所有层叠样式表和Javascript文件之名称列表.length)
} ${
    粉笔.blue('个文件。')
}\n\n\n`)
