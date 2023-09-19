<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { isMobileNavOpen } from '$lib/stores/mobileNavState';
	import { navs } from '$lib/data/navs';
	import { fade } from 'svelte/transition';

	const getLastPathSegment = (url: string) => '/' + url.split('/').at(-1);

	const currentPageSegment = derived(page, ($page) => getLastPathSegment($page.url.href));
</script>

{#if $isMobileNavOpen}
	<nav transition:fade>
		<div class="menu">
			<div class="title">
				<b>ごあんない</b>
			</div>
			<ul>
				{#each navs as nav}
					<li>
						<a
							href={nav.path}
							aria-current={nav.path === $currentPageSegment ? 'true' : null}
							on:click={isMobileNavOpen.toggleOpen}
						>
							{nav.label}
						</a>
					</li>
				{/each}
			</ul>
			<div class="close-btn">
				<button on:click={isMobileNavOpen.toggleOpen}>
					<span class="text">メニューを閉じる</span>
				</button>
			</div>
		</div>
	</nav>
{/if}

<style>
	nav {
		display: grid;
		place-items: center;
		position: fixed;
		width: 100%;
		height: 100vh;
		z-index: var(--layer-5);
		background: var(--bg-overlay);
	}

	ul {
		display: grid;
		gap: var(--size-5);
		width: 90%;
		margin-inline: auto;
		margin-bottom: var(--size-5);
	}

	a {
		display: block;
		text-align: center;
		padding-block: var(--size-3);
		border: 1px solid var(--gray-2);
		border-radius: var(--radius-round);
	}

	a[aria-current='true'] {
		color: var(--primary);
		background: var(--bg-overlay);
		border: 1px solid var(--text-secondary-dark);
		border-radius: var(--radius-round);
	}

	button {
		display: flex;
		gap: var(--size-3);
		border: var(--primary);
	}

	.menu {
		width: 90%;
		margin-inline: auto;
		background-color: var(--mobile-nav-bg);
		border: 1px solid var(--gray-6);
		padding: var(--size-6) var(--size-5);
		color: var(--text-primary-dark);
		font-size: var(--font-size-md);
		-webkit-mask: var(--mask-edge-scalloped);
		font-weight: 500;
	}

	.title {
		width: 100%;
		text-align: center;
		margin-bottom: var(--size-5);
		font-weight: bold;
	}

	.close-btn {
		display: flex;
		justify-content: center;
		border: 2px solid white;
		border-radius: var(--radius-3);
		padding-block: var(--size-2);
	}

	@media (min-width: 769px) {
		nav {
			display: none;
		}
	}
</style>
