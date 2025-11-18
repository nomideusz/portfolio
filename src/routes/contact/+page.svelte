<script lang="ts">
	// Using Svelte 5 runes
	interface ContactMethod {
		icon: string;
		title: string;
		value: string;
		link: string;
	}

	interface FormErrors {
		name?: string;
		email?: string;
		message?: string;
	}

	let formData = $state({
		name: '',
		email: '',
		message: ''
	});

	let errors = $state<FormErrors>({});
	let touched = $state({
		name: false,
		email: false,
		message: false
	});

	let submitted = $state(false);
	let isSubmitting = $state(false);
	let errorMessage = $state('');

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

	function validateField(field: keyof FormErrors): string | undefined {
		const value = formData[field].trim();

		switch (field) {
			case 'name':
				if (!value) return 'Name is required';
				if (value.length < 2) return 'Name must be at least 2 characters';
				if (value.length > 100) return 'Name must be less than 100 characters';
				break;

			case 'email':
				if (!value) return 'Email is required';
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (!emailRegex.test(value)) return 'Please enter a valid email address';
				break;

			case 'message':
				if (!value) return 'Message is required';
				if (value.length < 10) return 'Message must be at least 10 characters';
				if (value.length > 1000) return 'Message must be less than 1000 characters';
				break;
		}

		return undefined;
	}

	function validateForm(): boolean {
		const newErrors: FormErrors = {
			name: validateField('name'),
			email: validateField('email'),
			message: validateField('message')
		};

		errors = newErrors;
		return !newErrors.name && !newErrors.email && !newErrors.message;
	}

	function handleBlur(field: keyof FormErrors) {
		touched[field] = true;
		errors[field] = validateField(field);
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();

		// Mark all fields as touched
		touched = { name: true, email: true, message: true };

		// Validate all fields
		if (!validateForm()) {
			errorMessage = 'Please fix the errors above before submitting';
			return;
		}

		isSubmitting = true;
		errorMessage = '';

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || 'Failed to send message');
			}

			submitted = true;

			// Reset form after 5 seconds
			setTimeout(() => {
				submitted = false;
				formData = { name: '', email: '', message: '' };
				errors = {};
				touched = { name: false, email: false, message: false };
			}, 5000);
		} catch (error) {
			console.error('Error submitting form:', error);
			errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<svelte:head>
	<title>Contact - Bartosz Dymet | Get In Touch</title>
	<meta name="description" content="Get in touch with Bartosz Dymet for freelance web development projects. Available for hire - full-stack developer specializing in SvelteKit and TypeScript." />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Contact Bartosz Dymet - Full-Stack Web Developer" />
	<meta property="og:description" content="Available for freelance web development projects. Get in touch to discuss your project." />
	<meta property="og:image" content="/bartek.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Contact Bartosz Dymet - Web Developer" />
	<meta name="twitter:description" content="Available for freelance web development projects. Let's build something amazing together." />
	<meta name="twitter:image" content="/bartek.png" />
</svelte:head>

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
					<form onsubmit={handleSubmit} novalidate>
						{#if errorMessage}
							<div class="error-message-banner animate-fade-in-up">
								<span class="error-icon">⚠️</span>
								{errorMessage}
							</div>
						{/if}

						<div class="form-row">
							<div class="form-group">
								<label for="name">Name <span class="required">*</span></label>
								<input
									type="text"
									id="name"
									bind:value={formData.name}
									onblur={() => handleBlur('name')}
									placeholder="John Doe"
									disabled={isSubmitting}
									class:has-error={touched.name && errors.name}
								/>
								{#if touched.name && errors.name}
									<div class="field-error">
										<span class="error-icon-small">✕</span>
										{errors.name}
									</div>
								{/if}
							</div>

							<div class="form-group">
								<label for="email">Email <span class="required">*</span></label>
								<input
									type="email"
									id="email"
									bind:value={formData.email}
									onblur={() => handleBlur('email')}
									placeholder="john@example.com"
									disabled={isSubmitting}
									class:has-error={touched.email && errors.email}
								/>
								{#if touched.email && errors.email}
									<div class="field-error">
										<span class="error-icon-small">✕</span>
										{errors.email}
									</div>
								{/if}
							</div>
						</div>

						<div class="form-group">
							<label for="message">Message <span class="required">*</span></label>
							<textarea
								id="message"
								bind:value={formData.message}
								onblur={() => handleBlur('message')}
								placeholder="Tell me about your project..."
								rows="6"
								disabled={isSubmitting}
								class:has-error={touched.message && errors.message}
							></textarea>
							{#if touched.message && errors.message}
								<div class="field-error">
									<span class="error-icon-small">✕</span>
									{errors.message}
								</div>
							{/if}
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
		position: relative;
	}

	.success-message::before {
		content: '✨';
		position: absolute;
		top: 20px;
		left: 20px;
		font-size: 2rem;
		animation: float 3s ease-in-out infinite;
	}

	.success-message::after {
		content: '🎉';
		position: absolute;
		top: 20px;
		right: 20px;
		font-size: 2rem;
		animation: float 3s ease-in-out infinite 0.5s;
	}

	.success-icon {
		width: 100px;
		height: 100px;
		margin: 0 auto var(--space-lg);
		background: var(--color-quaternary);
		border-radius: var(--radius-blob);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 3.5rem;
		color: var(--color-text);
		box-shadow: 5px 5px 0 var(--color-primary), 10px 10px 0 var(--color-secondary);
		border: var(--border-extra-thick) solid var(--color-accent);
		animation: float 4s ease-in-out infinite;
	}

	.success-message h3 {
		font-size: 2.5rem;
		color: var(--color-primary);
		margin-bottom: var(--space-md);
		text-shadow: 2px 2px 0 var(--color-secondary);
	}

	.success-message p {
		color: var(--color-text-secondary);
		font-size: 1.25rem;
		font-weight: 600;
	}

	.error-message-banner {
		background: #FFE5E5;
		border: var(--border-medium) solid var(--color-primary);
		border-left: var(--border-extra-thick) solid var(--color-primary);
		border-radius: var(--radius-md);
		padding: var(--space-md);
		color: #D32F2F;
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		font-weight: 600;
		margin-bottom: var(--space-lg);
		box-shadow: 4px 4px 0 rgba(255, 0, 110, 0.2);
	}

	.error-icon {
		font-size: 1.5rem;
		flex-shrink: 0;
	}

	.field-error {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		color: var(--color-primary);
		font-size: 0.875rem;
		font-weight: 600;
		margin-top: var(--space-xs);
		animation: fadeInUp 0.3s ease-out;
	}

	.error-icon-small {
		font-size: 0.875rem;
		font-weight: 700;
	}

	.required {
		color: var(--color-primary);
		font-weight: 900;
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
		border: var(--border-medium) solid var(--color-border);
		border-radius: var(--radius-sm);
		background: var(--color-surface);
		color: var(--color-text);
		font-family: inherit;
		font-size: 1rem;
		font-weight: 500;
		transition: all var(--transition-base);
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: var(--color-primary);
		transform: translate(-2px, -2px);
		box-shadow: var(--shadow-md);
	}

	input.has-error,
	textarea.has-error {
		border-color: var(--color-primary);
		background: rgba(255, 0, 110, 0.05);
	}

	input.has-error:focus,
	textarea.has-error:focus {
		border-color: var(--color-primary);
		box-shadow: 0 0 0 3px rgba(255, 0, 110, 0.1), var(--shadow-md);
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
		background: var(--color-surface);
		border-radius: var(--radius-lg);
		border: var(--border-medium) solid;
		text-decoration: none;
		transition: all var(--transition-base);
	}

	.contact-method:nth-child(1) {
		border-color: var(--color-primary);
		background: var(--color-surface);
		border-left: var(--border-extra-thick) solid var(--color-primary);
	}

	.contact-method:nth-child(2) {
		border-color: var(--color-secondary);
		background: var(--color-surface);
		border-left: var(--border-extra-thick) solid var(--color-secondary);
	}

	.contact-method:nth-child(3) {
		border-color: var(--color-accent);
		background: var(--color-surface);
		border-left: var(--border-extra-thick) solid var(--color-accent);
	}

	.contact-method:nth-child(4) {
		border-color: var(--color-tertiary);
		background: var(--color-surface);
		border-left: var(--border-extra-thick) solid var(--color-tertiary);
	}

	.contact-method:hover {
		transform: translate(-4px, -4px);
		box-shadow: 6px 6px 0 currentColor;
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

	.availability-card {
		background: var(--color-surface);
		border-color: var(--color-quaternary);
		border-left: var(--border-extra-thick) solid var(--color-quaternary);
	}

	.response-card {
		background: var(--color-surface);
		border-color: var(--color-orange);
		border-left: var(--border-extra-thick) solid var(--color-orange);
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
			flex-direction: row;
			flex-wrap: wrap;
		}

		.contact-info {
			flex: 1;
			min-width: 300px;
		}

		.availability-card,
		.response-card {
			flex: 1;
			min-width: 200px;
		}
	}

	@media (max-width: 768px) {
		.form-row {
			grid-template-columns: 1fr;
		}

		.form-section {
			padding: var(--space-lg);
		}

		.info-section {
			flex-direction: column;
		}

		.contact-info,
		.availability-card,
		.response-card {
			min-width: unset;
		}
	}

	@media (max-width: 480px) {
		.page-header {
			margin-bottom: var(--space-xl);
		}

		.subtitle {
			font-size: 1rem;
		}

		.form-section {
			padding: var(--space-md);
		}

		.success-icon {
			width: 60px;
			height: 60px;
			font-size: 2rem;
		}

		.success-message h3 {
			font-size: 1.5rem;
		}

		.success-message p {
			font-size: 1rem;
		}

		.contact-info {
			padding: var(--space-md);
		}

		.contact-info h3 {
			font-size: 1.25rem;
		}

		.contact-method {
			padding: var(--space-sm);
			gap: var(--space-sm);
		}

		.method-icon {
			font-size: 1.5rem;
		}

		.method-title {
			font-size: 0.875rem;
		}

		.method-value {
			font-size: 0.8rem;
		}

		.availability-card,
		.response-card {
			padding: var(--space-md);
		}

		.availability-icon,
		.response-icon {
			font-size: 2rem;
		}
	}
</style>
