import { sveltekit } from '@sveltejs/kit/vite';
import { viteStaticCopy } from "vite-plugin-static-copy"
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		viteStaticCopy({
			targets: [
				{ src: 'journal', dest: '.' },
				{ src: 'patterns', dest: '.' },
			]
		})
	]
};

export default config;
