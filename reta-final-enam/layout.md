# Layout - Reta Final ENAM 2026.1

## Identidade Visual Base (Aprovada)
- **Paleta**: Elegant Gray (#F2F4F7), Midnight Blue (#0A1128), Gold (#D4AF37).
- **Background Principal**: Cinza Claro / Premium.
- **Fontes**: Playfair Display (Heading), Inter (Body).
- **Espaçamento**: Escala de 20px (20, 40, 60, 80, 100).

---

## Seção 1: Hero (Implementada)
- **Arquétipo**: Poster.
- **Destaque**: Contador dinâmico JS até 07/06/2026.

---

## Seção 2: Comparação (Implementada)
- **Arquétipo**: Split Vertical.
- **Destaque**: Candidato A (Muted) vs Candidato B (Gold Glow).

---

## Seção 3: O Maior Erro
### Arquétipo e Constraints
- **Arquétipo**: Spotlight.
- **Constraints**: Dark Mode (Cor), Text Blur (Tipografia/Efeito na entrada).
- **Justificativa**: Criar um ambiente de "alerta" e seriedade sobre os erros comuns.

### Conteúdo
- **Título**: O erro que custa a aprovação na reta final.
- **Conteúdo**: Entrar em modo de urgência, tentar revisar todo o conteúdo e consumir mais aulas sem critério. Muito esforço, pouca retenção. Na reta final, estudar tudo é a maneira mais rápida de não dominar nada.

### Layout
- Background #050608 (mais escuro que o navy base).
- Container central estreito (max-width: 800px) para foco absoluto.
- Título centralizado com line-height 1.1 e margin-bottom 40px.

### Animações
- Revelação do título com `clip-path` de baixo para cima.
- Itens de erro com `stagger delay` de 200ms cada.

---

## Seção 4: O Mecanismo IRD
### Arquétipo e Constraints
- Arquétipo: Layered.
- Constraints: Glassmorphism (Efeito), Floating Cards (Layout).
- Justificativa: Mostrar a "estrutura" e organização da plataforma como algo tangível e tecnológico.

### Conteúdo
- **Título**: A Solução Estratégica para o ENAM.
- Conteúdo: Plano estratégico que mostra o que priorizar, quando revisar e como distribuir seu tempo.

### Layout
- Cards flutuantes com `backdrop-filter: blur(10px)` e bordas finas em Gold (0.5px).
- Grid assimétrico (1 card grande + 2 pequenos).

---

## Seção 5: Como Funciona (Os 4 Pilares)
### Arquétipo e Constraints
- Arquétipo: Timeline Estacionária.
- Constraints: Scroll Progress (Movimento), Mixed Weights (Tipografia).
- Justificativa: Guiar o olhar do usuário passo a passo no método.

### Conteúdo
- Item 01: Cronograma Estratégico.
- Item 02: Priorização Baseada em Dados.
- Item 03: Revisões Programadas.
- Item 04: Estudo Ativo.

### Layout
- Marcador de etapa fixo à esquerda (01, 02...).
- Conteúdo desliza à medida que o scroll avança.

---

## Seção 6: O Que Você Recebe & Oferta
### Arquétipo e Constraints
- Arquétipo: Typographic Poster Box.
- Constraints: Headline >150px (Background), Selective Color (Gold).
- Justificativa: Criar um fechamento com "cara de contrato" e oferta imediata.

### Conteúdo
- Lista de entregáveis + Preço + Botão CTA.
- Título Final: Os próximos dias definem sua aprovação.
- Nota de urgência: ENAM 2026.1 — 07 de junho de 2026.

### Layout
- Caixa de oferta com borda dupla (passepartout) - estilo editorial clássico.
- Fundo em branco "Papel" (#F8F8F8) com texto em Navy para contraste máximo (Gatilho de Autoridade).

---

## Seção 7: Autoridade
### Arquétipo e Constraints
- Arquétipo: Photo Essay.
- Constraints: Duotone (Mídia), Serif Titular (Tipografia).
- Justificativa: Humanizar a metodologia com seriedade.

### Conteúdo
- Texto sobre a metodologia do Instituto IRD e aprovação na Magistratura.
