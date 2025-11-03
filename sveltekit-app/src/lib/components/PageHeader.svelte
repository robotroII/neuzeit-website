<header bind:this={header} class="page-header absolute z-100 w-full py-4 xl:py-0">
  <div class="container-fluid-xl flex items-center relative">
    <div class="grow-0 shrink-0 ms-10">
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
        class="grow xl:flex
          absolute xl:static top-[100%] xl:top-auto right-0 xl:right-auto
          mt-4 xl:mt-0 pb-8 xl:pb-0
          {expanded ? '[clip-path:inset(0_0_0_0)]' : '[clip-path:inset(0_0_0_100%)]'} xl:[clip-path:none]
          transition-all ease-in-out duration-240
        "
        >
        <div class="w-screen sm:w-auto min-w-[20rem] xl:min-w-auto h-screen xl:h-auto
          flex flex-col xl:flex-row xl:grow items-end xl:items-center gap-4 xl:gap-0
          px-8 py-8 xl:py-0
          bg-[rgba(0,0,0,0.9)] xl:bg-transparent
          backdrop-blur-xl xl:backdrop-blur-none
        ">
          <div class="xl:flex xl:grow xl:h-24 mb-4 xl:mb-0">
            <Navigation
              nav={mainNavItems}
              class="mx-auto flex-col lg:flex-row mb-12 xl:mb-0"
              ulClass="navigation flex-col xl:flex-row xl:gap-6 xl:items-center xl:gap-8"
              liClass="xl:place-items-center"
              aClass="uppercase text-end xl:text-start"
              bind:selectedItem={selectedSlug}
            />
            <div
              class="
                {selectedSlug.includes('cases') ? 'xl:[clip-path:inset(0_0_0_0)]' : 'xl:[clip-path:inset(0_0_100%_0)]'}
                xl:absolute xl:left-0 xl:w-full xl:top-full
                transition-all ease-in-out duration-240
                "
              >
              <div class="container-xl xl:flex xl:justify-end">
                <Navigation
                  nav={casesNavItems}
                  class="mx-auto flex-col xl:flex-row mb-8 xl:mb-0"
                  ulClass="navigation flex-col xl:flex-row xl:gap-6 xl:items-center xl:gap-8"
                  liClass="xl:place-items-center"
                  aClass="uppercase text-end xl:text-start"
                />
              </div>
            </div>
          </div>
          <div class="shrink flex ms-auto xl:tw-light-mode mt-12 xl:mt-0">
            <div class="page-header--background absolute top-0 right-0 min-h-24 hidden xl:block translate-x-6">
              <svg width="160" height="96" viewBox="0 0 160 96">
                <path d="M0 0V9.61542C0 48.9045 36.5678 96 88.7124 96H160V0H0Z" fill="white"/>
              </svg>
            </div>
            <div class="lg:tw-light-mode" data-tw-theme="light">
              <Navigation
                class="relative z-1"
                nav={metaNavItems}
                ulClass="navigation flex-col xl:flex-row xl:items-center xl:gap-6 xl:gap-8"
                liClass="xl:place-items-center"
                aClass="uppercase text-end xl:text-start text-white xl:text-black"
              />
            </div>
          </div>
        </div>
      </div>
    {/if}

    <div class="flex xl:hidden items-center ms-auto me-8">
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
	import { onMount } from 'svelte';

	const pageData = $derived(page.data.pageData?.data);
  const themeData = $derived(pageData && pageData.theme);

  let header = $state<HTMLElement>();
  let expanded = $state(false);
  
  let selectedSlug = $state<string>('');

  const mainNavItems = $derived({
    ...page?.data?.nav?.main,
    items: page?.data?.nav?.main?.items.map((item: any) => ({ ...item, slug: item.slug === 'start' ? '' : item.slug })), 
  });
  const metaNavItems = $derived({
    ...page?.data?.nav?.meta,
    // items: page?.data?.nav?.meta?.items.filter(item => !['cases'].includes(item.slug))
  });
  const casesNavItems = $derived({
    ...page?.data?.nav?.cases,
    items: page?.data?.nav?.cases?.items.map((item: any) => ({ ...item, slug: `cases/${item.slug}` })),
  });

  $effect(() => {
    console.log('casesNavItems', casesNavItems);
  });

  onMount(() => {
    header?.querySelectorAll('a:link').forEach((link) => {
      link.addEventListener('click', () => {
        expanded = false;
      });
    });
  });
</script>

<style lang="postcss">
  /* #navbar-default {
    clip-path: inset(0 100% 0 0);
  } */
</style>