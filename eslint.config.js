import globals from 'globals'
import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import solid from 'eslint-plugin-solid/configs/recommended.js'

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2017,
      },
    },
  },
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx}'],
    ...solid,
  },
  eslintConfigPrettier,
]
