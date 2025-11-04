<div class="case-hero 3xl:container relative mb-24 {className}">
  <div class="case-hero--background relative z-0 w-full h-full aspect-[1/1] md:aspect-[4/3] lg:aspect-[21/9]">
    <Image
      {...mainImage}
      spinner={false}
      class="object-cover w-full h-full"
    />
    <div class="svg-shape text-page-background
      absolute end-0 bottom-0 translate-y-[52%] translate-x-[20%] md:translate-x-[0] lg:translate-x-[-50%]
      max-w-[62%]
      ">
      <svg viewBox="0 0 612 612" class="block w-full h-full">
        <path d="M316.562 20.2598C316.562 143.196 430.454 290.559 592.861 290.56L612 290.56L612 322.874C609.114 322.874 606.197 322.874 603.248 322.874C431.81 322.874 321.031 467.776 321.03 600.892L321.03 612L282.631 612L282.631 578.537C282.631 511.967 259.419 451.024 220.213 403.187L221.181 402.234C170.266 350.535 98.7427 318.422 17.7178 318.422L1.39187e-05 318.422L1.26987e-05 290.512C116.25 290.442 288.434 212.51 293.227 -1.28173e-05L316.562 -1.38373e-05L316.562 20.2598Z" />
      </svg>
    </div>
  </div>
  <div
    class="case-hero__foreground container-fluid">
    <div class="case-hero__stage
      grid grid-cols-8 lg:grid-cols-12 lg:place-content-end
      ">
      <div
        class="case-hero__title
          col-span-6
          lg:col-span-5
          xl:col-start-2 xl:col-span-5
          relative
          -translate-y-[24%] md:-translate-y-[16%] lg:-translate-y-[32%] xl:-translate-y-[12rem]
        "
        >
        <div class="svg-shape text-primary">
          <svg viewBox="0 0 612 612" class="block w-full h-full">
            <path d="M0 0H612V306C612 474.999 474.999 612 306 612C137.001 612 0 474.999 0 306V0Z" />
          </svg>
        </div>
        <div class="case-hero__text absolute left-0 top-0 w-full h-full p-5 md:p-8 xl:p-12 {text.class}">
          <h1 class="teaser-block--headline text-base sm:text-xl md:text-3xl xl:text-5xl mb-2 md:mb-6 xl:mb-8">{text.headline}</h1>
          {#if text.subheadline}<h2 class="teaser-block--subheadline text-base mb-8">{text.subheadline}</h2>{/if}
          <Article content={text.article} class="text-xs/4 sm:text-sm md:text-xl lg:text-base xl:text-xl leading-[2]" />
        </div>
      </div>
      <div class="case-hero__keydata
        relative
        col-span-8
        lg:col-start-7 lg:col-span-6
        xl:col-start-8 xl:col-span-5
        "
        >
        <div class="case-hero__keydata lg:mt-24">
          <dl class="grid grid-cols-1 md:grid-cols-[auto_auto] gap-4 lg:gap-x-6 lg:gap-y-8">
            {#each keyData as item}
              <dt><span class="uppercase gradient-primary">{item.key}</span></dt>
              <dd class="flex flex-wrap gap-2">
                {#if item.values.length > 1}
                  {#each item.values as value}
                    <span class="
                      inline-block text-white bg-limed-spruce rounded-full
                      text-xs md:text-sm font-thin
                      py-1 px-3 md:py-2 md:px-5
                      whitespace-nowrap">{value}</span>
                  {/each}
                {:else}
                  {#each item.values as value}
                    <span>{value}</span>
                  {/each}
                {/if}
              </dd>
            {/each}
          </dl>
        </div> 
      </div>
    </div>
  </div>
</div>

<script lang="ts">
	import Article from "$lib/components/article/Article.svelte";
  import Image from "$lib/components/Image.svelte";

  let {
    mainImage,
    text,
    keyData,
    class: className = '',
  } = $props();  
</script>

<style lang="postcss">
  .svg-shape svg {
    fill: currentColor
  }
</style>