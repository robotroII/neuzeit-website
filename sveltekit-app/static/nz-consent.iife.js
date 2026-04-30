(function(){var s=document.createElement('style');s.textContent=":root,:host{--nz-bg: #050508;--nz-bg-elevated: #0d0d12;--nz-bg-surface: #16161e;--nz-bg-glass: rgba(255, 255, 255, .04);--nz-bg-hover: rgba(255, 255, 255, .05);--nz-input-bg: rgba(255, 255, 255, .04);--nz-input-border: rgba(255, 255, 255, .1);--nz-text: #fafafa;--nz-text-secondary: #a1a1aa;--nz-text-tertiary: #71717a;--nz-grad: linear-gradient(135deg, #22d3ee 0%, #6366f1 50%, #a855f7 100%);--nz-grad-subtle: linear-gradient(135deg, rgba(34,211,238,.45) 0%, rgba(99,102,241,.45) 50%, rgba(168,85,247,.45) 100%);--nz-grad-faint: linear-gradient(135deg, rgba(34,211,238,.18) 0%, rgba(99,102,241,.18) 50%, rgba(168,85,247,.18) 100%);--nz-accent: #818cf8;--nz-accent-hover: #6366f1;--nz-accent-fg: #09090b;--nz-accent-start: #22d3ee;--nz-accent-mid: #6366f1;--nz-accent-end: #a855f7;--nz-success: #4ade80;--nz-error: #f87171;--nz-warning: #fbbf24;--nz-border: #3f3f46;--nz-border-hover: #52525b;--nz-font: \"Inter\", system-ui, -apple-system, sans-serif;--nz-font-mono: \"JetBrains Mono\", ui-monospace, monospace;--nz-radius-sm: 4px;--nz-radius-md: 8px;--nz-radius-lg: 16px;--nz-radius: var(--nz-radius-md);--nz-shadow-sm: 0 1px 2px rgba(0, 0, 0, .5);--nz-shadow-md: 0 4px 12px rgba(0, 0, 0, .6);--nz-shadow-lg: 0 8px 32px rgba(0, 0, 0, .7);--nz-shadow-glow: 0 0 32px rgba(99, 102, 241, .15);--nz-transition: .2s ease;--nz-transition-slow: .4s ease;--nz-space-xs: 4px;--nz-space-sm: 8px;--nz-space-md: 16px;--nz-space-lg: 24px;--nz-space-xl: 32px}@media(prefers-color-scheme:light){:root:not(.dark),:host:not(.dark){color-scheme:light;--nz-bg: #f8f8fc;--nz-bg-elevated: #ffffff;--nz-bg-surface: #f0f0f5;--nz-bg-glass: rgba(255, 255, 255, .82);--nz-bg-hover: rgba(0, 0, 0, .03);--nz-input-bg: rgba(255, 255, 255, .7);--nz-input-border: rgba(0, 0, 0, .12);--nz-text: #0a0a0f;--nz-text-secondary: #52525b;--nz-text-tertiary: #71717a;--nz-grad-subtle: linear-gradient(135deg, rgba(34,211,238,.55) 0%, rgba(99,102,241,.55) 50%, rgba(168,85,247,.55) 100%);--nz-grad-faint: linear-gradient(135deg, rgba(34,211,238,.2) 0%, rgba(99,102,241,.2) 50%, rgba(168,85,247,.2) 100%);--nz-accent: #4f46e5;--nz-accent-hover: #4338ca;--nz-accent-fg: #ffffff;--nz-success: #16a34a;--nz-error: #dc2626;--nz-warning: #d97706;--nz-border: #e4e4e7;--nz-border-hover: #d4d4d8;--nz-shadow-sm: 0 1px 3px rgba(0, 0, 0, .08);--nz-shadow-md: 0 4px 12px rgba(0, 0, 0, .12);--nz-shadow-lg: 0 8px 32px rgba(0, 0, 0, .16);--nz-shadow-glow: 0 0 32px rgba(99, 102, 241, .08)}}[data-nz-theme=dark],.dark,.nz-dark{color-scheme:dark}[data-nz-theme=light],.nz-light{color-scheme:light;--nz-bg: #f8f8fc;--nz-bg-elevated: #ffffff;--nz-bg-surface: #f0f0f5;--nz-bg-glass: rgba(255, 255, 255, .82);--nz-bg-hover: rgba(0, 0, 0, .03);--nz-input-bg: rgba(255, 255, 255, .7);--nz-input-border: rgba(0, 0, 0, .12);--nz-text: #0a0a0f;--nz-text-secondary: #52525b;--nz-text-tertiary: #71717a;--nz-grad-subtle: linear-gradient(135deg, rgba(34,211,238,.55) 0%, rgba(99,102,241,.55) 50%, rgba(168,85,247,.55) 100%);--nz-grad-faint: linear-gradient(135deg, rgba(34,211,238,.2) 0%, rgba(99,102,241,.2) 50%, rgba(168,85,247,.2) 100%);--nz-accent: #4f46e5;--nz-accent-hover: #4338ca;--nz-accent-fg: #ffffff;--nz-success: #16a34a;--nz-error: #dc2626;--nz-warning: #d97706;--nz-border: #e4e4e7;--nz-border-hover: #d4d4d8;--nz-shadow-sm: 0 1px 3px rgba(0, 0, 0, .08);--nz-shadow-md: 0 4px 12px rgba(0, 0, 0, .12);--nz-shadow-lg: 0 8px 32px rgba(0, 0, 0, .16);--nz-shadow-glow: 0 0 32px rgba(99, 102, 241, .08)}@media(prefers-reduced-motion:reduce){:root,:host{--nz-transition: 0ms;--nz-transition-slow: 0ms}}.nz-btn.svelte-fr2yeo{display:inline-flex;align-items:center;justify-content:center;gap:var(--nz-space-sm);padding:var(--nz-space-sm) var(--nz-space-md);border:1px solid transparent;border-radius:var(--nz-radius-sm);font-family:var(--nz-font);font-size:.875rem;font-weight:600;line-height:1.25rem;cursor:pointer;transition:opacity var(--nz-transition),transform .1s ease;position:relative;white-space:nowrap}.nz-btn.svelte-fr2yeo:disabled{opacity:.35;cursor:not-allowed}.nz-btn.svelte-fr2yeo:active:not(:disabled){transform:scale(.97)}.nz-btn.svelte-fr2yeo:focus-visible{outline:2px solid var(--nz-accent);outline-offset:2px}.nz-btn--primary.svelte-fr2yeo{background:linear-gradient(135deg,var(--nz-accent-start, #22d3ee) 0%,var(--nz-accent-end, #6366f1) 100%);color:#fff;border-color:transparent}.nz-btn--primary.svelte-fr2yeo:hover:not(:disabled){opacity:.88}.nz-btn--secondary.svelte-fr2yeo{background:transparent;color:var(--nz-text);border-color:var(--nz-border)}.nz-btn--secondary.svelte-fr2yeo:hover:not(:disabled){border-color:var(--nz-border-hover);background:var(--nz-bg-elevated)}.nz-btn--ghost.svelte-fr2yeo{background:linear-gradient(transparent,transparent) padding-box,linear-gradient(135deg,color-mix(in srgb,var(--nz-accent-start, #22d3ee) 35%,transparent),color-mix(in srgb,var(--nz-accent-end, #6366f1) 35%,transparent)) border-box;color:var(--nz-text-secondary)}.nz-btn--ghost.svelte-fr2yeo:hover:not(:disabled){background:linear-gradient(transparent,transparent) padding-box,linear-gradient(135deg,color-mix(in srgb,var(--nz-accent-start, #22d3ee) 65%,transparent),color-mix(in srgb,var(--nz-accent-end, #6366f1) 65%,transparent)) border-box;color:var(--nz-text)}.nz-btn__spinner.svelte-fr2yeo{width:1rem;height:1rem;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:svelte-fr2yeo-nz-spin .6s linear infinite}.nz-btn__content--hidden.svelte-fr2yeo{visibility:hidden}@keyframes svelte-fr2yeo-nz-spin{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.nz-btn.svelte-fr2yeo{transition:none}.nz-btn.svelte-fr2yeo:active:not(:disabled){transform:none}.nz-btn__spinner.svelte-fr2yeo{animation:none;border-top-color:currentColor;opacity:.4}}.nz-banner.svelte-frsc0w{position:fixed;z-index:9999;background:var(--nz-bg);border:1px solid var(--nz-border);box-shadow:var(--nz-shadow-md);padding:20px 24px;display:flex;gap:16px;font-family:var(--nz-font);animation:svelte-frsc0w-nz-slide-in .3s ease-out}.nz-banner--bottom.svelte-frsc0w{bottom:0;left:0;right:0;border-radius:var(--nz-radius-lg) var(--nz-radius-lg) 0 0;flex-direction:row;align-items:center}.nz-banner--top.svelte-frsc0w{top:0;left:0;right:0;border-radius:0 0 var(--nz-radius-lg) var(--nz-radius-lg);flex-direction:row;align-items:center}.nz-banner--bottom-left.svelte-frsc0w{bottom:16px;left:16px;max-width:420px;border-radius:var(--nz-radius-lg);flex-direction:column}.nz-banner--bottom-right.svelte-frsc0w{bottom:16px;right:16px;max-width:420px;border-radius:var(--nz-radius-lg);flex-direction:column}@container (max-width: 600px){.nz-banner--bottom.svelte-frsc0w,.nz-banner--top.svelte-frsc0w{flex-direction:column}}.nz-banner__content.svelte-frsc0w{flex:1;min-width:0}.nz-banner__title.svelte-frsc0w{font-size:16px;font-weight:600;margin:0 0 4px;color:var(--nz-text)}.nz-banner__description.svelte-frsc0w{margin:0;color:var(--nz-text-secondary);font-size:14px}.nz-banner__links.svelte-frsc0w{margin:8px 0 0;display:flex;gap:12px;font-size:13px}.nz-banner__link.svelte-frsc0w{color:var(--nz-accent);text-decoration:underline;text-underline-offset:2px}.nz-banner__link.svelte-frsc0w:hover{text-decoration-thickness:2px}.nz-banner__actions.svelte-frsc0w{display:flex;gap:8px;flex-shrink:0;flex-wrap:wrap;align-items:center}@keyframes svelte-frsc0w-nz-slide-in{0%{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@media(prefers-reduced-motion:reduce){.nz-banner.svelte-frsc0w{animation:none}}.nz-toggle.svelte-iz14do{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:12px 16px}.nz-toggle__info.svelte-iz14do{flex:1;min-width:0}.nz-toggle__label.svelte-iz14do{font-weight:500;font-size:14px;color:var(--nz-text);cursor:pointer;display:flex;align-items:center;gap:8px}.nz-toggle__badge.svelte-iz14do{font-size:11px;font-weight:400;color:var(--nz-text-secondary);background:var(--nz-border);padding:1px 6px;border-radius:4px}.nz-toggle__description.svelte-iz14do{margin:2px 0 0;font-size:13px;color:var(--nz-text-secondary)}.nz-toggle__switch.svelte-iz14do{position:relative;flex-shrink:0;width:44px;height:24px}.nz-toggle__input.svelte-iz14do{position:absolute;width:100%;height:100%;opacity:0;cursor:pointer;margin:0;z-index:1}.nz-toggle__input.svelte-iz14do:disabled{cursor:not-allowed}.nz-toggle__track.svelte-iz14do{position:absolute;top:0;right:0;bottom:0;left:0;background:var(--nz-border);border-radius:12px;transition:background var(--nz-transition);pointer-events:none}.nz-toggle__input.svelte-iz14do:checked+.nz-toggle__track:where(.svelte-iz14do){background:var(--nz-consent-toggle-active, var(--nz-accent))}.nz-toggle__input.svelte-iz14do:disabled+.nz-toggle__track:where(.svelte-iz14do){opacity:.6}.nz-toggle__input.svelte-iz14do:focus-visible+.nz-toggle__track:where(.svelte-iz14do){outline:2px solid var(--nz-accent);outline-offset:2px}.nz-toggle__thumb.svelte-iz14do{position:absolute;top:2px;left:2px;width:20px;height:20px;background:#fff;border-radius:50%;transition:transform .2s;box-shadow:0 1px 3px #00000026}.nz-toggle__input.svelte-iz14do:checked+.nz-toggle__track:where(.svelte-iz14do) .nz-toggle__thumb:where(.svelte-iz14do){transform:translate(20px)}@media(prefers-reduced-motion:reduce){.nz-toggle__track.svelte-iz14do,.nz-toggle__thumb.svelte-iz14do{transition:none}}.nz-cookie-table-wrapper.svelte-kmvg96{padding:0 16px 12px;overflow-x:auto}.nz-cookie-table__caption.svelte-kmvg96{text-align:left;font-size:11px;font-weight:500;color:var(--nz-text-tertiary);padding:4px 8px;caption-side:top}.nz-cookie-table.svelte-kmvg96{width:100%;border-collapse:collapse;font-size:12px}.nz-cookie-table.svelte-kmvg96 th:where(.svelte-kmvg96){text-align:left;font-weight:500;color:var(--nz-text-secondary);padding:6px 8px;border-bottom:1px solid var(--nz-border);white-space:nowrap}.nz-cookie-table.svelte-kmvg96 td:where(.svelte-kmvg96){padding:6px 8px;border-bottom:1px solid var(--nz-border);color:var(--nz-text);vertical-align:top}.nz-cookie-table.svelte-kmvg96 tbody:where(.svelte-kmvg96) tr:where(.svelte-kmvg96):last-child td:where(.svelte-kmvg96){border-bottom:none}.nz-cookie-table__name.svelte-kmvg96 code:where(.svelte-kmvg96){font-family:ui-monospace,monospace;font-size:12px;background:var(--nz-border);padding:1px 4px;border-radius:3px}.nz-cookie-table__desc-col.svelte-kmvg96{max-width:200px}@container (max-width: 400px){.nz-cookie-table__desc-col.svelte-kmvg96{display:none}}.nz-prefs.svelte-qjmdg0{border:none;padding:0;margin:auto;max-width:min(560px,calc(100vw - 32px));max-height:min(80vh,700px);width:100%;background:var(--nz-bg);color:var(--nz-text);font-family:var(--nz-font);border-radius:var(--nz-radius-lg);box-shadow:var(--nz-shadow-lg);overflow:hidden;animation:svelte-qjmdg0-nz-dialog-in .25s ease-out;container-type:inline-size}.nz-prefs.svelte-qjmdg0::backdrop{background:#00000080;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);animation:svelte-qjmdg0-nz-fade-in .2s ease-out}.nz-prefs__container.svelte-qjmdg0{display:flex;flex-direction:column;max-height:min(80vh,700px)}.nz-prefs__header.svelte-qjmdg0{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--nz-border);flex-shrink:0}.nz-prefs__title.svelte-qjmdg0{font-size:18px;font-weight:600;margin:0}.nz-prefs__body.svelte-qjmdg0{padding:16px 20px;overflow-y:auto;flex:1}.nz-prefs__description.svelte-qjmdg0{margin:0 0 12px;color:var(--nz-text-secondary);font-size:14px}.nz-prefs__links.svelte-qjmdg0{margin:0 0 16px;display:flex;gap:12px;font-size:13px}.nz-prefs__link.svelte-qjmdg0{color:var(--nz-accent);text-decoration:underline;text-underline-offset:2px}.nz-prefs__categories.svelte-qjmdg0{display:flex;flex-direction:column;gap:2px}.nz-prefs__category.svelte-qjmdg0{border:1px solid var(--nz-border);border-radius:var(--nz-radius-md);overflow:hidden;transition:border-color var(--nz-transition)}.nz-prefs__category.svelte-qjmdg0:has(:where(.svelte-qjmdg0):checked){border-color:color-mix(in srgb,var(--nz-accent) 40%,transparent)}.nz-prefs__category--expanded.svelte-qjmdg0{border-color:var(--nz-accent)}.nz-prefs__details-toggle.svelte-qjmdg0{display:flex;align-items:center;gap:4px;padding:4px 16px 8px;background:none;border:none;color:var(--nz-accent);font-size:12px;cursor:pointer}.nz-prefs__details-toggle.svelte-qjmdg0:hover{text-decoration:underline}.nz-prefs__chevron.svelte-qjmdg0{transition:transform var(--nz-transition)}.nz-prefs__category--expanded.svelte-qjmdg0 .nz-prefs__chevron:where(.svelte-qjmdg0){transform:rotate(180deg)}.nz-prefs__footer.svelte-qjmdg0{display:flex;gap:8px;padding:16px 20px;border-top:1px solid var(--nz-border);justify-content:flex-end;flex-shrink:0;flex-wrap:wrap;align-items:center}@container (max-width: 400px){.nz-prefs__footer.svelte-qjmdg0{flex-direction:column}}@keyframes svelte-qjmdg0-nz-dialog-in{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes svelte-qjmdg0-nz-fade-in{0%{opacity:0}to{opacity:1}}@media(prefers-reduced-motion:reduce){.nz-prefs.svelte-qjmdg0{animation:none}.nz-prefs.svelte-qjmdg0::backdrop{animation:none}.nz-prefs__category.svelte-qjmdg0,.nz-prefs__chevron.svelte-qjmdg0{transition:none}}.nz-consent-root.svelte-1iqzoy1{font-family:var(--nz-font);font-size:14px;line-height:1.5;color:var(--nz-text);container-type:inline-size}.nz-consent-reopen.svelte-1iqzoy1{position:fixed;bottom:16px;left:16px;z-index:9998;width:40px;height:40px;border-radius:50%;background:var(--nz-accent);color:var(--nz-accent-fg);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:var(--nz-shadow-md);transition:transform var(--nz-transition),opacity var(--nz-transition)}.nz-consent-reopen.svelte-1iqzoy1:hover{transform:scale(1.1)}.nz-consent-reopen.svelte-1iqzoy1:focus-visible{outline:2px solid var(--nz-accent);outline-offset:2px}\n";document.head.appendChild(s);}());
var NzConsent = (function(exports) {
  "use strict";var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

  var _commit_callbacks, _discard_callbacks, _fork_commit_callbacks, _pending, _blocking_pending, _deferred, _roots, _new_effects, _dirty_effects, _maybe_dirty_effects, _skipped_branches, _unskipped_branches, _decrement_queued, _blockers, _Batch_instances, is_deferred_fn, is_blocked_fn, process_fn, traverse_fn, defer_effects_fn, commit_fn, _anchor, _hydrate_open, _props, _children, _effect, _main_effect, _pending_effect, _failed_effect, _offscreen_fragment, _local_pending_count, _pending_count, _pending_count_update_queued, _dirty_effects2, _maybe_dirty_effects2, _effect_pending, _effect_pending_subscriber, _Boundary_instances, hydrate_resolved_content_fn, hydrate_failed_content_fn, hydrate_pending_content_fn, render_fn, resolve_fn, run_fn, update_pending_count_fn, handle_error_fn, _a, _batches, _onscreen, _offscreen, _outroing, _transition, _commit, _discard, _b;
  const EACH_ITEM_REACTIVE = 1;
  const EACH_INDEX_REACTIVE = 1 << 1;
  const EACH_ITEM_IMMUTABLE = 1 << 4;
  const TEMPLATE_USE_IMPORT_NODE = 1 << 1;
  const UNINITIALIZED = Symbol();
  const NAMESPACE_HTML = "http://www.w3.org/1999/xhtml";
  var is_array = Array.isArray;
  var index_of = Array.prototype.indexOf;
  var includes = Array.prototype.includes;
  var array_from = Array.from;
  var define_property = Object.defineProperty;
  var get_descriptor = Object.getOwnPropertyDescriptor;
  var get_descriptors = Object.getOwnPropertyDescriptors;
  var object_prototype = Object.prototype;
  var array_prototype = Array.prototype;
  var get_prototype_of = Object.getPrototypeOf;
  var is_extensible = Object.isExtensible;
  const noop = () => {
  };
  function run_all(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i]();
    }
  }
  function deferred() {
    var resolve;
    var reject;
    var promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  }
  const DERIVED = 1 << 1;
  const EFFECT = 1 << 2;
  const RENDER_EFFECT = 1 << 3;
  const MANAGED_EFFECT = 1 << 24;
  const BLOCK_EFFECT = 1 << 4;
  const BRANCH_EFFECT = 1 << 5;
  const ROOT_EFFECT = 1 << 6;
  const BOUNDARY_EFFECT = 1 << 7;
  const CONNECTED = 1 << 9;
  const CLEAN = 1 << 10;
  const DIRTY = 1 << 11;
  const MAYBE_DIRTY = 1 << 12;
  const INERT = 1 << 13;
  const DESTROYED = 1 << 14;
  const REACTION_RAN = 1 << 15;
  const DESTROYING = 1 << 25;
  const EFFECT_TRANSPARENT = 1 << 16;
  const EAGER_EFFECT = 1 << 17;
  const HEAD_EFFECT = 1 << 18;
  const EFFECT_PRESERVED = 1 << 19;
  const USER_EFFECT = 1 << 20;
  const EFFECT_OFFSCREEN = 1 << 25;
  const WAS_MARKED = 1 << 16;
  const REACTION_IS_UPDATING = 1 << 21;
  const ASYNC = 1 << 22;
  const ERROR_VALUE = 1 << 23;
  const STATE_SYMBOL = Symbol("$state");
  const LOADING_ATTR_SYMBOL = Symbol("");
  const STALE_REACTION = new class StaleReactionError extends Error {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "StaleReactionError");
      __publicField(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
    }
  }();
  function lifecycle_outside_component(name) {
    {
      throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
    }
  }
  function async_derived_orphan() {
    {
      throw new Error(`https://svelte.dev/e/async_derived_orphan`);
    }
  }
  function each_key_duplicate(a, b, value) {
    {
      throw new Error(`https://svelte.dev/e/each_key_duplicate`);
    }
  }
  function effect_in_teardown(rune) {
    {
      throw new Error(`https://svelte.dev/e/effect_in_teardown`);
    }
  }
  function effect_in_unowned_derived() {
    {
      throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
    }
  }
  function effect_orphan(rune) {
    {
      throw new Error(`https://svelte.dev/e/effect_orphan`);
    }
  }
  function effect_update_depth_exceeded() {
    {
      throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
    }
  }
  function state_descriptors_fixed() {
    {
      throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
    }
  }
  function state_prototype_fixed() {
    {
      throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
    }
  }
  function state_unsafe_mutation() {
    {
      throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
    }
  }
  function svelte_boundary_reset_onerror() {
    {
      throw new Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
    }
  }
  function derived_inert() {
    {
      console.warn(`https://svelte.dev/e/derived_inert`);
    }
  }
  function svelte_boundary_reset_noop() {
    {
      console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
    }
  }
  function equals(value) {
    return value === this.v;
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
  }
  function safe_equals(value) {
    return !safe_not_equal(value, this.v);
  }
  let component_context = null;
  function set_component_context(context) {
    component_context = context;
  }
  function push(props, runes = false, fn) {
    component_context = {
      p: component_context,
      i: false,
      c: null,
      e: null,
      s: props,
      x: null,
      r: (
        /** @type {Effect} */
        active_effect
      ),
      l: null
    };
  }
  function pop(component) {
    var context = (
      /** @type {ComponentContext} */
      component_context
    );
    var effects = context.e;
    if (effects !== null) {
      context.e = null;
      for (var fn of effects) {
        create_user_effect(fn);
      }
    }
    if (component !== void 0) {
      context.x = component;
    }
    context.i = true;
    component_context = context.p;
    return component ?? /** @type {T} */
    {};
  }
  function is_runes() {
    return true;
  }
  let micro_tasks = [];
  function run_micro_tasks() {
    var tasks = micro_tasks;
    micro_tasks = [];
    run_all(tasks);
  }
  function queue_micro_task(fn) {
    if (micro_tasks.length === 0 && true) {
      var tasks = micro_tasks;
      queueMicrotask(() => {
        if (tasks === micro_tasks) run_micro_tasks();
      });
    }
    micro_tasks.push(fn);
  }
  function handle_error(error) {
    var effect2 = active_effect;
    if (effect2 === null) {
      active_reaction.f |= ERROR_VALUE;
      return error;
    }
    if ((effect2.f & REACTION_RAN) === 0 && (effect2.f & EFFECT) === 0) {
      throw error;
    }
    invoke_error_boundary(error, effect2);
  }
  function invoke_error_boundary(error, effect2) {
    while (effect2 !== null) {
      if ((effect2.f & BOUNDARY_EFFECT) !== 0) {
        if ((effect2.f & REACTION_RAN) === 0) {
          throw error;
        }
        try {
          effect2.b.error(error);
          return;
        } catch (e) {
          error = e;
        }
      }
      effect2 = effect2.parent;
    }
    throw error;
  }
  const STATUS_MASK = -7169;
  function set_signal_status(signal, status) {
    signal.f = signal.f & STATUS_MASK | status;
  }
  function update_derived_status(derived2) {
    if ((derived2.f & CONNECTED) !== 0 || derived2.deps === null) {
      set_signal_status(derived2, CLEAN);
    } else {
      set_signal_status(derived2, MAYBE_DIRTY);
    }
  }
  function clear_marked(deps) {
    if (deps === null) return;
    for (const dep of deps) {
      if ((dep.f & DERIVED) === 0 || (dep.f & WAS_MARKED) === 0) {
        continue;
      }
      dep.f ^= WAS_MARKED;
      clear_marked(
        /** @type {Derived} */
        dep.deps
      );
    }
  }
  function defer_effect(effect2, dirty_effects, maybe_dirty_effects) {
    if ((effect2.f & DIRTY) !== 0) {
      dirty_effects.add(effect2);
    } else if ((effect2.f & MAYBE_DIRTY) !== 0) {
      maybe_dirty_effects.add(effect2);
    }
    clear_marked(effect2.deps);
    set_signal_status(effect2, CLEAN);
  }
  const batches = /* @__PURE__ */ new Set();
  let current_batch = null;
  let batch_values = null;
  let last_scheduled_effect = null;
  let is_processing = false;
  let collected_effects = null;
  let legacy_updates = null;
  var flush_count = 0;
  let uid = 1;
  const _Batch = class _Batch {
    constructor() {
      __privateAdd(this, _Batch_instances);
      __publicField(this, "id", uid++);
      /**
       * The current values of any signals that are updated in this batch.
       * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
       * They keys of this map are identical to `this.#previous`
       * @type {Map<Value, [any, boolean]>}
       */
      __publicField(this, "current", /* @__PURE__ */ new Map());
      /**
       * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
       * They keys of this map are identical to `this.#current`
       * @type {Map<Value, any>}
       */
      __publicField(this, "previous", /* @__PURE__ */ new Map());
      /**
       * When the batch is committed (and the DOM is updated), we need to remove old branches
       * and append new ones by calling the functions added inside (if/each/key/etc) blocks
       * @type {Set<(batch: Batch) => void>}
       */
      __privateAdd(this, _commit_callbacks, /* @__PURE__ */ new Set());
      /**
       * If a fork is discarded, we need to destroy any effects that are no longer needed
       * @type {Set<(batch: Batch) => void>}
       */
      __privateAdd(this, _discard_callbacks, /* @__PURE__ */ new Set());
      /**
       * Callbacks that should run only when a fork is committed.
       * @type {Set<(batch: Batch) => void>}
       */
      __privateAdd(this, _fork_commit_callbacks, /* @__PURE__ */ new Set());
      /**
       * Async effects that are currently in flight
       * @type {Map<Effect, number>}
       */
      __privateAdd(this, _pending, /* @__PURE__ */ new Map());
      /**
       * Async effects that are currently in flight, _not_ inside a pending boundary
       * @type {Map<Effect, number>}
       */
      __privateAdd(this, _blocking_pending, /* @__PURE__ */ new Map());
      /**
       * A deferred that resolves when the batch is committed, used with `settled()`
       * TODO replace with Promise.withResolvers once supported widely enough
       * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
       */
      __privateAdd(this, _deferred, null);
      /**
       * The root effects that need to be flushed
       * @type {Effect[]}
       */
      __privateAdd(this, _roots, []);
      /**
       * Effects created while this batch was active.
       * @type {Effect[]}
       */
      __privateAdd(this, _new_effects, []);
      /**
       * Deferred effects (which run after async work has completed) that are DIRTY
       * @type {Set<Effect>}
       */
      __privateAdd(this, _dirty_effects, /* @__PURE__ */ new Set());
      /**
       * Deferred effects that are MAYBE_DIRTY
       * @type {Set<Effect>}
       */
      __privateAdd(this, _maybe_dirty_effects, /* @__PURE__ */ new Set());
      /**
       * A map of branches that still exist, but will be destroyed when this batch
       * is committed — we skip over these during `process`.
       * The value contains child effects that were dirty/maybe_dirty before being reset,
       * so they can be rescheduled if the branch survives.
       * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
       */
      __privateAdd(this, _skipped_branches, /* @__PURE__ */ new Map());
      /**
       * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
       * @type {Set<Effect>}
       */
      __privateAdd(this, _unskipped_branches, /* @__PURE__ */ new Set());
      __publicField(this, "is_fork", false);
      __privateAdd(this, _decrement_queued, false);
      /** @type {Set<Batch>} */
      __privateAdd(this, _blockers, /* @__PURE__ */ new Set());
    }
    /**
     * Add an effect to the #skipped_branches map and reset its children
     * @param {Effect} effect
     */
    skip_effect(effect2) {
      if (!__privateGet(this, _skipped_branches).has(effect2)) {
        __privateGet(this, _skipped_branches).set(effect2, { d: [], m: [] });
      }
      __privateGet(this, _unskipped_branches).delete(effect2);
    }
    /**
     * Remove an effect from the #skipped_branches map and reschedule
     * any tracked dirty/maybe_dirty child effects
     * @param {Effect} effect
     * @param {(e: Effect) => void} callback
     */
    unskip_effect(effect2, callback = (e) => this.schedule(e)) {
      var tracked = __privateGet(this, _skipped_branches).get(effect2);
      if (tracked) {
        __privateGet(this, _skipped_branches).delete(effect2);
        for (var e of tracked.d) {
          set_signal_status(e, DIRTY);
          callback(e);
        }
        for (e of tracked.m) {
          set_signal_status(e, MAYBE_DIRTY);
          callback(e);
        }
      }
      __privateGet(this, _unskipped_branches).add(effect2);
    }
    /**
     * Associate a change to a given source with the current
     * batch, noting its previous and current values
     * @param {Value} source
     * @param {any} value
     * @param {boolean} [is_derived]
     */
    capture(source2, value, is_derived = false) {
      if (source2.v !== UNINITIALIZED && !this.previous.has(source2)) {
        this.previous.set(source2, source2.v);
      }
      if ((source2.f & ERROR_VALUE) === 0) {
        this.current.set(source2, [value, is_derived]);
        batch_values == null ? void 0 : batch_values.set(source2, value);
      }
      if (!this.is_fork) {
        source2.v = value;
      }
    }
    activate() {
      current_batch = this;
    }
    deactivate() {
      current_batch = null;
      batch_values = null;
    }
    flush() {
      try {
        is_processing = true;
        current_batch = this;
        __privateMethod(this, _Batch_instances, process_fn).call(this);
      } finally {
        flush_count = 0;
        last_scheduled_effect = null;
        collected_effects = null;
        legacy_updates = null;
        is_processing = false;
        current_batch = null;
        batch_values = null;
        old_values.clear();
      }
    }
    discard() {
      for (const fn of __privateGet(this, _discard_callbacks)) fn(this);
      __privateGet(this, _discard_callbacks).clear();
      __privateGet(this, _fork_commit_callbacks).clear();
      batches.delete(this);
    }
    /**
     * @param {Effect} effect
     */
    register_created_effect(effect2) {
      __privateGet(this, _new_effects).push(effect2);
    }
    /**
     * @param {boolean} blocking
     * @param {Effect} effect
     */
    increment(blocking, effect2) {
      let pending_count = __privateGet(this, _pending).get(effect2) ?? 0;
      __privateGet(this, _pending).set(effect2, pending_count + 1);
      if (blocking) {
        let blocking_pending_count = __privateGet(this, _blocking_pending).get(effect2) ?? 0;
        __privateGet(this, _blocking_pending).set(effect2, blocking_pending_count + 1);
      }
    }
    /**
     * @param {boolean} blocking
     * @param {Effect} effect
     * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
     */
    decrement(blocking, effect2, skip) {
      let pending_count = __privateGet(this, _pending).get(effect2) ?? 0;
      if (pending_count === 1) {
        __privateGet(this, _pending).delete(effect2);
      } else {
        __privateGet(this, _pending).set(effect2, pending_count - 1);
      }
      if (blocking) {
        let blocking_pending_count = __privateGet(this, _blocking_pending).get(effect2) ?? 0;
        if (blocking_pending_count === 1) {
          __privateGet(this, _blocking_pending).delete(effect2);
        } else {
          __privateGet(this, _blocking_pending).set(effect2, blocking_pending_count - 1);
        }
      }
      if (__privateGet(this, _decrement_queued) || skip) return;
      __privateSet(this, _decrement_queued, true);
      queue_micro_task(() => {
        __privateSet(this, _decrement_queued, false);
        this.flush();
      });
    }
    /**
     * @param {Set<Effect>} dirty_effects
     * @param {Set<Effect>} maybe_dirty_effects
     */
    transfer_effects(dirty_effects, maybe_dirty_effects) {
      for (const e of dirty_effects) {
        __privateGet(this, _dirty_effects).add(e);
      }
      for (const e of maybe_dirty_effects) {
        __privateGet(this, _maybe_dirty_effects).add(e);
      }
      dirty_effects.clear();
      maybe_dirty_effects.clear();
    }
    /** @param {(batch: Batch) => void} fn */
    oncommit(fn) {
      __privateGet(this, _commit_callbacks).add(fn);
    }
    /** @param {(batch: Batch) => void} fn */
    ondiscard(fn) {
      __privateGet(this, _discard_callbacks).add(fn);
    }
    /** @param {(batch: Batch) => void} fn */
    on_fork_commit(fn) {
      __privateGet(this, _fork_commit_callbacks).add(fn);
    }
    run_fork_commit_callbacks() {
      for (const fn of __privateGet(this, _fork_commit_callbacks)) fn(this);
      __privateGet(this, _fork_commit_callbacks).clear();
    }
    settled() {
      return (__privateGet(this, _deferred) ?? __privateSet(this, _deferred, deferred())).promise;
    }
    static ensure() {
      if (current_batch === null) {
        const batch = current_batch = new _Batch();
        if (!is_processing) {
          batches.add(current_batch);
          {
            queue_micro_task(() => {
              if (current_batch !== batch) {
                return;
              }
              batch.flush();
            });
          }
        }
      }
      return current_batch;
    }
    apply() {
      {
        batch_values = null;
        return;
      }
    }
    /**
     *
     * @param {Effect} effect
     */
    schedule(effect2) {
      var _a2;
      last_scheduled_effect = effect2;
      if (((_a2 = effect2.b) == null ? void 0 : _a2.is_pending) && (effect2.f & (EFFECT | RENDER_EFFECT | MANAGED_EFFECT)) !== 0 && (effect2.f & REACTION_RAN) === 0) {
        effect2.b.defer_effect(effect2);
        return;
      }
      var e = effect2;
      while (e.parent !== null) {
        e = e.parent;
        var flags2 = e.f;
        if (collected_effects !== null && e === active_effect) {
          if ((active_reaction === null || (active_reaction.f & DERIVED) === 0) && true) {
            return;
          }
        }
        if ((flags2 & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
          if ((flags2 & CLEAN) === 0) {
            return;
          }
          e.f ^= CLEAN;
        }
      }
      __privateGet(this, _roots).push(e);
    }
  };
  _commit_callbacks = new WeakMap();
  _discard_callbacks = new WeakMap();
  _fork_commit_callbacks = new WeakMap();
  _pending = new WeakMap();
  _blocking_pending = new WeakMap();
  _deferred = new WeakMap();
  _roots = new WeakMap();
  _new_effects = new WeakMap();
  _dirty_effects = new WeakMap();
  _maybe_dirty_effects = new WeakMap();
  _skipped_branches = new WeakMap();
  _unskipped_branches = new WeakMap();
  _decrement_queued = new WeakMap();
  _blockers = new WeakMap();
  _Batch_instances = new WeakSet();
  is_deferred_fn = function() {
    return this.is_fork || __privateGet(this, _blocking_pending).size > 0;
  };
  is_blocked_fn = function() {
    for (const batch of __privateGet(this, _blockers)) {
      for (const effect2 of __privateGet(batch, _blocking_pending).keys()) {
        var skipped = false;
        var e = effect2;
        while (e.parent !== null) {
          if (__privateGet(this, _skipped_branches).has(e)) {
            skipped = true;
            break;
          }
          e = e.parent;
        }
        if (!skipped) {
          return true;
        }
      }
    }
    return false;
  };
  process_fn = function() {
    var _a2, _b2;
    if (flush_count++ > 1e3) {
      batches.delete(this);
      infinite_loop_guard();
    }
    if (!__privateMethod(this, _Batch_instances, is_deferred_fn).call(this)) {
      for (const e of __privateGet(this, _dirty_effects)) {
        __privateGet(this, _maybe_dirty_effects).delete(e);
        set_signal_status(e, DIRTY);
        this.schedule(e);
      }
      for (const e of __privateGet(this, _maybe_dirty_effects)) {
        set_signal_status(e, MAYBE_DIRTY);
        this.schedule(e);
      }
    }
    const roots = __privateGet(this, _roots);
    __privateSet(this, _roots, []);
    this.apply();
    var effects = collected_effects = [];
    var render_effects = [];
    var updates = legacy_updates = [];
    for (const root2 of roots) {
      try {
        __privateMethod(this, _Batch_instances, traverse_fn).call(this, root2, effects, render_effects);
      } catch (e) {
        reset_all(root2);
        throw e;
      }
    }
    current_batch = null;
    if (updates.length > 0) {
      var batch = _Batch.ensure();
      for (const e of updates) {
        batch.schedule(e);
      }
    }
    collected_effects = null;
    legacy_updates = null;
    if (__privateMethod(this, _Batch_instances, is_deferred_fn).call(this) || __privateMethod(this, _Batch_instances, is_blocked_fn).call(this)) {
      __privateMethod(this, _Batch_instances, defer_effects_fn).call(this, render_effects);
      __privateMethod(this, _Batch_instances, defer_effects_fn).call(this, effects);
      for (const [e, t] of __privateGet(this, _skipped_branches)) {
        reset_branch(e, t);
      }
    } else {
      if (__privateGet(this, _pending).size === 0) {
        batches.delete(this);
      }
      __privateGet(this, _dirty_effects).clear();
      __privateGet(this, _maybe_dirty_effects).clear();
      for (const fn of __privateGet(this, _commit_callbacks)) fn(this);
      __privateGet(this, _commit_callbacks).clear();
      flush_queued_effects(render_effects);
      flush_queued_effects(effects);
      (_a2 = __privateGet(this, _deferred)) == null ? void 0 : _a2.resolve();
    }
    var next_batch = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      current_batch
    );
    if (__privateGet(this, _roots).length > 0) {
      const batch2 = next_batch ?? (next_batch = this);
      __privateGet(batch2, _roots).push(...__privateGet(this, _roots).filter((r) => !__privateGet(batch2, _roots).includes(r)));
    }
    if (next_batch !== null) {
      batches.add(next_batch);
      __privateMethod(_b2 = next_batch, _Batch_instances, process_fn).call(_b2);
    }
  };
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  traverse_fn = function(root2, effects, render_effects) {
    root2.f ^= CLEAN;
    var effect2 = root2.first;
    while (effect2 !== null) {
      var flags2 = effect2.f;
      var is_branch = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
      var is_skippable_branch = is_branch && (flags2 & CLEAN) !== 0;
      var skip = is_skippable_branch || (flags2 & INERT) !== 0 || __privateGet(this, _skipped_branches).has(effect2);
      if (!skip && effect2.fn !== null) {
        if (is_branch) {
          effect2.f ^= CLEAN;
        } else if ((flags2 & EFFECT) !== 0) {
          effects.push(effect2);
        } else if (is_dirty(effect2)) {
          if ((flags2 & BLOCK_EFFECT) !== 0) __privateGet(this, _maybe_dirty_effects).add(effect2);
          update_effect(effect2);
        }
        var child2 = effect2.first;
        if (child2 !== null) {
          effect2 = child2;
          continue;
        }
      }
      while (effect2 !== null) {
        var next = effect2.next;
        if (next !== null) {
          effect2 = next;
          break;
        }
        effect2 = effect2.parent;
      }
    }
  };
  /**
   * @param {Effect[]} effects
   */
  defer_effects_fn = function(effects) {
    for (var i = 0; i < effects.length; i += 1) {
      defer_effect(effects[i], __privateGet(this, _dirty_effects), __privateGet(this, _maybe_dirty_effects));
    }
  };
  commit_fn = function() {
    var _a2, _b2, _c;
    for (const batch of batches) {
      var is_earlier = batch.id < this.id;
      var sources = [];
      for (const [source3, [value, is_derived]] of this.current) {
        if (batch.current.has(source3)) {
          var batch_value = (
            /** @type {[any, boolean]} */
            batch.current.get(source3)[0]
          );
          if (is_earlier && value !== batch_value) {
            batch.current.set(source3, [value, is_derived]);
          } else {
            continue;
          }
        }
        sources.push(source3);
      }
      var others = [...batch.current.keys()].filter((s) => !this.current.has(s));
      if (others.length === 0) {
        if (is_earlier) {
          batch.discard();
        }
      } else if (sources.length > 0) {
        if (is_earlier) {
          for (const unskipped of __privateGet(this, _unskipped_branches)) {
            batch.unskip_effect(unskipped, (e) => {
              var _a3;
              if ((e.f & (BLOCK_EFFECT | ASYNC)) !== 0) {
                batch.schedule(e);
              } else {
                __privateMethod(_a3 = batch, _Batch_instances, defer_effects_fn).call(_a3, [e]);
              }
            });
          }
        }
        batch.activate();
        var marked = /* @__PURE__ */ new Set();
        var checked = /* @__PURE__ */ new Map();
        for (var source2 of sources) {
          mark_effects(source2, others, marked, checked);
        }
        checked = /* @__PURE__ */ new Map();
        var current_unequal = [...batch.current.keys()].filter(
          (c) => this.current.has(c) ? (
            /** @type {[any, boolean]} */
            this.current.get(c)[0] !== c
          ) : true
        );
        for (const effect2 of __privateGet(this, _new_effects)) {
          if ((effect2.f & (DESTROYED | INERT | EAGER_EFFECT)) === 0 && depends_on(effect2, current_unequal, checked)) {
            if ((effect2.f & (ASYNC | BLOCK_EFFECT)) !== 0) {
              set_signal_status(effect2, DIRTY);
              batch.schedule(effect2);
            } else {
              __privateGet(batch, _dirty_effects).add(effect2);
            }
          }
        }
        if (__privateGet(batch, _roots).length > 0) {
          batch.apply();
          for (var root2 of __privateGet(batch, _roots)) {
            __privateMethod(_a2 = batch, _Batch_instances, traverse_fn).call(_a2, root2, [], []);
          }
          __privateSet(batch, _roots, []);
        }
        batch.deactivate();
      }
    }
    for (const batch of batches) {
      if (__privateGet(batch, _blockers).has(this)) {
        __privateGet(batch, _blockers).delete(this);
        if (__privateGet(batch, _blockers).size === 0 && !__privateMethod(_b2 = batch, _Batch_instances, is_deferred_fn).call(_b2)) {
          batch.activate();
          __privateMethod(_c = batch, _Batch_instances, process_fn).call(_c);
        }
      }
    }
  };
  let Batch = _Batch;
  function infinite_loop_guard() {
    try {
      effect_update_depth_exceeded();
    } catch (error) {
      invoke_error_boundary(error, last_scheduled_effect);
    }
  }
  let eager_block_effects = null;
  function flush_queued_effects(effects) {
    var length = effects.length;
    if (length === 0) return;
    var i = 0;
    while (i < length) {
      var effect2 = effects[i++];
      if ((effect2.f & (DESTROYED | INERT)) === 0 && is_dirty(effect2)) {
        eager_block_effects = /* @__PURE__ */ new Set();
        update_effect(effect2);
        if (effect2.deps === null && effect2.first === null && effect2.nodes === null && effect2.teardown === null && effect2.ac === null) {
          unlink_effect(effect2);
        }
        if ((eager_block_effects == null ? void 0 : eager_block_effects.size) > 0) {
          old_values.clear();
          for (const e of eager_block_effects) {
            if ((e.f & (DESTROYED | INERT)) !== 0) continue;
            const ordered_effects = [e];
            let ancestor = e.parent;
            while (ancestor !== null) {
              if (eager_block_effects.has(ancestor)) {
                eager_block_effects.delete(ancestor);
                ordered_effects.push(ancestor);
              }
              ancestor = ancestor.parent;
            }
            for (let j = ordered_effects.length - 1; j >= 0; j--) {
              const e2 = ordered_effects[j];
              if ((e2.f & (DESTROYED | INERT)) !== 0) continue;
              update_effect(e2);
            }
          }
          eager_block_effects.clear();
        }
      }
    }
    eager_block_effects = null;
  }
  function mark_effects(value, sources, marked, checked) {
    if (marked.has(value)) return;
    marked.add(value);
    if (value.reactions !== null) {
      for (const reaction of value.reactions) {
        const flags2 = reaction.f;
        if ((flags2 & DERIVED) !== 0) {
          mark_effects(
            /** @type {Derived} */
            reaction,
            sources,
            marked,
            checked
          );
        } else if ((flags2 & (ASYNC | BLOCK_EFFECT)) !== 0 && (flags2 & DIRTY) === 0 && depends_on(reaction, sources, checked)) {
          set_signal_status(reaction, DIRTY);
          schedule_effect(
            /** @type {Effect} */
            reaction
          );
        }
      }
    }
  }
  function depends_on(reaction, sources, checked) {
    const depends = checked.get(reaction);
    if (depends !== void 0) return depends;
    if (reaction.deps !== null) {
      for (const dep of reaction.deps) {
        if (includes.call(sources, dep)) {
          return true;
        }
        if ((dep.f & DERIVED) !== 0 && depends_on(
          /** @type {Derived} */
          dep,
          sources,
          checked
        )) {
          checked.set(
            /** @type {Derived} */
            dep,
            true
          );
          return true;
        }
      }
    }
    checked.set(reaction, false);
    return false;
  }
  function schedule_effect(effect2) {
    current_batch.schedule(effect2);
  }
  function reset_branch(effect2, tracked) {
    if ((effect2.f & BRANCH_EFFECT) !== 0 && (effect2.f & CLEAN) !== 0) {
      return;
    }
    if ((effect2.f & DIRTY) !== 0) {
      tracked.d.push(effect2);
    } else if ((effect2.f & MAYBE_DIRTY) !== 0) {
      tracked.m.push(effect2);
    }
    set_signal_status(effect2, CLEAN);
    var e = effect2.first;
    while (e !== null) {
      reset_branch(e, tracked);
      e = e.next;
    }
  }
  function reset_all(effect2) {
    set_signal_status(effect2, CLEAN);
    var e = effect2.first;
    while (e !== null) {
      reset_all(e);
      e = e.next;
    }
  }
  function createSubscriber(start) {
    let subscribers = 0;
    let version = source(0);
    let stop;
    return () => {
      if (effect_tracking()) {
        get(version);
        render_effect(() => {
          if (subscribers === 0) {
            stop = untrack(() => start(() => increment(version)));
          }
          subscribers += 1;
          return () => {
            queue_micro_task(() => {
              subscribers -= 1;
              if (subscribers === 0) {
                stop == null ? void 0 : stop();
                stop = void 0;
                increment(version);
              }
            });
          };
        });
      }
    };
  }
  var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
  function boundary(node, props, children, transform_error) {
    new Boundary(node, props, children, transform_error);
  }
  class Boundary {
    /**
     * @param {TemplateNode} node
     * @param {BoundaryProps} props
     * @param {((anchor: Node) => void)} children
     * @param {((error: unknown) => unknown) | undefined} [transform_error]
     */
    constructor(node, props, children, transform_error) {
      __privateAdd(this, _Boundary_instances);
      /** @type {Boundary | null} */
      __publicField(this, "parent");
      __publicField(this, "is_pending", false);
      /**
       * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
       * Inherited from parent boundary, or defaults to identity.
       * @type {(error: unknown) => unknown}
       */
      __publicField(this, "transform_error");
      /** @type {TemplateNode} */
      __privateAdd(this, _anchor);
      /** @type {TemplateNode | null} */
      __privateAdd(this, _hydrate_open, null);
      /** @type {BoundaryProps} */
      __privateAdd(this, _props);
      /** @type {((anchor: Node) => void)} */
      __privateAdd(this, _children);
      /** @type {Effect} */
      __privateAdd(this, _effect);
      /** @type {Effect | null} */
      __privateAdd(this, _main_effect, null);
      /** @type {Effect | null} */
      __privateAdd(this, _pending_effect, null);
      /** @type {Effect | null} */
      __privateAdd(this, _failed_effect, null);
      /** @type {DocumentFragment | null} */
      __privateAdd(this, _offscreen_fragment, null);
      __privateAdd(this, _local_pending_count, 0);
      __privateAdd(this, _pending_count, 0);
      __privateAdd(this, _pending_count_update_queued, false);
      /** @type {Set<Effect>} */
      __privateAdd(this, _dirty_effects2, /* @__PURE__ */ new Set());
      /** @type {Set<Effect>} */
      __privateAdd(this, _maybe_dirty_effects2, /* @__PURE__ */ new Set());
      /**
       * A source containing the number of pending async deriveds/expressions.
       * Only created if `$effect.pending()` is used inside the boundary,
       * otherwise updating the source results in needless `Batch.ensure()`
       * calls followed by no-op flushes
       * @type {Source<number> | null}
       */
      __privateAdd(this, _effect_pending, null);
      __privateAdd(this, _effect_pending_subscriber, createSubscriber(() => {
        __privateSet(this, _effect_pending, source(__privateGet(this, _local_pending_count)));
        return () => {
          __privateSet(this, _effect_pending, null);
        };
      }));
      var _a2;
      __privateSet(this, _anchor, node);
      __privateSet(this, _props, props);
      __privateSet(this, _children, (anchor) => {
        var effect2 = (
          /** @type {Effect} */
          active_effect
        );
        effect2.b = this;
        effect2.f |= BOUNDARY_EFFECT;
        children(anchor);
      });
      this.parent = /** @type {Effect} */
      active_effect.b;
      this.transform_error = transform_error ?? ((_a2 = this.parent) == null ? void 0 : _a2.transform_error) ?? ((e) => e);
      __privateSet(this, _effect, block(() => {
        {
          __privateMethod(this, _Boundary_instances, render_fn).call(this);
        }
      }, flags));
    }
    /**
     * Defer an effect inside a pending boundary until the boundary resolves
     * @param {Effect} effect
     */
    defer_effect(effect2) {
      defer_effect(effect2, __privateGet(this, _dirty_effects2), __privateGet(this, _maybe_dirty_effects2));
    }
    /**
     * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
     * @returns {boolean}
     */
    is_rendered() {
      return !this.is_pending && (!this.parent || this.parent.is_rendered());
    }
    has_pending_snippet() {
      return !!__privateGet(this, _props).pending;
    }
    /**
     * Update the source that powers `$effect.pending()` inside this boundary,
     * and controls when the current `pending` snippet (if any) is removed.
     * Do not call from inside the class
     * @param {1 | -1} d
     * @param {Batch} batch
     */
    update_pending_count(d, batch) {
      __privateMethod(this, _Boundary_instances, update_pending_count_fn).call(this, d, batch);
      __privateSet(this, _local_pending_count, __privateGet(this, _local_pending_count) + d);
      if (!__privateGet(this, _effect_pending) || __privateGet(this, _pending_count_update_queued)) return;
      __privateSet(this, _pending_count_update_queued, true);
      queue_micro_task(() => {
        __privateSet(this, _pending_count_update_queued, false);
        if (__privateGet(this, _effect_pending)) {
          internal_set(__privateGet(this, _effect_pending), __privateGet(this, _local_pending_count));
        }
      });
    }
    get_effect_pending() {
      __privateGet(this, _effect_pending_subscriber).call(this);
      return get(
        /** @type {Source<number>} */
        __privateGet(this, _effect_pending)
      );
    }
    /** @param {unknown} error */
    error(error) {
      if (!__privateGet(this, _props).onerror && !__privateGet(this, _props).failed) {
        throw error;
      }
      if (current_batch == null ? void 0 : current_batch.is_fork) {
        if (__privateGet(this, _main_effect)) current_batch.skip_effect(__privateGet(this, _main_effect));
        if (__privateGet(this, _pending_effect)) current_batch.skip_effect(__privateGet(this, _pending_effect));
        if (__privateGet(this, _failed_effect)) current_batch.skip_effect(__privateGet(this, _failed_effect));
        current_batch.on_fork_commit(() => {
          __privateMethod(this, _Boundary_instances, handle_error_fn).call(this, error);
        });
      } else {
        __privateMethod(this, _Boundary_instances, handle_error_fn).call(this, error);
      }
    }
  }
  _anchor = new WeakMap();
  _hydrate_open = new WeakMap();
  _props = new WeakMap();
  _children = new WeakMap();
  _effect = new WeakMap();
  _main_effect = new WeakMap();
  _pending_effect = new WeakMap();
  _failed_effect = new WeakMap();
  _offscreen_fragment = new WeakMap();
  _local_pending_count = new WeakMap();
  _pending_count = new WeakMap();
  _pending_count_update_queued = new WeakMap();
  _dirty_effects2 = new WeakMap();
  _maybe_dirty_effects2 = new WeakMap();
  _effect_pending = new WeakMap();
  _effect_pending_subscriber = new WeakMap();
  _Boundary_instances = new WeakSet();
  hydrate_resolved_content_fn = function() {
    try {
      __privateSet(this, _main_effect, branch(() => __privateGet(this, _children).call(this, __privateGet(this, _anchor))));
    } catch (error) {
      this.error(error);
    }
  };
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  hydrate_failed_content_fn = function(error) {
    const failed = __privateGet(this, _props).failed;
    if (!failed) return;
    __privateSet(this, _failed_effect, branch(() => {
      failed(
        __privateGet(this, _anchor),
        () => error,
        () => () => {
        }
      );
    }));
  };
  hydrate_pending_content_fn = function() {
    const pending = __privateGet(this, _props).pending;
    if (!pending) return;
    this.is_pending = true;
    __privateSet(this, _pending_effect, branch(() => pending(__privateGet(this, _anchor))));
    queue_micro_task(() => {
      var fragment = __privateSet(this, _offscreen_fragment, document.createDocumentFragment());
      var anchor = create_text();
      fragment.append(anchor);
      __privateSet(this, _main_effect, __privateMethod(this, _Boundary_instances, run_fn).call(this, () => {
        return branch(() => __privateGet(this, _children).call(this, anchor));
      }));
      if (__privateGet(this, _pending_count) === 0) {
        __privateGet(this, _anchor).before(fragment);
        __privateSet(this, _offscreen_fragment, null);
        pause_effect(
          /** @type {Effect} */
          __privateGet(this, _pending_effect),
          () => {
            __privateSet(this, _pending_effect, null);
          }
        );
        __privateMethod(this, _Boundary_instances, resolve_fn).call(
          this,
          /** @type {Batch} */
          current_batch
        );
      }
    });
  };
  render_fn = function() {
    try {
      this.is_pending = this.has_pending_snippet();
      __privateSet(this, _pending_count, 0);
      __privateSet(this, _local_pending_count, 0);
      __privateSet(this, _main_effect, branch(() => {
        __privateGet(this, _children).call(this, __privateGet(this, _anchor));
      }));
      if (__privateGet(this, _pending_count) > 0) {
        var fragment = __privateSet(this, _offscreen_fragment, document.createDocumentFragment());
        move_effect(__privateGet(this, _main_effect), fragment);
        const pending = (
          /** @type {(anchor: Node) => void} */
          __privateGet(this, _props).pending
        );
        __privateSet(this, _pending_effect, branch(() => pending(__privateGet(this, _anchor))));
      } else {
        __privateMethod(this, _Boundary_instances, resolve_fn).call(
          this,
          /** @type {Batch} */
          current_batch
        );
      }
    } catch (error) {
      this.error(error);
    }
  };
  /**
   * @param {Batch} batch
   */
  resolve_fn = function(batch) {
    this.is_pending = false;
    batch.transfer_effects(__privateGet(this, _dirty_effects2), __privateGet(this, _maybe_dirty_effects2));
  };
  /**
   * @template T
   * @param {() => T} fn
   */
  run_fn = function(fn) {
    var previous_effect = active_effect;
    var previous_reaction = active_reaction;
    var previous_ctx = component_context;
    set_active_effect(__privateGet(this, _effect));
    set_active_reaction(__privateGet(this, _effect));
    set_component_context(__privateGet(this, _effect).ctx);
    try {
      Batch.ensure();
      return fn();
    } catch (e) {
      handle_error(e);
      return null;
    } finally {
      set_active_effect(previous_effect);
      set_active_reaction(previous_reaction);
      set_component_context(previous_ctx);
    }
  };
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count_fn = function(d, batch) {
    var _a2;
    if (!this.has_pending_snippet()) {
      if (this.parent) {
        __privateMethod(_a2 = this.parent, _Boundary_instances, update_pending_count_fn).call(_a2, d, batch);
      }
      return;
    }
    __privateSet(this, _pending_count, __privateGet(this, _pending_count) + d);
    if (__privateGet(this, _pending_count) === 0) {
      __privateMethod(this, _Boundary_instances, resolve_fn).call(this, batch);
      if (__privateGet(this, _pending_effect)) {
        pause_effect(__privateGet(this, _pending_effect), () => {
          __privateSet(this, _pending_effect, null);
        });
      }
      if (__privateGet(this, _offscreen_fragment)) {
        __privateGet(this, _anchor).before(__privateGet(this, _offscreen_fragment));
        __privateSet(this, _offscreen_fragment, null);
      }
    }
  };
  /**
   * @param {unknown} error
   */
  handle_error_fn = function(error) {
    if (__privateGet(this, _main_effect)) {
      destroy_effect(__privateGet(this, _main_effect));
      __privateSet(this, _main_effect, null);
    }
    if (__privateGet(this, _pending_effect)) {
      destroy_effect(__privateGet(this, _pending_effect));
      __privateSet(this, _pending_effect, null);
    }
    if (__privateGet(this, _failed_effect)) {
      destroy_effect(__privateGet(this, _failed_effect));
      __privateSet(this, _failed_effect, null);
    }
    var onerror = __privateGet(this, _props).onerror;
    let failed = __privateGet(this, _props).failed;
    var did_reset = false;
    var calling_on_error = false;
    const reset = () => {
      if (did_reset) {
        svelte_boundary_reset_noop();
        return;
      }
      did_reset = true;
      if (calling_on_error) {
        svelte_boundary_reset_onerror();
      }
      if (__privateGet(this, _failed_effect) !== null) {
        pause_effect(__privateGet(this, _failed_effect), () => {
          __privateSet(this, _failed_effect, null);
        });
      }
      __privateMethod(this, _Boundary_instances, run_fn).call(this, () => {
        __privateMethod(this, _Boundary_instances, render_fn).call(this);
      });
    };
    const handle_error_result = (transformed_error) => {
      try {
        calling_on_error = true;
        onerror == null ? void 0 : onerror(transformed_error, reset);
        calling_on_error = false;
      } catch (error2) {
        invoke_error_boundary(error2, __privateGet(this, _effect) && __privateGet(this, _effect).parent);
      }
      if (failed) {
        __privateSet(this, _failed_effect, __privateMethod(this, _Boundary_instances, run_fn).call(this, () => {
          try {
            return branch(() => {
              var effect2 = (
                /** @type {Effect} */
                active_effect
              );
              effect2.b = this;
              effect2.f |= BOUNDARY_EFFECT;
              failed(
                __privateGet(this, _anchor),
                () => transformed_error,
                () => reset
              );
            });
          } catch (error2) {
            invoke_error_boundary(
              error2,
              /** @type {Effect} */
              __privateGet(this, _effect).parent
            );
            return null;
          }
        }));
      }
    };
    queue_micro_task(() => {
      var result;
      try {
        result = this.transform_error(error);
      } catch (e) {
        invoke_error_boundary(e, __privateGet(this, _effect) && __privateGet(this, _effect).parent);
        return;
      }
      if (result !== null && typeof result === "object" && typeof /** @type {any} */
      result.then === "function") {
        result.then(
          handle_error_result,
          /** @param {unknown} e */
          (e) => invoke_error_boundary(e, __privateGet(this, _effect) && __privateGet(this, _effect).parent)
        );
      } else {
        handle_error_result(result);
      }
    });
  };
  function flatten(blockers, sync, async, fn) {
    const d = derived;
    var pending = blockers.filter((b) => !b.settled);
    if (async.length === 0 && pending.length === 0) {
      fn(sync.map(d));
      return;
    }
    var parent = (
      /** @type {Effect} */
      active_effect
    );
    var restore = capture();
    var blocker_promise = pending.length === 1 ? pending[0].promise : pending.length > 1 ? Promise.all(pending.map((b) => b.promise)) : null;
    function finish(values) {
      restore();
      try {
        fn(values);
      } catch (error) {
        if ((parent.f & DESTROYED) === 0) {
          invoke_error_boundary(error, parent);
        }
      }
      unset_context();
    }
    if (async.length === 0) {
      blocker_promise.then(() => finish(sync.map(d)));
      return;
    }
    var decrement_pending = increment_pending();
    function run() {
      Promise.all(async.map((expression) => /* @__PURE__ */ async_derived(expression))).then((result) => finish([...sync.map(d), ...result])).catch((error) => invoke_error_boundary(error, parent)).finally(() => decrement_pending());
    }
    if (blocker_promise) {
      blocker_promise.then(() => {
        restore();
        run();
        unset_context();
      });
    } else {
      run();
    }
  }
  function capture() {
    var previous_effect = (
      /** @type {Effect} */
      active_effect
    );
    var previous_reaction = active_reaction;
    var previous_component_context = component_context;
    var previous_batch = (
      /** @type {Batch} */
      current_batch
    );
    return function restore(activate_batch = true) {
      set_active_effect(previous_effect);
      set_active_reaction(previous_reaction);
      set_component_context(previous_component_context);
      if (activate_batch && (previous_effect.f & DESTROYED) === 0) {
        previous_batch == null ? void 0 : previous_batch.activate();
        previous_batch == null ? void 0 : previous_batch.apply();
      }
    };
  }
  function unset_context(deactivate_batch = true) {
    set_active_effect(null);
    set_active_reaction(null);
    set_component_context(null);
    if (deactivate_batch) current_batch == null ? void 0 : current_batch.deactivate();
  }
  function increment_pending() {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    var boundary2 = (
      /** @type {Boundary} */
      effect2.b
    );
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    var blocking = boundary2.is_rendered();
    boundary2.update_pending_count(1, batch);
    batch.increment(blocking, effect2);
    return (skip = false) => {
      boundary2.update_pending_count(-1, batch);
      batch.decrement(blocking, effect2, skip);
    };
  }
  // @__NO_SIDE_EFFECTS__
  function derived(fn) {
    var flags2 = DERIVED | DIRTY;
    if (active_effect !== null) {
      active_effect.f |= EFFECT_PRESERVED;
    }
    const signal = {
      ctx: component_context,
      deps: null,
      effects: null,
      equals,
      f: flags2,
      fn,
      reactions: null,
      rv: 0,
      v: (
        /** @type {V} */
        UNINITIALIZED
      ),
      wv: 0,
      parent: active_effect,
      ac: null
    };
    return signal;
  }
  // @__NO_SIDE_EFFECTS__
  function async_derived(fn, label, location) {
    let parent = (
      /** @type {Effect | null} */
      active_effect
    );
    if (parent === null) {
      async_derived_orphan();
    }
    var promise = (
      /** @type {Promise<V>} */
      /** @type {unknown} */
      void 0
    );
    var signal = source(
      /** @type {V} */
      UNINITIALIZED
    );
    var should_suspend = !active_reaction;
    var deferreds = /* @__PURE__ */ new Map();
    async_effect(() => {
      var _a2;
      var effect2 = (
        /** @type {Effect} */
        active_effect
      );
      var d = deferred();
      promise = d.promise;
      try {
        Promise.resolve(fn()).then(d.resolve, d.reject).finally(unset_context);
      } catch (error) {
        d.reject(error);
        unset_context();
      }
      var batch = (
        /** @type {Batch} */
        current_batch
      );
      if (should_suspend) {
        if ((effect2.f & REACTION_RAN) !== 0) {
          var decrement_pending = increment_pending();
        }
        if (
          /** @type {Boundary} */
          parent.b.is_rendered()
        ) {
          (_a2 = deferreds.get(batch)) == null ? void 0 : _a2.reject(STALE_REACTION);
          deferreds.delete(batch);
        } else {
          for (const d2 of deferreds.values()) {
            d2.reject(STALE_REACTION);
          }
          deferreds.clear();
        }
        deferreds.set(batch, d);
      }
      const handler = (value, error = void 0) => {
        if (decrement_pending) {
          var skip = error === STALE_REACTION;
          decrement_pending(skip);
        }
        if (error === STALE_REACTION || (effect2.f & DESTROYED) !== 0) {
          return;
        }
        batch.activate();
        if (error) {
          signal.f |= ERROR_VALUE;
          internal_set(signal, error);
        } else {
          if ((signal.f & ERROR_VALUE) !== 0) {
            signal.f ^= ERROR_VALUE;
          }
          internal_set(signal, value);
          for (const [b, d2] of deferreds) {
            deferreds.delete(b);
            if (b === batch) break;
            d2.reject(STALE_REACTION);
          }
        }
        batch.deactivate();
      };
      d.promise.then(handler, (e) => handler(null, e || "unknown"));
    });
    teardown(() => {
      for (const d of deferreds.values()) {
        d.reject(STALE_REACTION);
      }
    });
    return new Promise((fulfil) => {
      function next(p) {
        function go() {
          if (p === promise) {
            fulfil(signal);
          } else {
            next(promise);
          }
        }
        p.then(go, go);
      }
      next(promise);
    });
  }
  // @__NO_SIDE_EFFECTS__
  function user_derived(fn) {
    const d = /* @__PURE__ */ derived(fn);
    push_reaction_value(d);
    return d;
  }
  // @__NO_SIDE_EFFECTS__
  function derived_safe_equal(fn) {
    const signal = /* @__PURE__ */ derived(fn);
    signal.equals = safe_equals;
    return signal;
  }
  function destroy_derived_effects(derived2) {
    var effects = derived2.effects;
    if (effects !== null) {
      derived2.effects = null;
      for (var i = 0; i < effects.length; i += 1) {
        destroy_effect(
          /** @type {Effect} */
          effects[i]
        );
      }
    }
  }
  function execute_derived(derived2) {
    var value;
    var prev_active_effect = active_effect;
    var parent = derived2.parent;
    if (!is_destroying_effect && parent !== null && (parent.f & (DESTROYED | INERT)) !== 0) {
      derived_inert();
      return derived2.v;
    }
    set_active_effect(parent);
    {
      try {
        derived2.f &= ~WAS_MARKED;
        destroy_derived_effects(derived2);
        value = update_reaction(derived2);
      } finally {
        set_active_effect(prev_active_effect);
      }
    }
    return value;
  }
  function update_derived(derived2) {
    var value = execute_derived(derived2);
    if (!derived2.equals(value)) {
      derived2.wv = increment_write_version();
      if (!(current_batch == null ? void 0 : current_batch.is_fork) || derived2.deps === null) {
        if (current_batch !== null) {
          current_batch.capture(derived2, value, true);
        } else {
          derived2.v = value;
        }
        if (derived2.deps === null) {
          set_signal_status(derived2, CLEAN);
          return;
        }
      }
    }
    if (is_destroying_effect) {
      return;
    }
    if (batch_values !== null) {
      if (effect_tracking() || (current_batch == null ? void 0 : current_batch.is_fork)) {
        batch_values.set(derived2, value);
      }
    } else {
      update_derived_status(derived2);
    }
  }
  function freeze_derived_effects(derived2) {
    var _a2, _b2;
    if (derived2.effects === null) return;
    for (const e of derived2.effects) {
      if (e.teardown || e.ac) {
        (_a2 = e.teardown) == null ? void 0 : _a2.call(e);
        (_b2 = e.ac) == null ? void 0 : _b2.abort(STALE_REACTION);
        e.teardown = noop;
        e.ac = null;
        remove_reactions(e, 0);
        destroy_effect_children(e);
      }
    }
  }
  function unfreeze_derived_effects(derived2) {
    if (derived2.effects === null) return;
    for (const e of derived2.effects) {
      if (e.teardown) {
        update_effect(e);
      }
    }
  }
  let eager_effects = /* @__PURE__ */ new Set();
  const old_values = /* @__PURE__ */ new Map();
  let eager_effects_deferred = false;
  function source(v, stack) {
    var signal = {
      f: 0,
      // TODO ideally we could skip this altogether, but it causes type errors
      v,
      reactions: null,
      equals,
      rv: 0,
      wv: 0
    };
    return signal;
  }
  // @__NO_SIDE_EFFECTS__
  function state(v, stack) {
    const s = source(v);
    push_reaction_value(s);
    return s;
  }
  // @__NO_SIDE_EFFECTS__
  function mutable_source(initial_value, immutable = false, trackable = true) {
    const s = source(initial_value);
    if (!immutable) {
      s.equals = safe_equals;
    }
    return s;
  }
  function set(source2, value, should_proxy = false) {
    if (active_reaction !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
    // to ensure we error if state is set inside an inspect effect
    (!untracking || (active_reaction.f & EAGER_EFFECT) !== 0) && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT | ASYNC | EAGER_EFFECT)) !== 0 && (current_sources === null || !includes.call(current_sources, source2))) {
      state_unsafe_mutation();
    }
    let new_value = should_proxy ? proxy(value) : value;
    return internal_set(source2, new_value, legacy_updates);
  }
  function internal_set(source2, value, updated_during_traversal = null) {
    if (!source2.equals(value)) {
      old_values.set(source2, is_destroying_effect ? value : source2.v);
      var batch = Batch.ensure();
      batch.capture(source2, value);
      if ((source2.f & DERIVED) !== 0) {
        const derived2 = (
          /** @type {Derived} */
          source2
        );
        if ((source2.f & DIRTY) !== 0) {
          execute_derived(derived2);
        }
        if (batch_values === null) {
          update_derived_status(derived2);
        }
      }
      source2.wv = increment_write_version();
      mark_reactions(source2, DIRTY, updated_during_traversal);
      if (active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
        if (untracked_writes === null) {
          set_untracked_writes([source2]);
        } else {
          untracked_writes.push(source2);
        }
      }
      if (!batch.is_fork && eager_effects.size > 0 && !eager_effects_deferred) {
        flush_eager_effects();
      }
    }
    return value;
  }
  function flush_eager_effects() {
    eager_effects_deferred = false;
    for (const effect2 of eager_effects) {
      if ((effect2.f & CLEAN) !== 0) {
        set_signal_status(effect2, MAYBE_DIRTY);
      }
      if (is_dirty(effect2)) {
        update_effect(effect2);
      }
    }
    eager_effects.clear();
  }
  function increment(source2) {
    set(source2, source2.v + 1);
  }
  function mark_reactions(signal, status, updated_during_traversal) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    var length = reactions.length;
    for (var i = 0; i < length; i++) {
      var reaction = reactions[i];
      var flags2 = reaction.f;
      var not_dirty = (flags2 & DIRTY) === 0;
      if (not_dirty) {
        set_signal_status(reaction, status);
      }
      if ((flags2 & DERIVED) !== 0) {
        var derived2 = (
          /** @type {Derived} */
          reaction
        );
        batch_values == null ? void 0 : batch_values.delete(derived2);
        if ((flags2 & WAS_MARKED) === 0) {
          if (flags2 & CONNECTED) {
            reaction.f |= WAS_MARKED;
          }
          mark_reactions(derived2, MAYBE_DIRTY, updated_during_traversal);
        }
      } else if (not_dirty) {
        var effect2 = (
          /** @type {Effect} */
          reaction
        );
        if ((flags2 & BLOCK_EFFECT) !== 0 && eager_block_effects !== null) {
          eager_block_effects.add(effect2);
        }
        if (updated_during_traversal !== null) {
          updated_during_traversal.push(effect2);
        } else {
          schedule_effect(effect2);
        }
      }
    }
  }
  function proxy(value) {
    if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
      return value;
    }
    const prototype = get_prototype_of(value);
    if (prototype !== object_prototype && prototype !== array_prototype) {
      return value;
    }
    var sources = /* @__PURE__ */ new Map();
    var is_proxied_array = is_array(value);
    var version = /* @__PURE__ */ state(0);
    var parent_version = update_version;
    var with_parent = (fn) => {
      if (update_version === parent_version) {
        return fn();
      }
      var reaction = active_reaction;
      var version2 = update_version;
      set_active_reaction(null);
      set_update_version(parent_version);
      var result = fn();
      set_active_reaction(reaction);
      set_update_version(version2);
      return result;
    };
    if (is_proxied_array) {
      sources.set("length", /* @__PURE__ */ state(
        /** @type {any[]} */
        value.length
      ));
    }
    return new Proxy(
      /** @type {any} */
      value,
      {
        defineProperty(_, prop2, descriptor) {
          if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
            state_descriptors_fixed();
          }
          var s = sources.get(prop2);
          if (s === void 0) {
            with_parent(() => {
              var s2 = /* @__PURE__ */ state(descriptor.value);
              sources.set(prop2, s2);
              return s2;
            });
          } else {
            set(s, descriptor.value, true);
          }
          return true;
        },
        deleteProperty(target, prop2) {
          var s = sources.get(prop2);
          if (s === void 0) {
            if (prop2 in target) {
              const s2 = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
              sources.set(prop2, s2);
              increment(version);
            }
          } else {
            set(s, UNINITIALIZED);
            increment(version);
          }
          return true;
        },
        get(target, prop2, receiver) {
          var _a2;
          if (prop2 === STATE_SYMBOL) {
            return value;
          }
          var s = sources.get(prop2);
          var exists = prop2 in target;
          if (s === void 0 && (!exists || ((_a2 = get_descriptor(target, prop2)) == null ? void 0 : _a2.writable))) {
            s = with_parent(() => {
              var p = proxy(exists ? target[prop2] : UNINITIALIZED);
              var s2 = /* @__PURE__ */ state(p);
              return s2;
            });
            sources.set(prop2, s);
          }
          if (s !== void 0) {
            var v = get(s);
            return v === UNINITIALIZED ? void 0 : v;
          }
          return Reflect.get(target, prop2, receiver);
        },
        getOwnPropertyDescriptor(target, prop2) {
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          if (descriptor && "value" in descriptor) {
            var s = sources.get(prop2);
            if (s) descriptor.value = get(s);
          } else if (descriptor === void 0) {
            var source2 = sources.get(prop2);
            var value2 = source2 == null ? void 0 : source2.v;
            if (source2 !== void 0 && value2 !== UNINITIALIZED) {
              return {
                enumerable: true,
                configurable: true,
                value: value2,
                writable: true
              };
            }
          }
          return descriptor;
        },
        has(target, prop2) {
          var _a2;
          if (prop2 === STATE_SYMBOL) {
            return true;
          }
          var s = sources.get(prop2);
          var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
          if (s !== void 0 || active_effect !== null && (!has || ((_a2 = get_descriptor(target, prop2)) == null ? void 0 : _a2.writable))) {
            if (s === void 0) {
              s = with_parent(() => {
                var p = has ? proxy(target[prop2]) : UNINITIALIZED;
                var s2 = /* @__PURE__ */ state(p);
                return s2;
              });
              sources.set(prop2, s);
            }
            var value2 = get(s);
            if (value2 === UNINITIALIZED) {
              return false;
            }
          }
          return has;
        },
        set(target, prop2, value2, receiver) {
          var _a2;
          var s = sources.get(prop2);
          var has = prop2 in target;
          if (is_proxied_array && prop2 === "length") {
            for (var i = value2; i < /** @type {Source<number>} */
            s.v; i += 1) {
              var other_s = sources.get(i + "");
              if (other_s !== void 0) {
                set(other_s, UNINITIALIZED);
              } else if (i in target) {
                other_s = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
                sources.set(i + "", other_s);
              }
            }
          }
          if (s === void 0) {
            if (!has || ((_a2 = get_descriptor(target, prop2)) == null ? void 0 : _a2.writable)) {
              s = with_parent(() => /* @__PURE__ */ state(void 0));
              set(s, proxy(value2));
              sources.set(prop2, s);
            }
          } else {
            has = s.v !== UNINITIALIZED;
            var p = with_parent(() => proxy(value2));
            set(s, p);
          }
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          if (descriptor == null ? void 0 : descriptor.set) {
            descriptor.set.call(receiver, value2);
          }
          if (!has) {
            if (is_proxied_array && typeof prop2 === "string") {
              var ls = (
                /** @type {Source<number>} */
                sources.get("length")
              );
              var n = Number(prop2);
              if (Number.isInteger(n) && n >= ls.v) {
                set(ls, n + 1);
              }
            }
            increment(version);
          }
          return true;
        },
        ownKeys(target) {
          get(version);
          var own_keys = Reflect.ownKeys(target).filter((key2) => {
            var source3 = sources.get(key2);
            return source3 === void 0 || source3.v !== UNINITIALIZED;
          });
          for (var [key, source2] of sources) {
            if (source2.v !== UNINITIALIZED && !(key in target)) {
              own_keys.push(key);
            }
          }
          return own_keys;
        },
        setPrototypeOf() {
          state_prototype_fixed();
        }
      }
    );
  }
  var $window;
  var is_firefox;
  var first_child_getter;
  var next_sibling_getter;
  function init_operations() {
    if ($window !== void 0) {
      return;
    }
    $window = window;
    is_firefox = /Firefox/.test(navigator.userAgent);
    var element_prototype = Element.prototype;
    var node_prototype = Node.prototype;
    var text_prototype = Text.prototype;
    first_child_getter = get_descriptor(node_prototype, "firstChild").get;
    next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
    if (is_extensible(element_prototype)) {
      element_prototype.__click = void 0;
      element_prototype.__className = void 0;
      element_prototype.__attributes = null;
      element_prototype.__style = void 0;
      element_prototype.__e = void 0;
    }
    if (is_extensible(text_prototype)) {
      text_prototype.__t = void 0;
    }
  }
  function create_text(value = "") {
    return document.createTextNode(value);
  }
  // @__NO_SIDE_EFFECTS__
  function get_first_child(node) {
    return (
      /** @type {TemplateNode | null} */
      first_child_getter.call(node)
    );
  }
  // @__NO_SIDE_EFFECTS__
  function get_next_sibling(node) {
    return (
      /** @type {TemplateNode | null} */
      next_sibling_getter.call(node)
    );
  }
  function child(node, is_text) {
    {
      return /* @__PURE__ */ get_first_child(node);
    }
  }
  function sibling(node, count = 1, is_text = false) {
    let next_sibling = node;
    while (count--) {
      next_sibling = /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(next_sibling);
    }
    {
      return next_sibling;
    }
  }
  function clear_text_content(node) {
    node.textContent = "";
  }
  function should_defer_append() {
    return false;
  }
  function create_element(tag, namespace, is) {
    let options = void 0;
    return (
      /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
      document.createElementNS(NAMESPACE_HTML, tag, options)
    );
  }
  function without_reactive_context(fn) {
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      return fn();
    } finally {
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  function validate_effect(rune) {
    if (active_effect === null) {
      if (active_reaction === null) {
        effect_orphan();
      }
      effect_in_unowned_derived();
    }
    if (is_destroying_effect) {
      effect_in_teardown();
    }
  }
  function push_effect(effect2, parent_effect) {
    var parent_last = parent_effect.last;
    if (parent_last === null) {
      parent_effect.last = parent_effect.first = effect2;
    } else {
      parent_last.next = effect2;
      effect2.prev = parent_last;
      parent_effect.last = effect2;
    }
  }
  function create_effect(type, fn) {
    var parent = active_effect;
    if (parent !== null && (parent.f & INERT) !== 0) {
      type |= INERT;
    }
    var effect2 = {
      ctx: component_context,
      deps: null,
      nodes: null,
      f: type | DIRTY | CONNECTED,
      first: null,
      fn,
      last: null,
      next: null,
      parent,
      b: parent && parent.b,
      prev: null,
      teardown: null,
      wv: 0,
      ac: null
    };
    current_batch == null ? void 0 : current_batch.register_created_effect(effect2);
    var e = effect2;
    if ((type & EFFECT) !== 0) {
      if (collected_effects !== null) {
        collected_effects.push(effect2);
      } else {
        Batch.ensure().schedule(effect2);
      }
    } else if (fn !== null) {
      try {
        update_effect(effect2);
      } catch (e2) {
        destroy_effect(effect2);
        throw e2;
      }
      if (e.deps === null && e.teardown === null && e.nodes === null && e.first === e.last && // either `null`, or a singular child
      (e.f & EFFECT_PRESERVED) === 0) {
        e = e.first;
        if ((type & BLOCK_EFFECT) !== 0 && (type & EFFECT_TRANSPARENT) !== 0 && e !== null) {
          e.f |= EFFECT_TRANSPARENT;
        }
      }
    }
    if (e !== null) {
      e.parent = parent;
      if (parent !== null) {
        push_effect(e, parent);
      }
      if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0 && (type & ROOT_EFFECT) === 0) {
        var derived2 = (
          /** @type {Derived} */
          active_reaction
        );
        (derived2.effects ?? (derived2.effects = [])).push(e);
      }
    }
    return effect2;
  }
  function effect_tracking() {
    return active_reaction !== null && !untracking;
  }
  function teardown(fn) {
    const effect2 = create_effect(RENDER_EFFECT, null);
    set_signal_status(effect2, CLEAN);
    effect2.teardown = fn;
    return effect2;
  }
  function user_effect(fn) {
    validate_effect();
    var flags2 = (
      /** @type {Effect} */
      active_effect.f
    );
    var defer = !active_reaction && (flags2 & BRANCH_EFFECT) !== 0 && (flags2 & REACTION_RAN) === 0;
    if (defer) {
      var context = (
        /** @type {ComponentContext} */
        component_context
      );
      (context.e ?? (context.e = [])).push(fn);
    } else {
      return create_user_effect(fn);
    }
  }
  function create_user_effect(fn) {
    return create_effect(EFFECT | USER_EFFECT, fn);
  }
  function component_root(fn) {
    Batch.ensure();
    const effect2 = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn);
    return (options = {}) => {
      return new Promise((fulfil) => {
        if (options.outro) {
          pause_effect(effect2, () => {
            destroy_effect(effect2);
            fulfil(void 0);
          });
        } else {
          destroy_effect(effect2);
          fulfil(void 0);
        }
      });
    };
  }
  function effect(fn) {
    return create_effect(EFFECT, fn);
  }
  function async_effect(fn) {
    return create_effect(ASYNC | EFFECT_PRESERVED, fn);
  }
  function render_effect(fn, flags2 = 0) {
    return create_effect(RENDER_EFFECT | flags2, fn);
  }
  function template_effect(fn, sync = [], async = [], blockers = []) {
    flatten(blockers, sync, async, (values) => {
      create_effect(RENDER_EFFECT, () => fn(...values.map(get)));
    });
  }
  function block(fn, flags2 = 0) {
    var effect2 = create_effect(BLOCK_EFFECT | flags2, fn);
    return effect2;
  }
  function branch(fn) {
    return create_effect(BRANCH_EFFECT | EFFECT_PRESERVED, fn);
  }
  function execute_effect_teardown(effect2) {
    var teardown2 = effect2.teardown;
    if (teardown2 !== null) {
      const previously_destroying_effect = is_destroying_effect;
      const previous_reaction = active_reaction;
      set_is_destroying_effect(true);
      set_active_reaction(null);
      try {
        teardown2.call(null);
      } finally {
        set_is_destroying_effect(previously_destroying_effect);
        set_active_reaction(previous_reaction);
      }
    }
  }
  function destroy_effect_children(signal, remove_dom = false) {
    var effect2 = signal.first;
    signal.first = signal.last = null;
    while (effect2 !== null) {
      const controller = effect2.ac;
      if (controller !== null) {
        without_reactive_context(() => {
          controller.abort(STALE_REACTION);
        });
      }
      var next = effect2.next;
      if ((effect2.f & ROOT_EFFECT) !== 0) {
        effect2.parent = null;
      } else {
        destroy_effect(effect2, remove_dom);
      }
      effect2 = next;
    }
  }
  function destroy_block_effect_children(signal) {
    var effect2 = signal.first;
    while (effect2 !== null) {
      var next = effect2.next;
      if ((effect2.f & BRANCH_EFFECT) === 0) {
        destroy_effect(effect2);
      }
      effect2 = next;
    }
  }
  function destroy_effect(effect2, remove_dom = true) {
    var removed = false;
    if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes !== null && effect2.nodes.end !== null) {
      remove_effect_dom(
        effect2.nodes.start,
        /** @type {TemplateNode} */
        effect2.nodes.end
      );
      removed = true;
    }
    set_signal_status(effect2, DESTROYING);
    destroy_effect_children(effect2, remove_dom && !removed);
    remove_reactions(effect2, 0);
    var transitions = effect2.nodes && effect2.nodes.t;
    if (transitions !== null) {
      for (const transition of transitions) {
        transition.stop();
      }
    }
    execute_effect_teardown(effect2);
    effect2.f ^= DESTROYING;
    effect2.f |= DESTROYED;
    var parent = effect2.parent;
    if (parent !== null && parent.first !== null) {
      unlink_effect(effect2);
    }
    effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes = effect2.ac = effect2.b = null;
  }
  function remove_effect_dom(node, end) {
    while (node !== null) {
      var next = node === end ? null : /* @__PURE__ */ get_next_sibling(node);
      node.remove();
      node = next;
    }
  }
  function unlink_effect(effect2) {
    var parent = effect2.parent;
    var prev = effect2.prev;
    var next = effect2.next;
    if (prev !== null) prev.next = next;
    if (next !== null) next.prev = prev;
    if (parent !== null) {
      if (parent.first === effect2) parent.first = next;
      if (parent.last === effect2) parent.last = prev;
    }
  }
  function pause_effect(effect2, callback, destroy = true) {
    var transitions = [];
    pause_children(effect2, transitions, true);
    var fn = () => {
      if (destroy) destroy_effect(effect2);
      if (callback) callback();
    };
    var remaining = transitions.length;
    if (remaining > 0) {
      var check = () => --remaining || fn();
      for (var transition of transitions) {
        transition.out(check);
      }
    } else {
      fn();
    }
  }
  function pause_children(effect2, transitions, local) {
    if ((effect2.f & INERT) !== 0) return;
    effect2.f ^= INERT;
    var t = effect2.nodes && effect2.nodes.t;
    if (t !== null) {
      for (const transition of t) {
        if (transition.is_global || local) {
          transitions.push(transition);
        }
      }
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      if ((child2.f & ROOT_EFFECT) === 0) {
        var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (child2.f & BRANCH_EFFECT) !== 0 && (effect2.f & BLOCK_EFFECT) !== 0;
        pause_children(child2, transitions, transparent ? local : false);
      }
      child2 = sibling2;
    }
  }
  function resume_effect(effect2) {
    resume_children(effect2, true);
  }
  function resume_children(effect2, local) {
    if ((effect2.f & INERT) === 0) return;
    effect2.f ^= INERT;
    if ((effect2.f & CLEAN) === 0) {
      set_signal_status(effect2, DIRTY);
      Batch.ensure().schedule(effect2);
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
      resume_children(child2, transparent ? local : false);
      child2 = sibling2;
    }
    var t = effect2.nodes && effect2.nodes.t;
    if (t !== null) {
      for (const transition of t) {
        if (transition.is_global || local) {
          transition.in();
        }
      }
    }
  }
  function move_effect(effect2, fragment) {
    if (!effect2.nodes) return;
    var node = effect2.nodes.start;
    var end = effect2.nodes.end;
    while (node !== null) {
      var next = node === end ? null : /* @__PURE__ */ get_next_sibling(node);
      fragment.append(node);
      node = next;
    }
  }
  let is_updating_effect = false;
  let is_destroying_effect = false;
  function set_is_destroying_effect(value) {
    is_destroying_effect = value;
  }
  let active_reaction = null;
  let untracking = false;
  function set_active_reaction(reaction) {
    active_reaction = reaction;
  }
  let active_effect = null;
  function set_active_effect(effect2) {
    active_effect = effect2;
  }
  let current_sources = null;
  function push_reaction_value(value) {
    if (active_reaction !== null && true) {
      if (current_sources === null) {
        current_sources = [value];
      } else {
        current_sources.push(value);
      }
    }
  }
  let new_deps = null;
  let skipped_deps = 0;
  let untracked_writes = null;
  function set_untracked_writes(value) {
    untracked_writes = value;
  }
  let write_version = 1;
  let read_version = 0;
  let update_version = read_version;
  function set_update_version(value) {
    update_version = value;
  }
  function increment_write_version() {
    return ++write_version;
  }
  function is_dirty(reaction) {
    var flags2 = reaction.f;
    if ((flags2 & DIRTY) !== 0) {
      return true;
    }
    if (flags2 & DERIVED) {
      reaction.f &= ~WAS_MARKED;
    }
    if ((flags2 & MAYBE_DIRTY) !== 0) {
      var dependencies = (
        /** @type {Value[]} */
        reaction.deps
      );
      var length = dependencies.length;
      for (var i = 0; i < length; i++) {
        var dependency = dependencies[i];
        if (is_dirty(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (dependency.wv > reaction.wv) {
          return true;
        }
      }
      if ((flags2 & CONNECTED) !== 0 && // During time traveling we don't want to reset the status so that
      // traversal of the graph in the other batches still happens
      batch_values === null) {
        set_signal_status(reaction, CLEAN);
      }
    }
    return false;
  }
  function schedule_possible_effect_self_invalidation(signal, effect2, root2 = true) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    if (current_sources !== null && includes.call(current_sources, signal)) {
      return;
    }
    for (var i = 0; i < reactions.length; i++) {
      var reaction = reactions[i];
      if ((reaction.f & DERIVED) !== 0) {
        schedule_possible_effect_self_invalidation(
          /** @type {Derived} */
          reaction,
          effect2,
          false
        );
      } else if (effect2 === reaction) {
        if (root2) {
          set_signal_status(reaction, DIRTY);
        } else if ((reaction.f & CLEAN) !== 0) {
          set_signal_status(reaction, MAYBE_DIRTY);
        }
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
  function update_reaction(reaction) {
    var _a2;
    var previous_deps = new_deps;
    var previous_skipped_deps = skipped_deps;
    var previous_untracked_writes = untracked_writes;
    var previous_reaction = active_reaction;
    var previous_sources = current_sources;
    var previous_component_context = component_context;
    var previous_untracking = untracking;
    var previous_update_version = update_version;
    var flags2 = reaction.f;
    new_deps = /** @type {null | Value[]} */
    null;
    skipped_deps = 0;
    untracked_writes = null;
    active_reaction = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
    current_sources = null;
    set_component_context(reaction.ctx);
    untracking = false;
    update_version = ++read_version;
    if (reaction.ac !== null) {
      without_reactive_context(() => {
        reaction.ac.abort(STALE_REACTION);
      });
      reaction.ac = null;
    }
    try {
      reaction.f |= REACTION_IS_UPDATING;
      var fn = (
        /** @type {Function} */
        reaction.fn
      );
      var result = fn();
      reaction.f |= REACTION_RAN;
      var deps = reaction.deps;
      var is_fork = current_batch == null ? void 0 : current_batch.is_fork;
      if (new_deps !== null) {
        var i;
        if (!is_fork) {
          remove_reactions(reaction, skipped_deps);
        }
        if (deps !== null && skipped_deps > 0) {
          deps.length = skipped_deps + new_deps.length;
          for (i = 0; i < new_deps.length; i++) {
            deps[skipped_deps + i] = new_deps[i];
          }
        } else {
          reaction.deps = deps = new_deps;
        }
        if (effect_tracking() && (reaction.f & CONNECTED) !== 0) {
          for (i = skipped_deps; i < deps.length; i++) {
            ((_a2 = deps[i]).reactions ?? (_a2.reactions = [])).push(reaction);
          }
        }
      } else if (!is_fork && deps !== null && skipped_deps < deps.length) {
        remove_reactions(reaction, skipped_deps);
        deps.length = skipped_deps;
      }
      if (untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
        for (i = 0; i < /** @type {Source[]} */
        untracked_writes.length; i++) {
          schedule_possible_effect_self_invalidation(
            untracked_writes[i],
            /** @type {Effect} */
            reaction
          );
        }
      }
      if (previous_reaction !== null && previous_reaction !== reaction) {
        read_version++;
        if (previous_reaction.deps !== null) {
          for (let i2 = 0; i2 < previous_skipped_deps; i2 += 1) {
            previous_reaction.deps[i2].rv = read_version;
          }
        }
        if (previous_deps !== null) {
          for (const dep of previous_deps) {
            dep.rv = read_version;
          }
        }
        if (untracked_writes !== null) {
          if (previous_untracked_writes === null) {
            previous_untracked_writes = untracked_writes;
          } else {
            previous_untracked_writes.push(.../** @type {Source[]} */
            untracked_writes);
          }
        }
      }
      if ((reaction.f & ERROR_VALUE) !== 0) {
        reaction.f ^= ERROR_VALUE;
      }
      return result;
    } catch (error) {
      return handle_error(error);
    } finally {
      reaction.f ^= REACTION_IS_UPDATING;
      new_deps = previous_deps;
      skipped_deps = previous_skipped_deps;
      untracked_writes = previous_untracked_writes;
      active_reaction = previous_reaction;
      current_sources = previous_sources;
      set_component_context(previous_component_context);
      untracking = previous_untracking;
      update_version = previous_update_version;
    }
  }
  function remove_reaction(signal, dependency) {
    let reactions = dependency.reactions;
    if (reactions !== null) {
      var index2 = index_of.call(reactions, signal);
      if (index2 !== -1) {
        var new_length = reactions.length - 1;
        if (new_length === 0) {
          reactions = dependency.reactions = null;
        } else {
          reactions[index2] = reactions[new_length];
          reactions.pop();
        }
      }
    }
    if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
    // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
    // allows us to skip the expensive work of disconnecting and immediately reconnecting it
    (new_deps === null || !includes.call(new_deps, dependency))) {
      var derived2 = (
        /** @type {Derived} */
        dependency
      );
      if ((derived2.f & CONNECTED) !== 0) {
        derived2.f ^= CONNECTED;
        derived2.f &= ~WAS_MARKED;
      }
      if (derived2.v !== UNINITIALIZED) {
        update_derived_status(derived2);
      }
      freeze_derived_effects(derived2);
      remove_reactions(derived2, 0);
    }
  }
  function remove_reactions(signal, start_index) {
    var dependencies = signal.deps;
    if (dependencies === null) return;
    for (var i = start_index; i < dependencies.length; i++) {
      remove_reaction(signal, dependencies[i]);
    }
  }
  function update_effect(effect2) {
    var flags2 = effect2.f;
    if ((flags2 & DESTROYED) !== 0) {
      return;
    }
    set_signal_status(effect2, CLEAN);
    var previous_effect = active_effect;
    var was_updating_effect = is_updating_effect;
    active_effect = effect2;
    is_updating_effect = true;
    try {
      if ((flags2 & (BLOCK_EFFECT | MANAGED_EFFECT)) !== 0) {
        destroy_block_effect_children(effect2);
      } else {
        destroy_effect_children(effect2);
      }
      execute_effect_teardown(effect2);
      var teardown2 = update_reaction(effect2);
      effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
      effect2.wv = write_version;
    } finally {
      is_updating_effect = was_updating_effect;
      active_effect = previous_effect;
    }
  }
  function get(signal) {
    var flags2 = signal.f;
    var is_derived = (flags2 & DERIVED) !== 0;
    if (active_reaction !== null && !untracking) {
      var destroyed = active_effect !== null && (active_effect.f & DESTROYED) !== 0;
      if (!destroyed && (current_sources === null || !includes.call(current_sources, signal))) {
        var deps = active_reaction.deps;
        if ((active_reaction.f & REACTION_IS_UPDATING) !== 0) {
          if (signal.rv < read_version) {
            signal.rv = read_version;
            if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
              skipped_deps++;
            } else if (new_deps === null) {
              new_deps = [signal];
            } else {
              new_deps.push(signal);
            }
          }
        } else {
          (active_reaction.deps ?? (active_reaction.deps = [])).push(signal);
          var reactions = signal.reactions;
          if (reactions === null) {
            signal.reactions = [active_reaction];
          } else if (!includes.call(reactions, active_reaction)) {
            reactions.push(active_reaction);
          }
        }
      }
    }
    if (is_destroying_effect && old_values.has(signal)) {
      return old_values.get(signal);
    }
    if (is_derived) {
      var derived2 = (
        /** @type {Derived} */
        signal
      );
      if (is_destroying_effect) {
        var value = derived2.v;
        if ((derived2.f & CLEAN) === 0 && derived2.reactions !== null || depends_on_old_values(derived2)) {
          value = execute_derived(derived2);
        }
        old_values.set(derived2, value);
        return value;
      }
      var should_connect = (derived2.f & CONNECTED) === 0 && !untracking && active_reaction !== null && (is_updating_effect || (active_reaction.f & CONNECTED) !== 0);
      var is_new = (derived2.f & REACTION_RAN) === 0;
      if (is_dirty(derived2)) {
        if (should_connect) {
          derived2.f |= CONNECTED;
        }
        update_derived(derived2);
      }
      if (should_connect && !is_new) {
        unfreeze_derived_effects(derived2);
        reconnect(derived2);
      }
    }
    if (batch_values == null ? void 0 : batch_values.has(signal)) {
      return batch_values.get(signal);
    }
    if ((signal.f & ERROR_VALUE) !== 0) {
      throw signal.v;
    }
    return signal.v;
  }
  function reconnect(derived2) {
    derived2.f |= CONNECTED;
    if (derived2.deps === null) return;
    for (const dep of derived2.deps) {
      (dep.reactions ?? (dep.reactions = [])).push(derived2);
      if ((dep.f & DERIVED) !== 0 && (dep.f & CONNECTED) === 0) {
        unfreeze_derived_effects(
          /** @type {Derived} */
          dep
        );
        reconnect(
          /** @type {Derived} */
          dep
        );
      }
    }
  }
  function depends_on_old_values(derived2) {
    if (derived2.v === UNINITIALIZED) return true;
    if (derived2.deps === null) return false;
    for (const dep of derived2.deps) {
      if (old_values.has(dep)) {
        return true;
      }
      if ((dep.f & DERIVED) !== 0 && depends_on_old_values(
        /** @type {Derived} */
        dep
      )) {
        return true;
      }
    }
    return false;
  }
  function untrack(fn) {
    var previous_untracking = untracking;
    try {
      untracking = true;
      return fn();
    } finally {
      untracking = previous_untracking;
    }
  }
  const event_symbol = Symbol("events");
  const all_registered_events = /* @__PURE__ */ new Set();
  const root_event_handles = /* @__PURE__ */ new Set();
  function delegated(event_name, element, handler) {
    (element[event_symbol] ?? (element[event_symbol] = {}))[event_name] = handler;
  }
  function delegate(events) {
    for (var i = 0; i < events.length; i++) {
      all_registered_events.add(events[i]);
    }
    for (var fn of root_event_handles) {
      fn(events);
    }
  }
  let last_propagated_event = null;
  function handle_event_propagation(event) {
    var _a2, _b2;
    var handler_element = this;
    var owner_document = (
      /** @type {Node} */
      handler_element.ownerDocument
    );
    var event_name = event.type;
    var path = ((_a2 = event.composedPath) == null ? void 0 : _a2.call(event)) || [];
    var current_target = (
      /** @type {null | Element} */
      path[0] || event.target
    );
    last_propagated_event = event;
    var path_idx = 0;
    var handled_at = last_propagated_event === event && event[event_symbol];
    if (handled_at) {
      var at_idx = path.indexOf(handled_at);
      if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
      window)) {
        event[event_symbol] = handler_element;
        return;
      }
      var handler_idx = path.indexOf(handler_element);
      if (handler_idx === -1) {
        return;
      }
      if (at_idx <= handler_idx) {
        path_idx = at_idx;
      }
    }
    current_target = /** @type {Element} */
    path[path_idx] || event.target;
    if (current_target === handler_element) return;
    define_property(event, "currentTarget", {
      configurable: true,
      get() {
        return current_target || owner_document;
      }
    });
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      var throw_error;
      var other_errors = [];
      while (current_target !== null) {
        var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
        current_target.host || null;
        try {
          var delegated2 = (_b2 = current_target[event_symbol]) == null ? void 0 : _b2[event_name];
          if (delegated2 != null && (!/** @type {any} */
          current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          event.target === current_target)) {
            delegated2.call(current_target, event);
          }
        } catch (error) {
          if (throw_error) {
            other_errors.push(error);
          } else {
            throw_error = error;
          }
        }
        if (event.cancelBubble || parent_element === handler_element || parent_element === null) {
          break;
        }
        current_target = parent_element;
      }
      if (throw_error) {
        for (let error of other_errors) {
          queueMicrotask(() => {
            throw error;
          });
        }
        throw throw_error;
      }
    } finally {
      event[event_symbol] = handler_element;
      delete event.currentTarget;
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  const policy = (
    // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
    ((_a = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : _a.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
      /** @param {string} html */
      createHTML: (html) => {
        return html;
      }
    })
  );
  function create_trusted_html(html) {
    return (
      /** @type {string} */
      (policy == null ? void 0 : policy.createHTML(html)) ?? html
    );
  }
  function create_fragment_from_html(html) {
    var elem = create_element("template");
    elem.innerHTML = create_trusted_html(html.replaceAll("<!>", "<!---->"));
    return elem.content;
  }
  function assign_nodes(start, end) {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    if (effect2.nodes === null) {
      effect2.nodes = { start, end, a: null, t: null };
    }
  }
  // @__NO_SIDE_EFFECTS__
  function from_html(content, flags2) {
    var use_import_node = (flags2 & TEMPLATE_USE_IMPORT_NODE) !== 0;
    var node;
    var has_start = !content.startsWith("<!>");
    return () => {
      if (node === void 0) {
        node = create_fragment_from_html(has_start ? content : "<!>" + content);
        node = /** @type {TemplateNode} */
        /* @__PURE__ */ get_first_child(node);
      }
      var clone = (
        /** @type {TemplateNode} */
        use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true)
      );
      {
        assign_nodes(clone, clone);
      }
      return clone;
    };
  }
  // @__NO_SIDE_EFFECTS__
  function from_namespace(content, flags2, ns = "svg") {
    var has_start = !content.startsWith("<!>");
    var wrapped = `<${ns}>${has_start ? content : "<!>" + content}</${ns}>`;
    var node;
    return () => {
      if (!node) {
        var fragment = (
          /** @type {DocumentFragment} */
          create_fragment_from_html(wrapped)
        );
        var root2 = (
          /** @type {Element} */
          /* @__PURE__ */ get_first_child(fragment)
        );
        {
          node = /** @type {Element} */
          /* @__PURE__ */ get_first_child(root2);
        }
      }
      var clone = (
        /** @type {TemplateNode} */
        node.cloneNode(true)
      );
      {
        assign_nodes(clone, clone);
      }
      return clone;
    };
  }
  // @__NO_SIDE_EFFECTS__
  function from_svg(content, flags2) {
    return /* @__PURE__ */ from_namespace(content, flags2, "svg");
  }
  function text(value = "") {
    {
      var t = create_text(value + "");
      assign_nodes(t, t);
      return t;
    }
  }
  function append(anchor, dom) {
    if (anchor === null) {
      return;
    }
    anchor.before(
      /** @type {Node} */
      dom
    );
  }
  const PASSIVE_EVENTS = ["touchstart", "touchmove"];
  function is_passive_event(name) {
    return PASSIVE_EVENTS.includes(name);
  }
  function set_text(text2, value) {
    var str = value == null ? "" : typeof value === "object" ? `${value}` : value;
    if (str !== (text2.__t ?? (text2.__t = text2.nodeValue))) {
      text2.__t = str;
      text2.nodeValue = `${str}`;
    }
  }
  function mount(component, options) {
    return _mount(component, options);
  }
  const listeners = /* @__PURE__ */ new Map();
  function _mount(Component, { target, anchor, props = {}, events, context, intro = true, transformError }) {
    init_operations();
    var component = void 0;
    var unmount2 = component_root(() => {
      var anchor_node = anchor ?? target.appendChild(create_text());
      boundary(
        /** @type {TemplateNode} */
        anchor_node,
        {
          pending: () => {
          }
        },
        (anchor_node2) => {
          push({});
          var ctx = (
            /** @type {ComponentContext} */
            component_context
          );
          if (context) ctx.c = context;
          if (events) {
            props.$$events = events;
          }
          component = Component(anchor_node2, props) || {};
          pop();
        },
        transformError
      );
      var registered_events = /* @__PURE__ */ new Set();
      var event_handle = (events2) => {
        for (var i = 0; i < events2.length; i++) {
          var event_name = events2[i];
          if (registered_events.has(event_name)) continue;
          registered_events.add(event_name);
          var passive = is_passive_event(event_name);
          for (const node of [target, document]) {
            var counts = listeners.get(node);
            if (counts === void 0) {
              counts = /* @__PURE__ */ new Map();
              listeners.set(node, counts);
            }
            var count = counts.get(event_name);
            if (count === void 0) {
              node.addEventListener(event_name, handle_event_propagation, { passive });
              counts.set(event_name, 1);
            } else {
              counts.set(event_name, count + 1);
            }
          }
        }
      };
      event_handle(array_from(all_registered_events));
      root_event_handles.add(event_handle);
      return () => {
        var _a2;
        for (var event_name of registered_events) {
          for (const node of [target, document]) {
            var counts = (
              /** @type {Map<string, number>} */
              listeners.get(node)
            );
            var count = (
              /** @type {number} */
              counts.get(event_name)
            );
            if (--count == 0) {
              node.removeEventListener(event_name, handle_event_propagation);
              counts.delete(event_name);
              if (counts.size === 0) {
                listeners.delete(node);
              }
            } else {
              counts.set(event_name, count);
            }
          }
        }
        root_event_handles.delete(event_handle);
        if (anchor_node !== anchor) {
          (_a2 = anchor_node.parentNode) == null ? void 0 : _a2.removeChild(anchor_node);
        }
      };
    });
    mounted_components.set(component, unmount2);
    return component;
  }
  let mounted_components = /* @__PURE__ */ new WeakMap();
  function unmount(component, options) {
    const fn = mounted_components.get(component);
    if (fn) {
      mounted_components.delete(component);
      return fn(options);
    }
    return Promise.resolve();
  }
  class BranchManager {
    /**
     * @param {TemplateNode} anchor
     * @param {boolean} transition
     */
    constructor(anchor, transition = true) {
      /** @type {TemplateNode} */
      __publicField(this, "anchor");
      /** @type {Map<Batch, Key>} */
      __privateAdd(this, _batches, /* @__PURE__ */ new Map());
      /**
       * Map of keys to effects that are currently rendered in the DOM.
       * These effects are visible and actively part of the document tree.
       * Example:
       * ```
       * {#if condition}
       * 	foo
       * {:else}
       * 	bar
       * {/if}
       * ```
       * Can result in the entries `true->Effect` and `false->Effect`
       * @type {Map<Key, Effect>}
       */
      __privateAdd(this, _onscreen, /* @__PURE__ */ new Map());
      /**
       * Similar to #onscreen with respect to the keys, but contains branches that are not yet
       * in the DOM, because their insertion is deferred.
       * @type {Map<Key, Branch>}
       */
      __privateAdd(this, _offscreen, /* @__PURE__ */ new Map());
      /**
       * Keys of effects that are currently outroing
       * @type {Set<Key>}
       */
      __privateAdd(this, _outroing, /* @__PURE__ */ new Set());
      /**
       * Whether to pause (i.e. outro) on change, or destroy immediately.
       * This is necessary for `<svelte:element>`
       */
      __privateAdd(this, _transition, true);
      /**
       * @param {Batch} batch
       */
      __privateAdd(this, _commit, (batch) => {
        if (!__privateGet(this, _batches).has(batch)) return;
        var key = (
          /** @type {Key} */
          __privateGet(this, _batches).get(batch)
        );
        var onscreen = __privateGet(this, _onscreen).get(key);
        if (onscreen) {
          resume_effect(onscreen);
          __privateGet(this, _outroing).delete(key);
        } else {
          var offscreen = __privateGet(this, _offscreen).get(key);
          if (offscreen) {
            __privateGet(this, _onscreen).set(key, offscreen.effect);
            __privateGet(this, _offscreen).delete(key);
            offscreen.fragment.lastChild.remove();
            this.anchor.before(offscreen.fragment);
            onscreen = offscreen.effect;
          }
        }
        for (const [b, k] of __privateGet(this, _batches)) {
          __privateGet(this, _batches).delete(b);
          if (b === batch) {
            break;
          }
          const offscreen2 = __privateGet(this, _offscreen).get(k);
          if (offscreen2) {
            destroy_effect(offscreen2.effect);
            __privateGet(this, _offscreen).delete(k);
          }
        }
        for (const [k, effect2] of __privateGet(this, _onscreen)) {
          if (k === key || __privateGet(this, _outroing).has(k)) continue;
          const on_destroy = () => {
            const keys = Array.from(__privateGet(this, _batches).values());
            if (keys.includes(k)) {
              var fragment = document.createDocumentFragment();
              move_effect(effect2, fragment);
              fragment.append(create_text());
              __privateGet(this, _offscreen).set(k, { effect: effect2, fragment });
            } else {
              destroy_effect(effect2);
            }
            __privateGet(this, _outroing).delete(k);
            __privateGet(this, _onscreen).delete(k);
          };
          if (__privateGet(this, _transition) || !onscreen) {
            __privateGet(this, _outroing).add(k);
            pause_effect(effect2, on_destroy, false);
          } else {
            on_destroy();
          }
        }
      });
      /**
       * @param {Batch} batch
       */
      __privateAdd(this, _discard, (batch) => {
        __privateGet(this, _batches).delete(batch);
        const keys = Array.from(__privateGet(this, _batches).values());
        for (const [k, branch2] of __privateGet(this, _offscreen)) {
          if (!keys.includes(k)) {
            destroy_effect(branch2.effect);
            __privateGet(this, _offscreen).delete(k);
          }
        }
      });
      this.anchor = anchor;
      __privateSet(this, _transition, transition);
    }
    /**
     *
     * @param {any} key
     * @param {null | ((target: TemplateNode) => void)} fn
     */
    ensure(key, fn) {
      var batch = (
        /** @type {Batch} */
        current_batch
      );
      var defer = should_defer_append();
      if (fn && !__privateGet(this, _onscreen).has(key) && !__privateGet(this, _offscreen).has(key)) {
        if (defer) {
          var fragment = document.createDocumentFragment();
          var target = create_text();
          fragment.append(target);
          __privateGet(this, _offscreen).set(key, {
            effect: branch(() => fn(target)),
            fragment
          });
        } else {
          __privateGet(this, _onscreen).set(
            key,
            branch(() => fn(this.anchor))
          );
        }
      }
      __privateGet(this, _batches).set(batch, key);
      if (defer) {
        for (const [k, effect2] of __privateGet(this, _onscreen)) {
          if (k === key) {
            batch.unskip_effect(effect2);
          } else {
            batch.skip_effect(effect2);
          }
        }
        for (const [k, branch2] of __privateGet(this, _offscreen)) {
          if (k === key) {
            batch.unskip_effect(branch2.effect);
          } else {
            batch.skip_effect(branch2.effect);
          }
        }
        batch.oncommit(__privateGet(this, _commit));
        batch.ondiscard(__privateGet(this, _discard));
      } else {
        __privateGet(this, _commit).call(this, batch);
      }
    }
  }
  _batches = new WeakMap();
  _onscreen = new WeakMap();
  _offscreen = new WeakMap();
  _outroing = new WeakMap();
  _transition = new WeakMap();
  _commit = new WeakMap();
  _discard = new WeakMap();
  function snippet(node, get_snippet, ...args) {
    var branches = new BranchManager(node);
    block(() => {
      const snippet2 = get_snippet() ?? null;
      branches.ensure(snippet2, snippet2 && ((anchor) => snippet2(anchor, ...args)));
    }, EFFECT_TRANSPARENT);
  }
  function onMount(fn) {
    if (component_context === null) {
      lifecycle_outside_component();
    }
    {
      user_effect(() => {
        const cleanup = untrack(fn);
        if (typeof cleanup === "function") return (
          /** @type {() => void} */
          cleanup
        );
      });
    }
  }
  function if_block(node, fn, elseif = false) {
    var branches = new BranchManager(node);
    var flags2 = elseif ? EFFECT_TRANSPARENT : 0;
    function update_branch(key, fn2) {
      branches.ensure(key, fn2);
    }
    block(() => {
      var has_branch = false;
      fn((fn2, key = 0) => {
        has_branch = true;
        update_branch(key, fn2);
      });
      if (!has_branch) {
        update_branch(-1, null);
      }
    }, flags2);
  }
  function index(_, i) {
    return i;
  }
  function pause_effects(state2, to_destroy, controlled_anchor) {
    var transitions = [];
    var length = to_destroy.length;
    var group;
    var remaining = to_destroy.length;
    for (var i = 0; i < length; i++) {
      let effect2 = to_destroy[i];
      pause_effect(
        effect2,
        () => {
          if (group) {
            group.pending.delete(effect2);
            group.done.add(effect2);
            if (group.pending.size === 0) {
              var groups = (
                /** @type {Set<EachOutroGroup>} */
                state2.outrogroups
              );
              destroy_effects(state2, array_from(group.done));
              groups.delete(group);
              if (groups.size === 0) {
                state2.outrogroups = null;
              }
            }
          } else {
            remaining -= 1;
          }
        },
        false
      );
    }
    if (remaining === 0) {
      var fast_path = transitions.length === 0 && controlled_anchor !== null;
      if (fast_path) {
        var anchor = (
          /** @type {Element} */
          controlled_anchor
        );
        var parent_node = (
          /** @type {Element} */
          anchor.parentNode
        );
        clear_text_content(parent_node);
        parent_node.append(anchor);
        state2.items.clear();
      }
      destroy_effects(state2, to_destroy, !fast_path);
    } else {
      group = {
        pending: new Set(to_destroy),
        done: /* @__PURE__ */ new Set()
      };
      (state2.outrogroups ?? (state2.outrogroups = /* @__PURE__ */ new Set())).add(group);
    }
  }
  function destroy_effects(state2, to_destroy, remove_dom = true) {
    var preserved_effects;
    if (state2.pending.size > 0) {
      preserved_effects = /* @__PURE__ */ new Set();
      for (const keys of state2.pending.values()) {
        for (const key of keys) {
          preserved_effects.add(
            /** @type {EachItem} */
            state2.items.get(key).e
          );
        }
      }
    }
    for (var i = 0; i < to_destroy.length; i++) {
      var e = to_destroy[i];
      if (preserved_effects == null ? void 0 : preserved_effects.has(e)) {
        e.f |= EFFECT_OFFSCREEN;
        const fragment = document.createDocumentFragment();
        move_effect(e, fragment);
      } else {
        destroy_effect(to_destroy[i], remove_dom);
      }
    }
  }
  var offscreen_anchor;
  function each(node, flags2, get_collection, get_key, render_fn2, fallback_fn = null) {
    var anchor = node;
    var items = /* @__PURE__ */ new Map();
    {
      var parent_node = (
        /** @type {Element} */
        node
      );
      anchor = parent_node.appendChild(create_text());
    }
    var fallback = null;
    var each_array = /* @__PURE__ */ derived_safe_equal(() => {
      var collection = get_collection();
      return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
    });
    var array;
    var pending = /* @__PURE__ */ new Map();
    var first_run = true;
    function commit(batch) {
      if ((state2.effect.f & DESTROYED) !== 0) {
        return;
      }
      state2.pending.delete(batch);
      state2.fallback = fallback;
      reconcile(state2, array, anchor, flags2, get_key);
      if (fallback !== null) {
        if (array.length === 0) {
          if ((fallback.f & EFFECT_OFFSCREEN) === 0) {
            resume_effect(fallback);
          } else {
            fallback.f ^= EFFECT_OFFSCREEN;
            move(fallback, null, anchor);
          }
        } else {
          pause_effect(fallback, () => {
            fallback = null;
          });
        }
      }
    }
    function discard(batch) {
      state2.pending.delete(batch);
    }
    var effect2 = block(() => {
      array = /** @type {V[]} */
      get(each_array);
      var length = array.length;
      var keys = /* @__PURE__ */ new Set();
      var batch = (
        /** @type {Batch} */
        current_batch
      );
      var defer = should_defer_append();
      for (var index2 = 0; index2 < length; index2 += 1) {
        var value = array[index2];
        var key = get_key(value, index2);
        var item = first_run ? null : items.get(key);
        if (item) {
          if (item.v) internal_set(item.v, value);
          if (item.i) internal_set(item.i, index2);
          if (defer) {
            batch.unskip_effect(item.e);
          }
        } else {
          item = create_item(
            items,
            first_run ? anchor : offscreen_anchor ?? (offscreen_anchor = create_text()),
            value,
            key,
            index2,
            render_fn2,
            flags2,
            get_collection
          );
          if (!first_run) {
            item.e.f |= EFFECT_OFFSCREEN;
          }
          items.set(key, item);
        }
        keys.add(key);
      }
      if (length === 0 && fallback_fn && !fallback) {
        if (first_run) {
          fallback = branch(() => fallback_fn(anchor));
        } else {
          fallback = branch(() => fallback_fn(offscreen_anchor ?? (offscreen_anchor = create_text())));
          fallback.f |= EFFECT_OFFSCREEN;
        }
      }
      if (length > keys.size) {
        {
          each_key_duplicate();
        }
      }
      if (!first_run) {
        pending.set(batch, keys);
        if (defer) {
          for (const [key2, item2] of items) {
            if (!keys.has(key2)) {
              batch.skip_effect(item2.e);
            }
          }
          batch.oncommit(commit);
          batch.ondiscard(discard);
        } else {
          commit(batch);
        }
      }
      get(each_array);
    });
    var state2 = { effect: effect2, items, pending, outrogroups: null, fallback };
    first_run = false;
  }
  function skip_to_branch(effect2) {
    while (effect2 !== null && (effect2.f & BRANCH_EFFECT) === 0) {
      effect2 = effect2.next;
    }
    return effect2;
  }
  function reconcile(state2, array, anchor, flags2, get_key) {
    var _a2;
    var length = array.length;
    var items = state2.items;
    var current = skip_to_branch(state2.effect.first);
    var seen;
    var prev = null;
    var matched = [];
    var stashed = [];
    var value;
    var key;
    var effect2;
    var i;
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key = get_key(value, i);
      effect2 = /** @type {EachItem} */
      items.get(key).e;
      if (state2.outrogroups !== null) {
        for (const group of state2.outrogroups) {
          group.pending.delete(effect2);
          group.done.delete(effect2);
        }
      }
      if ((effect2.f & INERT) !== 0) {
        resume_effect(effect2);
      }
      if ((effect2.f & EFFECT_OFFSCREEN) !== 0) {
        effect2.f ^= EFFECT_OFFSCREEN;
        if (effect2 === current) {
          move(effect2, null, anchor);
        } else {
          var next = prev ? prev.next : current;
          if (effect2 === state2.effect.last) {
            state2.effect.last = effect2.prev;
          }
          if (effect2.prev) effect2.prev.next = effect2.next;
          if (effect2.next) effect2.next.prev = effect2.prev;
          link(state2, prev, effect2);
          link(state2, effect2, next);
          move(effect2, next, anchor);
          prev = effect2;
          matched = [];
          stashed = [];
          current = skip_to_branch(prev.next);
          continue;
        }
      }
      if (effect2 !== current) {
        if (seen !== void 0 && seen.has(effect2)) {
          if (matched.length < stashed.length) {
            var start = stashed[0];
            var j;
            prev = start.prev;
            var a = matched[0];
            var b = matched[matched.length - 1];
            for (j = 0; j < matched.length; j += 1) {
              move(matched[j], start, anchor);
            }
            for (j = 0; j < stashed.length; j += 1) {
              seen.delete(stashed[j]);
            }
            link(state2, a.prev, b.next);
            link(state2, prev, a);
            link(state2, b, start);
            current = start;
            prev = b;
            i -= 1;
            matched = [];
            stashed = [];
          } else {
            seen.delete(effect2);
            move(effect2, current, anchor);
            link(state2, effect2.prev, effect2.next);
            link(state2, effect2, prev === null ? state2.effect.first : prev.next);
            link(state2, prev, effect2);
            prev = effect2;
          }
          continue;
        }
        matched = [];
        stashed = [];
        while (current !== null && current !== effect2) {
          (seen ?? (seen = /* @__PURE__ */ new Set())).add(current);
          stashed.push(current);
          current = skip_to_branch(current.next);
        }
        if (current === null) {
          continue;
        }
      }
      if ((effect2.f & EFFECT_OFFSCREEN) === 0) {
        matched.push(effect2);
      }
      prev = effect2;
      current = skip_to_branch(effect2.next);
    }
    if (state2.outrogroups !== null) {
      for (const group of state2.outrogroups) {
        if (group.pending.size === 0) {
          destroy_effects(state2, array_from(group.done));
          (_a2 = state2.outrogroups) == null ? void 0 : _a2.delete(group);
        }
      }
      if (state2.outrogroups.size === 0) {
        state2.outrogroups = null;
      }
    }
    if (current !== null || seen !== void 0) {
      var to_destroy = [];
      if (seen !== void 0) {
        for (effect2 of seen) {
          if ((effect2.f & INERT) === 0) {
            to_destroy.push(effect2);
          }
        }
      }
      while (current !== null) {
        if ((current.f & INERT) === 0 && current !== state2.fallback) {
          to_destroy.push(current);
        }
        current = skip_to_branch(current.next);
      }
      var destroy_length = to_destroy.length;
      if (destroy_length > 0) {
        var controlled_anchor = length === 0 ? anchor : null;
        pause_effects(state2, to_destroy, controlled_anchor);
      }
    }
  }
  function create_item(items, anchor, value, key, index2, render_fn2, flags2, get_collection) {
    var v = (flags2 & EACH_ITEM_REACTIVE) !== 0 ? (flags2 & EACH_ITEM_IMMUTABLE) === 0 ? /* @__PURE__ */ mutable_source(value, false, false) : source(value) : null;
    var i = (flags2 & EACH_INDEX_REACTIVE) !== 0 ? source(index2) : null;
    return {
      v,
      i,
      e: branch(() => {
        render_fn2(anchor, v ?? value, i ?? index2, get_collection);
        return () => {
          items.delete(key);
        };
      })
    };
  }
  function move(effect2, next, anchor) {
    if (!effect2.nodes) return;
    var node = effect2.nodes.start;
    var end = effect2.nodes.end;
    var dest = next && (next.f & EFFECT_OFFSCREEN) === 0 ? (
      /** @type {EffectNodes} */
      next.nodes.start
    ) : anchor;
    while (node !== null) {
      var next_node = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node)
      );
      dest.before(node);
      if (node === end) {
        return;
      }
      node = next_node;
    }
  }
  function link(state2, prev, next) {
    if (prev === null) {
      state2.effect.first = next;
    } else {
      prev.next = next;
    }
    if (next === null) {
      state2.effect.last = prev;
    } else {
      next.prev = prev;
    }
  }
  const whitespace = [..." 	\n\r\f \v\uFEFF"];
  function to_class(value, hash, directives) {
    var classname = value == null ? "" : "" + value;
    if (hash) {
      classname = classname ? classname + " " + hash : hash;
    }
    if (directives) {
      for (var key of Object.keys(directives)) {
        if (directives[key]) {
          classname = classname ? classname + " " + key : key;
        } else if (classname.length) {
          var len = key.length;
          var a = 0;
          while ((a = classname.indexOf(key, a)) >= 0) {
            var b = a + len;
            if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
              classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
            } else {
              a = b;
            }
          }
        }
      }
    }
    return classname === "" ? null : classname;
  }
  function append_styles(styles, important = false) {
    var separator = important ? " !important;" : ";";
    var css = "";
    for (var key of Object.keys(styles)) {
      var value = styles[key];
      if (value != null && value !== "") {
        css += " " + key + ": " + value + separator;
      }
    }
    return css;
  }
  function to_style(value, styles) {
    if (styles) {
      var new_style = "";
      var normal_styles;
      var important_styles;
      if (Array.isArray(styles)) {
        normal_styles = styles[0];
        important_styles = styles[1];
      } else {
        normal_styles = styles;
      }
      if (normal_styles) {
        new_style += append_styles(normal_styles);
      }
      if (important_styles) {
        new_style += append_styles(important_styles, true);
      }
      new_style = new_style.trim();
      return new_style === "" ? null : new_style;
    }
    return String(value);
  }
  function set_class(dom, is_html, value, hash, prev_classes, next_classes) {
    var prev = dom.__className;
    if (prev !== value || prev === void 0) {
      var next_class_name = to_class(value, hash, next_classes);
      {
        if (next_class_name == null) {
          dom.removeAttribute("class");
        } else {
          dom.className = next_class_name;
        }
      }
      dom.__className = value;
    } else if (next_classes && prev_classes !== next_classes) {
      for (var key in next_classes) {
        var is_present = !!next_classes[key];
        if (prev_classes == null || is_present !== !!prev_classes[key]) {
          dom.classList.toggle(key, is_present);
        }
      }
    }
    return next_classes;
  }
  function update_styles(dom, prev = {}, next, priority) {
    for (var key in next) {
      var value = next[key];
      if (prev[key] !== value) {
        if (next[key] == null) {
          dom.style.removeProperty(key);
        } else {
          dom.style.setProperty(key, value, priority);
        }
      }
    }
  }
  function set_style(dom, value, prev_styles, next_styles) {
    var prev = dom.__style;
    if (prev !== value) {
      var next_style_attr = to_style(value, next_styles);
      {
        if (next_style_attr == null) {
          dom.removeAttribute("style");
        } else {
          dom.style.cssText = next_style_attr;
        }
      }
      dom.__style = value;
    } else if (next_styles) {
      if (Array.isArray(next_styles)) {
        update_styles(dom, prev_styles == null ? void 0 : prev_styles[0], next_styles[0]);
        update_styles(dom, prev_styles == null ? void 0 : prev_styles[1], next_styles[1], "important");
      } else {
        update_styles(dom, prev_styles, next_styles);
      }
    }
    return next_styles;
  }
  const IS_CUSTOM_ELEMENT = Symbol("is custom element");
  const IS_HTML = Symbol("is html");
  function set_checked(element, checked) {
    var attributes = get_attributes(element);
    if (attributes.checked === (attributes.checked = // treat null and undefined the same for the initial value
    checked ?? void 0)) {
      return;
    }
    element.checked = checked;
  }
  function set_attribute(element, attribute, value, skip_warning) {
    var attributes = get_attributes(element);
    if (attributes[attribute] === (attributes[attribute] = value)) return;
    if (attribute === "loading") {
      element[LOADING_ATTR_SYMBOL] = value;
    }
    if (value == null) {
      element.removeAttribute(attribute);
    } else if (typeof value !== "string" && get_setters(element).includes(attribute)) {
      element[attribute] = value;
    } else {
      element.setAttribute(attribute, value);
    }
  }
  function get_attributes(element) {
    return (
      /** @type {Record<string | symbol, unknown>} **/
      // @ts-expect-error
      element.__attributes ?? (element.__attributes = {
        [IS_CUSTOM_ELEMENT]: element.nodeName.includes("-"),
        [IS_HTML]: element.namespaceURI === NAMESPACE_HTML
      })
    );
  }
  var setters_cache = /* @__PURE__ */ new Map();
  function get_setters(element) {
    var cache_key = element.getAttribute("is") || element.nodeName;
    var setters = setters_cache.get(cache_key);
    if (setters) return setters;
    setters_cache.set(cache_key, setters = []);
    var descriptors;
    var proto = element;
    var element_proto = Element.prototype;
    while (element_proto !== proto) {
      descriptors = get_descriptors(proto);
      for (var key in descriptors) {
        if (descriptors[key].set) {
          setters.push(key);
        }
      }
      proto = get_prototype_of(proto);
    }
    return setters;
  }
  function is_bound_this(bound_value, element_or_component) {
    return bound_value === element_or_component || (bound_value == null ? void 0 : bound_value[STATE_SYMBOL]) === element_or_component;
  }
  function bind_this(element_or_component = {}, update, get_value, get_parts) {
    var component_effect = (
      /** @type {ComponentContext} */
      component_context.r
    );
    var parent = (
      /** @type {Effect} */
      active_effect
    );
    effect(() => {
      var old_parts;
      var parts;
      render_effect(() => {
        old_parts = parts;
        parts = [];
        untrack(() => {
          if (element_or_component !== get_value(...parts)) {
            update(element_or_component, ...parts);
            if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) {
              update(null, ...old_parts);
            }
          }
        });
      });
      return () => {
        let p = parent;
        while (p !== component_effect && p.parent !== null && p.parent.f & DESTROYING) {
          p = p.parent;
        }
        const teardown2 = () => {
          if (parts && is_bound_this(get_value(...parts), element_or_component)) {
            update(null, ...parts);
          }
        };
        const original_teardown = p.teardown;
        p.teardown = () => {
          teardown2();
          original_teardown == null ? void 0 : original_teardown();
        };
      };
    });
    return element_or_component;
  }
  function prop(props, key, flags2, fallback) {
    var fallback_value = (
      /** @type {V} */
      fallback
    );
    var fallback_dirty = true;
    var get_fallback = () => {
      if (fallback_dirty) {
        fallback_dirty = false;
        fallback_value = /** @type {V} */
        fallback;
      }
      return fallback_value;
    };
    var initial_value;
    {
      initial_value = /** @type {V} */
      props[key];
    }
    if (initial_value === void 0 && fallback !== void 0) {
      initial_value = get_fallback();
    }
    var getter;
    {
      getter = () => {
        var value = (
          /** @type {V} */
          props[key]
        );
        if (value === void 0) return get_fallback();
        fallback_dirty = true;
        return value;
      };
    }
    {
      return getter;
    }
  }
  var de = {
    "consent.banner.title": "Wir schätzen Ihre Privatsphäre",
    "consent.banner.description": "Wir verwenden Cookies und ähnliche Technologien, um Ihr Erlebnis zu verbessern, den Datenverkehr zu analysieren sowie für Personalisierung und Werbung. Sie können wählen, welche Kategorien Sie zulassen möchten.",
    "consent.accept_all": "Alle akzeptieren",
    "consent.reject_all": "Alle ablehnen",
    "consent.customize": "Anpassen",
    "consent.save": "Einstellungen speichern",
    "consent.close": "Schließen",
    "consent.category.essential": "Notwendig",
    "consent.category.essential.description": "Diese Cookies sind für die Funktion der Website unbedingt erforderlich und können nicht deaktiviert werden.",
    "consent.category.functional": "Funktional",
    "consent.category.functional.description": "Diese Cookies ermöglichen erweiterte Funktionalität und Personalisierung, z. B. das Speichern Ihrer Einstellungen.",
    "consent.category.analytics": "Analyse",
    "consent.category.analytics.description": "Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem anonyme statistische Daten gesammelt werden.",
    "consent.category.marketing": "Marketing",
    "consent.category.marketing.description": "Diese Cookies werden verwendet, um Ihnen relevantere Werbung entsprechend Ihren Interessen anzuzeigen.",
    "consent.category.social_media": "Soziale Medien",
    "consent.category.social_media.description": "Diese Cookies werden von sozialen Netzwerken gesetzt, damit Sie Inhalte mit Ihren Netzwerken teilen können.",
    "consent.category.always_active": "Immer aktiv",
    "consent.privacy_policy": "Datenschutzerklärung",
    "consent.cookie_policy": "Cookie-Richtlinie",
    "consent.powered_by": "Bereitgestellt von",
    "consent.preferences.title": "Datenschutz-Einstellungszentrum",
    "consent.preferences.description": "Wenn Sie eine Website besuchen, kann diese Informationen in Ihrem Browser speichern oder abrufen. Diese Informationen können Sie, Ihre Präferenzen oder Ihr Gerät betreffen. Verwenden Sie die Schalter unten, um zu steuern, welchen Cookie-Kategorien Sie zustimmen.",
    "consent.cookie.name": "Name",
    "consent.cookie.provider": "Anbieter",
    "consent.cookie.duration": "Laufzeit",
    "consent.cookie.description": "Beschreibung",
    "consent.cookie.caption": "Cookies in dieser Kategorie",
    "consent.show_details": "Details anzeigen",
    "consent.hide_details": "Details ausblenden"
  };
  var de_default = de;
  var en = {
    "consent.banner.title": "We value your privacy",
    "consent.banner.description": "We use cookies and similar technologies to enhance your experience, analyse traffic, and for personalisation and advertising. You can choose which categories to allow.",
    "consent.accept_all": "Accept all",
    "consent.reject_all": "Reject all",
    "consent.customize": "Customize",
    "consent.save": "Save preferences",
    "consent.close": "Close",
    "consent.category.essential": "Essential",
    "consent.category.essential.description": "These cookies are strictly necessary for the website to function and cannot be disabled.",
    "consent.category.functional": "Functional",
    "consent.category.functional.description": "These cookies enable enhanced functionality and personalisation, such as remembering your preferences.",
    "consent.category.analytics": "Analytics",
    "consent.category.analytics.description": "These cookies help us understand how visitors interact with the website by collecting anonymous statistical data.",
    "consent.category.marketing": "Marketing",
    "consent.category.marketing.description": "These cookies are used to deliver advertisements more relevant to you and your interests.",
    "consent.category.social_media": "Social Media",
    "consent.category.social_media.description": "These cookies are set by social media services to enable you to share content with your networks.",
    "consent.category.always_active": "Always active",
    "consent.privacy_policy": "Privacy Policy",
    "consent.cookie_policy": "Cookie Policy",
    "consent.powered_by": "Powered by",
    "consent.preferences.title": "Privacy Preference Center",
    "consent.preferences.description": "When you visit any website, it may store or retrieve information on your browser. This information might be about you, your preferences or your device. Use the toggles below to control which cookie categories you consent to.",
    "consent.cookie.name": "Name",
    "consent.cookie.provider": "Provider",
    "consent.cookie.duration": "Duration",
    "consent.cookie.description": "Description",
    "consent.cookie.caption": "Cookies in this category",
    "consent.show_details": "Show details",
    "consent.hide_details": "Hide details"
  };
  var en_default = en;
  var consentLocales = { en: en_default, de: de_default };
  function makeI18n(localeMap, initialLocale) {
    let currentLocale = initialLocale;
    function t(key) {
      const messages = localeMap[currentLocale];
      const msg = messages[key];
      if (msg !== void 0) return msg;
      if (currentLocale !== "en") {
        const fallback = localeMap.en[key];
        if (fallback !== void 0) return fallback;
      }
      return key;
    }
    return {
      t,
      get locale() {
        return currentLocale;
      },
      setLocale(locale) {
        if (localeMap[locale]) {
          currentLocale = locale;
        }
      }
    };
  }
  function createConsentI18n(initialLocale = "en") {
    return makeI18n(consentLocales, initialLocale);
  }
  function createConsentStore() {
    let state$1 = /* @__PURE__ */ state("loading");
    let preferences = /* @__PURE__ */ state(proxy({
      essential: true,
      functional: false,
      analytics: false,
      marketing: false,
      social_media: false
    }));
    let config = /* @__PURE__ */ state(null);
    let error = /* @__PURE__ */ state(null);
    return {
      get state() {
        return get(state$1);
      },
      set state(v) {
        set(state$1, v, true);
      },
      get preferences() {
        return get(preferences);
      },
      set preferences(v) {
        set(preferences, v, true);
      },
      get config() {
        return get(config);
      },
      set config(v) {
        set(config, v, true);
      },
      get error() {
        return get(error);
      },
      set error(v) {
        set(error, v, true);
      },
      acceptAll() {
        if (!get(config)) return;
        const prefs = {
          essential: true,
          functional: false,
          analytics: false,
          marketing: false,
          social_media: false
        };
        for (const cat of get(config).enabledCategories) {
          prefs[cat] = true;
        }
        set(preferences, prefs, true);
        set(state$1, "hidden");
      },
      rejectAll() {
        set(
          preferences,
          {
            essential: true,
            functional: false,
            analytics: false,
            marketing: false,
            social_media: false
          },
          true
        );
        set(state$1, "hidden");
      },
      savePreferences(prefs) {
        set(preferences, { ...prefs, essential: true }, true);
        set(state$1, "hidden");
      },
      showBanner() {
        set(state$1, "banner");
      },
      showPreferences() {
        set(state$1, "preferences");
      },
      hide() {
        set(state$1, "hidden");
      }
    };
  }
  class ConsentApiClient {
    constructor(options) {
      __publicField(this, "baseUrl");
      __publicField(this, "appKey");
      this.baseUrl = options.baseUrl.replace(/\/$/, "");
      this.appKey = options.appKey;
    }
    async getConfig() {
      const res = await fetch(`${this.baseUrl}/api/consent/config`, {
        headers: { "x-nz-app-key": this.appKey }
      });
      if (!res.ok) {
        const error = await res.json().catch(() => ({ error: "Request failed" }));
        throw new Error(error.error || `HTTP ${res.status}`);
      }
      const data = await res.json();
      return data.config;
    }
    async logConsent(visitorId, preferences, action) {
      await fetch(`${this.baseUrl}/api/consent/log`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-nz-app-key": this.appKey
        },
        body: JSON.stringify({ visitorId, preferences, action })
      });
    }
  }
  const blockedScripts = [];
  let observer = null;
  function transferFromLoader() {
    const g = window["__NzConsent"];
    if (!g) return;
    if (g._observer) {
      g._observer.disconnect();
      g._observer = null;
    }
    if (Array.isArray(g._blockedScripts) && g._blockedScripts.length > 0) {
      for (const b of g._blockedScripts) {
        if (blockedScripts.some((s) => s.element === b.element)) continue;
        blockedScripts.push({
          element: b.element,
          originalType: b.originalType,
          category: b.category
        });
      }
      g._blockedScripts.length = 0;
    }
  }
  function blockScripts(scriptPatterns) {
    transferFromLoader();
    const scripts = document.querySelectorAll("script[data-consent-category]");
    for (const script of scripts) {
      const category = script.getAttribute("data-consent-category");
      if (category && category !== "essential") {
        blockScript(script, category);
      }
    }
    if (scriptPatterns.length > 0) {
      const allScripts = document.querySelectorAll("script[src]");
      for (const script of allScripts) {
        if (script.getAttribute("data-consent-category")) continue;
        const src = script.src;
        for (const pattern of scriptPatterns) {
          if (matchPattern(src, pattern.pattern)) {
            script.setAttribute("data-consent-category", pattern.category);
            blockScript(script, pattern.category);
            break;
          }
        }
      }
    }
    observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLScriptElement) {
            const category = node.getAttribute("data-consent-category");
            if (category && category !== "essential") {
              blockScript(node, category);
            } else if (node.src && scriptPatterns.length > 0) {
              for (const pattern of scriptPatterns) {
                if (matchPattern(node.src, pattern.pattern)) {
                  node.setAttribute("data-consent-category", pattern.category);
                  blockScript(node, pattern.category);
                  break;
                }
              }
            }
          }
        }
      }
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }
  function blockScript(script, category) {
    const originalType = script.type || "text/javascript";
    if (originalType === "text/plain") return;
    blockedScripts.push({ element: script, originalType, category });
    script.type = "text/plain";
    script.setAttribute("data-original-type", originalType);
  }
  function unblockScripts(preferences) {
    var _a2;
    const toUnblock = blockedScripts.filter((s) => preferences[s.category]);
    for (const blocked of toUnblock) {
      const oldScript = blocked.element;
      const newScript = document.createElement("script");
      for (const attr of oldScript.attributes) {
        if (attr.name === "type") {
          newScript.type = blocked.originalType;
        } else {
          newScript.setAttribute(attr.name, attr.value);
        }
      }
      if (oldScript.textContent) {
        newScript.textContent = oldScript.textContent;
      }
      (_a2 = oldScript.parentNode) == null ? void 0 : _a2.replaceChild(newScript, oldScript);
    }
    const remaining = blockedScripts.filter((s) => !preferences[s.category]);
    blockedScripts.length = 0;
    blockedScripts.push(...remaining);
  }
  function destroyBlocker() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    blockedScripts.length = 0;
  }
  function matchPattern(url, pattern) {
    const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
    try {
      return new RegExp(escaped, "i").test(url);
    } catch {
      return url.includes(pattern);
    }
  }
  const STORAGE_VERSION = "1";
  function getStorageKey(appKey) {
    return `nz-consent-${appKey}`;
  }
  function getStoredConsent(appKey) {
    try {
      const raw = localStorage.getItem(getStorageKey(appKey));
      if (!raw) return null;
      const stored = JSON.parse(raw);
      if (stored.version !== STORAGE_VERSION) return null;
      if (stored.expiresAt < Date.now()) {
        localStorage.removeItem(getStorageKey(appKey));
        return null;
      }
      return stored;
    } catch {
      return null;
    }
  }
  function saveConsent(appKey, preferences, visitorId, expiryDays = 365) {
    const stored = {
      version: STORAGE_VERSION,
      preferences,
      timestamp: Date.now(),
      visitorId,
      expiresAt: Date.now() + expiryDays * 24 * 60 * 60 * 1e3
    };
    try {
      localStorage.setItem(getStorageKey(appKey), JSON.stringify(stored));
    } catch {
    }
  }
  function getOrCreateVisitorId(appKey) {
    const stored = getStoredConsent(appKey);
    if (stored == null ? void 0 : stored.visitorId) return stored.visitorId;
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return Array.from(array, (b) => b.toString(16).padStart(2, "0")).join("");
  }
  const EU_TIMEZONES = /* @__PURE__ */ new Set([
    "Europe/Amsterdam",
    "Europe/Andorra",
    "Europe/Athens",
    "Europe/Belgrade",
    "Europe/Berlin",
    "Europe/Bratislava",
    "Europe/Brussels",
    "Europe/Bucharest",
    "Europe/Budapest",
    "Europe/Busingen",
    "Europe/Chisinau",
    "Europe/Copenhagen",
    "Europe/Dublin",
    "Europe/Gibraltar",
    "Europe/Guernsey",
    "Europe/Helsinki",
    "Europe/Isle_of_Man",
    "Europe/Jersey",
    "Europe/Kaliningrad",
    "Europe/Kiev",
    "Europe/Kyiv",
    "Europe/Lisbon",
    "Europe/Ljubljana",
    "Europe/London",
    "Europe/Luxembourg",
    "Europe/Madrid",
    "Europe/Malta",
    "Europe/Mariehamn",
    "Europe/Minsk",
    "Europe/Monaco",
    "Europe/Moscow",
    "Europe/Nicosia",
    "Europe/Oslo",
    "Europe/Paris",
    "Europe/Podgorica",
    "Europe/Prague",
    "Europe/Riga",
    "Europe/Rome",
    "Europe/San_Marino",
    "Europe/Sarajevo",
    "Europe/Simferopol",
    "Europe/Skopje",
    "Europe/Sofia",
    "Europe/Stockholm",
    "Europe/Tallinn",
    "Europe/Tirane",
    "Europe/Vaduz",
    "Europe/Vatican",
    "Europe/Vienna",
    "Europe/Vilnius",
    "Europe/Warsaw",
    "Europe/Zagreb",
    "Europe/Zurich",
    // EEA territories
    "Atlantic/Canary",
    "Atlantic/Faroe",
    "Atlantic/Madeira",
    "Atlantic/Reykjavik"
  ]);
  function isLikelyEU() {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return EU_TIMEZONES.has(tz);
    } catch {
      return true;
    }
  }
  var root_1$4 = /* @__PURE__ */ from_html(`<span class="nz-btn__spinner svelte-fr2yeo" aria-hidden="true"></span>`);
  var root$5 = /* @__PURE__ */ from_html(`<button><!> <span><!></span></button>`);
  function Button($$anchor, $$props) {
    let variant = prop($$props, "variant", 3, "primary"), disabled = prop($$props, "disabled", 3, false), loading = prop($$props, "loading", 3, false), type = prop($$props, "type", 3, "button");
    var button = root$5();
    let classes;
    var node = child(button);
    {
      var consequent = ($$anchor2) => {
        var span = root_1$4();
        append($$anchor2, span);
      };
      if_block(node, ($$render) => {
        if (loading()) $$render(consequent);
      });
    }
    var span_1 = sibling(node, 2);
    let classes_1;
    var node_1 = child(span_1);
    snippet(node_1, () => $$props.children);
    template_effect(() => {
      classes = set_class(button, 1, `nz-btn nz-btn--${variant() ?? ""}`, "svelte-fr2yeo", classes, { "nz-btn--loading": loading() });
      set_attribute(button, "type", type());
      button.disabled = disabled() || loading();
      set_attribute(button, "aria-label", $$props["aria-label"]);
      set_attribute(button, "aria-busy", loading());
      classes_1 = set_class(span_1, 1, "nz-btn__content svelte-fr2yeo", null, classes_1, { "nz-btn__content--hidden": loading() });
    });
    delegated("click", button, function(...$$args) {
      var _a2;
      (_a2 = $$props.onclick) == null ? void 0 : _a2.apply(this, $$args);
    });
    append($$anchor, button);
  }
  delegate(["click"]);
  var root_2$1 = /* @__PURE__ */ from_html(`<a target="_blank" rel="noopener noreferrer" class="nz-banner__link svelte-frsc0w"> </a>`);
  var root_3$2 = /* @__PURE__ */ from_html(`<a target="_blank" rel="noopener noreferrer" class="nz-banner__link svelte-frsc0w"> </a>`);
  var root_1$3 = /* @__PURE__ */ from_html(`<p class="nz-banner__links svelte-frsc0w"><!> <!></p>`);
  var root$4 = /* @__PURE__ */ from_html(`<div role="region" aria-describedby="nz-banner-desc"><div class="nz-banner__content svelte-frsc0w"><h2 class="nz-banner__title svelte-frsc0w"> </h2> <p class="nz-banner__description svelte-frsc0w" id="nz-banner-desc"> </p> <!></div> <div class="nz-banner__actions svelte-frsc0w"><!> <!> <!></div></div>`);
  function ConsentBanner($$anchor, $$props) {
    push($$props, true);
    const positionClass = /* @__PURE__ */ user_derived(() => () => {
      switch ($$props.position) {
        case "top":
          return "nz-banner--top";
        case "bottom-left":
          return "nz-banner--bottom-left";
        case "bottom-right":
          return "nz-banner--bottom-right";
        default:
          return "nz-banner--bottom";
      }
    });
    var div = root$4();
    var div_1 = child(div);
    var h2 = child(div_1);
    var text$1 = child(h2);
    var p = sibling(h2, 2);
    var text_1 = child(p);
    var node = sibling(p, 2);
    {
      var consequent_2 = ($$anchor2) => {
        var p_1 = root_1$3();
        var node_1 = child(p_1);
        {
          var consequent = ($$anchor3) => {
            var a = root_2$1();
            var text_2 = child(a);
            template_effect(
              ($0) => {
                set_attribute(a, "href", $$props.privacyPolicyUrl);
                set_text(text_2, $0);
              },
              [() => $$props.t("consent.privacy_policy")]
            );
            append($$anchor3, a);
          };
          if_block(node_1, ($$render) => {
            if ($$props.privacyPolicyUrl) $$render(consequent);
          });
        }
        var node_2 = sibling(node_1, 2);
        {
          var consequent_1 = ($$anchor3) => {
            var a_1 = root_3$2();
            var text_3 = child(a_1);
            template_effect(
              ($0) => {
                set_attribute(a_1, "href", $$props.cookiePolicyUrl);
                set_text(text_3, $0);
              },
              [() => $$props.t("consent.cookie_policy")]
            );
            append($$anchor3, a_1);
          };
          if_block(node_2, ($$render) => {
            if ($$props.cookiePolicyUrl) $$render(consequent_1);
          });
        }
        append($$anchor2, p_1);
      };
      if_block(node, ($$render) => {
        if ($$props.privacyPolicyUrl || $$props.cookiePolicyUrl) $$render(consequent_2);
      });
    }
    var div_2 = sibling(div_1, 2);
    var node_3 = child(div_2);
    Button(node_3, {
      type: "button",
      variant: "ghost",
      get onclick() {
        return $$props.oncustomize;
      },
      children: ($$anchor2, $$slotProps) => {
        var text_4 = text();
        template_effect(($0) => set_text(text_4, $0), [() => $$props.t("consent.customize")]);
        append($$anchor2, text_4);
      },
      $$slots: { default: true }
    });
    var node_4 = sibling(node_3, 2);
    Button(node_4, {
      type: "button",
      variant: "secondary",
      get onclick() {
        return $$props.onrejectall;
      },
      children: ($$anchor2, $$slotProps) => {
        var text_5 = text();
        template_effect(($0) => set_text(text_5, $0), [() => $$props.t("consent.reject_all")]);
        append($$anchor2, text_5);
      },
      $$slots: { default: true }
    });
    var node_5 = sibling(node_4, 2);
    Button(node_5, {
      type: "button",
      variant: "primary",
      get onclick() {
        return $$props.onacceptall;
      },
      children: ($$anchor2, $$slotProps) => {
        var text_6 = text();
        template_effect(($0) => set_text(text_6, $0), [() => $$props.t("consent.accept_all")]);
        append($$anchor2, text_6);
      },
      $$slots: { default: true }
    });
    template_effect(
      ($0, $1, $2, $3) => {
        set_class(div, 1, `nz-banner ${$0 ?? ""}`, "svelte-frsc0w");
        set_attribute(div, "aria-label", $1);
        set_text(text$1, $2);
        set_text(text_1, $3);
      },
      [
        () => get(positionClass)(),
        () => $$props.t("consent.banner.title"),
        () => $$props.t("consent.banner.title"),
        () => $$props.t("consent.banner.description")
      ]
    );
    append($$anchor, div);
    pop();
  }
  var root_1$2 = /* @__PURE__ */ from_html(`<span class="nz-toggle__badge svelte-iz14do"> </span>`);
  var root$3 = /* @__PURE__ */ from_html(`<div class="nz-toggle svelte-iz14do"><div class="nz-toggle__info svelte-iz14do"><label class="nz-toggle__label svelte-iz14do"> <!></label> <p class="nz-toggle__description svelte-iz14do"> </p></div> <div class="nz-toggle__switch svelte-iz14do"><input type="checkbox" class="nz-toggle__input svelte-iz14do" role="switch"/> <span class="nz-toggle__track svelte-iz14do" aria-hidden="true"><span class="nz-toggle__thumb svelte-iz14do"></span></span></div></div>`);
  function CategoryToggle($$anchor, $$props) {
    push($$props, true);
    let disabled = prop($$props, "disabled", 3, false);
    const id = /* @__PURE__ */ user_derived(() => `nz-toggle-${$$props.category}`);
    const categoryDescriptions = {
      essential: "consent.category.essential.description",
      functional: "consent.category.functional.description",
      analytics: "consent.category.analytics.description",
      marketing: "consent.category.marketing.description",
      social_media: "consent.category.social_media.description"
    };
    const categoryLabels = {
      essential: "consent.category.essential",
      functional: "consent.category.functional",
      analytics: "consent.category.analytics",
      marketing: "consent.category.marketing",
      social_media: "consent.category.social_media"
    };
    var div = root$3();
    var div_1 = child(div);
    var label = child(div_1);
    var text2 = child(label);
    var node = sibling(text2);
    {
      var consequent = ($$anchor2) => {
        var span = root_1$2();
        var text_1 = child(span);
        template_effect(($0) => set_text(text_1, $0), [() => $$props.t("consent.category.always_active")]);
        append($$anchor2, span);
      };
      if_block(node, ($$render) => {
        if (disabled()) $$render(consequent);
      });
    }
    var p = sibling(label, 2);
    var text_2 = child(p);
    var div_2 = sibling(div_1, 2);
    var input = child(div_2);
    template_effect(
      ($0, $1) => {
        set_attribute(label, "for", get(id));
        set_attribute(label, "id", `nz-cat-label-${$$props.category ?? ""}`);
        set_text(text2, `${$0 ?? ""} `);
        set_attribute(p, "id", `nz-cat-desc-${$$props.category ?? ""}`);
        set_text(text_2, $1);
        set_attribute(input, "id", get(id));
        set_checked(input, $$props.checked);
        input.disabled = disabled();
        set_attribute(input, "aria-checked", $$props.checked);
        set_attribute(input, "aria-describedby", `nz-cat-desc-${$$props.category ?? ""}`);
      },
      [
        () => $$props.t(categoryLabels[$$props.category]),
        () => $$props.t(categoryDescriptions[$$props.category])
      ]
    );
    delegated("change", input, (e) => $$props.onchange(e.target.checked));
    append($$anchor, div);
    pop();
  }
  delegate(["change"]);
  var root_1$1 = /* @__PURE__ */ from_html(`<tr class="svelte-kmvg96"><th scope="row" class="nz-cookie-table__name svelte-kmvg96"><code class="svelte-kmvg96"> </code></th><td class="svelte-kmvg96"> </td><td class="svelte-kmvg96"> </td><td class="nz-cookie-table__desc-col svelte-kmvg96"> </td></tr>`);
  var root$2 = /* @__PURE__ */ from_html(`<div class="nz-cookie-table-wrapper svelte-kmvg96"><table class="nz-cookie-table svelte-kmvg96"><caption class="nz-cookie-table__caption svelte-kmvg96"> </caption><thead><tr><th scope="col" class="svelte-kmvg96"> </th><th scope="col" class="svelte-kmvg96"> </th><th scope="col" class="svelte-kmvg96"> </th><th scope="col" class="nz-cookie-table__desc-col svelte-kmvg96"> </th></tr></thead><tbody class="svelte-kmvg96"></tbody></table></div>`);
  function CookieTable($$anchor, $$props) {
    push($$props, true);
    var div = root$2();
    var table = child(div);
    var caption = child(table);
    var text2 = child(caption);
    var thead = sibling(caption);
    var tr = child(thead);
    var th = child(tr);
    var text_1 = child(th);
    var th_1 = sibling(th);
    var text_2 = child(th_1);
    var th_2 = sibling(th_1);
    var text_3 = child(th_2);
    var th_3 = sibling(th_2);
    var text_4 = child(th_3);
    var tbody = sibling(thead);
    each(tbody, 21, () => $$props.cookies, index, ($$anchor2, cookie) => {
      var tr_1 = root_1$1();
      var th_4 = child(tr_1);
      var code = child(th_4);
      var text_5 = child(code);
      var td = sibling(th_4);
      var text_6 = child(td);
      var td_1 = sibling(td);
      var text_7 = child(td_1);
      var td_2 = sibling(td_1);
      var text_8 = child(td_2);
      template_effect(() => {
        set_text(text_5, get(cookie).name);
        set_text(text_6, get(cookie).domain || "—");
        set_text(text_7, get(cookie).duration || "—");
        set_text(text_8, get(cookie).description || "—");
      });
      append($$anchor2, tr_1);
    });
    template_effect(
      ($0, $1, $2, $3, $4) => {
        set_text(text2, $0);
        set_text(text_1, $1);
        set_text(text_2, $2);
        set_text(text_3, $3);
        set_text(text_4, $4);
      },
      [
        () => $$props.t("consent.cookie.caption"),
        () => $$props.t("consent.cookie.name"),
        () => $$props.t("consent.cookie.provider"),
        () => $$props.t("consent.cookie.duration"),
        () => $$props.t("consent.cookie.description")
      ]
    );
    append($$anchor, div);
    pop();
  }
  var root_1 = /* @__PURE__ */ from_svg(`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`);
  var root_3$1 = /* @__PURE__ */ from_html(`<a target="_blank" rel="noopener noreferrer" class="nz-prefs__link svelte-qjmdg0"> </a>`);
  var root_4 = /* @__PURE__ */ from_html(`<a target="_blank" rel="noopener noreferrer" class="nz-prefs__link svelte-qjmdg0"> </a>`);
  var root_2 = /* @__PURE__ */ from_html(`<p class="nz-prefs__links svelte-qjmdg0"><!> <!></p>`);
  var root_6 = /* @__PURE__ */ from_html(`<button type="button" class="nz-prefs__details-toggle svelte-qjmdg0"> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="nz-prefs__chevron svelte-qjmdg0"><polyline points="6 9 12 15 18 9" class="svelte-qjmdg0"></polyline></svg></button>`);
  var root_5 = /* @__PURE__ */ from_html(`<div role="group"><!> <!> <!></div>`);
  var root$1 = /* @__PURE__ */ from_html(`<dialog class="nz-prefs svelte-qjmdg0"><div class="nz-prefs__container svelte-qjmdg0"><header class="nz-prefs__header svelte-qjmdg0"><h2 class="nz-prefs__title svelte-qjmdg0"> </h2> <!></header> <div class="nz-prefs__body svelte-qjmdg0"><p class="nz-prefs__description svelte-qjmdg0"> </p> <!> <div class="nz-prefs__categories svelte-qjmdg0"></div></div> <footer class="nz-prefs__footer svelte-qjmdg0"><!> <!> <!></footer></div></dialog>`);
  function PreferenceCenter($$anchor, $$props) {
    push($$props, true);
    let localPrefs = /* @__PURE__ */ state(proxy({
      essential: true,
      functional: $$props.preferences.functional ?? false,
      analytics: $$props.preferences.analytics ?? false,
      marketing: $$props.preferences.marketing ?? false,
      social_media: $$props.preferences.social_media ?? false
    }));
    let expandedCategory = /* @__PURE__ */ state(null);
    let dialogEl = /* @__PURE__ */ state(null);
    const categories = ["essential", "functional", "analytics", "marketing"];
    const availableCategories = /* @__PURE__ */ user_derived(() => () => {
      var _a2, _b2;
      const cats = [...categories];
      if ((_b2 = (_a2 = $$props.config) == null ? void 0 : _a2.categories) == null ? void 0 : _b2.includes("social_media")) {
        cats.push("social_media");
      }
      return cats;
    });
    user_effect(() => {
      if (get(dialogEl) && !get(dialogEl).open) {
        get(dialogEl).showModal();
        const firstFocusable = get(dialogEl).querySelector('button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])');
        firstFocusable == null ? void 0 : firstFocusable.focus();
      }
      return () => {
        var _a2;
        (_a2 = get(dialogEl)) == null ? void 0 : _a2.close();
      };
    });
    function handleToggle(category, checked) {
      set(localPrefs, { ...get(localPrefs), [category]: checked }, true);
    }
    function handleSave() {
      $$props.onsave(get(localPrefs));
    }
    function handleKeydown(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        $$props.onclose();
        return;
      }
      if (e.key === "Tab" && get(dialogEl)) {
        const focusable = Array.from(get(dialogEl).querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }
    function toggleDetails(category) {
      set(expandedCategory, get(expandedCategory) === category ? null : category, true);
    }
    function getCookiesForCategory(category) {
      var _a2, _b2;
      return ((_b2 = (_a2 = $$props.config) == null ? void 0 : _a2.cookies) == null ? void 0 : _b2.filter((c) => c.category === category)) || [];
    }
    var dialog = root$1();
    var div = child(dialog);
    var header = child(div);
    var h2 = child(header);
    var text$1 = child(h2);
    var node = sibling(h2, 2);
    Button(node, {
      type: "button",
      variant: "ghost",
      "aria-label": "Close",
      get onclick() {
        return $$props.onclose;
      },
      children: ($$anchor2, $$slotProps) => {
        var svg = root_1();
        append($$anchor2, svg);
      },
      $$slots: { default: true }
    });
    var div_1 = sibling(header, 2);
    var p = child(div_1);
    var text_1 = child(p);
    var node_1 = sibling(p, 2);
    {
      var consequent_2 = ($$anchor2) => {
        var p_1 = root_2();
        var node_2 = child(p_1);
        {
          var consequent = ($$anchor3) => {
            var a = root_3$1();
            var text_2 = child(a);
            template_effect(
              ($0) => {
                set_attribute(a, "href", $$props.privacyPolicyUrl);
                set_text(text_2, $0);
              },
              [() => $$props.t("consent.privacy_policy")]
            );
            append($$anchor3, a);
          };
          if_block(node_2, ($$render) => {
            if ($$props.privacyPolicyUrl) $$render(consequent);
          });
        }
        var node_3 = sibling(node_2, 2);
        {
          var consequent_1 = ($$anchor3) => {
            var a_1 = root_4();
            var text_3 = child(a_1);
            template_effect(
              ($0) => {
                set_attribute(a_1, "href", $$props.cookiePolicyUrl);
                set_text(text_3, $0);
              },
              [() => $$props.t("consent.cookie_policy")]
            );
            append($$anchor3, a_1);
          };
          if_block(node_3, ($$render) => {
            if ($$props.cookiePolicyUrl) $$render(consequent_1);
          });
        }
        append($$anchor2, p_1);
      };
      if_block(node_1, ($$render) => {
        if ($$props.privacyPolicyUrl || $$props.cookiePolicyUrl) $$render(consequent_2);
      });
    }
    var div_2 = sibling(node_1, 2);
    each(div_2, 21, () => get(availableCategories)(), index, ($$anchor2, category) => {
      const cookies = /* @__PURE__ */ user_derived(() => getCookiesForCategory(get(category)));
      var div_3 = root_5();
      let classes;
      var node_4 = child(div_3);
      {
        let $0 = /* @__PURE__ */ user_derived(() => get(category) === "essential" ? true : get(localPrefs)[get(category)] ?? false);
        let $1 = /* @__PURE__ */ user_derived(() => get(category) === "essential");
        CategoryToggle(node_4, {
          get category() {
            return get(category);
          },
          get t() {
            return $$props.t;
          },
          get checked() {
            return get($0);
          },
          get disabled() {
            return get($1);
          },
          onchange: (checked) => handleToggle(get(category), checked)
        });
      }
      var node_5 = sibling(node_4, 2);
      {
        var consequent_3 = ($$anchor3) => {
          var button = root_6();
          var text_4 = child(button);
          template_effect(
            ($0) => {
              set_attribute(button, "aria-expanded", get(expandedCategory) === get(category));
              set_text(text_4, `${$0 ?? ""} `);
            },
            [
              () => get(expandedCategory) === get(category) ? $$props.t("consent.hide_details") : $$props.t("consent.show_details")
            ]
          );
          delegated("click", button, () => toggleDetails(get(category)));
          append($$anchor3, button);
        };
        if_block(node_5, ($$render) => {
          if (get(cookies).length > 0) $$render(consequent_3);
        });
      }
      var node_6 = sibling(node_5, 2);
      {
        var consequent_4 = ($$anchor3) => {
          CookieTable($$anchor3, {
            get cookies() {
              return get(cookies);
            },
            get t() {
              return $$props.t;
            }
          });
        };
        if_block(node_6, ($$render) => {
          if (get(expandedCategory) === get(category) && get(cookies).length > 0) $$render(consequent_4);
        });
      }
      template_effect(() => {
        classes = set_class(div_3, 1, "nz-prefs__category svelte-qjmdg0", null, classes, {
          "nz-prefs__category--expanded": get(expandedCategory) === get(category)
        });
        set_attribute(div_3, "aria-labelledby", `nz-cat-label-${get(category) ?? ""}`);
      });
      append($$anchor2, div_3);
    });
    var footer = sibling(div_1, 2);
    var node_7 = child(footer);
    Button(node_7, {
      type: "button",
      variant: "secondary",
      get onclick() {
        return $$props.onrejectall;
      },
      children: ($$anchor2, $$slotProps) => {
        var text_5 = text();
        template_effect(($0) => set_text(text_5, $0), [() => $$props.t("consent.reject_all")]);
        append($$anchor2, text_5);
      },
      $$slots: { default: true }
    });
    var node_8 = sibling(node_7, 2);
    Button(node_8, {
      type: "button",
      variant: "ghost",
      onclick: handleSave,
      children: ($$anchor2, $$slotProps) => {
        var text_6 = text();
        template_effect(($0) => set_text(text_6, $0), [() => $$props.t("consent.save")]);
        append($$anchor2, text_6);
      },
      $$slots: { default: true }
    });
    var node_9 = sibling(node_8, 2);
    Button(node_9, {
      type: "button",
      variant: "primary",
      get onclick() {
        return $$props.onacceptall;
      },
      children: ($$anchor2, $$slotProps) => {
        var text_7 = text();
        template_effect(($0) => set_text(text_7, $0), [() => $$props.t("consent.accept_all")]);
        append($$anchor2, text_7);
      },
      $$slots: { default: true }
    });
    bind_this(dialog, ($$value) => set(dialogEl, $$value), () => get(dialogEl));
    template_effect(
      ($0, $1, $2) => {
        set_attribute(dialog, "aria-label", $0);
        set_text(text$1, $1);
        set_text(text_1, $2);
      },
      [
        () => $$props.t("consent.preferences.title"),
        () => $$props.t("consent.preferences.title"),
        () => $$props.t("consent.preferences.description")
      ]
    );
    delegated("keydown", dialog, handleKeydown);
    delegated("click", dialog, (e) => {
      if (e.target === get(dialogEl)) $$props.onclose();
    });
    append($$anchor, dialog);
    pop();
  }
  delegate(["keydown", "click"]);
  var root_3 = /* @__PURE__ */ from_html(`<button class="nz-consent-reopen svelte-1iqzoy1" data-nz-consent-settings="" type="button"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="8" cy="10" r="1" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8" r="1" fill="currentColor" stroke="none"></circle><circle cx="10" cy="15" r="1" fill="currentColor" stroke="none"></circle><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"></circle><path d="M16 3.5a2.5 2.5 0 0 1-4 2 2.5 2.5 0 0 1-3-3"></path></svg></button>`);
  var root = /* @__PURE__ */ from_html(`<div class="nz-consent-root svelte-1iqzoy1"><!> <!> <!></div>`);
  function ConsentWidget($$anchor, $$props) {
    push($$props, true);
    let localeProp = prop($$props, "locale", 3, "en"), position = prop($$props, "position", 3, "bottom"), theme = prop($$props, "theme", 3, "auto"), showFloatingButton = prop($$props, "showFloatingButton", 3, true);
    let locale = /* @__PURE__ */ state(proxy(localeProp()));
    let colors = /* @__PURE__ */ state(proxy($$props.colors));
    user_effect(() => {
      set(locale, localeProp());
    });
    user_effect(() => {
      set(colors, $$props.colors, true);
    });
    function setLocale(l) {
      set(locale, l, true);
    }
    function setColors(c) {
      set(colors, c, true);
    }
    const store = createConsentStore();
    const i18n = /* @__PURE__ */ user_derived(() => createConsentI18n(get(locale)));
    const t = /* @__PURE__ */ user_derived(() => (key) => get(i18n).t(key));
    const client = new ConsentApiClient({
      baseUrl: $$props.apiUrl || window.location.origin,
      appKey: $$props.appKey
    });
    const offlineMode = !!$$props.fallbackConfig && !$$props.apiUrl;
    const visitorId = getOrCreateVisitorId($$props.appKey);
    const resolvedTheme = /* @__PURE__ */ user_derived(() => () => {
      if (theme() === "auto") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      return theme();
    });
    onMount(() => {
      init();
      const container = document.querySelector(`[data-nz-consent="${$$props.appKey}"]`);
      const handler = () => store.showPreferences();
      container == null ? void 0 : container.addEventListener("nz-consent-show-preferences", handler);
      function onDocumentClick(e) {
        var _a2;
        const target = (_a2 = e.target) == null ? void 0 : _a2.closest("[data-nz-consent-settings], .nz-consent-settings");
        if (target) {
          e.preventDefault();
          store.showPreferences();
        }
      }
      document.addEventListener("click", onDocumentClick);
      return () => {
        container == null ? void 0 : container.removeEventListener("nz-consent-show-preferences", handler);
        document.removeEventListener("click", onDocumentClick);
        destroyBlocker();
      };
    });
    async function init() {
      var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      const stored = getStoredConsent($$props.appKey);
      const fbScripts = (((_a2 = $$props.fallbackConfig) == null ? void 0 : _a2.scripts) ?? []).map((s, i) => ({
        id: `fb-${i}`,
        appId: $$props.appKey,
        pattern: s.pattern,
        category: s.category,
        description: "",
        provider: "",
        createdAt: 0
      }));
      const useOfflineFallback = !!$$props.fallbackConfig && !$$props.apiUrl;
      if (useOfflineFallback) {
        const shouldGeoTarget = $$props.geoTargeting ?? ((_b2 = $$props.fallbackConfig) == null ? void 0 : _b2.geoTargeting);
        if (shouldGeoTarget && !isLikelyEU()) {
          store.config = {
            appKey: $$props.appKey,
            name: "",
            enabledCategories: ((_c = $$props.fallbackConfig) == null ? void 0 : _c.enabledCategories) ?? [
              "essential",
              "functional",
              "analytics",
              "marketing",
              "social_media"
            ],
            geoTargeting: ((_d = $$props.fallbackConfig) == null ? void 0 : _d.geoTargeting) ?? false,
            cookiePolicyUrl: ((_e = $$props.fallbackConfig) == null ? void 0 : _e.cookiePolicyUrl) ?? "",
            privacyPolicyUrl: ((_f = $$props.fallbackConfig) == null ? void 0 : _f.privacyPolicyUrl) ?? "",
            cookies: ((_g = $$props.fallbackConfig) == null ? void 0 : _g.cookies) ?? [],
            storageItems: [],
            scripts: fbScripts
          };
          store.acceptAll();
          const prefs = store.preferences;
          saveConsent($$props.appKey, prefs, visitorId);
          unblockScripts(prefs);
          const g = window["__NzConsent"];
          if (g) {
            (_h = g.release) == null ? void 0 : _h.call(g, prefs);
            if (g._observer) {
              g._observer.disconnect();
              g._observer = null;
            }
          }
          (_i = $$props.onaccept) == null ? void 0 : _i.call($$props, prefs);
          return;
        }
        blockScripts(fbScripts);
        if ($$props.fallbackConfig) {
          const allCategories = [
            "essential",
            "functional",
            "analytics",
            "marketing",
            "social_media"
          ];
          store.config = {
            appKey: $$props.appKey,
            name: "",
            enabledCategories: $$props.fallbackConfig.enabledCategories ?? allCategories,
            geoTargeting: $$props.fallbackConfig.geoTargeting ?? false,
            cookiePolicyUrl: $$props.fallbackConfig.cookiePolicyUrl ?? "",
            privacyPolicyUrl: $$props.fallbackConfig.privacyPolicyUrl ?? "",
            cookies: $$props.fallbackConfig.cookies ?? [],
            storageItems: [],
            scripts: fbScripts
          };
        }
        if (stored) {
          store.preferences = stored.preferences;
          store.state = "hidden";
          unblockScripts(stored.preferences);
          return;
        }
        store.state = "banner";
        return;
      }
      try {
        const config = await client.getConfig();
        store.config = config;
        const shouldGeoTarget = $$props.geoTargeting ?? config.geoTargeting;
        if (shouldGeoTarget && !isLikelyEU()) {
          store.acceptAll();
          const prefs = store.preferences;
          saveConsent($$props.appKey, prefs, visitorId);
          unblockScripts(prefs);
          const g = window["__NzConsent"];
          if (g) {
            (_j = g.release) == null ? void 0 : _j.call(g, prefs);
            if (g._observer) {
              g._observer.disconnect();
              g._observer = null;
            }
          }
          (_k = $$props.onaccept) == null ? void 0 : _k.call($$props, prefs);
          return;
        }
        blockScripts(config.scripts);
        if (stored) {
          store.preferences = stored.preferences;
          store.state = "hidden";
          unblockScripts(stored.preferences);
          return;
        }
        store.state = "banner";
      } catch (err) {
        console.error("[NzConsent] Failed to load config:", err);
        store.error = err instanceof Error ? err.message : "Failed to load config";
        blockScripts(fbScripts);
        if ($$props.fallbackConfig) {
          const allCategories = [
            "essential",
            "functional",
            "analytics",
            "marketing",
            "social_media"
          ];
          store.config = {
            appKey: $$props.appKey,
            name: "",
            enabledCategories: $$props.fallbackConfig.enabledCategories ?? allCategories,
            geoTargeting: $$props.fallbackConfig.geoTargeting ?? false,
            cookiePolicyUrl: $$props.fallbackConfig.cookiePolicyUrl ?? "",
            privacyPolicyUrl: $$props.fallbackConfig.privacyPolicyUrl ?? "",
            cookies: $$props.fallbackConfig.cookies ?? [],
            storageItems: [],
            scripts: fbScripts
          };
        }
        if (stored) {
          store.preferences = stored.preferences;
          store.state = "hidden";
          unblockScripts(stored.preferences);
          return;
        }
        store.state = "banner";
      }
    }
    function handleAcceptAll() {
      var _a2;
      if (store.config) {
        store.acceptAll();
      } else {
        store.savePreferences({
          essential: true,
          functional: true,
          analytics: true,
          marketing: true,
          social_media: true
        });
      }
      const prefs = store.preferences;
      saveConsent($$props.appKey, prefs, visitorId);
      unblockScripts(prefs);
      if (!offlineMode) {
        client.logConsent(visitorId, prefs, "grant").catch(() => {
        });
      }
      (_a2 = $$props.onaccept) == null ? void 0 : _a2.call($$props, prefs);
    }
    function handleRejectAll() {
      var _a2;
      store.rejectAll();
      const prefs = store.preferences;
      saveConsent($$props.appKey, prefs, visitorId);
      if (!offlineMode) {
        client.logConsent(visitorId, prefs, "grant").catch(() => {
        });
      }
      (_a2 = $$props.onreject) == null ? void 0 : _a2.call($$props);
    }
    function handleSavePreferences(prefs) {
      var _a2, _b2;
      const isUpdate = getStoredConsent($$props.appKey) !== null;
      store.savePreferences(prefs);
      const finalPrefs = store.preferences;
      saveConsent($$props.appKey, finalPrefs, visitorId);
      unblockScripts(finalPrefs);
      if (!offlineMode) {
        client.logConsent(visitorId, finalPrefs, isUpdate ? "update" : "grant").catch(() => {
        });
      }
      if (isUpdate) {
        (_a2 = $$props.onupdate) == null ? void 0 : _a2.call($$props, finalPrefs);
      } else {
        (_b2 = $$props.onaccept) == null ? void 0 : _b2.call($$props, finalPrefs);
      }
    }
    function handleCustomize() {
      store.showPreferences();
    }
    function handleClosePreferences() {
      const stored = getStoredConsent($$props.appKey);
      if (stored) {
        store.hide();
      } else {
        store.showBanner();
      }
    }
    var $$exports = { setLocale, setColors };
    var div = root();
    let styles;
    var node = child(div);
    {
      var consequent = ($$anchor2) => {
        {
          let $0 = /* @__PURE__ */ user_derived(() => {
            var _a2;
            return $$props.privacyPolicyUrl || ((_a2 = store.config) == null ? void 0 : _a2.privacyPolicyUrl);
          });
          let $1 = /* @__PURE__ */ user_derived(() => {
            var _a2;
            return $$props.cookiePolicyUrl || ((_a2 = store.config) == null ? void 0 : _a2.cookiePolicyUrl);
          });
          ConsentBanner($$anchor2, {
            get position() {
              return position();
            },
            get t() {
              return get(t);
            },
            get privacyPolicyUrl() {
              return get($0);
            },
            get cookiePolicyUrl() {
              return get($1);
            },
            onacceptall: handleAcceptAll,
            onrejectall: handleRejectAll,
            oncustomize: handleCustomize
          });
        }
      };
      if_block(node, ($$render) => {
        if (store.state === "banner") $$render(consequent);
      });
    }
    var node_1 = sibling(node, 2);
    {
      var consequent_1 = ($$anchor2) => {
        {
          let $0 = /* @__PURE__ */ user_derived(() => {
            var _a2;
            return $$props.privacyPolicyUrl || ((_a2 = store.config) == null ? void 0 : _a2.privacyPolicyUrl);
          });
          let $1 = /* @__PURE__ */ user_derived(() => {
            var _a2;
            return $$props.cookiePolicyUrl || ((_a2 = store.config) == null ? void 0 : _a2.cookiePolicyUrl);
          });
          PreferenceCenter($$anchor2, {
            get t() {
              return get(t);
            },
            get config() {
              return store.config;
            },
            get preferences() {
              return store.preferences;
            },
            get privacyPolicyUrl() {
              return get($0);
            },
            get cookiePolicyUrl() {
              return get($1);
            },
            onacceptall: handleAcceptAll,
            onrejectall: handleRejectAll,
            onsave: handleSavePreferences,
            onclose: handleClosePreferences
          });
        }
      };
      if_block(node_1, ($$render) => {
        if (store.state === "preferences") $$render(consequent_1);
      });
    }
    var node_2 = sibling(node_1, 2);
    {
      var consequent_2 = ($$anchor2) => {
        var button = root_3();
        template_effect(($0) => set_attribute(button, "aria-label", $0), [() => get(t)("consent.customize")]);
        append($$anchor2, button);
      };
      if_block(node_2, ($$render) => {
        if (store.state === "hidden" && showFloatingButton()) $$render(consequent_2);
      });
    }
    template_effect(
      ($0) => {
        var _a2, _b2, _c, _d, _e, _f, _g;
        set_attribute(div, "lang", get(locale));
        set_attribute(div, "data-nz-theme", $0);
        set_attribute(div, "data-nz-consent", $$props.appKey);
        styles = set_style(div, "", styles, {
          "--nz-accent": (_a2 = get(colors)) == null ? void 0 : _a2.primary,
          "--nz-accent-start": (_b2 = get(colors)) == null ? void 0 : _b2.gradientStart,
          "--nz-accent-end": (_c = get(colors)) == null ? void 0 : _c.gradientEnd,
          "--nz-bg": (_d = get(colors)) == null ? void 0 : _d.background,
          "--nz-text": (_e = get(colors)) == null ? void 0 : _e.text,
          "--nz-border": (_f = get(colors)) == null ? void 0 : _f.border,
          "--nz-consent-toggle-active": (_g = get(colors)) == null ? void 0 : _g.toggleActive
        });
      },
      [() => get(resolvedTheme)()]
    );
    append($$anchor, div);
    return pop($$exports);
  }
  function render(options) {
    const target = typeof options.target === "string" ? document.querySelector(options.target) : options.target;
    if (!target) {
      throw new Error(`[NzConsent] Target element not found: ${options.target}`);
    }
    const component = mount(ConsentWidget, {
      target,
      props: {
        appKey: options.appKey,
        apiUrl: options.apiUrl,
        locale: options.locale,
        position: options.position,
        theme: options.theme,
        colors: options.colors,
        privacyPolicyUrl: options.privacyPolicyUrl,
        cookiePolicyUrl: options.cookiePolicyUrl,
        geoTargeting: options.geoTargeting,
        showFloatingButton: options.showFloatingButton,
        fallbackConfig: options.fallbackConfig,
        onaccept: options.onaccept,
        onreject: options.onreject,
        onupdate: options.onupdate
      }
    });
    return {
      ...component,
      destroy() {
        unmount(component);
      },
      showPreferences() {
        target.dispatchEvent(new CustomEvent("nz-consent-show-preferences"));
      }
    };
  }
  function autoInit() {
    const C = window["__NzConsent"];
    if (!(C == null ? void 0 : C.key)) return;
    function doInit() {
      let mount2 = document.getElementById("nz-consent-mount");
      if (!mount2) {
        mount2 = document.createElement("div");
        mount2.id = "nz-consent-mount";
        document.body.appendChild(mount2);
      }
      render({
        target: mount2,
        appKey: C.key,
        apiUrl: C.apiUrl,
        fallbackConfig: C.fallbackConfig
      });
    }
    if (document.body) {
      doInit();
    } else {
      document.addEventListener("DOMContentLoaded", doInit, { once: true });
    }
  }
  if (typeof window !== "undefined" && window["__NzConsent"]) {
    autoInit();
  }
  if (typeof window !== "undefined" && !customElements.get("nz-consent-widget")) {
    customElements.define(
      "nz-consent-widget",
      (_b = class extends HTMLElement {
        constructor() {
          super(...arguments);
          __publicField(this, "_widget", null);
        }
        connectedCallback() {
          var _a2, _b2, _c, _d, _e, _f, _g;
          const appKey = this.getAttribute("appkey") ?? "";
          if (!appKey) return;
          const props = this;
          let fallbackConfig = props["fallbackConfig"] ?? void 0;
          const fallbackConfigAttr = this.getAttribute("fallback-config");
          if (!fallbackConfig && fallbackConfigAttr) {
            try {
              fallbackConfig = JSON.parse(fallbackConfigAttr);
            } catch (err) {
              console.error("[NzConsent] Invalid fallback-config JSON:", err);
            }
          }
          this._widget = render({
            target: this,
            appKey: props["appKey"] ?? this.getAttribute("appkey") ?? "",
            apiUrl: props["apiUrl"] ?? this.getAttribute("apiurl") ?? void 0,
            locale: props["locale"] ?? this.getAttribute("locale") ?? void 0,
            position: props["position"] ?? this.getAttribute("position") ?? void 0,
            theme: props["theme"] ?? this.getAttribute("theme") ?? void 0,
            privacyPolicyUrl: props["privacyPolicyUrl"] ?? this.getAttribute("privacy-policy-url") ?? void 0,
            cookiePolicyUrl: props["cookiePolicyUrl"] ?? this.getAttribute("cookie-policy-url") ?? void 0,
            geoTargeting: props["geoTargeting"] ?? this.hasAttribute("geo-targeting"),
            showFloatingButton: props["showFloatingButton"] ?? !this.hasAttribute("no-float"),
            fallbackConfig: props["fallbackConfig"] ?? void 0,
            colors: {
              primary: ((_a2 = props["colors"]) == null ? void 0 : _a2.primary) ?? this.getAttribute("color-primary") ?? void 0,
              gradientStart: ((_b2 = props["colors"]) == null ? void 0 : _b2.gradientStart) ?? this.getAttribute("color-gradient-start") ?? void 0,
              gradientEnd: ((_c = props["colors"]) == null ? void 0 : _c.gradientEnd) ?? this.getAttribute("color-gradient-end") ?? void 0,
              background: ((_d = props["colors"]) == null ? void 0 : _d.background) ?? this.getAttribute("color-background") ?? void 0,
              text: ((_e = props["colors"]) == null ? void 0 : _e.text) ?? this.getAttribute("color-text") ?? void 0,
              border: ((_f = props["colors"]) == null ? void 0 : _f.border) ?? this.getAttribute("color-border") ?? void 0,
              toggleActive: ((_g = props["colors"]) == null ? void 0 : _g.toggleActive) ?? this.getAttribute("color-toggle-active") ?? void 0
            }
          });
        }
        attributeChangedCallback(name, _old, _value) {
          if (!this._widget) return;
          if (name === "locale") {
            this._widget.setLocale(this.getAttribute("locale") ?? "en");
          } else {
            this._widget.setColors({
              primary: this.getAttribute("color-primary") ?? void 0,
              gradientStart: this.getAttribute("color-gradient-start") ?? void 0,
              gradientEnd: this.getAttribute("color-gradient-end") ?? void 0,
              background: this.getAttribute("color-background") ?? void 0,
              text: this.getAttribute("color-text") ?? void 0,
              border: this.getAttribute("color-border") ?? void 0,
              toggleActive: this.getAttribute("color-toggle-active") ?? void 0
            });
          }
        }
      }, __publicField(_b, "observedAttributes", [
        "locale",
        "color-primary",
        "color-gradient-start",
        "color-gradient-end",
        "color-background",
        "color-text",
        "color-border",
        "color-toggle-active",
        "fallback-config"
      ]), _b)
    );
  }
  exports.ConsentWidget = ConsentWidget;
  exports.render = render;
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
  return exports;
})({});
