import {
	pageQuery,
	pagesQuery,
	postsQuery,
	navQuery,
	type Post,
	type Page
} from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';
import { locales, baseLocale } from '$lib/paraglide/runtime';
import { getLocaleFromPath } from '$lib/utils';

export const load: PageServerLoad = async (event) => {
	const { params, url } = event;
	const { loadQuery } = event.locals;

	const slug = 'start';

	const language = getLocaleFromPath(url.pathname, Array.from(locales), baseLocale);

	const page = await loadQuery(pageQuery, { ...params, language, slug });

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
