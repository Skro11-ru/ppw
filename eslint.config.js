import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config} */
export default [
	eslint.configs.recommended,
	...tsEslint.configs.recommended,
	eslintPluginUnicorn.configs['flat/recommended'],
	...eslintPluginAstro.configs['flat/recommended'],
	{
		rules: {
			'no-console': [
				'error',
				{
					allow: ['info', 'error', 'clear', 'warn', 'table', 'time', 'timeEnd'],
				},
			],
			'max-len': [2, 120],
			'import/no-unresolved': 'off',
			'import/no-extraneous-dependencies': 'off',
			'unicorn/prefer-module': 'off',
			'unicorn/no-array-for-each': 'off',
			'no-shadow': 'off',
			'@typescript-eslint/no-shadow': ['error'],
			'unicorn/filename-case': [
				'error',
				{
					case: 'camelCase',
					ignore: ['API'],
				},
			],
			'unicorn/prevent-abbreviations': [
				'error',
				{
					replacements: {
						arg: false,
						args: false,
						e: false,
						res: false,
						cmd: false,
						ref: false,
						refs: false,
						dev: false,
						prod: false,
						len: false,
						nof: false,
						env: false,
						btn: false,
						acc: false,
						err: false,
						req: false,
						val: false,
						prev: false,
						i: false,
						j: false,
						props: false,
						obj: false,
						str: false,
						mod: false,
					},
				},
			],
			'import/prefer-default-export': 'off',
			'unicorn/no-new-array': 'off',
			'unicorn/no-useless-undefined': 'off',
			'no-underscore-dangle': 'off',
		},
	},
	{
		files: ['**/*.astro'],
		rules: {
			'unicorn/filename-case': [
				'error',
				{
					case: 'pascalCase',
					ignore: [''],
				},
			],
		},
	},
];
