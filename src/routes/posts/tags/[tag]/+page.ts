import type { Post } from '$lib/types';
import { error } from '@sveltejs/kit';

export async function load ({ params, fetch }) {
	try {
		const response = await fetch(`/api/posts`);
		const posts: Post[] = await response.json();
		const targetPosts = posts.filter(post => {
			return post.tags.find(tag => {
				return tag === params.tag;
			})
		})

		return {
			posts: targetPosts,
			tagName: params.tag
		};
	} catch (e) {
		throw error(404, `Could not find ${params.tag}`);
	}
};