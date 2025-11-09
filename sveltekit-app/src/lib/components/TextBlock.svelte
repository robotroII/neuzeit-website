<div class="text-block {className}">
  {#if headline || subheadline}
    <div class="text-block-head mb-8">
      {#if headline}
        <h2 class="text-block-headline gradient-primary text-lg uppercase mb-8 lg:mb-4 xl:mb-6">{headline}</h2>
      {/if}
      {#if subheadline}
        <h3 class="text-block-subheadline text-4xl leading-[1.333] 2xl:5xl 2xl:leading-[1.25] mb-8">{subheadline}</h3>
      {/if}
    </div>
  {/if}
  {#if article && article}
  <div class="text-block--content">
    <Article content={article} />
  </div>
  {/if}  
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