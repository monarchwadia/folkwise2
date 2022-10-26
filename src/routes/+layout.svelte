<script>
	import HeaderMetatags from '../components/HeaderMetatags.svelte';
	import '../app.css';

	const links = [
		{ href: '/', label: 'Journal' },
		{ href: '/services', label: 'Services' },
		{ href: '/about', label: 'About' }
	];
</script>

<!-- Body -->
<div class="mx-auto max-w-lg flex flex-col gap-8 p-8">
	<HeaderMetatags />
	<!-- Navbar -->
	<div class="navbar bg-base-100 border-2 rounded-md border-base-content">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">Folkwise.io</a>
		</div>
		<div class="flex-none hidden sm:block">
			<ul class="menu menu-horizontal p-0">
				{#each links as link}
					<li>
						<a href={link.href}>{link.label}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex-none sm:hidden dropdown">
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				style={'--tw-translate-x: -150px'}
			>
				{#each links as link}
					<li>
						<a href={link.href}>{link.label}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<!-- Looking for work -->
	<div class="card bg-slate-900 text-base-content">
		<div class="card-body">
			<h2 class="card-title">💼 I'm looking for work.</h2>
			<p>
				I'm looking for 100% remote, hands-on programming work. If you'd like to hire me,
				<a
					class="link"
					href="https://linkedin.com/in/monarchwadia"
					target="_blank"
					rel="noopener noreferrer nofollow">let's get in touch</a
				>.
			</p>
		</div>
	</div>
	<main>
		<slot />
	</main>
</div>
