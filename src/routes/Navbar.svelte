<script>
	const links = [
		{ href: '/articles', label: 'Articles' },
		{ href: '/case-studies', label: 'Case Studies' },
		{ href: '/about', label: 'About' }
	];
</script>

<div
	style="box-shadow: 0px -40px 30px 60px hsl(var(--b1))"
	class="navbar bg-base-100 border-2 rounded-md border-base-content sticky top-8 shadow-neutral"
>
	<div class="flex-1">
		<a href="/" class=" p-2 text-xl flex flex-col">
			<p class="text-2xl font-bold">Folkwise.io</p>
			<p class="text-xs">people + programming</p>
		</a>
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
