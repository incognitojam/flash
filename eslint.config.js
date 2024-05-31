import globals from 'globals'
import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import solid from 'eslint-plugin-solid/configs/recommended.js'

export default [
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    ...solid,
  },
  eslintConfigPrettier,
]
