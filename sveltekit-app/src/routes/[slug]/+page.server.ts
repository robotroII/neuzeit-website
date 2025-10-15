import { pageQuery, casesQuery, type Page } from '$lib/sanity/queries';
import type { PageServerLoad, EntryGenerator } from './$types';
import { locales, baseLocale } from '$lib/paraglide/runtime';
import { getLocaleFromPath } from '$lib/utils';

export const load: PageServerLoad = async (event) => {
	const { params, url } = event;
	const { loadQuery } = event.locals;

	const language = getLocaleFromPath(url.pathname, Array.from(locales), baseLocale);
	const page = await loadQuery(pageQuery, { ...params, language });

  return {
		page,
	};
};

export const entries: EntryGenerator = () => {
	return [
		{ slug: 'start' },
		{ slug: 'ai' },
		{ slug: 'tokenomics' },
		{ slug: 'cases' },
		{ slug: 'about' },
	];
};

// export const prerender = true;
