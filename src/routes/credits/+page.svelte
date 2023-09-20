<script>
  import AudioCreditGrid from "$lib/components/pages/credits/AudioCreditGrid.svelte";
  import Credit from "$lib/components/pages/credits/Credit.svelte";
	import ImageCreditGrid from "$lib/components/pages/credits/ImageCreditGrid.svelte";
	import Container from "$lib/components/utils/Container.svelte";
	import Contents from "$lib/components/utils/Contents.svelte";
	import Divider from "$lib/components/utils/Divider.svelte";
	import DotLink from "$lib/components/utils/DotLink.svelte";
	import Position from "$lib/components/utils/Position.svelte";
</script>

<Container title="クレジット">
  <Divider />
  <Contents gap="var(--size-12)">
    <Credit category="プロデューサー">
      <Position center>
        <DotLink href="https://twitter.com/RYO_001231">
          <span class="producer-name">Ryo</span>
        </DotLink>
      </Position>
    </Credit>
    <Credit category="BGM">
      <AudioCreditGrid />
    </Credit>
    <Credit category="画像">
      <ImageCreditGrid />
    </Credit>
  </Contents>
</Container>

<style>
  .producer-name {
    font-size: var(--font-size-md);
    text-align: center;
  }
</style>