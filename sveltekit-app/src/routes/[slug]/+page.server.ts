import { pageQuery, casesQuery, type Page } from '$lib/sanity/queries';
import type { PageServerLoad, EntryGenerator } from './$types';
import { getLocale } from '$lib/paraglide/runtime';

export const load: PageServerLoad = async (event) => {
	const { params } = event;
	const { loadQuery } = event.locals;

	const language = getLocale();

	const page = await loadQuery(pageQuery, { ...params, language });

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
