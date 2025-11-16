  <div
    class="container-xl min-h-screen
    ">
    {#each pageData?.sections as section (section._key)}
      {#if section._type === 'caseHero'}
        <CaseHero {...section}></CaseHero>
      {:else}
      <PageSection
        theme={{ ...pageData?.theme, ...section.theme }}
        container={section.foreground?.find((foreground: any) => foreground._type !== 'caseTeasers')}
        background={section.background}
        class={`section--${section.name} ${section.class || ''} ${section.name === 'intro-section' ? 'block' : ''}`}
        type={section.name.replace('-section', '')}
        >
        {#each section.foreground as foreground}
          {#if foreground._type === 'stage'}
            <Article content={foreground?.text?.title} />
          {/if}
          {#if foreground._type === 'textBlock'}
            <TextBlock
              {...foreground}
              class={foreground.class}
            />
          {/if}
          {#if foreground._type === 'contentColumns'}
            <ContentColumns {...foreground} class={foreground.class}></ContentColumns>
          {/if}
          {#if foreground._type === 'gridTeaser'}
            <GridTeaser {...foreground} class={foreground.class}></GridTeaser>
          {/if}
          {#if foreground._type === 'logoWall'}
            <LogoWall {...foreground} class={`${foreground.class}`}></LogoWall>
          {/if}
          {#if foreground._type === 'contact'}
            <ContactTeaser {...foreground} class={foreground.class}></ContactTeaser>
          {/if}
          {#if foreground._type === 'picture'}
            <Picture {...foreground} class={foreground.class}></Picture>
          {/if}
          {#if foreground._type === 'bulletList'}
            <BulletList {...foreground} class={foreground.class} />
          {/if}
          {#if foreground._type === 'carousel'}
          <div class="relative carousel-container">
            <Carousel
              items={foreground.items}
              let:carouselItem={item}
              class="not-prose relative left-1/2 w-dvw max-w-none -translate-x-1/2 lg:translate-x-0 lg:left-0"
              options={{
                  gap: '1rem',
                  perPage: 1,
                  padding: { left: '2rem', right: '2rem' },
                  focus: 0,
                  breakpoints: {
                    640: {
                      padding: { left: '2.5rem', right: '2.5rem' },
                    },
                    1024: {
                      padding: { left: 0, right: 0 },
                      ...(foreground.itemsPerPage
                      ? {
                          gap: '2rem',
                          fixedWidth: `calc((100vw - 5rem - ${foreground.itemsPerPage} * 2rem) / ${foreground.itemsPerPage})`,
                          focus: 0,
                        }
                      : {
                        perPage: 1.61
                      })
                    },
                    1280: {
                      perPage: foreground.itemsPerPage || 1.27
                    },
                    1440: {
                      ...(foreground.itemsPerPage
                        ? {
                          fixedWidth: `calc((1360px - 5rem - ${foreground.itemsPerPage} * 2rem) / ${foreground.itemsPerPage})`,
                        }
                        : { fixedWidth: 1064 })
                    },
                  },
              }}
              >
              {#snippet carouselItem(item: any)}
                <div class="carousel-item">
                  {#if item}
                    <Picture
                      {...item}
                      class="carousel-item__image mb-4 lg:mb-12 overflow-hidden object-cover w-full h-full"
                    />
                  {/if}
                </div>
              {/snippet}
            </Carousel>
          </div>
          {/if}
          {#if foreground._type === 'caseTeasers'}
            <div class="relative carousel-container">
              <Carousel
                items={foreground.items}
                let:carouselItem={item}
                options={{
                    breakpoints: {
                      640: {
                        gap: '2rem',
                        padding: { left: '2.5rem', right: '2.5rem' },
                      },
                      1024: {
                        padding: { left: 0, right: 0 },
                        perPage: 1.6,
                      },
                      1280: {
                        gap: '2rem',
                        perPage: 2.5,
                        padding: { left: 0, right: '20%' },
                      },
                      1440: {
                        fixedWidth: 1064 / 2,
                        padding: { left: 0, right: 0 },
                      }
                    },
                  // breakpoints: {
                  //   1024: {
                  //     // perPage: 2.3,
                  //     fixedWidth: 'calc((100% - 2rem) / 2)',
                  //   },
                  //   1240: {
                  //     // perPage: 3,
                  //     fixedWidth: 'calc((100% - 2rem) / 1.5)',
                  //     padding: { right: 'calc((100vw - 80px) / 2)' },
                  //   },
                  //   1400: {
                  //     // perPage: 2.3,
                  //     // fixedWidth: 'calc((100% - 2rem) / 3)',
                  //     // padding: { left: '10%', right: '10%' },
                  //     fixedWidth: 'calc((100% - 2rem) / 2)',
                  //     padding: { right: '32%' },
                  //   },
                  // },
              }}
  
                >
                {#snippet carouselItem(item: any)}
                  <div class="case-teaser">
                    {#if item.picture}
                      <Picture
                        {...item.picture}
                        class="case-teaser__image mb-4 xl:mb-8 2xl:mb-12"
                      />
                    {/if}
                    <div class="xl:px-4 2xl:px-12">
                      <h3 class="case-teaser__title text-lg lg:text-xl 2xl:text-3xl font-semibold mb-2 lg:mb-4 xl:mb-6">{item.headline}</h3>
                      {#if item.article}
                        <div class="text-block text-sm lg:text-base 2xl:text-2xl mb-6">
                          <Article content={item.article} />
                        </div>
                      {/if}
                      {#if item.href}
                        <Link
                          slug={item.href}
                          class="carousel-item__link
                            link flex items-center gap-4 text-sm lg:text-lg 2xl:text-xl uppercase"
                          >
                          <span class="link--text">{@html m.more()}</span>
                          <span>&rightarrow;</span>
                        </Link>
                      {/if}
  
                    </div>
                  </div>
                {/snippet}
              </Carousel>
            </div>
          {/if}
          {#if foreground._type === 'scrollTracker'}
            <ScrollTracker items={foreground.items} class={foreground.class} />
          {/if}
          {#if foreground._type === 'accordion'}
            <Accordion class={foreground.class}>
              {#each foreground.items as item, index}
                <AccordionItem
                  index={index + 1}
                  id="tokenomics-accordion-{index}"
                  expanded={false}
                  parent="tokenomics-accordion"
                  class=""
                  >
                  {#snippet title()}
                    <div class="accordion-item__title grid-cols-subgrid content-start items-center">
                      <!-- <p class="gradient-primary text-xl lg:text-4xl block">{index < 9 ? `0${index+1}` : index + 1}</p> -->
                      <div class="col-start-1 col-span-8 text-lg lg:text-4xl">{item.title}</div>
                    </div>
                  {/snippet}
                  {#snippet body()}
                    <div class="lg:grid lg:grid-cols-12">
                      <div class="lg:col-start-3 lg:col-span-8">
                        <div class="text-block text-base md:text-xl">
                          <Article content={item.article} />
                        </div>
                      </div>
                    </div>
                  {/snippet}
                </AccordionItem>
              {/each}

            </Accordion>
          {/if}
        {/each}
      </PageSection>
      {/if}

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
	import Carousel from './Carousel.svelte';
	import Picture from './Picture.svelte';
	import ScrollTracker from './ScrollTracker.svelte';
	import Accordion from './Accordion.svelte';
	import AccordionItem from './AccordionItem.svelte';
	import BulletList from './BulletList.svelte';
  import CaseHero from './CaseHero.svelte';
	import Link from './Link.svelte';
	import * as m from '$lib/paraglide/messages.js';

  import { browser } from '$app/environment';

  const pageData = $derived(page.data.page?.data);
  
  $effect(() => {
    console.log('PageMain pageData:', pageData);
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
