import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'
import eslint from '@eslint/js'
import prettier from 'eslint-plugin-prettier/recommended'
import pluginVue from 'eslint-plugin-vue'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    plugins: {
      'typescript-eslint': tseslint.plugin,
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  prettier,
  {
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'prettier/prettier': [
        'error',
        {
          tabWidth: 2,
          useTabs: false,
          semi: false,
          singleQuote: true,
          trailingComma: 'es5',
          bracketSpacing: true,
          arrowParens: 'avoid',
        },
      ],
    }
  }
)