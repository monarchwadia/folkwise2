<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	{#each data.markdowns as markdown}
		<a href={`patterns/${markdown.slug}`} class="link">
			{markdown.frontmatter.title}
		</a>
	{/each}
</div>
