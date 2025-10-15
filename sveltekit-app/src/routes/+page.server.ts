import { getLocale } from '$lib/paraglide/runtime';
import {
	pageQuery,
	pagesQuery,
	postsQuery,
	navQuery,
	type Post,
	type Page
} from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';
import { getLocale, locales, baseLocale } from '$lib/paraglide/runtime';

export const load: PageServerLoad = async (event) => {
	const { params, url } = event;
	const { loadQuery } = event.locals;

	const slug = 'start';

	const pathSegments = url.pathname.split('/').filter(Boolean);
	const possibleLocale = pathSegments[0];
	const language = (locales.includes(possibleLocale as any) ? possibleLocale : baseLocale) as typeof baseLocale;


	const page = await loadQuery(pageQuery, { ...params, language, slug });
	console.log('root page', { ...params, language, slug });

	// const posts = await loadQuery<Post[]>(postsQuery);
	// const nav = await loadQuery(navQuery);

	// const slug = '';
	// const id = '';

	// const pageData = await loadQuery<Page>(pageQuery, { id, slug, ...params } );

	return {
		page
		// pageQuery,
		// pagesQuery,
		// postsQuery,
		// navQuery,
		// options: { pages, posts, nav },
		// pageData,
	};
};

// export const prerender = true;
