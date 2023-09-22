<script lang="ts">
	import { PlayCircle, PauseCircle } from 'lucide-svelte';
	import { strokeWidth } from '$lib/data/strokeWidth';
	import { audioGroupState } from '$lib/stores/audioGroupState';

	export let src: string;
	export let title: string;
	export let artist: string;
	export let thumbImage: string;

	let isPlaying = false;

	const togglePlayback = () => {
		if ($audioGroupState.currentSrc !== src || !$audioGroupState.isPlaying) {
			audioGroupState.update((state) => ({
				...state,
				isPlaying: true,
				currentSrc: src,
				title,
				author: artist,
				thumbImage
			}));
			isPlaying = true;
		} else {
			audioGroupState.update((state) => ({ ...state, isPlaying: false }));
			isPlaying = false;
		}
	};

	$: if ($audioGroupState.currentSrc !== src || !$audioGroupState.isPlaying) {
		isPlaying = false;
	} else if ($audioGroupState.currentSrc === src && $audioGroupState.isPlaying) {
		isPlaying = true;
	}
	$: isPlaying = $audioGroupState.currentSrc === src && $audioGroupState.isPlaying;
</script>

<div class="audio-btn">
	<!-- Playback toggle button -->
	<button aria-label={isPlaying ? 'Pause' : 'Play'} on:click={togglePlayback}>
		{#if !isPlaying}
			<PlayCircle {strokeWidth} />
		{:else}
			<PauseCircle {strokeWidth} />
		{/if}
	</button>
	<p>{title}</p>
</div>

<style>
	button {
		display: flex;
		justify-content: center;
		margin-right: var(--size-5);
	}

	button:focus {
		outline: none;
	}

	p {
		font-size: var(--font-size-sm);
		font-weight: 500;
	}

	.audio-btn {
		font-size: var(--font-size-sm);
		padding: var(--size-2) var(--size-7);
		border-radius: var(--radius-round);
		background-color: hsl(var(--primary-hsl), 80%);
		border: 2px solid var(--primary);
		display: inline-grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: var(--size-2);
	}
</style>
