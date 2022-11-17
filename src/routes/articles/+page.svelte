<script lang="ts">
	import type { Markdown } from 'src/services/MarkdownService';
	import H1 from 'src/typography/H1.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const categorized: Record<string, Markdown[]> = {};

	data.markdowns.forEach((m) => {
		categorized[m.frontmatter.category] ||= [];
		categorized[m.frontmatter.category].push(m);
	});

	// capitalze the first letter of a string
	const capitalize = (s: string) => s[0].toUpperCase() + s.slice(1);
</script>

<div class="flex flex-col gap-6">
	<H1>Articles</H1>
	<div>
		<p>A growing repository of articles on a variety of topics, organized by category.</p>
		{#each Object.entries(categorized) as [key, markdowns]}
			<h2 class="text-xl font-bold my-2">{capitalize(key)}</h2>
			{#each markdowns as markdown}
				<p>
					<a class="hover:link" href={`/articles/${markdown.slug}`}>
						<span class="text-zinc-700">⧉</span>
						{markdown.frontmatter.title}
					</a>
				</p>
			{/each}
		{/each}
	</div>
</div>
