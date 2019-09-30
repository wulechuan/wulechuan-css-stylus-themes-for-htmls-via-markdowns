#! /bin/bash

repoRootFolder=$(dirname `readlink -f "$0"`)

function open-all-rendered-example-html-files-in-firefox {
    local _repoRootFolderPrefix=${repoRootFolder:0:3}
    local _repoRootFolder

    if [[ "$_repoRootFolderPrefix" =~ \/[a-zA-Z]\/ ]]; then
        local driveLetter=${_repoRootFolderPrefix:1:1}
        echo "The OS looks like Microsoft Windows. (${driveLetter}:)"
        _repoRootFolder="file:///${driveLetter}:/${repoRootFolder:3}"
    else
        echo "The OS does not look like Microsfot Windows."
        _repoRootFolder="file://${repoRootFolder}"
    fi

    # echo "$_repoRootFolder"


    local nameL='default-light-colored'
    local nameD='default-dark-colored'
    local renderingTargetFolderPath="${_repoRootFolder}/docs/examples/rendered"

    local renderingSubFolderName="html"
    local fileNames=(
        "default-theming-example.en-us.html"
        "default-theming-example.zh-hans-cn.html"
    )

    # local renderingSubFolderName="snapshots"
    # local fileNames=(
    #     "en-US-example-1-in-a-wide-window-with-toc-collapsed.png"
    #     "en-US-example-1-in-a-wide-window-with-toc-expanded.png"
    #     "en-US-example-2-in-a-window-of-medium-width-with-toc-collapsed.png"
    #     "en-US-example-2-in-a-window-of-medium-width-with-toc-expanded.png"
    #     "en-US-example-3-in-a-narrow-window-with-toc-collapsed.png"
    #     "en-US-example-3-in-a-narrow-window-with-toc-expanded.png"
    #     "zh-Hans-CN-1-大尺寸浏览器中的效果-文章纲要列表已收叠.png"
    #     "zh-Hans-CN-1-大尺寸浏览器中的效果-文章纲要列表已展开.png"
    #     "zh-Hans-CN-2-中等尺寸浏览器中的效果-文章纲要列表已收叠.png"
    #     "zh-Hans-CN-2-中等尺寸浏览器中的效果-文章纲要列表已展开.png"
    #     "zh-Hans-CN-3-窄小尺寸浏览器中的效果-文章纲要列表已收叠.png"
    #     "zh-Hans-CN-3-窄小尺寸浏览器中的效果-文章纲要列表已展开.png"
    # )




    local fileName
    local filePath
    local allFilePaths=''

    for fileName in ${fileNames[@]}; do
        filePath="${renderingTargetFolderPath}/${nameL}/${renderingSubFolderName}/${fileName}"
        echo $filePath
        allFilePaths=" ${allFilePaths} ${filePath}"
        # start firefox $filePath
    done 

    for fileName in ${fileNames[@]}; do
        filePath="${renderingTargetFolderPath}/${nameD}/${renderingSubFolderName}/${fileName}"
        echo $filePath
        allFilePaths=" ${allFilePaths} ${filePath}"
        # start firefox $filePath
    done 

    start firefox $allFilePaths

    echo -e "\e[30;42m DONE \e[0m\n"

    unset -f open-all-rendered-example-html-files-in-firefox
    unset repoRootFolder
}


open-all-rendered-example-html-files-in-firefox

