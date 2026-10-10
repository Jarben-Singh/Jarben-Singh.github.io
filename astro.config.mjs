import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Sitio de usuario en GitHub Pages: https://jarben-singh.github.io (sin `base`)
export default defineConfig({
  site: 'https://jarben-singh.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
