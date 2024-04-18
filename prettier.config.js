/** @type {import("prettier").Config} */
const config = {
	arrowParens: "always",
	singleQuote: true,
	printWidth: 80,
	bracketSpacing: true,
	tabWidth: 2,
	semi: true,
	useTabs: true,
	trailingComma: "all",
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};

export default config;
