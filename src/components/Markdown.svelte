<script lang="ts">
	import H1 from 'src/typography/H1.svelte';

	export let title: string;
	export let url: string | undefined = undefined;
	export let content: string;

	const proseCss = `prose text-base-content
		prose-h1:text-2xl

		prose-h2:text-xl

		prose-h3:text-lg 
			prose-h3:font-bold

		prose-h4:text-lg 
			prose-h4:font-normal

		prose-h5:text-md
			prose-h5:font-bold
		
		prose-h6:text-md
			prose-h6:underline
	`;
</script>

<div class="flex flex-col gap-4">
	<H1>
		{#if url}
			<a class="link" href={url}>{title}</a>
		{:else}
			{title}
		{/if}
	</H1>
	<div class={proseCss}>
		{@html content}
	</div>
</div>
