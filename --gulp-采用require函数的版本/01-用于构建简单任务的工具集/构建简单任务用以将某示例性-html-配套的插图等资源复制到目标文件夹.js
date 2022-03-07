const 路径工具 = require('path')

const gulp = require('gulp')

module.exports = function createTaskBodyForCopyingExampleAssetsTo(assetsOutputFolder) {
    return function 复制示例性HTML文件配套的插图等资源() {
        return gulp.src('./文档/文章排版与配色效果示例集/原始的-markdown-格式的文章/illustrates/**/*')
            .pipe(gulp.dest(路径工具.posix.join(assetsOutputFolder, 'illustrates')))
    }
}
