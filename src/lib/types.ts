export type PositionType = 'left' | 'center' | 'right';

export type Post = {
	title: string;
	pubDate: string;
	description: string;
	image: {
		url: string;
		alt: string;
	};
	tags: string[];
	published: boolean;
	slug: string;
};
