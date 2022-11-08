<script lang="ts">
	export let title: string;
	export let content: string;
</script>

<div class="flex flex-col gap-10">
	<h1 class="text-3xl ">{title}</h1>
	<div class="prose">
		{@html content}
	</div>
</div>
