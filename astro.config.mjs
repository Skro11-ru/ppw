import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import icon from 'astro-icon';

/** @type {import('astro').AstroUserConfig} */
// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({ applyBaseStyles: false }),
		svelte(),
		icon({
			include: {
				// Include only three `mdi` icons in the bundle
				mdi: ['chevron-down', 'close-circle-outline', 'check-circle-outline'],
				cib: ['instagram', 'telegram', 'whatsapp', 'vk'],
				// Include all `uis` icons
				// uis: ['*']
			},
		}),
	],
});
