<script>
	import HeaderMetatags from 'src/components/HeaderMetatags.svelte';
	import '../app.css';
	import Navbar from './Navbar.svelte';
</script>

<!-- Body -->
<div class="flex flex-row gap-8 p-8 justify-center">
	<div class="flex flex-col gap-8 w-full max-w-xl">
		<HeaderMetatags />
		<!-- Navbar -->
		<Navbar />

		<main>
			<slot />
		</main>
	</div>
	<!-- <div class="max-w-md sticky top-0">
		<SalesCard />
	</div> -->
</div>
