(function() {
  "use strict";
  function boot() {
    const currentScript = document.currentScript;
    if (!currentScript) {
      console.error("[NzConsent] Loader must be a synchronous <script> tag, not dynamically injected.");
      return;
    }
    const ds = currentScript.dataset;
    const appKey = ds["appKey"] ?? "";
    const apiUrl = ds["apiUrl"] ?? "";
    const widgetSrc = ds["widgetUrl"] ?? "";
    if (!appKey) {
      console.error("[NzConsent] data-app-key is required on the loader <script> tag.");
      return;
    }
    let fallbackConfig = window["__NzConsentConfig"] ?? null;
    if (ds["localConfig"]) {
      try {
        fallbackConfig = JSON.parse(ds["localConfig"]);
      } catch {
        console.error("[NzConsent] data-local-config is not valid JSON — ignoring.");
      }
    }
    const STORAGE_KEY = "nz_consent_" + appKey;
    const blockedScripts = [];
    function matchPattern(url, pattern) {
      try {
        return new RegExp(
          pattern.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*"),
          "i"
        ).test(url);
      } catch {
        return url.includes(pattern);
      }
    }
    function blockCategory(el) {
      var _a;
      const explicit = el.getAttribute("data-consent-category");
      if (explicit && explicit !== "essential") return explicit;
      const src = el.src || "";
      if (!src) return null;
      if ((_a = fallbackConfig == null ? void 0 : fallbackConfig.scripts) == null ? void 0 : _a.length) {
        for (const p of fallbackConfig.scripts) {
          if (matchPattern(src, p.pattern)) return p.category;
        }
        return null;
      }
      return null;
    }
    function blockEl(el, category) {
      const orig = el.type || "text/javascript";
      if (orig === "text/plain") {
        if (blockedScripts.some((b) => b.element === el)) return;
        const restoreType = el.getAttribute("data-original-type") || "text/javascript";
        blockedScripts.push({ element: el, originalType: restoreType, category });
        return;
      }
      if (!el.src) {
        console.warn(
          `[NzConsent] Inline script with data-consent-category="${category}" could not be blocked — it already executed. Add type="text/plain" to the <script> tag to prevent early execution.`,
          el
        );
        return;
      }
      el.type = "text/plain";
      el.setAttribute("data-original-type", orig);
      blockedScripts.push({ element: el, originalType: orig, category });
    }
    function release(prefs) {
      var _a;
      C._prefs = prefs;
      const remaining = [];
      for (const b of blockedScripts) {
        if (prefs[b.category]) {
          const old = b.element;
          const el = document.createElement("script");
          for (const attr of old.attributes) {
            if (attr.name === "type") el.type = b.originalType;
            else if (attr.name === "data-consent-category" || attr.name === "data-original-type") continue;
            else el.setAttribute(attr.name, attr.value);
          }
          if (old.textContent) el.textContent = old.textContent;
          (_a = old.parentNode) == null ? void 0 : _a.replaceChild(el, old);
        } else {
          remaining.push(b);
        }
      }
      blockedScripts.length = 0;
      blockedScripts.push(...remaining);
    }
    const C = {
      key: appKey,
      apiUrl,
      widgetSrc,
      localConfig: fallbackConfig,
      _blockedScripts: blockedScripts,
      // shared reference
      _observer: null,
      _prefs: null,
      release
    };
    window["__NzConsent"] = C;
    function loadStored() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const p = JSON.parse(raw);
        if (!p || typeof p !== "object") return null;
        if (typeof p["expiresAt"] === "number" && Date.now() > p["expiresAt"]) {
          localStorage.removeItem(STORAGE_KEY);
          return null;
        }
        return p["preferences"] ?? null;
      } catch {
        return null;
      }
    }
    const stored = loadStored();
    C._prefs = stored;
    function scanExisting() {
      const candidates = document.querySelectorAll(
        "script[src], script[data-consent-category]"
      );
      for (const el of candidates) {
        if (el === currentScript) continue;
        const cat = blockCategory(el);
        if (cat) blockEl(el, cat);
      }
    }
    function observe() {
      const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          for (const node of m.addedNodes) {
            if (node instanceof HTMLScriptElement) {
              const cat = blockCategory(node);
              if (cat) blockEl(node, cat);
            }
          }
        }
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });
      C._observer = observer;
    }
    function loadWidget() {
      const s = document.createElement("script");
      s.src = widgetSrc;
      document.head.appendChild(s);
    }
    if (!stored) {
      scanExisting();
      observe();
    }
    if (widgetSrc) {
      loadWidget();
    }
  }
  boot();
})();
