# 本文件之文件名冠以英语句点“.”，是为了在 Shell 或 Git Bash 环境下，令本文件不可见。

. .\用于研发阶段的命令行工具\PowerShell\通用\Push-GitRepositoryToSingleOrigin.ps1

Write-Host
Write-Host  -F 'Black'  -B 'DarkGreen'  ' Git 推送至所有源：开始 '
Write-Host

Push-GitRepositoryToSingleOrigin  '阿里云：吴乐川'  -GitOrignDisplayNameColor 'Green'
Push-GitRepositoryToSingleOrigin  '码云：吴乐川'  -GitOrignDisplayNameColor 'Red'
Push-GitRepositoryToSingleOrigin  'GitHub：吴乐川'  -GitOrignDisplayNameColor 'Yellow'

Write-Host
Write-Host  -F 'Black'  -B 'DarkGreen'  ' Git 推送至所有源：结束 '
Write-Host
