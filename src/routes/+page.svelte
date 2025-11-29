<script lang="ts">
	// Using Svelte 5 runes
	let greeting = $state('Hi, I\'m Bartosz Dymet');

	const technologies = [
		{ name: 'SvelteKit', icon: '⚡', color: '#FF3E00' },
		{ name: 'TypeScript', icon: '📘', color: '#3178C6' },
		{ name: 'PostgreSQL', icon: '🗄️', color: '#4169E1' },
		{ name: 'Node.js', icon: '🟢', color: '#339933' },
		{ name: 'Docker', icon: '🐳', color: '#2496ED' },
		{ name: 'Linux/VPS', icon: '🐧', color: '#FCC624' },
		{ name: 'Git', icon: '📦', color: '#F05032' },
		{ name: 'Tailwind CSS', icon: '🎨', color: '#06B6D4' },
	];
</script>

<svelte:head>
	<meta name="description" content="Full-stack web developer with 15+ years of experience, specializing in modern web technologies including SvelteKit, TypeScript, and PostgreSQL. Available for freelance projects and collaborations." />
	<meta name="keywords" content="web developer, full-stack developer, SvelteKit, TypeScript, PostgreSQL, freelance, Bartosz Dymet, Krakow" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Bartosz Dymet - Full-Stack Web Developer" />
	<meta property="og:description" content="Full-stack web developer with 15+ years of experience, specializing in modern web technologies including SvelteKit, TypeScript, and PostgreSQL. Available for freelance projects." />
	<meta property="og:image" content="/bartek.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Bartosz Dymet - Full-Stack Web Developer" />
	<meta name="twitter:description" content="Full-stack web developer with 15+ years of experience, specializing in modern web technologies including SvelteKit, TypeScript, and PostgreSQL." />
	<meta name="twitter:image" content="/bartek.png" />
</svelte:head>

<section class="hero">
	<div class="container">
		<div class="hero-content animate-fade-in-up">
			<div class="badge">Available to start immediately</div>
			<h1>
				<span class="greeting">{greeting}</span>
				<span class="gradient-text">Full-Stack Web Developer</span>
			</h1>
			<p class="tagline">
				15+ years of experience in web development, currently specializing in building high-performance applications with SvelteKit and TypeScript.
				Strong background in PostgreSQL database architecture and modern web development.
				Proven track record of independent project delivery with a pragmatic approach to solving complex problems.
			</p>
			<div class="cta">
				<a href="/projects" class="btn btn-primary">
					View My Work
					<span class="arrow">→</span>
				</a>
				<a href="/contact" class="btn btn-secondary">Get In Touch</a>
			</div>
		</div>

		<div class="hero-visual">
			<div class="profile-image-container">
				<div class="profile-image-wrapper">
					<img src="/bartek.png" alt="Bartek - Web Developer" class="profile-image" />
					<div class="image-glow"></div>
				</div>
			</div>
			<div class="floating-card card-1">
				<div class="code-snippet">
					<span class="code-keyword">const</span> <span class="code-var">developer</span> = {'{'}
					<br>&nbsp;&nbsp;passion: <span class="code-string">"coding"</span>,
					<br>&nbsp;&nbsp;focus: <span class="code-string">"quality"</span>
					<br>{'}'};
				</div>
			</div>
			<div class="floating-card card-2">
				<div class="stat">
					<div class="stat-number">20+</div>
					<div class="stat-label">Projects Completed</div>
				</div>
			</div>
			<div class="floating-card card-3">
				<div class="stat">
					<div class="stat-number">100%</div>
					<div class="stat-label">Client Satisfaction</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="technologies section">
	<div class="container">
		<h2 class="section-title">
			<span class="gradient-text">Technologies & Tools</span>
		</h2>
		<p class="section-subtitle">Building with modern, battle-tested technologies</p>
		<div class="tech-grid">
			{#each technologies as tech}
				<div class="tech-card card">
					<div class="tech-icon" style="color: {tech.color}">{tech.icon}</div>
					<div class="tech-name">{tech.name}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="features section">
	<div class="container">
		<div class="features-grid">
			<div class="feature-card card">
				<div class="feature-icon">🎨</div>
				<h3>Modern Design</h3>
				<p>Clean, intuitive interfaces that users love. Following the latest design principles and accessibility standards.</p>
			</div>
			<div class="feature-card card">
				<div class="feature-icon">⚡</div>
				<h3>Performance First</h3>
				<p>Lightning-fast applications optimized for speed and efficiency. Every millisecond counts.</p>
			</div>
			<div class="feature-card card">
				<div class="feature-icon">🔧</div>
				<h3>Clean Code</h3>
				<p>Maintainable, scalable codebases following best practices and industry standards.</p>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: calc(100vh - 80px);
		display: flex;
		align-items: center;
		position: relative;
		overflow: hidden;
		padding: var(--space-3xl) 0;
	}

	.hero::before {
		content: '';
		position: absolute;
		top: 10%;
		right: 5%;
		width: 200px;
		height: 200px;
		background: var(--color-accent);
		border: var(--border-extra-thick) solid var(--color-secondary);
		border-radius: var(--radius-blob);
		pointer-events: none;
		transform: rotate(15deg);
		box-shadow: var(--shadow-lg);
		animation: float 6s ease-in-out infinite;
	}

	.hero::after {
		content: '';
		position: absolute;
		bottom: 15%;
		left: 8%;
		width: 150px;
		height: 150px;
		background: var(--color-quaternary);
		border: var(--border-thick) solid var(--color-tertiary);
		border-radius: 50%;
		pointer-events: none;
		animation: float 8s ease-in-out infinite reverse;
		box-shadow: 5px 5px 0 var(--color-orange);
	}

	.container {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-3xl);
		align-items: center;
	}

	.hero-content {
		max-width: 600px;
	}

	.badge {
		display: inline-block;
		padding: var(--space-xs) var(--space-md);
		background: var(--color-accent);
		color: var(--color-black);
		border-radius: var(--radius-full);
		font-size: 0.875rem;
		font-weight: 900;
		margin-bottom: var(--space-lg);
		box-shadow: 4px 4px 0 var(--color-tertiary), 8px 8px 0 var(--color-primary);
		border: var(--border-medium) solid var(--color-orange);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		animation: float 3s ease-in-out infinite;
	}

	.greeting {
		display: block;
		font-size: clamp(1.25rem, 3vw, 1.5rem);
		font-weight: 700;
		color: var(--color-text-secondary);
		margin-bottom: var(--space-sm);
		text-transform: none;
	}

	h1 {
		font-size: clamp(2.5rem, 5vw, 4rem);
		line-height: 1.1;
		margin-bottom: var(--space-lg);
	}

	.tagline {
		font-size: 1.125rem;
		line-height: 1.8;
		color: var(--color-text-secondary);
		margin-bottom: var(--space-xl);
	}

	.cta {
		display: flex;
		gap: var(--space-md);
		flex-wrap: wrap;
	}

	.arrow {
		display: inline-block;
		transition: transform var(--transition-base);
	}

	.btn-primary:hover .arrow {
		transform: translateX(4px);
	}

	.hero-visual {
		position: relative;
		height: 500px;
	}

	.profile-image-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
	}

	.profile-image-wrapper {
		position: relative;
		width: 280px;
		height: 280px;
		border-radius: var(--radius-blob);
		overflow: hidden;
		border: var(--border-extra-thick) solid var(--color-primary);
		box-shadow: 8px 8px 0 var(--color-secondary), 16px 16px 0 var(--color-accent);
		animation: float 4s ease-in-out infinite;
	}

	.profile-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform var(--transition-base);
	}

	.profile-image-wrapper:hover .profile-image {
		transform: scale(1.05);
	}

	.image-glow {
		position: absolute;
		inset: -12px;
		background: var(--color-tertiary);
		z-index: -1;
		border-radius: var(--radius-blob);
		animation: pulse 3s ease-in-out infinite;
	}

	@keyframes pulse {
		0%, 100% {
			opacity: 0.9;
			transform: translate(12px, 12px) rotate(0deg);
		}
		50% {
			opacity: 1;
			transform: translate(16px, 16px) rotate(5deg);
		}
	}

	.floating-card {
		position: absolute;
		background: var(--color-surface);
		border-radius: var(--radius-xl);
		padding: var(--space-lg);
		z-index: 2;
	}

	.card-1 {
		top: 10%;
		left: 10%;
		animation: float 6s ease-in-out infinite;
		border: var(--border-thick) solid var(--color-accent);
		box-shadow: 6px 6px 0 var(--color-tertiary);
		background: var(--color-surface);
	}

	.card-2 {
		top: 40%;
		right: 10%;
		animation: float 7s ease-in-out infinite 1s;
		border: var(--border-thick) solid var(--color-secondary);
		box-shadow: 6px 6px 0 var(--color-primary);
		background: var(--color-surface);
	}

	.card-3 {
		bottom: 15%;
		left: 25%;
		animation: float 8s ease-in-out infinite 2s;
		border: var(--border-thick) solid var(--color-quaternary);
		box-shadow: 6px 6px 0 var(--color-orange);
		background: var(--color-surface);
	}

	.code-snippet {
		font-family: 'Courier New', monospace;
		font-size: 0.875rem;
		line-height: 1.6;
		color: var(--color-text);
	}

	.code-keyword {
		color: #C678DD;
		font-weight: 600;
	}

	.code-var {
		color: #E06C75;
	}

	.code-string {
		color: #98C379;
	}

	.stat {
		text-align: center;
		min-width: 150px;
	}

	.stat-number {
		font-size: 2.5rem;
		font-weight: 900;
		color: var(--color-primary);
		margin-bottom: var(--space-xs);
		text-transform: uppercase;
	}

	.stat-label {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.section-title {
		text-align: center;
		margin-bottom: var(--space-sm);
	}

	.section-subtitle {
		text-align: center;
		font-size: 1.125rem;
		color: var(--color-text-secondary);
		margin-bottom: var(--space-2xl);
	}

	.tech-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: var(--space-lg);
		max-width: 900px;
		margin: 0 auto;
	}

	.tech-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: var(--space-xl);
		cursor: pointer;
		background: var(--color-surface);
		border: var(--border-medium) solid;
		border-radius: var(--radius-lg);
		position: relative;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		min-height: 150px;
	}

	.tech-card:nth-child(1) { border-color: var(--color-primary); }
	.tech-card:nth-child(2) { border-color: var(--color-secondary); }
	.tech-card:nth-child(3) { border-color: var(--color-accent); }
	.tech-card:nth-child(4) { border-color: var(--color-tertiary); }
	.tech-card:nth-child(5) { border-color: var(--color-quaternary); }
	.tech-card:nth-child(6) { border-color: var(--color-orange); }
	.tech-card:nth-child(7) { border-color: var(--color-lime); }
	.tech-card:nth-child(8) { border-color: var(--color-primary); }

	.tech-card::after {
		content: '';
		position: absolute;
		inset: 0;
		background: inherit;
		border-radius: var(--radius-lg);
		transform: rotate(3deg);
		z-index: -1;
		opacity: 0;
		transition: all var(--transition-base);
	}

	.tech-card:hover::after {
		opacity: 0.7;
	}

	.tech-icon {
		font-size: 3rem;
		margin-bottom: var(--space-sm);
		filter: drop-shadow(3px 3px 0 rgba(0, 0, 0, 0.1));
	}

	.tech-name {
		font-weight: 700;
		color: var(--color-text);
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--space-xl);
	}

	.feature-card {
		padding: var(--space-xl);
		position: relative;
	}

	.feature-card:nth-child(1) {
		background: var(--color-surface);
		border-color: var(--color-primary);
		border-left: var(--border-extra-thick) solid var(--color-primary);
	}

	.feature-card:nth-child(2) {
		background: var(--color-surface);
		border-color: var(--color-secondary);
		border-left: var(--border-extra-thick) solid var(--color-secondary);
	}

	.feature-card:nth-child(3) {
		background: var(--color-surface);
		border-color: var(--color-accent);
		border-left: var(--border-extra-thick) solid var(--color-accent);
	}

	.feature-icon {
		font-size: 4rem;
		margin-bottom: var(--space-md);
		display: inline-block;
		padding: var(--space-md);
		background: var(--color-surface);
		border-radius: var(--radius-full);
		border: var(--border-medium) solid currentColor;
		box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.1);
	}

	.feature-card:nth-child(1) .feature-icon { color: var(--color-primary); }
	.feature-card:nth-child(2) .feature-icon { color: var(--color-secondary); }
	.feature-card:nth-child(3) .feature-icon { color: var(--color-accent); }

	.feature-card h3 {
		color: var(--color-text);
		margin-bottom: var(--space-md);
		font-size: 1.75rem;
	}

	.feature-card p {
		color: var(--color-text-secondary);
		line-height: 1.7;
		margin: 0;
		font-weight: 500;
	}

	@media (max-width: 1024px) {
		.container {
			grid-template-columns: 1fr;
		}

		.hero-visual {
			display: none;
		}

		.hero-content {
			max-width: 100%;
			text-align: center;
		}

		.cta {
			justify-content: center;
		}

		/* Reduce opacity of decorative circles on tablets */
		.hero::before,
		.hero::after {
			opacity: 0.3;
		}
	}

	@media (max-width: 768px) {
		.hero {
			min-height: auto;
			padding: var(--space-2xl) 0;
		}

		/* Hide decorative circles on mobile for better text visibility */
		.hero::before,
		.hero::after {
			display: none;
		}

		.badge {
			font-size: 0.75rem;
			padding: var(--space-xs) var(--space-sm);
		}

		.tech-grid {
			grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
			gap: var(--space-md);
		}

		.tech-card {
			padding: var(--space-md);
		}

		.tech-icon {
			font-size: 2.5rem;
		}

		.features-grid {
			grid-template-columns: 1fr;
			gap: var(--space-lg);
		}

		.feature-card {
			padding: var(--space-lg);
		}
	}

	@media (max-width: 480px) {
		.hero {
			padding: var(--space-xl) 0;
		}

		.hero::before {
			width: 100px;
			height: 100px;
		}

		.cta {
			flex-direction: column;
			width: 100%;
		}

		.cta .btn {
			width: 100%;
		}

		.tech-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--space-sm);
		}

		.tech-card {
			padding: var(--space-sm);
		}

		.tech-icon {
			font-size: 2rem;
			margin-bottom: var(--space-xs);
		}

		.tech-name {
			font-size: 0.875rem;
		}

		.feature-icon {
			font-size: 2.5rem;
		}
	}
</style>
