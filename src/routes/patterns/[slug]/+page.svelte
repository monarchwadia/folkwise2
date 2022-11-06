<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let ref: any;
	let content = '';

	// find the markdown

	$: content = data?.markdown?.content || '';

	// // browser-only behaviour
	onMount(() => {
		ref.innerHTML = content;
	});
</script>

<div>
	<div id="out" bind:this={ref}>
		<!-- This is backend mode... don't do it in the browser. -->
		{@html content}
	</div>
</div>
