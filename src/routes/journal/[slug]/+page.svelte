<script lang="ts">
	import { markdowns } from './../markdowns';
	import { page } from '$app/stores';

	const thisMarkdown = markdowns.find((m) => {
		console.log(m.slug, $page.params.slug);
		return m.slug === $page.params.slug;
	});

	const thisMarkdownRender = thisMarkdown?.render;
	console.log(thisMarkdownRender.render);
</script>

<div>
	{#if thisMarkdownRender}
		{@html thisMarkdownRender.render().html}
	{/if}
</div>
