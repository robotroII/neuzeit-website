<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
  import PageFooter from '$lib/components/PageFooter.svelte';

  import '@fontsource/sora/300.css';
  import '@fontsource/sora/400.css';
  import '@fontsource/sora/700.css';
	import '../app.css';

  import { page } from '$app/state';

	const pageData = $derived(page.data.page?.data);
  // const themeData = $derived(pageData && pageData.theme);
  // console.log('pageData', pageData, pageData?.sections.filter(section => section._type === 'pageSection'));

  // const pages = $derived(page.data.pages?.data);
  // console.log('data', page.data);

	const { children } = $props();
</script>

<svelte:head>
  <!-- <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /> -->
  <title>{pageData?.title}</title>
  <!-- <title>{pageData?.title}</title> -->
</svelte:head>

<PageHeader />

<!-- {#if $isPreviewing}
	<a href={`/preview/disable?redirect=${page.url.pathname}`} class="preview-toggle">
		<span>Preview Enabled</span>
		<span>Disable Preview</span>
	</a>
{/if} -->

<!-- <div
  class="svelte-layout w-screen max-w-screen page page--{pageData?.slug?.current || 'start'} {themeData?.class ? themeData.class : ''} {themeData?.colorMode ? `tw-${themeData.colorMode}` : ''} {themeData?.primaryGradient?.colors?.length ? 'has-gradient' : ''} {themeData?.backgroundColor ? 'has-background-color' : ''} {themeData?.primaryColor ? 'has-primary-color' : ''}"
  class:tw-dark-mode={themeData && themeData.colorMode === 'dark'}
  class:tw-light-mode={themeData && themeData.colorMode === 'light'}
  style="{
    themeData && themeData.primaryGradient && themeData.primaryGradient.colors.length
      ? `--gradient-primary: linear-gradient(${themeData.primaryGradient.angle ? `${themeData.primaryGradient.angle}deg` : ''} in hsl,  ${themeData.primaryGradient.colors?.join(',')})`
      : ''
  };{
    themeData && themeData.primaryColor
      ? `--color-primary: ${themeData.primaryColor}`
      : ''
  };{
    themeData && themeData.backgroundColor
      ? `--color-page-background: ${themeData.backgroundColor}`
      : ''
  };{
   themeData && themeData.primaryGradient.colors?.length
      ? themeData.primaryGradient.colors.map((color, index) => `--gradient-color-${index + 1}: ${color}`).join(';')
      : ''
  }"
  >
  <div class="min-h-dvh flex flex-col gap-4">
    {#if isPreviewing}
      <VisualEditing />
    {/if}

    <PageHeader />
  
    <main>
      {@render children()}
    </main>
  
    <PageFooter />
  </div>
</div>

<div class="absolute w-0 h-0 invisible -z-1">
  <svg>
    <defs>
      {#if themeData && themeData.primaryGradient}
        <linearGradient
          id="primary-gradient-def"
          x1="29.4331"
          y1="15.8065"
          x2="0"
          y2="15.8065"
          gradientUnits="userSpaceOnUse"
          gradientTransform={themeData.primaryGradient.angle && `rotate(${themeData.primaryGradient.angle})`}
        >
          {#if themeData.primaryGradient}
            {#each themeData.primaryGradient.colors as color, index}
              <stop offset={index / (themeData.primaryGradient.colors.length - 1)} stop-color={color} />
            {/each}
          {/if}
        </linearGradient>
      {/if}
    </defs>
  </svg>
</div> -->

<main>
  {@render children()}
</main>

<PageFooter />

<style lang="postcss">
</style>