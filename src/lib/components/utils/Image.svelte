<script>
	import { imageDetails } from '$lib/data/imageData';
	export let name = '';

	let targetImage = imageDetails.find((i) => i.fileName === name);
</script>

{#if targetImage}
	<img
		src={targetImage.src}
		alt={targetImage.alt}
		width={targetImage.width}
		height={targetImage.height}
	/>
{:else}
	<p>Image not found</p>
{/if}
