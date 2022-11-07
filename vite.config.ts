import { sveltekit } from '@sveltejs/kit/vite';
import { viteStaticCopy } from "vite-plugin-static-copy"
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
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
