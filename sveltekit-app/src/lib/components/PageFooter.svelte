<footer class="page-footer mt-auto tw-light-mode relative overflow-hidden {className}">
  <div class="page-footer__background lg:hidden absolute top-0 w-full">
    <svg class="w-full" viewBox="0, 0, 393, 852">
      <path d="M0,0 L63,0 C245.254,0 393,147.746 393,330 L393,852 L0,852 L0,0 z" fill="#F7F7F7" />
    </svg>
  </div>
  <div class="page-footer__background hidden lg:block absolute top-0 w-full before:content-[''] before:absolute before:top-0 before:right-[100%] before:w-full before:h-full before:bg-gradient-to-b before:from-[#F7F7F7] before:to-[#F7F7F7]">
    <svg class="w-full" x="0" y="0" viewBox="0, 0, 1920, 590">
      <path d="M0,0 L1330,0 C1655.85,0 1920,264.152 1920,590 L1920,590 L0,590 L0,0 z" fill="#F7F7F7" />
    </svg>
  </div>
  <div class="page-footer__foreground relative bottom-0 w-full h-full">
    <div class="container-fluid-xl px-5 sm:px-10 py-10 pt-16 h-full">
      <div class="flex flex-col align-start gap-10 h-full">
        <NeuzeitLogo id="footer-logo" class="w-[193px] lg:w-auto mb-4 lg:mb-auto" withText={true} />

        <div class="flex flex-col lg:flex-row gap-10 lg:gap-32">
          <div>
            <h2 class="text-base font-bold mb-3 lg:mb-8">{@html m.contactHeadline()}</h2>
            <dd class="text-sm mb-3 leading-6">{@html m.contactPostalAddress()}</dd>
            <dd class="text-sm mb-3">{@html m.contactPhone()}</dd>
            <dd class="text-sm">{@html m.contactEmail()}</dd>
          </div>

          <!-- {#if page.data && page.data.nav}
            <div>
              <h2 class="text-base font-bold mb-3 lg:mb-8">{page.data.nav.main.headline}</h2>
              <Navigation
                nav={{
                  ...page.data.nav.main,
                  items: page.data.nav.main.items.filter(item => item.slug)
                }}
                ulClass="flex-col"
                aClass="text-sm"
              />
            </div>
          {/if} -->

          {#if page.data && page.data.nav}
            <div>
              <h2 class="text-base font-bold mb-3 lg:mb-8">{@html m.legalLinksHeadline()}</h2>
              <Navigation nav={page.data.nav.footer} ulClass="lg:gap-4 flex-col" aClass="text-sm" />
            </div>
          {/if}

          <div>
              <h2 class="text-base font-bold mb-3 lg:mb-8 uppercase">{@html m.smHeadline()}</h2>
              <div class="svg-icon justify-start text-4xl gap-4">
                <a href="https://www.linkedin.com/company/neuzeit-gmbh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg id="icon-icons8-linkedin1" viewBox="0 0 32 32">
                    <path d="M28.191 0h-24.381c-2.102 0-3.809 1.707-3.809 3.809v24.381c0 2.102 1.707 3.809 3.809 3.809h24.381c2.102 0 3.809-1.707 3.809-3.809v-24.381c0-2.102-1.707-3.809-3.809-3.809zM9.905 12.191v14.476h-4.572v-14.476h4.572zM5.333 7.977c0-1.066 0.915-1.882 2.286-1.882s2.232 0.815 2.285 1.882c0 1.067-0.853 1.928-2.285 1.928-1.372 0-2.286-0.861-2.286-1.928zM26.667 26.667h-4.572c0 0 0-7.055 0-7.619 0-1.524-0.762-3.048-2.667-3.078h-0.061c-1.844 0-2.606 1.57-2.606 3.078 0 0.693 0 7.619 0 7.619h-4.571v-14.476h4.571v1.95c0 0 1.471-1.95 4.427-1.95 3.025 0 5.478 2.080 5.478 6.293v8.183z"></path>
                  </svg>
                </a>
                <a href="https://bsky.app/profile/neuzeit.bsky.social" target="_blank" rel="noopener noreferrer" aria-label="Bluesky">
                  <svg x="0" y="0" width="32" height="32" viewBox="0, 0, 32, 32">
                    <path d="M28.191,0.001 C30.292,0.001 32,1.707 32,3.809 L32,28.191 C32,30.292 30.292,32 28.191,32 L3.809,32 C1.707,32 0.001,30.292 0.001,28.191 L0.001,3.809 C0.001,1.707 1.707,0.001 3.809,0.001 L28.191,0.001 z M25.616,6.764 C24.205,6.512 23.124,7.166 22.009,7.917 C19.577,9.743 16.961,13.446 16,15.433 C15.039,13.446 12.423,9.743 9.991,7.917 L9.991,7.917 C8.236,6.599 5.392,5.58 5.392,8.824 C5.392,9.472 5.763,14.267 5.981,15.045 C6.738,17.752 9.498,18.442 11.953,18.024 C7.662,18.754 6.57,21.173 8.928,23.592 C13.405,28.186 15.363,22.44 15.864,20.967 C15.956,20.697 15.999,20.571 16,20.678 C16.001,20.571 16.044,20.697 16.136,20.967 C16.638,22.44 18.595,28.186 23.072,23.592 C25.43,21.173 24.338,18.754 20.047,18.024 C22.502,18.442 25.262,17.752 26.019,15.045 C26.237,14.267 26.608,9.472 26.608,8.824 C26.602,7.656 26.449,7.528 25.616,6.764 z" fill="#000000"/>
                  </svg>
                </a>
              </div>
          </div>
        </div>
  
        <hr class="w-full border-t border-dim" />
  
        <div class="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center gap-6">
          <p class="copyright text-dim text-sm">{@html m.footer_copyright()}</p>
          <div class="lang-switc lg:me-18">
            {#each locales as _locale}
              {#if _locale !== locale}
                <a
                  class="text-sm text-dim uppercase hover:underline font-bold"
                  href={localizeHref(page.url.pathname, { locale: _locale })}
                >{_locale}</a>
              {/if}
            {/each}
          </div>
        </div>


      </div>
    </div>
  </div>
</footer>

<script lang="ts">
  import NeuzeitLogo from '$lib/components/NeuzeitLogo.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
	import { locales, getLocale, localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages.js';

	import { page } from '$app/state';

  const { class: className = '' } = $props();

  const locale = $derived((() => page.url.pathname && getLocale())());
</script>

<style lang="postcss">
  .page-footer__background {
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: calc(100% - 1px);
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, #F7F7F7, #F7F7F7);
    }
  }
</style>