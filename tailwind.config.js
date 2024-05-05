/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			screens: {
				xs: '480px',
				sm: '768px',
				md: '1024px',
				lg: '1152px',
				xl: '1440px',
			},
			colors: {
				primary: '#fff',
				accent: '#F74808',
			},
			fontFamily: {
				sans: ['Graphik', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
			},
			variables: {
				'height-navbar': '80px',
				'bg-page': '#fff',
			},
		},
	},
	plugins: [
		/** @type {import('tailwindcss/types/config').PluginCreator} */
		({ addUtilities }) => {
			addUtilities({
				'.bg-page': {
					'background-color': 'var(--bg-color)',
					color: 'var(--primary-color)',
				},
			});
		},
	],
	darkMode: ['selector', '.dark'],
};
