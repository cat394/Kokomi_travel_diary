<script lang="ts">
	import { Play, Pause, Repeat, X } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { strokeWidth } from '$lib/data/strokeWidth';
	import { audioGroupState } from '$lib/stores/audioGroupState';

	export let loopBtn = false;

	let audioElement: HTMLAudioElement;

	// Reactive statement to handle global audio state changes
	$: {
		if (audioElement) {
			if ($audioGroupState.currentSrc && $audioGroupState.isPlaying) {
				audioElement.play();
			} else {
				audioElement.pause();
			}
			audioElement.loop = $audioGroupState.loop;
		}
	}

	// Handlers
	const togglePlayback = () => {
		audioGroupState.update((state) => ({
			...state,
			isPlaying: $audioGroupState.currentSrc ? !state.isPlaying : true
		}));
	};

	const toggleLoopStatus = () => {
		audioGroupState.update((state) => ({ ...state, loop: !state.loop }));
	};

	const closeController = () => {
		showController = false;
		audioGroupState.update((state) => ({ ...state, isPlaying: false }));
	};

	let showController = false;

	$: if ($audioGroupState.isPlaying) {
		showController = true;
	}
</script>

{#if showController}
	<div transition:fly={{ y: 100, duration: 1000 }} class="audio-controller">
		<audio
			src={$audioGroupState.currentSrc}
			bind:this={audioElement}
			on:ended={() => audioGroupState.update((state) => ({ ...state, currentTime: 0 }))}
			on:loadedmetadata={() => (audioElement.loop = $audioGroupState.loop)}
		/>

		<div class="image-area">
			<img
				src={$audioGroupState.thumbImage}
				alt={$audioGroupState.title}
				width="336"
				height="168"
			/>
		</div>

		<div class="text-area">
			<p>{$audioGroupState.title}</p>
			<p>{$audioGroupState.author}</p>
		</div>

		<div class="btn-area">
			<!-- Playback toggle button -->
			<button aria-label={$audioGroupState.isPlaying ? 'Pause' : 'Play'} on:click={togglePlayback}>
				{#if !$audioGroupState.isPlaying}
					<Play {strokeWidth} />
				{:else}
					<Pause {strokeWidth} />
				{/if}
			</button>

			<!-- Loop toggle button -->
			{#if loopBtn}
				<button
					class="ax-btn loop-btn"
					aria-label={$audioGroupState.loop ? 'Stop Repeat' : 'Start Repeat'}
					on:click={toggleLoopStatus}
				>
					<Repeat {strokeWidth} />
				</button>
			{/if}

			<button class="close-btn" on:click={closeController}>
				<X {strokeWidth} />
			</button>
		</div>
	</div>
{/if}

<style>
	img {
		max-height: 60px;
		width: auto;
		border-radius: var(--size-2);
	}

	button {
		font-size: var(--font-size-lg);
	}

	button:focus {
		outline: none;
	}

	p {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-size: var(--font-size-md);
	}

	p:first-of-type {
		margin-bottom: var(--size-1);
		line-height: 1;
	}

	p:last-of-type {
		font-size: var(--font-size-sm);
		line-height: 1.2;
	}

	.audio-controller {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: var(--size-7);
		padding: var(--size-4);
		padding-right: var(--size-7);
		background-color: hsl(var(--bg-primary-hsl) / 80%);
		z-index: var(--layer-4);
	}

	.text-area {
		flex-grow: 1;
	}

	.btn-area {
		align-self: center;
		display: flex;
		gap: var(--size-6);
	}

	.loop-btn {
		transition: color 300ms;
	}

	.loop-btn[aria-label='Start Repeat'] {
		color: var(--primary);
	}

	@media (max-width: 768px) {
		img {
			max-height: 45px;
		}
		
		button {
			font-size: calc(var(--font-size-md) / 2);
		}

		.audio-controller {
			gap: 0;
			column-gap: var(--size-3);
			padding: var(--size-3) var(--size-2);
			padding-right: var(--size-5);
		}

		.text-area p {
			font-size: var(--font-size-sm);
		}

		.btn-area {
			justify-self: center;
		}

		.loop-btn {
			display: none;
		}
	}
</style>
