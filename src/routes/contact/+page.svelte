<script lang="ts">
	// Using Svelte 5 runes
	let formData = $state({
		name: '',
		email: '',
		message: ''
	});

	let submitted = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		// In a real app, you'd send this to a backend
		console.log('Form submitted:', formData);
		submitted = true;

		// Reset form after 3 seconds
		setTimeout(() => {
			submitted = false;
			formData = { name: '', email: '', message: '' };
		}, 3000);
	}
</script>

<section class="contact">
	<h1>Get In Touch</h1>
	<p class="intro">
		Have a project in mind or want to collaborate? Feel free to reach out!
	</p>

	{#if submitted}
		<div class="success-message">
			Thanks for your message! I'll get back to you soon.
		</div>
	{:else}
		<form on:submit={handleSubmit}>
			<div class="form-group">
				<label for="name">Name</label>
				<input
					type="text"
					id="name"
					bind:value={formData.name}
					required
					placeholder="Your name"
				/>
			</div>

			<div class="form-group">
				<label for="email">Email</label>
				<input
					type="email"
					id="email"
					bind:value={formData.email}
					required
					placeholder="your@email.com"
				/>
			</div>

			<div class="form-group">
				<label for="message">Message</label>
				<textarea
					id="message"
					bind:value={formData.message}
					required
					placeholder="Your message..."
					rows="5"
				></textarea>
			</div>

			<button type="submit" class="submit-btn">Send Message</button>
		</form>
	{/if}

	<div class="social-links">
		<h2>Connect with me</h2>
		<div class="links">
			<a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
			<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
			<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
		</div>
	</div>
</section>

<style>
	.contact {
		max-width: 600px;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.intro {
		color: var(--color-text-secondary);
		margin-bottom: 2rem;
		font-size: 1.1rem;
	}

	.success-message {
		background: #d4edda;
		color: #155724;
		padding: 1rem;
		border-radius: 0.5rem;
		margin-bottom: 2rem;
		text-align: center;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-bottom: 3rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	label {
		font-weight: 600;
	}

	input,
	textarea {
		padding: 0.75rem;
		border: 1px solid var(--color-border);
		border-radius: 0.5rem;
		background: var(--color-bg);
		color: var(--color-text);
		font-family: inherit;
		font-size: 1rem;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: var(--color-primary);
	}

	.submit-btn {
		background: var(--color-primary);
		color: white;
		padding: 0.75rem 1.5rem;
		border: none;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: transform 0.2s;
	}

	.submit-btn:hover {
		transform: translateY(-2px);
	}

	.social-links {
		text-align: center;
		padding-top: 2rem;
		border-top: 1px solid var(--color-border);
	}

	.social-links h2 {
		margin-bottom: 1rem;
	}

	.links {
		display: flex;
		justify-content: center;
		gap: 2rem;
	}

	.links a {
		color: var(--color-primary);
		text-decoration: none;
		font-weight: 600;
		transition: color 0.2s;
	}

	.links a:hover {
		color: var(--color-secondary);
	}
</style>
