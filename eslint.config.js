import js from '@eslint/js';
import globals from 'globals';
import importX from 'eslint-plugin-import-x';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    // Global ignores
    {
        ignores: [
            'node_modules/',
            'dist/',
            'build/',
            'static/',
            'eslint.config.js',
            'prettier.config.js',
        ],
    },
    // Base ESLint recommended rules
    js.configs.recommended,
    // TypeScript ESLint rules
    ...tseslint.configs.recommended,
    // Custom configurations for JS and TS files
    {
        files: ['**/*.js', '**/*.ts'],
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
                typescript: true, // Enables TypeScript resolver (eslint-import-resolver-typescript)
            },
        },
        rules: {
            // Clean-code and standard styling rules
            'no-var': 'error',
            'prefer-const': 'error',
            'no-unused-vars': 'off', // Turn off JS rule to use TS rule
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            'no-console': 'off', // Keep console logs enabled for backend development
            eqeqeq: ['error', 'always', { null: 'ignore' }],
            'func-style': ['error', 'expression', { allowArrowFunctions: true }],
            curly: ['error', 'all'],

            // Import rules via eslint-plugin-import-x
            'import-x/no-unresolved': 'error',
            'import-x/named': 'off', // TS covers this
            'import-x/default': 'off', // TS covers this
            'import-x/namespace': 'off', // TS covers this
            'import-x/export': 'off', // TS covers this
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
);
