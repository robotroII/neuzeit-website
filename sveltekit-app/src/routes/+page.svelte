<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	// $: pages = page.data.pages?.data;
  const pageData = $derived(page.data.page?.data);

  onMount(() => {
    console.log('mount page', page.data.page.data);
  });
</script>

<!-- <svelte:body use:classList /> -->

<div
	class="min-h-screen bg-white text-black transition-colors duration-500 dark:bg-black dark:text-white"
>
  {pageData.language}
  Page test
</div>
