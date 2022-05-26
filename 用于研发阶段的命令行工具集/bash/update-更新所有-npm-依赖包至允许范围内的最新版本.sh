#!/bin/bash

source  './node_modules/@wulechuan/cli-scripts--npm-project-helpers/源代码/发布的源代码/bash/吴乐川-打印-json.sh'
source  './node_modules/@wulechuan/cli-scripts--npm-project-helpers/源代码/发布的源代码/bash/吴乐川-管理某-npm-项目的依赖包等资源.sh'

SHOULD_REMOVE_NODE_MODULES_FIRST=1
SHOULD_REMOVE_PACKAGE_LOCK_JSON_FIRST=1
SHOULD_DRY_RUN=0





function 完整流程  {
    local ShouldRemoveNodeModulesFirst=0
    local ShouldRemovePackageLockJSONFirst=0
    local ShouldDryRun=0

    Read-_吴乐川管理某_npm_项目__读取公共参数  $*

    # echo "[DEBUG] 完整流程 ShouldRemoveNodeModulesFirst = '${ShouldRemoveNodeModulesFirst}'"
    # echo "[DEBUG] 完整流程 ShouldRemovePackageLockJSONFirst = '${ShouldRemovePackageLockJSONFirst}'"
    # echo "[DEBUG] 完整流程 ShouldDryRun = '${ShouldDryRun}'"





    # ───────────────────────────────────────────────────────────────
    #  1) 按需删除 node_modules      文件夹。
    #  2) 按需删除 package-lock.json 文件。
    # ───────────────────────────────────────────────────────────────

    Remove-吴乐川管理某_npm_项目__删除当前文件夹下的_node_modules       --dry-run $ShouldDryRun  --should-run-this-task $ShouldRemoveNodeModulesFirst
    Remove-吴乐川管理某_npm_项目__删除当前文件夹下的_package_lock_json  --dry-run $ShouldDryRun  --should-run-this-task $ShouldRemovePackageLockJSONFirst







    # ───────────────────────────────────────────────────────────────
    #  3) 安装依赖包。【产品级】、【甲】类。
    # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    #     顺便提醒，虽然一般而言 latest 版本应恰为最高版本，但并不确保。
    # ───────────────────────────────────────────────────────────────

    Write-吴乐川管理某_npm_项目__打印提示语__新装或升级某批依赖包_产品级_均为最晚版本  --dry-run $ShouldDryRun

    # 如果 @wulechuan/cli-scripts--npm-project-helpers 工具集随附的 JavaScript 程序运行如期，
    # 其将在此处插入当前 npm 项目的【产品级】、【可自由采取其版本】的依赖包的列表。    另，切勿改动该行。该行之部分文字是供 JavaScript 程序识别的特殊记号。

    if true; then

        echo  '暂无。'

    else

        if [ $ShouldDryRun -eq 1 ]; then
            echo  -e  "   \e[0;33m【仿真演练】\e[0;0m"
        fi

        # echo  'npm  i  ????????@0.0.0'

        echo
        echo  -en  "\e[0;31m"
        Write-Line-without-line-break
        echo  -e   "\e[0;0m"
        echo

        if [ $ShouldDryRun -eq 0 ]; then

            # ───────────────────────────

            [ 0 ]

            # ───────────────────────────

        fi

    fi

    Write-吴乐川管理某_npm_项目__打印提示语__新装或升级某批依赖包_产品级_均为最晚版本  --dry-run $ShouldDryRun  --is-ending







    # ───────────────────────────────────────────────────────────────
    #  3) 安装依赖包。【产品级】、【乙】类。
    # ───────────────────────────────────────────────────────────────

    Write-吴乐川管理某_npm_项目__打印提示语__新装或升级某批依赖包_产品级_均为特定版本  --dry-run $ShouldDryRun

    # 如果 @wulechuan/cli-scripts--npm-project-helpers 工具集随附的 JavaScript 程序运行如期，
    # 其将在此处插入当前 npm 项目的【产品级】、【须锁定其版本范围】依赖包的列表。    另，切勿改动该行。该行之部分文字是供 JavaScript 程序识别的特殊记号。

    if false; then

        echo  '暂无。'

    else

        if [ $ShouldDryRun -eq 1 ]; then
            echo  -e  "   \e[0;33m【仿真演练】\e[0;0m"
        fi

        echo  '    npm  i \'
        echo  '        globby@^11'

        echo
        echo  -en  "\e[0;31m"
        Write-Line-without-line-break
        echo  -e   "\e[0;0m"
        echo

        if [ $ShouldDryRun -eq 0 ]; then

            # ───────────────────────────
            # globby
            #     不能更新至第 12 或更晚的版本。
            #     因为自第 12 版始， globby 仅支持 ES Module 语法。
            # ───────────────────────────

            npm  i \
                globby@^11

            # ───────────────────────────

        fi

    fi

    Write-吴乐川管理某_npm_项目__打印提示语__新装或升级某批依赖包_产品级_均为特定版本  --dry-run $ShouldDryRun  --is-ending







    # ───────────────────────────────────────────────────────────────
    #  3) 安装依赖包。【研发级】、【甲】类。
    # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    #     顺便提醒，虽然一般而言 latest 版本应恰为最高版本，但并不确保。
    # ───────────────────────────────────────────────────────────────

    Write-吴乐川管理某_npm_项目__打印提示语__新装或升级某批依赖包_研发级_均为最晚版本  --dry-run $ShouldDryRun

    # 如果 @wulechuan/cli-scripts--npm-project-helpers 工具集随附的 JavaScript 程序运行如期，
    # 其将在此处插入当前 npm 项目的【研发级】、【可自由采取其版本】依赖包的列表。    另，切勿改动该行。该行之部分文字是供 JavaScript 程序识别的特殊记号。

    if false; then

        echo  '暂无。'

    else

        if [ $ShouldDryRun -eq 1 ]; then
            echo  -e  "   \e[0;33m【仿真演练】\e[0;0m"
        fi

        echo  '    npm  i  -D \'
        echo  '        @wulechuan/cli-scripts--git-push@latest \'
        echo  '        @wulechuan/generate-html-via-markdown@latest \'
        echo  '        @wulechuan/gulp-classical-task-cycle@latest \'
        echo  '        cssnano@latest \'
        echo  '        del@latest \'
        echo  '        eslint@latest \'
        echo  '        esm@latest \'
        echo  '        fs-extra@latest \'
        echo  '        gulp@latest \'
        echo  '        gulp-concat@latest \'
        echo  '        gulp-pipe@latest \'
        echo  '        gulp-postcss@latest \'
        echo  '        gulp-rename@latest \'
        echo  '        gulp-stylus@latest \'
        echo  '        gulp-terser@latest \'
        echo  '        postcss@latest \'
        echo  '        stylus@latest'

        echo
        echo  -en  "\e[0;32m"
        Write-Line-without-line-break
        echo  -e   "\e[0;0m"
        echo

        if [ $ShouldDryRun -eq 0 ]; then

            # ───────────────────────────
            npm  i  -D \
                @wulechuan/cli-scripts--git-push@latest \
                @wulechuan/generate-html-via-markdown@latest \
                @wulechuan/gulp-classical-task-cycle@latest \
                cssnano@latest \
                del@latest \
                eslint@latest \
                esm@latest \
                fs-extra@latest \
                gulp@latest \
                gulp-concat@latest \
                gulp-pipe@latest \
                gulp-postcss@latest \
                gulp-rename@latest \
                gulp-stylus@latest \
                gulp-terser@latest \
                postcss@latest \
                stylus@latest
            # ───────────────────────────

        fi

    fi

    Write-吴乐川管理某_npm_项目__打印提示语__新装或升级某批依赖包_研发级_均为最晚版本  --dry-run $ShouldDryRun  --is-ending







    # ───────────────────────────────────────────────────────────────
    #  3) 安装依赖包。【研发级】、【乙】类。
    # ───────────────────────────────────────────────────────────────

    Write-吴乐川管理某_npm_项目__打印提示语__新装或升级某批依赖包_研发级_均为特定版本  --dry-run $ShouldDryRun

    # 如果 @wulechuan/cli-scripts--npm-project-helpers 工具集随附的 JavaScript 程序运行如期，
    # 其将在此处插入当前 npm 项目的【研发级】、【须锁定其版本范围】依赖包的列表。    另，切勿改动该行。该行之部分文字是供 JavaScript 程序识别的特殊记号。

    if false; then

        echo  '暂无。'

    else

        if [ $ShouldDryRun -eq 1 ]; then
            echo  -e  "   \e[0;33m【仿真演练】\e[0;0m"
        fi

        echo  '    npm  i  -D \'
        echo  '        chalk@^4'

        echo
        echo  -en  "\e[0;32m"
        Write-Line-without-line-break
        echo  -e   "\e[0;0m"
        echo

        if [ $ShouldDryRun -eq 0 ]; then

            # ───────────────────────────
            # chalk 
            #     不能更新至第 5 或更晚的版本。
            #     因为自第 5 版始， chalk 仅支持 ES Module 语法。
            # ───────────────────────────

            npm  i  -D \
                chalk@^4

            # ───────────────────────────

        fi

    fi

    Write-吴乐川管理某_npm_项目__打印提示语__新装或升级某批依赖包_研发级_均为特定版本  --dry-run $ShouldDryRun  --is-ending







    # ───────────────────────────────────────────────────────────────
    #  4) 更新与研发相关的数据库。
    # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    #     例如： Browserslist:caniuse-lite
    # ───────────────────────────────────────────────────────────────

    Write-吴乐川管理某_npm_项目__打印提示语__更新与研发相关的数据库  --dry-run $ShouldDryRun

    if false; then

        echo  '暂无。'

    else

        if [ $ShouldDryRun -eq 1 ]; then

            # ───────────────────────────
            npx  browserslist@latest  --update-db
            # ───────────────────────────

        fi

    fi

    Write-吴乐川管理某_npm_项目__打印提示语__更新与研发相关的数据库  --dry-run $ShouldDryRun  --is-ending







    # ───────────────────────────────────────────────────────────────
    #  5) 其他交代。
    # ───────────────────────────────────────────────────────────────

    Write-吴乐川管理某_npm_项目__打印提示语__其他交代  --dry-run $ShouldDryRun

    if false; then

        echo  '暂无。'

    else

        if [ $ShouldDryRun -eq 1 ]; then

            # ───────────────────────────
            # 此处不妨做些关于当前 npm 项目的必要交代。
            # 例如注意事项、关键步骤等等。
            # ───────────────────────────

            echo -e "\e[33m以下是在 package.json 中的特殊记载及其解释\e[0;0m"
            echo
            echo '{'
            Write-吴乐川打印_JSON_键          -Indent 1 'overrides' -ValueIsObject
            Write-吴乐川打印_JSON_键          -Indent 2 'stylus' -ValueIsObject
            echo
            Write-吴乐川打印_JSON_注释_并换行  -Indent 3 '// 实验证明，截止 2022-05-15 ，'
            Write-吴乐川打印_JSON_注释_并换行  -Indent 3 '// Stylus 依赖的 glob 不能采用最晚近的 v7.2.2 版。'
            Write-吴乐川打印_JSON_注释_并换行  -Indent 3 '// glob 不能采用 v7.2.1 版不存在。'
            Write-吴乐川打印_JSON_注释_并换行  -Indent 3 '// 故最高仅能采用 v7.2.0 版。'
            Write-吴乐川打印_JSON_键          -Indent 3 'glob'
            Write-乐川打印_JSON_值_文本型      -IsValueOfLastKey '7.2.0'
            Write-吴乐川打印_JSON_某字典结束    -Indent 2
            Write-吴乐川打印_JSON_某字典结束    -Indent 1
            Write-吴乐川打印_JSON_某字典结束    -Indent 0

            # ───────────────────────────

        fi

    fi

    Write-吴乐川管理某_npm_项目__打印提示语__其他交代  --dry-run $ShouldDryRun  --is-ending
}





完整流程 \
    --remove-node-modules-first    $SHOULD_REMOVE_NODE_MODULES_FIRST \
    --remove-packa-lock-json-first $SHOULD_REMOVE_PACKAGE_LOCK_JSON_FIRST \
    --dry-run                      $SHOULD_DRY_RUN
