<script lang="ts">
	import { page } from '$app/state';

	$: pages = page.data.pages?.data;

	// console.log('data', page.data);
</script>

<!-- <svelte:body use:classList /> -->

<div
	class="min-h-screen bg-white text-black transition-colors duration-500 dark:bg-black dark:text-white"
>
  Page test
</div>
