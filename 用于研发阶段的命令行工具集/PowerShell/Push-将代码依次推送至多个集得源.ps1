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
    Try {

        Push-吴乐川集得上推至单个源  '吴乐川：码云'  -集得源之显示名称文本采用的颜色 'Red'
        Push-吴乐川集得上推至单个源  '吴乐川：阿里云'  -集得源之显示名称文本采用的颜色 'Blue'
        Push-吴乐川集得上推至单个源  '吴乐川：GitHub'  -集得源之显示名称文本采用的颜色 'Yellow'
    
    } catch {

        ${private:RunTimeException} = $_

    }
}









BEGIN {
    # 该名为 BEGIN 之代码块故意安排在 PROCESS 代码块之后。但实际上 BEGIN 会在 PROCESS 之前运行。

    ${private:RunTimeException} = $null
    [string]${private:执行本命令前的工作路径} = "$PWD"

    Write-Host "`n【当下工作路径】：`n    '$PWD'"

    if ("$PWD" -match "\\用于研发阶段的命令行工具集\\PowerShell`$") {
        ${private:执行本命令前的工作路径} = "$PWD"
        Set-Location '..\..\' # 确保进程的当前路径为接受本工具集服务的 npm 包的根文件夹。
        Write-Host "`n【当下工作路径】临时变更为：`n    '$PWD'"
    }

    Write-Host
    Write-Host
    Write-Host



    [string]${script:吴乐川的模块的路径} = '.\node_modules\@wulechuan\cli-scripts--git-push\源代码\发布的源代码\PowerShell'

    Import-Module  "${script:吴乐川的模块的路径}\吴乐川-数据处理-文本.psm1"
    Import-Module  "${script:吴乐川的模块的路径}\吴乐川-内容呈现.psm1"
    Import-Module  "${script:吴乐川的模块的路径}\吴乐川-集得源管理工具集.psm1"



    Write-吴乐川显示_集得上推至一个或多个源_开始之提示语
}









END {
    Write-吴乐川显示_集得上推至一个或多个源_结束之提示语



    if (${private:执行本命令前的工作路径} -and ("${private:执行本命令前的工作路径}" -ne "$PWD")) {
        Set-Location  "${private:执行本命令前的工作路径}"
        Write-Host "`n【当下工作路径】已复原。"
    }



    if (${private:RunTimeException}) {
        Write-Host
        Write-Host -F 'Red' '执行过程曾出错。'
        Write-Host
        throw ${private:RunTimeException}
    }
}
