{#if inlineSvg && shouldUseResponsiveSvg(src, sources, portableText)}
  <!-- Responsive SVG component -->
  <ResponsiveSvg 
    {src}
    {sources}
    {alt}
    bind:loaded
    {zoom}
    class={portableText ? 'inline mb-2' : `w-full h-full ${className}`}
    {portableText}
  />
{:else}
  <!-- Regular picture element for non-SVG images -->
  <picture class="picture block relative {className}">
    {#if spinner && ! loaded}
      <svg class="block w-full h-full max-w-[25vmin] max-h-[25vmin]" viewBox="0 0 100 100">
        <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
          <animateTransform 
            attributeName="transform"
            attributeType="XML" 
            type="rotate"
            dur="1s" 
            from="0 50 50"
            to="360 50 50" 
            repeatCount="indefinite"
          />
        </path>
      </svg>
    {/if}

    {#each sources as source}
      <source
        srcset={source.srcset}
        media={source.mediaQuery}
      />
    {/each}

    <source
      srcset={src || portableText?.value?.asset?.src}
    />

    <img
      src={src || portableText?.value?.asset?.src}
      onload={(() => loaded = true)}
      alt={alt}
      class={`picture__image
        transition-all ease-in-out duration-500
        ${zoom ? 'group-hover:scale-104 group-hoverhover:duration-1200' : ''}
        ${loaded ? 'opacity-100' : 'opacity-0'}
        ${portableText ? 'inline mb-2' : 'w-full h-full object-cover'}
      `}
    />
  </picture>
{/if}

<script lang="ts">
import ResponsiveSvg, { shouldUseResponsiveSvg } from './ResponsiveSvg.svelte';
import { onMount } from "svelte";

interface Source {
  srcset: string;
  mediaQuery?: string;
}

let {
  src,
  sources,
  alt,
  loaded = false,
  spinner = true,
  zoom = false,
  class: className = '',
  inlineSvg = false,
  portableText = null,
}: {
  src?: string;
  sources?: Source[];
  alt?: string;
  loaded?: boolean;
  spinner?: boolean;
  zoom?: boolean;
  class?: string;
  inlineSvg?: boolean;
  portableText?: any;
} = $props();

onMount(async () => {
  console.log('Picture component mounted with props:', {
    src,
    sources,
    alt,
    loaded,
    spinner,
    zoom,
    className,
    inlineSvg,
    portableText,
  });
})
</script>


<style>
  .picture {
    display: block;
    position: relative;
  }

  .picture__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>