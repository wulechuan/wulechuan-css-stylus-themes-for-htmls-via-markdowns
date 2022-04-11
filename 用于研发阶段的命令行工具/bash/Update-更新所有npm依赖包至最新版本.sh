#!/bin/sh

# ------------------------------------------------------
# ---------- 【产品依赖包】 ------------------------------
# ------------------------------------------------------

# 以下均为须采用特定版本的【产品依赖包】。
npm  i 'globby@11' # 不能更新至第 12 过更晚的版本。因为自第 12 版始， globby 仅支持 ES Module 语法。



# 以下均为可采用 latest 版本的【产品依赖包】。顺便提醒，虽然一般而言 latest 版本应恰为最高版本，但并不确保。
# 暂无。





# ------------------------------------------------------
# ---------- 【研发依赖包】 ------------------------------
# ------------------------------------------------------

# 以下均为须采用特定版本的【研发依赖包】。
npm  i  -D \
    'chalk@4' # 不能更新至第 5 过更晚的版本。因为自第 5 版始， chalk 仅支持 ES Module 语法。



# 以下均为可采用 latest 版本的【研发依赖包】。顺便提醒，虽然一般而言 latest 版本应恰为最高版本，但并不确保。
npm  i  -D \
    '@wulechuan/generate-html-via-markdown@latest' \
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
