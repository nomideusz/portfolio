<script lang="ts">
	// Using Svelte 5 runes
	interface Project {
		title: string;
		description: string;
		tech: string[];
		link?: string;
	}

	let projects = $state<Project[]>([
		{
			title: 'Zaur',
			description: 'QR-based booking platform for independent tour guides. Features PWA capabilities, Stripe payments, Google Maps integration, and weather information to streamline the booking experience.',
			tech: ['SvelteKit', 'Stripe API', 'Google Maps', 'OpenWeather API', 'PWA'],
			link: 'https://zaur.app'
		},
		{
			title: 'Intertech Poland',
			description: 'B2B platform for environmental monitoring and scientific measurement solutions. Exclusive distributor website featuring CRDS spectroscopy technology, AI-powered leak detection, and real-time data measurement.',
			tech: ['SvelteKit', 'Netlify', 'Dark Mode', 'Blog Integration'],
			link: 'https://intertechpoland.pl/'
		},
		{
			title: 'TUTITUTU',
			description: 'Professional portfolio website for an established interior architecture firm. Features optimized image galleries, responsive design, and social media integration showcasing 25+ years of design expertise.',
			tech: ['SvelteKit', 'WebP Optimization', 'Google Analytics', 'Responsive Design'],
			link: 'https://tutitutu.pl/'
		},
		{
			title: 'Wibroakustyka.ai',
			description: 'Graal vibroacoustic chair showcase website. Immersive wellness product site featuring biofeedback integration, VR compatibility, and therapeutic applications with dark/light theme switching.',
			tech: ['Astro', 'Google Analytics', 'Partytown', 'Theme Switching'],
			link: 'https://wibroakustyka.ai/'
		},
		{
			title: 'Kurcz.pl',
			description: 'Health information website focused on muscle cramps (kurcze mięśniowe). Component-based SPA with modern loading states and error handling for optimal user experience.',
			tech: ['Alpine.js', 'Tailwind CSS', 'PNPM', 'SPA'],
			link: 'https://kurcz.pl'
		},
		{
			title: 'Pikastro',
			description: 'AI-powered interior design studio website. A modern platform showcasing design services, portfolio of 50+ projects, and AI-assisted design prototyping capabilities.',
			tech: ['Web Development', 'UI/UX Design', 'AI Integration', 'Responsive Design'],
			link: 'https://pikastro.eu'
		}
	]);
</script>

<section class="projects">
	<h1>My Projects</h1>
	<p class="subtitle">Here are some of the projects I've worked on</p>

	<div class="projects-grid">
		{#each projects as project}
			<article class="project-card">
				<h2>{project.title}</h2>
				<p>{project.description}</p>
				<div class="tech-stack">
					{#each project.tech as tech}
						<span class="tech-badge">{tech}</span>
					{/each}
				</div>
				{#if project.link}
					<a href={project.link} target="_blank" rel="noopener noreferrer" class="project-link">
						View Project →
					</a>
				{/if}
			</article>
		{/each}
	</div>
</section>

<style>
	.projects {
		max-width: 1000px;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.subtitle {
		color: var(--color-text-secondary);
		margin-bottom: 3rem;
		font-size: 1.1rem;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2rem;
	}

	.project-card {
		background: var(--color-bg-secondary);
		padding: 1.5rem;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border);
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.project-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.project-card h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.project-card p {
		color: var(--color-text-secondary);
		margin-bottom: 1rem;
	}

	.tech-stack {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tech-badge {
		background: var(--color-primary);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 1rem;
		font-size: 0.85rem;
	}

	.project-link {
		display: inline-block;
		margin-top: 1rem;
		color: var(--color-primary);
		text-decoration: none;
		font-weight: 600;
		transition: transform 0.2s;
	}

	.project-link:hover {
		transform: translateX(4px);
	}
</style>
