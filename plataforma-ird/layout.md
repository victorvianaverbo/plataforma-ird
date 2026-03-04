# Especificação Detalhada de Layout - Plataforma IRD (Versão Ultra Premium / Jurídica)

Este documento dita a exata especificação da página de vendas para o nicho de Magistratura e ENAM. O tom da marca é "Boutique Jurídica de Alta Performance", onde não há espaço para infantilidade, excessos de cores, "blobs" ou ícones divertidos. A sobriedade, a geometria pura e a tipografia colossal devem guiar cada pixel.

## Identidade Visual Global
- **Estilo Geral:** Classic Editorial / Minimalista High-End. Linhas muito finas (`1px`), bordas pontiagudas ou com mínimo arredondamento (`border-radius: 0px` ou `2px`), ausência de boxes sombreados em excesso e foco massivo em tipografia limpa.
- **Background Principal (`--bg-main`):** `#ffffff` (Branco absoluto. Simboliza a pureza e a clareza da página de um livro).
- **Background Secundário (`--bg-surface`):** `#f4f4f5` (Cinza pórtico. Frio e sério).
- **Background Terciário (`--bg-dark`):** `#0a0a0b` (Preto asfalto, não um slate azulado, mas o negro da tinta num papel).
- **Cor de Destaque Absoluta (`--accent-gold`):** `#c5a365` (Dourado clássico, opaco, como filetes de livros antigos e balanças de justiça).
- **Texto Principal (`--text-primary`):** `#18181b` (Antracite / Preto Carvão).
- **Texto Corpo (`--text-body`):** `#3f3f46` (Muted suave de altíssima legibilidade).
- **Font Heading:** `DM Serif Display` (Remete à tradição jurídica e a jornais de credibilidade).
- **Font Body:** `DM Sans` (Leve, afiada, arquitetônica).
- **Ícones Gerais:** Banir totalmente o estilo "Duotone" ou "Fill". Tudo o que for ilustrativo será substituído prioritariamente pela tipografia numérica Extragrande Serifada (ex: **01.**, **02.**). Nos escassos momentos em que for necessário um ícone, deverá usar o estilo "Thin" (Linha fina técnica), como balança da justiça e pilar romano desenhados em `1px`.

---

## Seção 1: Navigation (Header)

### Arquétipo e Constraints
- **Arquétipo:** Minimal Editorial
- **Constraints:** Bordas sólidas finas inferiores, Monocromático Absoluto.
- **Justificativa:** O header não tem enfeite de vidro fosco (glassmorphism não condiz no estilo "jornal"). É sólido, limpo e direto. 

### Conteúdo
- Logo: Plataforma IRD
- Links: Cronograma | Método | Bônus | FAQ
- CTA Header: Iniciar Preparação

### Layout
- Fixo no topo. Background `rgba(255, 255, 255, 0.98)`, backdrop sutil para legibilidade em rolagem.
- Linha inferior separadora rígida: `border-bottom: 1px solid #e4e4e7`.
- Container centralizado max-width 1280px, padding vertical 24px (compactando para 16px no scroll).

### Tipografia e Detalhes
- Logo: `DM Serif Display`, 1.5rem, `#18181b`, texto preto sólido. Sem firulas no nome.
- Links Nav: `DM Sans`, 0.85rem, uppercase, font-weight 500, letter-spacing 0.05em (estilo placa de nome em mesa de juiz). Cor: `#71717a`.
- Hover nos Links: Texto vai para `#18181b` e ganha um sublinhado (underline de 1px em `#c5a365`) a `4px` da base.
- Botão "Iniciar Preparação": Botão retangular estrito sem arredondamento. `padding: 12px 24px`, background transparente, border `1px solid #18181b`, cor texto `#18181b`. Hover: inverte cores (Fundo `#18181b`/ Letra branca).

---

## Seção 2: Hero Section

### Arquétipo e Constraints
- **Arquétipo:** Rule of Thirds / Type Hero
- **Constraints:** Tipografia Gigante (Headline Clássica > 120px), Imagem Monocromática Granulada ao Fundo ou Grafismo Geométrico Dourado, Botão Agulha (Zero arredondamento).
- **Justificativa:** A primeira impressão deve impor respeito. É um projeto sério.

### Conteúdo
- Tagline: Magistratura e ENAM até a posse
- Headline: Seja aprovado no ENAM e Magistratura.
- Subheadline: Com um plano estruturado até a sua aprovação — mesmo que hoje você esteja iniciando, perdido, atrasado ou recomeçando.
- CTA principal: Organize sua aprovação hoje.
- Micro-texto: Saia do ciclo eterno de cursinhos e entre em um plano estratégico que conduz até a posse.

### Layout
- Full Height `100vh`, padding total nas extremidades sem "blobs". O espaço vazio respira autoridade.
- Layout concentrado no quadrante central/esquerdo (Proporções rígidas de Box Model clássico).
- Linha fina vertical de dourada `1px` corta toda a lateral direita da sessão (divisão do campo em regra dos terços). Uma obra limpa.

### Tipografia
- Tagline: `DM Sans`, texto todo maiúsculo, espaçamento de caracteres brutal (`letter-spacing: 0.2em`), cor `#c5a365`, `fontsize 0.75rem`. Acima do título.
- Headline: Tipografia Colossal, `DM Serif Display` `clamp(4rem, 8vw, 6.5rem)`, linha finíssima `line-height: 1.0`. A palavra "ENAM e Magistratura" vai em cor `#18181b`, com itálico discreto pontual.
- Subheadline: Fonte de corpo `DM Sans`, 1.25rem, cor `#52525b`, max-width de 560px, linha à direita alinhada como parágrafo de artigo jurídico.
- Botão CTA: Quadrado e brutal. `padding: 24px 48px`, background `#18181b`, text color `#ffffff`. Efeito hover: um corte (clip-path diagonal leve num canto do hover) mantendo a seriedade.
- Dica Muted: `0.85rem` cinza `#a1a1aa`.

### Animações
- "Surgir das cinzas": O título varre uma máscara invisível de baixo para cima. Sem quiques elásticos, sem balanços (`Ease-out` linear, 1.2s de gravidade zero). Tudo soa como mármore deslizando e travando perfeitamente.

---

## Seção 3: O Problema (Agitação)

### Arquétipo e Constraints
- **Arquétipo:** Editorial / Photo Essay (Layout tipo Jornal)
- **Constraints:** Monocromático, Ausência total de ícones figurativos, Uso de Numerais Romanos Serifados Massivos II. III.
- **Justificativa:** Se a dor é adulta (estudo mal gerido), represente ela com frieza, como sentenças dadas num documento.

### Conteúdo
- Título: O problema não é falta de inteligência. É falta de direção estratégica.
- Descritivo: A maioria dos concurseiros nunca constrói base... Premia consistência...
- Card 1: Estuda por edital aberto. (descrição da copy)
- Card 2: Vive de reta final. (descrição da copy)
- Card 3: Troca de cursinho.
- Card 4: Falsa sensação. (assiste, mas não retém)
- Card 5: Estacionado nos 60%.

### Layout
- Background Total: `#f4f4f5` (Uma quebra de página de livro).
- Grid de Colunas de Jornal: 3 colunas fluídas, bordas laterais para os textos simulando paginação física (`border-left: 1px solid #d4d4d8`, `padding-left: 24px`). Nenhuma caixa (Box), apenas linhas delimitadoras minimalistas.
- A "Agitação" de cima pega 1/3 da altura. As 5 dores se interconectam abaixo usando regras de grid.

### Tipografia
- Sem Ícons: NADA de relógios, raios de flash descendo, nem gráficos pra baixo.
- Em vez dos ícones, Títulos das dores com Numeradores Serifados (`I.`, `II.`, `III.`, `IV.`, `V.`), cor `#c5a365`, gigantes (3rem) e Opacos, colocados logo antes do H3.
- H3 da dor: `DM Serif Display`, 1.6rem.  
- Parágrafo: `DM Sans`, 1.05rem, justificado se visualmente bom, lineHeight 1.7. Cor `#3f3f46`.

### Interatividade
- Tudo estático, focado na LEITURA dura da dor, sem cards pulando no mouse. O foco é intelectual. 

---

## Seção 4: VSL (O Documentário)

### Arquétipo e Constraints
- **Arquétipo:** Documentary / Video Immersive
- **Constraints:** Fundo Dark, Linha d'água de texto. 

### Conteúdo
- Título: O Sistema IRD (Veja a Base)
- Botão.

### Layout
- Background negro asfalto total: `#0a0a0b`. (A página apaga a luz para a exibição de uma peça solene).
- Padding de `160px 0`. O vídeo é a estrela.
- Frame do vídeo sem border-radius (quadrado, seco como TV de cinema, aspect-ratio 16:9), max-width: 1200px.
- Sem glow atrás do vídeo. Sompenas a borda fina `1px solid #27272a`.
- Nenhuma fumaça, foco absoluto. O Botão dourado de `background: #c5a365`, `color #000`, e arestas secas no final exalta classe.

---

## Seção 5: Mecanismo Único (Espinha Dorsal)

### Arquétipo e Constraints
- **Arquétipo:** Listas Tipográficas (Typographic Index / Table of Contents)
- **Constraints:** Lista Numérica Sequencial Limpa, Interação de "Hover Underline Focus", Zero Ícones.
- **Justificativa:** Os diferenciais de um cursinho top tier leem-se como um índice de um livro caro, não como tags coloridas dispersas.

### Conteúdo
- 7 Características Fundamentais (Autoanálise, Cronograma por fase, PDF, etc.) do copy.md.

### Layout
- Background Branco `#ffffff`.
- O título fica "Sticky" na esquerda em Desktop (`width 40%`).
- Todo o restante flui num bloco à direita (`width 60%`).
- Nenhuma "Pill" ou "Tag" flutuante. Todos os listados como itens com traço contínuo:
  `[ 01 ] ------ Autoanálise Inicial`
  `border-bottom: 1px solid #e4e4e7`, full width de linha. `padding: 32px 0`.

### Tipografia
- Fonte da lista é Colossal: A palavra da feature é escrita em `DM Serif Display` `2.5rem` em preto (`#18181b`). 
- A Letra fica cinza ao natural, e ao receber hover ganha contraste negro profundo + o traço inferior pinta para o ouro clássico `#c5a365`. Fundo de leitura clássica.

---

## Seção 6: Os 4 Passos do Triunfo

### Arquétipo e Constraints
- **Arquétipo:** Linha do Tempo Estacionária com Parallax Text
- **Constraints:** Sticky Sidebar e Scroll-triggered Text Opacity. Tipografia Monolítica.

### Conteúdo
- Método em 4 passos. 

### Layout
- 2 Cólonas: Título ancorado à esquerda ("O Método do Zero a Posse"). À direita, blocos enormes de texto que descrevem os 4 passos. Cada passo é separado por mais de `200px` de whitespace absoluto.
- Ao rodar o scroll, o Passo não ativo sofre desfoque sutil (blur 4px, opacidade 0.3). O passo que cruza a linha de visão do leitor (centro da tela vertical) acende sua legibilidade ao máximo. Essa seriedade foca sua atenção passo a passo.

---

## Seção 7: Linha de Corte (Quem é / Quem não é)

### Arquétipo e Constraints
- **Arquétipo:** Split Horizontal Estrito Baseado em Divisões de Linha. 
- **Constraints:** No Padding Entre Linhas, Texto Estrito, Somente Typografo "Thin".

### Conteúdo
- Perfil adequado vs. Perfil bloqueado.

### Layout
- Ao invés de usar telas "Preta contra Branca" brutas de split central que pesam o olho de forma imatura, aqui aplicamos uma abordagem de "tabela de lei".
- Background de cor de pórtico(`#f4f4f5`).
- Um Divisor Vertical Único e Rígido ao meio exato da Tela Desktop (`1px solid #18181b`).
- Título superior "A Escolha do Perfil".
- Esquerda "Quem Aderimos": Itens espaçados, sem ícones "Check"; listados simplesmente usando travessões de diálogo longo "—" com peso bold na cor `#18181b`.
- Direita "Quem Discutamos": Listado com o mesmo rigor. 
- Transmite autoridade institucional se a página não se esforça pedindo aplauso com cores contrastantes agressivas.

---

## Seção 8: O Contrato Final (Oferta)

### Arquétipo e Constraints
- **Arquétipo:** Documento Exposto / Typographic Poster Box.
- **Constraints:** Bordas Rígidas 1px, Outline Dupla, Bônus como "Rodapés Encartes".
- **Justificativa:** Preço não deve pular na tela como Black Friday de shopping. Deve existir como mensalidade numbre de "Boutique Consultórica".

### Conteúdo
- Bônus (Jusrisp, Aulas 1 Ano).
- O que inclui na oferta e Preço.

### Layout
- Background Preto `#0a0a0b` com toda a fonte no Branco Absoluto `#ffffff` e toques em Dourado Antigo `#c5a365`.
- A Caixa Principal não tem sombra. Tem um "Passepartout" (Doble Border). Uma borda externa em `#3f3f46` 1px, espaçada por 16px, e uma borda interna `#c5a365` 1px.
- Dentro, as inclusões, preço e Bônus. O Preço ocupa uma lateral quase majestosa. `DM Serif Display` `6rem` estourando sem enfeites.

### Call to Action Button
- O Botão "GARANTIR VAGA" assume formato de Título "Wide": Preenche 100% da caixa transversal. É Retangular, totalmente Branco com Texto Preto. Hover suave abaixando a tonalidade de branco para `#e4e4e7` e texto cravado na tela.

---

## Seção 9: Responsabilidade Jurídica (Garantia)

### Arquétipo e Constraints
- **Arquétipo:** Selo / Assinatura (Isolated Element)
- **Constraints:** Centralizado, Texto com Serifa cursiva pontual indicando aspas ou assinatura. Sem "boxes", só fundo chapado e texto.

### Conteúdo
- Garantia Condicional Irrestrita. ("Você não compra acesso... garante acompanhamento").

### Layout & Cores
- Fundo Creme/Pórtico `#f4f4f5`.
- Texto da chamada Central: "7 Dias". Número gigantesco em Dourado.
- Cópia logo abaixo. Ícones: Apenas a representação abstrata geométrica de uma marca d'água de assinatura dourada fraca em segundo plano ou linhas retas secas.  

---

## Seção 10: Perguntas Frequentes (F.A.Q)

### Arquétipo e Constraints
- **Arquétipo:** Acórdeon Tipo Linha
- **Constraints:** Sinais Matemáticos Precisos [+] [-] usando fonte crua "Roboto Mono / Courier" no ícone do fecho, apenas em tamanhos curtos.
- **Justificativa:** Se quer estilo caro/premium, use + e - de caracteres ascii/tipográficos fininhos enxutos alinhados perfeitamente, com linhas de border-bottom 1px precisas cor `#e4e4e7`. Nada de caixas separadas do FAQ, todas as perguntas estão numa planilha lista unificando tudo de modo minimalista. Background #ffffff.

---

## Seção 11: Rodapé Oficial Institucional

### Arquétipo e Constraints
- **Arquétipo:** Footer Modular Balanceado.
- **Constraints:** 100% Typography Base, Background "#ffffff", Cor Preto. 

### Layout
- Diferente do "SaaS Style" escuro de fechamento, um rodapé premium encerra em Papel Branco `#ffffff`. O texto "Plataforma IRD" em Serif Extragrande, flanqueado pelas colunas menores de Contato / Termos à direita.
- É claro, elegante e austero. Todas as linhas em caixa alta fina, dando um ar de revista luxuosa internacional. 
- Copyright, CNPJ ou Regras de Privacidade numa fonte micro (`0.7rem`) `DM Sans` cor grisalho.

---

**NOTA AO DESENVOLVEDOR.**
ESTA É UMA OBRA DE LUXO JURÍDICO. CADA PIXEL QUE FOR TRABALHADO NO HTML/CSS DEVE SER FIEL AO TOM CLÁSSICO. USE ZERO BORDER-RADIUS A NÃO SER QUE SEJA EXTREMAMENTE ESPECÍFICO. TODOS OS CARDS QUE O CLIENTE DISSE ANTES TÊM BORDAS RETAS (0px). ABANDONE ITENS INFANTIS. FOQUE NO CONTEÚDO E NA LEITURA DE REVISTA CIENTÍFICA/JUDICIÁRIA/ALTA-CULTURA.
