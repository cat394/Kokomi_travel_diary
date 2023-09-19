<script>
	import Image from '$lib/components/utils/Image.svelte';
</script>


<ul>
	<li>
		<span class="text">
			豪華なクルーズに、きれいな景色！
		</span>
		<Image name="cruise_morning" />
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
		<Image name="mole_night" />
	</li>
</ul>


<style>
	ul {
		display: grid;
    gap: var(--size-9);
	}

	li {
		display: grid;
		grid-template-columns: 50% 50%;
		gap: var(--size-3);
	}

	li:nth-child(even) .text {
		order: 1;
	}

	.text {
		place-self: center;
	}
</style>