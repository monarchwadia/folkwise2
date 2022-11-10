<script lang="ts">
	import type { Markdown } from 'src/services/MarkdownService';
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

<div>
	{#each Object.entries(categorized) as [key, markdowns]}
		<h1 class="text-2xl font-bold">{capitalize(key)}</h1>
		<ul class="list-disc">
			{#each markdowns as markdown}
				<li class="link">
					<a href={`/knowledge-base/${markdown.slug}`}>{markdown.frontmatter.title}</a>
				</li>
			{/each}
		</ul>
	{/each}
</div>
