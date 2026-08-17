import js from '@eslint/js';
import globals from 'globals';
import importX from 'eslint-plugin-import-x';
import prettierConfig from 'eslint-config-prettier';

export default [
    // Global ignores
    {
        ignores: ['node_modules/', 'dist/', 'build/', 'static/', 'eslint.config.js'],
    },
    // Base ESLint recommended rules
    js.configs.recommended,
    // Custom configurations for JS files
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.node,
            },
        },
        plugins: {
            'import-x': importX,
        },
        settings: {
            'import-x/resolver': {
                node: true,
            },
        },
        rules: {
            // Clean-code and standard styling rules
            'no-var': 'error',
            'prefer-const': 'error',
            'no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
            'no-console': 'off', // Keep console logs enabled for backend development
            eqeqeq: ['error', 'always', { null: 'ignore' }],
            'func-style': ['error', 'expression', { allowArrowFunctions: true }],
            curly: ['error', 'all'],

            // Import rules via eslint-plugin-import-x
            'import-x/no-unresolved': 'error',
            'import-x/named': 'error',
            'import-x/default': 'error',
            'import-x/namespace': 'error',
            'import-x/export': 'error',
            'import-x/order': [
                'error',
                {
                    groups: [
                        'builtin', // Node.js built-ins (e.g. fs, path, crypto)
                        'external', // Third-party npm packages (e.g. express, sequelize)
                        'internal', // Absolute imports / paths inside the project
                        ['parent', 'sibling', 'index'], // Relative imports
                    ],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
            'import-x/newline-after-import': 'error',
        },
    },
    // Disable ESLint rules that conflict with Prettier
    prettierConfig,
];
