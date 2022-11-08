<script lang="ts">
	import type { PageData } from './$types';
	import Markdown from 'src/components/Markdown.svelte';

	export let data: PageData;
</script>

<div>
	{#each data.markdowns as markdown}
		<Markdown
			title={markdown.frontmatter.title}
			content={markdown.content}
			url={'/patterns/' + markdown.slug}
		/>
	{/each}
</div>
