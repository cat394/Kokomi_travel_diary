import { json } from '@sveltejs/kit';
import type { News } from '$lib/types';

const getPosts = async () => {
	const news: News[] = [];

	const paths = import.meta.glob('/src/markdown/news/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');
		if (file && typeof file === 'object' && 'metadata' in file) {
			const metadata = file.metadata as Omit<News, 'slug'>;
			const post = { ...metadata, slug } satisfies News;
			post.published && news.push(post);
		}
	}

	return news;
};

export async function GET() {
	const news = await getPosts();
	return json(news);
}
