#!/bin/bash

. ./用于研发阶段的命令行工具/bash/通用/wulechuan-git-push-to-single-origin.sh

echo
echo -e "\e[42;30m Git 推送至所有源：开始 \e[0;0m"
# echo

wulechuan-git-push-to-single-origin  --should-skip=false \
    --git-origin-name='码云：吴乐川' \
    --git-origin-display-name='码云：吴乐川' \
    --git-origin-display-name-color='red'

wulechuan-git-push-to-single-origin  --should-skip=false \
    --git-origin-name='阿里云：吴乐川' \
    --git-origin-display-name='阿里云：吴乐川' \
    --git-origin-display-name-color='green'

wulechuan-git-push-to-single-origin  --should-skip=false \
    --git-origin-name='GitHub：吴乐川' \
    --git-origin-display-name='GitHub：吴乐川' \
    --git-origin-display-name-color='yellow'

echo
echo -e "\e[42;30m Git 推送至所有源：结束 \e[0;0m"
echo
