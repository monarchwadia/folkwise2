<script lang="ts">
	export let val: number = 0;
</script>

<div class="flex flex-row">
	{#each Array(val) as _, i}
		★
	{/each}
</div>
