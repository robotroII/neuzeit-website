<script lang="ts">
	import { onMount } from 'svelte';

	let visible = $state(false);

	onMount(() => {
		const handleScroll = () => {
			// Show button after scrolling 200vh (2 times the viewport height)
			const scrollThreshold = window.innerHeight * 4;
			visible = window.scrollY > scrollThreshold && document.body.clientHeight > window.innerHeight * 5;
		};

		window.addEventListener('scroll', handleScroll);
		
		// Check initial scroll position
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

{#if visible}
	<button
		onclick={scrollToTop}
		class="scroll-to-top fixed bottom-8 right-8 z-50 p-4 rounded-tr-3xl rounded-bl-3xl shadow-lg transition-all duration-300 hover:scale-110"
		aria-label="Scroll to top"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="url(#primary-gradient-def)"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		    >
			<path d="M12 19V5M5 12l7-7 7 7" />
		</svg>
	</button>
{/if}

<style lang="postcss">
	.scroll-to-top {
        background-color: oklch(100% 0 0 / 0.15);
        backdrop-filter: blur(10px);
		border: 0.0625rem solid oklch(100% 0 0 / 0.15);
	}

	.scroll-to-top svg {
		display: block;
	}
</style>
