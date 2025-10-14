<script lang="ts">
import { page } from '$app/state';

$: pages = page.data.pages?.data;
// console.log('data', page.data);
</script>

<!-- <svelte:body use:classList /> -->

<div class="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
	Test
</div>