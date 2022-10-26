<script>
	import DogsNose from '../journal/dogs-nose.md';

	const markdowns = [DogsNose];
</script>

<div>
	{#each markdowns as Markdown}
		<Markdown />
	{/each}
</div>
