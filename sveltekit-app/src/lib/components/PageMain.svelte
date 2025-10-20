  <div
    class="container-xl pt-24 min-h-screen bg-white text-black transition-colors duration-500 dark:bg-black dark:text-white"
    >
    {#each pageData?.sections as section (section._key)}
      <PageSection
        theme={pageData?.theme}
        background={section.background}
        >
        {#each section.foreground as foreground}
          {#if foreground._type === 'stage'}
            <Article content={foreground?.text?.title} />
          {/if}
          {#if foreground._type === 'textBlock'}
            <TextBlock {...foreground} class={section.class}/>
          {/if}
          {#if foreground._type === 'contentColumns'}
            <ContentColumns {...foreground} class={section.class}></ContentColumns>
          {/if}
          {#if foreground._type === 'gridTeaser'}
            <GridTeaser {...foreground} class={section.class}></GridTeaser>
          {/if}
          {#if foreground._type === 'logoWall'}
            <LogoWall {...foreground} class={section.class}></LogoWall>
          {/if}
          {#if foreground._type === 'contact'}
            <ContactTeaser {...foreground} class={section.class}></ContactTeaser>
          {/if}
        {/each}
      </PageSection>
    {/each}

  </div>

<script lang="ts">
	import { page } from '$app/state';
  import PageSection from '$lib/components/PageSection.svelte';
	import ContentColumns from '$lib/components/ContentColumns.svelte';
	import Article from '$lib/components/article/Article.svelte';
	import TextBlock from '$lib/components/TextBlock.svelte';
	import GridTeaser from '$lib/components/GridTeaser.svelte';
	import LogoWall from './LogoWall.svelte';
	import ContactTeaser from './ContactTeaser.svelte';

  const pageData = $derived(page.data.page?.data);
  const sections = $derived(pageData?.sections);
  
  $effect(() => {
    console.log('PageMain sections:', sections);
  });

  let gradientColors: string[] = $state([]);
  $effect(() => {
    const multiplier = Math.round(6 / (pageData?.theme?.primaryGradient?.colors.length || 1));
    let colors: string[] = [];
    for (let i = 0; i < multiplier; i++) {
      colors = [
        ...colors,
        ...pageData.theme?.primaryGradient?.colors
      ];
    }
    gradientColors = colors.map(color => {
      const c = color.replace('#', '');
      const r = parseInt(c.substring(0, 2), 16);
      const g = parseInt(c.substring(2, 4), 16);
      const b = parseInt(c.substring(4, 6), 16);
      return `${r}, ${g}, ${b}`;
    });
  });
</script>
