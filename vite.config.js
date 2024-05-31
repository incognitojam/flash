/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from 'node:path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import svgr from 'vite-plugin-svgr'
// import devtools from 'solid-devtools/vite'

export default defineConfig({
  plugins: [
    solidPlugin(),
    svgr(),
    // uncomment for solid-devtools
    // see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    // devtools(),
  ],
  server: {
    port: 3000,
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['node_modules/@testing-library/jest-dom/vitest'],
    // if you have few tests, try commenting this
    // out to improve performance:
    isolate: false,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    conditions: ['development', 'browser'],
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
