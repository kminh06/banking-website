import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // experimental: {
  //   viewTransitions: true,
  // },
  output: 'hybrid',
  site: 'https://www.thomasinvestmentbank.com',
  integrations: [tailwind(), compress(), robotsTxt(), sitemap(), react({
    include: ['**/react/*']
  })],
  adapter: vercel()
});