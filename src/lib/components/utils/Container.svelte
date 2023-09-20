<script lang="ts">
	import type { PositionType } from '$lib/types';
	import Position from './Position.svelte';

	export let title = "";
	export let titlePosition: PositionType = 'left';
</script>

<section>
	<Position
		left={titlePosition === 'left'}
		center={titlePosition === 'center'}
		right={titlePosition === 'right'}
	>
		{#if title}
			<h2>{title}</h2>
		{/if}
	</Position>
	<slot />
</section>

<style>
	section {
		padding-inline: var(--size-7);
		padding-block: var(--size-8);
		background-color: var(--bg-secondary);
		color: var(--text-primary);
		font-size: var(--fontsize-sm);
	}

	h2 {
		font-weight: bold;
		font-size: var(--font-size-md);
		margin-bottom: var(--size-3);
	}

	h2::before,
	h2::after {
		display: inline-block;
		content: '☘';
		color: #77b255;
	}

	h2::before {
		padding-right: 0.2em;
	}

	h2::after {
		padding-left: 0.2em;
	}

	@media (max-width: 768px) {
		section {
			padding-inline: var(--size-4);
		}
	}
</style>
