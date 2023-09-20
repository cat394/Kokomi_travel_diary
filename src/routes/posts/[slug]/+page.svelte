<script lang="ts">
	import Pills from '$lib/components/utils/Pills.svelte';
	import Pill from '$lib/components/utils/Pill.svelte';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>

	<!-- Standard Meta Tags -->
	<meta name="description" content={data.meta.description} />

	<!-- Open Graph Tags -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content={data.meta.image.url} />
	<meta property="og:image:alt" content={data.meta.image.alt} />

	<!-- Twitter Card Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:image" content={data.meta.image.url} />
	<meta name="twitter:image:alt" content={data.meta.image.alt} />
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
		max-width: 900px;
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
