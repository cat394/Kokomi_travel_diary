import * as config from '$lib/config';
import type { Post } from '$lib/types';

const escapeXml = (unsafe: string): string => {
	return unsafe.replace(/[<>&'"]/g, (c) => {
		switch (c) {
			case '<':
				return '&lt;';
			case '>':
				return '&gt;';
			case '&':
				return '&amp;';
			case "'":
				return '&apos;';
			case '"':
				return '&quot;';
		}
	});
};

export async function GET({ fetch }) {
	try {
		const response = await fetch('/api/posts');
		if (!response.ok) {
			throw new Error('Failed to fetch posts');
		}

		const posts: Post[] = await response.json();

		const headers = { 'Content-Type': 'application/xml' };

		const items = posts
			.map(
				(post) => `
      <item>
          <title>${escapeXml(post.title)}</title>
          <description>${escapeXml(post.description)}</description>
          <link>${escapeXml(config.url)}/${escapeXml(post.slug)}</link>
          <guid isPermaLink="true">${escapeXml(config.url)}/${escapeXml(post.slug)}</guid>
          <pubDate>${new Date(post.pubDate).toUTCString()}</pubDate>
          <media:content url="${escapeXml(post.image.url)}" type="image/webp" />
      </item>
  `
			)
			.join('');

		const xml = `
      <rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
          <channel>
              <title>${escapeXml(config.title)}</title>
              <description>${escapeXml(config.description)}</description>
              <link>${escapeXml(config.url)}</link>
              <atom:link href="${escapeXml(
								config.url
							)}/rss.xml" rel="self" type="application/rss+xml"/>
              ${items}
          </channel>
      </rss>
  `.trim();
		return new Response(xml, { headers });
	} catch (error) {
		console.error('Error generating XML: ', error);
		return new Response('Internal Server Error', { status: 500 });
	}
}
