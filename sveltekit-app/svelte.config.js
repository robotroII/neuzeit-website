import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
    // prerender: {
    //   crawl: true,
    //   entries: [
    //     // list all dynamic routes here so it can be built with static adapter
    //     '/start',
    //     '/agentic-intelligence',
    //     '/case-studies',
    //     '/tokenomics',
    //     '/about',
    //     '/contact',
    //     '/blog',
    //     '/privacy',
    //     '/imprint',
    //     '/accessibility',
    //   ]
    // }
	},
};

export default config;
