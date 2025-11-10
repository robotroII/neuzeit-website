<div
  class="grid-teaser
    {items?.length
      ? 'grid md:grid-cols-10 md:grid-rows-[auto_auto_auto_auto_auto_auto] md:items-center md:-content-center gap-y-8'
      : 'flex flex-col items-start gap-y-8'}
    {className}
  "
  style={
    theme && theme.primaryGradient && theme.primaryGradient.colors.length
      ? `--gradient-primary: linear-gradient(${theme.primaryGradient.angle ? `${theme.primaryGradient.angle}deg` : ''} in hsl,  ${theme.primaryGradient.colors?.join(',')})`
      : ''
  }
  >

  <div class="grid-teaser__head
    row-start-1 row-end-2 md:row-start-2 md:row-end-3
    {reverse ? 'md:col-start-7 md:col-end-11' : 'md:col-start-1 md:col-end-5'}
    ">
    {#if text.headline}
      <h2 class="grid-teaser__headline gradient-primary text-lg uppercase font-normal">{text.headline}</h2>
    {/if}
  </div>

  <div class="grid-teaser__subhead
    row-start-4 row-end-5 md:row-start-3 md:row-end-4
    {reverse ? 'md:col-start-7 md:col-end-11' : 'md:col-start-1 md:col-end-5'}
    ">
    {#if text.subheadline}
      <svelte:element
        this={tag}
        class="grid-teaser__subheadline text-4xl xl:text-5xl leading-[1.333] md:leading-[1.25]"
      >{text.subheadline}</svelte:element>
    {/if}
  </div>

  <div class="grid-teaser__content
    row-start-5 row-end-6 md:row-start-4 md:row-end-5
    {reverse ? 'md:col-start-7 md:col-end-11' : 'md:col-start-1 md:col-end-5'}
    text-lg leading-[1.78] 2xl:text-2xl
    ">
    <Article content={text.article} />
  </div>
  {#if href}
    <Link
      slug={href}
      class="grid-teaser__link
        row-start-6 row-end-7 md:row-start-5 md:row-end-6
        {reverse ? 'md:col-start-7 md:col-end-11' : 'md:col-start-1 md:col-end-5'}
        link flex items-center gap-4 gradient-primary text-sm uppercase"
      >
      <span class="link--text">{@html m.more()}</span>
      <span>&rightarrow;</span>
    </Link>
  {/if}
  {#if items && items.length}
    <div class="grid-teaser__context
      row-start-3 row-end-4 md:row-auto md:row-span-6
      {reverse ? 'md:col-start-1 md:col-end-5' : 'md:col-start-7 md:col-end-11'}
      ">
      {#each items as item}
        {#if item._type === 'image'}
        <div class="w-full h-full flex flex-col justify-center">
          <Image
            src={item.src}
            alt={item.alt || ''}
            class="w-full h-full {item.class ? item.class : ""}"
          />
        </div>
        {/if}
        {#if item._type === 'picture'}
          <div class="w-full h-full flex flex-col justify-center">
            <Picture
              {...item}
              alt={item.alt || ''}
            />
          </div>
        {/if}
        <!-- {#if item._type === 'linkList'}
          <LinkList items={item.items} />
        {/if} -->
      {/each}
    </div>
  {/if}
</div>

{#if theme && theme.primaryGradient}
  <div class="absolute w-0 h-0 invisible -z-1">
    <svg>
      <defs>
        <linearGradient
          id={`primary-gradient-def-${slug || 'default'}`}
          x1="29.4331"
          y1="15.8065"
          x2="0"
          y2="15.8065"
          gradientUnits="userSpaceOnUse"
          gradientTransform={theme.primaryGradient.angle && `rotate(${theme.primaryGradient.angle})`}
        >
          {#if theme.primaryGradient}
            {#each theme.primaryGradient.colors as color, index}
              <stop offset={index / (theme.primaryGradient.colors.length - 1)} stop-color={color} />
            {/each}
          {/if}
        </linearGradient>
      </defs>
    </svg>
  </div>
{/if}


<script lang="ts">
	import Article from '$lib/components/article/Article.svelte';
	import Image from '$lib/components/Image.svelte';
  // import LinkList from '$lib/components/LinkList.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import Link from './Link.svelte';
	import Picture from './Picture.svelte';
  import { onMount } from "svelte";
  let { 
    text,
    slug = '',
    href = '',
    items,
    theme,
    reverse,
    align,
    class: className,
  } = $props();

  let tag = $state(text.headline ? 'h3' : 'h2');

  // onMount(() => {
  //   console.log('GridTeaser component mounted with props:', {
  //     text,
  //     slug,
  //     href,
  //     items,
  //     theme,
  //     reverse,
  //     align,
  //     className,
  //   });
  // })
</script>

<style lang="postcss">
  .grid-teaser__link::after {
    content: "→";
  }
  .grid-teaser-head::after {
    content: "";
    display: block;
    width: 10rem;
    height: 0;
    background-color: transparent;
    border-width: 0 0 .0125rem 0;
    border-image: var(--gradient-primary) 1;
    border-style: solid;
  }
</style>