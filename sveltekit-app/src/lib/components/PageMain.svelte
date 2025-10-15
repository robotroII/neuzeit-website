  <div
    class="container pt-32 min-h-screen bg-white text-black transition-colors duration-500 dark:bg-black dark:text-white"
    >
    {pageData?.language}<br>
    {pageData?.description}
    {gradientColors}
  </div>

<script lang="ts">
	import { page } from '$app/state';

	const pageData = $derived(page.data.page?.data);

  let gradientColors: string[] = $state([]);
  $effect(() => {
    const multiplier = Math.round(6 / (pageData?.theme?.primaryGradient?.colors.length || 1));
    let colors: string[] = [];
    for (let i = 0; i < multiplier; i++) {
      colors = [
        ...colors,
        ...pageData.theme?.primaryGradient?.colors
      ];
    }
    gradientColors = colors.map(color => {
      const c = color.replace('#', '');
      const r = parseInt(c.substring(0, 2), 16);
      const g = parseInt(c.substring(2, 4), 16);
      const b = parseInt(c.substring(4, 6), 16);
      return `${r}, ${g}, ${b}`;
    });
  });
</script>
