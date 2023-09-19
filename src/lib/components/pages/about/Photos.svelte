<script>
	import Image from '$lib/components/utils/Image.svelte';

	const photos = [
		{ text: '豪華なクルーズに、きれいな景色！', image: 'cruise_morning' },
		{ text: '夕方の学校ってなんかロマンチックだよね。', image: 'school_evening' },
		{ text: '夜の海に出かけちゃったり！', image: 'mole_night' }
	];
</script>

<ul>
	{#each photos as photo}
		<li>
			<span class="text">{photo.text}</span>
			<div class="image"><Image name={photo.image} /></div>
		</li>
	{/each}
</ul>

<style>
	ul {
		display: grid;
		gap: var(--size-9);
	}

	li {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--size-3);
	}

	li:nth-child(even) .text {
		order: 1;
	}

	.text {
		place-self: center;
	}

	@media (max-width: 768px) {
		li:nth-child(odd) {
			grid-template-columns: 1fr 4fr;
			grid-template-areas:
				'. img'
				'text text';
		}

		li:nth-child(even) {
			grid-template-columns: 4fr 1fr;
			grid-template-areas:
				'img .'
				'text text';
		}

		li .text {
			grid-area: text;
			align-self: self-start;
		}

		li:nth-child(odd) .text {
			justify-self: self-start;
		}

		li:nth-child(even) .text {
			justify-self: self-end;
		}

		li .image {
			grid-area: img;
		}
	}
</style>
