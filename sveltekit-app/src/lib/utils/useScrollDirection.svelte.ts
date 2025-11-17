import { onMount, onDestroy } from 'svelte';
import { browser } from '$app/environment';

export type ScrollDirection = 'up' | 'down' | 'none';

export interface ScrollDirectionOptions {
	threshold?: number;
	initialDirection?: ScrollDirection;
}

/**
 * Detects scroll direction and provides reactive state
 * @param options Configuration options
 * @returns Object with scroll direction and visibility state
 */
export function useScrollDirection(options: ScrollDirectionOptions = {}) {
	const { threshold = 10, initialDirection = 'none' } = options;

	let scrollDirection = $state<ScrollDirection>(initialDirection);
	let lastScrollY = $state(0);
	let isVisible = $state(true);

	let ticking = false;

	const updateScrollDirection = () => {
		if (!browser) return;
		
		const scrollY = window.scrollY;
		const scrollDiff = scrollY - lastScrollY;

		if (Math.abs(scrollDiff) < threshold) {
			ticking = false;
			return;
		}

		// Scrolling down
		if (scrollDiff > 0 && scrollY > threshold) {
			scrollDirection = 'down';
			isVisible = false;
		} 
		// Scrolling up
		else if (scrollDiff < 0) {
			scrollDirection = 'up';
			isVisible = true;
		}

		// Always show header at the top of the page
		if (scrollY <= threshold) {
			isVisible = true;
			scrollDirection = 'none';
		}

		lastScrollY = scrollY > 0 ? scrollY : 0;
		ticking = false;
	};

	const onScroll = () => {
		if (!browser) return;
		
		if (!ticking) {
			window.requestAnimationFrame(updateScrollDirection);
			ticking = true;
		}
	};

	onMount(() => {
		if (browser) {
			lastScrollY = window.scrollY;
			window.addEventListener('scroll', onScroll, { passive: true });
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('scroll', onScroll);
		}
	});

	return {
		get direction() {
			return scrollDirection;
		},
		get visible() {
			return isVisible;
		}
	};
}
