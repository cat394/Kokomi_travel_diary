<script lang="ts">
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils.js';
	import Container from '$lib/components/utils/Container.svelte';
	import CardContainer from '$lib/components/utils/card/CardContainer.svelte';
	import Card from '$lib/components/utils/card/Card.svelte';
	import CardBody from '$lib/components/utils/card/CardBody.svelte';

	export let data;
</script>

<svelte:head>
	<title>{config.title} | Search results</title>
</svelte:head>

<Container title={`${data.tagName}の検索結果`}>
	<CardContainer>
		{#each data.posts as post}
			<Card href={`/posts/${post.slug}`}>
				<img src={post.image.url} alt={post.image.alt} />
				<CardBody>
					<span slot="title">{post.title}</span>
					<time slot="date">{formatDate(post.pubDate)}</time>
					<p>{post.description}</p>
				</CardBody>
			</Card>
		{/each}
	</CardContainer>
</Container>
