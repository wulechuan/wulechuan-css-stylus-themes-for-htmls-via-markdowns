// import chalk from 'chalk'

import {
    src  as gulpReadGlobs,
    dest as gulpWriteIn,
} from 'gulp'

export default function copyExampleAssetsToTestOutputFolder() {
    return gulpReadGlobs('./docs/examples/rendered/html/illustrates/**/*')
        .pipe(gulpWriteIn('./test/output/illustrates'))
}
