import { navQuery } from '$lib/sanity/queries';
import type { LayoutServerLoad } from './$types';
import { getLocale } from "$lib/paraglide/runtime.js";

export const load: LayoutServerLoad = async (event) => {
	const { loadQuery } = event.locals;

	const language = getLocale();
	const nav = await loadQuery(navQuery, { language });

	return {
		pathname: event.url.pathname,
		nav: {
			main: nav.data.find((item: { [key: string]: any }) => item.slug === 'main-nav'),
			footer: nav.data.find((item: { [key: string]: any }) => item.slug === 'footer-nav'),
			meta: nav.data.find((item: { [key: string]: any }) => item.slug === 'meta-nav'),
			cases: nav.data.find((item: { [key: string]: any }) => item.slug === 'case-nav'),
		},
	};
};

// export const prerender = true;
