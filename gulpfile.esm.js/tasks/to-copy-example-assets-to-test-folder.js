import path from 'path'

import {
    src  as gulpReadGlobs,
    dest as gulpWriteIn,
} from 'gulp'

const joinPathPOSIX = path.posix.join

export default function createTaskBodyForCopyingExampleAssetsTo(assetsOutputFolder) {
    return function toCopyExampleAssets() {
        return gulpReadGlobs('./docs/examples/source-markdown-files/illustrates/**/*')
            .pipe(gulpWriteIn(joinPathPOSIX(assetsOutputFolder, 'illustrates')))
    }
}
