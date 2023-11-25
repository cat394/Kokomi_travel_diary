<script>
	import AudioBtn from '$lib/components/utils/audio/AudioBtn.svelte';

	const bgm = {
		title: 'スノーマン',
		artist: 'yuhei komatsu',
		src: '/audio/snow_man.mp3',
		thumbImage: '/images/bgmThumbs/snow_man.webp'
	};
</script>

<AudioBtn {...bgm} />
<p>
	だんだん寒くなってきて冬がやって来るのを感じるよね。ということで、ちょっと早いかもしれないけど、今回は冬に雪が降っている様子を可愛くてポップに表現した曲になっているよ。<br />それを聴きながら私のブログを楽しんでくれるといいな♪
</p>

<style>
	p {
		margin-top: var(--size-4);
	}
</style>
