#!/bin/bash

.  './node_modules/@wulechuan/cli-scripts--git-push/源代码/bash/吴乐川-集德上推至单一源.sh'

echo
echo -e "\e[42;30m 【集德】上推（ git push ）至所有源：开始 \e[0;0m"
# echo

吴乐川-集德上推至单一源  --should-skip=false \
    --git-origin-name='吴乐川：码云' \
    --git-origin-display-name='吴乐川：码云' \
    --git-origin-display-name-color='red'

吴乐川-集德上推至单一源  --should-skip=false \
    --git-origin-name='吴乐川：阿里云' \
    --git-origin-display-name='吴乐川：阿里云' \
    --git-origin-display-name-color='green'

吴乐川-集德上推至单一源  --should-skip=false \
    --git-origin-name='吴乐川：GitHub' \
    --git-origin-display-name='吴乐川：GitHub' \
    --git-origin-display-name-color='yellow'

echo
echo -e "\e[42;30m 【集德】上推（ git push ）至所有源：结束 \e[0;0m"
echo
