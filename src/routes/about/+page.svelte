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

<svelte:head>
	<title>About - Bartosz Dymet | Full-Stack Web Developer</title>
	<meta name="description" content="Learn about Bartosz Dymet, a full-stack web developer with 15+ years of experience. Expertise in SvelteKit, TypeScript, Docker, and modern web technologies." />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="profile" />
	<meta property="og:title" content="About Bartosz Dymet - Full-Stack Web Developer" />
	<meta property="og:description" content="Full-stack developer with 15+ years of experience in modern web technologies, data analysis, and team leadership." />
	<meta property="og:image" content="/bartek.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="About Bartosz Dymet - Full-Stack Web Developer" />
	<meta name="twitter:description" content="Full-stack developer with 15+ years of experience in modern web technologies." />
	<meta name="twitter:image" content="/bartek.png" />
</svelte:head>

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
				<div class="resume-download">
					<a href="/resume.pdf" download class="btn btn-primary">
						<span>📄</span>
						Download Resume
					</a>
				</div>
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
		border-radius: var(--radius-blob);
		overflow: hidden;
		border: var(--border-thick) solid var(--color-primary);
		box-shadow: 5px 5px 0 var(--color-secondary), 10px 10px 0 var(--color-accent);
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

	.bio-section p:last-of-type {
		margin-bottom: var(--space-xl);
	}

	.resume-download {
		margin-top: var(--space-xl);
		padding-top: var(--space-lg);
		border-top: var(--border-medium) solid var(--color-border);
	}

	.resume-download .btn {
		font-size: 1.125rem;
		padding: var(--space-md) var(--space-xl);
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

	.stat-card:nth-child(1) {
		background: var(--color-surface);
		border-color: var(--color-primary);
		border-top: var(--border-extra-thick) solid var(--color-primary);
	}

	.stat-card:nth-child(2) {
		background: var(--color-surface);
		border-color: var(--color-secondary);
		border-top: var(--border-extra-thick) solid var(--color-secondary);
	}

	.stat-card:nth-child(3) {
		background: var(--color-surface);
		border-color: var(--color-accent);
		border-top: var(--border-extra-thick) solid var(--color-accent);
	}

	.stat-card:nth-child(4) {
		background: var(--color-surface);
		border-color: var(--color-tertiary);
		border-top: var(--border-extra-thick) solid var(--color-tertiary);
	}

	.stat-value {
		font-size: 2.5rem;
		font-weight: 900;
		margin-bottom: var(--space-xs);
	}

	.stat-card:nth-child(1) .stat-value { color: var(--color-primary); }
	.stat-card:nth-child(2) .stat-value { color: var(--color-secondary); }
	.stat-card:nth-child(3) .stat-value { color: var(--color-accent); }
	.stat-card:nth-child(4) .stat-value { color: var(--color-tertiary); }

	.stat-label {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 700;
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
		height: 16px;
		background: var(--color-bg-secondary);
		border-radius: var(--radius-full);
		overflow: hidden;
		margin-bottom: var(--space-sm);
		border: var(--border-medium) solid var(--color-border-secondary);
		box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.1);
	}

	.skill-progress {
		height: 100%;
		background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
		border-radius: var(--radius-full);
		transition: width var(--transition-slow);
		position: relative;
		box-shadow: 0 0 10px rgba(255, 0, 110, 0.5);
	}

	.skill-card:nth-child(even) .skill-progress {
		background: linear-gradient(90deg, var(--color-tertiary), var(--color-quaternary));
		box-shadow: 0 0 10px rgba(131, 56, 236, 0.5);
	}

	.skill-progress::after {
		content: '';
		position: absolute;
		right: -5px;
		top: 50%;
		transform: translateY(-50%);
		width: 10px;
		height: 10px;
		background: var(--color-accent);
		border-radius: 50%;
		border: 2px solid var(--color-surface);
		box-shadow: 0 0 8px var(--color-accent);
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
		width: 4px;
		background: var(--color-primary);
	}

	.timeline-item {
		position: relative;
		padding: var(--space-xl);
		padding-left: var(--space-3xl);
		margin-bottom: var(--space-lg);
	}

	.timeline-marker {
		position: absolute;
		left: 10px;
		top: var(--space-xl);
		width: 24px;
		height: 24px;
		border-radius: 50%;
		border: var(--border-medium) solid var(--color-border);
		box-shadow: 0 0 0 4px var(--color-surface);
	}

	.timeline-item:nth-child(1) .timeline-marker {
		background: var(--color-primary);
	}

	.timeline-item:nth-child(2) .timeline-marker {
		background: var(--color-secondary);
	}

	.timeline-item:nth-child(3) .timeline-marker {
		background: var(--color-accent);
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
		background: var(--color-bg-secondary);
		border: var(--border-thick) solid var(--color-border);
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
		.bio-section {
			padding: var(--space-lg);
		}

		.bio-section p {
			font-size: 1rem;
		}

		.profile-image-small {
			width: 80px;
			height: 80px;
		}

		.section-icon {
			font-size: 2rem;
		}

		.skills-grid {
			grid-template-columns: 1fr;
		}

		.stats-grid {
			grid-template-columns: 1fr;
		}

		.stat-card {
			padding: var(--space-md);
		}

		.stat-value {
			font-size: 2rem;
		}

		.timeline::before {
			left: 10px;
		}

		.timeline-marker {
			left: 2px;
		}

		.timeline-item {
			padding: var(--space-lg);
			padding-left: var(--space-xl);
		}

		.cta-card {
			padding: var(--space-xl);
		}
	}

	@media (max-width: 480px) {
		.bio-section {
			padding: var(--space-md);
		}

		.profile-header {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--space-md);
		}

		.profile-image-small {
			width: 100px;
			height: 100px;
		}

		.stats-grid {
			gap: var(--space-sm);
		}

		.stat-value {
			font-size: 1.75rem;
		}

		.skill-card {
			padding: var(--space-md);
		}

		.timeline-item {
			padding: var(--space-md);
			padding-left: var(--space-lg);
		}

		.timeline::before {
			left: 8px;
		}

		.timeline-marker {
			left: 0;
			width: 20px;
			height: 20px;
		}

		.cta-card {
			padding: var(--space-lg);
		}

		.cta-card h2 {
			font-size: 1.5rem;
		}

		.cta-card p {
			font-size: 1rem;
		}
	}
</style>
