<script lang="ts">
	// Using Svelte 5 runes
	interface Project {
		title: string;
		description: string;
		tech: string[];
		link?: string;
		category: string;
		featured?: boolean;
	}

	let projects = $state<Project[]>([
		{
			title: 'Zaur',
			description: 'QR-based booking platform for independent tour guides. Features PWA capabilities, Stripe payments, Google Maps integration, and weather information to streamline the booking experience.',
			tech: ['SvelteKit', 'Stripe API', 'Google Maps', 'OpenWeather API', 'PWA'],
			link: 'https://zaur.app',
			category: 'Full-Stack',
			featured: true
		},
		{
			title: 'Intertech Poland',
			description: 'B2B platform for environmental monitoring and scientific measurement solutions. Exclusive distributor website featuring CRDS spectroscopy technology, AI-powered leak detection, and real-time data measurement.',
			tech: ['SvelteKit', 'Netlify', 'Dark Mode', 'Blog Integration'],
			link: 'https://intertechpoland.pl/',
			category: 'Web Development',
			featured: true
		},
		{
			title: 'TUTITUTU',
			description: 'Professional portfolio website for an established interior architecture firm. Features optimized image galleries, responsive design, and social media integration showcasing 25+ years of design expertise.',
			tech: ['SvelteKit', 'WebP Optimization', 'Google Analytics', 'Responsive Design'],
			link: 'https://tutitutu.pl/',
			category: 'Web Development'
		},
		{
			title: 'Wibroakustyka.ai',
			description: 'Graal vibroacoustic chair showcase website. Immersive wellness product site featuring biofeedback integration, VR compatibility, and therapeutic applications with dark/light theme switching.',
			tech: ['Astro', 'Google Analytics', 'Partytown', 'Theme Switching'],
			link: 'https://wibroakustyka.ai/',
			category: 'Web Development'
		},
		{
			title: 'Kurcz.pl',
			description: 'Health information website focused on muscle cramps (kurcze mięśniowe). Component-based SPA with modern loading states and error handling for optimal user experience.',
			tech: ['Alpine.js', 'Tailwind CSS', 'PNPM', 'SPA'],
			link: 'https://kurcz.pl',
			category: 'Web Development'
		},
		{
			title: 'Pikastro',
			description: 'AI-powered interior design studio website. A modern platform showcasing design services, portfolio of 50+ projects, and AI-assisted design prototyping capabilities.',
			tech: ['Web Development', 'UI/UX Design', 'AI Integration', 'Responsive Design'],
			link: 'https://pikastro.eu',
			category: 'Web Development',
			featured: true
		}
	]);

	let selectedFilter = $state<string>('All');
	const categories = ['All', 'Full-Stack', 'Web Development'];

	$effect(() => {
		// Filter projects when selectedFilter changes
		if (selectedFilter === 'All') {
			// Show all projects
		}
	});

	function getFilteredProjects() {
		if (selectedFilter === 'All') {
			return projects;
		}
		return projects.filter(p => p.category === selectedFilter);
	}
</script>

<svelte:head>
	<title>Projects - Bartosz Dymet | Web Development Portfolio</title>
	<meta name="description" content="Explore my portfolio of web development projects including SvelteKit applications, PWAs, and modern websites. Featured work: Zaur booking platform, Intertech Poland B2B site, and more." />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Projects - Bartosz Dymet Web Development Portfolio" />
	<meta property="og:description" content="Portfolio of web development projects featuring SvelteKit, TypeScript, and modern web technologies." />
	<meta property="og:image" content="/bartek.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Projects - Bartosz Dymet Portfolio" />
	<meta name="twitter:description" content="Portfolio of web development projects featuring SvelteKit, TypeScript, and modern web technologies." />
	<meta name="twitter:image" content="/bartek.png" />
</svelte:head>

<section class="projects-page">
	<div class="container">
		<div class="page-header">
			<h1>
				<span class="gradient-text">Featured Work</span>
			</h1>
			<p class="subtitle">A collection of projects I've built with passion and precision</p>
		</div>

		<div class="filters">
			{#each categories as category}
				<button
					class="filter-btn"
					class:active={selectedFilter === category}
					onclick={() => selectedFilter = category}
				>
					{category}
				</button>
			{/each}
		</div>

		<div class="projects-grid">
			{#each getFilteredProjects() as project, index}
				<article class="project-card card scroll-reveal" class:featured={project.featured}>
					{#if project.featured}
						<div class="featured-badge">Featured</div>
					{/if}

					<div class="project-header">
						<div class="project-number">0{index + 1}</div>
						<div class="project-category">{project.category}</div>
					</div>

					<h2>{project.title}</h2>
					<p class="project-description">{project.description}</p>

					<div class="tech-stack">
						{#each project.tech as tech}
							<span class="tech-badge">{tech}</span>
						{/each}
					</div>

					{#if project.link}
						<div class="project-footer">
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								class="project-link"
							>
								<span>View Project</span>
								<span class="arrow">→</span>
							</a>
						</div>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.projects-page {
		padding: var(--space-3xl) 0;
	}

	.page-header {
		text-align: center;
		margin-bottom: var(--space-3xl);
	}

	h1 {
		font-size: clamp(2.5rem, 5vw, 4rem);
		margin-bottom: var(--space-md);
	}

	.subtitle {
		color: var(--color-text-secondary);
		font-size: 1.25rem;
		max-width: 600px;
		margin: 0 auto;
	}

	.filters {
		display: flex;
		justify-content: center;
		gap: var(--space-md);
		margin-bottom: var(--space-3xl);
		flex-wrap: wrap;
	}

	.filter-btn {
		padding: var(--space-sm) var(--space-xl);
		background: var(--color-surface);
		border: var(--border-medium) solid;
		border-radius: var(--radius-full);
		color: var(--color-text);
		font-weight: 900;
		cursor: pointer;
		transition: all var(--transition-base);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		position: relative;
		overflow: hidden;
	}

	.filter-btn:nth-child(1) {
		border-color: var(--color-primary);
	}

	.filter-btn:nth-child(2) {
		border-color: var(--color-secondary);
	}

	.filter-btn:nth-child(3) {
		border-color: var(--color-accent);
	}

	.filter-btn:hover {
		background: var(--color-quaternary);
		color: var(--color-black);
		transform: translate(-3px, -3px);
		box-shadow: 5px 5px 0 var(--color-tertiary);
	}

	.filter-btn.active {
		background: var(--color-primary);
		color: var(--color-white);
		border-color: var(--color-orange);
		box-shadow: 5px 5px 0 var(--color-accent), 10px 10px 0 var(--color-secondary);
		transform: translate(-2px, -2px);
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: var(--space-xl);
	}

	.project-card {
		padding: var(--space-xl);
		position: relative;
		overflow: visible;
		display: flex;
		flex-direction: column;
		min-height: 400px;
		transition: transform var(--transition-base), box-shadow var(--transition-base);
	}

	.project-card:hover {
		transform: translateY(-8px) scale(1.02);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
	}

	.project-card:nth-child(6n+1) {
		background: var(--color-surface);
		border-color: var(--color-primary);
		border-left: var(--border-extra-thick) solid var(--color-primary);
	}

	.project-card:nth-child(6n+2) {
		background: var(--color-surface);
		border-color: var(--color-secondary);
		border-left: var(--border-extra-thick) solid var(--color-secondary);
	}

	.project-card:nth-child(6n+3) {
		background: var(--color-surface);
		border-color: var(--color-accent);
		border-left: var(--border-extra-thick) solid var(--color-accent);
	}

	.project-card:nth-child(6n+4) {
		background: var(--color-surface);
		border-color: var(--color-tertiary);
		border-left: var(--border-extra-thick) solid var(--color-tertiary);
	}

	.project-card:nth-child(6n+5) {
		background: var(--color-surface);
		border-color: var(--color-quaternary);
		border-left: var(--border-extra-thick) solid var(--color-quaternary);
	}

	.project-card:nth-child(6n+6) {
		background: var(--color-surface);
		border-color: var(--color-orange);
		border-left: var(--border-extra-thick) solid var(--color-orange);
	}

	.project-card.featured::before {
		content: '★';
		position: absolute;
		top: -25px;
		right: 15px;
		font-size: 3rem;
		color: var(--color-accent);
		text-shadow: 3px 3px 0 var(--color-primary);
		animation: float 2s ease-in-out infinite;
		z-index: 5;
		pointer-events: none;
	}

	.featured-badge {
		position: absolute;
		top: -15px;
		right: var(--space-lg);
		padding: var(--space-xs) var(--space-lg);
		background: var(--color-accent);
		color: var(--color-black);
		font-size: 0.875rem;
		font-weight: 900;
		border-radius: var(--radius-md);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		border: var(--border-medium) solid var(--color-primary);
		box-shadow: 4px 4px 0 var(--color-secondary), 8px 8px 0 var(--color-tertiary);
		z-index: 10;
		pointer-events: none;
	}

	.project-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--space-lg);
	}

	.project-number {
		font-size: 3rem;
		font-weight: 900;
		color: var(--color-primary);
		opacity: 0.3;
	}

	.project-category {
		font-size: 0.875rem;
		color: var(--color-text-tertiary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 600;
	}

	.project-card h2 {
		font-size: 1.75rem;
		margin-bottom: var(--space-md);
		color: var(--color-text);
	}

	.project-description {
		color: var(--color-text-secondary);
		line-height: 1.7;
		margin-bottom: var(--space-lg);
		flex-grow: 1;
	}

	.tech-stack {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-xs);
		margin-bottom: var(--space-lg);
	}

	.tech-badge {
		background: var(--color-surface);
		color: var(--color-text);
		padding: var(--space-xs) var(--space-md);
		border-radius: var(--radius-full);
		font-size: 0.8rem;
		font-weight: 700;
		border: var(--border-thin) solid;
		transition: all var(--transition-fast);
	}

	.tech-badge:nth-child(4n+1) { border-color: var(--color-primary); }
	.tech-badge:nth-child(4n+2) { border-color: var(--color-secondary); }
	.tech-badge:nth-child(4n+3) { border-color: var(--color-accent); }
	.tech-badge:nth-child(4n+4) { border-color: var(--color-tertiary); }

	.project-card:hover .tech-badge {
		transform: translate(-2px, -2px);
		box-shadow: 3px 3px 0 currentColor;
	}

	.project-card:hover .tech-badge:nth-child(4n+1) { background: var(--color-primary); color: white; }
	.project-card:hover .tech-badge:nth-child(4n+2) { background: var(--color-secondary); color: white; }
	.project-card:hover .tech-badge:nth-child(4n+3) { background: var(--color-accent); color: black; }
	.project-card:hover .tech-badge:nth-child(4n+4) { background: var(--color-tertiary); color: white; }

	.project-footer {
		margin-top: auto;
		padding-top: var(--space-md);
		border-top: 1px solid var(--color-border);
	}

	.project-link {
		display: inline-flex;
		align-items: center;
		gap: var(--space-sm);
		color: var(--color-primary);
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		transition: all var(--transition-base);
	}

	.project-link .arrow {
		display: inline-block;
		transition: transform var(--transition-base);
	}

	.project-link:hover {
		color: var(--color-primary-dark);
	}

	.project-link:hover .arrow {
		transform: translateX(6px);
	}

	@media (max-width: 768px) {
		.filters {
			gap: var(--space-sm);
		}

		.filter-btn {
			padding: var(--space-xs) var(--space-md);
			font-size: 0.875rem;
		}

		.projects-grid {
			grid-template-columns: 1fr;
			gap: var(--space-lg);
		}

		.project-card {
			min-height: auto;
			padding: var(--space-lg);
		}

		.project-number {
			font-size: 2rem;
		}

		.project-card h2 {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 480px) {
		.page-header {
			margin-bottom: var(--space-xl);
		}

		.subtitle {
			font-size: 1rem;
		}

		.filters {
			flex-direction: column;
			width: 100%;
		}

		.filter-btn {
			width: 100%;
			text-align: center;
		}

		.projects-grid {
			gap: var(--space-md);
		}

		.project-card {
			padding: var(--space-md);
		}

		.featured-badge {
			top: var(--space-md);
			right: var(--space-md);
			font-size: 0.7rem;
			padding: 4px var(--space-xs);
		}

		.project-number {
			font-size: 1.5rem;
		}

		.project-category {
			font-size: 0.75rem;
		}

		.project-card h2 {
			font-size: 1.25rem;
		}

		.project-description {
			font-size: 0.95rem;
		}

		.tech-badge {
			font-size: 0.75rem;
			padding: 4px var(--space-xs);
		}
	}
</style>
