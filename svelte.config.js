import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md', '.svx'],
    preprocess: [
        preprocess(),
        mdsvex({
            extensions: ['.md', '.svx'],
            layout: 'src/routes/journal/_post.svelte'
        })
    ],
    kit: {
        adapter: adapter(),
				alias: {
					'src': './src',
				}
    },
};

export default config;
