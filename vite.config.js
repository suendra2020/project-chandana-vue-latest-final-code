// // vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  // base: '/', 
  base: '/',
  plugins: [vue()],
  build: {
    assetsDir: 'assets',
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})



