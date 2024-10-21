import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
	plugins: [
		vue(),
		Components({
			dirs: ['src/components'],
			directoryAsNamespace: true,
			resolvers: [
				componentName => {
					const [prefix, name] = componentName.split('_');
					if (prefix && name) {
						return {
							importName: name,
							from: `src/components/${prefix}/${name}.vue`,
						};
					}
				},
				ElementPlusResolver(),
			],
		}),
		AutoImport({
			imports: ['vue', 'vue-router'],
			resolvers: [ElementPlusResolver()],
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
