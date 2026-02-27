# Layout - Plataforma IRD | MAGIS + ENAM ATÉ A APROVAÇÃO

## Design System (Global)

### Paleta de Cores
```css
:root {
  --bg-primary:      #080B14;    /* fundo principal */
  --bg-secondary:    #0D1121;    /* fundo secoes alternadas */
  --bg-card:         #111628;    /* cards */
  --bg-card-hover:   #161C35;    /* cards hover */
  --gold-100:        #FFF3D4;
  --gold-200:        #F5DFA0;
  --gold-300:        #E8C566;    /* acento principal */
  --gold-400:        #D4A843;
  --gold-500:        #C9A84C;
  --gold-gradient:   linear-gradient(135deg, #E8C566 0%, #C9A84C 50%, #A8893A 100%);
  --gold-glow:       0 0 40px rgba(201, 168, 76, 0.15);
  --text-primary:    #F2F0EB;
  --text-secondary:  #9A9CAE;
  --text-muted:      #5D5F72;
  --border-subtle:   rgba(201, 168, 76, 0.08);
  --border-gold:     rgba(201, 168, 76, 0.2);
}
```

### Tipografia
- **Heading:** DM Serif Display (Ex: `font-family: 'DM Serif Display', serif;`)
- **Body:** DM Sans (Ex: `font-family: 'DM Sans', sans-serif;`)
- **Link Google Fonts:** `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap`

### Espaçamentos Globais
- `--section-padding: clamp(80px, 10vw, 140px);`
- `--container-max: 1280px;`

---

## Seção 0: Header (Persistente)

### Arquetipo e Constraints
- Arquetipo: Sticky Header
- Constraints: Glassmorphism (Efeitos Especiais), Hover Underline (Interacao)
- Justificativa: Fornece navegação constante com um toque moderno.

### Conteúdo
- Logo: "Plataforma IRD" (IRD em gradiente)
- Links: Cronograma | Método | Bônus | FAQ
- CTA: "Começar agora" (Link para âncora #preco)

### Detalhes Técnicos
- `position: fixed; top: 0; width: 100%; z-index: 1000;`
- Glassmorphism no scroll: `background: rgba(8, 11, 20, 0.85); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border-subtle);`
- Altura: `80px` (Desktop), `70px` (Mobile).

---

## Seção 1: Hero

### Arquetipo e Constraints
- Arquetipo: Split Assimetrico (70/30)
- Constraints: Headline >150px (Tipografia), Selective Color dourado (Cor), Hover Lift (Interacao)
- Justificativa: Enfatiza a headline poderosa e cria dinamismo com o desequilíbrio visual.

### Conteúdo
- Tag: "MAGIS + ENAM ATÉ A APROVAÇÃO"
- Headline: "Passe na Magistratura e no ENAM com um **plano estruturado** até a sua aprovação — mesmo que hoje você esteja perdido, atrasado ou recomeçando."
- Subheadline: "Cronograma pronto + PDFs objetivos + Revisão estruturada + Diagnóstico por disciplina — acesso contínuo até a aprovação."
- CTA: "Clique no botão abaixo e organize sua aprovação hoje."
- Micro-texto: "Saia do ciclo eterno de cursinhos e entre em um plano estratégico que te conduz até a posse."

### Layout
- Grid: `grid-template-columns: 1.2fr 0.8fr; gap: 60px;`
- Lado Direito: Elemento visual abstrato (formas douradas flutuantes com `filter: blur(40px)`) para criar profundidade.

### Tipografia
- Headline: `font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 1.1; font-weight: 400;`
- Subheadline: `font-size: 1.125rem; color: var(--text-secondary); max-width: 540px;`

### Animações
- Headline: Surge com `data-aos="fade-up"` (Trigger imediato).
- Elementos flutuantes: `animation: float 6s ease-in-out infinite`.

---

## Seção 2: VSL (Vídeo de Vendas)

### Arquetipo e Constraints
- Arquetipo: Single Focus (Foco Absoluto)
- Constraints: Glassmorphism (Efeitos Especiais), Hover Glow (Interacao), Scale In (Movimento)
- Justificativa: Isola o vídeo para máxima retenção e autoridade.

### Conteúdo
- Título: "Veja como o Sistema IRD vai transformar sua preparação"
- Vídeo: Embed YouTube (ID: 0dmRcHqYXQY)
- CTA: "Quero começar minha preparação estratégica agora"

### Layout
- Container estreito: `max-width: 900px;`
- Frame do vídeo: `border-radius: 20px; border: 1px solid var(--border-gold); background: var(--bg-card); padding: 10px; box-shadow: 0 40px 100px rgba(0,0,0,0.5);`

### Animações
- Vídeo: `data-aos="zoom-in"` com delay de 200ms.

---

## Seção 3: O Problema (Agitação)

### Arquetipo e Constraints
- Arquetipo: Bento Box (Grid Irregular)
- Constraints: Negative Margin (Layout), Dark Mode intensificado (Cor), Stagger Animation (Movimento)
- Justificativa: Organiza os sintomas do problema em cards de diferentes escalas, criando um ritmo de leitura que "agita" a dor do usuário.

### Conteúdo
- Título: "O problema não é falta de inteligência."
- Subtítulo: "É falta de direção estratégica."
- Cards de Identificação:
  - Card 1: "Estuda por edital aberto."
  - Card 2: "Vive de reta final."
  - Card 3: "Troca de cursinho."
  - Card 4: "Assiste aula, mas não retém."
  - Card 5: "Fica nos 60%."

### Layout
- Grid complexo: Card 1 (2x2), restantes (1x1).
- Card Style: `background: #060810; border: 1px solid rgba(255,0,0,0.05);` (Tom de alerta sutil).

---

## Seção 4: Mecanismo Único (Sistema IRD)

### Arquetipo e Constraints
- Arquetipo: Golden Ratio (Proporção Áurea)
- Constraints: Card Stack (Composicao), Overlapping Grid (Layout), Pulse Loop (Movimento)
- Justificativa: Mostra a "engrenagem" do sistema de forma harmônica e estruturada.

### Conteúdo
- Título: "Sistema IRD de Aprovação Estruturada"
- Subtítulo: "Não é apenas uma 'plataforma', é o seu diferencial estratégico."
- Itens de Diferencial: Autoanálise, Cronogramas por Fase, PDFs Diretos, Jurisprudência, Revisão Cíclica, Diagnóstico, Bateria ENAM/FGV.

### Layout
- Lado Esquerdo: Cards empilhados mostrando cada ferramenta.
- Lado Direito: Texto explicativo com destaque para "Transformação Real".

---

## Seção 5: Como Funciona (4 Passos)

### Arquetipo e Constraints
- Arquetipo: Rhythmic (Repetição com Variação)
- Constraints: Counter Animation (Movimento), Texto com Stroke (Tipografia), Hover Color (Interacao)
- Justificativa: Cria uma jornada linear clara e fácil de processar.

### Conteúdo
- Passo 1: Diagnóstico
- Passo 2: Organização da fase
- Passo 3: Execução com revisão estruturada
- Passo 4: Ajustes estratégicos até o corte

### Elementos Visuais
- Números em Stroke: `01, 02, 03, 04` gigantes em background (`-webkit-text-stroke: 1px var(--gold-200); opacity: 0.1;`).

---

## Seção 6: Para Quem (E para quem não é)

### Arquetipo e Constraints
- Arquetipo: Split Vertical (50/50)
- Constraints: Selective Color verde/vermelho (Cor), Clip Reveal (Movimento), Hover Scale (Interacao)
- Justificativa: Contraste direto entre o perfil ideal e o indesejado para qualificar o lead.

### Conteúdo
- Sim: Facul/Início, Estagnados nos 60%, Fim da Reta Final, Projeto Sério.
- Não: Videoaula infinita, Estudo só com edital, Fórmula mágica.

### Cores
- Lado "Sim": `background: rgba(74, 222, 128, 0.02); border-right: 1px solid rgba(74, 222, 128, 0.1);`
- Lado "Não": `background: rgba(239, 68, 68, 0.02); border-left: 1px solid rgba(239, 68, 68, 0.1);`

---

## Seção 7: Oferta (O que você recebe)

### Arquetipo e Constraints
- Arquetipo: Spotlight (Destaque Central)
- Constraints: High Contrast (Cor), Glassmorphism (Efeitos Especiais), Hover Glow (Interacao)
- Justificativa: Transmite o alto valor do produto com um design "clean" e luxuoso.

### Conteúdo
- Título: "O que você recebe na sua preparação completa"
- Itens: Cronogramas, PDFs, Jurisprudência, Revisão, Diagnóstico, Bateria, Onboarding, Acesso contínuo.
- Preço: 12x R$ 249,25 ou R$ 2.410 à vista.

### Layout
- Card de Preço: `max-width: 600px; margin: 0 auto; padding: 60px; border: 2px solid var(--gold-300); background: linear-gradient(180deg, var(--bg-card) 0%, var(--bg-primary) 100%);`

---

## Seção 8: Remoção de Risco

### Arquetipo e Constraints
- Arquetipo: Isolated Element (Foco em um ponto)
- Constraints: Gradiente Animado (Cor), Floating Cards (Composicao), Breathe Loop (Movimento)
- Justificativa: Transmite segurança absoluta. Não é sobre vender um curso, é sobre garantir a posse.

### Conteúdo
- Título: "Você não está comprando acesso."
- Subtítulo: "Está garantindo acompanhamento até a sua aprovação."
- Garantia: "Se você executar o método e não evoluir, nós reorganizamos sua estratégia."

### Animação
- O card de garantia tem uma borda com gradiente dourado que "respira" suavemente (`animation: breathe 4s infinite`).

---

## Seção 9: FAQ

### Arquetipo e Constraints
- Arquetipo: Contained Center (Centralizado)
- Constraints: Accordion customizado (Estruturas Especiais), Hover Underline (Interacao)
- Justificativa: Organização limpa para sanar dúvidas comuns.

### Conteúdo
- Perguntas: Carga horária, Edital, Iniciante, Conciliação Trabalho, Acesso Aprovação, Celular.

---

## Seção 10: Footer

### Arquetipo e Constraints
- Arquetipo: Balanced (Equilibrado)
- Constraints: Dark Mode intensificado (Cor), Selective Color (Cor)
- Justificativa: Fechamento institucional e contatos.

### Conteúdo
- Logo, Descrição, Contatos, Termos e Privacidade.
