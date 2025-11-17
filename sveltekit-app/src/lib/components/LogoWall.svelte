<div class="logo-wall {className}">
  <ul class="grid grid-cols-8 lg:grid-cols-subgrid gap-y-5">
    {#each items as item, index}
      <li class="
        link-list--item
        {`col-start-${index % 2 === 0 ? '1' : '6'}`} col-span-3
        {`lg:col-start-${index % 4 === 0 ? '1' : index % 4 === 1 ? '4' : index % 4 === 2 ? '7' : '10'}`} lg:col-span-2
        flex items-center justify-center
        "
        >
        <img
          src={item.src}
          alt={item.alt || ''}
          class="link-list--logo w-full h-auto opacity-50"
        />
      </li>
    {/each}
  </ul>
</div>

<script lang="ts">
  let {
    items,
    class: className = '',
  } = $props();
</script>

<style lang="postcss">
</style>