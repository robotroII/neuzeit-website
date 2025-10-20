<div class="content-columns flex flex-wrap {className}">
  {#each columns as column, index}
    column {index}
    <div class="content-columns__column p-4 {column.class}">
      {#each column.items as item}
        {#if item._type === 'stage'}
          <Article content={item?.text?.title} />
        {:else if item._type === 'textBlock'}
          <TextBlock {...item} class={item.class} />
        {:else if item._type === 'contentColumns'}
          <ContentColumns {...item} class={item.class} />
        {/if}
      {/each}
    </div>
  {/each}
</div>
<script lang="ts">
	import Article from "./article/Article.svelte";
	import TextBlock from "./TextBlock.svelte";
	import ContentColumns from "./ContentColumns.svelte";

	// import { page } from '$app/state';

  let {
    class: className = '',
    columns = [],
  } = $props();
</script>
