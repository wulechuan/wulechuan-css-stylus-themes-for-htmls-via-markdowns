#!/bin/sh

# -------------------------------------------------------
#           特定版本之【产品依赖包】
# -------------------------------------------------------

echo

echo  -e  "\e[0;31m===== npm i    \e[97;41m特定版本\e[0;31m的【产品依赖包】 ============================\e[0m"

echo

# globby 不能更新至第 12 或更晚的版本。因为自第 12 版始， globby 仅支持 ES Module 语法。

npm  i \
    'globby@11'





# -------------------------------------------------------
#          最晚版本之【产品依赖包】
# - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# 顺便提醒，虽然一般而言 latest 版本应恰为最高版本，但并不确保。
# -------------------------------------------------------

echo
echo
echo
echo
echo

echo  -e  "\e[0;31m===== npm i    特定版本的【产品依赖包】 ============================\e[0m"

echo

echo '暂无。'





# -------------------------------------------------------
#           特定版本之【研发依赖包】
# -------------------------------------------------------

echo
echo
echo
echo
echo

echo  -e  "\e[32m===== npm i    \e[90;102m特定版本\e[0;32m的【研发依赖包】 ============================\e[0m"

echo

# chalk 不能更新至第 5 或更晚的版本。因为自第 5 版始， chalk 仅支持 ES Module 语法。

npm  i  -D \
    'chalk@4'





# -------------------------------------------------------
#          最晚版本之【研发依赖包】
# - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# 顺便提醒，虽然一般而言 latest 版本应恰为最高版本，但并不确保。
# -------------------------------------------------------

echo
echo
echo
echo
echo

echo  -e  "\e[32m===== npm i    特定版本的【研发依赖包】 ============================\e[0m"

echo

npm  i  -D \
    '@wulechuan/cli-scripts--git-push@latest' \
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

echo
echo
echo
echo
echo
