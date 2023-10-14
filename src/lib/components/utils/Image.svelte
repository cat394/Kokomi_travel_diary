<script lang="ts">
	import type { ImageData, FolderData } from '$lib/data/imageData';
	import { imageData } from '$lib/data/imageData';

	export let name: string;

	let image: ImageData | undefined;
	let folderData: FolderData | undefined;

	$: {
		const [folderName, fileName] = name.split(':');

		for (const folder of imageData) {
			if (folder.folder === folderName) {
				image = folder.data.find((i) => i.fileName === fileName);
				if (image) {
					folderData = folder;
					break;
				}
			}
		}
	}
</script>

{#if image && folderData}
	<img
		src={`${folderData.path}${image.fileName}.webp`}
		alt={image.alt}
		width={image.width}
		height={image.height}
	/>
{:else}
	<p>Loading...</p>
{/if}
