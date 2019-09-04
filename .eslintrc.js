module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        sourceType: 'module',
    },
    rules: {
        indent: [ 'error', 4, {
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
        semi: [ 'error', 'never' ],
        'max-statements': [ 0, 32 ],
        'multiline-ternary': [ 'error', 'always-multiline' ],
        'no-console': [ 0 ],
        'new-parens': [ 0 ],
        'yoda': [ 'error', 'never' ],
        'comma-dangle': [ 'error', 'always-multiline' ],
        'func-names': [ 0, 'as-needed'],
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
                    object: false,
                }
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
    },
}
