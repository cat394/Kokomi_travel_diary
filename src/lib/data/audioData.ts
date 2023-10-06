import type { BeforeFormatDetail, MediaDetail } from '$lib/data/mediaTypes';

type formattedAudioDetail = MediaDetail & {
	thumbImage: string;
};

const AUDIO_FOLDER = '/audio/';
const BGM_THUMB_FOLDER = `/images/bgmThumbs/`;
const audioFormat = 'mp3';
const imageFormat = 'webp';

const audioDetails: Omit<BeforeFormatDetail, 'src'>[] = [
	{
		id: 1,
		title: '夢花火',
		artist: 'yuhei komatsu',
		artistLink: 'https://free-blo.com/',
		fileName: 'yumehanabi'
	}
];

export const audioData: formattedAudioDetail[] = audioDetails.map((detail) => ({
	...detail,
	src: `${AUDIO_FOLDER}${detail.fileName}.${audioFormat}`,
	thumbImage: `${BGM_THUMB_FOLDER}${detail.fileName}.${imageFormat}`
}));
