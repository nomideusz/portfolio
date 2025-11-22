<script lang="ts">
	import { page } from '$app/stores';
	import { projects } from '$lib/data/projects';
	import { error } from '@sveltejs/kit';

	// Get the project slug from the URL
	const slug = $page.params.slug;
	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		throw error(404, 'Project not found');
	}
</script>

<svelte:head>
	<title>{project.title} - Project Details</title>
	<meta name="description" content={project.description} />
</svelte:head>

<div class="project-detail-page">
	<div class="container">
		<a href="/projects" class="back-link">← Back to Projects</a>

		<header class="project-header">
			<div class="header-content">
				<span class="category">{project.category}</span>
				<h1>{project.title}</h1>
				<p class="subtitle">{project.description}</p>
				
				<div class="header-actions">
					{#if project.link}
						<a href={project.link} target="_blank" rel="noopener noreferrer" class="btn primary">
							Visit Live Site ↗
						</a>
					{/if}
				</div>
			</div>
		</header>

		<div class="content-grid">
			<div class="main-content">
				<section class="section">
					<h2>About the Project</h2>
					<p class="long-description">{project.longDescription}</p>
				</section>

				<section class="section">
					<h2>Key Features</h2>
					<ul class="feature-list">
						{#each project.features as feature}
							<li>{feature}</li>
						{/each}
					</ul>
				</section>

				<section class="section">
					<h2>Challenges & Solutions</h2>
					<ul class="challenge-list">
						{#each project.challenges as challenge}
							<li>{challenge}</li>
						{/each}
					</ul>
				</section>
			</div>

			<aside class="sidebar">
				<div class="tech-stack-card">
					<h3>Technologies</h3>
					<div class="tech-tags">
						{#each project.tech as tech}
							<span class="tech-tag">{tech}</span>
						{/each}
					</div>
				</div>
			</aside>
		</div>
	</div>
</div>

<style>
	.project-detail-page {
		padding: var(--space-3xl) 0;
		animation: fadeIn 0.5s ease-out;
	}

	.back-link {
		display: inline-block;
		margin-bottom: var(--space-xl);
		color: var(--color-text-secondary);
		text-decoration: none;
		font-weight: 600;
		transition: color var(--transition-fast);
	}

	.back-link:hover {
		color: var(--color-primary);
	}

	.project-header {
		margin-bottom: var(--space-3xl);
		border-bottom: 1px solid var(--color-border);
		padding-bottom: var(--space-xl);
	}

	.category {
		display: inline-block;
		font-size: 0.875rem;
		color: var(--color-accent);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 700;
		margin-bottom: var(--space-sm);
	}

	h1 {
		font-size: clamp(2.5rem, 5vw, 4rem);
		margin-bottom: var(--space-md);
		line-height: 1.1;
	}

	.subtitle {
		font-size: 1.25rem;
		color: var(--color-text-secondary);
		max-width: 800px;
		margin-bottom: var(--space-xl);
		line-height: 1.6;
	}

	.header-actions {
		display: flex;
		gap: var(--space-md);
	}

	.btn {
		display: inline-flex;
		align-items: center;
		padding: var(--space-sm) var(--space-xl);
		border-radius: var(--radius-full);
		font-weight: 700;
		text-decoration: none;
		transition: all var(--transition-base);
	}

	.btn.primary {
		background: var(--color-primary);
		color: var(--color-white);
		border: 2px solid var(--color-primary);
	}

	.btn.primary:hover {
		background: transparent;
		color: var(--color-primary);
	}

	.content-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: var(--space-3xl);
	}

	.section {
		margin-bottom: var(--space-3xl);
	}

	h2 {
		font-size: 2rem;
		margin-bottom: var(--space-lg);
		color: var(--color-text);
		position: relative;
		display: inline-block;
	}
	
	h2::after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 50%;
		height: 3px;
		background: var(--color-secondary);
	}

	.long-description {
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--color-text-secondary);
	}

	.feature-list, .challenge-list {
		list-style: none;
		padding: 0;
	}

	.feature-list li, .challenge-list li {
		position: relative;
		padding-left: var(--space-xl);
		margin-bottom: var(--space-md);
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.feature-list li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: var(--color-success, #10b981);
		font-weight: bold;
	}

	.challenge-list li::before {
		content: '•';
		position: absolute;
		left: 0;
		color: var(--color-accent);
		font-size: 1.5rem;
		line-height: 1rem;
	}

	.tech-stack-card {
		background: var(--color-surface);
		padding: var(--space-xl);
		border-radius: var(--radius-lg);
		border: 1px solid var(--color-border);
		position: sticky;
		top: var(--space-3xl);
	}

	.tech-stack-card h3 {
		margin-bottom: var(--space-lg);
		font-size: 1.5rem;
	}

	.tech-tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
	}

	.tech-tag {
		background: var(--color-background);
		padding: var(--space-xs) var(--space-md);
		border-radius: var(--radius-md);
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-secondary);
		border: 1px solid var(--color-border);
	}

	@media (max-width: 768px) {
		.content-grid {
			grid-template-columns: 1fr;
			gap: var(--space-xl);
		}

		.project-header {
			margin-bottom: var(--space-xl);
		}

		h1 {
			font-size: 2.5rem;
		}
	}

	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: translateY(0); }
	}
</style>
