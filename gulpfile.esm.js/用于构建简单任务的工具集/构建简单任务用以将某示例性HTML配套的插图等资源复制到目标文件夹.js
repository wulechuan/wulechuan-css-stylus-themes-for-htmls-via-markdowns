import 路径工具 from 'path'

import {
    src  as gulpReadGlobs,
    dest as gulpWriteIn,
} from 'gulp'

const { join: 遵循POSIX标准拼接路径 } = 路径工具.posix

export default function createTaskBodyForCopyingExampleAssetsTo(assetsOutputFolder) {
    return function 复制示例性HTML文件配套的插图等资源() {
        return gulpReadGlobs('./文档/文章排版与配色效果示例集/原始的-markdown-格式的文章/illustrates/**/*')
            .pipe(gulpWriteIn(遵循POSIX标准拼接路径(assetsOutputFolder, 'illustrates')))
    }
}
