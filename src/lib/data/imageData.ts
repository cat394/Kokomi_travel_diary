export type ImageData = {
	id: number;
	title: string;
	artist: string;
	artistLink: string;
	fileName?: string;
	alt?: string;
	width?: number;
	height?: number;
};

export type FolderData = {
	folder: string;
	path: string;
	data: ImageData[];
};

export const imageData: FolderData[] = [
	{
		folder: 'root',
		path: '/images/',
		data: [
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
				title: "きれいな音楽の背景(紫)'",
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
				artistLink: 'https://sozaino.site/',
				fileName: 'news_hero',
				alt: '音符の入った赤色の淡いグラデーションを背景にして学生服のKokomiがいる',
				width: 800,
				height: 433
			},
			{
				id: 6,
				title: 'ちびKokomi',
				artist: 'kakeeru',
				artistLink: 'https://commons.nicov"id"eo.jp/users/70214953',
				fileName: 'chibi_kokomi',
				alt: 'Kokomiのちびキャラ',
				width: 48,
				height: 42
			},
			{
				id: 7,
				title: 'ハロウィンの背景(オレンジ)',
				artist: 'OKUMOTO',
				artistLink: 'https://sozaino.site/',
				fileName: 'home_hero_halloween',
				alt: 'オレンジ色の背景と黒色のフレームのハロウィンの背景にメイド姿のKokomiがいる',
				width: 800,
				height: 433
			},
			{
				id: 8,
				title: 'ハロウィンの背景(ピンク)',
				artist: 'OKUMOTO',
				artistLink: 'https://sozaino.site/',
				fileName: 'about_hero_halloween',
				alt: 'ピンクの背景と紫色のフレームのハロウィンの背景にメイド姿のKokomiがいる',
				width: 800,
				height: 433
			},
			{
				id: 9,
				title: 'ハロウィンの背景(赤)',
				artist: 'OKUMOTO',
				artistLink: 'https://sozaino.site/',
				fileName: 'posts_hero_halloween',
				alt: '赤色の背景と黒色のフレームのハロウィンの背景にメイド姿のKokomiがいる',
				width: 800,
				height: 433
			},
			{
				id: 10,
				title: 'ハロウィンの背景(紫)',
				artist: 'OKUMOTO',
				artistLink: 'https://sozaino.site/',
				fileName: 'rss_hero_halloween',
				alt: '紫色の背景と黒色のフレームのハロウィンの背景にメイド姿のKokomiがいる',
				width: 800,
				height: 433
			},
			{
				id: 11,
				title: 'ハロウィンの背景(緑)',
				artist: 'OKUMOTO',
				artistLink: 'https://sozaino.site/',
				fileName: 'news_hero_halloween',
				alt: '紫色の背景と黒色のフレームのハロウィンの背景にメイド姿のKokomiがいる',
				width: 800,
				height: 433
			},
			{
				id: 12,
				title: 'ウェブサイトの背景に使用した画像(ハロウィン)',
				artist: 'DESIGNALIKIE',
				artistLink: 'https://illustimage.com/'
			}
		]
	},
	{
		folder: 'photos',
		path: '/images/photos/',
		data: [
			{
				id: 12,
				title: '豪華客船',
				artist: 'AIPICT',
				artistLink: 'https://aipict.com/',
				fileName: 'cruise_morning',
				alt: '晴れた空の下でクルーズに乗っているKokomi',
				width: 700,
				height: 467
			},
			{
				id: 13,
				title: '学校の中庭',
				artist: 'きまぐれアフター',
				artistLink: 'https://gakaisozai.seesaa.net/',
				fileName: 'school_evening',
				alt: '夕暮れの学校にいるKokomi',
				width: 800,
				height: 600
			},
			{
				id: 14,
				title: '防波堤',
				artist: 'みんちりえ',
				artistLink: 'https://min-chi.material.jp/',
				fileName: 'mole_night',
				alt: '夜の海に覗きに防波堤にいるKokomi',
				width: 756,
				height: 500
			}
		]
	}
];
