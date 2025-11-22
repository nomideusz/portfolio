import type { RequestHandler } from './$types';
import { projects } from '$lib/data/projects';

export const GET: RequestHandler = async () => {
	const baseUrl = 'https://bdymet.dev';
	const pages = [
		{ url: '', priority: '1.0', changefreq: 'weekly' },
		{ url: '/about', priority: '0.8', changefreq: 'monthly' },
		{ url: '/projects', priority: '0.9', changefreq: 'weekly' },
		{ url: '/contact', priority: '0.8', changefreq: 'monthly' }
	];

	// Add all project detail pages
	const projectPages = projects.map(project => ({
		url: `/projects/${project.slug}`,
		priority: '0.7',
		changefreq: 'monthly'
	}));

	const allPages = [...pages, ...projectPages];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
	.map(
		page => `	<url>
		<loc>${baseUrl}${page.url}</loc>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
	</url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
