# Fones em Foco

Site estático (HTML/CSS/JS puro, sem build) de curadoria/comparativo de fones
de ouvido, com links de afiliado Shopee. Uma página só, mobile-first, modo
escuro automático.

## Estrutura

```
index.html          → estrutura da página (não precisa mexer no dia a dia)
css/style.css        → cores, fontes, layout
js/products.js        → CONFIGURAÇÃO DO SITE + LISTA DE PRODUTOS (edite aqui)
js/main.js            → lógica de renderização e filtros (não precisa mexer)
```

## Editar o dia a dia

Praticamente tudo que você vai querer mudar fica em **`js/products.js`**:

### Nome do site / textos do topo
No topo do arquivo, em `SITE_CONFIG`:

```js
const SITE_CONFIG = {
  siteName: "Fones em Foco",
  heroTitle: "Fones que valem a pena — sem cair em furada",
  heroSubtitle: "...",
  criterio: "Vendas + avaliações + comentários reais...",
};
```

### Produtos
Cada produto é um objeto dentro do array `PRODUCTS`:

```js
{
  id: "m10-tws",
  name: "M10 TWS",
  category: "custo-beneficio",   // precisa bater com um id de CATEGORIES
  price: 19.9,
  rating: 5,                      // 0 a 5, aceita meio ponto (ex: 4.5)
  badge: "Mais vendido",
  salesLabel: "18 mil+ vendas",
  review: "Texto curto de 2-3 frases...",
  icon: "earbuds",                 // earbuds | sport | call | premium
  featured: true,                  // true só no produto de destaque (1 único)
  affiliateLink: "#",              // cole aqui o link de afiliado da Shopee
},
```

- Para trocar o **produto de destaque**, mova `featured: true` para outro
  objeto (deixe só um com `true`).
- Para **adicionar ou remover** um produto, copie/apague um bloco `{ ... }`
  inteiro do array.
- Quando seu cadastro de afiliado for aprovado, troque cada `affiliateLink: "#"`
  pelo link real daquele produto.

### Categorias / filtros
No mesmo arquivo, `CATEGORIES` controla os filtros e as tags dos cards:

```js
const CATEGORIES = [
  { id: "custo-beneficio", label: "Custo-benefício" },
  { id: "treino", label: "Treino" },
  { id: "premium", label: "Premium" },
  { id: "trabalho", label: "Chamadas / trabalho" },
];
```

O `id` de cada categoria precisa bater com o `category` usado nos produtos.

## Cores e fontes

Tudo fica em variáveis no topo de `css/style.css`:

```css
:root {
  --bg: #f6f4ec;         /* fundo bege claro */
  --text: #1e2a22;        /* texto verde-tinta escuro */
  --green: #2e6b4f;       /* verde principal (preço, tags) */
  --mustard: #d9a441;     /* selo de preço */
  --font-serif: "Fraunces", ...;  /* títulos */
  --font-sans: "Inter", ...;      /* corpo e botões */
}
```

Existe um segundo bloco `@media (prefers-color-scheme: dark)` logo abaixo com
as mesmas variáveis para o modo escuro — ajuste os dois se mudar a paleta.

## Rodar localmente

Não precisa de Node nem de build. Basta abrir `index.html` no navegador, ou
rodar um servidor simples:

```bash
npx serve .
```

## Publicar online (grátis)

Recomendado: **Vercel** (mais simples, grátis, HTTPS e domínio próprio depois).

### Opção A — pelo site, sem terminal
1. Suba esta pasta para um repositório novo no GitHub (crie um repo vazio e
   faça o push, ou use o botão "upload files" do GitHub direto).
2. Entre em [vercel.com](https://vercel.com), faça login com GitHub.
3. "Add New Project" → selecione o repositório → Framework Preset:
   **Other** (site estático) → Deploy.
4. Pronto: você recebe uma URL tipo `fones-em-foco.vercel.app`.

### Opção B — pelo terminal (Vercel CLI)
```bash
npm install -g vercel
vercel
```
Siga as perguntas (sem framework, diretório atual). No final ele publica e
devolve a URL.

Alternativas igualmente simples e gratuitas, se preferir: **Netlify**
(arrastar a pasta em app.netlify.com/drop), **Cloudflare Pages** ou
**GitHub Pages** (Settings → Pages → Deploy from branch, usando a raiz do
repo).

## Aviso de afiliados

O texto de transparência já está fixo na seção `#afiliados` do
`index.html`. Não remova — é exigido pelo programa de afiliados da Shopee.
