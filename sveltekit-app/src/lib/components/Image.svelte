<div class="image relative inline-flex justify-center items-center {className}">
  {#key loaded}
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
    {#if src?.includes('.svg')}
      <div class="w-full">
        {@html svg}
      </div>
    {:else}
      <img
        src={src || portableText?.value?.asset?.src}
        onload={(() => loaded = true)}
        alt={alt}
        class={`
          transition-all ease-in-out duration-500
          ${zoom ? 'group-hover:scale-104 group-hoverhover:duration-1200' : ''}
          ${loaded ? 'opacity-100' : 'opacity-0'}
          ${portableText ? 'inline mb-6' : 'w-full h-full object-cover'}
        `}
      />
    {/if}
  {/key}
</div>

<script lang="ts">
	import { onMount } from "svelte";

let {
  src,
  alt,
  loaded = false,
  spinner = true,
  zoom = false,
  class: className = '',

  portableText = null,
} = $props();

let svg = $state();

onMount(async () => {
  if (src?.includes('.svg')) {
    const response = await fetch(src).then(res => res.text());
    // const text = await response.text();
    svg = response;
    loaded = true;
  }
});
</script> 

<style lang="postcss">
  .image svg {
    stroke: currentColor;
    fill: currentColor;
  }
  .image > .w-full :global(svg) {
    width: 100%;
    height: auto;
  }
</style>