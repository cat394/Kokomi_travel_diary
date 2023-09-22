import type { BeforeFormatDetail, MediaDetail } from './mediaTypes';

type BeforeFormatImageDetail = BeforeFormatDetail & {
	width?: number;
	height?: number;
	alt: string;
};

type ImageDetail = MediaDetail & {
	width: number;
	height: number;
	alt: string;
};

type CreditsImageData = {
	title: string;
	artist: string;
	artistLink: string;
};

export const IMAGE_FOLDER = '/images/';

const PTHOTO_FOLDER = 'photos/';

const format = 'webp';

const heroImageSize = {
	width: 800,
	height: 433
};

const heroDetails: BeforeFormatImageDetail[] = [
	{
		id: 1,
		title: '森の道(昼)',
		artist: 'きまぐれアフター',
		artistLink: 'https://gakaisozai.seesaa.net/',
		fileName: 'home_hero',
		alt: '山道を背景に、Kokomiがこちらを向いている'
	},
	{
		id: 2,
		title: 'きれいな音楽の背景(緑)',
		artist: 'OKUMOTO',
		artistLink: 'https://sozaino.site/',
		fileName: 'about_hero',
		alt: '音符の入った緑と青の淡いグラデーションを背景にしてKokomiがいる'
	},
	{
		id: 3,
		title: 'きれいな音楽の背景(黄)',
		artist: 'OKUMOTO',
		artistLink: 'https://sozaino.site/',
		fileName: 'posts_hero',
		alt: '音符の入った黄色の淡いグラデーションを背景にしてKokomiがいる'
	},
	{
		id: 4,
		title: 'きれいな音楽の背景(紫)',
		artist: 'OKUMOTO',
		artistLink: 'https://sozaino.site/',
		fileName: 'rss_hero',
		alt: '音符の入った紫色の淡いグラデーションを背景にしてKokomiがいる'
	}
];

const photosDetails: BeforeFormatImageDetail[] = [
	{
		id: 1,
		title: '豪華客船',
		artist: 'AIPICT',
		artistLink: 'https://aipict.com/',
		fileName: 'cruise_morning',
		width: 700,
		height: 467,
		alt: '晴れた空の下でクルーズに乗っているKokomi'
	},
	{
		id: 2,
		title: '学校の中庭(夕方)',
		artist: 'きまぐれアフター',
		artistLink: 'https://gakaisozai.seesaa.net/',
		fileName: 'school_evening',
		width: 800,
		height: 600,
		alt: '夕暮れの学校にいるKokomi'
	},
	{
		id: 3,
		title: '防波堤',
		artist: 'みんちりえ',
		artistLink: 'https://min-chi.material.jp/',
		fileName: 'mole_night',
		width: 766,
		height: 500,
		alt: '夜の海に覗きに防波堤にいるKokomi'
	}
];

const formattedHeroDetails: ImageDetail[] = heroDetails.map((heroDetail) => {
	return {
		...heroDetail,
		src: IMAGE_FOLDER + `${heroDetail.fileName}` + '.' + format,
		width: heroImageSize.width,
		height: heroImageSize.height
	};
});

const formattedPhotosDetails: ImageDetail[] = photosDetails.map((photoDetail) => ({
	...photoDetail,
	src: IMAGE_FOLDER + PTHOTO_FOLDER + `${photoDetail.fileName}` + '.' + format,
	width: photoDetail.width!,
	height: photoDetail.height!
}));

export const imageDetails: ImageDetail[] = [...formattedPhotosDetails, ...formattedHeroDetails];

export const creditsImageData: CreditsImageData[] = imageDetails.map((detail) => ({
	title: detail.title,
	artist: detail.artist,
	artistLink: detail.artistLink
}));
