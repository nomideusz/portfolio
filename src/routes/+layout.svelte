<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../styles/global.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Web Developer Portfolio</title>
</svelte:head>

<div class="app">
	<header>
		<nav>
			<a href="/" class="logo">Portfolio</a>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/projects">Projects</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</nav>
	</header>

	<main>
		{@render children()}
	</main>

	<footer>
		<p>&copy; {new Date().getFullYear()} - Built with SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	header {
		background: var(--color-bg-secondary);
		border-bottom: 1px solid var(--color-border);
		padding: 1rem 2rem;
	}

	nav {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 700;
		text-decoration: none;
		color: var(--color-text);
	}

	nav ul {
		display: flex;
		gap: 2rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav a {
		color: var(--color-text);
		text-decoration: none;
		transition: color 0.2s;
	}

	nav a:hover {
		color: var(--color-primary);
	}

	main {
		flex: 1;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		padding: 2rem;
	}

	footer {
		background: var(--color-bg-secondary);
		border-top: 1px solid var(--color-border);
		padding: 2rem;
		text-align: center;
		color: var(--color-text-secondary);
	}
</style>
