import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import icon from 'astro-icon';
import favicons from "astro-favicons";

/** @type {import('astro').AstroUserConfig} */
// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({ applyBaseStyles: false }),
		svelte(),
		icon({
			include: {
				// Include only three `mdi` icons in the bundle
				mdi: ['chevron-down', 'close-circle-outline', 'check-circle-outline','phone','email-outline'],
				cib: ['instagram', 'telegram', 'whatsapp', 'vk'],
				// Include all `uis` icons
				// uis: ['*']
			},
		}),
    favicons({
      masterPicture: "./src/favicon.svg",
      // emitAssets: true,
      // appName: "",
      // appShortName: "",
      // appDescription: "",
      // dir:"auto",
      // lang: "en-US",
      // display: "standalone",
      // orientation: "any",
      // start_url: "/",
      // background: "#fff",
      // theme_color: "#fff",
      // faviconsDarkMode: true,
      // appleStatusBarStyle: "black-translucent",
    }),
	],
});
