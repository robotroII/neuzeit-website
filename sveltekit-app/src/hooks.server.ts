import { createRequestHandler, setServerClient } from '@sanity/svelte-loader';
import { serverClient } from '$lib/server/sanity/client';
import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import { getLocale } from '$lib/paraglide/runtime.js';
import { paraglideMiddleware } from '$lib/paraglide/server';

export const suppressHandler: Handle = async ({ event, resolve }) => {
  if (event.url.pathname.startsWith('/.well-known/appspecific/com.chrome.devtools')) {
    return new Response(null, { status: 204 }); // Return empty response with 204 No Content
  }

  return await resolve(event);
};

export const languageHandler: Handle = async ({ event, resolve }) => {
  const lang = getLocale();
  console.log('Setting language:', lang);
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};

const paraglideHandle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
		event.request = localizedRequest;
		return resolve(event, {
			transformPageChunk: ({ html }) => {
				return html.replace('%lang%', locale);
			}
		});
	});


// Sets the client to be used by `loadQuery` when fetching data on the server.
// The loader will handle setting the correct fetch parameters, including
// perspective. This isn't a hook, but it's a good place to call this function
// as this file is executed once per app initialization.
setServerClient(serverClient);

// This convenience function sets up preview mode endpoints and attaches useful
// helpers to the `event.locals` Svelte object, such as a preconfigured
// `loadQuery` function and `preview` state.
export const handle = sequence(suppressHandler, paraglideHandle, createRequestHandler());

