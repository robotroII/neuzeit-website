import { navQuery, pageQuery } from '$lib/sanity/queries';
import type { LayoutServerLoad } from './$types';
import { getLocale } from "$lib/paraglide/runtime.js";

export const load: LayoutServerLoad = async (event) => {
	const { params } = event;
	const { loadQuery } = event.locals;

	const language = getLocale();
	const nav = await loadQuery(navQuery, { language });
	// const page = await loadQuery(pageQuery, { ...params, language, slug: params.slug || 'start' });
	// console.log('layout language', language);

	return {
		// preview,
		// page,
		nav: {
			main: nav.data.find((item) => item.slug === 'main-nav'),
			// footer: nav.data.find((item) => item.navId === 'footerNav'),
			// meta: nav.data.find((item) => item.navId === 'metaNav'),
		},
	};
};

// export const prerender = true;
