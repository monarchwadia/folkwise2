<script lang="ts">
	import { markdowns } from './../markdowns';
	import { page } from '$app/stores';
	import { browser, dev, prerendering } from '$app/environment';
	import { onMount } from 'svelte';

	let ref: any;

	// find the markdown
	const thisMarkdown = markdowns.find((m) => {
		return m.slug === $page.params.slug;
	});

	// get the render function
	const thisMarkdownRender = thisMarkdown && thisMarkdown.render;

	// browser-only behaviour
	onMount(() => {
		if (thisMarkdownRender && browser) {
			new thisMarkdownRender({ target: ref });
		}
	});
</script>

<div>
	<div id="out" bind:this={ref}>
		<!-- This is backend mode... don't do it in the browser. -->
		{#if thisMarkdownRender && !browser}
			{@html thisMarkdownRender.render && thisMarkdownRender.render().html}
		{/if}
	</div>
</div>
