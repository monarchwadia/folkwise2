<script lang="ts">
	import Markdown from 'src/components/Markdown.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const markdown = data.markdown;
</script>

<div class="flex flex-col gap-4">
	<div class="badge badge-success badge-lg">Journal</div>
	<Markdown title={markdown.frontmatter.title} content={markdown.content} />
</div>
