<script lang="ts">
	import Link from '$lib/components/utils/Link.svelte';

	export let href: string;
</script>

<Link {href} {...$$restProps}>
	<span class="text"><slot /></span>
</Link>

<style>
	.text {
		color: var(--primary);
	}
</style>
