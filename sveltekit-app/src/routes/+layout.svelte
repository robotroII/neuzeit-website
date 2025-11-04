<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
  import PageFooter from '$lib/components/PageFooter.svelte';

  import '@fontsource/sora/300.css';
  import '@fontsource/sora/400.css';
  import '@fontsource/sora/700.css';
	import '../app.css';

  import { page } from '$app/state';

	const pageData = $derived(page.data.page?.data);
  const theme = $derived(pageData && pageData.theme);
  // console.log('pageData', pageData, pageData?.sections.filter(section => section._type === 'pageSection'));

	const { children } = $props();
</script>

<svelte:head>
  <title>{pageData?.title}</title>
</svelte:head>

<div
  class="svelte-layout w-screen max-w-screen page page--{pageData?.slug?.current || 'start'} {theme?.class ? theme.class : ''} {theme?.colorMode ? `tw-${theme.colorMode}` : ''} {theme?.primaryGradient?.colors?.length ? 'has-gradient' : ''} {theme?.backgroundColor ? 'has-background-color' : ''} {theme?.primaryColor ? 'has-primary-color' : ''}"
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
    <PageHeader class="relative z-100" />
  
    <main>
      {@render children()}
    </main>
  
    <PageFooter />
  </div>
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