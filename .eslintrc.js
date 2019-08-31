module.exports = {
    root: true,
    env: {
        'react-native/react-native': true,
    },
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
        'plugin:prettier/recommended',
        'eslint-config-prettier',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'react-native', 'prettier', 'json'],
    rules: {
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': 2,
        'react-native/no-raw-text': 2,
        'no-use-before-define': ['error', { functions: true, classes: true, variables: false }],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'all',
                useTabs: false,
                tabWidth: 4,
                printWidth: 100,
            },
        ],
    },
    settings: {
        'import/resolver': {
            alias: [['@', './src']],
        },
    },
};
