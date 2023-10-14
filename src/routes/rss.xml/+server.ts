import * as config from '$lib/config';
import type { Post } from '$lib/types';

export async function GET({ fetch }) {
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();
	console.log(posts);
	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.title}</title>
				<description>${config.description}</description>
				<link>${config.url}</link>
				<atom:link href="${config.url}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>${config.url}/posts/${post.slug}</link>
							<pubDate>${new Date(post.pubDate).toUTCString()}</pubDate>
							<enclosure url="${post.image.url}" type="image/webp"></enclosure>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}
