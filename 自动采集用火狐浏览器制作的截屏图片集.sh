#! /bin/bash

# The built-in screenshopt tool of Firefox is really awesome.
# But the location(folder) of the output files are not configurable.
# The prefix string of each file name that used is not configurable either.
# All we need to do here are:
#   1. to rename files, getting rid of the prefix of TODAY.
#   2. to move files into the example rendered snapshots folder.

repoRootFolder=$(dirname `readlink -f "$0"`)

function collect-firefox-screenshot-files {
    local firefoxScreenshotFilesFolderPath="/d/Users/wulechuan/Downloads"
    local firefoxScreenshotFilesNamingPrefix="Screenshot_`date "+%Y-%m-%d"` "


    local snapshotTargetFolderSubPah="文档集/文章排版与配色效果示例集/以-html-格式渲染好的文章成品/各文章最终呈现效果之截图"


    local snapshotTargetFolderPath="${repoRootFolder}/${snapshotTargetFolderSubPah}"
    local fileNamePrefixLength=${#firefoxScreenshotFilesNamingPrefix}

    echo
    echo -e "NPM Package Root:     \"\e[33m${repoRootFolder}\e[0m\""

    echo -e "Source Images Folder: \"\e[32m${firefoxScreenshotFilesFolderPath}\e[0m\""
    echo -e "The prefix to remove: \"\e[32m${firefoxScreenshotFilesNamingPrefix}\e[0m\""


    local sourceFilePath
    local sourceFileName
    local processedSourceFileName
    local processedSourceFilePath


    echo


    for sourceFilePath in "${firefoxScreenshotFilesFolderPath}/"*.png; do
        sourceFileName=`basename "$sourceFilePath"`

        if  [[ ! "$sourceFileName" =~ ^$firefoxScreenshotFilesNamingPrefix ]]; then
            continue
        fi

        echo -e "Found New: \"\e[35m$sourceFilePath\e[0m\""

        processedSourceFilePath="$sourceFilePath"
        processedSourceFileName="$sourceFileName"

        if [[ "$sourceFileName" =~ ^$firefoxScreenshotFilesNamingPrefix ]]; then
            processedSourceFileName=${sourceFileName:$fileNamePrefixLength}
            processedSourceFilePath="${firefoxScreenshotFilesFolderPath}/${processedSourceFileName}"

            echo -e "Renaming file"
            echo -e "    from: \"\e[32m$sourceFileName\e[0m\""
            echo -e "      to: \"\e[35m$processedSourceFileName\e[0m\""

            if [ -f "$processedSourceFilePath" ]; then
                mv     "$processedSourceFilePath"    "${firefoxScreenshotFilesFolderPath}/[old]-${processedSourceFileName}"
            fi

            mv    -f    "$sourceFilePath"    "$processedSourceFilePath"
        fi
    done


    echo
    mkdir    -p    "$snapshotTargetFolderPath/"


    for sourceFilePath in "${firefoxScreenshotFilesFolderPath}/"*.png; do
        sourceFileName=`basename "$sourceFilePath"`

        # echo "$sourceFileName"

        if  [[ "$sourceFileName" =~ ^Screenshot_2[0-1][0-9][0-9]-[0-1][0-9]-[0-3][0-9]\  ]]; then
            # Prefixed files of other days are NOT renamed.
            # And they should be excluded.
            continue
        fi

        if  [[ ! "$sourceFileName" =~ ^example_en-US_default ]] && \
            [[ ! "$sourceFileName" =~ ^示例：简体中文范文配默认 ]]
        then
            continue
        fi

        echo -e "Moving: \"\e[32m$sourceFilePath\e[0m\""

        mv    -f    "$sourceFilePath"    "$snapshotTargetFolderPath/"
    done

    echo
    echo -e "\e[30;42m DONE \e[0m\n"

    unset -f collect-firefox-screenshot-files
    unset repoRootFolder
}


collect-firefox-screenshot-files    $*
