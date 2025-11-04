<div class="accordion-item flex flex-col gap-4 {className}">
  <div class="accordion-header" id={`heading-${id}`}>
    <button
      class="accordion-button text-start w-full py-5"
      class:collapsed={! expanded}
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={`#target-${id}`}
      aria-expanded={expanded}
      aria-controls={`target-${id}`}
      onclick={toggle}
      >
      <div class="grid {index ? 'grid-cols-[auto_minmax(0,_1fr)_auto]' : 'grid-cols-[minmax(0,_1fr)_auto]'} gap-2">
        {#if index}
          <div class="col-start-1 {expanded ? 'gradient-primary' : ''} font-bold leading-none select-none flex items-center md:text-2xl">
            {index < 10 ? `0${index}` : index}
          </div>
        {/if}
        <div class="col-start-{index ? 2 : 1} flex items-center">
          {@render title()}
        </div>
        <div class="col-start-{index ? 3 : 2} grid items-center ms-auto">
          <svg
            width="30"
            height="17"
            viewBox="0 0 30 17"
            class="accordion-toggle"
            class:rotate-180={expanded}
            >
            <path d="M15.1914 16.9414C14.7168 16.9414 14.3125 16.748 13.9609 16.3965L1.14648 3.30078C0.830078 2.98438 0.654297 2.58008 0.654297 2.12305C0.654297 1.19141 1.375 0.470703 2.30664 0.470703C2.78125 0.470703 3.18555 0.646484 3.50195 0.945312L15.209 12.916L26.8984 0.945312C27.2148 0.646484 27.6367 0.470703 28.0762 0.470703C29.0078 0.470703 29.7285 1.19141 29.7285 2.12305C29.7285 2.58008 29.5527 2.98438 29.2539 3.2832L16.4395 16.3965C16.123 16.748 15.666 16.9414 15.1914 16.9414Z" />
          </svg>
        </div>
      </div>
    </button>
  </div>
  <div
    class="accordion-collapse"
    hidden={! expanded}
    id={`target-${id}`}
    aria-labelledby={`heading-${id}`}
    data-bs-parent={parent}
    >
    <div class="accordion-body">
      {@render body()}
    </div>
  </div>
</div>

<script>
let {
  id,
  index,
  expanded,
  parent,
  title,
  body,
  class: className = '',
} = $props();

function toggle() {
  console.log(`AccordionItem ${id} toggled`);
  
  expanded = !expanded;
}
</script>

<style lang="css">
  .accordion-button {
    @apply cursor-pointer;
  }
  .accordion-toggle {
    path {
      fill: url(#primary-gradient-def);
    }
  }
</style>
