<script lang="ts">
	import { page } from '$app/state';

	const pageData = $derived(page.data.page?.data);

	// import PageMain from "$lib/PageMain.svelte";
</script>

<div
	class="container pt-32 min-h-screen bg-white text-black transition-colors duration-500 dark:bg-black dark:text-white"
  >
  {pageData?.language}<br>
  {pageData?.description}
</div>
