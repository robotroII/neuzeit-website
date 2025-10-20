<div
  class="teaser-block {className}
    grid lg:grid-cols-[1fr_1fr] lg:grid-rows-[auto_auto_auto_auto] gap-20 gap-y-4
    lg:items-{align ? align : 'center'}
    mx-auto
  "
  style={
    theme && theme.primaryGradient && theme.primaryGradient.colors.length
      ? `--gradient-primary: linear-gradient(${theme.primaryGradient.angle ? `${theme.primaryGradient.angle}deg` : ''} in hsl,  ${theme.primaryGradient.colors?.join(',')})`
      : ''
  }
  >
  <div class="teaser-block__head
    row-start-1 row-end-2
    {reverse ? 'lg:col-start-2 lg:col-end-3' : 'lg:col-start-1 lg:col-end-2'}
    mb-4 lg:mb-0">
    {#if text.headline}
      <h2 class="teaser-block__headline gradient-primary text-lg uppercase font-normal mb-10">{text.headline}</h2>
    {/if}
    {#if text.subheadline}
      <h3 class="teaser-block__subheadline text-5xl mb-8">{text.subheadline}</h3>
    {/if}
  </div>
  <div class="teaser-block__content
    lg:row-start-2 lg:row-end-3
    {reverse ? 'lg:col-start-2 lg:col-end-3' : 'lg:col-start-1 lg:col-end-2'}
    ">
    <Article content={text.article} class="text-2xl" />
  </div>
  {#if href}
    <a href="/{href}" class="teaser-block__link
      lg:row-start-3 lg:row-end-4
      {reverse ? 'lg:col-start-2 lg:col-end-3' : 'lg:col-start-1 lg:col-end-2'}
      link flex gap-4 mt-4 gradient-primary text-sm uppercase">
      <span class="link--text">{@html m.more()}</span>
    </a>
  {/if}
  <div class="teaser-block__context
    row-start-2 row-end-3 lg:row-auto lg:row-span-4
    {reverse ? 'lg:col-start-1 lg:col-end-2' : 'lg:col-start-2 lg:col-end-3'}
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
  .teaser-block__link::after {
    content: "→";
  }
  .teaser-block-head::after {
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