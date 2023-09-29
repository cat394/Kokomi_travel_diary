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
	<Image slot="media" name="news_hero" />
	お知らせコーナー
</Hero>
<Divider />

<Container>
  <CardContainer>
    {#each data.news as article}
      <Card>
        <img src={article.image.url} alt={article.image.alt} />
        <CardBody>
          <a slot="title" href={`/news/${article.slug}`}>{article.title}</a>
          <time slot="date">{formatDate(article.pubDate)}</time>
          <p>{article.description}</p>
        </CardBody>
      </Card>
    {/each}
  </CardContainer>
</Container>
