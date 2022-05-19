function Write-JsonKey {
    local indentLevel=0
    local key=''
    local valueIsObject=0
    local valueIsArray=0

    if [ "$1" == '-Indent' ]; then
        shift
        indentLevel=$1
        shift
    fi

    key="$1"
    shift

    if [ "$1" == '-ValueIsObject' ]; then
        valueIsObject=1
        shift
    fi

    if [ "$1" == '-valueIsArray' ]; then
        valueIsArray=1
        shift
    fi

    if [ $indentLevel -gt 0 ]; then
        local i=0
        while [ $i -lt $indentLevel ]; do
            echo -n "    "
            i=$((i+1))
        done
    fi

    echo -en "\"\e[0;32m${key}\e[0;0m\": "

    if [ $valueIsObject == 1 ]; then
        echo '{'
    fi

    if [ $valueIsArray == 1 ]; then
        echo '['
    fi
}

function Write-JsonObjectEnd {
    local indentLevel=0

    if [ "$1" == '-Indent' ]; then
        shift
        indentLevel=$1
        shift
    fi

    if [ $indentLevel -gt 0 ]; then
        local i=0
        while [ $i -lt $indentLevel ]; do
            echo -n "    "
            i=$((i+1))
        done
    fi

    echo '}'
}

function Write-JsonArrayEnd {
    local indentLevel=0

    if [ "$1" == '-Indent' ]; then
        shift
        indentLevel=$1
        shift
    fi

    if [ $indentLevel -gt 0 ]; then
        local i=0
        while [ $i -lt $indentLevel ]; do
            echo -n "    "
            i=$((i+1))
        done
    fi

    echo ']'
}

function Write-JsonValue_String {
    local isValueOfLastKey=0
    local value=''

    if [ "$1" == '-IsValueOfLastKey' ]; then
        isValueOfLastKey=1
        shift
    fi

    value="$1"

    echo -en "\"\e[0;39m${value}\e[0;0m\""

    if [ ! $isValueOfLastKey ]; then
        echo -n ','
    fi

    echo
}

function Write-JsonCommentLine {
    local indentLevel=0
    local comment=''

    if [ "$1" == '-Indent' ]; then
        shift
        indentLevel=$1
        shift
    fi

    comment="$1"

    if [ $indentLevel -gt 0 ]; then
        local i=0
        while [ $i -lt $indentLevel ]; do
            echo -n "    "
            i=$((i+1))
        done
    fi

    echo -e "\e[0;91m${comment}\e[0;0m"
}
