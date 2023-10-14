<script>
	import DotLink from '$lib/components/utils/DotLink.svelte';
	import Position from '$lib/components/utils/Position.svelte';
	import { imageData } from '$lib/data/imageData';
</script>

<div class="container">
	<div class="wrapper table-head">
		<div>アーティスト名</div>
		<div>タイトル名</div>
	</div>
	<div class="table-body">
		{#each imageData as folder}
			{#each folder.data as { artist, artistLink, title }}
				<div class="wrapper">
					<Position center><DotLink href={artistLink} target="_blank">{artist}</DotLink></Position>
					<Position center><span>{title}</span></Position>
				</div>
			{/each}
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
