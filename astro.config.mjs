import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://eorama.github.io',
  base: '/PuraChata',
  integrations: [react(), tailwind()],
  build: {
    format: 'file'
  }
});