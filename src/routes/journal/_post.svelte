<script>
	/** @type {string} */
	export let title;
	/** @type {string} */
	export let date;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<p>Published: {date}</p>

<slot />
