<div class="card-body">
	<div class="title"><slot name="title" /></div>
	<div class="date"><slot name="date" /></div>
	<div><slot /></div>
</div>

<style>
	.card-body {
		padding: var(--size-6);
	}

	.title {
		display: inline-block;
		text-decoration: underline;
		font-weight: bold;
		font-size: var(--font-size-md);
	}

	.title:hover {
		text-decoration: none;
	}

	.date {
		padding-block: var(--size-1);
		color: var(--text-secondary);
		font-size: var(--font-size-xs);
	}
</style>
