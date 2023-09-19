<script lang="ts">
	import { imageDetails } from '$lib/data/imageDetails';

	export let name: string;

	let selectedImage = imageDetails.find((image) => image.name === name) || null;
</script>

{#if selectedImage}
	<img
		src={selectedImage.src}
		alt={selectedImage.alt}
		width={selectedImage.width}
		height={selectedImage.height}
		{...$$props}
	/>
{:else}
	<div>Image not found.</div>
{/if}

<style>
	img {
		border-radius: var(--radius-2);
	}
</style>