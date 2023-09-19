<script>
	import Image from '$lib/components/utils/Image.svelte';
</script>


<ul>
	<li>
		<span class="text">
			豪華なクルーズに、きれいな景色！
		</span>
		<div class="image">
			<Image name="cruise_morning" />
		</div>
	</li>
	<li>
		<span class="text">
			夕方の学校ってなんかロマンチックだよね。
		</span>
		<Image name="school_evening" />
	</li>
	<li>
		<span class="text">
			夜の海に出かけちゃったり！
		</span>
		<div class="image">
			<Image name="mole_night" />
		</div>
	</li>
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

	@media(max-width: 768px) {
		li:nth-child(odd) {
			grid-template-columns: 1fr 4fr;
			grid-template-areas: 
				". img"
				"text text";
		}

		li:nth-child(even) {
			grid-template-columns: 4fr 1fr;
			grid-template-areas: 
				"img ."
				"text text";
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