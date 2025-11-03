<nav class={`nav nav--${nav.navId} flex ${className}`}>
  <ul class="menu-list flex gap-4 {ulClass || 'lg:gap-8'}">
    {#each nav.items as item}
      <li class="menu-list-item grid {liClass}">
        <Link
          slug={item.slug}
          class="bold {aClass} {item.linkClass} {item.toggle ? 'hidden xl:block' : 'block'}"
          bind:active={selectedItem}
        >{item.text}</Link>
      </li>
    {/each}
  </ul>
</nav>

<script lang="ts">
	import { bind } from '@splidejs/svelte-splide/components/Splide/bind';
	import Link from './Link.svelte';

  let {
    nav,
    class: className = '',
    ulClass = '',
    liClass = '',
    aClass = '',
    selectedItem = $bindable<string>(''),
  } = $props();

  // let selectedItem = $state<string>('');
</script>

<style lang="postcss" scoped>
.menu-list-item a.active {
  background: var(--gradient-primary);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-attachment: fixed;
  text-decoration: underline;
}
</style>
