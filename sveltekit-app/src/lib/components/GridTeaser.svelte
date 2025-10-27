<div
  class="grid-teaser
    {items?.length
      ? 'grid md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto_auto_auto] gap-20 gap-y-8'
      : 'flex flex-col gap-y-8'}
    md:items-{align ? align : 'center'}
    {className}
  "
  style={
    theme && theme.primaryGradient && theme.primaryGradient.colors.length
      ? `--gradient-primary: linear-gradient(${theme.primaryGradient.angle ? `${theme.primaryGradient.angle}deg` : ''} in hsl,  ${theme.primaryGradient.colors?.join(',')})`
      : ''
  }
  >
  <div class="grid-teaser__head
    row-start-1 row-end-2
    {reverse ? 'md:col-start-2 md:col-end-3' : 'md:col-start-1 md:col-end-2'}
    ">
    {#if text.headline}
      <h2 class="grid-teaser__headline gradient-primary text-lg uppercase font-normal">{text.headline}</h2>
    {/if}
    {#if text.subheadline}
      <h3 class="grid-teaser__subheadline text-5xl">{text.subheadline}</h3>
    {/if}
  </div>
  <div class="grid-teaser__content
    md:row-start-2 md:row-end-3
    {reverse ? 'md:col-start-2 md:col-end-3' : 'md:col-start-1 md:col-end-2'}
    ">
    <Article content={text.article} />
  </div>
  {#if href}
    <a href="/{href}" class="grid-teaser__link
      md:row-start-3 md:row-end-4
      {reverse ? 'md:col-start-2 md:col-end-3' : 'md:col-start-1 md:col-end-2'}
      link flex gap-4 gradient-primary text-sm uppercase">
      <span class="link--text">{@html m.more()}</span>
    </a>
  {/if}
  {#if items && items.length}
    <div class="grid-teaser__context
      row-start-2 row-end-3 md:row-auto md:row-span-4
      {reverse ? 'md:col-start-1 md:col-end-2' : 'md:col-start-2 md:col-end-3'}
      ">
      {#each items as item}
        {#if item._type === 'image'}
          <Image
            src={item.src}
            alt={item.alt || ''}
            class={item.class ? item.class : "w-full h-full object-cover"}
          />
        {/if}
        {#if item._type === 'picture'}
          <Picture
            {...item}
            alt={item.alt || ''}
            class={item.class ? item.class : "w-full h-full object-cover"}
          />
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

  onMount(() => {
    console.log('GridTeaser component mounted with props:', {
      text,
      slug,
      href,
      items,
      theme,
      reverse,
      align,
      className,
    });
  })
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