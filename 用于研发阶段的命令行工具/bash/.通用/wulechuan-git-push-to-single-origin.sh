#!/bin/sh

function wulechuan-git-push-to-single-origin {
    local shouldDebug=false

    # 给出的参数须依照下列顺序出现！尽管其中多数参数可省略。但一旦出现，顺序不可错误。

    local shouldSkip # 可省略。可取值： true、'true'、'yes' 或 'y'。
    local gitOriginName # 必须项。
    local gitOriginDisplayName # 可省略。
    local gitOriginDisplayNameColor # 可省略。



    local __VE_line_05='─────'
    local __VE_line_20="${__VE_line_05}${__VE_line_05}${VE_line_05}${VE_line_05}"



    if $shouldDebug; then echo -e "DEBUG: - - - - - - - - - - - - - - - - - - - - - - - -"; fi
    if $shouldDebug; then echo -e "DEBUG: \$1=\"\e[33m$1\e[0m\""; fi
    if [[ "$1" =~ ^--should-skip=.+ ]]; then
        shouldSkip="${1:14}"
        shift
    fi

    if $shouldDebug; then echo -e "DEBUG: \$1=\"\e[33m$1\e[0m\""; fi
    if [[ "$1" =~ ^--git-origin-name=.+ ]]; then
        gitOriginName="${1:18}"
        gitOriginDisplayName="$gitOriginName"
        shift
    fi

    if [ -z "$gitOriginName" ]; then
        echo -e "\e[31mwulechuan-git-push-to-single-origin 函数的参数错误\e[0m：\e[33m--git-origin-name\e[0m 未给出有效的值。"
        return 1
    fi

    if $shouldDebug; then echo -e "DEBUG: \$1=\"\e[33m$1\e[0m\""; fi
    if [[ "$1" =~ ^--git-origin-display-name=.+ ]]; then
        gitOriginDisplayName="${1:26}"
        shift
    fi

    if $shouldDebug; then echo -e "DEBUG: \$1=\"\e[33m$1\e[0m\""; fi
    if [[ "$1" =~ ^--git-origin-display-name-color=.+ ]]; then
        gitOriginDisplayNameColor="${1:32}"
        shift
    fi

    if $shouldDebug; then echo -e "DEBUG: - - - - - - - - - - - - - - - - - - - - - - - -"; fi



    local gitOriginDisplayNameColorCode=0

    if [ "$gitOriginDisplayNameColor" == 'black' ];     then
        gitOriginDisplayNameColorCode=30

    elif [ "$gitOriginDisplayNameColor" == 'red' ];     then
        gitOriginDisplayNameColorCode=31

    elif [ "$gitOriginDisplayNameColor" == 'green' ];   then
        gitOriginDisplayNameColorCode=32

    elif [ "$gitOriginDisplayNameColor" == 'yellow' ];  then
        gitOriginDisplayNameColorCode=33

    elif [ "$gitOriginDisplayNameColor" == 'blue' ];    then
        gitOriginDisplayNameColorCode=34

    elif [ "$gitOriginDisplayNameColor" == 'magenta' ]; then
        gitOriginDisplayNameColorCode=35

    elif [ "$gitOriginDisplayNameColor" == 'cyan' ];    then
        gitOriginDisplayNameColorCode=36

    elif [ "$gitOriginDisplayNameColor" == 'white' ];   then
        gitOriginDisplayNameColorCode=37
    fi



    if $shouldDebug; then
        echo -e "DEBUG: shouldSkip=\"\e[32m${shouldSkip}\e[0m\""
        echo -e "DEBUG: gitOriginName=\"\e[32m${gitOriginName}\e[0m\""
        echo -e "DEBUG: gitOriginDisplayName=\"\e[32m${gitOriginDisplayName}\e[0m\""
        echo -e "DEBUG: gitOriginDisplayNameColor=\"\e[32m${gitOriginDisplayNameColor}\e[0m\""
        echo -e "DEBUG: gitOriginDisplayNameColorCode=\"\e[32m${gitOriginDisplayNameColorCode}\e[0m\""
        echo -e "DEBUG: - - - - - - - - - - - - - - - - - - - - - - - -"
    fi



    if [ "$shouldSkip" != true ] && [ "$shouldSkip" != 'yes' ] && [ "$shouldSkip" != 'y' ]; then
        echo
        echo -e "${__VE_line_05} \e[${gitOriginDisplayNameColorCode}m${gitOriginDisplayName}\e[0m ${__VE_line_20}${__VE_line_20}${__VE_line_20}"
        echo

        echo -e "git  push  \e[${gitOriginDisplayNameColorCode}m${gitOriginName}\e[0m"
        echo

        git  push  $gitOriginName

        echo
    fi
}
