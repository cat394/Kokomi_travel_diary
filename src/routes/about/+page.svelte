<script>
	import * as config from '$lib/config';
	import Photos from '$lib/components/pages/about/Photos.svelte';
	import Container from '$lib/components/utils/Container.svelte';
	import Contents from '$lib/components/utils/Contents.svelte';
	import Divider from '$lib/components/utils/Divider.svelte';
	import Hero from '$lib/components/utils/Hero.svelte';
	import Image from '$lib/components/utils/Image.svelte';
	import Sentence from '$lib/components/utils/Sentence.svelte';

	export let data;
</script>

<svelte:head>
	<title>{config.title} | About</title>
</svelte:head>

<Hero>
	<Image slot="media" name="root:about_hero_halloween" />
	Who is Kokomi...?
</Hero>
<Divider />
<Contents>
	<Container title="自己しょーかい">
		<Sentence>
			<svelte:component this={data.myIntro} />
		</Sentence>
	</Container>
	<Container title="フォト">
		<Photos />
	</Container>
</Contents>
