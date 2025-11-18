<section
  bind:this={sectionRef}
  class="page-section {className}"
  class:animate-in={isVisible}
  class:tw-dark-mode={theme?.colorMode === 'dark'}
  class:tw-light-mode={theme?.colorMode === 'light'}
  style="
    {theme?.backgroundColor && !theme.extendBackground
      ? `--color-section-background: ${theme.backgroundColor}`
      : ''};
    {theme?.backgroundImage && !theme.extendBackground
      ? `--section-background-image: url(${theme.backgroundImage})`
      : ''}
    {
      theme?.primaryGradient && theme?.primaryGradient?.colors.length
        ? `--gradient-primary: linear-gradient(${theme.primaryGradient.angle ? `${theme.primaryGradient.angle}deg` : ''} in hsl,  ${theme.primaryGradient.colors?.join(',')})`
        : ''
    };
  ">
  <!-- <div class="page-section__inner {container ? 'container-fluid' : ''}" data-aos="fade-up"> -->
  <div class="page-section__inner grow-1 h-full">
    {#if background?.shape}
      {#if background?.shape === 'topLeft'}
        <div 
          class="page-section__background inset-0 place-content-stretch">
          <div
            class="bg-shape container-fluid-xl inset-0 w-full h-full"
            style="--shape-bg-color: {background?.shapeColor || '#fff'};"
            >
            <div class="flex flex-col h-full">
              <div class="flex  w-full">
                <div
                  class="quarter-circle-tl shape-bg aspect-[1/1] w-4/5 lg:w-3/5 xl:w-2/5"></div>
                <div class="shape-bg flex-1 relative before:content-[''] before:block before:w-[2px] before:h-full before:absolute before:left-[-1px] before:top-0"></div>
              </div>
              <div class="shape-bg relative w-full flex-1 before:content-[''] before:block before:w-full before:h-[2px] before:absolute before:top-[-1px] before:left-0"></div>
            </div>
          </div>
        </div>
      {/if}
      {#if background?.shape === 'topRightBottomLeft'}
        <div 
          class="page-section__background inset-0 place-content-stretch">
          <div
            class="bg-shape container-fluid-xl inset-0 w-full h-full"
            style="--shape-bg-color: {background?.shapeColor || '#fff'};"
            >
            <div class="flex flex-col h-full">
              <div class="flex  w-full">
                <div class="shape-bg flex-1"></div>
                <div class="quarter-circle-tr shape-bg aspect-[1/1] w-2/5 relative before:content-[''] before:block before:w-[2px] before:h-full before:absolute before:left-[-1px] before:top-0"></div>
              </div>
              <div class="shape-bg w-full flex-1 relative before:content-[''] before:block before:w-full before:h-[2px] before:absolute before:top-[-1px] before:left-0"></div>
              <div class="flex w-full relative before:content-[''] before:block before:w-full before:h-[2px] before:absolute before:top-[-1px] before:left-0 before-shape-bg">
                <div class="quarter-circle-bl shape-bg aspect-[1/1] w-2/5"></div>
                <div class="shape-bg flex-1 relative before:content-[''] before:block before:w-[2px] before:h-full before:absolute before:left-[-1px] before:top-0"></div>
              </div>
            </div>
          </div>
        </div>
      {/if}
    {:else}
      {#if background}
        <div 
          class="{background.class} {loaded ? 'page-section__background' : ''}">
          <div class="container-fluid-xl">
            <Picture
              {...background}
              alt=""
              inlineSvg={true}
              bind:loaded
            />
          </div>
        </div>
      {/if}
    {/if}
    <div 
      class="page-section__foreground max-w-none">
      <div
        bind:this={canvasRef}
        class="page-section__canvas w-full lg:w-auto
          {theme?.class ? theme.class : ''}
          {container ? 'container-fluid' : ''}
          flex flex-col
          md:grid md:grid-cols-12
        ">
        {@render children?.()}
      </div>
    </div>
  </div>
</section>


<script lang="ts">
	import { onMount } from 'svelte';
  import Picture from './Picture.svelte';

  let {
    container = false,
    class: className = '',
    children = null,
    theme = null,
    background = null,
    type = '',
  } = $props();

  let loaded = $state(false);
  let isVisible = $state(false);
  let sectionRef: HTMLElement;
  let canvasRef: HTMLElement | undefined;

  onMount(() => {
    // Observer for the section itself
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observer for individual child elements
    const childObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animate class to trigger animation
            entry.target.classList.add('animate-child');
            // Stop observing after animation triggers
            childObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
      }
    );

    if (sectionRef) {
      sectionObserver.observe(sectionRef);
    }

    // Observe all direct children of the canvas
    if (canvasRef) {
      const setupChildObservers = () => {
        const children = canvasRef?.children;
        if (children) {
          Array.from(children).forEach((child) => {
            childObserver.observe(child);
          });
        }
      };

      // Set up observers after a small delay to ensure DOM is ready
      setTimeout(setupChildObservers, 100);
    }

    return () => {
      sectionObserver.disconnect();
      childObserver.disconnect();
    };
  });
</script>

<style lang="postcss">
  @reference 'tailwindcss';
  /* @plugin '@tailwindcss/forms';
  @plugin '@tailwindcss/typography'; */

  @layer base {
    .page-section {
      --color-section-background: transparent;
      /* --section-background-image: none; */
      background-color: var(--color-section-background);
      /* background-image: var(--section-background-image);
      background-repeat: no-repeat; */
      /* background-size: 100%;
      background-position: top; */
  
      /* background-size: 500%;
      background-position: center;
      @media screen and (min-width: 768px) {
        background-size: 100%;
        background-position: top;
      } */
    }
    .quarter-circle-tl {
      /* border-top-left-radius: 50%; */
	    clip-path: circle(100% at 100% 100%);
    }
    .quarter-circle-tr {
      /* border-top-right-radius: 50%; */
	    clip-path: circle(100% at 0 100%);
    }
    .quarter-circle-bl {
      /* border-bottom-left-radius: 50%; */
	    clip-path: circle(100% at 100% 0);
    }
    .page-section__inner {
      position: relative;
      --color-section-inner-background: transparent;
      --section-inner-background-image: none;
      background-color: var(--color-section-inner-background);
      background-image: var(--section-inner-background-image);
      background-size: 100%;
      background-position: top;
      background-repeat: no-repeat;
    }
  
    .page-section__foreground {
      position: relative;
      z-index: 10;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
    .page-section__background {
      display: block;
      position: absolute;
      inset: 0;
      z-index: 0;
      display: grid;
      place-content: center;
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
      > * {
        grid-column: 1 / -1;
      }
      + .page-section__foreground {
        z-index: 10;
      }
    }
    
    /* Child elements animation */
    .page-section__canvas > :global(*) {
      opacity: 0;
      transform: translateY(4rem);
      transition: opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                  transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    /* Animate individual children when they get the animate-child class */
    .page-section__canvas > :global(*.animate-child) {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Default: all direct children span full width unless they have their own grid-column class */
    /* :global(.page-section__canvas > *:not([class*="col-"])) {
      grid-column: 1 / -1;
    } */
  }
  .bg-shape .shape-bg {
    background-color: var(--shape-bg-color);
    &::before {
      background-color: var(--shape-bg-color);
    }
  }
  .before-shape-bg::before {
    background-color: var(--shape-bg-color);
  }
</style>