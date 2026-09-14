// ============================================================
// Ícones SVG simples (sem fotos de estoque) usados nos cards.
// ============================================================
const ICONS = {
  earbuds: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <circle cx="20" cy="26" r="11" stroke="currentColor" stroke-width="3.5"/>
    <circle cx="44" cy="26" r="11" stroke="currentColor" stroke-width="3.5"/>
    <path d="M14 32c0 10 3 18 3 22s3 4 5 0" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M50 32c0 10-3 18-3 22s-3 4-5 0" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`,
  sport: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <path d="M12 30a20 20 0 0 1 40 0" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="8" y="28" width="10" height="16" rx="4" stroke="currentColor" stroke-width="3.5"/>
    <rect x="46" y="28" width="10" height="16" rx="4" stroke="currentColor" stroke-width="3.5"/>
    <path d="M24 50c3 3 13 3 16 0" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`,
  call: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <path d="M20 14c8-3 16-3 24 0" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="18" cy="30" r="9" stroke="currentColor" stroke-width="3.5"/>
    <circle cx="46" cy="30" r="9" stroke="currentColor" stroke-width="3.5"/>
    <path d="M18 39v6a5 5 0 0 0 5 5h3" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M46 39v3a3 3 0 0 1-3 3h-2" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`,
  premium: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <circle cx="32" cy="24" r="12" stroke="currentColor" stroke-width="3.5"/>
    <path d="M32 36v6M22 42c0 8 4 12 10 12s10-4 10-12" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M27 24l3.5 3.5L37 21" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
};

const mediaMarkup = (product) =>
  product.image
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy" />`
    : ICONS[product.icon] || ICONS.earbuds;

const money = (value) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const starsMarkup = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let out = "";
  for (let i = 0; i < 5; i++) {
    if (i < full) out += "★";
    else if (i === full && half) out += "★";
    else out += `<span class="muted">★</span>`;
  }
  return out;
};

function renderConfig() {
  document.title = `${SITE_CONFIG.siteName} — ${SITE_CONFIG.tagline}`;
  document.querySelectorAll("[data-site-name]").forEach((el) => {
    el.textContent = SITE_CONFIG.siteName;
  });
  document.querySelectorAll("[data-hero-title]").forEach((el) => {
    el.textContent = SITE_CONFIG.heroTitle;
  });
  document.querySelectorAll("[data-hero-subtitle]").forEach((el) => {
    el.textContent = SITE_CONFIG.heroSubtitle;
  });
}

function renderReceipt() {
  const el = document.getElementById("receipt-body");
  if (!el) return;

  const prices = PRODUCTS.map((p) => p.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const featured = PRODUCTS.find((p) => p.featured);

  el.innerHTML = `
    <div class="receipt-line"><span>Produtos comparados</span><span>${PRODUCTS.length}</span></div>
    <div class="receipt-line"><span>Escolha do editor</span><span>${featured ? featured.name : "—"}</span></div>
    <div class="receipt-line"><span>Faixa de preço</span><span>${money(min)} – ${money(max)}</span></div>
    <hr class="receipt-divider" />
    <div class="receipt-line"><span>Critério</span><span></span></div>
  `;
  const criterioEl = document.createElement("p");
  criterioEl.className = "receipt-footer";
  criterioEl.textContent = SITE_CONFIG.criterio;
  el.appendChild(criterioEl);
}

function renderFeatured() {
  const product = PRODUCTS.find((p) => p.featured);
  const mount = document.getElementById("featured-slot");
  if (!product || !mount) return;

  mount.innerHTML = `
    <div class="featured-icon">${mediaMarkup(product)}</div>
    <div>
      <span class="featured-badge">★ Escolha do editor</span>
      <h3>${product.name}</h3>
      <div class="stars" aria-label="Nota ${product.rating} de 5">${starsMarkup(product.rating)}</div>
      <p class="sales-label">${product.salesLabel}</p>
      <p class="review">${product.review}</p>
      <div class="featured-price-row">
        <span class="price-tag">${money(product.price)}</span>
        <a class="btn btn-primary" href="${product.affiliateLink}" target="_blank" rel="noopener sponsored nofollow" data-track-product="${product.name}">
          Ver oferta na Shopee
        </a>
      </div>
    </div>
  `;
}

function productCard(product) {
  const categoryLabel =
    CATEGORIES.find((c) => c.id === product.category)?.label || product.badge;

  return `
    <article class="product-card" data-category="${product.category}">
      <div class="card-top">
        <div class="card-icon">${mediaMarkup(product)}</div>
        <span class="tag">${categoryLabel}</span>
      </div>
      <h3>${product.name}</h3>
      <div class="stars" aria-label="Nota ${product.rating} de 5">${starsMarkup(product.rating)}</div>
      <p class="sales-label">${product.salesLabel}</p>
      <p class="review">${product.review}</p>
      <div class="card-bottom">
        <span class="price-tag">${money(product.price)}</span>
        <a class="btn btn-primary" href="${product.affiliateLink}" target="_blank" rel="noopener sponsored nofollow" data-track-product="${product.name}">
          Ver oferta
        </a>
      </div>
    </article>
  `;
}

function renderGrid(filter = "all") {
  const grid = document.getElementById("product-grid");
  const noResults = document.getElementById("no-results");
  if (!grid) return;

  const items = PRODUCTS.filter((p) => !p.featured).filter(
    (p) => filter === "all" || p.category === filter
  );

  grid.innerHTML = items.map(productCard).join("");
  if (noResults) noResults.style.display = items.length ? "none" : "block";
}

function renderFilters() {
  const container = document.getElementById("filters");
  if (!container) return;

  const buttons = [{ id: "all", label: "Todos" }, ...CATEGORIES];
  container.innerHTML = buttons
    .map(
      (c, i) =>
        `<button class="filter-btn${i === 0 ? " active" : ""}" data-filter="${c.id}">${c.label}</button>`
    )
    .join("");

  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    container
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.toggle("active", b === btn));
    renderGrid(btn.dataset.filter);
  });
}

function renderCategorySection() {
  const container = document.getElementById("category-list");
  if (!container) return;

  container.innerHTML = CATEGORIES.map((c) => {
    const count = PRODUCTS.filter((p) => p.category === c.id).length;
    return `<button class="category-card" data-filter-jump="${c.id}">
      <strong>${c.label}</strong>
      <span>${count} produto${count === 1 ? "" : "s"}</span>
    </button>`;
  }).join("");

  container.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter-jump]");
    if (!btn) return;
    const id = btn.dataset.filterJump;
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
    const targetBtn = document.querySelector(`.filter-btn[data-filter="${id}"]`);
    targetBtn?.click();
  });
}

function renderYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

// Dispara o evento "Lead" do Meta Pixel sempre que alguém clica em
// "Ver oferta" — é o sinal que o Facebook usa pra otimizar o anúncio.
function trackOfferClicks() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-track-product]");
    if (!link || typeof fbq !== "function") return;
    fbq("track", "Lead", { content_name: link.dataset.trackProduct });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderConfig();
  renderReceipt();
  renderFeatured();
  renderFilters();
  trackOfferClicks();
  renderGrid();
  renderCategorySection();
  renderYear();
});
