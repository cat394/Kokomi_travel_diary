<script lang="ts">
	import Header from '$lib/components/base/Header.svelte';
	import Nav from '$lib/components/base/Nav.svelte';
	import Footer from '$lib/components/base/Footer.svelte';
	import Transition from '$lib/components/base/Transition.svelte';
	import MobileNav from '$lib/components/base/MobileNav.svelte';
	import AudioController from '$lib/components/utils/audio/AudioController.svelte';

	import 'open-props/style';
	import 'open-props/colors-hsl';
	import 'open-props/masks/edges';
	import 'open-props/src/props.masks.edges.css';
	import 'open-props/masks.edges.min.css';

	import '../app.css';

	export let data;
</script>

<div class="layout">
	<Header />
	<Nav />
	<main>
		<Transition url={data.url} duration={740}>
			<slot />
		</Transition>
	</main>
	<MobileNav />
	<Footer />
	<AudioController />
</div>

<style>
	main {
		width: 90%;
		max-width: 900px;
		margin-inline: auto;
	}

	.layout {
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto auto 1fr auto;
		background-image: url('/images/halloween_bg.webp');
	}

	@media (max-width: 768px) {
		.layout {
			grid-template-rows: auto 1fr auto;
			background-size: 300px 300px;
		}
	}
</style>
