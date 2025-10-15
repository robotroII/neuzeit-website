import { pageQuery, casesQuery, type Page } from '$lib/sanity/queries';
import type { PageServerLoad, EntryGenerator } from './$types';

export const load: PageServerLoad = async (event) => {
	const { params, fetch } = event;
	const { loadQuery } = event.locals;

	const id = '';

	// const pageData = await loadQuery<Page>(pageQuery, { id: '', ...params } );
	const cases = await loadQuery<Page>(casesQuery);

	return {
		// pageData,
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
