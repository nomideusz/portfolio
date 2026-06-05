<script lang="ts">
	import { zaurFrameSvg } from '$lib/zaur-sprite';

	interface Props {
		scale?: number;
		color?: string;
		facing?: 'left' | 'right';
	}

	let { scale = 2, color = 'currentColor', facing = 'right' }: Props = $props();

	const svg = $derived(zaurFrameSvg('idle', color, scale, facing));
</script>

<span class="zaur-sprite" aria-hidden="true">
	{@html svg}
</span>

<style>
	.zaur-sprite {
		display: inline-flex;
		align-items: center;
		line-height: 0;
		flex-shrink: 0;
	}
</style>
