# Layout - Plataforma IRD | ENAM 2026.1

## Design System (Global)

### Paleta de Cores
```
--bg-primary:      #080B14    (fundo principal)
--bg-secondary:    #0D1121    (fundo secoes alternadas)
--bg-card:         #111628    (cards)
--bg-card-hover:   #161C35    (cards hover)
--gold-100:        #FFF3D4    (dourado claro)
--gold-200:        #F5DFA0
--gold-300:        #E8C566    (acento principal)
--gold-400:        #D4A843
--gold-500:        #C9A84C    (acento secundario)
--gold-gradient:   linear-gradient(135deg, #E8C566 0%, #C9A84C 50%, #A8893A 100%)
--text-primary:    #F2F0EB    (texto principal)
--text-secondary:  #9A9CAE    (texto secundario)
--text-muted:      #5D5F72    (texto terciario)
--border-subtle:   rgba(201, 168, 76, 0.08)
--border-gold:     rgba(201, 168, 76, 0.2)
```

### Font Pairing
- **Heading:** DM Serif Display (serif, elegante)
- **Body:** DM Sans (sans-serif, legivel)
- Google Fonts: `DM+Sans:wght@400;500;600;700&family=DM+Serif+Display`

### Espacamentos Globais
```
--section-padding:    clamp(80px, 10vw, 140px) vertical
--container-max:      1280px
--container-padding:  clamp(20px, 4vw, 48px) horizontal
```

### Transicao Padrao
```
transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1)
```

---

## Secao 0: Header

### Arquetipo e Constraints
- Arquetipo: Sticky Header
- Constraints: Glassmorphism (Efeitos Especiais), Hover Underline (Interacao)
- Justificativa: Header fixo cria navegacao persistente; glassmorphism no scroll diferencia do fundo sem ser opaco

### Conteudo
- Logo: "Plataforma IRD" (IRD em gold-gradient)
- Links: Cronograma | Metodo | Bonus | FAQ
- CTA: "Comecar agora" → https://pay.hotmart.com/Q100171412O

### Layout
- `position: fixed; top: 0; width: 100%`
- Container flex: `justify-content: space-between; align-items: center`
- Padding: `20px 0` (normal), `14px 0` (scrolled)

### Tipografia
- Logo: DM Serif Display, 1.25rem, letter-spacing: 0.02em, "IRD" com `background: var(--gold-gradient); -webkit-background-clip: text`
- Links: DM Sans, 0.875rem, weight 500, letter-spacing: 0.03em, uppercase
- CTA: DM Sans, 0.8125rem, weight 600, letter-spacing: 0.04em, uppercase

### Cores
- Logo: `--text-primary`, "IRD" em gold-gradient
- Links normal: `--text-secondary`
- Links hover: `--text-primary`
- CTA bg: `--gold-gradient`, texto: `--bg-primary`

### Animacoes
- Scroll > 50px: adicionar classe `.scrolled`
  - background: `rgba(8, 11, 20, 0.92)`
  - `backdrop-filter: blur(20px)`
  - `border-bottom: 1px solid var(--border-subtle)`
  - Transicao: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1)`

### Interatividade
- Links: `::after` pseudo-element, `height: 1px; background: var(--gold-300); width: 0→100%` no hover, 300ms ease
- CTA hover: `translateY(-2px); box-shadow: 0 8px 30px rgba(201,168,76,0.3)`

### Responsividade
- <= 1024px: nav links escondem, mostrar hamburger (3 spans, 24x2px, gap 5px, `--text-primary`)
- Menu mobile: nav vertical fullscreen com backdrop

---

## Secao 1: Hero (APROVADO)

### Arquetipo e Constraints
- Arquetipo: Split Assimetrico (70/30)
- Constraints: Headline >150px (Tipografia), Selective Color dourado (Cor), Hover Lift (Interacao)
- Justificativa: Split cria hierarquia clara entre copy (dominante) e prova social (stats); headline grande transmite autoridade

### Conteudo
- Tag: "ENAM 2026.1"
- Headline: "Sua aprovacao no ENAM comeca com **um plano**" (em em gold-gradient)
- Subheadline: "Cronograma estruturado do primeiro dia ate a prova. Baseado no edital, focado no que realmente cai, e feito para quem quer estudar com clareza -- nao no escuro."
- CTA: "Quero meu cronograma ENAM 2026.1" → https://pay.hotmart.com/Q100171412O
- Micro-texto: "Acesso imediato apos a inscricao"
- Stats (3 cards): 4h/dia | 100% | 365 dias

### Layout
- `min-height: 100vh; padding-top: 100px; padding-bottom: 60px`
- Grid: `grid-template-columns: 1.15fr 0.85fr; gap: clamp(40px, 6vw, 80px); align-items: center`
- `::before` - radial gradient decorativo top-right: `rgba(201,168,76,0.04)`, 60% width, 80% height
- `::after` - linha separadora bottom: `linear-gradient(90deg, transparent, var(--border-gold), transparent)`
- Grain overlay: SVG feTurbulence, `opacity: 0.025`, `pointer-events: none`

### Tipografia
- Tag: DM Sans, 0.75rem, weight 600, letter-spacing: 0.16em, uppercase
- Headline: DM Serif Display, `clamp(2.8rem, 5.5vw, 4.5rem)`, line-height: 1.08, letter-spacing: -0.01em
- Subheadline: DM Sans, `clamp(1rem, 1.15vw, 1.15rem)`, line-height: 1.7, max-width: 520px
- CTA: DM Sans, 0.9375rem, weight 600, letter-spacing: 0.02em
- Micro: DM Sans, 0.8125rem
- Stat value: DM Serif Display, 1.75rem
- Stat label: DM Sans, 0.875rem, weight 500
- Stat desc: DM Sans, 0.8125rem, line-height: 1.5

### Cores
- Tag: `--gold-300` texto, `rgba(201,168,76,0.06)` bg, `rgba(201,168,76,0.12)` border; dot pulsante `--gold-300`
- Headline: `--text-primary`, `<em>` em gold-gradient
- Sub: `--text-secondary`
- CTA: `--gold-gradient` bg, `--bg-primary` texto
- Micro: `--text-muted` texto, icone `--gold-400`
- Stat card: `--bg-card` bg, `--border-subtle` border
- Stat card hover: `--border-gold` border, `box-shadow: 0 0 40px rgba(201,168,76,0.15)`
- Stat value: `--gold-300`
- Stat label: `--text-secondary`
- Stat desc: `--text-muted`

### Animacoes
- SEM animacao de entrada (hero aparece instantaneamente)
- Tag dot: `pulse-dot 2s ease-in-out infinite` (scale 1→0.7, opacity 1→0.5)
- Stat cards: `float-subtle 6s ease-in-out infinite` com stagger (0s, 1s, 2s)
- CTA `::before` shine: `left: -100%→100%` no hover, 500ms ease
- CTA hover: `translateY(-3px); box-shadow: 0 12px 40px rgba(201,168,76,0.35)`
- CTA arrow hover: `translateX(3px)` 300ms ease
- Stat card `::before` left bar (gold-gradient, 3px): `opacity: 0→1` no hover

### Responsividade
- <= 1024px: grid → 1 coluna, `text-align: center`, stats em row wrapping, `min-width: 200px`
- <= 640px: headline `clamp(2rem, 8vw, 2.8rem)`, stats vertical, CTA `width: 100%`, `min-height: auto`

---

## Secao 1.5: VSL (Video Sales Letter)

### Arquetipo e Constraints
- Arquetipo: Single Focus (Foco Absoluto)
- Constraints: Glassmorphism (Efeitos Especiais), Hover Glow (Interacao), Fade Up (Movimento)
- Justificativa: O vídeo é o elemento central de conversão. O arquétipo de foco único elimina distrações, enquanto o glassmorphism no frame do vídeo confere um aspecto premium.

### Conteudo
- Titulo: "Veja como o Sistema IRD vai transformar sua preparacao"
- Video ID: 0dmRcHqYXQY (YouTube)
- CTA: "Quero comecar minha preparacao estrategica agora"

### Layout
- `padding: var(--section-padding) 0`
- Container narrow: `max-width: 900px` (focado no video)
- Video Aspect Ratio: `16/9`
- Frame: `border-radius: 24px; padding: 12px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle)`

### Tipografia
- Titulo: DM Serif Display, `clamp(2rem, 3.5vw, 2.75rem)`, text-align: center, margin-bottom: 40px
- CTA: Padrao btn-primary, centralizado

### Cores
- Fundo: `--bg-primary`
- Frame: `rgba(255, 255, 255, 0.03)` com `backdrop-filter: blur(10px)`
- Border: `var(--border-gold)`

### Elementos Visuais
- Youtube Iframe responsivo
- Play button customizado (opcional, ou apenas o embed limpo)
- Sombra projetada: `0 30px 60px rgba(0, 0, 0, 0.5)`

### Animacoes
- Container: `data-aos="fade-up"`
- Hover no frame: `box-shadow: 0 0 50px rgba(201, 168, 76, 0.2)`

### Interatividade
- Hover no frame do vídeo causa leve escala `1.01` e brilho.

### Responsividade
- <= 768px: Título menor, padding lateral reduzido.

---

## Secao 2: Cronograma (APROVADO)

### Arquetipo e Constraints
- Arquetipo: Bento Box (cards de tamanhos variados)
- Constraints: Hover Lift (Interacao), Timeline horizontal (Estrutura Especial)
- Justificativa: Bento box quebra monotonia de cards iguais; timeline visualiza a jornada do aluno de forma intuitiva

### Conteudo
- Tag: "Cronograma ENAM 2026.1"
- Titulo: "Seu caminho ate a aprovacao, dia a dia"
- Subtitulo: "O cronograma foi construido a partir dos pontos mais cobrados do edital. Voce percorre todo o conteudo programatico com seguranca, sabendo exatamente o que estudar e quando estudar."
- Card 1 (grande): Progressao logica - "Cada etapa respeita a ordem natural do aprendizado. Do basico ao avancado, sem saltos e sem lacunas."
- Card 2: Constancia diaria - "Um cronograma que organiza cada dia de estudo. Voce so precisa seguir -- sem improvisar, sem desperdicar tempo."
- Card 3: Visao completa ate a prova - "Voce sabe exatamente onde esta, o que falta e quanto tempo tem. Sem surpresas no meio do caminho."
- Timeline: Inicio → Aprofundamento → Revisao → Prova

### Layout
- Fundo: `--bg-secondary`
- `::before` - linha top: `linear-gradient(90deg, transparent, var(--border-gold), transparent)`
- Header: max-width 680px, margin-bottom `clamp(48px, 6vw, 80px)`
- Grid: `grid-template-columns: 1fr 1fr; gap: 20px`
- Card 1: `grid-row: 1 / 3` (span 2 linhas, flex column justify-center)
- Cards: `border-radius: 20px; padding: clamp(28px, 3vw, 40px)`
- Icone container: `48x48px; border-radius: 12px`
- Timeline: flex, justify-content space-between, position relative, padding 40px 0
- Timeline line: absolute, top 50%, full width, 2px, gold com opacity 0.3

### Tipografia
- Tag: DM Sans, 0.75rem, weight 600, letter-spacing: 0.16em, uppercase; `::before` linha 20px
- Titulo: DM Serif Display, `clamp(2rem, 4vw, 3.25rem)`, line-height: 1.15
- Subtitulo: DM Sans, `clamp(0.9375rem, 1.1vw, 1.0625rem)`, line-height: 1.7, max-width: 600px
- Card titulo: DM Serif Display, `clamp(1.25rem, 1.5vw, 1.5rem)`
- Card desc: DM Sans, 0.9375rem, line-height: 1.65
- Timeline label: DM Sans, 0.8125rem, weight 600, uppercase, letter-spacing: 0.08em

### Cores
- Fundo secao: `--bg-secondary`
- Cards: `--bg-card` bg, `--border-subtle` border
- Cards hover: `--bg-card-hover`, `--border-gold`, `box-shadow: var(--gold-glow)`, translateY(-5px)
- Card `::after`: radial gradient top-right `rgba(201,168,76,0.04)`, decorativo
- Icones: `rgba(201,168,76,0.08)` bg, `rgba(201,168,76,0.12)` border, `--gold-300` cor
- Timeline dots: `--bg-primary` bg, 2px border `--gold-400`; primeiro ativo com glow `0 0 20px rgba(201,168,76,0.3)`
- Timeline labels: `--text-secondary`, hover → `--gold-300`

### Animacoes
- Header: `data-aos="fade-up"`
- Cards: `data-aos="fade-up"` com stagger delay 0, 100, 200ms
- Timeline: `data-aos="fade-up"` delay 100ms
- Timeline dots hover: `scale(1.3)` 300ms ease, `::after` inner dot opacity 0→1
- Cards hover: `translateY(-5px)` 400ms bezier

### Responsividade
- <= 1024px: grid → 1 coluna, card 1 perde grid-row span
- <= 640px: timeline vertical (flex-direction column, align-items flex-start, gap 32px), linha vira vertical (left 8px, width 2px, height 100%)

---

## Secao 3: Metodologia Ativa

### Arquetipo e Constraints
- Arquetipo: Split Vertical com Overlap
- Constraints: Glassmorphism (Efeitos Especiais), Stagger Animation (Movimento), Hover Glow (Interacao)
- Justificativa: Split divide conceito (esquerda) e ferramentas (direita) criando vizualizacao de sistema integrado; glassmorphism nos cards reforca a ideia de camadas de estudo

### Conteudo
- Tag: "Metodologia Ativa"
- Titulo: "Estudo ativo que funciona na pratica"
- Subtitulo: "A Plataforma IRD reune tudo em um unico ambiente. Questoes, flashcards, simulados e revisoes trabalham juntos dentro do seu cronograma. Sem alternar entre ferramentas, sem perder tempo."
- Ferramenta 1: Questoes Comentadas - "Resolva questoes no padrao da banca com comentarios detalhados em cada alternativa. Entenda a logica por tras das respostas."
- Ferramenta 2: Flashcards com Repeticao Espacada - "Revise os pontos-chave no momento certo. A repeticao espacada combate a curva do esquecimento de forma cientifica."
- Ferramenta 3: Simulados Realistas - "Treine em condicoes reais de prova. Gerencie tempo, pressao e tome decisoes como no dia oficial."
- Ferramenta 4: Revisoes Automaticas - "O proprio cronograma programa revisoes nos momentos ideais para fixar o conteudo antes que ele se perca."
- Fechamento: "Tudo integrado em um unico processo. A plataforma cuida da organizacao -- voce foca no estudo."
- CTA: "Entrar agora na Plataforma IRD - ENAM 2026.1" → https://pay.hotmart.com/Q100171412O

### Layout
- Fundo: `--bg-primary`
- Lado esquerdo (45%): header (tag + titulo + subtitulo) + texto fechamento + CTA, `position: sticky; top: 120px`
- Lado direito (55%): 4 tool cards em stack vertical com gap 16px, levemente offset para a direita (+20px)
- Grid: `grid-template-columns: 0.45fr 0.55fr; gap: clamp(40px, 5vw, 80px); align-items: start`
- Tool cards: glassmorphism - `background: rgba(17, 22, 40, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(201,168,76,0.08); border-radius: 16px; padding: 28px 32px`
- Cada card tem icone left (40x40) + conteudo right (flex row, gap 20px)

### Tipografia
- Tag: mesmo padrao (0.75rem, 600, uppercase, letter-spacing 0.16em)
- Titulo: DM Serif Display, `clamp(2rem, 3.5vw, 2.75rem)`, line-height: 1.15
- Subtitulo: DM Sans, `clamp(0.9375rem, 1.1vw, 1.0625rem)`, line-height: 1.7
- Card titulo: DM Sans, 1.0625rem, weight 600
- Card desc: DM Sans, 0.9375rem, line-height: 1.6, `--text-secondary`
- Fechamento: DM Sans, 1rem, weight 500, `--text-secondary`, italic
- CTA: mesmo padrao btn-primary

### Cores
- Tool cards glass bg: `rgba(17, 22, 40, 0.7)`
- Tool cards border: `rgba(201,168,76,0.08)`
- Tool cards hover: border → `rgba(201,168,76,0.2)`, bg → `rgba(17, 22, 40, 0.85)`
- Tool cards hover glow: `box-shadow: 0 0 30px rgba(201,168,76,0.08), inset 0 1px 0 rgba(201,168,76,0.1)`
- Icone bg: `rgba(201,168,76,0.06)`, border: `rgba(201,168,76,0.1)`, cor: `--gold-300`
- Card titulo: `--text-primary`

### Animacoes
- Left side: `data-aos="fade-up"`
- Tool cards: `data-aos="fade-up"` stagger 0, 150, 300, 450ms
- cards hover: glow pulse sutil `box-shadow` expand 400ms bezier
- Icones hover: `rotate(5deg) scale(1.1)` 300ms ease

### Interatividade
- Tool cards hover: `translateY(-4px)` + border gold + glow
- Left content sticky no scroll ate terminar os 4 cards (desktop only)

### Responsividade
- <= 1024px: grid → 1 coluna, left perde sticky, cards full width
- <= 640px: card layout muda de flex-row para flex-column (icone em cima, texto embaixo)

---

## Secao 4: O que voce recebe

### Arquetipo e Constraints
- Arquetipo: Single Focus com Progressive Reveal
- Constraints: Overlap Elements (Layout), Noise Texture (Efeitos Especiais), Scale In (Movimento)
- Justificativa: Foco unico no item principal (1 ano de acesso) cria peso e importancia; o item secundario aparece como complemento natural

### Conteudo
- Tag: "O que esta incluido"
- Titulo: "O que esta incluido na sua inscricao"
- Item principal: "1 ano completo de acesso a Plataforma IRD -- ENAM" + "Durante 12 meses, voce tera acesso integral a plataforma com atualizacoes continuas acompanhando edital, banca e tendencias. Tempo realista e estrategico para buscar a aprovacao com seguranca."
- Item secundario: "Acesso a todas as Retas Finais do ENAM no periodo" + "Sem custo adicional. As Retas Finais orientam seus estudos no momento mais decisivo da preparacao. Estrategia certa, no momento certo."

### Layout
- Fundo: `--bg-secondary`
- Linha top decorativa: gold gradient horizontal
- Container estreito: max-width 900px centralizado
- Item principal: card grande, centralizado, `border-radius: 24px; padding: clamp(40px, 5vw, 60px)`
- Numero "1" gigante decorativo: font-size `clamp(8rem, 15vw, 14rem)`, posicao absolute, top -40px, left -20px, `--gold-300` com opacity 0.05
- Item secundario: card menor, margin-top -20px (overlap), `border-radius: 16px; padding: clamp(24px, 3vw, 36px)`, levemente mais estreito (max-width 780px, margin auto)
- Separador entre items: pequena tag badge "INCLUSO"

### Tipografia
- Titulo secao: DM Serif Display, `clamp(2rem, 4vw, 3rem)`, line-height: 1.15, center
- Item principal titulo: DM Serif Display, `clamp(1.5rem, 2.5vw, 2rem)`, line-height: 1.2
- "1" destaque: DM Serif Display, `clamp(4rem, 8vw, 6rem)`, `--gold-300`, weight normal
- Item principal desc: DM Sans, 1rem, line-height: 1.7, `--text-secondary`
- Item secundario titulo: DM Sans, 1.125rem, weight 600
- Item secundario desc: DM Sans, 0.9375rem, line-height: 1.6, `--text-secondary`

### Cores
- Item principal card: `--bg-card` bg, `--border-gold` border (mais forte que padrao)
- Item secundario card: `rgba(17,22,40,0.5)` bg, `--border-subtle` border
- Badge "INCLUSO": gold-gradient bg, `--bg-primary` texto, border-radius 100px, padding 6px 16px

### Animacoes
- Titulo: `data-aos="fade-up"`
- Item principal: `data-aos="fade-up"` delay 100ms
- "1" decorativo: scale de 0.5→1 com blur de 10px→0, 1000ms ease-out (scroll triggered)
- Item secundario: `data-aos="fade-up"` delay 200ms
- Grain/noise overlay sutil no card principal: SVG `feTurbulence opacity: 0.02`

### Responsividade
- <= 768px: "1" decorativo fica menor, overlap reduzido para -12px

---

## Secao 5: Bonus Exclusivo

### Arquetipo e Constraints
- Arquetipo: Isolated Element (elemento sozinho com muito espaco negativo)
- Constraints: Gradiente Animado (Cor), Texto com Gradiente (Tipografia), Float Loop (Movimento)
- Justificativa: Isolar o bonus em espaco generoso cria destaque e valor percebido; gradiente animado chama atencao para o elemento surpresa

### Conteudo
- Tag: "BONUS EXCLUSIVO"
- Titulo: "Continuidade apos a aprovacao"
- Texto: "Ao ser aprovado no ENAM, voce recebe +1 ano de acesso a Plataforma IRD para se preparar para as provas objetivas das fases seguintes."
- Destaque: "+12 meses extras para as proximas fases"
- Fechamento: "O IRD acompanha a evolucao da sua carreira -- nao apenas ate a primeira prova."

### Layout
- Fundo: `--bg-primary`
- Container max-width: 800px centralizado (mais estreito que global)
- Padding vertical: `clamp(100px, 12vw, 160px)` (mais generoso que outras secoes)
- Card central unico: `border-radius: 24px; padding: clamp(48px, 6vw, 72px); text-align: center`
- Border: `2px solid` com gradient (gold animado, `border-image`)
- Destaque "+12": tipografia gigante acima do card, isolada, `clamp(3rem, 6vw, 5rem)`
- Elemento decorativo: circulo glow difuso atras do card, `radial-gradient(circle, rgba(201,168,76,0.08), transparent 60%)`, 500x500px

### Tipografia
- Tag: padrao, center
- Titulo: DM Serif Display, `clamp(1.75rem, 3vw, 2.5rem)`, center
- Texto: DM Sans, 1.0625rem, line-height: 1.7, `--text-secondary`, center
- Destaque "+12 meses": DM Serif Display, `clamp(3rem, 6vw, 5rem)`, gold-gradient text, center
- "extras para as proximas fases": DM Sans, 0.9375rem, weight 500, `--text-secondary`
- Fechamento: DM Sans, 1rem, weight 500, `--text-secondary`, italic, margin-top 32px

### Cores
- Card bg: `var(--bg-card)` com sutil noise texture
- Card border: animated gold gradient - `background: linear-gradient(var(--bg-card), var(--bg-card)) padding-box, linear-gradient(135deg, var(--gold-300), transparent 40%, var(--gold-400), transparent 80%, var(--gold-300)) border-box; border: 2px solid transparent`
- "+12" texto: gold-gradient
- Glow circle: `rgba(201,168,76,0.06)→transparent`

### Animacoes
- Card inteiro: `data-aos="fade-up"`
- "+12" destaque: counter animation de 0 a 12, 1500ms ease-out (scroll triggered via IntersectionObserver)
- Border gradient: `rotate(0deg→360deg)` loop lento, 8s linear infinite (pseudo-element giratoria)
- Glow circle: `float-subtle 8s ease-in-out infinite` (pulsacao sutil de escala 1→1.05)

### Responsividade
- <= 768px: padding do card reduz, "+12" font-size desce para `clamp(2.5rem, 8vw, 3.5rem)`

---

## Secao 6: Preco

### Arquetipo e Constraints
- Arquetipo: Spotlight (elemento central com foco absoluto)
- Constraints: High Contrast (Cor), Hover Scale (Interacao), Stagger (Movimento)
- Justificativa: Preco como protagonista visual absoluto. Alto contraste chama decisao. Sem distracao.

### Conteudo
- Tag: "Investimento"
- Titulo: "Invista na sua aprovacao"
- Preco: "R$ 2.097,00" a vista
- Parcelamento: "ou 12x de R$ 198,29"
- Itens inclusos (6):
  - 12 meses de acesso completo
  - Cronograma ENAM 2026.1 estruturado
  - Questoes, flashcards, simulados e revisoes
  - Acesso a todas as Retas Finais do periodo
  - Bonus: +12 meses apos aprovacao
  - Suporte dedicado
- CTA: "Entrar agora na Plataforma IRD - ENAM 2026.1" → https://pay.hotmart.com/Q100171412O
- Micro-texto: "Acesso imediato apos a inscricao"

### Layout
- Fundo: `--bg-secondary`
- Container max-width: 560px (coluna unica estreita, centralizado)
- Card principal: `border-radius: 24px; padding: clamp(40px, 5vw, 56px); text-align: center`
- Border top: 3px solid gold-gradient (destaque superior)
- Preco section: margin-bottom 32px
- Lista de itens: flex column, gap 16px, text-align left, `padding: 32px 0; border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle)`
- Cada item: flex row, gap 12px, icone checkmark + texto
- CTA: full width dentro do card, margin-top 32px
- Micro: center, margin-top 12px

### Tipografia
- Titulo secao: DM Serif Display, `clamp(2rem, 3.5vw, 2.75rem)`, center, margin-bottom 48px
- Preco "R$": DM Sans, 1.125rem, weight 500, `--text-secondary`
- Preco "2.097,00": DM Serif Display, `clamp(2.5rem, 5vw, 3.5rem)`, `--gold-300`
- "a vista": DM Sans, 0.875rem, weight 500, `--text-secondary`
- Parcelamento: DM Sans, 1rem, weight 500, `--text-secondary`; "R$ 198,29" em `--text-primary` weight 600
- Itens: DM Sans, 0.9375rem, `--text-secondary`, line-height: 1.5
- CTA: padrao btn-primary, full width
- Micro: DM Sans, 0.8125rem, `--text-muted`

### Cores
- Card bg: `--bg-card`
- Card border-top: 3px solid, `gold-gradient`
- Checkmarks: `--gold-400`
- Preco: `--gold-300`
- Card hover (sutil): `box-shadow: 0 20px 60px rgba(0,0,0,0.3), 0 0 40px rgba(201,168,76,0.08)`

### Animacoes
- Card: `data-aos="fade-up"`
- Preco numero: counter animation 0→2097, 2000ms ease-out (scroll triggered)
- Itens: stagger `data-aos="fade-up"` com delay incremental 50ms cada (0, 50, 100, 150, 200, 250)
- CTA: pulse sutil no box-shadow, `2s ease-in-out infinite` apos entrar em viewport
- Card hover: `scale(1.02)` 400ms bezier

### Responsividade
- <= 768px: card padding reduz, preco font-size desce

---

## Secao 7: Para quem e

### Arquetipo e Constraints
- Arquetipo: Split Vertical (50/50)
- Constraints: Selective Color verde/vermelho (Cor), Clip Reveal (Movimento), Hover Color (Interacao)
- Justificativa: Split claro entre "e para voce" e "nao e para voce" cria contraste visual imediato; verde/vermelho semantico e intuitivo

### Conteudo
- Tag: "Publico-alvo"
- Titulo: "Este curso e para voce?"
- E para voce se... (4 items):
  - Quer um caminho claro do inicio ate a prova
  - Busca um processo organizado e confiavel
  - Precisa conciliar estudo com trabalho ou faculdade
  - Quer estudar com estrategia, nao com excesso de material
- Nao e para voce se... (3 items):
  - Busca atalhos ou promessas milagrosas
  - Nao pretende seguir um cronograma com disciplina
  - Prefere estudar sem direcao ou sem metodo

### Layout
- Fundo: `--bg-primary`
- Titulo centralizado, margin-bottom `clamp(48px, 6vw, 64px)`
- Grid: `grid-template-columns: 1fr 1fr; gap: 24px`
- Card "para voce": `border-radius: 20px; padding: clamp(32px, 4vw, 48px)`, border-left 3px solid `#4ADE80` (verde suave)
- Card "nao para voce": mesmo padding, border-left 3px solid `rgba(239, 68, 68, 0.5)` (vermelho suave com opacidade)
- Itens: flex column, gap 16px
- Cada item: flex row, gap 14px, icone + texto

### Tipografia
- Titulo secao: DM Serif Display, `clamp(2rem, 3.5vw, 2.75rem)`, center
- Card heading "E para voce se...": DM Sans, 1.125rem, weight 600, uppercase, letter-spacing 0.05em
- Card heading "Nao e para voce se...": idem
- Items: DM Sans, 0.9375rem, line-height: 1.6, `--text-secondary`

### Cores
- Card "para voce" bg: `rgba(74, 222, 128, 0.03)`, border-left: `#4ADE80`
- Card "nao para voce" bg: `rgba(239, 68, 68, 0.03)`, border-left: `rgba(239, 68, 68, 0.5)`
- Icones check: `#4ADE80`
- Icones X: `rgba(239, 68, 68, 0.6)`
- Card heading "para voce": `#4ADE80`
- Card heading "nao e": `rgba(239, 68, 68, 0.7)`

### Animacoes
- Card esquerdo: `data-aos="fade-right"` delay 0
- Card direito: `data-aos="fade-left"` delay 150ms
- Items dentro: stagger interno via CSS `nth-child` delay (50ms cada), `opacity 0→1, translateX(-10px→0)`

### Interatividade
- Cards hover: `translateY(-3px)` + border-left width `3px→5px` 300ms ease

### Responsividade
- <= 768px: grid → 1 coluna, gap: 20px

---

## Secao 8: Por que funciona

### Arquetipo e Constraints
- Arquetipo: Contained Center com espaco negativo generoso
- Constraints: Counter Animation (Movimento), Texto com Stroke (Tipografia), Hover Lift (Interacao)
- Justificativa: Contencao central com respiro cria seriedade e peso academico; 4 pilares como conceitos nao como cards permite abordagem diferente

### Conteudo
- Tag: "Por que funciona"
- Titulo: "Por que o metodo IRD gera aprovacao"
- Subtitulo: "Aprovacao nao e sorte. E o resultado de um processo bem executado, dia apos dia."
- Pilares (4): Processo correto | Execucao consistente | Revisao planejada | Direcionamento estrategico
- Fechamento: "Isso e exatamente o que o IRD entrega."

### Layout
- Fundo: `--bg-secondary`
- Container max-width: 960px (mais estreito)
- Header: text-align center, margin-bottom `clamp(48px, 6vw, 72px)`
- Pilares: grid horizontal `grid-template-columns: repeat(4, 1fr); gap: 0` -- SEM cards, SEM borders
- Cada pilar: flex column, align-items center, padding: 32px 20px
- Separadores: bordas `border-right: 1px solid var(--border-subtle)` nos 3 primeiros
- Numero decorativo: "01" "02" "03" "04" acima do texto, DM Serif Display, `clamp(2rem, 3vw, 3rem)`, texto outline/stroke (sem fill)
- Fechamento: center, margin-top `clamp(48px, 6vw, 64px)`, como quote

### Tipografia
- Titulo: DM Serif Display, `clamp(2rem, 4vw, 3.25rem)`, line-height: 1.15
- Subtitulo: DM Sans, 1.0625rem, line-height: 1.7, `--text-secondary`, max-width: 560px, center
- Numero: DM Serif Display, `clamp(2rem, 3vw, 3rem)`, `-webkit-text-stroke: 1px var(--gold-400); color: transparent`
- Pilar nome: DM Sans, 0.9375rem, weight 600, `--text-primary`, text-align center, margin-top 16px
- Fechamento: DM Serif Display, `clamp(1.25rem, 2vw, 1.75rem)`, `--gold-300`, italic

### Cores
- Numeros: texto transparente com stroke `--gold-400`
- Numeros hover: fill `rgba(201,168,76,0.1)` + stroke `--gold-300`
- Separadores: `var(--border-subtle)`
- Pilar names: `--text-primary`

### Animacoes
- Header: `data-aos="fade-up"`
- Pilares: `data-aos="fade-up"` stagger 0, 100, 200, 300ms
- Numeros: counter de 0→N, 800ms, scroll triggered
- Fechamento: `data-aos="fade-up"` delay 200ms

### Responsividade
- <= 768px: grid → `grid-template-columns: 1fr 1fr`, separadores ajustam (remove border-right dos items 2 e 4, adiciona border-bottom nos itens 1 e 2), gap: 0
- <= 480px: grid → `grid-template-columns: 1fr`, todos com `border-bottom`, sem `border-right`

---

## Secao 9: CTA Final

### Arquetipo e Constraints
- Arquetipo: Hero Dominante (100vh de impacto)
- Constraints: Gradiente Mesh sutil (Cor), Headline Full Width (Tipografia), Pulse Loop CTA (Movimento)
- Justificativa: CTA final precisa de peso visual maximo; fullscreen cria momento de decisao, sem escapatoria visual

### Conteudo
- Titulo: "Esta na hora de tomar a decisao certa"
- Texto: "Voce pode continuar tentando sozinho, ou pode ter um caminho claro, organizado e direcionado ate a sua aprovacao."
- CTA: "Entrar agora na Plataforma IRD - ENAM 2026.1" → https://pay.hotmart.com/Q100171412O
- Bullets: Acesso imediato | 12 meses de acesso | Suporte dedicado

### Layout
- Fundo: `--bg-primary` com mesh gradient decorativo (2-3 pontos de gold radial muuuito sutil)
- Min-height: `80vh` (nao full 100vh para nao parecer hero duplicado, mas impactante)
- Flex column, center center tudo
- Container max-width: 720px, text-align center
- CTA: btn-primary grande (padding 20px 48px), center
- Bullets: flex row, gap 32px, center, margin-top 24px

### Tipografia
- Titulo: DM Serif Display, `clamp(2.25rem, 4.5vw, 3.5rem)`, line-height: 1.12, center, margin-bottom 20px
- Texto: DM Sans, 1.0625rem, line-height: 1.7, `--text-secondary`, center, margin-bottom 40px, max-width 580px
- CTA: DM Sans, 1rem, weight 700
- Bullets: DM Sans, 0.8125rem, weight 500, `--text-secondary`, com icone check `--gold-400`

### Cores
- Mesh gradient: 2 pontos `radial-gradient(circle at 20% 50%, rgba(201,168,76,0.03), transparent 50%)` e `radial-gradient(circle at 80% 50%, rgba(201,168,76,0.02), transparent 50%)`
- Titulo: `--text-primary`
- CTA e bullets: padrao

### Animacoes
- Titulo: `data-aos="fade-up"`
- Texto: `data-aos="fade-up"` delay 100ms
- CTA: `data-aos="fade-up"` delay 200ms + pulse box-shadow `2s ease-in-out infinite` apos entrar em viewport
- Bullets: `data-aos="fade-up"` delay 300ms
- Mesh gradient bg: leve animacao de posicao, `20s ease-in-out infinite alternate` (quase imperceptivel)

### Responsividade
- <= 768px: min-height auto, padding `clamp(80px, 12vw, 120px) 0`, bullets flex-column gap 16px

---

## Secao 10: FAQ

### Arquetipo e Constraints
- Arquetipo: Contained Center (container estreito focado)
- Constraints: Accordion customizado (Estrutura Especial), Hover Color (Interacao), Clip Reveal (Movimento)
- Justificativa: FAQ em container estreito foca atencao na leitura; accordion customizado evita o look generico

### Conteudo
- Tag: "Duvidas Frequentes"
- Titulo: "Perguntas frequentes"
- 6 perguntas/respostas conforme copy.md

### Layout
- Fundo: `--bg-secondary`
- Container max-width: 760px centralizado
- Header: center, margin-bottom `clamp(40px, 5vw, 64px)`
- Accordion items: flex column, gap 0 (separados por linhas)
- Cada item: `padding: 24px 0; border-bottom: 1px solid var(--border-subtle)`
- Primeiro item: `border-top: 1px solid var(--border-subtle)`
- Pergunta row: flex row, justify-between, align-items center, cursor pointer
- Icone toggle: "+" que rota para "x", 24x24, `--gold-300`, `transition: transform 0.3s ease`
- Resposta: `max-height: 0; overflow: hidden; transition: max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1); padding: 0` → aberto: `max-height: 300px; padding-top: 16px`

### Tipografia
- Titulo secao: DM Serif Display, `clamp(2rem, 3.5vw, 2.75rem)`, center
- Perguntas: DM Sans, 1rem, weight 600, `--text-primary`
- Respostas: DM Sans, 0.9375rem, line-height: 1.7, `--text-secondary`

### Cores
- Pergunta normal: `--text-primary`
- Pergunta hover: `--gold-300`
- Icone: `--gold-300`
- Pergunta aberta: `--gold-300`
- Separadores: `var(--border-subtle)`, item aberto → `var(--border-gold)`

### Animacoes
- Items: `data-aos="fade-up"` stagger 50ms
- Toggle icone: `rotate(0→45deg)` 300ms ease ao abrir
- Resposta reveal: `max-height + opacity` transicao 500ms bezier
- Hover na pergunta: cor transiciona 200ms

### Interatividade
- Click na pergunta: toggle abrir/fechar
- Abrir um fecha os outros (accordion behavior)
- Focus visible: outline gold sutil para acessibilidade

### Responsividade
- <= 768px: pergunta font-size 0.9375rem, padding items 20px 0

---

## Secao 11: Footer

### Arquetipo e Constraints
- Arquetipo: Balanced (equilibrio entre cheio e vazio)
- Constraints: Dark Mode intensificado (Cor), Hover Underline (Interacao)
- Justificativa: Footer limpo e profissional fecha a experiencia sem distracao; dark mais profundo cria separacao visual

### Conteudo
- Logo: "Plataforma IRD"
- Descricao: "A plataforma de estudos que te leva do inicio ate a aprovacao no ENAM. Estudo organizado, estrategico e direcionado."
- Links: Cronograma | Metodo | Bonus | FAQ
- Contatos: suporte@institutoird.com | (67) 99906-2339
- Rodape: "© 2026 Plataforma IRD. Todos os direitos reservados | Termos de Uso | Politica de Privacidade"

### Layout
- Fundo: `#060810` (mais escuro que `--bg-primary`)
- Linha top: `linear-gradient(90deg, transparent, var(--border-gold), transparent)`
- Padding: `clamp(48px, 6vw, 80px) 0 32px`
- Grid topo: `grid-template-columns: 1.2fr 0.8fr 0.8fr; gap: 48px`
- Col 1: logo + descricao
- Col 2: titulo "Links" + lista links
- Col 3: titulo "Contatos" + email + telefone
- Rodape: flex row, justify-between, padding-top 32px, margin-top 48px, `border-top: 1px solid var(--border-subtle)`

### Tipografia
- Logo: DM Serif Display, 1.25rem, "IRD" em gold-gradient
- Descricao: DM Sans, 0.875rem, line-height: 1.7, `--text-muted`, max-width: 320px
- Column titles: DM Sans, 0.75rem, weight 600, uppercase, letter-spacing 0.1em, `--text-secondary`, margin-bottom 20px
- Links: DM Sans, 0.875rem, `--text-muted`
- Contatos: DM Sans, 0.875rem, `--text-muted`
- Rodape: DM Sans, 0.75rem, `--text-muted`

### Cores
- Fundo: `#060810`
- Separadores: `var(--border-subtle)`
- Links hover: `--text-primary`
- Logo "IRD": gold-gradient

### Interatividade
- Links hover: underline animado (como header), `--text-muted → --text-primary` 200ms

### Responsividade
- <= 768px: grid → 1 coluna, gap 32px
- Rodape: flex-column, center, gap 8px
