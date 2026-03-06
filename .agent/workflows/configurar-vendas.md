---
description: Configurar formulário de captura com UTMs e publicar com validação final
---

Este workflow padroniza a criação de formulários de leads, captura de parâmetros UTM e o processo de publicação garantindo que o site esteja funcionando na URL de produção.

### Passos do Workflow

1. **Preparar o Formulário (Skill: forms)**
   - Garanta que o formulário no `index.html` tenha os atributos: `name`, `method="POST"`, `data-netlify="true"`, `data-form` e o hidden input `form-name`.
   - Adicione campos ocultos para capturar UTMs (utm_source, utm_medium, utm_campaign, etc.) se necessário.

2. **Configurar Rastreamento (Skill: tracking)**
   - Verifique se os IDs de Meta Pixel ou GTM estão presentes no `<head>`.
   - Certifique-se de que o evento `Lead` está sendo disparado no envio do formulário (o `script.js` padrão já faz isso).

3. **Configuração do Banco de Dados (Supabase)**
   - Crie uma tabela `leads` no Supabase com as colunas: `id`, `created_at`, `nome`, `email`, `telefone`, `utm_source`, `utm_medium`, `utm_campaign`.
   - Configure as variáveis de ambiente no Netlify: `SUPABASE_URL` e `SUPABASE_KEY`.
   - O framework detectará essas variáveis e salvará os leads automaticamente via Netlify Function integrada.

4. **Verificação Local (Skill: local-server)**
   - Inicie o servidor local com `netlify dev`.
   - Teste o preenchimento do formulário e verifique se o redirecionamento para a página de `obrigado.html` funciona e repassa as UTMs da URL.
   - Verifique se o log do terminal mostra o sucesso na gravação no Supabase.

// turbo
5. **Publicação (Skill: deploy)**
   - Execute a sequência de deploy:
     ```bash
     git add .
     git commit -m "feat: configurar formulário, tracking e banco de dados"
     git push origin main
     ```
   - O Netlify cuidará do build das functions e do deploy do site.

6. **Validação Final em Produção (CRÍTICO)**
   - Acesse a URL final de produção (ex: https://carreiras.institutoird.com/).
   - Use o comando `read_url_content` para validar se o formulário está presente no HTML ao vivo.
   - Realize um teste real de preenchimento e verifique se o lead aparece no dashboard do Supabase.
   - Informe ao usuário que a tarefa foi concluída APENAS após confirmar que o site está online e os dados estão sendo salvos.
