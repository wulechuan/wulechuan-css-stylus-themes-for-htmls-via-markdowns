# 本文件之文件名冠以英语句点“.”，是为了在 Shell 或 Git Bash 环境下，令本文件不可见。
# 而在文件名起始的英语句点之后继续冠以“ps-”（代表“Power Shell”）短语，则是为了避免
# 本文件之名称与 Git 系统的“.git”文件夹名称的起始部分相同。一旦令文件名与“.git”文
# 件夹的起始部分有区别，则日常在 Windows 环境借助 tab 键可自动补齐本文件全称，这就
# 更为便捷了。

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
