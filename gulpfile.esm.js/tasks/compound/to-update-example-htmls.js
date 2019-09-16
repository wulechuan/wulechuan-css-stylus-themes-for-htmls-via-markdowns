import chalk from 'chalk'

import {
    create3HighOrderTasksUponMultipleTaskCycles,
} from '@wulechuan/gulp-classical-task-cycle'

import createTaskCycleForGeneratingHTMLsForExampleMarkdowns
    from '../update-example-htmls/create-task-settings-for-generating-example-htmls'


const taskCycleOfBuildingHTMLFilesOfExampleMarkdowns = createTaskCycleForGeneratingHTMLsForExampleMarkdowns({
    // distCSSFileNameToUse: 'wulechuan-styles-for-html-via-markdown.default--with-toc.min.css',
    exampleOutputHTMLFilesFolderPath: './docs/examples/rendered/html',
})


export default create3HighOrderTasksUponMultipleTaskCycles({
    taskCyclesInPallarel: [ taskCycleOfBuildingHTMLFilesOfExampleMarkdowns ],

    beforeCleaningEveryThing: function() {
        console.log(`\n正在${chalk.red('删除')}所有已存在的 HTML 文件`)
    },
    beforeBuildingEveryThingOnce: function() {
        console.log(`\n正在采用默认主题${chalk.black.bgBlue('构建所有语言版本的示例文档')}的 HTML 文件`)
    },
    beforeWatchingEveryThing: function() {
        console.log(`\n正在${chalk.black.bgBlue('监视')} 文件变动`)
    },
})
