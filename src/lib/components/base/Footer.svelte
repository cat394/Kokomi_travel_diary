<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer>
	<small>{config.title} &copy {new Date().getFullYear()} Kokomi</small>
</footer>

<style>
	footer {
		text-align: center;
		padding-block: var(--size-7) var(--size-11);
		margin-top: var(--size-fluid-6);
		border-top: 0.5px solid var(--text-secondary);
	}
	small {
		font-size: var(--font-size-xs);
		color: var(--text-secondary);
	}
</style>
