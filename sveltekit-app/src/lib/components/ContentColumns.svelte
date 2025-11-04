<div class="content-columns
  flex gap-y-8 flex-col {reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}
  {className}
  ">
  {#each columns as column, index}
    <div class="content-columns__column {column.class}">
      {#each column.items as item}
        {#if item._type === 'stage'}
          <Article content={item?.text?.title} />
        {/if}
        {#if item._type === 'image'}
          <Image {...item} class={item.class} />
        {/if}
        {#if item._type === 'picture'}
          <Picture {...item} class={item.class} />
        {/if}
        {#if item._type === 'textBlock'}
          <TextBlock {...item} class={item.class} />
        {/if}
        {#if item._type === 'contentColumns'}
          <ContentColumns {...item} class={item.class} />
        {/if}
        {#if item._type === 'bulletList'}
          <BulletList {...item} class={item.class} />
        {/if}
        {#if item._type === 'definitionList'}
          <DefinitionList>
            <Accordion>
              {#each item.items as accordionItem, index}
                <AccordionItem
                  index={index + 1}
                  id={`definition-list-accordion-${index}`}
                  expanded={index === 0 ? true : false}
                  parent="definition-list-accordion"
                  class="bg-grey/30 rounded-[2.5rem] rounded-tl-none px-5"
                  >
                  {#snippet title()}
                    <dt><h3 class="md:text-2xl">{accordionItem.title}</h3></dt>
                  {/snippet}
                  {#snippet body()}
                    <dd class="md:text-xl"><Article content={accordionItem.article} class="mb-8" /></dd>
                  {/snippet}
                </AccordionItem>
              {/each}
            </Accordion>
          </DefinitionList>
        {/if}
      {/each}
    </div>
  {/each}
</div>
<script lang="ts">
	import Article from "./article/Article.svelte";
	import TextBlock from "./TextBlock.svelte";
	import ContentColumns from "./ContentColumns.svelte";
	import DefinitionList from "./DefinitionList.svelte";
	import Accordion from "./Accordion.svelte";
	import AccordionItem from "./AccordionItem.svelte";
	import BulletList from "./BulletList.svelte";
	import Image from "./Image.svelte";
	import Picture from "./Picture.svelte";

	// import { page } from '$app/state';

  let {
    class: className = '',
    columns = [],
    reverse = false,
  } = $props();
</script>

<style lang="css">
  :global(.content-columns__column:not([class*="col-"])) {
    flex-basis: 50%
  }
</style>