<script module lang="ts">
interface Source {
  srcset: string;
  mediaQuery?: string;
}

// Function to check if URL is an SVG
export function isSvgUrl(url: string): boolean {
  if (!url) return false;
  return url.toLowerCase().includes('.svg') || url.toLowerCase().includes('image/svg');
}

// Export function to check if this component should be used
export function shouldUseResponsiveSvg(src: string | undefined, sources: Source[] = [], portableText: any = null): boolean {
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

let svgSources = $state(new Map<string, { content: string; url: string }>());
let currentSvgContent = $state('');
let containerElement: HTMLDivElement | null = $state(null);

// Function to fetch and inline SVG content
async function loadSvgContent(url: string, mediaQuery: string = 'default') {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const content = await response.text();
      svgSources.set(mediaQuery, { content, url });
      console.log(`SVG loaded for ${mediaQuery}:`, url);
      return content;
    } else {
      console.error('Failed to load SVG - Response not OK:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Failed to load SVG:', error);
  }
  return null;
}

// Function to evaluate media query
function matchesMediaQuery(mediaQuery: string): boolean {
  if (!mediaQuery || mediaQuery === 'default') return true;
  return window.matchMedia(mediaQuery).matches;
}

// Function to calculate media query specificity score
function getMediaQuerySpecificity(mediaQuery: string): number {
  if (!mediaQuery || mediaQuery === 'default') return 0;
  
  let score = 0;
  const query = mediaQuery.toLowerCase();
  
  // Higher scores for more specific queries
  if (query.includes('min-width')) score += 100;
  if (query.includes('max-width')) score += 100;
  if (query.includes('min-height')) score += 50;
  if (query.includes('max-height')) score += 50;
  if (query.includes('orientation')) score += 30;
  if (query.includes('hover')) score += 20;
  if (query.includes('pointer')) score += 20;
  if (query.includes('resolution')) score += 10;
  
  // Extract pixel values to prioritize smaller breakpoints over larger ones
  const widthMatch = query.match(/(?:min-width|max-width):\s*(\d+)px/);
  if (widthMatch) {
    const width = parseInt(widthMatch[1]);
    // For min-width: higher values = more specific
    // For max-width: lower values = more specific
    if (query.includes('min-width')) {
      score += Math.floor(width / 10); // Higher min-width = more specific
    } else if (query.includes('max-width')) {
      score += Math.floor((2000 - width) / 10); // Lower max-width = more specific
    }
  }
  
  return score;
}

// Function to find the best matching SVG source
function getBestMatchingSvg(): string {
  // First, collect all matching media queries with their specificity scores
  const matchingQueries = [];

  for (const [mediaQuery, svgData] of svgSources.entries()) {
    if (matchesMediaQuery(mediaQuery)) {
      const specificity = getMediaQuerySpecificity(mediaQuery);
      matchingQueries.push({ 
        mediaQuery, 
        content: svgData.content, 
        specificity 
      });
    }
  }

  // Sort by specificity (highest first), then by order for equal specificity
  matchingQueries.sort((a, b) => {
    if (b.specificity !== a.specificity) {
      return b.specificity - a.specificity;
    }
    // If equal specificity, maintain insertion order (sources order)
    return 0;
  });

  // Debug logging
  if (matchingQueries.length > 1) {
    console.log('Multiple matching queries found:', matchingQueries.map(q => ({
      query: q.mediaQuery,
      specificity: q.specificity
    })));
    console.log('Selected:', matchingQueries[0].mediaQuery, 'with specificity:', matchingQueries[0].specificity);
  }

  // Return the most specific match, or fallback
  if (matchingQueries.length > 0) {
    return matchingQueries[0].content;
  }
  
  return svgSources.values().next().value?.content || '';
}

// Update current SVG based on viewport
function updateCurrentSvg() {
  const bestMatch = getBestMatchingSvg();
  if (bestMatch !== currentSvgContent) {
    currentSvgContent = bestMatch;
  }
}

// Check if any sources contain SVGs
function hasSvgSources(): boolean {
  const imageUrl = src || portableText?.value?.asset?.src;
  if (imageUrl && isSvgUrl(imageUrl)) return true;
  
  return sources.some(source => source.srcset && isSvgUrl(source.srcset));
}

// Reactive effect to handle SVG loading
$effect(() => {
  if (!hasSvgSources()) {
    svgSources.clear();
    currentSvgContent = '';
    return;
  }

  const imageUrl = src || portableText?.value?.asset?.src;
  const allSvgUrls = [];
  
  // Check main src
  if (imageUrl && isSvgUrl(imageUrl)) {
    allSvgUrls.push({ url: imageUrl, mediaQuery: 'default' });
  }
  
  // Check sources for SVGs
  sources.forEach(source => {
    if (source.srcset && isSvgUrl(source.srcset)) {
      allSvgUrls.push({ 
        url: source.srcset, 
        mediaQuery: source.mediaQuery || 'default' 
      });
    }
  });
  
  if (allSvgUrls.length > 0) {
    svgSources.clear();
    
    // Load all SVG sources
    Promise.all(
      allSvgUrls.map(({ url, mediaQuery }) => loadSvgContent(url, mediaQuery))
    ).then(() => {
      updateCurrentSvg();
      loaded = true;
    });
  }
});

// Set up resize observer for responsive SVG switching
$effect(() => {
  if (!currentSvgContent || !containerElement) return;
  
  let resizeObserver: ResizeObserver;
  let mediaQueryLists: MediaQueryList[] = [];
  
  // Create media query listeners
  const setupMediaQueryListeners = () => {
    // Clean up existing listeners
    mediaQueryLists.forEach(mql => {
      mql.removeEventListener('change', updateCurrentSvg);
    });
    mediaQueryLists = [];
    
    // Set up new listeners for each media query
    svgSources.forEach((_, mediaQuery) => {
      if (mediaQuery !== 'default') {
        const mql = window.matchMedia(mediaQuery);
        mql.addEventListener('change', updateCurrentSvg);
        mediaQueryLists.push(mql);
      }
    });
  };
  
  // Set up resize observer
  resizeObserver = new ResizeObserver(() => {
    updateCurrentSvg();
  });
  
  if (containerElement) {
    resizeObserver.observe(containerElement);
    setupMediaQueryListeners();
  }
  
  // Cleanup
  return () => {
    if (resizeObserver) {
      resizeObserver.disconnect();
    }
    mediaQueryLists.forEach(mql => {
      mql.removeEventListener('change', updateCurrentSvg);
    });
  };
});
</script>

{#if currentSvgContent}
  <div 
    bind:this={containerElement}
    class={`responsive-svg
      transition-all ease-in-out duration-500
      ${zoom ? 'group-hover:scale-104 group-hoverhover:duration-1200' : ''}
      ${loaded ? 'opacity-100' : 'opacity-0'}
      ${className}
    `}
    role="img"
    aria-label={alt}
  >
    {@html currentSvgContent}
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