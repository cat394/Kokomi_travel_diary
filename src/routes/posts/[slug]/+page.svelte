<script lang="ts">
	import Pills from '$lib/components/utils/Pills.svelte';
	import Pill from '$lib/components/utils/Pill.svelte';
	import Date from '$lib/components/utils/Date.svelte';

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
	<meta property="og:image" content={data.meta.eyecatch.url} />
	<meta property="og:image:alt" content={data.meta.eyecatch.alt} />

	<!-- Twitter Card Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:image" content={data.meta.eyecatch.url} />
	<meta name="twitter:image:alt" content={data.meta.eyecatch.alt} />
</svelte:head>

<article>
	<!-- Title -->
	<h1>{data.meta.title}</h1>
	<p>Published at <Date dateString={data.meta.pubDate} /></p>

	<!-- Tags -->
	<Pills>
		{#each data.meta.tags as tag}
			<Pill href={`/posts/tags/${tag}`}>{tag}</Pill>
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

		/* halloween */
		background-color: var(--purple-12);
	}

	h1 {
		text-transform: capitalize;
		margin-bottom: var(--size-2);
		font-size: var(--font-size-md);

		/* halloween */
		color: var(--yellow-3);
	}

	h1 + p {
		color: var(--text-secondary);
		font-size: var(--font-size-xs);
		margin-bottom: var(--size-3);
	}
</style>
