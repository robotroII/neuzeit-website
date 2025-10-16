<header class="page-header absolute z-100 w-full py-4 lg:py-0">
  <div class="container-fluid-xl flex items-center relative">
    <div class="grow-0 shrink-0 ms-4">
      <!-- <a href="/" aria-label="Home"> -->
        <NeuzeitLogo
          id="header-logo"
          withText
          colors={themeData} />
      <!-- </a> -->
    </div>

    {#if page.data && page.data.nav}
      <div
        id="navbar-default"
        class="grow lg:flex
          absolute lg:static top-[100%] lg:top-auto right-0 lg:right-auto
          mt-4 lg:mt-0 pb-8 lg:pb-0
          {expanded ? '[clip-path:inset(0_0_0_0)]' : '[clip-path:inset(0_0_0_100%)] lg:[clip-path:inset(0_0_0_0)]'}
          transition-all ease-in-out duration-240
        "
        >
        <div class="w-screen sm:w-auto min-w-[20rem] lg:min-w-auto h-screen lg:h-auto
          flex flex-col lg:flex-row lg:grow items-end lg:items-center gap-4 lg:gap-0
          px-6 py-8 lg:py-0
        ">
          <div class="lg:flex lg:grow lg:h-24 mb-4 lg:mb-0">
            <Navigation
              nav={mainNavItems}
              class="mx-auto"
              ulClass="flex-col lg:flex-row lg:gap-6 lg:items-center xl:gap-8"
              liClass="lg:place-items-center"
              aClass="uppercase text-end lg:text-start"
            />
          </div>
          <div class="shrink flex ms-auto lg:tw-light-mode">
            <div class="page-header--background absolute top-0 right-0 min-h-24 hidden lg:block translate-x-6">
              <svg width="160" height="96" viewBox="0 0 160 96">
                <path d="M0 0V9.61542C0 48.9045 36.5678 96 88.7124 96H160V0H0Z" fill="white"/>
              </svg>
            </div>
            <div class="light" data-tw-theme="light">
              <Navigation
                class="relative z-1"
                nav={metaNavItems}
                ulClass="flex-col lg:flex-row lg:items-center lg:gap-6 xl:gap-8"
                liClass="lg:place-items-center"
                aClass="uppercase text-end lg:text-start text-black"
              />
            </div>
          </div>
        </div>
      </div>
    {/if}

    <div class="flex lg:hidden items-center ms-auto">
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        onclick={() => {expanded = !expanded; }}
        >
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
    </div>
  </div>
</header>

<!--
before:content-[''] before:absolute before:top-0 before:left-[100%] before:w-full before:h-full before:bg-gradient-to-b before:from-[#fff] before:to-[#fff]
-->
<script lang="ts">
  import NeuzeitLogo from '$lib/components/NeuzeitLogo.svelte';
  import Navigation from '$lib/components/Navigation.svelte';

	import { page } from '$app/state';

	const pageData = $derived(page.data.pageData?.data);
  const themeData = $derived(pageData && pageData.theme);
  let expanded = $state(false);

  const mainNavItems = $derived({
    ...page?.data?.nav?.main,
    // items: page?.data?.nav?.main?.items.filter(item => !['cases'].includes(item.slug))
  });
  const metaNavItems = $derived({
    ...page?.data?.nav?.meta,
    // items: page?.data?.nav?.meta?.items.filter(item => !['cases'].includes(item.slug))
  });
</script>

<style lang="postcss">
  /* #navbar-default {
    clip-path: inset(0 100% 0 0);
  } */
</style>