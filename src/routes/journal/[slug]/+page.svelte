<script lang="ts">
	import { page } from '$app/stores';
	import DogsNose from '../../../journal/dogs-nose.md';

	const markdowns = [DogsNose];

	const thisMarkdown = markdowns.find((m) => m.slug === $page.params.slug);
</script>

<div>
	{$page.params.slug}
	{#each markdowns as Markdown}
		<Markdown />
	{/each}
</div>
