/**
 * 本项目之全局配置项集，
 * 即用于指导本项目构建和发布文件，
 * 又用于辅助本项目之 Javascript 接口对外提供上述已发布之文件。
 */

const 路径工具 = require('path')

const { join: 遵循POSIX标准拼接路径 } = 路径工具.posix

const 发布之内容之根文件夹之相对路径 = './源代码/发布的源代码/文章排版与配色方案集'

const 存放发布的层叠样式表之文件夹之名称 = '层叠样式表'
const 存放发布的配套Javascript之文件夹之名称 = 'javascript'

const 发布的层叠样式表之根文件夹之相对路径 = 遵循POSIX标准拼接路径(
    发布之内容之根文件夹之相对路径,
    存放发布的层叠样式表之文件夹之名称
)

const 发布的配套Javascript之根文件夹之相对路径 = 遵循POSIX标准拼接路径(
    发布之内容之根文件夹之相对路径,
    存放发布的配套Javascript之文件夹之名称
)

module.exports = {
    存放发布的层叠样式表之文件夹之名称,
    存放发布的配套Javascript之文件夹之名称,

    发布之内容之根文件夹之相对路径,
    发布的层叠样式表之根文件夹之相对路径,
    发布的配套Javascript之根文件夹之相对路径,

    // 以下为陈旧的采用外国字命名之诸接口。

    cssDistFolderName: 存放发布的层叠样式表之文件夹之名称,
    jsDistFolderName: 存放发布的配套Javascript之文件夹之名称,

    distFolderRelativePath: 发布之内容之根文件夹之相对路径,
    cssDistFolderRelativePath: 发布的层叠样式表之根文件夹之相对路径,
    jsDistFolderRelativePath: 发布的配套Javascript之根文件夹之相对路径,
}
