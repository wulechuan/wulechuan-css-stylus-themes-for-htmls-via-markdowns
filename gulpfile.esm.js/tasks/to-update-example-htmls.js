import chalk from 'chalk'

import {
    create3HighOrderTasksUponMultipleTaskCycles,
} from '@wulechuan/gulp-classical-task-cycle'

import createTaskCycleForGeneratingHTMLsForExampleMarkdowns
    from '../task-cycles/build-example-htmls/create-task-cycle-for-generating-example-htmls'


const taskCyclesOfBuildingHTMLFilesOfExampleMarkdowns = [
    createTaskCycleForGeneratingHTMLsForExampleMarkdowns({
        // distCSSFileNameToUse: 'wulechuan-styles-for-html-via-markdown.default--with-toc.min.css',
        exampleOutputHTMLFilesFolderPath: './docs/examples/rendered/default-light-colored/html',
    }),
    createTaskCycleForGeneratingHTMLsForExampleMarkdowns({
        distCSSFileNameToUse: 'wulechuan-styles-for-html-via-markdown.default-dark--with-toc.min.css',
        exampleOutputHTMLFilesFolderPath: './docs/examples/rendered/default-dark-colored/html',
    }),
]


export default create3HighOrderTasksUponMultipleTaskCycles({
    taskCyclesInPallarel: taskCyclesOfBuildingHTMLFilesOfExampleMarkdowns,

    beforeBuildingEveryThingOnce: function() {
        console.log(`\n正在采用默认主题${chalk.black.bgBlue('构建所有语言版本的示例文档')}的 HTML 文件`)
    },
})
