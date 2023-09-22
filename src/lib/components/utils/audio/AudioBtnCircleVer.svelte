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
</div>

<style>
	button {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    background-color: hsl(var(--primary-hsl), 80%);
    border-radius: var(--radius-round);
		border: 1px solid var(--primary);
	}

	button:focus {
		outline: none;
	}
</style>
