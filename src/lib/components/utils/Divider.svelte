<script lang="ts">
	export let line = false;
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let lineThickness: 'thin' | 'normal' | 'bold' = 'thin';
</script>

<div class={`divider ${size}`}>
	{#if line}
		<div class={`line ${lineThickness}`} />
	{/if}
</div>

<style>
	.divider {
		--divide-size-sm: var(--size-8);
		--divide-size-md: var(--size-fluid-4);
		--divide-size-lg: var(--size-12);
		display: grid;
		place-items: center;
	}

	.line {
		--line-thickness-thin: var(--border-size-2);
		--line-thickness-normal: var(--border-size-3);
		--line-thickness-bold: var(--border-size-4);
		width: 90%;
		margin-inline: auto;
		border-radius: var(--radius-round);
	}

	.sm {
		height: var(--divide-size-sm);
	}

	.md {
		height: var(--divide-size-md);
	}

	.lg {
		height: var(--divide-size-lg);
	}

	.thin {
		height: var(--line-thickness-thin);
	}

	.normal {
		height: var(--line-thickness-normal);
	}

	.bold {
		height: var(--line-thickness-bold);
	}
</style>
