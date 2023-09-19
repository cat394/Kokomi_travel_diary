<script lang="ts">
	import { sortedAnnouncements } from '$lib/data/announcements';
	import { formatDate } from '$lib/utils';
</script>

<ul class="announce-list">
	{#each sortedAnnouncements as { date, description }}
		<li class="announcement">
			<p class="date"><time>{formatDate(date)}</time></p>
			<p class="description">{description}</p>
		</li>
	{/each}
</ul>

<style>
	.announce-list {
		display: grid;
		gap: var(--size-4);
	}

	.date {
		padding-bottom: var(--size-1);
	}

	.description {
		padding-left: var(--size-4);
	}
</style>
