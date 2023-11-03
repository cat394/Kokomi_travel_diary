<script>
	import AudioBtn from '$lib/components/utils/audio/AudioBtn.svelte';

	const bgm = {
		title: '夢花火',
		artist: 'yuhei komatsu',
		src: '/audio/yumehanabi.mp3',
		thumbImage: '/images/bgmThumbs/yumehanabi.webp'
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
