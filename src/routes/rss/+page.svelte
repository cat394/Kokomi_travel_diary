<script lang="ts">
	import * as config from '$lib/config';
	import { Rss } from 'lucide-svelte';
	import Hero from '$lib/components/utils/Hero.svelte';
	import Image from '$lib/components/utils/Image.svelte';
	import Contents from '$lib/components/utils/Contents.svelte';
	import Container from '$lib/components/utils/Container.svelte';
	import LinkButton from '$lib/components/utils/LinkButton.svelte';
	import { fade } from 'svelte/transition';
	import Sentence from '$lib/components/utils/Sentence.svelte';
	import Divider from '$lib/components/utils/Divider.svelte';
	import Labels from '$lib/components/pages/rss/Labels.svelte';
	import Position from '$lib/components/utils/Position.svelte';

	export let data;

  type Option = 'スマホ' | 'パソコン';
	const options: Option[] = ['スマホ', 'パソコン'];

	let selected: Option = 'スマホ';
</script>

<svelte:head>
	<title>{config.title} | RSS</title>
</svelte:head>

<Hero textPosition="left">
	<Image slot="media" name="rss_hero" />
	RSS...?
</Hero>
<Divider />
<Contents>
	<Position center>
		<LinkButton href="/rss.xml">
			<Rss /><span>RSS登録のリンクだよ</span>
		</LinkButton>
	</Position>
	<Container title="RSSってなぁに？">
		<Sentence>
			<svelte:component this={data.introRss} />
		</Sentence>
	</Container>
	<Container title="RSSの設定方法">
    <Sentence>
      <p>まずは、登録したいデバイスを選んでね。</p>
			<Labels>
				{#each options as option}
					<label>
						<input type="radio" name="devices" value={option} bind:group={selected} />
						{option}
					</label>
				{/each}
			</Labels>
			<div class="howToRss">
				{#if selected === 'スマホ'}
					<article in:fade>
						<svelte:component this={data.mobileStep} />
					</article>
				{:else if selected === 'パソコン'}
					<article in:fade>
						<svelte:component this={data.pcStep} />
					</article>
				{/if}
			</div>
    </Sentence>
	</Container>
</Contents>