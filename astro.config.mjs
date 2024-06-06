import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import icon from 'astro-icon';
import favicons from 'astro-favicons';
import sitemap from '@astrojs/sitemap';

/** @type {import('astro').AstroUserConfig} */
// https://astro.build/config
export default defineConfig({
  site: 'https://snpro-photo.ru',
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		svelte(),
		icon({
			include: {
				// Include only three `mdi` icons in the bundle
				mdi: [
					'chevron-down',
					'close-circle-outline',
					'check-circle-outline',
					'phone',
					'email-outline',
				],
				cib: ['instagram', 'telegram', 'whatsapp', 'vk'],
				fa: ['phone', 'envelope-o'],
				// Include all `uis` icons
				// uis: ['*']
			},
		}),
		favicons({
			masterPicture: './public/logo-min--black.svg',
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
			faviconsDarkMode: false,
			// appleStatusBarStyle: "black-translucent",
		}),
		sitemap(),
	],
});
