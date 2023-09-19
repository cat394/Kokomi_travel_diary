<script lang="ts">
	import Link from "$lib/components/utils/Link.svelte";
	export let fontBold = false;
	export let href: string;
</script>

<div class="pill" class:text-bold={fontBold}>
	#<Link {href}><slot /></Link>
</div>

<style>
	.pill {
		padding-inline: var(--size-3);
		padding-block: var(--size-2);
		border-radius: var(--radius-round);
		border: 1.5px solid var(--primary);
		color: var(--text-primary);
	}

	.text-bold {
		font-weight: bold;
	}
</style>
