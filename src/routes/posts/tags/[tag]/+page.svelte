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
			<Card>
				<img src={post.image.url} alt={post.image.alt} />
				<CardBody>
					<a slot="title" href={`/posts/${post.slug}`}>{post.title}</a>
					<time slot="date">{formatDate(post.pubDate)}</time>
					<p>{post.description}</p>
				</CardBody>
			</Card>
		{/each}
	</CardContainer>
</Container>
