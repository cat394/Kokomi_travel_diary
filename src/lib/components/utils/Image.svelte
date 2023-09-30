<script lang="ts">
	import { imageComponentData } from "$lib/data/imageData";

  export let name :string;

  const detail = imageComponentData[name];

  if (!detail) {
    console.error(`Image with name ${name} not found!`);
  }
</script>

{#if detail}
<img src={detail.src} width={detail.width} height={detail.height} alt={detail.alt} />
{/if}
