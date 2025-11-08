<div class="logo-wall {className}">
  <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
    {#each items as item, index}
      <li class="link-list--item">
        <img src="{item.src}" alt={item.alt} class="link-list--logo w-auto h-full opacity-50" />
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