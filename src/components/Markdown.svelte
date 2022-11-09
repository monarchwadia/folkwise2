<script lang="ts">
	export let title: string;
	export let url: string | undefined = undefined;
	export let content: string;
</script>

<div class="flex flex-col gap-4">
	<h1 class="text-2xl font-bold">
		{#if url}
			<a class="link" href={url}>{title}</a>
		{:else}
			{title}
		{/if}
	</h1>
	<div class="prose text-base-content">
		{@html content}
	</div>
</div>
