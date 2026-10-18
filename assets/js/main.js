/* Deholic Cattery — skrip utama (tanpa build step) */
(function () {
  "use strict";

  const ARTICLES = (window.ARTICLES || []).slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  const page = document.body.dataset.page || "";
  const root = document.body.dataset.root || ""; // awalan path jika halaman berada di subfolder

  /* ---------- Ikon ---------- */
  const ICONS = {
    paw: '<circle cx="6" cy="9" r="2"/><circle cx="10" cy="5.5" r="2"/><circle cx="14" cy="5.5" r="2"/><circle cx="18" cy="9" r="2"/><path d="M12 11c-3 0-6 4-6 7 0 2 2 3 3.5 2.5S11 20 12 20s1.5.5 2.5.5S18 20 18 18c0-3-3-7-6-7z"/>',
    bowl: '<path d="M3 12h18a9 9 0 0 1-18 0z"/><path d="M8 8c0-1.5 1-2 1-3.5M12 8c0-1.5 1-2 1-3.5M16 8c0-1.5 1-2 1-3.5"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><path d="M12 8c-1 1.2-1 6.8 0 8 1-1.2 1-6.8 0-8z"/>',
    home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
  };
  const icon = (name, cls = "") =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.paw}</svg>`;

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmtDate = (d) => {
    try { return new Date(d + "T00:00:00").toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }); }
    catch (e) { return d; }
  };
  const link = (a) => `${root}article.html?slug=${encodeURIComponent(a.slug)}`;

  const CAT_HEAD = '<svg class="cover-head" viewBox="0 0 100 100" aria-hidden="true"><path d="M17 44 L14 10 Q14 6 18 8 L40 24 Q50 21 60 24 L82 8 Q86 6 86 10 L83 44 Q92 60 84 74 Q72 94 50 94 Q28 94 16 74 Q8 60 17 44 Z"/><path class="ear" d="M21 32 L20 17 L32 25 Z M79 32 L80 17 L68 25 Z"/></svg>';
  /* Sampul: pakai gambar (a.image) bila ada; tanpa image → sampul ikon + gradien (fallback). */
  const imgSrc = (p) => (/^(https?:)?\/\//.test(p) || p.startsWith("/") ? p : root + p);
  const imgAlt = (a) => a.imageAlt || `Ilustrasi sampul artikel: ${a.title}`;
  const cover = (a, size = "", opts = {}) => {
    if (a.image) {
      const lazy = opts.eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"';
      return `<div class="cover cover-img ${size}">
      <img src="${esc(imgSrc(a.image))}" alt="${esc(imgAlt(a))}" width="1200" height="750" ${lazy} decoding="async" />
    </div>`;
    }
    const [c1, c2] = a.accent || ["#ffc6da", "#ffd9bd"];
    return `<div class="cover ${size}" style="--c1:${esc(c1)};--c2:${esc(c2)}" aria-hidden="true">
      <span class="cover-paws"></span><span class="cover-blob"></span>
      <span class="cover-badge">${CAT_HEAD}${icon(a.icon, "cover-icon")}<span class="blush l"></span><span class="blush r"></span></span>
    </div>`;
  };

  /* ---------- Tema terang/gelap ---------- */
  // Nilai awal sudah dipasang skrip kecil di <head> (mencegah kedip tema).
  const THEME_KEY = "deholic-tema";
  const THEME_COLOR = { light: "#fff8f1", dark: "#241f25" };
  const mqDark = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  const savedTheme = () => { try { const t = localStorage.getItem(THEME_KEY); return t === "dark" || t === "light" ? t : null; } catch (e) { return null; } };
  const currentTheme = () => (document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
  const SUN = '<svg class="ic-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>';
  const MOON = '<svg class="ic-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z"/><path d="M16.5 4.5l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5z" fill="currentColor" stroke="none"/></svg>';
  function syncThemeButton() {
    const b = document.querySelector(".theme-toggle");
    if (!b) return;
    const dark = currentTheme() === "dark";
    const label = dark ? "Ganti ke mode terang" : "Ganti ke mode gelap";
    b.setAttribute("aria-pressed", String(dark));
    b.setAttribute("aria-label", label);
    b.title = label;
  }
  function applyTheme(t, save) {
    const d = document.documentElement;
    d.setAttribute("data-theme", t);
    d.style.colorScheme = t;
    const m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute("content", THEME_COLOR[t]);
    if (save) { try { localStorage.setItem(THEME_KEY, t); } catch (e) { /* mode privat: abaikan */ } }
    syncThemeButton();
  }
  if (!document.documentElement.hasAttribute("data-theme")) applyTheme(savedTheme() || (mqDark && mqDark.matches ? "dark" : "light"), false);
  // Ikuti perubahan setelan sistem selama pengguna belum memilih sendiri.
  if (mqDark) {
    const onSys = (e) => { if (!savedTheme()) applyTheme(e.matches ? "dark" : "light", false); };
    if (mqDark.addEventListener) mqDark.addEventListener("change", onSys); else if (mqDark.addListener) mqDark.addListener(onSys);
  }

  /* ---------- Header & footer bersama ---------- */
  function renderChrome() {
    const nav = [
      { id: "home", href: `${root}index.html`, label: "Beranda" },
      { id: "articles", href: `${root}index.html#artikel`, label: "Artikel" },
      { id: "adopsi", href: `${root}adopsi.html`, label: "Adopsi" },
      { id: "about", href: `${root}tentang.html`, label: "Tentang" },
    ];
    const h = document.getElementById("site-header");
    if (h) {
      h.className = "site-header";
      h.innerHTML = `
        <div class="container nav">
          <a class="brand" href="${root}index.html" aria-label="Deholic Cattery — beranda">
            <img class="brand-logo" src="${root}assets/img/logo-deholic.webp" alt="Deholic Cattery" width="72" height="70" />
          </a>
          <nav id="nav-links" class="nav-links" aria-label="Navigasi utama">
            ${nav.map((n) => `<a href="${n.href}" ${n.id === page || (page === "article" && n.id === "articles") || (page === "kucing" && n.id === "adopsi") ? 'aria-current="page"' : ""}>${n.label}</a>`).join("")}
            <a class="btn btn-small" href="${root}index.html#artikel">Mulai membaca</a>
          </nav>
          <button type="button" class="theme-toggle" aria-pressed="false" aria-label="Ganti ke mode gelap">${MOON}${SUN}</button>
          <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Buka menu">
            <span></span><span></span>
          </button>
        </div>`;
      const tbtn = h.querySelector(".theme-toggle");
      syncThemeButton();
      tbtn.addEventListener("click", () => applyTheme(currentTheme() === "dark" ? "light" : "dark", true));
      const btn = h.querySelector(".nav-toggle");
      btn.addEventListener("click", () => {
        const open = h.classList.toggle("open");
        btn.setAttribute("aria-expanded", open);
        btn.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
      });
      h.querySelectorAll(".nav-links a").forEach((a) => a.addEventListener("click", () => h.classList.remove("open")));
      const onScroll = () => h.classList.toggle("scrolled", window.scrollY > 12);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    const f = document.getElementById("site-footer");
    if (f) {
      const cats = [...new Set(ARTICLES.map((a) => a.category))];
      f.className = "site-footer";
      f.innerHTML = `
        <div class="peek" aria-hidden="true"><svg viewBox="0 0 120 72"><path class="peek-head" d="M12 64 L12 32 Q12 26 16 22 L13 4 Q13 0 17 2 L38 15 Q60 8 82 15 L103 2 Q107 0 107 4 L104 22 Q108 26 108 32 L108 64 Z"/><path class="peek-ear" d="M19 18 L18 9 L29 15 Z M101 18 L102 9 L91 15 Z"/><ellipse class="peek-eye" cx="44" cy="38" rx="5" ry="6"/><ellipse class="peek-eye" cx="76" cy="38" rx="5" ry="6"/><circle cx="46" cy="36" r="1.8" fill="#fff"/><circle cx="78" cy="36" r="1.8" fill="#fff"/><ellipse class="peek-blush" cx="32" cy="48" rx="6" ry="3.5"/><ellipse class="peek-blush" cx="88" cy="48" rx="6" ry="3.5"/><path class="peek-mouth" d="M54 47 q3 4 6 0 q3 4 6 0"/><ellipse class="peek-paw" cx="30" cy="62" rx="13" ry="8"/><ellipse class="peek-paw" cx="90" cy="62" rx="13" ry="8"/></svg></div>
        <div class="container footer-grid">
          <div>
            <a class="brand" href="${root}index.html" aria-label="Deholic Cattery — beranda"><img class="brand-logo brand-logo-lg" src="${root}assets/img/logo-deholic.webp" alt="Deholic Cattery" width="150" height="146" loading="lazy" /></a>
            <p class="muted">Blog Deholic Cattery seputar merawat anabul kucing — ditulis dengan rasa sayang untuk sesama cat lovers.</p>
          </div>
          <div>
            <h2 class="footer-title">Jelajahi</h2>
            <ul><li><a href="${root}index.html">Beranda</a></li><li><a href="${root}index.html#artikel">Semua artikel</a></li><li><a href="${root}adopsi.html">Adopsi</a></li><li><a href="${root}tentang.html">Tentang</a></li></ul>
          </div>
          <div>
            <h2 class="footer-title">Kategori</h2>
            <ul>${cats.map((c) => `<li><a href="${root}index.html?kategori=${encodeURIComponent(c)}#artikel">${esc(c)}</a></li>`).join("")}</ul>
          </div>
        </div>
        <div class="container footer-bottom">
          <p>© ${new Date().getFullYear()} Deholic Cattery.</p>
          <p>Ilustrasi, ikon & sampul artikel dibuat khusus untuk Deholic Cattery.</p>
        </div>`;
    }
  }

  /* ---------- Kartu artikel ---------- */
  const card = (a) => `
    <article class="card glass reveal" data-category="${esc(a.category)}">
      <a class="card-link" href="${link(a)}" aria-label="${esc(a.title)}"></a>
      ${cover(a)}
      <div class="card-body">
        <div class="tags"><span class="tag">${esc(a.category)}</span></div>
        <h3>${esc(a.title)}</h3>
        <p>${esc(a.excerpt)}</p>
        <div class="meta"><span>${fmtDate(a.date)}</span><span class="dot"></span><span>${a.readTime} menit baca</span></div>
      </div>
    </article>`;

  /* ---------- Beranda ---------- */
  function renderHome() {
    const countEl = document.getElementById("stat-articles");
    const catEl = document.getElementById("stat-categories");
    const cats = [...new Set(ARTICLES.map((a) => a.category))];
    if (countEl) countEl.textContent = ARTICLES.length;
    if (catEl) catEl.textContent = cats.length;

    const featured = ARTICLES.find((a) => a.featured) || ARTICLES[0];
    const fEl = document.getElementById("featured");
    if (fEl && featured) {
      fEl.innerHTML = `
        <article class="featured glass reveal">
          ${cover(featured, "cover-lg")}
          <div class="featured-body">
            <div class="tags"><span class="tag tag-glow">Sorotan</span><span class="tag">${esc(featured.category)}</span></div>
            <h3><a href="${link(featured)}">${esc(featured.title)}</a></h3>
            <p>${esc(featured.excerpt)}</p>
            <div class="meta"><span>${esc(featured.author)}</span><span class="dot"></span><span>${fmtDate(featured.date)}</span><span class="dot"></span><span>${featured.readTime} menit baca</span></div>
            <a class="btn" href="${link(featured)}">Baca artikel <span aria-hidden="true">→</span></a>
          </div>
        </article>`;
    }

    const grid = document.getElementById("grid");
    const filters = document.getElementById("filters");
    if (!grid) return;
        const params = new URLSearchParams(location.search);
    let active = params.get("kategori") || "Semua";
    if (active !== "Semua" && !cats.includes(active)) active = "Semua";

    const draw = () => {
      const list = active === "Semua" ? ARTICLES : ARTICLES.filter((a) => a.category === active);
      grid.innerHTML = list.length ? list.map(card).join("") : '<p class="muted empty">Belum ada artikel di kategori ini.</p>';
      observe(grid.querySelectorAll(".reveal"));
      bindGlow(grid.querySelectorAll(".card"));
    };
    if (filters) {
      filters.innerHTML = ["Semua", ...cats]
        .map((c) => `<button class="chip" role="tab" aria-selected="${c === active}" data-cat="${esc(c)}">${esc(c)}</button>`)
        .join("");
      filters.addEventListener("click", (e) => {
        const b = e.target.closest(".chip");
        if (!b) return;
        active = b.dataset.cat;
        filters.querySelectorAll(".chip").forEach((x) => x.setAttribute("aria-selected", x === b));
        const url = new URL(location.href);
        if (active === "Semua") url.searchParams.delete("kategori"); else url.searchParams.set("kategori", active);
        history.replaceState(null, "", url);
        draw();
      });
    }
    draw();
  }

  /* ---------- Tombol bagikan ---------- */
  const SHARE_ICONS = {
    wa: '<path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41Z"/>',
    fb: '<path fill="currentColor" d="M9.1 23.69v-7.98H6.63v-3.67H9.1v-1.58c0-4.09 1.85-5.98 5.86-5.98.4 0 .96.04 1.47.1.39.04.77.11 1.14.2v3.32a8.6 8.6 0 0 0-.65-.03 26.8 26.8 0 0 0-.73-.01c-.71 0-1.26.1-1.68.31a1.7 1.7 0 0 0-.68.62c-.26.42-.37 1-.37 1.75v1.3h3.92l-.39 2.1-.29 1.56h-3.24v8.25C19.4 23.24 24 18.18 24 12.04c0-6.63-5.37-12-12-12s-12 5.37-12 12c0 5.63 3.87 10.35 9.1 11.65Z"/>',
    x: '<path fill="currentColor" d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.59-6.64 7.59H.47l8.6-9.83L0 1.15h7.59l5.24 6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3Z"/>',
    tg: '<path fill="currentColor" d="M11.94 0A12 12 0 1 0 12 0h-.06Zm4.97 7.22c.1 0 .32.02.46.14.1.08.16.2.17.33.02.09.04.3.02.47-.18 1.9-.96 6.5-1.36 8.63-.17.9-.5 1.2-.82 1.23-.7.06-1.23-.46-1.9-.9-1.06-.7-1.66-1.13-2.68-1.8-1.19-.78-.42-1.21.26-1.91.17-.19 3.25-2.98 3.3-3.23.01-.03.02-.15-.05-.21-.07-.06-.18-.04-.25-.03-.1.03-1.8 1.14-5.06 3.35-.48.33-.92.49-1.3.48-.43-.01-1.25-.24-1.87-.44-.75-.25-1.35-.37-1.3-.79.03-.22.33-.44.9-.66 3.5-1.53 5.83-2.53 7-3.02 3.33-1.38 4.02-1.62 4.48-1.63Z"/>',
    copy: '<path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M10 13a5 5 0 0 0 7.07.07l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.07-.07l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    native: '<g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></g>',
  };
  const shareIc = (k) => `<span class="share-ic"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${SHARE_ICONS[k]}</svg></span>`;
  function shareBlock(a, variant) {
    const url = `https://deholic.id/article.html?slug=${encodeURIComponent(a.slug)}`;
    const u = encodeURIComponent(url);
    const t = encodeURIComponent(a.title);
    const links = [
      ["wa", "WhatsApp", `https://wa.me/?text=${encodeURIComponent(`${a.title} ${url}`)}`],
      ["fb", "Facebook", `https://www.facebook.com/sharer/sharer.php?u=${u}`],
      ["x", "X", `https://twitter.com/intent/tweet?text=${t}&url=${u}`],
      ["tg", "Telegram", `https://t.me/share/url?url=${u}&text=${t}`],
    ];
    const items = links.map(([k, name, href]) => `<li><a class="share-btn share-${k}" href="${esc(href)}" target="_blank" rel="noopener noreferrer" aria-label="Bagikan ke ${name} (membuka tab baru)" title="Bagikan ke ${name}">${shareIc(k)}<span class="share-text">${name}</span></a></li>`).join("")
      + `<li><button type="button" class="share-btn share-copy" data-share-copy="${esc(url)}" aria-label="Salin link artikel" title="Salin link">${shareIc("copy")}<span class="share-text">Salin link</span></button></li>`
      + `<li class="share-native-item" hidden><button type="button" class="share-btn share-native" data-share-native aria-label="Bagikan lewat aplikasi lain, misalnya Instagram" title="Bagikan">${shareIc("native")}<span class="share-text">Bagikan</span></button></li>`;
    if (variant === "compact") {
      return `<div class="share share-compact" role="group" aria-label="Bagikan artikel"><span class="share-label" aria-hidden="true">Bagikan:</span><ul class="share-list">${items}</ul></div>`;
    }
    return `<section class="share share-end" aria-labelledby="share-end-title"><h2 id="share-end-title">Suka artikel ini? Bagikan, yuk! 🐾</h2><p>Siapa tahu bermanfaat untuk sesama cat lovers.</p><ul class="share-list">${items}</ul></section>`;
  }
  let toastTimer = null;
  function toast(msg) {
    let el = document.getElementById("toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.className = "toast";
      el.setAttribute("role", "status");
      el.setAttribute("aria-live", "polite");
      document.body.appendChild(el);
    }
    el.textContent = msg;
    // paksa reflow agar transisi berjalan saat dipanggil beruntun
    void el.offsetWidth;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
  }
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise((resolve, reject) => {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      ta.remove();
      ok ? resolve() : reject(new Error("copy gagal"));
    });
  }
  function bindShare(root, a) {
    const url = `https://deholic.id/article.html?slug=${encodeURIComponent(a.slug)}`;
    if (navigator.share) root.querySelectorAll(".share-native-item").forEach((n) => { n.hidden = false; });
    root.addEventListener("click", (e) => {
      const c = e.target.closest("[data-share-copy]");
      if (c) {
        copyText(c.dataset.shareCopy).then(() => toast("Link disalin!"), () => toast("Gagal menyalin, salin manual dari address bar ya."));
        return;
      }
      const n = e.target.closest("[data-share-native]");
      if (n && navigator.share) {
        navigator.share({ title: a.title, text: a.excerpt, url }).catch(() => { /* dibatalkan pengguna */ });
      }
    });
  }

  /* ---------- Halaman artikel ---------- */
  function renderArticle() {
    const el = document.getElementById("article");
    if (!el) return;
    const slug = new URLSearchParams(location.search).get("slug");
    const idx = ARTICLES.findIndex((a) => a.slug === slug);
    const a = idx >= 0 ? ARTICLES[idx] : null;

    if (!a) {
      document.title = "Artikel tidak ditemukan — Deholic Cattery";
      el.innerHTML = `
        <div class="container narrow notfound reveal">
          <p class="eyebrow">404</p>
          <h1>Artikel tidak ditemukan</h1>
          <p class="muted">Tautan mungkin salah atau artikel sudah dipindahkan.</p>
          <a class="btn" href="${root}index.html#artikel">Lihat semua artikel</a>
        </div>`;
      observe(el.querySelectorAll(".reveal"));
      return;
    }

    const setSeoMeta = (url, title, desc) => {
    const set = (sel, attr, val) => { const m = document.querySelector(sel); if (m && val) m.setAttribute(attr, val); };
    set('link[rel="canonical"]', "href", url); set('meta[property="og:url"]', "content", url);
    set('meta[property="og:title"]', "content", title); set('meta[property="og:description"]', "content", desc);
    if (a.image) {
      const abs = new URL(a.image, "https://deholic.id/").href;
      set('meta[property="og:image"]', "content", abs);
      set('meta[property="og:image:width"]', "content", "1200");
      set('meta[property="og:image:height"]', "content", "750");
      set('meta[name="twitter:image"]', "content", abs);
    }
  };
    document.title = `${a.title} — Deholic Cattery`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", a.excerpt);
    setSeoMeta(`https://deholic.id/article.html?slug=${encodeURIComponent(a.slug)}`, document.title, a.excerpt);

    const prev = ARTICLES[idx + 1];
    const next = ARTICLES[idx - 1];
    const related = ARTICLES.filter((x) => x !== a).slice(0, 3);

    el.innerHTML = `
      <header class="article-hero">
        <div class="container narrow">
          <nav class="crumbs" aria-label="Breadcrumb"><a href="${root}index.html">Beranda</a><span>/</span><a href="${root}index.html?kategori=${encodeURIComponent(a.category)}#artikel">${esc(a.category)}</a></nav>
          <div class="tags"><span class="tag">${esc(a.category)}</span></div>
          <h1>${esc(a.title)}</h1>
          <p class="lead">${esc(a.excerpt)}</p>
          <div class="byline">
            <span class="avatar">${icon("paw")}</span>
            <div><strong>${esc(a.author)}</strong><span class="muted">${fmtDate(a.date)} · ${a.readTime} menit baca</span></div>
          </div>
          ${shareBlock(a, "compact")}
        </div>
        <div class="container mid">${cover(a, "cover-xl", { eager: true })}</div>
      </header>
      <div class="container narrow">
        <div class="prose">${a.content}</div>
        ${shareBlock(a, "end")}
        <nav class="pager" aria-label="Artikel sebelumnya dan berikutnya">
          ${prev ? `<a class="glass" href="${link(prev)}"><span class="muted">← Sebelumnya</span><strong>${esc(prev.title)}</strong></a>` : "<span></span>"}
          ${next ? `<a class="glass right" href="${link(next)}"><span class="muted">Berikutnya →</span><strong>${esc(next.title)}</strong></a>` : "<span></span>"}
        </nav>
      </div>
      <section class="section related">
        <div class="container">
          <div class="section-head"><div><p class="eyebrow">Lanjut membaca</p><h2>Artikel lainnya</h2></div></div>
          <div class="grid">${related.map(card).join("")}</div>
        </div>
      </section>`;
    observe(el.querySelectorAll(".reveal"));
    bindGlow(el.querySelectorAll(".card"));
    bindShare(el, a);

    // bilah progres baca
    const bar = document.querySelector(".progress span");
    if (bar) {
      const upd = () => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        bar.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
      };
      window.addEventListener("scroll", upd, { passive: true });
      upd();
    }
  }

  /* ---------- Animasi ---------- */
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let io = null;
  if ("IntersectionObserver" in window && !reduce) {
    io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
  }
  function observe(nodes) {
    nodes.forEach((n, i) => {
      if (n.dataset.obs) return;
      n.dataset.obs = "1";
      if (!io) return n.classList.add("in");
      n.style.transitionDelay = `${Math.min(i % 3, 2) * 80}ms`;
      io.observe(n);
    });
  }
  function bindGlow(nodes) {
    nodes.forEach((n) =>
      n.addEventListener("pointermove", (e) => {
        const r = n.getBoundingClientRect();
        n.style.setProperty("--mx", `${e.clientX - r.left}px`);
        n.style.setProperty("--my", `${e.clientY - r.top}px`);
      })
    );
  }

  renderChrome();
  if (page === "home") renderHome();
  if (page === "article") renderArticle();
  observe(document.querySelectorAll(".reveal:not(.in)"));
})();
