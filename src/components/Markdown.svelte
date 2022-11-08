<script lang="ts">
	export let title: string;
	export let url: string | undefined = undefined;
	export let content: string;
</script>

<div class="flex flex-col gap-10">
	<h1 class="text-3xl">
		{#if url}
			<a class="link" href={url}>{title}</a>
		{:else}
			{title}
		{/if}
	</h1>
	<div class="prose prose-xl">
		{@html content}
	</div>
</div>
