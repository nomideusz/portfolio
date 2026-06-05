<script lang="ts">
	import { onMount } from 'svelte';
	import { zaurFrameSvg, type ZaurFrame } from '$lib/zaur-sprite';

	interface Props {
		scale?: number;
		color?: string;
		duration?: string;
		contactButton?: HTMLAnchorElement | null;
		onPressContact?: () => void;
	}

	let {
		scale = 2,
		color = 'currentColor',
		duration = '120s',
		contactButton = null,
		onPressContact
	}: Props = $props();

	let frame = $state<ZaurFrame>('walkA');
	let reducedMotion = $state(false);
	let walkerEl = $state<HTMLDivElement | null>(null);

	const svg = $derived(zaurFrameSvg(frame, color, scale, 'right'));
	const spriteWidth = $derived(20 * scale);

	onMount(() => {
		const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
		reducedMotion = mq.matches;

		const onMotionChange = (e: MediaQueryListEvent) => {
			reducedMotion = e.matches;
		};
		mq.addEventListener('change', onMotionChange);

		const walkInterval = window.setInterval(() => {
			if (reducedMotion) return;
			frame = frame === 'walkA' ? 'walkB' : 'walkA';
		}, 420);

		let raf = 0;
		let pressedThisLap = false;
		let lastWalkerLeft = 0;

		const checkContactOverlap = () => {
			if (!walkerEl || reducedMotion || !contactButton || !onPressContact) {
				raf = requestAnimationFrame(checkContactOverlap);
				return;
			}

			// Only when the desktop nav bar is visible (not the mobile drawer)
			if (window.innerWidth <= 768) {
				raf = requestAnimationFrame(checkContactOverlap);
				return;
			}

			const walker = walkerEl.getBoundingClientRect();
			const contact = contactButton.getBoundingClientRect();

			if (contact.width < 1) {
				raf = requestAnimationFrame(checkContactOverlap);
				return;
			}

			// Animation loop: zaur jumps back to the left edge
			if (walker.left < lastWalkerLeft - 80) {
				pressedThisLap = false;
			}
			lastWalkerLeft = walker.left;

			const zaurCenter = walker.left + walker.width * 0.55;
			const overlaps =
				zaurCenter >= contact.left - 6 &&
				zaurCenter <= contact.right + 6 &&
				walker.bottom >= contact.bottom - 12;

			if (overlaps && !pressedThisLap) {
				pressedThisLap = true;
				onPressContact();
			}

			raf = requestAnimationFrame(checkContactOverlap);
		};

		raf = requestAnimationFrame(checkContactOverlap);

		return () => {
			mq.removeEventListener('change', onMotionChange);
			window.clearInterval(walkInterval);
			cancelAnimationFrame(raf);
		};
	});
</script>

<div
	bind:this={walkerEl}
	class="zaur-walker"
	class:paused={reducedMotion}
	style="--zaur-walk-duration: {duration}; --zaur-sprite-width: {spriteWidth}px"
	aria-hidden="true"
>
	<span class="zaur-walker-sprite">
		{@html reducedMotion ? zaurFrameSvg('idle', color, scale, 'right') : svg}
	</span>
</div>

<style>
	.zaur-walker {
		position: absolute;
		bottom: 0;
		left: 0;
		width: var(--zaur-sprite-width);
		height: 0;
		pointer-events: none;
		animation: zaur-patrol var(--zaur-walk-duration) linear infinite;
		will-change: left;
	}

	.zaur-walker.paused {
		animation: none;
		left: 1.5rem;
	}

	.zaur-walker-sprite {
		position: absolute;
		bottom: 5px;
		left: 0;
		display: block;
		line-height: 0;
		filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.15));
	}

	@keyframes zaur-patrol {
		from {
			left: 0;
		}
		to {
			left: calc(100% - var(--zaur-sprite-width));
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.zaur-walker {
			animation: none;
			left: 1.5rem;
		}
	}
</style>
