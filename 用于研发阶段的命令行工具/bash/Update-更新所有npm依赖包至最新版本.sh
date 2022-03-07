#!/bin/sh

npm  i 'globby@11' # 不能更新至第 12 过更晚的版本。因为自第 12 版始， globby 仅支持 ES Module 语法。

npm  i  -D \
    'chalk@4' # 不能更新至第 5 过更晚的版本。因为自第 5 版始， chalk 仅支持 ES Module 语法。

npm  i  -D \
    '@wulechuan/generate-html-via-markdown@latest'

npm  i  -D \
    '@wulechuan/gulp-classical-task-cycle@latest' \
    'cssnano@latest' \
    'del@latest' \
    'eslint@latest' \
    'esm@latest' \
    'fs-extra@latest' \
    'gulp@latest' \
    'gulp-concat@latest' \
    'gulp-pipe@latest' \
    'gulp-postcss@latest' \
    'gulp-rename@latest' \
    'gulp-stylus@latest' \
    'gulp-terser@latest' \
    'postcss@latest'
