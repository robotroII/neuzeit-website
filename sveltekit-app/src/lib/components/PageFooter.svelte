<footer class="page-footer mt-auto tw-light-mode relative overflow-hidden {className}">
  <div class="lg:hidden absolute w-full page-footer__background before:content-[''] before:absolute before:top-0 before:right-[100%] before:w-full before:h-full before:bg-gradient-to-b before:from-[#F7F7F7] before:to-[#F7F7F7]">
    <svg class="w-full" width="393" height="852" viewBox="0, 0, 393, 852">
      <path d="M0,0 L63,0 C245.254,0 393,147.746 393,330 L393,852 L0,852 L0,0 z" fill="#F7F7F7" />
    </svg>
  </div>
  <div class="hidden lg:block absolute w-full page-footer__background before:content-[''] before:absolute before:top-0 before:right-[100%] before:w-full before:h-full before:bg-gradient-to-b before:from-[#F7F7F7] before:to-[#F7F7F7]">
    <svg class="w-full" x="0" y="0" width="1920" height="590" viewBox="0, 0, 1920, 590">
      <path d="M0,0 L1330,0 C1655.85,0 1920,264.152 1920,590 L1920,590 L0,590 L0,0 z" fill="#F7F7F7" />
    </svg>
  </div>
  <div class="page-footer__foreground relative bottom-0 w-full h-full">
    <div class="container-fluid p-10 pt-16 h-full">
      <div class="flex flex-col align-start gap-10 h-full">
        <NeuzeitLogo id="footer-logo" class="w-[193px] lg:w-auto mb-4 lg:mb-auto" withText={true} />

        <div class="flex flex-col lg:flex-row gap-10 lg:gap-32">
          <div>
            <h2 class="text-base font-bold mb-3 lg:mb-8">{@html m.contactHeadline()}</h2>
            <dd class="text-sm mb-3">{@html m.contactPostalAddress()}</dd>
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

          <!-- {#if page.data && page.data.nav}
            <div>
              <h2 class="text-base font-bold mb-3 lg:mb-8">{page.data.nav.footer.headline}</h2>
              <Navigation nav={page.data.nav.footer} ulClass="lg:gap-4 lg:flex-col" />
            </div>
          {/if} -->
    
          <div>
              <h2 class="text-base font-bold mb-3 lg:mb-8 uppercase">{@html m.smHeadline()}</h2>
              <div class="svg-icon justify-start text-4xl gap-4">
                <svg id="icon-icons8-linkedin1" viewBox="0 0 32 32">
                  <path d="M28.191 0h-24.381c-2.102 0-3.809 1.707-3.809 3.809v24.381c0 2.102 1.707 3.809 3.809 3.809h24.381c2.102 0 3.809-1.707 3.809-3.809v-24.381c0-2.102-1.707-3.809-3.809-3.809zM9.905 12.191v14.476h-4.572v-14.476h4.572zM5.333 7.977c0-1.066 0.915-1.882 2.286-1.882s2.232 0.815 2.285 1.882c0 1.067-0.853 1.928-2.285 1.928-1.372 0-2.286-0.861-2.286-1.928zM26.667 26.667h-4.572c0 0 0-7.055 0-7.619 0-1.524-0.762-3.048-2.667-3.078h-0.061c-1.844 0-2.606 1.57-2.606 3.078 0 0.693 0 7.619 0 7.619h-4.571v-14.476h4.571v1.95c0 0 1.471-1.95 4.427-1.95 3.025 0 5.478 2.080 5.478 6.293v8.183z"></path>
                </svg>
                <svg width="34" height="35" viewBox="0 0 34 35">
                  <rect y="0.503906" width="34" height="34" rx="4" />
                  <path d="M12.0301 5.58792C10.7533 5.64812 9.88138 5.85192 9.11908 6.15132C8.33028 6.45882 7.66158 6.87132 6.99628 7.53902C6.33108 8.20672 5.92128 8.87582 5.61608 9.66602C5.32068 10.4298 5.12048 11.3025 5.06408 12.58C5.00768 13.8575 4.99518 14.2682 5.00148 17.527C5.00768 20.7856 5.02208 21.1941 5.08398 22.4743C5.14498 23.7508 5.34798 24.6225 5.64748 25.385C5.95548 26.1739 6.36748 26.8423 7.03548 27.5078C7.70338 28.1733 8.37198 28.5821 9.16398 28.8878C9.92718 29.1828 10.8001 29.3839 12.0774 29.4398C13.3547 29.4958 13.7658 29.5088 17.0236 29.5025C20.2814 29.4963 20.6916 29.4818 21.9714 29.4211C23.2514 29.3604 24.1184 29.1559 24.8812 28.8578C25.6701 28.5492 26.339 28.1378 27.004 27.4697C27.669 26.8015 28.0785 26.1319 28.3835 25.3413C28.6792 24.5781 28.8801 23.7053 28.9355 22.4289C28.9915 21.148 29.0047 20.7391 28.9985 17.4809C28.9922 14.2226 28.9775 13.8141 28.9168 12.5344C28.8561 11.2547 28.6528 10.3857 28.3535 9.62272C28.0451 8.83382 27.6335 8.16592 26.9659 7.49992C26.2982 6.83392 25.628 6.42472 24.8378 6.12042C24.074 5.82492 23.2017 5.62362 21.9244 5.56842C20.6471 5.51322 20.236 5.49892 16.977 5.50532C13.718 5.51152 13.31 5.52552 12.0301 5.58792ZM12.1703 27.281C11.0003 27.2301 10.365 27.0357 9.94158 26.873C9.38098 26.657 8.98158 26.3959 8.55968 25.978C8.13768 25.5602 7.87858 25.1594 7.65968 24.6C7.49528 24.1766 7.29728 23.542 7.24258 22.372C7.18308 21.1075 7.17058 20.7278 7.16358 17.524C7.15658 14.3203 7.16888 13.941 7.22428 12.676C7.27428 11.507 7.46988 10.871 7.63228 10.4478C7.84828 9.88652 8.10848 9.48782 8.52728 9.06622C8.94608 8.64452 9.34568 8.38482 9.90558 8.16592C10.3286 8.00082 10.9631 7.80452 12.1326 7.74882C13.3981 7.68882 13.7773 7.67682 16.9806 7.66982C20.1839 7.66282 20.5641 7.67482 21.8301 7.73062C22.9991 7.78142 23.6354 7.97512 24.0581 8.13862C24.6189 8.35462 25.0181 8.61402 25.4397 9.03362C25.8614 9.45302 26.1213 9.85122 26.3402 10.4123C26.5055 10.834 26.7019 11.4683 26.7571 12.6386C26.8173 13.9041 26.831 14.2836 26.8367 17.4866C26.8425 20.6896 26.8312 21.07 26.7757 22.3346C26.7247 23.5046 26.5307 24.1401 26.3677 24.564C26.1517 25.1244 25.8914 25.524 25.4723 25.9454C25.0533 26.3669 24.6542 26.6265 24.094 26.8454C23.6716 27.0103 23.0363 27.2071 21.8678 27.2628C20.6022 27.3223 20.223 27.3348 17.0185 27.3418C13.814 27.3488 13.4358 27.3358 12.1703 27.281ZM21.953 11.0903C21.9535 11.3752 22.0384 11.6534 22.197 11.89C22.3557 12.1266 22.5809 12.3107 22.8443 12.4193C23.1076 12.5278 23.3972 12.5558 23.6765 12.4997C23.9557 12.4437 24.2121 12.306 24.4131 12.1042C24.6141 11.9025 24.7508 11.6456 24.8058 11.3661C24.8609 11.0867 24.8318 10.7972 24.7223 10.5342C24.6128 10.2713 24.4277 10.0467 24.1906 9.88898C23.9534 9.73122 23.6748 9.64733 23.39 9.64792C23.0082 9.64872 22.6423 9.80111 22.3728 10.0716C22.1034 10.3421 21.9523 10.7085 21.953 11.0903ZM10.8385 17.5159C10.8452 20.9191 13.6091 23.6716 17.0115 23.6652C20.4141 23.6587 23.1685 20.8951 23.1621 17.4919C23.1556 14.0887 20.3911 11.3354 16.9881 11.3421C13.5851 11.3488 10.8321 14.1131 10.8385 17.5159ZM13 17.5116C12.9984 16.7205 13.2315 15.9467 13.6697 15.288C14.1079 14.6294 14.7316 14.1154 15.4619 13.8113C16.1922 13.5071 16.9963 13.4262 17.7726 13.5791C18.5488 13.7319 19.2623 14.1114 19.8228 14.6697C20.3833 15.228 20.7657 15.9399 20.9216 16.7156C21.0774 17.4912 20.9998 18.2956 20.6985 19.0271C20.3972 19.7586 19.8858 20.3843 19.2289 20.8252C18.572 21.266 17.7991 21.5021 17.008 21.5037C16.4827 21.5048 15.9623 21.4024 15.4766 21.2024C14.9908 21.0024 14.5492 20.7086 14.1771 20.3379C13.8049 19.9672 13.5094 19.5268 13.3074 19.0418C13.1054 18.5569 13.001 18.0369 13 17.5116Z" fill="#F7F7F7"/>
                </svg>
              </div>
          </div>
        </div>
  
        <hr class="w-full border-t border-dim" />
  
        <div class="flex justify-between items-center">
          <p class="copyright text-dim text-sm">{@html m.footer_copyright()}</p>
          <div class="lang-switch">{locale}
            {#each locales as _locale}
              {#if _locale !== locale}
                <a
                  class="text-sm text-dim uppercase hover:underline p-2"
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
	import { locales, getLocale, localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages.js';
  // import Navigation from '$lib/Navigation.svelte';

	import { page } from '$app/state';
	import { mount, onMount } from 'svelte';

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