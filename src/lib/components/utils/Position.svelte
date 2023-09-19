<script lang="ts">
	export let left = true;
	export let center = false;
	export let right = false;
</script>

<div class="position">
	<div class:left class:center class:right>
		<slot />
	</div>
</div>

<style>
	.position {
		display: grid;
	}

	.left {
		justify-self: start;
	}

	.center {
		justify-self: center;
	}

	.right {
		justify-self: end;
	}
</style>
