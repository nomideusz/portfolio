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
				<article class="project-card card" class:featured={project.featured}>
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
		border: var(--border-medium) solid var(--color-border);
		border-radius: var(--radius-sm);
		color: var(--color-text);
		font-weight: 700;
		cursor: pointer;
		transition: all var(--transition-base);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.filter-btn:hover {
		background: var(--color-accent);
		color: var(--color-black);
		transform: translate(-2px, -2px);
		box-shadow: var(--shadow-md);
	}

	.filter-btn.active {
		background: var(--color-primary);
		color: var(--color-white);
		border-color: var(--color-border);
		box-shadow: var(--shadow-md);
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: var(--space-xl);
	}

	.project-card {
		padding: var(--space-xl);
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		min-height: 400px;
	}

	.project-card.featured {
		background: var(--color-bg-secondary);
	}

	.project-card.featured::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 6px;
		background: var(--color-secondary);
	}

	.featured-badge {
		position: absolute;
		top: var(--space-lg);
		right: var(--space-lg);
		padding: var(--space-xs) var(--space-md);
		background: var(--color-secondary);
		color: var(--color-white);
		font-size: 0.75rem;
		font-weight: 700;
		border-radius: var(--radius-sm);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		border: var(--border-thin) solid var(--color-border);
		box-shadow: var(--shadow-sm);
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
		background: var(--color-bg-tertiary);
		color: var(--color-text-secondary);
		padding: var(--space-xs) var(--space-md);
		border-radius: var(--radius-sm);
		font-size: 0.8rem;
		font-weight: 600;
		border: var(--border-thin) solid var(--color-border);
		transition: all var(--transition-fast);
	}

	.project-card:hover .tech-badge {
		background: var(--color-black);
		color: var(--color-white);
		border-color: var(--color-black);
		transform: translate(-1px, -1px);
		box-shadow: 2px 2px 0 var(--color-primary);
	}

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
		.projects-grid {
			grid-template-columns: 1fr;
			gap: var(--space-lg);
		}

		.project-card {
			min-height: auto;
		}

		.project-number {
			font-size: 2rem;
		}
	}
</style>
