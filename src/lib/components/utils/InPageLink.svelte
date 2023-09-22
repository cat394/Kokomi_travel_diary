<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import { strokeWidth } from '$lib/data/strokeWidth';
	export let href: string;
</script>

<a {href}>
	<span class="icon">
		<ChevronDown {strokeWidth} />
	</span>
	<slot />
</a>

<style>
	a {
		display: inline-flex;
		align-items: center;
		text-decoration: underline;
	}

	a:hover {
		text-decoration: none;
	}

	.icon {
		display: inline-block;
		padding-right: var(--size-1);
	}
</style>
