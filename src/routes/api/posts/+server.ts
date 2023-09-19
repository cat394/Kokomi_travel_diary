import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

const getPosts = async () => {
	const posts: Post[] = [];

	const paths = import.meta.glob('/src/markdown/posts/**/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');
		if (file && typeof file === 'object' && 'metadata' in file) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			post.published && posts.push(post);
		}
	}

	return posts;
};

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}