# 本文件之文件名冠以英语句点“.”，是为了在 Shell 或 Git Bash 环境下，令本文件不可见。

.  '.\node_modules\@wulechuan\cli-scripts--git-push\源代码\PowerShell\Push-集德上推至单一源.ps1'

Write-Host
Write-Host  -F 'Black'  -B 'DarkGreen'  ' 【集德】上推（ git push ）至所有源：开始 '
Write-Host

Push-集德上推至单一源  '吴乐川：阿里云'  -集德源之显示名称文本采用的颜色 'Green'
Push-集德上推至单一源  '吴乐川：码云'    -集德源之显示名称文本采用的颜色 'Red'
Push-集德上推至单一源  '吴乐川：GitHub'  -集德源之显示名称文本采用的颜色 'Yellow'

Write-Host
Write-Host  -F 'Black'  -B 'DarkGreen'  ' 【集德】上推（ git push ）至所有源：结束 '
Write-Host