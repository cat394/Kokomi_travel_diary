export type MediaDetail = {
	id: number;
	title: string;
	artist: string;
	artistLink: string;
	src: string;
	fileName: string;
}

export type BeforeFormatDetail = Omit<MediaDetail, 'src'>;

