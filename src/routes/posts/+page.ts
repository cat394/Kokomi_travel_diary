import type { Post } from '$lib/types';

export const load = async ({ fetch }) => {
	const response = await fetch('/api/posts');
	const posts: Post[] = await response.json();
	const tags = [...new Set(posts.map((post) => post.tags).flat())];
	return { posts, tags };
};