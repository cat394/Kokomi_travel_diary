<script lang="ts">
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils';
	import Hero from '$lib/components/utils/Hero.svelte';
	import Image from '$lib/components/utils/Image.svelte';
	import Container from '$lib/components/utils/Container.svelte';
	import Card from '$lib/components/utils/card/Card.svelte';
	import CardBody from '$lib/components/utils/card/CardBody.svelte';
	import CardContainer from '$lib/components/utils/card/CardContainer.svelte';
	import Divider from '$lib/components/utils/Divider.svelte';

	export let data;
</script>

<svelte:head>
	<title>{config.title} | articles</title>
</svelte:head>

<Hero textPosition="right">
	<Image slot="media" name="root:news_hero_halloween" />
	お知らせコーナー
</Hero>
<Divider />

<Container>
	<CardContainer>
		{#each data.news as article}
			<Card href={`/news/${article.slug}`}>
				<img src={article.image.url} alt={article.image.alt} />
				<CardBody>
					<span slot="title">{article.title}</span>
					<time slot="date">{formatDate(article.pubDate)}</time>
					<p>{article.description}</p>
				</CardBody>
			</Card>
		{/each}
	</CardContainer>
</Container>
