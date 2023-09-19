<script lang="ts">
	import type { PositionType } from '$lib/types';
	import Position from '$lib/components/utils/Position.svelte';

	export let textPosition: PositionType = 'left';
</script>

<Position center>
	<div class="hero">
		<slot name="media" />
		<div class={`wrapper ${textPosition}`}>
			<h1 class="text"><slot /></h1>
		</div>
	</div>
</Position>

<style>
	.hero {
		display: inline-block;
		position: relative;
		border-radius: var(--radius-3);
		overflow: hidden;
	}

	.wrapper {
		display: flex;
		align-items: center;
		position: absolute;
		inset: 0;
		z-index: var(--layer-1);
		padding-inline: var(--size-fluid-3);
	}

	.text {
		font-weight: bold;
		font-size: var(--font-size-5);
		color: var(--pink-5);
		text-shadow: 0 0 10px rgb(255, 255, 255);
	}

	@media (min-width: 768px) {
		.text {
			font-size: var(--font-size-8);
		}
	}

	.left {
		justify-content: flex-start;
	}

	.center {
		justify-content: center;
	}

	.right {
		justify-content: flex-end;
	}
</style>
