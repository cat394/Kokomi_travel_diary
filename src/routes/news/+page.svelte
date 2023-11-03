<script lang="ts">
	import * as config from '$lib/config';
	import Hero from '$lib/components/utils/Hero.svelte';
	import Image from '$lib/components/utils/Image.svelte';
	import Container from '$lib/components/utils/Container.svelte';
	import Divider from '$lib/components/utils/Divider.svelte';
	import Cards from '$lib/components/utils/card/Cards.svelte';

	export let data;
</script>

<svelte:head>
	<title>{config.title} | articles</title>
</svelte:head>

<Hero textPosition="right">
	<Image slot="media" name="root:news_hero" />
	お知らせコーナー
</Hero>
<Divider />
<Container>
	<Cards contentsType="news" items={data.news} />
</Container>