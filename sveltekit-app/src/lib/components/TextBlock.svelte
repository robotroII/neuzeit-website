<div class="text-block mx-auto {className}">
  <div class="text-block-head mb-8">
    {#if headline}
      <h2 class="text-block-headline gradient-primary text-lg uppercase mb-10">{headline}</h2>
    {/if}
    {#if subheadline}
      <h3 class="text-block-subheadline text-3xl mb-8">{subheadline}</h3>
    {/if}
  </div>
  <div class="teaser-block--content">
    <Article content={article} />
  </div>
</div>

<script lang="ts">
  import Article from '$lib/components/article/Article.svelte';

  let {
    headline,
    subheadline,
    article,
    class: className = '',
  } = $props();
</script>

<style>
.article:has(.text-center) .image {
  display: flex !important;
  margin-inline: auto !important;
  @apply my-6;
}
</style>