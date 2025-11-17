<script lang="ts">
	// Using Svelte 5 runes
	interface Skill {
		name: string;
		icon: string;
		level: number;
	}

	interface Experience {
		title: string;
		period: string;
		description: string;
	}

	let skills = $state<Skill[]>([
		{ name: 'SvelteKit/Svelte', icon: '⚡', level: 95 },
		{ name: 'TypeScript', icon: '📘', level: 90 },
		{ name: 'HTML5/CSS3', icon: '🎨', level: 95 },
		{ name: 'SQL & Databases', icon: '🗄️', level: 85 },
		{ name: 'Linux & VPS', icon: '🐧', level: 88 },
		{ name: 'Docker', icon: '🐳', level: 80 },
		{ name: 'Git', icon: '📦', level: 90 },
		{ name: 'Python', icon: '🐍', level: 75 }
	]);

	let experiences = $state<Experience[]>([
		{
			title: 'Freelance Web Developer',
			period: '2007 - Present',
			description: 'Design and develop modern web applications using SvelteKit, Svelte, and TypeScript. Create custom solutions including complete websites and content management systems. Optimize web applications for speed and performance, collaborating closely with clients to deliver tailored solutions.'
		},
		{
			title: 'Mobile Measuring Station Operator / Data Analyst',
			period: '2022 - Present',
			description: 'Intertech Poland / Picarro - Operate Picarro vehicle and equipment for gas measurements. Master the Picarro software suite and analytical tools for efficient data processing and analysis. Work with Polish Gas Company providing training support and operational guidance.'
		},
		{
			title: 'Surveyor & Team Lead',
			period: '2007 - 2019',
			description: 'Tesla Exploration / IMC Geophysical Services / Terrex Seismic - Led international surveyor teams in complex seismic projects across multiple countries. Managed advanced surveying equipment and processed survey data with high precision.'
		}
	]);

	let stats = $state([
		{ label: 'Web Dev Experience', value: '15+ yrs' },
		{ label: 'Projects Delivered', value: '50+' },
		{ label: 'Technologies', value: '20+' },
		{ label: 'Client Satisfaction', value: '100%' }
	]);
</script>

<section class="about-page">
	<div class="container">
		<div class="page-header">
			<h1>
				<span class="gradient-text">About Me</span>
			</h1>
			<p class="subtitle">Full-stack developer with 15+ years of experience</p>
		</div>

		<div class="content-grid">
			<div class="bio-section card">
				<div class="profile-header">
					<div class="profile-image-small">
						<img src="/bartek.png" alt="Bartosz Dymet - Web Developer" />
					</div>
					<div class="section-icon">👋</div>
				</div>
				<h2>About Bartosz</h2>
				<p>
					I'm an experienced web developer with over 15 years of freelance experience, specializing in modern web technologies.
					I combine technical expertise with strong communication skills to deliver custom solutions that exceed client expectations.
				</p>
				<p>
					My expertise spans the full development stack—from designing and developing modern web applications with
					SvelteKit and TypeScript to database management, Linux server administration, and Docker containerization.
					I've created complete websites, custom content management systems, and performance-optimized applications for diverse clients.
				</p>
				<p>
					Beyond web development, I bring 15+ years of experience in data analysis and technical operations, including
					working with advanced software systems and leading international teams. I'm known for quick adaptation to new technologies,
					strong problem-solving abilities, and delivering results that align with business objectives.
				</p>
				<p>
					I'm fluent in Polish and English, available to start immediately, and willing to travel for the right opportunity.
				</p>
			</div>

			<div class="stats-grid">
				{#each stats as stat}
					<div class="stat-card card">
						<div class="stat-value gradient-text">{stat.value}</div>
						<div class="stat-label">{stat.label}</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="skills-section">
			<h2 class="section-title">
				<span class="gradient-text">Skills & Expertise</span>
			</h2>
			<div class="skills-grid">
				{#each skills as skill}
					<div class="skill-card card">
						<div class="skill-header">
							<span class="skill-icon">{skill.icon}</span>
							<span class="skill-name">{skill.name}</span>
						</div>
						<div class="skill-bar">
							<div class="skill-progress" style="width: {skill.level}%"></div>
						</div>
						<div class="skill-level">{skill.level}%</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="experience-section">
			<h2 class="section-title">
				<span class="gradient-text">Experience</span>
			</h2>
			<div class="timeline">
				{#each experiences as exp}
					<div class="timeline-item card">
						<div class="timeline-marker"></div>
						<div class="timeline-content">
							<h3>{exp.title}</h3>
							<div class="timeline-period">{exp.period}</div>
							<p>{exp.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="cta-section">
			<div class="cta-card card">
				<h2>Let's Work Together</h2>
				<p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
				<a href="/contact" class="btn btn-primary">Get In Touch</a>
			</div>
		</div>
	</div>
</section>

<style>
	.about-page {
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
	}

	.content-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: var(--space-xl);
		margin-bottom: var(--space-3xl);
	}

	.bio-section {
		padding: var(--space-2xl);
	}

	.profile-header {
		display: flex;
		align-items: center;
		gap: var(--space-lg);
		margin-bottom: var(--space-lg);
	}

	.profile-image-small {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		overflow: hidden;
		border: 3px solid var(--color-primary);
		box-shadow: var(--shadow-md);
		flex-shrink: 0;
	}

	.profile-image-small img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.section-icon {
		font-size: 3rem;
	}

	.bio-section h2 {
		font-size: 2rem;
		margin-bottom: var(--space-lg);
		color: var(--color-text);
	}

	.bio-section p {
		font-size: 1.125rem;
		line-height: 1.8;
		color: var(--color-text-secondary);
		margin-bottom: var(--space-lg);
	}

	.bio-section p:last-child {
		margin-bottom: 0;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--space-md);
	}

	.stat-card {
		padding: var(--space-lg);
		text-align: center;
	}

	.stat-value {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: var(--space-xs);
	}

	.stat-label {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.skills-section {
		margin-bottom: var(--space-3xl);
	}

	.section-title {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: var(--space-2xl);
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--space-lg);
	}

	.skill-card {
		padding: var(--space-lg);
	}

	.skill-header {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		margin-bottom: var(--space-md);
	}

	.skill-icon {
		font-size: 1.75rem;
	}

	.skill-name {
		font-weight: 600;
		font-size: 1.125rem;
		color: var(--color-text);
	}

	.skill-bar {
		height: 8px;
		background: var(--color-bg-tertiary);
		border-radius: var(--radius-full);
		overflow: hidden;
		margin-bottom: var(--space-sm);
	}

	.skill-progress {
		height: 100%;
		background: var(--gradient-primary);
		border-radius: var(--radius-full);
		transition: width var(--transition-slow);
	}

	.skill-level {
		text-align: right;
		font-size: 0.875rem;
		color: var(--color-text-tertiary);
		font-weight: 600;
	}

	.experience-section {
		margin-bottom: var(--space-3xl);
	}

	.timeline {
		max-width: 800px;
		margin: 0 auto;
		position: relative;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 20px;
		top: 30px;
		bottom: 30px;
		width: 2px;
		background: var(--gradient-primary);
	}

	.timeline-item {
		position: relative;
		padding: var(--space-xl);
		padding-left: var(--space-3xl);
		margin-bottom: var(--space-lg);
	}

	.timeline-marker {
		position: absolute;
		left: 12px;
		top: var(--space-xl);
		width: 18px;
		height: 18px;
		background: var(--gradient-primary);
		border-radius: 50%;
		box-shadow: 0 0 0 4px var(--color-surface);
	}

	.timeline-content h3 {
		font-size: 1.5rem;
		margin-bottom: var(--space-xs);
		color: var(--color-text);
	}

	.timeline-period {
		font-size: 0.875rem;
		color: var(--color-primary);
		font-weight: 600;
		margin-bottom: var(--space-md);
	}

	.timeline-content p {
		color: var(--color-text-secondary);
		line-height: 1.7;
		margin: 0;
	}

	.cta-section {
		margin-top: var(--space-3xl);
	}

	.cta-card {
		text-align: center;
		padding: var(--space-3xl);
		background: var(--gradient-subtle);
		border: 2px solid var(--color-border);
	}

	.cta-card h2 {
		font-size: 2rem;
		margin-bottom: var(--space-md);
		color: var(--color-text);
	}

	.cta-card p {
		font-size: 1.125rem;
		color: var(--color-text-secondary);
		max-width: 600px;
		margin: 0 auto var(--space-xl);
	}

	@media (max-width: 1024px) {
		.content-grid {
			grid-template-columns: 1fr;
		}

		.stats-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.skills-grid {
			grid-template-columns: 1fr;
		}

		.stats-grid {
			grid-template-columns: 1fr;
		}

		.timeline::before {
			left: 10px;
		}

		.timeline-marker {
			left: 2px;
		}

		.timeline-item {
			padding-left: var(--space-xl);
		}
	}
</style>
