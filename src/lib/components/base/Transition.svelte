<script lang="ts">
	import { fade } from 'svelte/transition';

	export let url: string;
	export let duration: number;
</script>

{#key url}
	<div in:fade={{ duration }}>
		<slot />
	</div>
{/key}
