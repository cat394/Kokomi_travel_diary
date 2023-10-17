<script lang="ts">
	import Date from "$lib/components/utils/Date.svelte";
	export let dateString: string;
</script>

<div class="card-body">
	<div class="title"><slot name="title" /></div>
	<div class="date"><Date {dateString} /></div>
	<div><slot /></div>
</div>

<style>
	.card-body {
		padding: var(--size-6);
	}

	.title {
		display: inline-block;
		font-weight: bold;
		font-size: var(--font-size-md);
	}

	.date {
		padding-block: var(--size-1);
		color: var(--text-secondary);
		font-size: var(--font-size-xs);
	}
</style>
