<script lang="ts">
	// Using Svelte 5 runes
	let skills = $state([
		'JavaScript/TypeScript',
		'Svelte/SvelteKit',
		'React/Next.js',
		'Node.js',
		'HTML/CSS',
		'Git'
	]);
</script>

<section class="about">
	<h1>About Me</h1>

	<div class="content">
		<div class="bio">
			<h2>Hello!</h2>
			<p>
				I'm a passionate web developer focused on creating beautiful, performant, and accessible
				web applications. I love working with modern technologies and solving complex problems.
			</p>
			<p>
				With experience in both frontend and backend development, I enjoy building full-stack
				applications that make a difference.
			</p>
		</div>

		<div class="skills">
			<h2>Skills</h2>
			<div class="skills-grid">
				{#each skills as skill}
					<div class="skill-tag">{skill}</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.about {
		max-width: 800px;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.bio p {
		margin-bottom: 1rem;
		font-size: 1.1rem;
		line-height: 1.8;
	}

	.skills-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 1rem;
	}

	.skill-tag {
		background: var(--color-bg-secondary);
		padding: 0.5rem 1rem;
		border-radius: 2rem;
		border: 1px solid var(--color-border);
		font-size: 0.9rem;
	}
</style>
