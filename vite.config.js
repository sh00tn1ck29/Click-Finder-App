import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Click-Finder-App/',
  server: {
    proxy: {
      '/api': {
        target: 'https://appco-snowy.vercel.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
