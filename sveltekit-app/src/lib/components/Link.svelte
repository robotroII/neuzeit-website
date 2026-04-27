<a
  href={slug !== 'cases' ? _href : null}
  role="button"
  class={className}
  class:active={page.url.pathname.replace(/\/$/, '') === `${_href.replace(/\/$/, '')}`
    || `${page.url.pathname.split('/')[1]}s` === slug}
  onclick={() => { active = active !== slug ? slug : ''; }}
  target={target}
  data-sveltekit-noscroll
  >
  {@render children()}
</a>

<script lang="ts">
  import { getLocale, baseLocale } from '$lib/paraglide/runtime.js';
  import { page } from '$app/state';

  let {
    slug,
    href = '',
    class: className = '',
    children,
    active = $bindable(''),
    target = ''
  } = $props();

  const locale = $derived(page.url.pathname && getLocale());
  const _href = $derived(href || `${locale && locale !== baseLocale ? `/${locale}` : ''}/${slug}`);
</script>

<style lang="postcss" scoped>
</style>
