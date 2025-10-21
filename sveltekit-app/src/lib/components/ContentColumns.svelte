<div class="content-columns flex flex-col lg:flex-row{className}">
  {#each columns as column, index}
    <div class="content-columns__column p-4 {column.class}">
      {#each column.items as item}
        {#if item._type === 'stage'}
          <Article content={item?.text?.title} />
        {/if}
        {#if item._type === 'textBlock'}
          <TextBlock {...item} class={item.class} />
        {/if}
        {#if item._type === 'contentColumns'}
          <ContentColumns {...item} class={item.class} />
        {/if}
        {#if item._type === 'definitionList'}
          <DefinitionList>
            <Accordion>
              {#each item.items as accordionItem, index}
                <AccordionItem
                  id={`definition-list-accordion-${index}`}
                  expanded={false}
                  parent="definition-list-accordion"
                  class="bg-grey/30 rounded-[2.5rem] rounded-tl-none px-8"
                  >
                  {#snippet title()}
                    <h3>{accordionItem.title}</h3>
                  {/snippet}
                  {#snippet body()}
                    <Article content={accordionItem.article} class="mb-8" />
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

	// import { page } from '$app/state';

  let {
    class: className = '',
    columns = [],
  } = $props();
</script>
