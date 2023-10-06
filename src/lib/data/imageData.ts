import type { BeforeFormatDetail, MediaDetail } from './mediaTypes';

type BeforeFormatImageDetail = BeforeFormatDetail & {
	width: number;
	height: number;
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

export const IMAGE_FOLDERS = {
	HERO: '/images/',
	PHOTO: '/images/photos/'
};

const format = 'webp';

const formatImageDetail = (detail: BeforeFormatImageDetail, folderType: keyof typeof IMAGE_FOLDERS): ImageDetail => {
	const folderPath = IMAGE_FOLDERS[folderType];
	return {
		...detail,
		src: folderPath + `${detail.fileName}.${format}`
	};
};

const heroDetails: BeforeFormatImageDetail[] = [
  {
		id: 1,
		title: '森の道(昼)',
		artist: 'きまぐれアフター',
		artistLink: 'https://gakaisozai.seesaa.net/',
		fileName: 'home_hero',
		alt: '山道を背景に、Kokomiがこちらを向いている',
    width: 800,
    height: 433
	},
	{
		id: 2,
		title: 'きれいな音楽の背景(緑)',
		artist: 'OKUMOTO',
		artistLink: 'https://sozaino.site/',
		fileName: 'about_hero',
		alt: '音符の入った緑と青の淡いグラデーションを背景にしてKokomiがいる',
    width: 800,
    height: 433
	},
	{
		id: 3,
		title: 'きれいな音楽の背景(黄)',
		artist: 'OKUMOTO',
		artistLink: 'https://sozaino.site/',
		fileName: 'posts_hero',
		alt: '音符の入った黄色の淡いグラデーションを背景にしてKokomiがいる',
    width: 800,
    height: 433
	},
	{
		id: 4,
		title: 'きれいな音楽の背景(紫)',
		artist: 'OKUMOTO',
		artistLink: 'https://sozaino.site/',
		fileName: 'rss_hero',
		alt: '音符の入った紫色の淡いグラデーションを背景にしてKokomiがいる',
    width: 800,
    height: 433
	},
	{
		id: 5,
		title: 'きれいな音楽の背景(赤)',
		artist: 'OKUMOTO',
		artistLink: 'https://sozino.site/',
		fileName: 'news_hero',
		alt: '音符の入った赤色の淡いグラデーションを背景にして学生服のKokomiがいる',
    width: 800,
    height: 433
	},
	{
		id: 6,
		title: 'ちびKokomi',
		artist: 'kakeru',
		artistLink: 'https://commons.nicovideo.jp/users/70214953',
		fileName: 'chibi_kokomi',
		alt: 'Kokomiのミニキャラがだらーっとしている',
    width: 48,
    height: 42
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

const formattedHeroDetails: ImageDetail[] = heroDetails.map(detail => formatImageDetail(detail, 'HERO'));
const formattedPhotosDetails: ImageDetail[] = photosDetails.map(detail => formatImageDetail(detail, 'PHOTO'));

export const imageDetails: ImageDetail[] = [...formattedPhotosDetails, ...formattedHeroDetails];

export const creditsImageData: CreditsImageData[] = imageDetails.map((detail) => ({
	title: detail.title,
	artist: detail.artist,
	artistLink: detail.artistLink
}));

export const imageComponentData: Record<string, ImageDetail> = {
	...formattedPhotosDetails.reduce((acc, detail) => ({ ...acc, [detail.fileName]: detail }), {}),
	...formattedHeroDetails.reduce((acc, detail) => ({ ...acc, [detail.fileName]: detail }), {}),
};