<script lang="ts">
	import type { Post, News } from "$lib/types";
	import Card from "$lib/components/utils/card/Card.svelte";
	import CardBody from "$lib/components/utils/card//CardBody.svelte";

	export let contentsType: 'posts' | 'news' = 'posts';
	export let items: Post[] | News[];
</script>

<div class="cards">
	{#each items as item}
		<Card href={`/${contentsType}/${item.slug}`}>
			<img src={item.eyecatch.url} alt={item.eyecatch.alt} />
			<CardBody dateString={item.pubDate}>
				<span slot="title">{item.title}</span>
				<p>{item.description}</p>
			</CardBody>
		</Card>
	{/each}
</div>

<style>
	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
		gap: var(--size-8);
	}
</style>
