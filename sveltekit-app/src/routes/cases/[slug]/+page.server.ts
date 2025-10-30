import { caseQuery } from '$lib/sanity/queries';
import type { PageServerLoad, EntryGenerator } from './$types';
import { locales, baseLocale } from '$lib/paraglide/runtime';
import { getLocaleFromPath } from '$lib/utils';

export const load: PageServerLoad = async (event) => {
	const { params, url } = event;
	const { loadQuery } = event.locals;

  const language = getLocaleFromPath(url.pathname, Array.from(locales), baseLocale);
	const page = await loadQuery(caseQuery, { ...params, language });

	return {
		page
	};
};

export const entries: EntryGenerator = () => {
	return [
		{ slug: 'grohe' },
		{ slug: 'deutsche-bank' },
		{ slug: 'vodaphone' },
	];
};

// export const prerender = true;
