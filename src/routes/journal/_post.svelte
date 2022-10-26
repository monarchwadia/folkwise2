<script>
	/** @type {string} */
	export let title;
	/** @type {string} */
	export let date;
	/** @type {string} */
	export let slug;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="prose lg:prose-lg mb-8 border-b-2 border-base-content">
	<h1 class="mb-2">{title}</h1>
	<a href={'/journal/' + slug} class="link">Link</a>
	<p class="mt-0 mb-0">Published: {new Date(date).toLocaleDateString()}</p>

	<slot />

	<div class="mb-8" />
</div>
