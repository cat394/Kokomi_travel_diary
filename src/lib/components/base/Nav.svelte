<script lang="ts">
	import { page } from '$app/stores';

	let activeLink = -1;
	const links = [
		{ path: '/', label: 'Home' },
		{ path: '/about', label: 'About' },
		{ path: '/posts', label: 'Posts' },
		{ path: '/rss', label: 'RSS' }
	];

	const getLastPathSegment = (url: string): string => {
		return '/' + url.split('/').at(-1);
	};

	$: {
		const segment = getLastPathSegment($page.url.href);
		activeLink = links.findIndex((link) => link.path === segment);
	}
</script>

<nav>
	<!-- blank -->
	<div />

	<div class="container">
		<ul class="links">
			{#each links as link, index}
				<li>
					<a href={link.path} aria-current={index === activeLink ? 'true' : 'false'}>
						<span>{link.label}</span>
					</a>
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
		border-bottom: 1px solid var(--gray-3);
	}

	li {
		width: 100%;
		height: 100%;
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
	}

	a:hover {
		color: var(--primary);
		opacity: 1;
	}

	a[aria-current='true'] {
		opacity: 1;
	}

	a[aria-current='true']:hover {
		cursor: default;
		background: inherit;
		color: currentColor;
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
