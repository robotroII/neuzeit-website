{#if inlineSvg && isSvg && svgContent}
  <!-- Inline SVG content -->
  <div 
    class={`picture__svg
      transition-all ease-in-out duration-500
      ${zoom ? 'group-hover:scale-104 group-hoverhover:duration-1200' : ''}
      ${loaded ? 'opacity-100' : 'opacity-0'}
      ${portableText ? 'inline mb-2' : 'w-full h-full'}
      ${className}
    `}
  >
    {@html svgContent}
  </div>
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
} = $props();

let svgContent = $state('');
let isSvg = $state(false);

// Function to check if URL is an SVG
function isSvgUrl(url: string): boolean {
  console.log('isSvgUrl', url, url.toLowerCase().includes('.svg'));
  if (!url) return false;
  return url.toLowerCase().includes('.svg') || url.toLowerCase().includes('image/svg');
}

// Function to fetch and inline SVG content
async function loadSvgContent(url: string) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const content = await response.text();
      svgContent = content;
      loaded = true;
    } else {
      console.error('Failed to load SVG - Response not OK:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Failed to load SVG:', error);
    // Fallback to regular img tag
    isSvg = false;
  }
}

// Reactive effect to handle SVG loading
$effect(() => {
  const imageUrl = src || portableText?.value?.asset?.src;
  if (imageUrl && isSvgUrl(imageUrl)) {
    console.log('Picture effect', imageUrl, isSvgUrl(imageUrl));
    isSvg = true;
    loadSvgContent(imageUrl);
  } else {
    console.log('fhjjcchgjf');
    isSvg = false;
  }
});
</script>


<style>
  .image svg {
    stroke: currentColor;
    fill: currentColor;
  }

  .picture__svg {
    display: block;
    position: relative;
  }

  .picture__svg :global(svg) {
    width: 100%;
    height: 100%;
    display: block;
    overflow: visible;
  }
</style>