<script>
	import { markdowns } from './journal/markdowns';
</script>

<div>
	{#each markdowns as Markdown}
		<Markdown.render />
	{/each}
</div>
