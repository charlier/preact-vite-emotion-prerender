import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
	resolve: {
		alias: {
			react: '@preact/compat',
			'react-dom': '@preact/compat'
		}
	},
	plugins: [
		preact({
			prerender: {
				enabled: true,
				renderTarget: '#app'
			},
		}),
	],
});
