<div class="logo-wall">
  <ul class="xl:w-4/5 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {#each items as item, index}
      <li class="link-list--item grid place-content-center">
        <img src="{item.src}" alt={item.alt} class="link-list--logo" />
      </li>
    {/each}
  </ul>
</div>

<script lang="ts">
  let {
    items,
  } = $props();
</script>

<style lang="postcss">
</style>