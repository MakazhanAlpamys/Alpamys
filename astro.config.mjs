// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://MakazhanAlpamys.github.io/',
	base: '/Alpamys/',
	integrations: [mdx(), sitemap(), react(), tailwind({ applyBaseStyles: false })],
});
