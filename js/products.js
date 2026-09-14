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
// - `affiliateLink`: cole aqui o link de afiliado da Shopee
//   assim que seu cadastro for aprovado (hoje está "#").
// - `featured: true` marca o produto de destaque (Escolha do
//   editor). Deixe só UM produto como featured.
// - `rating`: nota de 0 a 5 (aceita meio ponto, ex: 4.5).
// - `icon`: nome do ícone SVG usado no card (ver ICONS em main.js).
// ============================================================
const PRODUCTS = [
  {
    id: "m10-tws",
    name: "M10 TWS",
    category: "custo-beneficio",
    price: 19.9,
    rating: 5,
    badge: "Mais vendido",
    salesLabel: "18 mil+ vendas",
    review:
      "O fone mais vendido da Shopee no nicho, e não é à toa: som equilibrado, case compacto e um custo por unidade que nenhum concorrente encosta. Para quem quer um TWS de entrada sem arriscar, é o pedido mais seguro do catálogo.",
    icon: "earbuds",
    featured: true,
    affiliateLink: "#",
  },
  {
    id: "inpods-13",
    name: "Inpods 13",
    category: "custo-beneficio",
    price: 24.9,
    rating: 4.5,
    badge: "Custo-benefício",
    salesLabel: "9 mil+ vendas",
    review:
      "Visual inspirado nos fones da Apple por um preço de fone genérico. Toque touch funciona bem e a bateria do case aguenta o dia todo. Ótima opção pra presentear ou pra ter de reserva.",
    icon: "earbuds",
    affiliateLink: "#",
  },
  {
    id: "e6s-tws",
    name: "E6S TWS",
    category: "custo-beneficio",
    price: 22.5,
    rating: 4,
    badge: "Custo-benefício",
    salesLabel: "6 mil+ vendas",
    review:
      "Simples e direto: conecta rápido, não corta o som e o microfone dá conta de uma ligação rápida. Não é o mais bonito da lista, mas cumpre o que promete.",
    icon: "earbuds",
    affiliateLink: "#",
  },
  {
    id: "kodi-tws200",
    name: "Kodi TWS200",
    category: "treino",
    price: 34.9,
    rating: 4.5,
    badge: "Treino",
    salesLabel: "4 mil+ vendas",
    review:
      "Encaixe mais firme que o padrão TWS, pensado pra quem treina. Resistência a suor relatada pelos compradores nas avaliações e não costuma cair durante corrida ou academia.",
    icon: "sport",
    affiliateLink: "#",
  },
  {
    id: "1hora-aut201",
    name: "1HORA AUT201",
    category: "treino",
    price: 29.9,
    rating: 4,
    badge: "Treino",
    salesLabel: "3 mil+ vendas",
    review:
      "Leve, com haste curta que não bate no capacete nem no boné — boa pedida pra quem pedala ou corre na rua. Autonomia de bateria consistente com o que a loja anuncia.",
    icon: "sport",
    affiliateLink: "#",
  },
  {
    id: "helmarq-bluetooth",
    name: "Helmarq Bluetooth",
    category: "trabalho",
    price: 39.9,
    rating: 4,
    badge: "Chamadas",
    salesLabel: "2 mil+ vendas",
    review:
      "Microfone com cancelamento de ruído básico que se sai bem em reunião e ligação. Não é o fone pra ouvir música com grave forte, mas é confiável pro home office.",
    icon: "call",
    affiliateLink: "#",
  },
  {
    id: "kz-edx-pro",
    name: "KZ EDX Pro",
    category: "premium",
    price: 89.9,
    rating: 5,
    badge: "Premium",
    salesLabel: "1,5 mil+ vendas",
    review:
      "A KZ é marca conhecida entre quem curte áudio de verdade — driver híbrido, grave presente e agudos limpos. Sai do padrão fone-de-brinde e entrega som de fone intermediário de verdade.",
    icon: "premium",
    affiliateLink: "#",
  },
  {
    id: "xo-tws",
    name: "XO TWS",
    category: "premium",
    price: 74.9,
    rating: 4.5,
    badge: "Premium",
    salesLabel: "1 mil+ vendas",
    review:
      "Cancelamento de ruído ativo em um preço que normalmente só se vê em fone bem mais caro. Acabamento com aparência premium e app próprio pra ajustar o equalizador.",
    icon: "premium",
    affiliateLink: "#",
  },
  {
    id: "jbl-tune-220tws",
    name: "JBL Tune 220TWS",
    category: "trabalho",
    price: 129.9,
    rating: 4.5,
    badge: "Marca confiável",
    salesLabel: "800+ vendas",
    review:
      "Se o critério é marca conhecida e garantia mais tranquila, a JBL entrega. Chamadas com voz nítida, app JBL Headphones pra ajustar o som e a segurança de comprar de fabricante grande.",
    icon: "call",
    affiliateLink: "#",
  },
  {
    id: "multilaser-pulse-expert",
    name: "Multilaser Pulse Expert",
    category: "custo-beneficio",
    price: 59.9,
    rating: 4,
    badge: "Custo-benefício",
    salesLabel: "1,2 mil+ vendas",
    review:
      "Multilaser é outra marca nacional fácil de assistência técnica. Esse modelo equilibra bateria, som e microfone sem pesar no bolso — bom meio-termo pra quem quer sair do fone de R$ 20.",
    icon: "earbuds",
    affiliateLink: "#",
  },
];
