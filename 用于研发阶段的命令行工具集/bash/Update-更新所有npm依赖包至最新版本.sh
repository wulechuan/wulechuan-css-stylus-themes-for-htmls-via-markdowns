#!/bin/sh

source  "`pwd`/用于研发阶段的命令行工具集/bash/Write-Json.sh"





# -------------------------------------------------------
#           删除 node_modules 文件夹
# -------------------------------------------------------

echo

echo  -e "\e[96m═════ 删除 node_modules 文件夹 ═════════════════════════════════════\e[0;0m"

echo

if [ "$1" == '--安装之前先删除旧有的_node_modules_文件夹' ]; then
    if [ -d './node_modules' ]; then
        rm -rf './node_modules'

        if [ $? -gt 0 ]; then
            exit $?
        fi

        echo '已删除。'
    else
        echo 'node_modules 文件夹并不存在。不必执行。'
    fi
else
    echo '已略过。 node_modules 文件夹并未删除。'
fi





# -------------------------------------------------------
#           删除 package-lock.json 文件
# -------------------------------------------------------

echo
echo
echo
echo
echo

echo  -e "\e[32m═════ 删除 package-lock.json 文件 ══════════════════════════════════\e[0;0m"

echo

if [ -f './package-lock.json' ]; then
    rm -f './package-lock.json'

    if [ $? -gt 0 ]; then
        exit $?
    fi

    echo '已删除。'
else
    echo 'package-lock.json 文件并不存在。不必执行。'
fi





# -------------------------------------------------------
#           特定版本之【产品依赖包】
# -------------------------------------------------------

echo
echo
echo
echo
echo

echo  -e  "\e[0;31m═════ npm i    \e[97;41m特定版本\e[0;31m之【产品依赖包】 ════════════════════════════\e[0;0m"

echo

# globby 不能更新至第 12 或更晚的版本。因为自第 12 版始， globby 仅支持 ES Module 语法。

npm  i \
    'globby@11'





# -------------------------------------------------------
#          最末版本之【产品依赖包】
# - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# 顺便提醒，虽然一般而言 latest 版本应恰为最高版本，但并不确保。
# -------------------------------------------------------

echo
echo
echo
echo
echo

echo  -e  "\e[0;31m═════ npm i    最末版本之【产品依赖包】 ════════════════════════════\e[0;0m"

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

echo  -e  "\e[32m═════ npm i -D \e[90;102m特定版本\e[0;32m之【研发依赖包】 ════════════════════════════\e[0;0m"

echo

# chalk 不能更新至第 5 或更晚的版本。因为自第 5 版始， chalk 仅支持 ES Module 语法。

npm  i  -D \
    'chalk@4'





# -------------------------------------------------------
#          最末版本之【研发依赖包】
# - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# 顺便提醒，虽然一般而言 latest 版本应恰为最高版本，但并不确保。
# -------------------------------------------------------

echo
echo
echo
echo
echo

echo  -e  "\e[32m═════ npm i -D 最末版本之【研发依赖包】 ════════════════════════════\e[0;0m"

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
    'postcss@latest' \
    'stylus@latest'





# -------------------------------------------------------
#           更新与研发相关的数据库
# - - - - - - - - - - - - - - - - - - - - - - - - - - - -
#     例如： Browserslist:caniuse-lite
# -------------------------------------------------------

echo
echo
echo
echo
echo

echo  -e  "\e[33m═════ 更新与研发相关的数据库 ═══════════════════════════════════════\e[0;0m"

echo
echo

echo  '暂无。'
# npx  browserslist@latest  --update-db





# -------------------------------------------------------
#           其他交代
# -------------------------------------------------------

echo
echo
echo
echo
echo

echo  -e  "\e[94m═════ 其他交代 ═════════════════════════════════════════════════════\e[0;0m"

echo

echo -e "\e[33m以下是在 package.json 中的特殊记载及其解释\e[0;0m"
echo
echo '{'
Write-JsonKey          -Indent 1 'overrides' -ValueIsObject
Write-JsonKey          -Indent 2 'stylus' -ValueIsObject
echo
Write-JsonCommentLine  -Indent 3 '// 实验证明，截止 2022-05-15 ，'
Write-JsonCommentLine  -Indent 3 '// Stylus 依赖的 glob 不能采用最晚近的 v7.2.2 版。'
Write-JsonCommentLine  -Indent 3 '// glob 不能采用 v7.2.1 版不存在。'
Write-JsonCommentLine  -Indent 3 '// 故最高仅能采用 v7.2.0 版。'
Write-JsonKey          -Indent 3 'glob'
Write-JsonValue_String -IsValueOfLastKey '7.2.0'
Write-JsonObjectEnd    -Indent 2
Write-JsonObjectEnd    -Indent 1
echo '}'





# -------------------------------------------------------
#           结束
# -------------------------------------------------------

echo
echo
echo
echo
echo
