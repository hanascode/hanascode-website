import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import vercel from "@astrojs/vercel/edge";

export default defineConfig({
	adapter: vercel(),
	integrations: [ preact() ],
	outDir: './dist',
	output: 'server',
	publicDir: './public',
	root: '.',
	server: {
		port: 3000,
	},
	site: 'http://hanascode.dev',
	srcDir: './src',
});
