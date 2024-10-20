/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/vitest-setup.js',
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules', '.eslintrc.js'],
    },
  },
})
