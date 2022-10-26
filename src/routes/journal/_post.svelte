<script>
	import HeaderMetatags from '../../components/HeaderMetatags.svelte';

	/** @type {string} */
	export let title;
	/** @type {string} */
	export let date;
	/** @type {string} */
	export let slug;

	const url = 'https://folkwise.io/';
	const finalTitle = `Folkwise | ${title}`;
	const description =
		'Thoughts about software development, the tech industry, and the tech talent crunch.';
</script>

<div class="prose lg:prose-lg mb-8 border-b-2 border-base-content">
	<HeaderMetatags {title} />
	<h1 class="mb-2">{title}</h1>
	<a href={'/journal/' + slug} class="link">Link</a>
	<p class="mt-0 mb-0">Published: {new Date(date).toLocaleDateString()}</p>

	<slot />

	<div class="mb-8" />
</div>
