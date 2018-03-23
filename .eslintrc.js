module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: [
        // 'react',
    ],
    globals: {
        // React: true,
        // ReactDOM: true,
        // mountNode: true,
    },
    rules: {
        indent: [ 'error', 'tab', {
            SwitchCase: 1,
            MemberExpression: 1,
        }],
        'no-trailing-spaces': [ 'error', {
            skipBlankLines: false,
            ignoreComments: false,
        }],
        'linebreak-style':[ 0, 'unix' ],
        'no-param-reassign': 0,
        quotes: [ 'error', 'single' ],
        semi: [ 'error', 'always' ],
        'max-statements': [ 'warn', 32 ],
        'multiline-ternary': [ 'error', 'always-multiline' ],
        'no-console': [ 0 ],
        'new-parens': [ 0 ],
        'yoda': [ 'error', 'never' ],
        'comma-dangle': [ 'error', 'always-multiline' ],
        'func-names': [ 0, 'as-needed'],
        'no-plusplus': 0,
        'no-unused-vars': 'error',
        'no-return-assign': 'error',
        'no-new-func': 'error',
        'no-eval': 'error',
        'no-implied-eval': 'error',
        'prefer-const': 'error',
        'arrow-body-style': 0,
        'prefer-destructuring': [ 'error',
            {
                VariableDeclarator: {
                    array: true,
                    'object': true,
                },
                AssignmentExpression: {
                    array: true,
                    object: true,
                }
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
    },
};
