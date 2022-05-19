#

# 绝大多数情形下，
# 使用者仅需关注本文件的 PROCESS 一节，
# 而完全不必触碰 BEGIN 、 END 两节。
#
# 顺便提醒，即便故意将 PROCESS 一节写在 BEGIN 之前，或写在 END 之后，
# PowerShell 语言的原生机制也会
# 强制三者依照先 BEGIN ，而后 PROCESS ，最后 END 的顺序执行。
# 为便于修订本文件，遂故意令 PROCESS 一节在最顶部。





PROCESS {
    Add-吴乐川添加单个集得源  -集得源在本机采用的名称 '吴乐川：码云' `
        -特征颜色 'DarkRed'      -集得源之完整地址 'git@gitee.com:nanchang-wulechuan/wulechuan-css-stylus-themes-for-htmls-via-markdowns.git'

    Add-吴乐川添加单个集得源  -集得源在本机采用的名称 '吴乐川：阿里云' `
        -特征颜色 'Blue'         -集得源之完整地址 'git@code.aliyun.com:wulechuan/wulechuan-themes-for-htmls-via-markdowns.git'

    Add-吴乐川添加单个集得源  -集得源在本机采用的名称 '吴乐川：GitHub' `
        -特征颜色 'Yellow'       -集得源之完整地址 'git@github.com:wulechuan/wulechuan-css-stylus-themes-for-htmls-via-markdowns.git'
}





BEGIN {
    Write-Host "当下工作路径：`n    '$PWD'"

    if ("$PWD" -match "\\用于研发阶段的命令行工具集\\PowerShell`$") {
        ${local:执行本命令前的工作路径} = "$PWD"
        Set-Location '..\..\'
        Write-Host "当下工作路径临时变更为：`n    '$PWD'"
    }

    Write-Host
    Write-Host
    Write-Host



    ${local:吴乐川的模块的路径} = '.\node_modules\@wulechuan\cli-scripts--git-push\源代码\发布的源代码\PowerShell'

    Import-Module  "${local:吴乐川的模块的路径}\吴乐川-文本处理工具.psm1"
    Import-Module  "${local:吴乐川的模块的路径}\吴乐川-文本显示工具.psm1"
    Import-Module  "${local:吴乐川的模块的路径}\吴乐川-集得源管理工具集.psm1"
}





END {
    if (${local:执行本命令前的工作路径} -and ("${local:执行本命令前的工作路径}" -ne "$PWD")) {
        Write-Host "当下工作路径已复原。"
        Set-Location  "${local:执行本命令前的工作路径}"
    }
}
