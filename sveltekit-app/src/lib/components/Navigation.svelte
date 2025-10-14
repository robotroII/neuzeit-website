<nav class={`nav nav--${nav.navId} flex ${className}`}>
  <ul class="menu-list flex gap-4 {ulClass || 'lg:gap-8'}">
    {#each nav.items as item}
      <li class="menu-list-item grid {liClass}">
        <a
          href="/{item.slug}"
          class="bold {aClass} {item.linkClass}"
          class:active={page.url.pathname === `/${item.slug || ''}`
            || `${page.url.pathname.split('/')[1]}s` === item.slug}
        >{item.text}</a>
      </li>
    {/each}
  </ul>
</nav>

<script lang="ts">
	import { page } from '$app/state';

  let {
    nav,
    class: className = '',
    ulClass = '',
    liClass = '',
    aClass = ''

  } = $props();

  const path = page.url.pathname.split('/')[1] === 'case' ? 'cases' : undefined;
</script>

<style lang="postcss" scoped>
.menu-list-item a.active {
  background: var(--gradient-primary);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-attachment: fixed;
}
</style>
