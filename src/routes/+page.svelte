<script lang="ts">
	// Using Svelte 5 runes
	let greeting = $state('Hi, I\'m a Web Developer');
</script>

<section class="hero">
	<h1>{greeting}</h1>
	<p class="tagline">Building modern web experiences with cutting-edge technologies</p>
	<div class="cta">
		<a href="/projects" class="btn btn-primary">View My Work</a>
		<a href="/contact" class="btn btn-secondary">Get In Touch</a>
	</div>
</section>

<section class="technologies">
	<h2>Technologies I Work With</h2>
	<div class="tech-grid">
		<div class="tech-card">SvelteKit</div>
		<div class="tech-card">TypeScript</div>
		<div class="tech-card">React</div>
		<div class="tech-card">Node.js</div>
	</div>
</section>

<style>
	.hero {
		text-align: center;
		padding: 4rem 0;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.tagline {
		font-size: 1.25rem;
		color: var(--color-text-secondary);
		margin-bottom: 2rem;
	}

	.cta {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn {
		padding: 0.75rem 1.5rem;
		border-radius: 0.5rem;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.2s;
	}

	.btn-primary {
		background: var(--color-primary);
		color: white;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	.btn-secondary {
		background: transparent;
		color: var(--color-primary);
		border: 2px solid var(--color-primary);
	}

	.btn-secondary:hover {
		background: var(--color-primary);
		color: white;
	}

	.technologies {
		padding: 4rem 0;
	}

	h2 {
		text-align: center;
		margin-bottom: 2rem;
	}

	.tech-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 1rem;
		max-width: 800px;
		margin: 0 auto;
	}

	.tech-card {
		background: var(--color-bg-secondary);
		padding: 1.5rem;
		border-radius: 0.5rem;
		text-align: center;
		border: 1px solid var(--color-border);
		transition: transform 0.2s;
	}

	.tech-card:hover {
		transform: translateY(-4px);
	}
</style>
