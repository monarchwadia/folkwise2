<script lang="ts">
	import type { PageData } from './$types';
	import Markdown from 'src/components/Markdown.svelte';

	export let data: PageData;
	const { markdown } = data;
</script>

<div class="flex flex-col gap-4">
	<div class="badge badge-info badge-lg">Pattern</div>
	<Markdown title={markdown.frontmatter.title} content={markdown.content} />
</div>
