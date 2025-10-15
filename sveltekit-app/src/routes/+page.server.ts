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

export const load: PageServerLoad = async (event) => {
	const { params } = event;
	const { loadQuery } = event.locals;

	const slug = 'start';
	const id = '';
	const language = getLocale();

	const page = await loadQuery(pageQuery, { ...params, language, slug });
	console.log('pages', { ...params, language, slug });

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
