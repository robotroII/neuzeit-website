<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
  import PageFooter from '$lib/components/PageFooter.svelte';
  import ScrollToTop from '$lib/components/ScrollToTop.svelte';

  import '@fontsource/sora/300.css';
  import '@fontsource/sora/400.css';
  import '@fontsource/sora/700.css';
	import '../app.css';

  import { page } from '$app/state';
  import { afterNavigate } from '$app/navigation';
  import { tick } from 'svelte';

  import { fade, fly } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';

	const pageData = $derived(page.data.page?.data);
  const theme = $derived(pageData && pageData.theme);

	const duration = 300;
	const delay = duration + 100;
	const y = 10;

	const transitionIn = { easing: cubicOut, y, duration, delay };
	const transitionOut = { easing: cubicIn, y: -y, duration };

	const { children } = $props();

	// Scroll to top after out-transition completes but before in-transition starts
	// Only for actual navigation (not reloads)
	afterNavigate(async (navigation) => {
		// Only scroll to top if it's a navigation (not a reload)
		if (navigation.type === 'link' || navigation.type === 'goto') {
			// Wait for the DOM to update
			await tick();
			// Scroll happens during the delay period (between out and in transition)
			setTimeout(() => {
				window.scrollTo({ top: 0, behavior: 'instant' });
			}, duration + 50); // Scroll during the delay period
		}
	});

	// Allow scroll snapshot restoration for browser back/forward and page reloads
	export const snapshot = {
		capture: () => {
			return {
				scroll: window.scrollY
			};
		},
		restore: (values) => {
			// Restore scroll position on page reload or back/forward navigation
			if (values?.scroll !== undefined) {
				window.scrollTo({ top: values.scroll, behavior: 'instant' });
			}
		}
	};
</script>

<svelte:head>
  <title>
    {pageData?.title}
  </title>
  <meta property="description" content="{pageData?.description}" />
</svelte:head>

<div
  class="
    svelte-layout
    w-screen max-w-screen
    page page--{pageData?.slug?.current || pageData?.slug || 'start'}
    {pageData?._type === 'case' ? `page--case case--${pageData.slug?.current || pageData.slug}` : ''}
    {theme?.class ? theme.class : ''}
    {theme?.colorMode ? `tw-${theme.colorMode}` : ''}
    {theme?.primaryGradient?.colors?.length ? 'has-gradient' : ''}
    {theme?.backgroundColor ? 'has-background-color' : ''}
    {theme?.primaryColor ? 'has-primary-color' : ''}
    "
  class:tw-dark-mode={theme && theme.colorMode === 'dark'}
  class:tw-light-mode={theme && theme.colorMode === 'light'}
  style="{
    theme && theme.primaryGradient && theme.primaryGradient.colors.length
      ? `--gradient-primary: linear-gradient(${theme.primaryGradient.angle ? `${theme.primaryGradient.angle}deg` : ''} in hsl,  ${theme.primaryGradient.colors?.join(',')})`
      : ''
  };{
    theme && theme.primaryColor
      ? `--color-primary: ${theme.primaryColor}`
      : ''
  };{
    theme && theme.backgroundColor
      ? `--color-page-background: ${theme.backgroundColor}`
      : ''
  };{
   theme && theme.primaryGradient?.colors?.length
      ? theme.primaryGradient.colors.map((color: string, index: number) => `--gradient-color-${index + 1}: ${color}`).join(';')
      : ''
  }"
  >
  <div class="min-h-dvh flex flex-col">
    <PageHeader class="z-100" />
    <!-- Spacer for fixed header -->
    <div class="h-[72px] xl:h-[96px]"></div>
  <!-- --{Object.keys(pageData)}-- -->
    <main>
      {#key page.data?.pathname}
        <div in:fly={transitionIn} out:fly={transitionOut}>
          {@render children?.()}
        </div>
      {/key}
    </main>
  
    <PageFooter />
  </div>

  <ScrollToTop />
</div>

<div class="absolute w-0 h-0 invisible overflow-hidden -z-1">
  <svg>
    <defs>
      {#if theme && theme.primaryGradient}
        <linearGradient
          id="primary-gradient-def"
          x1="29.4331"
          y1="15.8065"
          x2="0"
          y2="15.8065"
          gradientUnits="userSpaceOnUse"
          gradientTransform={theme.primaryGradient.angle && `rotate(${theme.primaryGradient.angle})`}
          >
          {#if theme.primaryGradient}
            {#each theme.primaryGradient?.colors as color, index}
              <stop offset={index / (theme.primaryGradient?.colors.length - 1)} stop-color={color} />
            {/each}
          {/if}
        </linearGradient>
      {/if}
    </defs>
  </svg>
</div>

<style lang="postcss">
</style>