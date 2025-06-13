import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import inject from '@rollup/plugin-inject';

export default defineConfig({
  base: '/', // IMPORTANT: Set base path for Netlify
  plugins: [
    react(),
    inject({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
});
