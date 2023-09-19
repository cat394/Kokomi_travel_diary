<script lang="ts">
	export let href: string;
</script>

<a {href} {...$$restProps}>
	<span><slot /></span>
	<span><slot name="icon" /></span>
</a>

<style>
	a {
		display: inline-flex;
		padding-inline: 0.05em;
		text-decoration: underline;
		text-decoration-color: var(--primary);
	}

	a:hover {
		text-decoration: none;
	}
</style>
