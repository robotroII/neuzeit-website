<div class="scroll-tracker {className}" bind:this={scrollTrackerRef}>
  {#each items as item, index}
    <div 
      class="grid grid-cols-[auto_1fr] lg:grid-cols-[1fr_auto_1fr] grid-rows-[auto] gap-8 scroll-tracker__section" 
      data-scroll-section={index}
      data-index={index}
    >
      <div class="hidden lg:block col-start-{index % 2 ? '3' : '1'} py-8 lg:py-16">
        <Image
          src={item.image?.src}
          alt={item.image?.alt || ''}
          class="scroll-tracker__image mb-4 lg:mb-0"
        />
      </div>
      <div class="scroll-tracker__track col-start 1 lg:col-start-2 row-start-1 min-w-[3px] transition-colors duration-300 {activeIndex === index ? 'bg-gradient-to-b from-[var(--gradient-color-1)] via-[var(--gradient-color-2)] to-[var(--gradient-color-3)]' : 'bg-grey'}"></div>
      <div class="col-start-2 lg:col-start-{index % 2 ? '1' : '3'} row-start-1 scroll-tracker__content mb-10 lg:mb-0 py-8 lg:py-16">
        <div class="scroll-tracker__title font-bold mb-2 lg:mb-4 lg:text-3xl">
          <span class="gradient-primary">{index + 1 >= 10 ? '' : '0'}{index + 1}</span>
		  <span class="scroll-tracker__title-text">{item.title}</span>
        </div>
        <div class="scroll-tracker__description text-sm md:text-base lg:text-xl text-gray-700 dark:text-gray-300">
          <Article content={item.article} />
        </div>
      </div>
    </div>
  {/each}
</div>

<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import Article from "./article/Article.svelte";
	import Image from "./Image.svelte";

	const { items, class: className = '' } = $props();
	
	let scrollTrackerRef: HTMLDivElement;
	let activeIndex = $state(0);
	let observer: IntersectionObserver;

	// Simple center-based detection
	function handleScroll() {
		if (!browser) return;
		
		const screenCenterY = window.scrollY + window.innerHeight / 2;
		let newActiveIndex = 0;
		let smallestDistance = Infinity;
		
		// Query all sections by their data attribute
		const sections = document.querySelectorAll('[data-scroll-section]');
		sections.forEach((section, index) => {
			const rect = section.getBoundingClientRect();
			const sectionCenterY = rect.top + window.scrollY + rect.height / 2;
			const distance = Math.abs(screenCenterY - sectionCenterY);
			
			if (distance < smallestDistance) {
				smallestDistance = distance;
				newActiveIndex = index;
			}
		});
		
		if (newActiveIndex !== activeIndex) {
			activeIndex = newActiveIndex;
		}
	}

	onMount(() => {
		if (!browser) return;
		
		// Use only scroll listener for smooth, predictable behavior
		window.addEventListener('scroll', handleScroll, { passive: true });
		
		// Initial check once DOM is ready
		setTimeout(() => {
			handleScroll();
		}, 100);
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<style lang="css">
</style>
