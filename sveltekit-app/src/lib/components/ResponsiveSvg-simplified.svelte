{#if svgContent}
  <div 
    class={`responsive-svg
      transition-all ease-in-out duration-500
      ${zoom ? 'group-hover:scale-104 group-hoverhover:duration-1200' : ''}
      ${svgContent ? 'opacity-100' : 'opacity-0'}
      ${className}
    `}
    role="img"
    aria-label={alt}
  >
    {@html svgContent}
  </div>
{/if}

<script module lang="ts">
interface Source {
  srcset: string;
  mediaQuery?: string;
}

export function isSvgUrl(url: string): boolean {
  if (!url) return false;
  return url.toLowerCase().includes('.svg') || url.toLowerCase().includes('image/svg');
}

export function shouldUseResponsiveSvg(
  src: string | undefined, 
  sources: Source[] = [], 
  portableText: any = null
): boolean {
  const imageUrl = src || portableText?.value?.asset?.src;
  if (imageUrl && isSvgUrl(imageUrl)) return true;
  return sources.some(source => source.srcset && isSvgUrl(source.srcset));
}
</script>

<script lang="ts">
let {
  src,
  sources = [],
  alt,
  loaded = $bindable(false),
  zoom = false,
  class: className = '',
  portableText = null,
}: {
  src?: string;
  sources?: Source[];
  alt?: string;
  loaded?: boolean;
  zoom?: boolean;
  class?: string;
  portableText?: any;
} = $props();

let svgContent = $state('');

// Get the primary SVG URL
function getSvgUrl(): string | null {
  const imageUrl = src || portableText?.value?.asset?.src;
  if (imageUrl && isSvgUrl(imageUrl)) return imageUrl;
  
  // Use first SVG source
  const svgSource = sources.find(s => s.srcset && isSvgUrl(s.srcset));
  return svgSource?.srcset || null;
}

// Load SVG when props change
$effect(() => {
  const url = getSvgUrl();
  
  if (!url) {
    svgContent = '';
    loaded = false;
    return;
  }

  // Fetch and load SVG
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
      return res.text();
    })
    .then(content => {
      svgContent = content;
      loaded = true;
    })
    .catch(err => {
      console.error('Failed to load SVG:', err);
      svgContent = '';
      loaded = false;
    });
});
</script>

<style>
  .responsive-svg {
    display: block;
    position: relative;
  }

  .responsive-svg :global(svg) {
    width: 100%;
    height: 100%;
    display: block;
    overflow: visible;
  }
</style>
