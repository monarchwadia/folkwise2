<script lang="ts">
	import Markdown from 'src/components/Markdown.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { markdowns } = data;
</script>

<div class="flex flex-col gap-10">
	{#each markdowns as md}
		<Markdown title={md.frontmatter.title} content={md.content} url={`/journal/${md.slug}`} />
		<hr class="border-base-content" />
	{/each}
</div>
