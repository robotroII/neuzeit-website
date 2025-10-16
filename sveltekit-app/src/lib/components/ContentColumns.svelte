<div class="content-columns flex {className}">
  {#each columns as column}
    <div class="content-columns__column p-4 {className}">
      {@html column}
    </div>
  {/each}
</div>
<script lang="ts">
	// import { page } from '$app/state';

  let {
    class: className = '',
    columns = [],
  } = $props();
</script>
