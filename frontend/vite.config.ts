// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/motherina_project/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
