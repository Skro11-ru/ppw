/** @type {import("prettier").Config} */
const config = {
	arrowParens: 'always',
	singleQuote: true,
	printWidth: 80,
	bracketSpacing: true,
	tabWidth: 2,
	semi: true,
	useTabs: true,
	trailingComma: 'all',
	plugins: [
		'prettier-plugin-astro',
		'prettier-plugin-tailwindcss',
		'prettier-plugin-svelte',
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
				endingPosition: 'relative',
			},
		},
		{
			files: '*.svelte',
			options: {
				parser: 'svelte',
				svelteSortOrder: 'options-markup-scripts-styles',
				svelteStrictMode: false,
				svelteBracketNewLine: true,
				svelteIndentScriptAndStyle: true,
				svelteAllowShorthand: true,
			},
		},
	],
};

export default config;
