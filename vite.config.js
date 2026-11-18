import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 8081,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
