<script>
	import HeaderMetatags from '../components/HeaderMetatags.svelte';
	import { markdowns } from './journal/markdowns';
</script>

<div>
	{#each markdowns as Markdown}
		<Markdown.render />
	{/each}
	<HeaderMetatags title="" />
</div>
