import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    rules: {
      'no-debugger': 'warn',

      '@typescript-eslint/ban-types': 'off',

      '@typescript-eslint/ban-ts-comment': [
        'off',
        {
          'ts-expect-error': false,
        },
      ],

      '@typescript-eslint/no-explicit-any': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/require-explicit-emits': 'off',
      '@typescript-eslint/no-loss-of-precision': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'vue/v-on-event-hyphenation': 'off',
      'no-console': 'off',
      'no-undef': 'off',
    }
  }
)