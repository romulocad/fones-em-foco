// ============================================================
// CONFIGURAÇÃO DO SITE
// Troque aqui o nome do site, a chamada do hero e o texto do
// "recibo" — tudo mais no site lê a partir daqui e do array
// PRODUCTS logo abaixo.
// ============================================================
const SITE_CONFIG = {
  siteName: "Fones em Foco",
  tagline: "Curadoria de fones de ouvido",
  heroTitle: "Fones que valem a pena — sem cair em furada",
  heroSubtitle:
    "A gente compara os fones mais vendidos da Shopee, lê as avaliações de verdade e separa o que realmente entrega. Você economiza o tempo de pesquisar (e o dinheiro de errar).",
  criterio:
    "Vendas + avaliações + comentários reais dos compradores — não só ficha técnica.",
  // Link da vitrine de afiliado na Shopee (botão "Ver mais achados").
  storefrontUrl:
    "https://collshp.com/romulocad10782?share_channel_code=1&view=storefront",
};

// ============================================================
// CATEGORIAS (usadas nos filtros e nas tags dos cards)
// ============================================================
const CATEGORIES = [
  { id: "custo-beneficio", label: "Custo-benefício" },
  { id: "treino", label: "Treino" },
  { id: "premium", label: "Premium" },
  { id: "trabalho", label: "Chamadas / trabalho" },
];

// ============================================================
// PRODUTOS
// Dados reais coletados na Shopee em 14/09/2026 (nome, preço,
// nota, vendas) e links de afiliado gerados no Portal de
// Afiliados da Shopee (Marcelo Rômulo).
//
// - `affiliateLink`: já é o link de afiliado real (s.shopee.com.br/...).
//   Se um produto sair de linha na Shopee, gere um novo link em
//   affiliate.shopee.com.br → Oferta de produto → Obter link.
// - `featured: true` marca o produto de destaque (Escolha do
//   editor). Deixe só UM produto como featured.
// - `rating`: nota de 0 a 5 (aceita meio ponto, ex: 4.5).
// - `icon`: nome do ícone SVG usado no card (ver ICONS em main.js).
// ============================================================
const PRODUCTS = [
  {
    id: "pop-up-anc",
    name: "Fone Pop-Up Cancelamento de Ruído",
    category: "premium",
    price: 42.89,
    rating: 4.8,
    badge: "Mais vendido",
    salesLabel: "100 mil+ vendas",
    review:
      "Abre a tampa e já conecta sozinho — dispensa aquele ritual de segurar botão. Tem cancelamento de ruído ativo, nota 4.8 e mais de 100 mil unidades vendidas, o que dá segurança de que não é sorte: é o tipo de fone que resolve o dia a dia sem drama.",
    icon: "premium",
    featured: true,
    affiliateLink: "https://s.shopee.com.br/30o5tfde9P",
  },
  {
    id: "senbenbao-x55",
    name: "Senbenbao X55 TWS Sono",
    category: "custo-beneficio",
    price: 13.6,
    rating: 5,
    badge: "Custo-benefício",
    salesLabel: "20 mil+ vendas",
    review:
      "Feito pra quem dorme com fone no ouvido: bem fino, não incomoda deitado de lado, e tem display LED pra ver a carga da bateria sem abrir o app. Nota máxima (5.0) dos compradores.",
    icon: "earbuds",
    affiliateLink: "https://s.shopee.com.br/50ZAHNV9jZ",
  },
  {
    id: "xiaomi-redmi-airdots",
    name: "Xiaomi Redmi Airdots",
    category: "custo-beneficio",
    price: 19.79,
    rating: 4.8,
    badge: "Custo-benefício",
    salesLabel: "40 mil+ vendas",
    review:
      "Assinatura Xiaomi por menos de R$ 20 — pra quem confia mais numa marca conhecida do que num nome genérico. Compacto, estojo recarregável, e mais de 40 mil vendidos confirmam que não é só a marca que convence.",
    icon: "earbuds",
    affiliateLink: "https://s.shopee.com.br/9zxqEapNoh",
  },
  {
    id: "pro5-premium",
    name: "Fone Bluetooth Pro5 Premium",
    category: "premium",
    price: 66.88,
    rating: 4.7,
    badge: "Premium",
    salesLabel: "100 mil+ vendas",
    review:
      "Sobe de faixa de preço mas entrega imersão de verdade: cancelamento de ruído mais robusto e acabamento que parece fone de loja física. Boa opção pra quem já usou fone barato e quer sentir a diferença.",
    icon: "premium",
    affiliateLink: "https://s.shopee.com.br/9peQ2Jc9IW",
  },
  {
    id: "corrida-academia",
    name: "Fone Bluetooth Corrida e Academia",
    category: "treino",
    price: 40.99,
    rating: 4.9,
    badge: "Treino",
    salesLabel: "40 mil+ vendas",
    review:
      "Pensado pra quem transpira: bateria de longa duração pra não deixar na mão no meio do treino, e o formato foi desenhado pra ficar firme correndo. Nota 4.9, a mais alta da nossa lista.",
    icon: "sport",
    affiliateLink: "https://s.shopee.com.br/2qUfhTbWOy",
  },
  {
    id: "p9-air-esportivo",
    name: "P9 Air Top Casual Esportivo",
    category: "treino",
    price: 24.87,
    rating: 4.7,
    badge: "Treino",
    salesLabel: "100 mil+ vendas",
    review:
      "Leve e recarregável, serve tanto pra caminhada quanto pro dia a dia no transporte. Mais de 100 mil vendidos — um dos fones mais comprados da Shopee no nicho.",
    icon: "sport",
    affiliateLink: "https://s.shopee.com.br/4LJTUGMGxh",
  },
  {
    id: "e6s-preta-display",
    name: "E6S Preta TWS com Display",
    category: "trabalho",
    price: 16.26,
    rating: 4.8,
    badge: "Chamadas",
    salesLabel: "100 mil+ vendas",
    review:
      "Tem microfone e display digital mostrando a % de bateria do case, dois detalhes que fazem diferença em reunião ou ligação rápida. Cancelamento de ruído ajuda a isolar a voz do que está ao redor.",
    icon: "call",
    affiliateLink: "https://s.shopee.com.br/9fKzq5jM8R",
  },
  {
    id: "p47-headphone",
    name: "Fone P47 Headphone",
    category: "trabalho",
    price: 18.98,
    rating: 4.8,
    badge: "Chamadas",
    salesLabel: "200 mil+ vendas",
    review:
      "O mais vendido da nossa lista — mais de 200 mil unidades. Redução de ruído nas chamadas e conexão estável são os motivos mais citados nas avaliações de quem usa pra trabalho.",
    icon: "call",
    affiliateLink: "https://s.shopee.com.br/6Al7fga0l4",
  },
  {
    id: "tws-branco",
    name: "Fone Bluetooth TWS Branco (Android & iOS)",
    category: "custo-beneficio",
    price: 26.99,
    rating: 4.6,
    badge: "Custo-benefício",
    salesLabel: "40 mil+ vendas",
    review:
      "Visual clean em branco, com estojo compacto e conexão simples. Funciona em Android e iOS, e mais de 40 mil compradores deram nota 4.6 — boa opção de fone sem fio por menos de R$ 30.",
    icon: "earbuds",
    affiliateLink: "https://s.shopee.com.br/1BMRiWadiW",
  },
  {
    id: "pro4-tws",
    name: "Pro 4 TWS Sem Fio",
    category: "custo-beneficio",
    price: 12.38,
    rating: 4.8,
    badge: "Custo-benefício",
    salesLabel: "90 mil+ vendas",
    review:
      "O mais barato da lista, mas isso não impediu 90 mil vendas: bateria leve e estojo portátil, indicado até pra quem dorme com o fone no ouvido.",
    icon: "earbuds",
    affiliateLink: "https://s.shopee.com.br/70KEfGw1d4",
  },
];
