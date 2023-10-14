<script>
	import AudioBtn from '$lib/components/utils/audio/AudioBtn.svelte';

	const bgm = {
		title: 'Pumpkin march',
		artist: 'Make a field music',
		src: '/audio/pumpkin_march.mp3',
		thumbImage: '/images/bgmThumbs/halloween.webp'
	};
</script>

<AudioBtn {...bgm} />
<p>
	10月といえばハロウィン！それに合わせてサイトの雰囲気も変えてみたよ。BGMもポップな感じと怪しい感じが混ざったような素敵な曲にしたよ。
</p>

<style>
	p {
		margin-top: var(--size-4);
	}
</style>
