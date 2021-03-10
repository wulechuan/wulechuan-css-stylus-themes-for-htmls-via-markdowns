declare type 吴乐川用于美化文章的层叠样式表集之数据类型之文件简易描述项 = {
    文件名称: string;
    文件之相对路径: string;
    文件之绝对路径: string;
    文件内容全文: string;
    
    // 以下为陈旧的采用外国字命名之诸接口。

    fileName: string;
    fileRelativePath: string;
    fileAbsolutePath: string;
    fileContent: string;
};

declare type 吴乐川用于美化文章的层叠样式表集之数据类型之文件简易描述项字典 = {
    [文件名称: string]: 吴乐川用于美化文章的层叠样式表集之数据类型之文件简易描述项;
};

declare type 吴乐川用于美化文章的层叠样式表集之数据类型之拾取默认Javascript文件之函数之第二参数 = {
    // 注意： 【展开文章纲要列表面板】与【展开文章纲要列表的某一条目】不是一回事。

    为求文章纲要列表简洁明了故意仅显示两层条目以至于较深层级条目形同作废?: boolean;
    浏览器打开HTML文章最初之时文章纲要列表中凡层级深于该值之条目均应收叠?: boolean;
    浏览器打开HTML文章最初之时若浏览器窗口足够宽大则直接展开文章纲要列表之面板?: boolean;
    
    // 以下为陈旧的采用外国字命名之诸接口。

    shouldShowOnlyTwoLevelsOfTOCItemsAtMost?: boolean;
    atBeginingShouldCollapseAllTOCItemsOfLevelsGreaterThan?: boolean;
    atBeginingShouldExpandTOCWhenWindowIsWideEnough?: boolean;
};





declare type 吴乐川用于美化文章的层叠样式表集之数据类型之获取某特定文件之完整内容字符串之函数 = (
    文件描述项或文件名称: 吴乐川用于美化文章的层叠样式表集之数据类型之文件简易描述项 | 吴乐川用于美化文章的层叠样式表集之数据类型之文件简易描述项['文件名称'],
    不应采用已经缓存的旧内容?: boolean,
    options?: 吴乐川用于美化文章的层叠样式表集之数据类型之拾取默认Javascript文件之函数之第二参数
) => string;

declare type 吴乐川用于美化文章的层叠样式表集之数据类型之获取所谓默认层叠样式表文件之完整内容字符串之函数 = (
    不应采用已经缓存的旧内容?: boolean
) => string;

declare type 吴乐川用于美化文章的层叠样式表集之数据类型之获取所谓默认Javacript文件之完整内容字符串之函数 = (
    不应采用已经缓存的旧内容?: boolean,
    本函数之配置项集?: 吴乐川用于美化文章的层叠样式表集之数据类型之拾取默认Javascript文件之函数之第二参数
) => string;





declare type 吴乐川用于美化文章的层叠样式表集之数据类型之默认导出之内容 = {
    所有层叠样式表文件之简易描述项之集: Array<吴乐川用于美化文章的层叠样式表集之数据类型之文件简易描述项>;
    所有Javascript文件之简易描述项之集: Array<吴乐川用于美化文章的层叠样式表集之数据类型之文件简易描述项>;
    以文件名称为索引之所有文件之字典: 吴乐川用于美化文章的层叠样式表集之数据类型之文件简易描述项字典;

    获取某一已发布之文件之完整内容字符串: 吴乐川用于美化文章的层叠样式表集之数据类型之获取某特定文件之完整内容字符串之函数;
    获取本项目官方选定之所谓默认层叠样式表之完整内容字符串: 吴乐川用于美化文章的层叠样式表集之数据类型之获取所谓默认层叠样式表文件之完整内容字符串之函数;
    获取本项目官方选定之所谓默认Javascript之完整内容字符串: 吴乐川用于美化文章的层叠样式表集之数据类型之获取所谓默认Javacript文件之完整内容字符串之函数;

    // 以下为陈旧的采用外国字命名之诸接口。

    cssFileEntries: Array<吴乐川用于美化文章的层叠样式表集之数据类型之文件简易描述项>;
    jsFileEntries: Array<吴乐川用于美化文章的层叠样式表集之数据类型之文件简易描述项>;

    allFileEntriesKeyingByFileNames: 吴乐川用于美化文章的层叠样式表集之数据类型之文件简易描述项字典;

    syncGetContentStringOfOneFileEntry: 吴乐川用于美化文章的层叠样式表集之数据类型之获取某特定文件之完整内容字符串之函数;
    syncGetContentStringOfDefaultCSS: 吴乐川用于美化文章的层叠样式表集之数据类型之获取所谓默认层叠样式表文件之完整内容字符串之函数;
    syncGetContentStringOfDefaultTOCJavascript: 吴乐川用于美化文章的层叠样式表集之数据类型之获取所谓默认Javacript文件之完整内容字符串之函数;
};

declare const 默认导出之内容: 吴乐川用于美化文章的层叠样式表集之数据类型之默认导出之内容;
export default 默认导出之内容;
