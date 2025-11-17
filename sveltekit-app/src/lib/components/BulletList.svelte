<dl class="bullet-list {className}">
  <ul class="flex flex-col gap-3">
    {#each items as item}
      <li class="bullet-list__item flex items-center mb-4 gap-2 md:gap-4">
        {#if bullet?.src}
          <img src="{bullet.src}" alt="{bullet.alt || ''}" class="bullet-list__icon flex-shrink-0" />
        {/if}
        <div class="bullet-list__text">
          {#if item.subheadline}
            <h3 class="mb-2 lg:text-2xl font-bold">{item.subheadline}</h3>
          {/if}
          <div class="text-block text-sm lg:text-xl">
            <Article content={item.article} />
          </div>
        </div>
      </li>
    {/each}
  </ul>
</dl>

<script>
	import Article from "./article/Article.svelte";

const { bullet, items, class: className } = $props();
</script>

<style lang="css">
  .definition-list {
    :global(.accordion-toggle) {
      width: 1rem;
      @media (min-width: 768px) {
        height: 1.5rem;
      }
    }
    :global(.accordion-toggle path) {
        fill: #F7F7F7 !important;
    }
  }
</style>
