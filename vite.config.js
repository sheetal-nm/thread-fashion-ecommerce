import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/thread-fashion-ecommerce/',
  plugins: [react(), tailwindcss()],
});
