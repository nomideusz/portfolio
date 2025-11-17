<script lang="ts">
	// Using Svelte 5 runes
	interface ContactMethod {
		icon: string;
		title: string;
		value: string;
		link: string;
	}

	let formData = $state({
		name: '',
		email: '',
		message: ''
	});

	let submitted = $state(false);
	let isSubmitting = $state(false);

	const contactMethods: ContactMethod[] = [
		{
			icon: '📧',
			title: 'Email',
			value: 'b.dymet@gmail.com',
			link: 'mailto:b.dymet@gmail.com'
		},
		{
			icon: '📱',
			title: 'Phone',
			value: '+48 602 846 912',
			link: 'tel:+48602846912'
		},
		{
			icon: '🐙',
			title: 'GitHub',
			value: 'github.com/nomideusz',
			link: 'https://github.com/nomideusz'
		},
		{
			icon: '📍',
			title: 'Location',
			value: 'Krakow, Poland',
			link: 'https://www.google.com/maps/place/Krakow,+Poland'
		}
	];

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;

		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 1000));

		// In a real app, you'd send this to a backend
		console.log('Form submitted:', formData);
		submitted = true;
		isSubmitting = false;

		// Reset form after 5 seconds
		setTimeout(() => {
			submitted = false;
			formData = { name: '', email: '', message: '' };
		}, 5000);
	}
</script>

<section class="contact-page">
	<div class="container">
		<div class="page-header">
			<h1>
				<span class="gradient-text">Let's Talk</span>
			</h1>
			<p class="subtitle">
				Have a project in mind or want to collaborate? I'd love to hear from you!
			</p>
		</div>

		<div class="content-grid">
			<div class="form-section card">
				{#if submitted}
					<div class="success-message animate-fade-in-up">
						<div class="success-icon">✓</div>
						<h3>Message Sent!</h3>
						<p>Thanks for reaching out! I'll get back to you as soon as possible.</p>
					</div>
				{:else}
					<form on:submit={handleSubmit}>
						<div class="form-row">
							<div class="form-group">
								<label for="name">Name</label>
								<input
									type="text"
									id="name"
									bind:value={formData.name}
									required
									placeholder="John Doe"
									disabled={isSubmitting}
								/>
							</div>

							<div class="form-group">
								<label for="email">Email</label>
								<input
									type="email"
									id="email"
									bind:value={formData.email}
									required
									placeholder="john@example.com"
									disabled={isSubmitting}
								/>
							</div>
						</div>

						<div class="form-group">
							<label for="message">Message</label>
							<textarea
								id="message"
								bind:value={formData.message}
								required
								placeholder="Tell me about your project..."
								rows="6"
								disabled={isSubmitting}
							></textarea>
						</div>

						<button type="submit" class="btn btn-primary submit-btn" disabled={isSubmitting}>
							{#if isSubmitting}
								<span class="spinner"></span>
								Sending...
							{:else}
								Send Message
								<span class="arrow">→</span>
							{/if}
						</button>
					</form>
				{/if}
			</div>

			<div class="info-section">
				<div class="contact-info card">
					<h3>Contact Information</h3>
					<p>Feel free to reach out through any of these channels:</p>

					<div class="contact-methods">
						{#each contactMethods as method}
							<a href={method.link} target="_blank" rel="noopener noreferrer" class="contact-method">
								<div class="method-icon">{method.icon}</div>
								<div class="method-info">
									<div class="method-title">{method.title}</div>
									<div class="method-value">{method.value}</div>
								</div>
								<div class="method-arrow">→</div>
							</a>
						{/each}
					</div>
				</div>

				<div class="availability-card card">
					<div class="availability-icon">🟢</div>
					<h4>Currently Available</h4>
					<p>Open for freelance projects and collaborations</p>
				</div>

				<div class="response-card card">
					<div class="response-icon">⚡</div>
					<h4>Quick Response</h4>
					<p>I typically respond within 24 hours</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.contact-page {
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

	.content-grid {
		display: grid;
		grid-template-columns: 1.5fr 1fr;
		gap: var(--space-xl);
		align-items: start;
	}

	.form-section {
		padding: var(--space-2xl);
	}

	.success-message {
		text-align: center;
		padding: var(--space-3xl) var(--space-xl);
	}

	.success-icon {
		width: 80px;
		height: 80px;
		margin: 0 auto var(--space-lg);
		background: var(--gradient-primary);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 3rem;
		color: white;
		box-shadow: var(--shadow-glow);
	}

	.success-message h3 {
		font-size: 2rem;
		color: var(--color-text);
		margin-bottom: var(--space-sm);
	}

	.success-message p {
		color: var(--color-text-secondary);
		font-size: 1.125rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-md);
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	label {
		font-weight: 600;
		color: var(--color-text);
		font-size: 0.95rem;
	}

	input,
	textarea {
		padding: var(--space-md);
		border: 2px solid var(--color-border);
		border-radius: var(--radius-md);
		background: var(--color-surface);
		color: var(--color-text);
		font-family: inherit;
		font-size: 1rem;
		transition: all var(--transition-base);
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: var(--color-primary);
		box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
	}

	input:disabled,
	textarea:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	textarea {
		resize: vertical;
		min-height: 150px;
	}

	.submit-btn {
		margin-top: var(--space-md);
		width: 100%;
		position: relative;
	}

	.submit-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.spinner {
		display: inline-block;
		width: 16px;
		height: 16px;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-top-color: white;
		border-radius: 50%;
		animation: spin 0.6s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.info-section {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.contact-info {
		padding: var(--space-xl);
	}

	.contact-info h3 {
		font-size: 1.5rem;
		margin-bottom: var(--space-sm);
		color: var(--color-text);
	}

	.contact-info p {
		color: var(--color-text-secondary);
		margin-bottom: var(--space-xl);
	}

	.contact-methods {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.contact-method {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-md);
		background: var(--color-bg-secondary);
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
		text-decoration: none;
		transition: all var(--transition-base);
	}

	.contact-method:hover {
		transform: translateX(4px);
		background: var(--color-bg-tertiary);
		border-color: var(--color-primary);
	}

	.method-icon {
		font-size: 2rem;
		flex-shrink: 0;
	}

	.method-info {
		flex: 1;
	}

	.method-title {
		font-weight: 600;
		color: var(--color-text);
		font-size: 0.95rem;
	}

	.method-value {
		color: var(--color-text-secondary);
		font-size: 0.875rem;
		margin-top: 2px;
	}

	.method-arrow {
		color: var(--color-primary);
		font-size: 1.25rem;
		transition: transform var(--transition-base);
	}

	.contact-method:hover .method-arrow {
		transform: translateX(4px);
	}

	.availability-card,
	.response-card {
		padding: var(--space-lg);
		text-align: center;
	}

	.availability-icon,
	.response-icon {
		font-size: 2.5rem;
		margin-bottom: var(--space-sm);
	}

	.availability-card h4,
	.response-card h4 {
		font-size: 1.125rem;
		color: var(--color-text);
		margin-bottom: var(--space-xs);
	}

	.availability-card p,
	.response-card p {
		color: var(--color-text-secondary);
		font-size: 0.95rem;
		margin: 0;
	}

	@media (max-width: 1024px) {
		.content-grid {
			grid-template-columns: 1fr;
		}

		.info-section {
			order: -1;
		}
	}

	@media (max-width: 768px) {
		.form-row {
			grid-template-columns: 1fr;
		}

		.form-section {
			padding: var(--space-lg);
		}
	}
</style>
