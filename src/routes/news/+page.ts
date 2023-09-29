import type { News } from '$lib/types';

export const load = async ({ fetch }) => {
	const response = await fetch('/api/news');
	const news: News[] = await response.json();
	return { news };
};
