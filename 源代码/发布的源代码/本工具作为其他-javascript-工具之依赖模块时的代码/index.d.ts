declare const 默认导出之内容: 默认导出之内容.本模块之总接口;
export = 默认导出之内容;

declare namespace 默认导出之内容 {
    export type 类型定义之由本工具内建之层叠样式表文件之名称 = (
        | 'wulechuan-styles-for-html-via-markdown--firefox-addon.default.css'
        | 'wulechuan-styles-for-html-via-markdown--typora.default.css'
        | 'wulechuan-styles-for-html-via-markdown--vscode.default.min.css'
        | 'wulechuan-styles-for-html-via-markdown.default--no-toc.css'
        | 'wulechuan-styles-for-html-via-markdown.default--no-toc.min.css'
        | 'wulechuan-styles-for-html-via-markdown.default--with-toc.css'
        | 'wulechuan-styles-for-html-via-markdown.default--with-toc.min.css'
        | 'wulechuan-styles-for-html-via-markdown.default--wrapped--no-toc.css'
        | 'wulechuan-styles-for-html-via-markdown.default--wrapped--no-toc.min.css'
        | 'wulechuan-styles-for-html-via-markdown.default--wrapped--with-toc.css'
        | 'wulechuan-styles-for-html-via-markdown.default--wrapped--with-toc.min.css'
        | 'wulechuan-styles-for-html-via-markdown.default-dark--no-toc.css'
        | 'wulechuan-styles-for-html-via-markdown.default-dark--no-toc.min.css'
        | 'wulechuan-styles-for-html-via-markdown.default-dark--with-toc.css'
        | 'wulechuan-styles-for-html-via-markdown.default-dark--with-toc.min.css'
        | 'wulechuan-styles-for-html-via-markdown.default-dark--wrapped--no-toc.css'
        | 'wulechuan-styles-for-html-via-markdown.default-dark--wrapped--no-toc.min.css'
        | 'wulechuan-styles-for-html-via-markdown.default-dark--wrapped--with-toc.css'
        | 'wulechuan-styles-for-html-via-markdown.default-dark--wrapped--with-toc.min.css'
        | 'wulechuan-styles-for-html-via-markdown.generic-default-light--atom-one-dark--no-toc.css'
        | 'wulechuan-styles-for-html-via-markdown.generic-default-light--atom-one-dark--no-toc.min.css'
        | 'wulechuan-styles-for-html-via-markdown.generic-default-light--atom-one-dark--with-toc.css'
        | 'wulechuan-styles-for-html-via-markdown.generic-default-light--atom-one-dark--with-toc.min.css'
        | 'wulechuan-styles-for-html-via-markdown.generic-default-light--atom-one-dark--wrapped--no-toc.css'
        | 'wulechuan-styles-for-html-via-markdown.generic-default-light--atom-one-dark--wrapped--no-toc.min.css'
        | 'wulechuan-styles-for-html-via-markdown.generic-default-light--atom-one-dark--wrapped--with-toc.css'
        | 'wulechuan-styles-for-html-via-markdown.generic-default-light--atom-one-dark--wrapped--with-toc.min.css'
    );

    export type 类型定义之文件简易描述项 = {
        文件名称: 类型定义之由本工具内建之层叠样式表文件之名称;
        文件之相对路径: string;
        文件之绝对路径: string;
        文件内容全文: string;

        // 以下为陈旧的采用外国字命名之诸接口。

        fileName: string;
        fileRelativePath: string;
        fileAbsolutePath: string;
        fileContent: string;
    };

    // export type 类型定义之文件简易描述项字典 = {
    //     [文件名称: string]: 类型定义之文件简易描述项;
    // };
    export type 类型定义之文件简易描述项字典 = Record<
        类型定义之由本工具内建之层叠样式表文件之名称, 类型定义之文件简易描述项
    >;

    export type 类型定义之定制默认Javascript文件之选项集 = {
        /**
         * 注意：
         * 【展开文章纲要列表面板】与【展开文章纲要列表的某一条目】不是一回事。
         */

        为求文章纲要列表简洁明了故意仅显示两层条目以至于较深层级条目形同作废?: boolean;
        浏览器打开HTML文章最初之时文章纲要列表中凡层级深于该值之条目均应收叠?: boolean;
        浏览器打开HTML文章最初之时若浏览器窗口足够宽大则直接展开文章纲要列表之面板?: boolean;

        // 以下为陈旧的采用外国字命名之诸接口。

        shouldShowOnlyTwoLevelsOfTOCItemsAtMost?: boolean;
        atBeginingShouldCollapseAllTOCItemsOfLevelsGreaterThan?: boolean;
        atBeginingShouldExpandTOCWhenWindowIsWideEnough?: boolean;
    };





    export type 类型定义之获取某特定文件之完整内容字符串之函数 = (
        文件描述项或文件名称: 类型定义之文件简易描述项 | 类型定义之文件简易描述项['文件名称'],
        不应采用已经缓存的旧内容?: boolean,

        // 实际上目前仅包含针对 JavaScript 内容定制之选项。对层叠样式表之内容无任何作用。
        配置项集?: 类型定义之定制默认Javascript文件之选项集
    ) => string;

    export type 类型定义之获取所谓默认层叠样式表文件之完整内容字符串之函数 = (
        不应采用已经缓存的旧内容?: boolean
    ) => string;

    export type 类型定义之获取所谓默认Javacript文件之完整内容字符串之函数 = (
        不应采用已经缓存的旧内容?: boolean,
        本函数之配置项集?: 类型定义之定制默认Javascript文件之选项集
    ) => string;





    export type 本模块之总接口 = {
        所有层叠样式表文件之简易描述项之集: Array<类型定义之文件简易描述项>;
        所有Javascript文件之简易描述项之集: Array<类型定义之文件简易描述项>;
        以文件名称为索引之所有文件简易描述项之字典: 类型定义之文件简易描述项字典;

        // 已因命名不够明确而废弃（仍可用但不推荐）。请改用 “ 以文件名称为索引之所有文件简易描述项之字典 ”。
        以文件名称为索引之所有文件之字典: 类型定义之文件简易描述项字典;

        获取某一已发布之文件之完整内容字符串: 类型定义之获取某特定文件之完整内容字符串之函数;
        获取本项目官方选定之所谓默认层叠样式表之完整内容字符串: 类型定义之获取所谓默认层叠样式表文件之完整内容字符串之函数;
        获取本项目官方选定之所谓默认Javascript之完整内容字符串: 类型定义之获取所谓默认Javacript文件之完整内容字符串之函数;

        // 以下为陈旧的采用外国字命名之诸接口。

        cssFileEntries: Array<类型定义之文件简易描述项>;
        jsFileEntries: Array<类型定义之文件简易描述项>;

        allFileEntriesKeyingByFileNames: 类型定义之文件简易描述项字典;

        syncGetContentStringOfOneFileEntry: 类型定义之获取某特定文件之完整内容字符串之函数;
        syncGetContentStringOfDefaultCSS: 类型定义之获取所谓默认层叠样式表文件之完整内容字符串之函数;
        syncGetContentStringOfDefaultTOCJavascript: 类型定义之获取所谓默认Javacript文件之完整内容字符串之函数;
    };
}
