#

# -------------------------------------------------------
#           特定版本之【产品依赖包】
# -------------------------------------------------------

Write-Host

Write-Host  -NoNewline  -F 'DarkRed'                '===== npm i    '
Write-Host  -NoNewline  -F 'White'    -B 'DarkRed'  '特定版本'
Write-Host              -F 'DarkRed'                '的【产品依赖包】 ============================'

Write-Host

# globby 不能更新至第 12 或更晚的版本。因为自第 12 版始， globby 仅支持 ES Module 语法。

npm  i `
    'globby@11'





# -------------------------------------------------------
#          最晚版本之【产品依赖包】
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
Write-Host              -F 'DarkRed'                '的【产品依赖包】 ============================'

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
Write-Host              -F 'DarkGreen'              '的【研发依赖包】 ============================'

Write-Host

# chalk 不能更新至第 5 或更晚的版本。因为自第 5 版始， chalk 仅支持 ES Module 语法。

npm  i  -D `
    'chalk@4'





# -------------------------------------------------------
#          最晚版本之【研发依赖包】
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
Write-Host              -F 'DarkGreen'              '的【研发依赖包】 ============================'

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
    'postcss@latest'

Write-Host
Write-Host
Write-Host
Write-Host
Write-Host
