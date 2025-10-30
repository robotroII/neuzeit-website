<script module lang="ts">
interface Source {
  srcset: string;
  mediaQuery?: string;
}

// Function to check if URL is an SVG
export function isSvgUrl(url: string): boolean {
  if (!url) return false;
  // Simplified check: only look for .svg extension
  return url.toLowerCase().includes('.svg');
}

// Export function to check if this component should be used
export function shouldUseResponsiveSvg(src: string | undefined, sources: Source[] = [], portableText: any = null): boolean {
  const imageUrl = src || portableText?.value?.asset?.src;
  if (imageUrl && isSvgUrl(imageUrl)) return true;
  return sources.some(source => source.srcset && isSvgUrl(source.srcset));
}
</script>

<script lang="ts">
import { tick } from 'svelte';

interface Source {
  srcset: string;
  mediaQuery?: string;
}

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

// State for fetched SVG content
let svgContentMap = $state(new Map<string, string>());
let currentSvgContent = $state('');
let isComponentLoaded = $state(false);

// --- Utility Functions ---

// Function to fetch and inline SVG content
async function fetchSvgContent(url: string): Promise<string | null> {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.text();
    } else {
      console.error('Failed to load SVG - Response not OK:', response.status, response.statusText, url);
    }
  } catch (error) {
    console.error('Failed to load SVG:', error, url);
  }
  return null;
}

// Function to get the list of all SVG sources, including the main 'src'
function getAllSvgSources(): { url: string; mediaQuery: string }[] {
  const allSvgUrls: { url: string; mediaQuery: string }[] = [];
  const imageUrl = src || portableText?.value?.asset?.src;

  // 1. Check main src/portableText source (default/fallback)
  if (imageUrl && isSvgUrl(imageUrl)) {
    allSvgUrls.push({ url: imageUrl, mediaQuery: 'default' });
  }

  // 2. Check sources array
  sources.forEach(source => {
    if (source.srcset && isSvgUrl(source.srcset)) {
      allSvgUrls.push({
        url: source.srcset,
        mediaQuery: source.mediaQuery || 'default',
      });
    }
  });

  // Filter out duplicates, prioritizing the sources array
  const seenUrls = new Set<string>();
  return allSvgUrls.reverse().filter(item => {
    if (seenUrls.has(item.url)) {
      return false;
    }
    seenUrls.add(item.url);
    return true;
  }).reverse();
}

// --- Responsive Logic ---

// Find the best matching SVG source based on media queries
function getBestMatchingSvgContent(): string {
  if (!isComponentLoaded) return '';

  // 1. Get all sources in order (sources array first, then src)
  const allSources = getAllSvgSources();

  // 2. Find the first source with a matching media query and fetched content
  for (const { url, mediaQuery } of allSources) {
    const content = svgContentMap.get(url);

    if (content) {
      // 'default' or no mediaQuery means it's always a match, but we only check it if it's the only one
      if (mediaQuery === 'default' || !mediaQuery) {
        // If we have content for the default, we use it as the ultimate fallback, but keep looking for a specific match
        // The logic below ensures specific matches are found first.
      } else if (window.matchMedia(mediaQuery).matches) {
        // Found a specific match, return its content
        return content;
      }
    }
  }

  // 3. Fallback to the 'default' source content (main src)
  const defaultSource = allSources.find(s => s.mediaQuery === 'default');
  if (defaultSource) {
    return svgContentMap.get(defaultSource.url) || '';
  }

  return '';
}

// --- Effects and Lifecycle ---

// 1. Effect to load all SVGs and initialize state
$effect(() => {
  // Reset state on prop change
  svgContentMap = new Map();
  currentSvgContent = '';
  loaded = false;
  isComponentLoaded = false;

  const allSources = getAllSvgSources();
  if (allSources.length === 0) return;

  // Use a temporary map to store fetched content
  const tempMap = new Map<string, string>();
  let fetchPromises: Promise<void>[] = [];

  // Fetch all unique SVG URLs
  const uniqueUrls = new Set(allSources.map(s => s.url));
  
  uniqueUrls.forEach(url => {
    fetchPromises.push(
      fetchSvgContent(url).then(content => {
        if (content) {
          tempMap.set(url, content);
        }
      })
    );
  });

  Promise.all(fetchPromises).then(() => {
    // Update state once all fetches are complete
    svgContentMap = tempMap;
    isComponentLoaded = true;
    // Initial update of the current SVG content
    currentSvgContent = getBestMatchingSvgContent();
    loaded = !!currentSvgContent;
    console.log('SVGs loaded', loaded);
    tick(); // Ensure DOM is updated
  });
});


// 2. Effect to handle responsive switching based on media queries
$effect(() => {
  if (!isComponentLoaded) return;

  const allSources = getAllSvgSources();
  const mediaQueryListeners: { mql: MediaQueryList, handler: () => void }[] = [];

  const updateSvg = () => {
    currentSvgContent = getBestMatchingSvgContent();
  };

  // Set up listeners for all unique media queries
  const uniqueMediaQueries = new Set(allSources.map(s => s.mediaQuery).filter(q => q && q !== 'default'));

  uniqueMediaQueries.forEach(mediaQuery => {
    const mql = window.matchMedia(mediaQuery!);
    const handler = () => updateSvg();
    mql.addEventListener('change', handler);
    mediaQueryListeners.push({ mql, handler });
  });

  // Initial check (already done in the loading effect, but good for robustness)
  updateSvg();

  // Cleanup function
  return () => {
    mediaQueryListeners.forEach(({ mql, handler }) => {
      mql.removeEventListener('change', handler);
    });
  };
});
</script>

{#if currentSvgContent}
  <div
    class={`responsive-svg
      transition-all ease-in-out duration-500
      ${zoom ? 'group-hover:scale-104 group-hover:duration-1200' : ''}
      ${loaded ? 'opacity-100' : 'opacity-0'}
      ${className}
    `}
    role="img"
    aria-label={alt}
  >
    {@html currentSvgContent}
  </div>
{:else}
  <!-- The original component had a containerElement bind, which is now removed as ResizeObserver is gone. -->
  <!-- It also had a fallback div, which we keep. -->
  <div class="responsive-svg-fallback">
    <!-- Display a message only if we have tried to load but failed, or if no source was provided -->
    {#if getAllSvgSources().length === 0}
      No SVG source provided.
    {:else if isComponentLoaded}
      Failed to load SVG content.
    <!-- {:else}
      Loading SVG... -->
    {/if}
  </div>
{/if}

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
