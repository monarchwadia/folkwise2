<script>
	import '../app.css';
</script>

<!-- Body -->
<div class="mx-auto max-w-lg flex flex-col gap-8 p-8">
	<!-- Navbar -->
	<div class="navbar bg-base-100 border-2 rounded-md border-base-content">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">Folkwise.io</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal p-0">
				<li><a href="/">Item 1</a></li>
				<li>
					<a href="/">
						Parent
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
						>
					</a>
					<ul class="p-2 bg-base-100">
						<li><a href="/">Submenu 1</a></li>
						<li><a href="/">Submenu 2</a></li>
					</ul>
				</li>
				<li><a href="/">Item 3</a></li>
			</ul>
		</div>
	</div>

	<!-- Looking for work -->
	<div class="card bg-slate-900 text-base-content">
		<div class="card-body">
			<h2 class="card-title">💼 I'm actively looking for work.</h2>
			<p>
				I've specialized in React, Typescript, Node, and Java. I am looking for 100% remote,
				hands-on dev work, but I'm also <span class="italic">very</span> comfy on the business side.
				If you'd like to hire me, we should chat. You can
				<a class="link" href="/">contact me here</a>.
			</p>
		</div>
	</div>
	<main>
		<slot />
	</main>
</div>
