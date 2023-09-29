import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const news = await import(`../../../markdown/news/${params.slug}.md`);
		return {
			content: news.default,
			meta: news.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
};
