#

param(
    [Alias('Delete', 'Remove', '先删')]
    [Switch] $安装之前先删除旧有的_node_modules_文件夹
)





# -------------------------------------------------------
#           删除 node_modules 文件夹
# -------------------------------------------------------

Write-Host

Write-Host  -NoNewline  -F 'Cyan' '===== 删除 '
Write-Host  -NoNewline  -F 'Cyan' 'node_modules'
Write-Host              -F 'Cyan' ' 文件夹 ====================================='

Write-Host

if ($安装之前先删除旧有的_node_modules_文件夹) {
    if (Test-Path '.\node_modules') {
        Remove-Item -Recurse -Force -Path .\node_modules

        if (-not $?) {
            Exit $?
        }

        Write-Host '已删除。'
    } else {
        Write-Host 'node_modules 文件夹并不存在。不必执行。'
    }
} else {
    Write-Host '已略过。 node_modules 文件夹并未删除。'
}





# -------------------------------------------------------
#           删除 package-lock.json 文件
# -------------------------------------------------------

Write-Host
Write-Host
Write-Host
Write-Host
Write-Host

Write-Host  -NoNewline  -F 'Green' '===== 删除 '
Write-Host  -NoNewline  -F 'Green' 'package-lock.json'
Write-Host              -F 'Green' ' 文件 =================================='

Write-Host

if (Test-Path '.\package-lock.json') {
    Remove-Item -Force -Path .\package-lock.json

    if (-not $?) {
        Exit $?
    }

    Write-Host '已删除。'
} else {
    Write-Host 'package-lock.json 文件并不存在。不必执行。'
}





# -------------------------------------------------------
#           特定版本之【产品依赖包】
# -------------------------------------------------------

Write-Host
Write-Host
Write-Host
Write-Host
Write-Host

Write-Host  -NoNewline  -F 'DarkRed'                '===== npm i    '
Write-Host  -NoNewline  -F 'White'    -B 'DarkRed'  '特定版本'
Write-Host              -F 'DarkRed'                '之【产品依赖包】 ============================'

Write-Host

# globby 不能更新至第 12 或更晚的版本。因为自第 12 版始， globby 仅支持 ES Module 语法。

npm  i `
    'globby@11'





# -------------------------------------------------------
#          最末版本之【产品依赖包】
# - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# 顺便提醒，虽然一般而言 latest 版本应恰为最高版本，但并不确保。
# -------------------------------------------------------

Write-Host
Write-Host
Write-Host
Write-Host
Write-Host

Write-Host  -NoNewline  -F 'DarkRed'                '===== npm i    '
Write-Host  -NoNewline  -F 'DarkRed'                '最末版本'
Write-Host              -F 'DarkRed'                '之【产品依赖包】 ============================'

Write-Host

Write-Host '暂无。'





# -------------------------------------------------------
#           特定版本之【研发依赖包】
# -------------------------------------------------------

Write-Host
Write-Host
Write-Host
Write-Host
Write-Host

Write-Host  -NoNewline  -F 'DarkGreen'              '===== npm i -D '
Write-Host  -NoNewline  -F 'Black'      -B 'Green'  '特定版本'
Write-Host              -F 'DarkGreen'              '之【研发依赖包】 ============================'

Write-Host

# chalk 不能更新至第 5 或更晚的版本。因为自第 5 版始， chalk 仅支持 ES Module 语法。

npm  i  -D `
    'chalk@4'





# -------------------------------------------------------
#          最末版本之【研发依赖包】
# - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# 顺便提醒，虽然一般而言 latest 版本应恰为最高版本，但并不确保。
# -------------------------------------------------------

Write-Host
Write-Host
Write-Host
Write-Host
Write-Host

Write-Host  -NoNewline  -F 'DarkGreen'              '===== npm i -D '
Write-Host  -NoNewline  -F 'DarkGreen'              '最末版本'
Write-Host              -F 'DarkGreen'              '之【研发依赖包】 ============================'

Write-Host

npm  i  -D `
    '@wulechuan/cli-scripts--git-push@latest' `
    '@wulechuan/generate-html-via-markdown@latest' `
    '@wulechuan/gulp-classical-task-cycle@latest' `
    'cssnano@latest' `
    'del@latest' `
    'eslint@latest' `
    'esm@latest' `
    'fs-extra@latest' `
    'gulp@latest' `
    'gulp-concat@latest' `
    'gulp-pipe@latest' `
    'gulp-postcss@latest' `
    'gulp-rename@latest' `
    'gulp-stylus@latest' `
    'gulp-terser@latest' `
    'postcss@latest' `
    'stylus@latest'





# -------------------------------------------------------
#           更新与研发相关的数据库
# - - - - - - - - - - - - - - - - - - - - - - - - - - - -
#     例如： Browserslist:caniuse-lite
# -------------------------------------------------------

Write-Host
Write-Host
Write-Host
Write-Host
Write-Host

Write-Host  -F 'DarkYellow'  '===== 更新与研发相关的数据库 ======================================='

Write-Host
Write-Host

Write-Host  '暂无。'
# npx  browserslist@latest  --update-db





# -------------------------------------------------------
#           其他交代
# -------------------------------------------------------

Write-Host
Write-Host
Write-Host
Write-Host
Write-Host

Write-Host  -F 'Blue'        '===== 其他交代 ====================================================='

Write-Host

Write-Host  '暂无。'


    
    
    
# -------------------------------------------------------
#           结束
# -------------------------------------------------------

Write-Host
Write-Host
Write-Host
Write-Host
Write-Host
