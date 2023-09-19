type ImageSize = {
	width: number;
	height: number;
};

type ImageDetail = {
	name: string;
	alt: string;
};

type ImageInfo = ImageDetail & {
	src: string;
	width: number;
	height: number;
};

const imageFolderPath = '/images/';
const pthotosFolderPath = 'photos/';
const format = 'webp';

const heroImageSize: ImageSize = {
	width: 800,
	height: 433
};

const heroImageDetails: ImageDetail[] = [
	{ name: 'home_hero', alt: '山道を背景にKokomiがこちらを向いている' },
	{ name: 'about_hero', alt: '緑と青のグラデーションのある音符の入った背景にKokomiがいる' },
	{ name: 'posts_hero', alt: '黄色のグラデーションのある音符の入った背景に笑ったKokomiがいる' },
	{ name: 'rss_hero', alt: '紫のグラデーションのある音符の入った背景に困り顔をしたKokomiがいる' }
];

const photoImageDetails: ImageDetail[] = [
	{ name: 'cruise_morning', alt: 'ショートヘアーのKokomiがクルーズ船に乗った時の写真' },
	{ name: 'school_evening', alt: 'ツインテールのKokomiが学校に行った時の写真' },
	{ name: 'mole_night', alt: 'Kokomiがホテルを抜け出して夜の海を見に行った時の写真' }
];

const createImageInfo = (
	imageDetails: ImageDetail[],
	folder: string,
	format: string,
	size: ImageSize
): ImageInfo[] => {
	return imageDetails.map((imageDetail) => {
		return {
			...imageDetail,
			src: `${folder}${imageDetail.name}.${format}`,
			width: size.width,
			height: size.height
		};
	});
};

const heroImages: ImageInfo[] = createImageInfo(
	heroImageDetails,
	imageFolderPath,
	format,
	heroImageSize
);

const photoImages: ImageInfo[] = createImageInfo(
	photoImageDetails,
	imageFolderPath + pthotosFolderPath,
	format,
	heroImageSize
);

const imageDetails = [...heroImages, ...photoImages];

export { imageDetails };
