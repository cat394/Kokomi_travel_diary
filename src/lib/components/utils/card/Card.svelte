<script lang="ts">
	export let href: string;
</script>

<a class="card" {href}>
	<slot />
</a>

<style>
	.card {
		display: inline-block;
		border: 2px solid var(--primary);
		border-radius: var(--radius-2);
		overflow: hidden;
		scale: 0.98;
		transition: scale 300ms;
		cursor: pointer;

		/* halloween */
		/* background: var(--purple-11); */
	}

	.card:hover {
		scale: 1;
	}
</style>
