<script>
	import AudioBtn from '$lib/components/utils/audio/AudioBtn.svelte';

	const bgm = {
		title: '夢花火',
		artist: 'yuhei komatsu',
		src: '/audio/yumehanabi.mp3',
		thumbImage: '/images/bgmThumbs/yumehanabi_thumb.webp'
	};
</script>

<AudioBtn {...bgm} />
<p>
	まだまだ暑い日が続くけど、もう夏も終わりを迎えているよね、、ってことで、それに合った曲を選んでみたから良かったら聴きながら私のウェブサイトを楽しんで！
</p>

<style>
	p {
		margin-top: var(--size-4);
	}
</style>
