<script lang="ts">
	import { AlignJustify } from 'lucide-svelte';
	import { isMobileNavOpen } from '$lib/stores/mobileNavState';
	import * as config from '$lib/config';
	import Toggle from '$lib/components/base/Toggle.svelte';
</script>

<header>
	<!-- Title -->
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

	<div class="buttons">
		<!-- Theme switcher -->
		<Toggle />

		<!-- Hamburger button (mobile only) -->
		<div class="hamburger">
			<button on:click={isMobileNavOpen.toggleOpen}>
				<AlignJustify />
			</button>
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: var(--size-7);
		padding-inline: var(--size-8);
	}

	a {
		letter-spacing: var(--font-letterspacing-3);
	}

	a:hover {
		text-decoration: underline;
	}

	b {
		font-size: var(--font-size-lg); 
		color: var(--primary);

		/* halloween */
		/* font-size: var(--font-size-7); */
	}

	/* halloween */
	/* .title {
		color: var(--gray-12);
		text-shadow: 1px 1px var(--primary);
		font-family: 'Creepster', cursive;
	} */

	.hamburger {
		position: fixed;
		top: 15px;
		right: 12px;
		display: grid;
		place-items: center;
		color: var(--primary);
		border: 1.5px solid var(--text-primary);
		background-color: var(--gray-10);
		padding: var(--size-2);
		border-radius: var(--radius-round);
		z-index: var(--layer-5);
	}

	.buttons {
		display: flex;
		align-items: center;
		gap: var(--size-3);
	}

	@media (max-width: 768px) {
		header {
			padding-inline: var(--size-3);
			padding: var(--size-3);
			margin-bottom: var(--size-5);
			border-bottom: 1px solid var(--text-secondary);

			/* halloween */
			/* border-bottom: 1.3px dashed white; */
		}

		b {
			font-size: var(--font-size-md);
		}

		.buttons {
			padding-right: var(--size-8);
		}
	}

	@media (min-width: 769px) {
		.hamburger {
			display: none;
		}
	}
</style>
