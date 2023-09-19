<script lang="ts">
	import Link from '$lib/components/utils/Link.svelte';
	import { ExternalLink } from 'lucide-svelte';
	import { strokeWidth } from '$lib/data/strokeWidth';

	export let href: string;
</script>

<Link {href} target="_blank">
	<slot />
	<span slot="icon"><ExternalLink {strokeWidth} size="13" /></span>
</Link>
