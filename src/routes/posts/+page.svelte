<script lang="ts">
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils';
	import Hero from '$lib/components/utils/Hero.svelte';
	import Image from '$lib/components/utils/Image.svelte';
	import Container from '$lib/components/utils/Container.svelte';
	import Card from '$lib/components/utils/card/Card.svelte';
	import CardBody from '$lib/components/utils/card/CardBody.svelte';
	import Contents from '$lib/components/utils/Contents.svelte';
	import CardContainer from '$lib/components/utils/card/CardContainer.svelte';
	import Pills from '$lib/components/utils/Pills.svelte';
	import Pill from '$lib/components/utils/Pill.svelte';
	import Divider from '$lib/components/utils/Divider.svelte';

	export let data;
</script>

<svelte:head>
	<title>{config.title} | Posts</title>
</svelte:head>

<Hero textPosition="right">
	<Image slot="media" name="posts_hero" />
	記事いちらん
</Hero>
<Divider />
<Contents>
	<Container title="今月の記事">
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
	<Container title="タグから探す？">
		<Pills>
			{#each data.tags as tag}
				<li>
					<Pill href={`/posts/tags/${tag}`}>{tag}</Pill>
				</li>
			{/each}
		</Pills>
	</Container>
</Contents>
