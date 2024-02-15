import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true
  },
  output: 'hybrid',
  site: 'https://www.thomasinvestmentbank.com',
  integrations: [tailwind(), compress(), robotsTxt(), sitemap(), vercel(), react()]
});