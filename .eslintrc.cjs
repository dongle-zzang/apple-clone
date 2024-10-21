/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	env: {
		node: true,
	},
	parser: '@typescript-eslint/parser',

	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
		'prettier',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
	],
	rules: {
		'vue/no-multiple-template-root': 'off',
		'vue/comment-directive': 'off',
		'vue/multi-word-component-names': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
};