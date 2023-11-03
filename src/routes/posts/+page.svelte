<script lang="ts">
	import * as config from '$lib/config';
	import Hero from '$lib/components/utils/Hero.svelte';
	import Image from '$lib/components/utils/Image.svelte';
	import Container from '$lib/components/utils/Container.svelte';
	import Contents from '$lib/components/utils/Contents.svelte';
	import Pills from '$lib/components/utils/Pills.svelte';
	import Pill from '$lib/components/utils/Pill.svelte';
	import Divider from '$lib/components/utils/Divider.svelte';
	import Cards from '$lib/components/utils/card/Cards.svelte';

	export let data;
</script>

<svelte:head>
	<title>{config.title} | Posts</title>
</svelte:head>

<Hero textPosition="right">
	<Image slot="media" name="root:posts_hero" />
	記事いちらん
</Hero>
<Divider />
<Contents>
	<Container title="今月の記事">
		<Cards items={data.posts} />
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
