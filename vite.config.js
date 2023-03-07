import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

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
})
