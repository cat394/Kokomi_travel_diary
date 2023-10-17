<script lang="ts">
	import * as config from '$lib/config';
	import Container from '$lib/components/utils/Container.svelte';
	import Cards from '$lib/components/utils/card/Cards.svelte';

	export let data;
</script>

<svelte:head>
	<title>{config.title} | Search results</title>
</svelte:head>

<Container title={`${data.tagName}の検索結果`}>
	<Cards items={data.posts} />
</Container>
