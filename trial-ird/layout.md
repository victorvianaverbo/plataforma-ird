# Layout Specification - Página de Trial IRD

Este documento define a identidade visual e a estrutura técnica de todas as seções da página de Trial da Plataforma IRD.

## Identidade Visual Global
- **Paleta de Cores:**
  - Background Principal: `#ffffff` (Branco Papel)
  - Background Superfície: `#f8fafc` (Off-white azulado)
  - Azul Elegante (Destaques): `#0f172a` (Deep Navy)
  - Ouro Destaque: `#c5a365` (Old Gold)
  - Bordas/Filetes: `#e2e8f0` (Light Slate)
- **Tipografia:**
  - Headings: `DM Serif Display` (400)
  - Body: `DM Sans` (400, 500, 700)
- **Estética Geral:** Editorial Premium, minimalista, com alto contraste entre o branco e o azul marinho.

---

## Seção 1: Header
- **Arquetipo:** Minimal Editorial
- **Constraints:** Fixed Element, Backdrop Blur (10px)
- **Conteúdo:** Logo "Plataforma IRD", Tag "TRIAL GRATUITO", Botão "QUERO TESTAR O SISTEMA".
- **Layout:** Flexbox horizontal, `max-width: 1280px`, `padding: 24px 0`.
- **Interatividade:** Botão outline que inverte cores no hover (`bg: #0f172a`, `color: #fff`).

---

## Seção 2: Hero
- **Arquetipo:** Type Hero
- **Constraints:** Tipografia Colossal, Reveal on Scroll (GSAP), Noise Texture (sutil)
- **Conteúdo:** "Teste o Sistema IRD por 3 dias. Sem compromisso. Com método."
- **Layout:** `min-height: 100vh`, alinhamento central vertical. Grid 12 colunas.
- **Tipografia:** Headline `clamp(3rem, 8vw, 6rem)`, `line-height: 0.95`.
- **Animações:** `reveal-text` (GSAP) subindo com opacidade.

---

## Seção 3: O Problema
- **Arquetipo:** Editorial
- **Constraints:** Dark Mode Accent (Numerais), Numerais Romanos, Border Grid
- **Conteúdo:** 5 pilares do problema (Edital aberto, Reta final, Troca de cursinho, Falta de retenção, Platô 60%).
- **Layout:** Grid de 3 colunas (desktop) que vira 1 coluna (mobile). `padding: 120px 0`.
- **Visual:** Numerais romanos grandes (`3rem`) em azul com 20% de opacidade.
- **Animações:** `fade-up` com stagger de `100ms` usando AOS.

---

## Seção 4: A Jornada de 3 Dias
- **Arquetipo:** Timeline Estacionária
- **Constraints:** Sticky Element (Título), Scroll-triggered Focus (Blur/Opacity)
- **Conteúdo:** DIA 01 (Diagnóstico), DIA 02 (Execução), DIA 03 (Decisão).
- **Layout:** Split Horizontal/Vertical. O título da seção fica `sticky` à esquerda enquanto os dias rolam à direita.
- **Interatividade:** O dia que estiver no centro da viewport ganha `opacity: 1` e `filter: blur(0)`, os outros ficam esmaecidos.

---

## Seção 5: Como Funciona o Sistema IRD
- **Arquetipo:** Typographic Index
- **Constraints:** Linha Contínua (Bordas), Hover Fill (Background sutil)
- **Conteúdo:** 7 pilares do sistema (Autoanálise até Bateria ENAM/FGV).
- **Layout:** Lista vertical com bordas inferiores finas. `max-width: 800px` centralizado.
- **Interatividade:** Ao passar o mouse, o número `[ 01 ]` muda de cor para ouro e o texto faz um leve `paddingX` reveal.

---

## Seção 6: Perfil e Elegibilidade
- **Arquetipo:** Split Vertical (50/50)
- **Constraints:** Color Blocking (Lado elegível vs não elegível), High Contrast
- **Conteúdo:** "Elegível" (Azul Marinho com texto branco) vs "Não Elegível" (Branco com texto azul).
- **Layout:** Duas colunas simétricas. `min-height: 60vh`.
- **Animações:** Lados entram com `slide-in` opostos.

---

## Seção 7: Conteúdo do Trial
- **Arquetipo:** Bento Box
- **Constraints:** Layered Depth, Glassmorphism (Cards), Shadow Depth
- **Conteúdo:** 5 itens acessíveis no trial.
- **Layout:** Layout assimétrico de cards. Cards com bordas finas e fundo levemente mais escuro (`#f8fafc`).
- **Interatividade:** `Hover Lift` (Cards sobem 8px) com sombra suave.

---

## Seção 8: Oferta Final (CTA)
- **Arquetipo:** Poster
- **Constraints:** Typographic Poster Box, Full Height, Selective Color (Gold)
- **Conteúdo:** "Acesse agora. Grátis.", Garantia e Botão "QUERO TESTAR O SISTEMA IRD".
- **Layout:** Container com borda dupla estrutural. Fundo azul escuro (`#0f172a`) com texto branco e ouro.
- **Tipografia:** "R$ 0" em tamanho massivo (`8rem`).

---

## Seção 9: FAQ
- **Arquetipo:** ASCII Accordion
- **Constraints:** Math Symbols ([+], [-]), Monospace (Pequenos detalhes), Border 1px
- **Conteúdo:** 3 perguntas sobre carga horária, iniciantes e pós-trial.
- **Interatividade:** Accordion clássico com transição de `max-height`.

---

## Footer
- **Arquetipo:** Minimal Editorial
- **Constraints:** Border Top 1px
- **Layout:** 3 colunas (Logo, Contatos, Direitos).
