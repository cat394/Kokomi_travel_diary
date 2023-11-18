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
	この曲は夏の終わりをイメージした曲で、もう11月だから冬の始まりを感じられるようなBGMに更新するつもりだけど、ちょっと待っててね。
</p>

<style>
	p {
		margin-top: var(--size-4);
	}
</style>
