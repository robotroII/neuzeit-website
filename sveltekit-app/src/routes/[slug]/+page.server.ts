import { pageQuery, casesQuery, type Page } from '$lib/sanity/queries';
import type { PageServerLoad, EntryGenerator } from './$types';
import { getLocale, locales, baseLocale } from '$lib/paraglide/runtime';

export const load: PageServerLoad = async (event) => {
	const { params, url } = event;
	const { loadQuery } = event.locals;

	// If no slug is provided, return empty data structure
	if (!params.slug) {
		return {
			page: { data: null }
		};
	}

	// Extract locale from URL pathname instead of relying on getLocale()
	const pathSegments = url.pathname.split('/').filter(Boolean);
	const possibleLocale = pathSegments[0];
	const language = (locales.includes(possibleLocale as any) ? possibleLocale : baseLocale) as typeof baseLocale;

	const page = await loadQuery(pageQuery, { ...params, language });
  console.log('server request', { ...params, language, pathname: url.pathname });
	return {
		page,
		// cases
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
