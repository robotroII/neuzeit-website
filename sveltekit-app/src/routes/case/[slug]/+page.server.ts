import { caseQuery, type Page } from '$lib/sanity/queries';
import type { PageServerLoad, EntryGenerator } from './$types';

export const load: PageServerLoad = async (event) => {
	const { params, fetch } = event;
	const { loadQuery } = event.locals;

	const pageData = await loadQuery<Page>(caseQuery, params);

	return {
		pageData
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
