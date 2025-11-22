import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@repo/authorization': resolve(__dirname, '../authorization/src'),
      '@repo/core': resolve(__dirname, '../core/src'),
    },
  },
  server: {
    port: 5173,
  },
});
