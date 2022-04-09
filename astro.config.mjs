import preact from '@astrojs/preact';
import { defineConfig } from 'astro/config'

export default defineConfig({
	root: '.',
	srcDir: './src',
	outDir: './dist',
	publicDir: './public',
	site: 'http://hanascode.dev',
	server: {
		port: 3000,
	},
	integrations: [ preact() ],
});
