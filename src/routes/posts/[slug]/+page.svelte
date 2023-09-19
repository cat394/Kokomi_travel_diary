<script lang="ts">
	import Pills from '$lib/components/utils/Pills.svelte';
	import Divider from '$lib/components/utils/Divider.svelte';
	import Pill from '$lib/components/utils/Pill.svelte';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<!-- Title -->
	<h1>{data.meta.title}</h1>
	<p>Published at <time>{formatDate(data.meta.pubDate)}</time></p>

	<!-- Tags -->
	<Pills>
		{#each data.meta.tags as tag}
			<li>
				<Pill href={`/posts/tags/${tag}`}>{tag}</Pill>
			</li>
		{/each}
	</Pills>

	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		width: 90%;
		margin-inline: auto;
		color: var(--text-primary);
    box-shadow: 0px 0px 10px 1px var(--shadow-primary-dark);
		padding: var(--size-5);
		border-radius: var(--radius-2);
	}

	h1 {
		text-transform: capitalize;
    margin-bottom: var(--size-2);
    font-size: var(--font-size-md);
	}

	h1 + p {
		color: var(--text-secondary);
    font-size: var(--font-size-xs);
    margin-bottom: var(--size-3);
	}
</style>