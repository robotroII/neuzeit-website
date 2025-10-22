<dl class="bullet-list">
  <ul>
    {#each items as item}
      <li class="bullet-list__item flex items-start mb-4 gap-4">
        {#if bullet?.src}
          <img src="{bullet.src}" alt="{bullet.alt || 'Bullet icon'}" class="bullet-list__icon flex-shrink-0" />
        {/if}
        <span class="bullet-list__text">
          <Article content={item.article} />
        </span>
      </li>
    {/each}
  </ul>
</dl>

<script>
	import Article from "./article/Article.svelte";

const { bullet, items } = $props();
</script>

<style lang="css">
  .definition-list {
    :global(.accordion-toggle) {
      width: 1rem;
      @screen lg {
        height: 1.5rem;
      }
    }
    :global(.accordion-toggle path) {
        fill: #F7F7F7 !important;
    }
  }
</style>
