<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../styles/global.css';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	let { children } = $props();
	let scrolled = $state(false);
	let mobileMenuOpen =	$state(false);
	let theme = $state('light');

	onMount(() => {
		// Check for saved theme preference or system preference
		const savedTheme = localStorage.getItem('theme');
		const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
			theme = 'dark';
			document.documentElement.classList.add('dark');
		} else {
			theme = 'light';
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
		}
	});

	function toggleTheme() {
		if (theme === 'light') {
			theme = 'dark';
			document.documentElement.classList.add('dark');
			document.documentElement.classList.remove('light');
			localStorage.setItem('theme', 'dark');
		} else {
			theme = 'light';
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
			localStorage.setItem('theme', 'light');
		}
	}

	afterNavigate(() => {
		revealOnScroll();
	});

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', () => {
			scrolled = window.scrollY > 50;
			revealOnScroll();
		});

		// Initial check on load
		setTimeout(revealOnScroll, 100);
	}

	function revealOnScroll() {
		const reveals = document.querySelectorAll('.scroll-reveal');

		reveals.forEach(element => {
			const elementTop = element.getBoundingClientRect().top;
			const elementVisible = 150;

			if (elementTop < window.innerHeight - elementVisible) {
				element.classList.add('revealed');
			}
		});
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<link rel="icon" href="/favicon.png" type="image/png" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
	<title>Bartosz Dymet - Full-Stack Web Developer</title>
	<script>
		// Prevent flash of wrong theme
		(function() {
			try {
				var localTheme = localStorage.getItem('theme');
				var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
				if (localTheme === 'dark' || (!localTheme && supportDarkMode)) {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.add('light');
				}
			} catch (e) {}
		})();
	</script>
</svelte:head>

<div class="app">
	<header class:scrolled>
		<nav class="container">
			<a href="/" class="logo" onclick={closeMobileMenu}>
				<span class="gradient-text">Portfolio</span>
			</a>

			<button class="mobile-menu-toggle" onclick={toggleMobileMenu} aria-label="Toggle mobile menu">
				<span class="hamburger" class:open={mobileMenuOpen}></span>
			</button>

			<ul class="nav-links" class:mobile-open={mobileMenuOpen}>
				<li><a href="/" onclick={closeMobileMenu}>Home</a></li>
				<li><a href="/about" onclick={closeMobileMenu}>About</a></li>
				<li><a href="/projects" onclick={closeMobileMenu}>Projects</a></li>
				<li><a href="/contact" class="btn btn-primary" onclick={closeMobileMenu}>Contact</a></li>
				<li class="theme-toggle-li">
					<button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle theme">
						{#if theme === 'light'}
							🌙
						{:else}
							☀️
						{/if}
					</button>
				</li>
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
					<a href="https://www.instagram.com/rietarius" target="_blank" rel="noopener noreferrer">Instagram</a>
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

	<!-- Back to top button -->
	{#if scrolled}
		<button
			class="back-to-top"
			onclick={scrollToTop}
			aria-label="Scroll to top"
		>
			<span class="arrow-up">↑</span>
		</button>
	{/if}
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
		background: var(--color-surface);
		border-bottom: var(--border-thick) solid var(--color-primary);
		padding: 1rem 0;
		transition: all var(--transition-base);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	header::before {
		content: '';
		position: absolute;
		bottom: -7px;
		left: 0;
		right: 0;
		height: 7px;
		background: linear-gradient(90deg,
			var(--color-primary) 0%,
			var(--color-secondary) 25%,
			var(--color-accent) 50%,
			var(--color-tertiary) 75%,
			var(--color-quaternary) 100%
		);
	}

	header.scrolled {
		background: var(--color-surface);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
		padding: 0.75rem 0;
		border-bottom-color: var(--color-secondary);
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

	.mobile-menu-toggle {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		padding: var(--space-xs);
		z-index: 1001;
	}

	.hamburger {
		display: block;
		width: 28px;
		height: 2px;
		background: var(--color-text);
		position: relative;
		transition: all var(--transition-base);
	}

	.hamburger::before,
	.hamburger::after {
		content: '';
		position: absolute;
		width: 28px;
		height: 2px;
		background: var(--color-text);
		transition: all var(--transition-base);
	}

	.hamburger::before {
		top: -8px;
	}

	.hamburger::after {
		bottom: -8px;
	}

	.hamburger.open {
		background: transparent;
	}

	.hamburger.open::before {
		top: 0;
		transform: rotate(45deg);
	}

	.hamburger.open::after {
		bottom: 0;
		transform: rotate(-45deg);
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

	.nav-links a:not(.btn) {
		position: relative;
	}

	.nav-links li:nth-child(1) a:not(.btn):hover { color: var(--color-primary); }
	.nav-links li:nth-child(2) a:not(.btn):hover { color: var(--color-secondary); }
	.nav-links li:nth-child(3) a:not(.btn):hover { color: var(--color-accent); }

	.nav-links a:not(.btn)::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 0;
		height: 4px;
		border-radius: var(--radius-full);
		transition: width var(--transition-base);
	}

	.nav-links li:nth-child(1) a:not(.btn)::after { background: var(--color-primary); }
	.nav-links li:nth-child(2) a:not(.btn)::after { background: var(--color-secondary); }
	.nav-links li:nth-child(3) a:not(.btn)::after { background: var(--color-accent); }

	.nav-links a:not(.btn):hover::after {
		width: 100%;
	}

	.theme-toggle-li {
		margin-left: var(--space-sm);
	}

	.theme-toggle {
		background: transparent;
		border: 2px solid var(--color-border);
		cursor: pointer;
		font-size: 1.25rem;
		padding: var(--space-xs);
		border-radius: var(--radius-full);
		transition: all var(--transition-fast);
		display: flex;
		align-items: center;
		justify-content: center;
		width: 38px;
		height: 38px;
	}

	.theme-toggle:hover {
		transform: scale(1.15) rotate(15deg);
		background: var(--color-accent);
		border-color: var(--color-accent);
		box-shadow: 0 0 12px var(--color-accent);
	}

	:global(.dark) .theme-toggle {
		border-color: var(--color-secondary);
	}

	:global(.dark) .theme-toggle:hover {
		background: var(--color-secondary);
		border-color: var(--color-secondary);
		box-shadow: 0 0 12px var(--color-secondary);
	}

	main {
		flex: 1;
		width: 100%;
		margin-top: 80px;
	}

	footer {
		background: var(--color-surface);
		border-top: var(--border-extra-thick) solid;
		border-image: linear-gradient(90deg,
			var(--color-primary),
			var(--color-secondary),
			var(--color-accent),
			var(--color-tertiary),
			var(--color-quaternary)
		) 1;
		margin-top: var(--space-3xl);
		position: relative;
		box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
	}

	footer::before {
		content: '';
		position: absolute;
		top: -5px;
		left: 0;
		right: 0;
		height: 5px;
		background: linear-gradient(90deg,
			var(--color-quaternary) 0%,
			var(--color-tertiary) 25%,
			var(--color-accent) 50%,
			var(--color-secondary) 75%,
			var(--color-primary) 100%
		);
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
		.mobile-menu-toggle {
			display: block;
		}

		.nav-links {
			position: fixed;
			top: 0;
			right: -100%;
			width: 280px;
			height: 100vh;
			background: var(--color-bg);
			border-left: var(--border-thick) solid var(--color-border);
			box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: var(--space-xl);
			padding: var(--space-3xl) var(--space-lg);
			transition: right var(--transition-slow);
			z-index: 1000;
		}

		.nav-links.mobile-open {
			right: 0;
		}

		.nav-links li {
			width: 100%;
			text-align: center;
		}

		.nav-links a {
			display: block;
			font-size: 1.25rem;
			padding: var(--space-md);
		}

		.nav-links a.btn {
			width: 100%;
			padding: var(--space-md) var(--space-lg);
			font-size: 1rem;
		}

		.nav-links a:not(.btn)::after {
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
		}

		.nav-links a:not(.btn):hover::after {
			width: 80%;
		}

		.theme-toggle-li {
			margin-left: 0;
		}

		.theme-toggle {
			width: 48px;
			height: 48px;
			font-size: 1.5rem;
		}

		.footer-content {
			grid-template-columns: 1fr;
			gap: var(--space-xl);
		}

		.footer-links {
			gap: var(--space-xl);
		}
	}

	@media (max-width: 480px) {
		.nav-links {
			width: 100%;
			right: -100%;
		}

		.logo {
			font-size: 1.25rem;
		}
	}

	/* Back to top button */
	.back-to-top {
		position: fixed;
		bottom: var(--space-xl);
		right: var(--space-xl);
		width: 56px;
		height: 56px;
		background: var(--color-primary);
		color: var(--color-white);
		border: var(--border-medium) solid var(--color-accent);
		border-radius: var(--radius-full);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		box-shadow: 5px 5px 0 var(--color-secondary), 10px 10px 0 var(--color-tertiary);
		transition: all var(--transition-base);
		z-index: 999;
		animation: fadeInUp 0.3s ease-out;
	}

	.back-to-top:hover {
		transform: translateY(-4px);
		box-shadow: 6px 6px 0 var(--color-secondary), 12px 12px 0 var(--color-tertiary);
		background: var(--color-orange);
	}

	.arrow-up {
		font-weight: 900;
		font-size: 2rem;
	}

	@media (max-width: 768px) {
		.back-to-top {
			bottom: var(--space-lg);
			right: var(--space-lg);
			width: 48px;
			height: 48px;
			font-size: 1.25rem;
		}
	}
</style>
