<script lang="ts">
	import * as config from '$lib/config';
	import Hero from '$lib/components/utils/Hero.svelte';
	import Image from '$lib/components/utils/Image.svelte';
	import Contents from '$lib/components/utils/Contents.svelte';
	import Container from '$lib/components/utils/Container.svelte';
	import Position from '../lib/components/utils/Position.svelte';
	import Announcements from '$lib/components/pages/home/Announcements.svelte';
	import Bgm from '$lib/components/pages/home/Bgm.svelte';
	import Greeting from '$lib/components/pages/home/Greeting.svelte';
	import EnjoySite from '$lib/components/pages/home/EnjoySite.svelte';
	import Divider from '$lib/components/utils/Divider.svelte';
	import PageLink from '$lib/components/utils/PageLink.svelte';
	import Cards from '$lib/components/utils/card/Cards.svelte';

	export let data;
</script>

<svelte:head>
	<title>{config.title} | ホーム</title>
</svelte:head>

<Hero textPosition="right">
	<Image slot="media" name="root:home_hero" />
	Kokomiのブログ
</Hero>
<Divider />
<Contents>
	<div class="two-sides">
		<Container title="お知らせ">
			<p>
				詳しいことは<PageLink href="/news">お知らせコーナー</PageLink
				>に記載されているからチェックしてみるのもいいかも～。
			</p>
			<Divider size="sm" />
			<Announcements />
		</Container>
		<Container title="BGM">
			<Bgm />
		</Container>
	</div>
	<Container title="あいさつ">
		<Greeting />
	</Container>
	<Container title="サイトの楽しみ方" titlePosition="center">
		<Position center>
			<EnjoySite />
		</Position>
	</Container>
	<Container title="おすすめ記事">
		<Cards items={data.posts} />
	</Container>
</Contents>

<style>
	.two-sides {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 768px) {
		.two-sides {
			grid-template-columns: 1fr;
		}
	}
</style>
