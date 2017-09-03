// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        "indent": [
            0,
            4
        ],
        "linebreak-style": [
            0,
            "windows"
        ],
        "semi": [0],
        "space-before-function-paren": [0, "always"],
        "no-use-before-define": 0,
        "no-undef": 0,
        "no-unused-vars": 0,
        "quotes": [
            1,
            "single"
        ],
        "no-console": 0,
        'no-unused-expressions': 0,
        'no-useless-escape': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
