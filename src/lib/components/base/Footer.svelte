<script lang="ts">
	import * as config from '$lib/config';
	import PageLink from '$lib/components/utils/PageLink.svelte';
</script>

<footer>
	<div>
		<a href="/credits">クレジットへ</a>
	</div>
	<small>{config.title} &copy {new Date().getFullYear()} Kokomi</small>
</footer>

<style>
	footer {
		display: grid;
		text-align: center;
		padding-block: var(--size-7) var(--size-11);
		margin-top: var(--size-fluid-6);
		border-top: 0.5px solid var(--text-secondary);
	}
	small {
		font-size: var(--font-size-xs);
		color: var(--text-secondary);
	}

	a {
		display: inline-block;
		margin-bottom: var(--size-2);
		color: var(--text-secondary);
		text-decoration: underline;
	}

	a:hover {
		text-decoration: none;
	}
</style>
