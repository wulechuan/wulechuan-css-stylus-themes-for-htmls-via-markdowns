module.exports = [
    {
        用于匹配层叠样式表文件名称的正则表达式集: [
            /.*--with-toc(\.min)?\.css$/,
        ],

        凡匹配之层叠样式表均应该关联的Javascript文件集: [
            'table-of-contents-and-back-to-top-anchor-behaviors.min.js',
        ],
    },
]
