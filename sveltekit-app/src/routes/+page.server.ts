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
	const { params, fetch } = event;
	const { loadQuery } = event.locals;

	const slug = '';
	const id = '';
  const language = 'en';
	console.log('slug', slug, id);

	const pages = await loadQuery<Page[]>(pagesQuery, { ...params, language });
	console.log('pages', pages);

	// const posts = await loadQuery<Post[]>(postsQuery);
	// const nav = await loadQuery(navQuery);

	// const slug = '';
	// const id = '';

	// const pageData = await loadQuery<Page>(pageQuery, { id, slug, ...params } );

	return {
		pages
		// pageQuery,
		// pagesQuery,
		// postsQuery,
		// navQuery,
		// options: { pages, posts, nav },
		// pageData,
	};
};

// export const prerender = true;
