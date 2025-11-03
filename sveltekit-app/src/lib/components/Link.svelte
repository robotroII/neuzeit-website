<a
  href={slug !== 'cases' ? _href : null}
  role="button"
  class={className}
  class:active={page.url.pathname === `${_href || ''}`
    || `${page.url.pathname.split('/')[1]}s` === slug}
  onclick={() => { active = active !== slug ? slug : ''; }}
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
  } = $props();

  const locale = $derived(page.url.pathname && getLocale());
  const _href = $derived(href || `${locale && locale !== baseLocale ? `/${locale}` : ''}/${slug}`);
</script>

<style lang="postcss" scoped>
  a.active {
    background: var(--gradient-primary);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-attachment: fixed;
    text-decoration: underline;
  }
</style>
