<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../styles/global.css';

	let { children } = $props();
	let scrolled = $state(false);

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', () => {
			scrolled = window.scrollY > 50;
		});
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<link rel="icon" href="/favicon.png" type="image/png" />
	<title>Bartosz Dymet - Full-Stack Web Developer</title>
</svelte:head>

<div class="app">
	<header class:scrolled>
		<nav class="container">
			<a href="/" class="logo">
				<span class="gradient-text">Portfolio</span>
			</a>
			<ul class="nav-links">
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/projects">Projects</a></li>
				<li><a href="/contact" class="btn btn-primary">Contact</a></li>
			</ul>
		</nav>
	</header>

	<main>
		{@render children()}
	</main>

	<footer>
		<div class="container footer-content">
			<div class="footer-section">
				<h3 class="gradient-text">Let's Build Something Amazing</h3>
				<p>Open to exciting opportunities and collaborations.</p>
			</div>
			<div class="footer-links">
				<div class="link-group">
					<h4>Navigation</h4>
					<a href="/">Home</a>
					<a href="/about">About</a>
					<a href="/projects">Projects</a>
					<a href="/contact">Contact</a>
				</div>
				<div class="link-group">
					<h4>Connect</h4>
					<a href="https://github.com/nomideusz" target="_blank" rel="noopener noreferrer">GitHub</a>
					<a href="mailto:b.dymet@gmail.com">Email</a>
					<a href="tel:+48602846912">Phone</a>
				</div>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="container">
				<p>&copy; {new Date().getFullYear()} - Built with SvelteKit & Svelte 5</p>
			</div>
		</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background: var(--color-bg);
		border-bottom: var(--border-medium) solid transparent;
		padding: 1rem 0;
		transition: all var(--transition-base);
	}

	header.scrolled {
		background: var(--color-bg);
		border-bottom: var(--border-medium) solid var(--color-border);
		box-shadow: var(--shadow-md);
		padding: 0.75rem 0;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 700;
		text-decoration: none;
		color: var(--color-text);
		transition: transform var(--transition-fast);
	}

	.logo:hover {
		transform: scale(1.05);
	}

	.nav-links {
		display: flex;
		gap: var(--space-lg);
		list-style: none;
		align-items: center;
		margin: 0;
		padding: 0;
	}

	.nav-links a {
		color: var(--color-text);
		text-decoration: none;
		font-weight: 500;
		transition: color var(--transition-fast);
		position: relative;
	}

	.nav-links a:not(.btn)::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 0;
		height: 3px;
		background: var(--color-primary);
		transition: width var(--transition-base);
	}

	.nav-links a:not(.btn):hover::after {
		width: 100%;
		background: var(--color-secondary);
	}

	main {
		flex: 1;
		width: 100%;
		margin-top: 80px;
	}

	footer {
		background: var(--color-bg-secondary);
		border-top: var(--border-thick) solid var(--color-border);
		margin-top: var(--space-3xl);
	}

	.footer-content {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: var(--space-3xl);
		padding: var(--space-3xl) var(--space-lg);
	}

	.footer-section h3 {
		font-size: 1.5rem;
		margin-bottom: var(--space-sm);
	}

	.footer-section p {
		color: var(--color-text-secondary);
		max-width: 400px;
	}

	.footer-links {
		display: flex;
		gap: var(--space-3xl);
	}

	.link-group {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.link-group h4 {
		color: var(--color-text);
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: var(--space-xs);
		font-weight: 600;
	}

	.link-group a {
		color: var(--color-text-secondary);
		text-decoration: none;
		transition: color var(--transition-fast);
		font-size: 0.95rem;
	}

	.link-group a:hover {
		color: var(--color-primary);
	}

	.footer-bottom {
		border-top: var(--border-medium) solid var(--color-border);
		padding: var(--space-lg);
		text-align: center;
	}

	.footer-bottom p {
		color: var(--color-text-tertiary);
		font-size: 0.875rem;
		margin: 0;
	}

	@media (max-width: 768px) {
		.nav-links {
			gap: var(--space-md);
		}

		.nav-links a.btn {
			padding: var(--space-xs) var(--space-md);
			font-size: 0.875rem;
		}

		.footer-content {
			grid-template-columns: 1fr;
			gap: var(--space-xl);
		}

		.footer-links {
			gap: var(--space-xl);
		}
	}
</style>
