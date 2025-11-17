<script lang="ts">
	// Using Svelte 5 runes
	let greeting = $state('Hi, I\'m Bartosz Dymet');

	const technologies = [
		{ name: 'SvelteKit', icon: '⚡', color: '#FF3E00' },
		{ name: 'TypeScript', icon: '📘', color: '#3178C6' },
		{ name: 'HTML5/CSS3', icon: '🎨', color: '#E34F26' },
		{ name: 'SQL', icon: '🗄️', color: '#4479A1' },
		{ name: 'Docker', icon: '🐳', color: '#2496ED' },
		{ name: 'Linux/VPS', icon: '🐧', color: '#FCC624' },
		{ name: 'Git', icon: '📦', color: '#F05032' },
		{ name: 'Python', icon: '🐍', color: '#3776AB' },
	];
</script>

<section class="hero">
	<div class="container">
		<div class="hero-content animate-fade-in-up">
			<div class="badge">Available to start immediately</div>
			<h1>
				<span class="greeting">{greeting}</span>
				<span class="gradient-text">Full-Stack Web Developer</span>
			</h1>
			<p class="tagline">
				Over 15 years of freelance web development experience creating modern web applications
				with SvelteKit, TypeScript, and cutting-edge technologies. I deliver custom solutions
				from concept to deployment, with expertise in performance optimization and client collaboration.
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
					<div class="stat-number">50+</div>
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
		top: -50%;
		right: -20%;
		width: 60%;
		height: 150%;
		background: var(--gradient-primary);
		opacity: 0.03;
		border-radius: 50%;
		filter: blur(100px);
		pointer-events: none;
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
		background: var(--gradient-primary);
		color: white;
		border-radius: var(--radius-full);
		font-size: 0.875rem;
		font-weight: 600;
		margin-bottom: var(--space-lg);
		box-shadow: var(--shadow-md);
	}

	.greeting {
		display: block;
		font-size: clamp(1.25rem, 3vw, 1.5rem);
		font-weight: 500;
		color: var(--color-text-secondary);
		margin-bottom: var(--space-sm);
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
		border-radius: 50%;
		overflow: hidden;
		border: 4px solid var(--color-surface);
		box-shadow: var(--shadow-xl);
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
		inset: -20px;
		background: var(--gradient-primary);
		opacity: 0.3;
		filter: blur(30px);
		z-index: -1;
		border-radius: 50%;
		animation: pulse 3s ease-in-out infinite;
	}

	@keyframes pulse {
		0%, 100% {
			opacity: 0.3;
			transform: scale(1);
		}
		50% {
			opacity: 0.5;
			transform: scale(1.05);
		}
	}

	.floating-card {
		position: absolute;
		background: var(--color-surface);
		border-radius: var(--radius-xl);
		padding: var(--space-lg);
		box-shadow: var(--shadow-xl);
		z-index: 2;
	}

	.card-1 {
		top: 10%;
		left: 10%;
		animation: float 6s ease-in-out infinite;
	}

	.card-2 {
		top: 40%;
		right: 10%;
		animation: float 7s ease-in-out infinite 1s;
	}

	.card-3 {
		bottom: 15%;
		left: 25%;
		animation: float 8s ease-in-out infinite 2s;
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
		font-weight: 700;
		background: var(--gradient-primary);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: var(--space-xs);
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
		text-align: center;
		padding: var(--space-xl);
		cursor: pointer;
	}

	.tech-icon {
		font-size: 3rem;
		margin-bottom: var(--space-sm);
	}

	.tech-name {
		font-weight: 600;
		color: var(--color-text);
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--space-xl);
	}

	.feature-card {
		padding: var(--space-xl);
	}

	.feature-icon {
		font-size: 3rem;
		margin-bottom: var(--space-md);
	}

	.feature-card h3 {
		color: var(--color-text);
		margin-bottom: var(--space-md);
		font-size: 1.5rem;
	}

	.feature-card p {
		color: var(--color-text-secondary);
		line-height: 1.7;
		margin: 0;
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
	}

	@media (max-width: 768px) {
		.hero {
			min-height: auto;
			padding: var(--space-2xl) 0;
		}

		.tech-grid {
			grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
			gap: var(--space-md);
		}

		.features-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
