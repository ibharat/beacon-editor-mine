import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin(),
  ],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        app: './src/main.jsx',
      },
    },
  },
  base: 'https://cdn.jsdelivr.net/gh/WindoTech/beacon-editor/tree/main/dist/',
})
