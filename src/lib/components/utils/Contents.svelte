<script>
	export let gap = "var(--size-fluid-4)";
</script>

<div class="contents" style:gap={gap}>
	<slot />
</div>

<style>
	.contents {
		display: grid;
	}
</style>
