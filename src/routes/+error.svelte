<script lang="ts">
	import { page } from '$app/stores';
	
	// Get error details
	$: status = $page.status;
	$: message = $page.error?.message || 'Something went wrong';
</script>

<svelte:head>
	<title>{status} - Error | Bartosz Dymet</title>
	<meta name="description" content="Page not found or an error occurred." />
</svelte:head>

<section class="error-page">
	<div class="container">
		<div class="error-content">
			<div class="error-visual">
				<div class="error-code gradient-text">{status}</div>
				<div class="error-icon">😕</div>
			</div>
			
			<h1>
				{#if status === 404}
					<span class="gradient-text">Page Not Found</span>
				{:else if status === 500}
					<span class="gradient-text">Server Error</span>
				{:else}
					<span class="gradient-text">Oops!</span>
				{/if}
			</h1>
			
			<p class="error-message">
				{#if status === 404}
					The page you're looking for doesn't exist. It might have been moved or deleted.
				{:else if status === 500}
					Something went wrong on our end. We're working to fix it!
				{:else}
					{message}
				{/if}
			</p>
			
			<div class="error-actions">
				<a href="/" class="btn btn-primary">
					← Back to Home
				</a>
				<a href="/projects" class="btn btn-secondary">
					View Projects
				</a>
			</div>
			
			<div class="helpful-links">
				<h3>You might be looking for:</h3>
				<ul>
					<li><a href="/about">About Me</a></li>
					<li><a href="/projects">My Projects</a></li>
					<li><a href="/contact">Get In Touch</a></li>
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	.error-page {
		min-height: calc(100vh - 80px);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-3xl) 0;
		position: relative;
		overflow: hidden;
	}

	.error-page::before {
		content: '';
		position: absolute;
		top: 10%;
		right: 10%;
		width: 300px;
		height: 300px;
		background: var(--color-accent);
		border: var(--border-extra-thick) solid var(--color-secondary);
		border-radius: var(--radius-blob);
		opacity: 0.3;
		pointer-events: none;
		transform: rotate(15deg);
		animation: float 8s ease-in-out infinite;
	}

	.error-page::after {
		content: '';
		position: absolute;
		bottom: 10%;
		left: 10%;
		width: 200px;
		height: 200px;
		background: var(--color-tertiary);
		border: var(--border-thick) solid var(--color-quaternary);
		border-radius: 50%;
		opacity: 0.3;
		pointer-events: none;
		animation: float 6s ease-in-out infinite reverse;
	}

	.container {
		position: relative;
		z-index: 1;
	}

	.error-content {
		text-align: center;
		max-width: 700px;
		margin: 0 auto;
	}

	.error-visual {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-xl);
		margin-bottom: var(--space-2xl);
		flex-wrap: wrap;
	}

	.error-code {
		font-size: clamp(4rem, 15vw, 8rem);
		font-weight: 900;
		line-height: 1;
		text-shadow: 4px 4px 0 var(--color-secondary), 8px 8px 0 var(--color-accent);
		animation: float 4s ease-in-out infinite;
	}

	.error-icon {
		font-size: clamp(3rem, 10vw, 5rem);
		animation: float 3s ease-in-out infinite 0.5s;
	}

	h1 {
		font-size: clamp(2rem, 5vw, 3.5rem);
		margin-bottom: var(--space-lg);
	}

	.error-message {
		font-size: 1.25rem;
		line-height: 1.8;
		color: var(--color-text-secondary);
		margin-bottom: var(--space-2xl);
		max-width: 500px;
		margin-left: auto;
		margin-right: auto;
	}

	.error-actions {
		display: flex;
		gap: var(--space-md);
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: var(--space-3xl);
	}

	.helpful-links {
		background: var(--color-surface);
		border: var(--border-medium) solid var(--color-border);
		border-radius: var(--radius-lg);
		padding: var(--space-xl);
		margin-top: var(--space-2xl);
		box-shadow: var(--shadow-md);
	}

	.helpful-links h3 {
		font-size: 1.25rem;
		margin-bottom: var(--space-md);
		color: var(--color-text);
	}

	.helpful-links ul {
		list-style: none;
		padding: 0;
		display: flex;
		gap: var(--space-lg);
		justify-content: center;
		flex-wrap: wrap;
	}

	.helpful-links li {
		display: inline-block;
	}

	.helpful-links a {
		color: var(--color-primary);
		text-decoration: none;
		font-weight: 600;
		font-size: 1.125rem;
		transition: all var(--transition-fast);
		padding: var(--space-xs) var(--space-sm);
		border-radius: var(--radius-sm);
	}

	.helpful-links a:hover {
		color: var(--color-secondary);
		background: rgba(0, 0, 0, 0.05);
		transform: translateY(-2px);
	}

	:global(.dark) .helpful-links a:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	@media (max-width: 768px) {
		.error-page {
			padding: var(--space-2xl) 0;
		}

		.error-visual {
			flex-direction: column;
			gap: var(--space-md);
		}

		.error-code {
			font-size: clamp(3rem, 12vw, 6rem);
		}

		.error-message {
			font-size: 1.125rem;
		}

		.error-actions {
			flex-direction: column;
			width: 100%;
		}

		.error-actions .btn {
			width: 100%;
		}

		.helpful-links ul {
			flex-direction: column;
			gap: var(--space-sm);
		}

		.helpful-links a {
			display: block;
		}
	}

	@media (max-width: 480px) {
		.error-page::before,
		.error-page::after {
			width: 150px;
			height: 150px;
		}

		.error-code {
			text-shadow: 2px 2px 0 var(--color-secondary), 4px 4px 0 var(--color-accent);
		}

		.helpful-links {
			padding: var(--space-lg);
		}
	}
</style>
