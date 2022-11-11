<script lang="ts">
	import type { PageData } from './$types';
	import Markdown from 'src/components/Markdown.svelte';

	export let data: PageData;
	const { markdown } = data;
	const tags = markdown.tags;
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-row gap-2 flex-wrap">
		{#each tags as tag}
			<div class="badge badge-lg">{tag}</div>
		{/each}
	</div>
	<div class="flex flex-col gap-4">
		<Markdown title={markdown.frontmatter.title} content={markdown.content} />
	</div>
</div>
