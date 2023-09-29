<script>
  import { formatDate } from '$lib/utils';

  export let data;
</script>

<article>
	<!-- Title -->
	<h1>{data.meta.title}</h1>
	<p>Published at <time>{formatDate(data.meta.pubDate)}</time></p>

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