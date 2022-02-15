module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb-base'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        indent: 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-unused-vars': 'off',
        quotes: ['error'],
        'no-unexpected-multiline': 'error',
        'newline-per-chained-call': 'error',
    },
};
