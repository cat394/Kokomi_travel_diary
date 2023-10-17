export type PositionType = 'left' | 'center' | 'right';

export type Post = {
	title: string;
	pubDate: string;
	revisedAt: string;
	description: string;
	eyecatch: {
		url: string;
		alt: string;
	};
	tags: string[];
	published: boolean;

	slug: string;
};

export type News = Omit<Post, 'tags'>;
