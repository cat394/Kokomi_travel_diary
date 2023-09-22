<script>
	import AudioCreditGrid from '$lib/components/pages/credits/AudioCreditGrid.svelte';
	import Credit from '$lib/components/pages/credits/Credit.svelte';
	import CreditsPageGuide from '$lib/components/pages/credits/CreditsPageGuide.svelte';
	import ImageCreditGrid from '$lib/components/pages/credits/ImageCreditGrid.svelte';
	import Container from '$lib/components/utils/Container.svelte';
	import Contents from '$lib/components/utils/Contents.svelte';
	import Divider from '$lib/components/utils/Divider.svelte';
	import ExLink from '$lib/components/utils/ExLink.svelte';
	import Sentence from '$lib/components/utils/Sentence.svelte';
</script>

<Container title="クレジット">
	<CreditsPageGuide />
	<Divider />
	<div id="producer">
		<Sentence>
			<p>
				みなさん、こんにちは。Kokomiのプロデューサーである<ExLink
					href="https://ryo-webdev.vercel.app">Ryo</ExLink
				>と申します。<br />この度は当サイトにご訪問下さり、ありがとうございます。
			</p>
			<p>こちらのページにはKokomiを作り上げてくれている方々のリストを載せております。</p>
			<p>
				基本的にフリー素材を活用しており、気になる作品の作者の方がいましたらリンクから飛ぶことができるようになっております。<br
				/>また、当サイトのメインページに載せるBGMは定期的に入れ替える予定ですが、それ以前の曲もこちらのページから聴くことができるようになっておりますのでご安心ください。
			</p>
			<p>
				Kokomiの素体は<ExLink
					href="https://www.dlsite.com/maniax/dlaf/=/t/s/link/work/aid/ryo1231/id/RJ060599.html"
					>著作権フリー立ちキャラクター素材集vol.5</ExLink
				>より作成しているため、私個人がKokomiの素体の著作権を有しているということはありません。
			</p>
		</Sentence>
	</div>
	<Credit category="BGM">
		<AudioCreditGrid />
	</Credit>
	<Credit category="画像">
		<ImageCreditGrid />
	</Credit>
</Container>

<style>
	#producer {
		scroll-margin-top: var(--size-3);
	}
</style>
