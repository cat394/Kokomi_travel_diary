<script lang="ts">
	export let href: string;
</script>

<div class="link-btn">
	<a {href} {...$$restProps}>
		<slot />
	</a>
</div>

<style>
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--size-2);
		width: 100%;
		height: 100%;
		padding: var(--size-3);
	}

	.link-btn {
		background: var(--primary);
		color: white;
		box-shadow: 0px 5px 0px 0px var(--gray-5);
		border-radius: var(--radius-round);
		transition: all 300ms;

		/* halloween */
		background: var(--orange-8);
		box-shadow: 0px 5px 0px 0px var(--orange-12);
	}

	.link-btn:hover {
		transform: translateY(3px);
		box-shadow: 0px 2px 0px 0px var(--gray-5);

		/* halloween */
		box-shadow: 0px 2px 0px 0px var(--yellow-12);
	}
</style>
