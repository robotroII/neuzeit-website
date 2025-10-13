<article class="article {className}">
  {#if content && content.length}
    <PortableText
      value={content}
      onMissingComponent={false}
      components={{
        ...defaults,
        ...components
      }}
    />
  {/if}
</article>

<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import Image from '$lib/Image.svelte';
  import Highlight from '$lib/Highlight.svelte';
	import ArticleAlignCenter from '$lib/ArticleAlignCenter.svelte';
	import ArticleAlignStart from '$lib/ArticleAlignStart.svelte';
	import ArticleAlignEnd from '$lib/ArticleAlignEnd.svelte';

  let {
    content = null,
    components = {},
    class: className = '',
  } = $props();

  const defaults = {
    block: {
      // h1: CustomHeading,
      // h2: CustomHeading,
      // h3: CustomHeading,
      // h4: CustomHeading,
      // h5: CustomHeading,
      // normal: TextRte,
    },
    types: {
      image: Image
    },
    marks: {
      highlight: Highlight,
      left: ArticleAlignStart,
      center: ArticleAlignCenter,
      right: ArticleAlignEnd,
    }
  };
</script>

