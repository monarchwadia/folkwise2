import { sveltekit } from '@sveltejs/kit/vite';
import { viteStaticCopy } from "vite-plugin-static-copy"
import { watchMarkdown } from "./watchMarkdown.plugin.vite";
import type { UserConfig } from 'vite';

const config: UserConfig = {
	resolve: {
		extensions: [".svelte", ".ts", ".js", ".md"]
	},
	plugins: [
		watchMarkdown(),
		sveltekit(),
		viteStaticCopy({
			targets: [
				{ src: 'journal', dest: '../..' }, // this path is carefully set to be relative to the usage of markdown service
				{ src: 'patterns', dest: '../..' }, // this path is carefully set to be relative to the usage of markdown service
			]
		})
	]
};

export default config;
