import chalk from 'chalk'

import {
    create3HighOrderTasksUponMultipleTaskCycles,
} from '@wulechuan/gulp-classical-task-cycle'

import createTaskCycleForGeneratingHTMLsForExampleMarkdowns
    from '../task-cycles/build-example-htmls/create-task-cycle-for-generating-example-htmls'


const taskCycleOfBuildingHTMLFilesOfExampleMarkdowns = createTaskCycleForGeneratingHTMLsForExampleMarkdowns({
    // distCSSFileNameToUse: 'wulechuan-styles-for-html-via-markdown.default--with-toc.min.css',
    exampleOutputHTMLFilesFolderPath: './docs/examples/rendered/html',
})


export default create3HighOrderTasksUponMultipleTaskCycles({
    taskCyclesInPallarel: [ taskCycleOfBuildingHTMLFilesOfExampleMarkdowns ],

    beforeBuildingEveryThingOnce: function() {
        console.log(`\n正在采用默认主题${chalk.black.bgBlue('构建所有语言版本的示例文档')}的 HTML 文件`)
    },
})
