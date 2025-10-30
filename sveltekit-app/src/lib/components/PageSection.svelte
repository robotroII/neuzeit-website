<section
  class="page-section pb-16 lg:pb-24 {className}"
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
  <div class="page-section__inner grow-1">
    {#if background}
      <div class={loaded ? 'page-section__background' : ''}>
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
    <!-- {#if index === 0}
      <div class="page-section__shapes">
        <canvas id="gradient-canvas" style="width:100vw;height:100vh"></canvas>
        <GradientAnimation containerClassName="fixed inset-0" />
      </div>
    {/if} -->
    <div class="page-section__foreground max-w-none">
      <div
        class="page-section__canvas w-full lg:w-auto
          {theme?.class ? theme.class : ''}
          {container ? 'container-fluid' : ''}
          flex flex-col gap-y-8
          lg:grid lg:grid-cols-12 gap-4
        ">
        {@render children?.()}
      </div>
    </div>
  </div>
</section>


<script lang="ts">
  import Picture from './Picture.svelte';

  let {
    container = false,
    class: className = '',
    children = null,
    theme = null,
    background = null,
  } = $props();

  let loaded = $state(false);
</script>

<style lang="postcss">
  @reference 'tailwindcss';
  /* @plugin '@tailwindcss/forms';
  @plugin '@tailwindcss/typography'; */

  .page-section {
    --color-section-background: transparent;
    --section-background-image: none;
    background-color: var(--color-section-background);
    background-image: var(--section-background-image);
    background-repeat: no-repeat;
    /* background-size: 100%;
    background-position: top; */

    background-size: 500%;
    background-position: center;
    @media screen and (min-width: 768px) {
      background-size: 100%;
      background-position: top;
    }
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
  }
  .page-section__background {
    display: block;
    position: relative;
    z-index: 0;
    /* min-height: 100vh; */
    +  .page-section__foreground {
      position: absolute;
      inset: 0;
      z-index: 10;

      display: grid;
      place-content: center;
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
  }
  /* Default: all direct children span full width unless they have their own grid-column class */
  :global(.page-section__canvas > *:not([class*="col-"])) {
    grid-column: 1 / -1;
  }
</style>