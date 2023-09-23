<script>
	import DotLink from '$lib/components/utils/DotLink.svelte';
	import Link from '$lib/components/utils/Link.svelte';
	import Position from '$lib/components/utils/Position.svelte';
	import { creditsImageData } from '$lib/data/imageData';
</script>

<div class="container">
	<div class="wrapper table-head">
		<div>アーティスト名</div>
		<div>タイトル名</div>
	</div>
	<div class="table-body">
		{#each creditsImageData as { artist, artistLink, title }}
			<div class="wrapper">
				<Position center><DotLink href={artistLink} target="_blank">{artist}</DotLink></Position>
				<Position center><span>{title}</span></Position>
			</div>
		{/each}
	</div>
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		max-width: 540px;
		gap: var(--size-1);

	}

	.container > .wrapper:first-child {
		border-bottom: 1px solid var(--primary);
		padding-bottom: var(--size-3);
		margin-bottom: var(--size-3);
	}

	.table-head > * {
		justify-self: center;
	}

	.table-body {
		display: grid;
		gap: var(--size-4);
	}
</style>
