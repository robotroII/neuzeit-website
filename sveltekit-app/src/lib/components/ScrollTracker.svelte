<div class="scroll-tracker">
  {#each items as item, index}
    <div class="grid grid-cols-[auto_1fr] lg:grid-cols-[1fr_auto_1fr] grid-rows-[auto] gap-8">
      <div class="hidden lg:block col-start-{index % 2 ? '3' : '1'}">
        <Image
          src={item.image?.src}
          alt={item.image?.alt || ''}
          class="scroll-tracker__image mb-4 lg:mb-0"
        />
      </div>
      <div class="col-start 1 lg:col-start-2 row-start-1 bg-grey min-w-[3px]"></div>
      <div class="col-start-2 lg:col-start-{index % 2 ? '1' : '3'} row-start-1 scroll-tracker__content mb-8 lg:mb-0">
        <div class="scroll-tracker__title font-bold mb-2 lg:mb-4">
          <span class="gradient-primary">{index + 1}</span> {item.title}
        </div>
        <div class="scroll-tracker__description text-sm lg:text-base text-gray-700 dark:text-gray-300">
          <Article content={item.article} />
        </div>
      </div>
    </div>
  {/each}
</div>

<script>
	import Article from "./article/Article.svelte";
	import Image from "./Image.svelte";

const { items } = $props();
</script>

<style lang="css">
</style>
