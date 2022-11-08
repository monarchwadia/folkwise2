<script lang="ts">
	import type { PageData } from './$types';
	import Markdown from 'src/components/Markdown.svelte';

	export let data: PageData;
	const { markdown } = data;
</script>

<Markdown
	title={markdown.frontmatter.title}
	content={markdown.content}
	url={'/patterns/' + markdown.slug}
/>
