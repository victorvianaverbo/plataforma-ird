---
name: criativo-vendas
description: Cria criativos de imagem para vendas (feed e vertical/stories) usando o Nano Banana do Google. Use esta skill sempre que o usuário pedir para criar criativos, anúncios, artes para redes sociais, posts de vendas, imagens para campanha, ou quiser gerar prompts para Nano Banana. Ativa também quando o usuário menciona "criativo", "arte", "feed", "stories", "vertical", "anúncio", "campanha de imagem", ou "Nano Banana".
---

# Skill: Criativo de Vendas

Cria criativos de alta conversão para feed (quadrado/retrato) e vertical (stories/reels), com prompts otimizados para o Nano Banana (Google Gemini Image) e copy de vendas pronto para usar.

---

## REGRA DE OURO

**Sempre entregue os três juntos: Copy + Prompt Nano Banana + Ficha Técnica.**

Nunca entregue só o copy sem o prompt, nem só o prompt sem a ficha técnica. O output completo é o único output válido.

---

## Passo 1: Capturar contexto

Antes de criar, confirme (a partir da conversa ou perguntando) os seguintes pontos:

- **Produto/Serviço**: O que está sendo anunciado?
- **Público-alvo**: Quem é o ICP (perfil de cliente ideal)?
- **Dor principal**: Qual problema/frustração o produto resolve?
- **Benefício central**: O maior resultado que o produto entrega
- **CTA desejado**: Qual ação o criativo deve gerar? (ex: "Clique e saiba mais", "Garanta sua vaga")
- **Tom de voz**: Urgente, inspirador, educativo, direto?
- **Formato solicitado**: Feed, Vertical, ou ambos?
- **Identidade visual** (se informada): cores, estilo, logo

Se o usuário já informou o produto e a dor na conversa, use essas informações. Não pergunte o que já foi dito.

---

## Passo 2: Gerar o Copy

Escreva o copy do criativo seguindo a estrutura abaixo. O copy deve ser **curto, direto e orientado a conversão** — criativos têm 1-3 segundos de atenção.

### Estrutura para Feed:
```
HEADLINE (máx. 7 palavras): [dor ou desejo direto]
BODY (máx. 2 linhas): [agitação + solução rápida]
CTA (máx. 4 palavras): [ação específica]
```

### Estrutura para Vertical (stories/reels):
```
HOOK (máx. 5 palavras, topo): [pergunta ou afirmação impactante]
MEIO (1-2 linhas): [prova ou benefício central]
CTA (rodapé, máx. 4 palavras): [ação + urgência ou prova]
```

**Regras de copy:**
- Use a dor ou o desejo do ICP na headline
- Evite jargões técnicos — escreva como o cliente pensa
- O CTA deve dizer exatamente o que acontece ao clicar
- Se tiver número/dado (ex: "87% de aprovação"), use-o
- Tom direto supera tom pomposo em vendas

---

## Passo 3: Gerar o Prompt para Nano Banana

Escreva o prompt **em inglês**, estruturado da seguinte forma:

```
[Style] + [Composition] + [Subject/Scene] + [Colors/Mood] + [Text overlay description] + [Technical specs]
```

### Diretrizes do prompt:

**Estilo visual recomendado para vendas:**
- `modern commercial photography style`
- `bold graphic design, editorial ad style`
- `clean minimalist layout with strong typography`
- `high-impact direct response ad visual`

**Composição por formato:**
- Feed: `centered composition`, `rule of thirds`, `clear visual hierarchy`
- Vertical: `top-to-bottom visual flow`, `mobile-first layout`, `full bleed background`

**Texto no criativo:**
- Descreva o texto como parte do prompt: `bold white headline text overlaid: "[HEADLINE]"`
- Posicione: `text at top`, `text at center`, `CTA button at bottom`

**Cores e mood:**
- Se houver identidade visual, inclua as cores hex ou descritivas
- Padrão de alta conversão: contraste alto (fundo escuro + texto claro ou vice-versa)
- Evite fundos muito poluídos

**Specs técnicos no prompt:**
- Feed quadrado: `square format 1:1, 1080x1080px`
- Feed retrato: `portrait format 4:5, 1080x1350px`
- Vertical: `vertical format 9:16, 1080x1920px`

### Exemplo de prompt para feed:
```
Modern commercial photography style, centered composition with strong visual hierarchy. A focused professional person at a desk looking confident and determined, soft bokeh background in deep navy blue. Bold white sans-serif headline text overlaid at top: "Aprovado na Magistratura". Clean CTA button in gold at bottom: "Começar agora". High contrast, aspirational mood, direct response ad aesthetic. Square format 1:1, 1080x1080px. Photorealistic, sharp, professional lighting.
```

### Exemplo de prompt para vertical:
```
Bold graphic design, full bleed dark background, mobile-first vertical layout. Top section: impactful white bold question text "Travado nos 60%?" overlaid on abstract dark texture. Middle: clean list of 3 bullet points with check icons in gold, body copy in light gray. Bottom: solid accent color CTA button "Quero minha aprovação". Modern minimalist style, high contrast. Vertical format 9:16, 1080x1920px. Clean, sharp, conversion-focused ad design.
```

---

## Passo 4: Ficha Técnica

Entregue sempre a ficha técnica ao final:

| Formato | Proporção | Dimensões | Onde usar |
|---------|-----------|-----------|-----------|
| Feed Quadrado | 1:1 | 1080 × 1080 px | Instagram Feed, Facebook Feed |
| Feed Retrato | 4:5 | 1080 × 1350 px | Instagram Feed (maior área) |
| Vertical Stories | 9:16 | 1080 × 1920 px | Instagram Stories, Reels, TikTok |

---

## Formato de entrega

Organize a resposta usando este template exato:

```
## Criativo [N] — [Formato: Feed/Vertical]

### Copy
- **Headline:** ...
- **Body:** ...
- **CTA:** ...

### Prompt Nano Banana
[prompt em inglês]

### Ficha Técnica
- Formato: ...
- Dimensões: ...
- Usar em: ...

---
```

Se o usuário pediu os dois formatos, entregue primeiro o Feed, depois o Vertical.

---

## Variações

Se o usuário quiser variações, ofereça:

- **Variação A** — foco na dor (agitação da frustração atual)
- **Variação B** — foco no resultado (aspiração e transformação)
- **Variação C** — foco na prova social (número, depoimento, credencial)

Para cada variação, o prompt do Nano Banana deve refletir o tom diferente:
- Dor → cenas mais tensas/urgentes
- Resultado → cenas aspiracionais/luminosas
- Prova social → imagens com pessoas reais ou dados em destaque

### Referências de tom por nicho

**Concursos/Educação:**
- Dor: "Mais um ano sem passar?"
- Resultado: "Aprovado. Finalmente."
- Prova: "87 aprovados em 12 meses"

**Saúde/Estética:**
- Dor: "Cansado de tentar sem resultado?"
- Resultado: "Menos 12kg em 60 dias"
- Prova: "Mais de 3.000 transformações"

**Negócios/Financeiro:**
- Dor: "Faturando, mas sem lucro?"
- Resultado: "R$50k/mês com método"
- Prova: "+200 empresas escalam com isso"

---

## Troubleshooting

### "Prompt gerou imagem genérica demais"

Adicione especificidade ao contexto do produto e ao público. Substitua descritores genéricos (ex: "professional person") por cenas concretas (ex: "young Brazilian woman in her 30s studying at home with books and laptop, focused expression"). Acrescente detalhes de cor da marca e posicionamento do texto.

### "Copy ficou longo demais para o criativo"

Reduza a headline para no máximo 5 palavras e o body para 1 linha. Criativos exigem escaneabilidade instantânea — se precisar de mais texto, é conteúdo, não criativo.

### "Usuário não sabe qual formato quer"

Por padrão, entregue os dois (Feed 1:1 + Vertical 9:16). O usuário decide qual usar após ver os prompts.

### "Identidade visual não foi informada"

Use o esquema padrão de alta conversão: fundo escuro (navy, preto ou cinza carvão) + texto branco bold + destaque em cor de alta energia (dourado, laranja, verde-limão). Funciona para qualquer nicho como ponto de partida.

### "Usuário quer texto em português no criativo"

Mantenha o prompt em inglês (o Nano Banana performa melhor), mas coloque o texto do criativo em português dentro do prompt como string: `bold white text overlaid: "Seu texto aqui"`. O modelo entende e posiciona o texto conforme descrito.
