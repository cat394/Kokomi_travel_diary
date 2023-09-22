<script>
	import InPageLink from '$lib/components/utils/InPageLink.svelte';
</script>

<ul>
	<li><InPageLink href="#producer">プロデューサーあいさつ</InPageLink></li>
	<li><InPageLink href="#BGM">BGMのクレジットへ</InPageLink></li>
	<li><InPageLink href="#画像">画像のクレジットへ</InPageLink></li>
</ul>

<style>
	ul {
		display: grid;
		gap: var(--size-3);
	}
</style>
