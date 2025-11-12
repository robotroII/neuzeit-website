<div class="contact-list-item text-center">
  <p class="text-sm lg:text-lg uppercase mb-10">{headline}</p>
  <p class="text-3xl md:text-5xl lg:text-4xl xl:text-5xl mb-20">{subheadline}</p>
  <!-- <img src="{picture}" alt="avatar" class="inline-block rounded-full mb-8 max-w-24" /> -->
  <!-- <h3 class="contact-list-item-title text-4xl mb-4">{name}</h3>
  <p class="text-lg uppercase mb-16">{role}</p> -->
  <a
    href={link.externalUrl}
    role="button"
    class="btn text-lg border-gradient"
    target="_blank"
    rel="noopener noreferrer"
  >{@html m.getInTouch()}</a>
</div>

<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';

  let { 
    headline,
    subheadline,
    link,
    name,
    picture,
    role,
    links,
    class: className = '' 
  } = $props();
</script>

<style lang="postcss">
.border-gradient {
  position: relative;
  padding: 1.5rem 3rem;
  margin: .125rem;
  display: inline-block;
  /* font-size: 30px; */
  /* border: double .125rem transparent;
  border-radius: 30px;
  background-image: linear-gradient(black, black), var(--gradient-primary);
  background-origin: border-box;
  background-clip: content-box, border-box; */
}
.border-gradient::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 4rem;
  padding: .125rem;
  background: var(--gradient-primary);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  pointer-events: none;
}
</style>
