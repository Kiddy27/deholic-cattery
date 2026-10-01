/* Halaman adopsi & profil kucing. Dimuat sebelum main.js agar animasi .reveal ikut aktif. */
(function () {
  "use strict";
  const DATA = window.KUCING || [];
  const page = document.body.dataset.page || "";
  const IG_DM = "https://ig.me/m/deholic.cattery";
  const STATUS = {
    tersedia: { label: "Tersedia", cls: "st-ok" },
    dipesan: { label: "Sudah dipesan", cls: "st-hold" },
    diadopsi: { label: "Sudah diadopsi", cls: "st-done" },
  };
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const umur = (lahir) => {
    if (!lahir) return "";
    const b = new Date(lahir + "T00:00:00"), n = new Date();
    let bln = (n.getFullYear() - b.getFullYear()) * 12 + (n.getMonth() - b.getMonth());
    if (n.getDate() < b.getDate()) bln--;
    if (bln < 1) return `${Math.max(0, Math.floor((n - b) / 864e5 / 7))} minggu`;
    if (bln < 24) return `${bln} bulan`;
    return `${Math.floor(bln / 12)} tahun`;
  };
  const tgl = (d) => new Date(d + "T00:00:00").toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  const href = (k) => `kucing.html?nama=${encodeURIComponent(k.slug)}`;
  const foto = (k, cls = "") =>
    k.foto && k.foto.length
      ? `<img class="${cls}" src="${esc(k.foto[0])}" alt="${esc(k.alt || k.nama)}" width="800" height="800" loading="lazy" decoding="async">`
      : `<div class="${cls} foto-kosong" role="img" aria-label="Belum ada foto ${esc(k.nama)}"><img src="assets/img/hero-cat-bsh.svg" alt="" width="160" height="160"><span>Foto contoh</span></div>`;
  const contohTag = (k) => (k.contoh ? '<span class="tag tag-sample">Contoh</span>' : "");
  const statusTag = (k) => (STATUS[k.status] ? `<span class="tag ${STATUS[k.status].cls}">${STATUS[k.status].label}</span>` : "");

  const PAW_SVG = '<svg class="stamp-paw" viewBox="0 0 200 190" aria-hidden="true" focusable="false"><g><ellipse cx="36" cy="74" rx="19" ry="25" transform="rotate(-22 36 74)"/><ellipse cx="77" cy="34" rx="21" ry="27" transform="rotate(-6 77 34)"/><ellipse cx="123" cy="34" rx="21" ry="27" transform="rotate(6 123 34)"/><ellipse cx="164" cy="74" rx="19" ry="25" transform="rotate(22 164 74)"/><path d="M100 90C142 90 182 118 182 151C182 179 153 188 129 181C115 177 109 173 100 173C91 173 85 177 71 181C47 188 18 179 18 151C18 118 58 90 100 90Z"/></g></svg>';
  const stamp = (k) => (k.status === "diadopsi" ? `<span class="stamp">${PAW_SVG}<span class="stamp-teks">Adopted</span></span>` : "");
  function kartu(k) {
    return `
    <article class="kitten-card glass reveal${k.status === "diadopsi" ? " is-done" : ""}">
      <a class="kitten-foto" href="${href(k)}" tabindex="-1" aria-hidden="true">${foto(k)}${stamp(k)}</a>
      <div class="kitten-body">
        <div class="tags">${statusTag(k)}${contohTag(k)}</div>
        <h3><a href="${href(k)}">${esc(k.nama)}</a></h3>
        <p class="kitten-meta">${esc(k.kelamin)} · ${esc(k.warna)} · ${umur(k.lahir)}</p>
        <p class="muted">${esc(k.sifat)}</p>
        <div class="kitten-aksi">
          <a class="btn btn-small btn-ghost" href="${href(k)}">Lihat profil</a>
          ${k.status === "tersedia" ? `<a class="btn btn-small" href="${IG_DM}" target="_blank" rel="noopener">DM Instagram</a>` : ""}
        </div>
      </div>
    </article>`;
  }

  function renderAdopsi() {
    const grid = document.getElementById("kitten-grid");
    const filters = document.getElementById("kitten-filter");
    if (!grid) return;
    const kittens = DATA.filter((k) => k.peran === "kitten");
    const order = { tersedia: 0, dipesan: 1, diadopsi: 2 };
    kittens.sort((a, b) => order[a.status] - order[b.status]);
    let aktif = "semua";
    const opsi = [["semua", "Semua"], ["tersedia", "Tersedia"], ["dipesan", "Sudah dipesan"], ["diadopsi", "Sudah diadopsi"]];
    const draw = () => {
      const list = aktif === "semua" ? kittens : kittens.filter((k) => k.status === aktif);
      grid.innerHTML = list.length
        ? list.map(kartu).join("")
        : `<p class="muted empty">Saat ini belum ada kitten yang tersedia. Pantau Instagram <a href="https://www.instagram.com/deholic.cattery/" target="_blank" rel="noopener">@deholic.cattery</a> buat kabar kelahiran berikutnya!</p>`;
      grid.querySelectorAll(".reveal").forEach((n) => n.classList.add("in"));
    };
    if (filters) {
      filters.innerHTML = opsi.map(([v, l]) => `<button class="chip" aria-pressed="${v === aktif}" data-v="${v}">${l}</button>`).join("");
      filters.addEventListener("click", (e) => {
        const b = e.target.closest(".chip");
        if (!b) return;
        aktif = b.dataset.v;
        filters.querySelectorAll(".chip").forEach((x) => x.setAttribute("aria-pressed", x === b));
        draw();
      });
    }
    draw();
    const induk = document.getElementById("induk-grid");
    if (induk) {
      induk.innerHTML = DATA.filter((k) => k.peran === "induk").map((k) => `
        <a class="value glass reveal cat-card induk-link" href="${href(k)}">
          ${foto(k)}
          <h3>${esc(k.nama)}</h3>
        </a>`).join("");
    }
  }

  function renderProfil() {
    const el = document.getElementById("profil");
    if (!el) return;
    const slug = new URLSearchParams(location.search).get("nama");
    const k = DATA.find((x) => x.slug === slug);
    if (!k) {
      document.title = "Kucing tidak ditemukan — Deholic Cattery";
      el.innerHTML = `<div class="container narrow notfound reveal"><p class="eyebrow">404</p><h1>Kucing tidak ditemukan</h1><p class="muted">Tautan mungkin salah atau profilnya sudah dipindahkan.</p><a class="btn" href="adopsi.html">Lihat semua kitten</a></div>`;
      return;
    }
    document.title = `${k.nama}${k.peran === "kitten" ? " — Kitten British Shorthair" : ""} — Deholic Cattery`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", k.sifat || `Profil ${k.nama}, kucing British Shorthair di Deholic Cattery.`);
    const rows = [
      ["Peran", k.peran === "induk" ? "Induk" : "Kitten"],
      ["Jenis kelamin", k.kelamin],
      ["Warna bulu", k.warna],
      ["Tanggal lahir", k.lahir && `${tgl(k.lahir)} (${umur(k.lahir)})`],
      ["Vaksin", k.vaksin],
      ["Obat cacing", k.cacing],
      ["Harga", k.status === "diadopsi" ? "" : k.harga],
    ].filter((r) => r[1]);
    const lainnya = DATA.filter((x) => x.peran === "kitten" && x.slug !== k.slug && x.status === "tersedia");
    el.innerHTML = `
      <section class="page-hero">
        <div class="container profil-grid">
          <div class="reveal">
            <div class="profil-foto glass">${foto(k)}${stamp(k)}</div>
            ${k.foto && k.foto.length > 1 ? `<div class="galeri" role="group" aria-label="Foto ${esc(k.nama)}">${k.foto.map((f, i) => `<button type="button" class="galeri-thumb" aria-pressed="${i === 0}" data-i="${i}"><img src="${esc(f)}" alt="${esc((k.altFoto && k.altFoto[i]) || k.nama)}" width="120" height="120" loading="lazy"></button>`).join("")}</div>` : ""}
          </div>
          <div class="reveal">
            <p class="eyebrow"><a href="adopsi.html">${k.peran === "induk" ? "Induk Deholic Cattery" : "Kitten Deholic Cattery"}</a></p>
            <div class="tags">${statusTag(k)}${contohTag(k)}</div>
            <h1>${esc(k.nama)}</h1>
            <p class="lead">${esc(k.deskripsi || k.sifat || "Profil lengkap segera hadir.")}</p>
            <dl class="profil-data">${rows.map(([a, b]) => `<div><dt>${a}</dt><dd>${esc(b)}</dd></div>`).join("")}</dl>
            <div class="kitten-aksi">
              ${k.status === "tersedia" ? `<a class="btn" href="${IG_DM}" target="_blank" rel="noopener">Tanya ${esc(k.nama)} via DM Instagram <span aria-hidden="true">→</span></a>` : ""}
              <a class="btn btn-ghost" href="adopsi.html">Semua kitten</a>
            </div>
            ${k.contoh ? '<p class="muted"><small>Profil ini masih contoh untuk uji tampilan; datanya fiktif.</small></p>' : ""}
          </div>
        </div>
      </section>
      ${lainnya.length ? `<section class="section tight"><div class="container"><h2 class="cat-title reveal">Kitten lain yang tersedia</h2><div class="kitten-grid">${lainnya.map(kartu).join("")}</div></div></section>` : ""}`;
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest(".galeri-thumb");
    if (!b) return;
    const k = DATA.find((x) => x.slug === new URLSearchParams(location.search).get("nama"));
    const big = document.querySelector(".profil-foto img");
    if (!k || !big) return;
    const i = +b.dataset.i;
    big.src = k.foto[i];
    big.alt = (k.altFoto && k.altFoto[i]) || k.alt || k.nama;
    document.querySelectorAll(".galeri-thumb").forEach((x) => x.setAttribute("aria-pressed", x === b));
  });
  if (page === "adopsi") renderAdopsi();
  if (page === "kucing") renderProfil();
  document.querySelectorAll(".kitten-grid .reveal").forEach((n) => n.classList.add("in"));
})();
