import { navQuery } from '$lib/sanity/queries';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const { preview, loadQuery } = event.locals;

	// const nav = await loadQuery(navQuery);

	return {
		preview,
		// nav: {
		// 	main: nav.data.find((item) => item.navId === 'mainNav'),
		// 	footer: nav.data.find((item) => item.navId === 'footerNav'),
		// 	meta: nav.data.find((item) => item.navId === 'metaNav'),
		// },
	};
};

// export const prerender = true;
