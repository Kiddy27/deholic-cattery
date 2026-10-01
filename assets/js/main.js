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
  const cover = (a, size = "") => {
    const [c1, c2] = a.accent || ["#ffc6da", "#ffd9bd"];
    return `<div class="cover ${size}" style="--c1:${esc(c1)};--c2:${esc(c2)}" aria-hidden="true">
      <span class="cover-paws"></span><span class="cover-blob"></span>
      <span class="cover-badge">${CAT_HEAD}${icon(a.icon, "cover-icon")}<span class="blush l"></span><span class="blush r"></span></span>
    </div>`;
  };
  const sampleTag = (a) => (a.sample ? '<span class="tag tag-sample" title="Konten contoh — silakan ganti">Contoh</span>' : "");

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
          <button class="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Buka menu">
            <span></span><span></span>
          </button>
          <nav id="nav-links" class="nav-links" aria-label="Navigasi utama">
            ${nav.map((n) => `<a href="${n.href}" ${n.id === page || (page === "article" && n.id === "articles") || (page === "kucing" && n.id === "adopsi") ? 'aria-current="page"' : ""}>${n.label}</a>`).join("")}
            <a class="btn btn-small" href="${root}index.html#artikel">Mulai membaca</a>
          </nav>
        </div>`;
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
            <h4>Jelajahi</h4>
            <ul><li><a href="${root}index.html">Beranda</a></li><li><a href="${root}index.html#artikel">Semua artikel</a></li><li><a href="${root}adopsi.html">Adopsi</a></li><li><a href="${root}tentang.html">Tentang</a></li></ul>
          </div>
          <div>
            <h4>Kategori</h4>
            <ul>${cats.map((c) => `<li><a href="${root}index.html?kategori=${encodeURIComponent(c)}#artikel">${esc(c)}</a></li>`).join("")}</ul>
          </div>
        </div>
        <div class="container footer-bottom">
          <p>© ${new Date().getFullYear()} Deholic Cattery. Artikel bertanda “Contoh” adalah konten sampel.</p>
          <p>Ilustrasi & ikon: SVG buatan sendiri — tanpa gambar berhak cipta pihak ketiga.</p>
        </div>`;
    }
  }

  /* ---------- Kartu artikel ---------- */
  const card = (a) => `
    <article class="card glass reveal" data-category="${esc(a.category)}">
      <a class="card-link" href="${link(a)}" aria-label="${esc(a.title)}"></a>
      ${cover(a)}
      <div class="card-body">
        <div class="tags"><span class="tag">${esc(a.category)}</span>${sampleTag(a)}</div>
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
            <div class="tags"><span class="tag tag-glow">Sorotan</span><span class="tag">${esc(featured.category)}</span>${sampleTag(featured)}</div>
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

    document.title = `${a.title} — Deholic Cattery`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", a.excerpt);

    const prev = ARTICLES[idx + 1];
    const next = ARTICLES[idx - 1];
    const related = ARTICLES.filter((x) => x !== a).slice(0, 3);

    el.innerHTML = `
      <header class="article-hero">
        <div class="container narrow">
          <nav class="crumbs" aria-label="Breadcrumb"><a href="${root}index.html">Beranda</a><span>/</span><a href="${root}index.html?kategori=${encodeURIComponent(a.category)}#artikel">${esc(a.category)}</a></nav>
          <div class="tags"><span class="tag">${esc(a.category)}</span>${sampleTag(a)}</div>
          <h1>${esc(a.title)}</h1>
          <p class="lead">${esc(a.excerpt)}</p>
          <div class="byline">
            <span class="avatar">${icon("paw")}</span>
            <div><strong>${esc(a.author)}</strong><span class="muted">${fmtDate(a.date)} · ${a.readTime} menit baca</span></div>
          </div>
        </div>
        <div class="container mid">${cover(a, "cover-xl")}</div>
      </header>
      <div class="container narrow">
        ${a.sample ? '<aside class="notice" role="note"><strong>Konten contoh.</strong> Artikel ini adalah tulisan sampel — ganti dengan tulisanmu sendiri di <code>assets/js/articles.js</code>.</aside>' : ""}
        <div class="prose">${a.content}</div>
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
