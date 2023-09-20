<script>
	import DotLink from "$lib/components/utils/DotLink.svelte";
  import AudioBtnCircleVer from "$lib/components/utils/audio/AudioBtnCircleVer.svelte";
  import { audioData } from "$lib/data/audioData";
</script>

<div class="container">
  <div class="wrapper table-head">
    <span></span>
    <span>アーティスト名</span>
    <span>タイトル名</span>
  </div>
  <div class="wrapper table-body">
    {#each audioData as { src, title, artist, artistLink, thumbImage }}
      <div class="audio-btn">
        <AudioBtnCircleVer {src} {title} {artist} {thumbImage} />
      </div>
      <div>
        <DotLink href={artistLink}>{artist}</DotLink>
      </div>
      <span>{title}</span>
    {/each}
  </div>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr;
    max-width: 520px;
    margin-inline: auto;
  }

  .table-head {
    border-bottom: 1px solid var(--primary);
    padding-bottom: var(--size-3);
    margin-bottom: var(--size-3);
  }

  .table-head > * {
    justify-self: center;
  }

  .table-body > * {
    justify-self: center;
  }
</style>