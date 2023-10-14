<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { navs } from '$lib/data/navs';

	let activeLink = -1;

	const getLastPathSegment = (url: string): string => {
		return '/' + url.split('/').at(-1);
	};

	const currentPageSegment = derived(page, ($page) => getLastPathSegment($page.url.href));

	$: {
		const segment = getLastPathSegment($page.url.href);
		activeLink = navs.findIndex((nav) => nav.path === segment);
	}
</script>

<nav>
	<!-- blank -->
	<div />

	<div class="container">
		<ul class="links">
			{#each navs as nav, index}
				<li>
					<a href={nav.path} aria-current={index === activeLink ? 'true' : 'false'}>
						<span>{nav.label}</span>
					</a>
					{#if nav.path === $currentPageSegment}
						<div class="img-wrapper">
							<img src="/images/chibi_kokomi.webp" alt="Kokomiのちびキャラ" />
						</div>
					{/if}
				</li>
			{/each}
		</ul>
		<div
			class="tab-underline"
			style={activeLink >= 0 ? `left: calc(${activeLink} * 25%);` : 'display: none;'}
		/>
	</div>

	<!-- blank -->
	<div />
</nav>

<style>
	nav {
		display: grid;
		grid-template-columns: 0.25fr 1fr 0.25fr;
		margin-block: var(--size-10);
		/* border-bottom: 1px solid var(--gray-3); */

		/* halloween */
		background: var(--purple-11);
	}

	li {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.img-wrapper {
		position: absolute;
		top: -3.13rem;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	img {
		max-height: 50px;
	}

	a {
		display: block;
		padding-block: var(--size-2);
		font-size: var(--font-size-md);
		letter-spacing: var(--font-letterspacing-3);
		transition: all 500ms;
		border-radius: var(--radius-2);
		opacity: 0.6;
		font-weight: bold;
		text-align: center;

		/* halloween */
		color: var(--gray-0);
	}

	a:hover {
		color: var(--primary);
		opacity: 1;
	}

	a[aria-current='true'] {
		color: var(--primary);
		opacity: 1;
	}

	a[aria-current='true']:hover {
		cursor: default;
		background: inherit;
		color: var(--primary);
	}

	.container {
		position: relative;
	}

	.links {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		padding-bottom: var(--sizse-3);
	}

	.tab-underline {
		position: absolute;
		bottom: 0;
		height: 2px;

		/* halloween */
		height: 3px;
		
		width: 25%;
		background: var(--primary);
		transition: left 0.4s;
		border-radius: var(--radius-round);
	}

	@media (max-width: 768px) {
		nav {
			display: none;
		}
	}
</style>
