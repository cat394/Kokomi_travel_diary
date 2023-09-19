<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	import { theme, toggleTheme } from '$lib/theme';
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10 }}>
			<Moon />
			<span class="text">だーく</span>
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<Sun />
			<span class="text">らいと</span>
		</div>
	{/if}
</button>

<style>
	button {
		font-size: var(--font-size-3);
	}

	button > * {
		display: flex;
		align-items: center;
		gap: var(--size-3);
	}

	@media (max-width: 768px) {
		.text {
			display: none;
		}
	}
</style>
