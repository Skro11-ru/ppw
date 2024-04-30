import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from "@astrojs/svelte";
import icon from "astro-icon";

/** @type {import('astro').AstroUserConfig} */
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), icon({
    include: {
      // Include only three `mdi` icons in the bundle
      mdi: ['instagram'],
      // Include all `uis` icons
      // uis: ['*']
    }
  })]
});
