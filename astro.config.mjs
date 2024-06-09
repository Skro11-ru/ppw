import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import icon from 'astro-icon';
import favicons from 'astro-favicons';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './src/utils/readTime.ts';

/** @type {import('astro').AstroUserConfig} */
// https://astro.build/config
export default defineConfig({
	site: 'https://snpro-photo.ru',
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  },
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
          'chevron-left'
				],
				cib: ['instagram', 'telegram', 'whatsapp', 'vk'],
				fa: ['phone', 'envelope-o'],
				carbon: ['calendar','time','categories'],
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

    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        experimentalThemes: {
          light: 'vitesse-light',
          dark: 'material-theme-palenight',
        },
        wrap: true
      },
      drafts: true
    }),
	],
});
