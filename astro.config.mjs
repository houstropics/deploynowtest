import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import tunnel from "astro-tunnel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), tunnel()]
});