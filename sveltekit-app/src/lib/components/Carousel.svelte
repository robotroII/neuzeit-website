<Splide
  options={ options }
  on:mounted={ e => console.log( 'slides', e.detail.splide.length ) }
  on:move={ e => console.log( 'move to', e.detail.index ) }
  hasTrack={ false }
  aria-label="My Favorite Images">
  <div class="track-wrapper">
    <SplideTrack>
      {#each items as item, index}
        {#key item.id}
          <SplideSlide>
            {@render carouselItem(item)}
          </SplideSlide>
        {/key}
      {/each}
    </SplideTrack>
  </div>

  <ul class="splide__pagination flex gap-1 py-4"></ul>
  <!-- <div class="splide__arrows">
    <button type="button" class="splide__arrow splide__arrow--prev">Prev</button>
    <button type="button" class="splide__arrow splide__arrow--next">Next</button>
  </div> -->
</Splide>

<script>
import { Splide, SplideTrack, SplideSlide } from '@splidejs/svelte-splide';
import '@splidejs/svelte-splide/css/core';

const options = {
  rewind: true,
  perPage: 2,
  gap: '2rem',
  fixedWidth: 'calc(62%)',
  // start: 1,
  focus: 'center',
  trimSpace: false,
  // height : '15rem',
  breakpoints: {
    1024: {
      perPage: 1,
    },
  },
  arrows: false,
}

let { items, carouselItem } = $props();
</script>

<style lang="css">
  .splide__pagination__page {
    /* counter-increment: pagination-num;
    content: counter( pagination-num ); */
    width: 1rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--color-alto);
  }
  .splide__pagination__page.is-active {
    -webkit-text-fill-color: transparent;
    background-attachment: fixed;
    background-clip: text;
    background: var(--gradient-primary);
  }
</style>
