const https = require('https');

exports.handler = async (event) => {
    // Netlify parseia o corpo da requisição automática 'submission-created'
    const payload = JSON.parse(event.body);
    const submission = payload.payload;
    const data = submission.data; // Dados do formulário
    const formName = submission.form_name;

    console.log(`Recebendo submissão do formulário: ${formName}`);

    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_KEY;

    if (!SUPABASE_URL || !SUPABASE_KEY) {
        console.error('ERRO: SUPABASE_URL ou SUPABASE_KEY não configurados no Netlify.');
        return { statusCode: 200 }; // Retornamos 200 para não quebrar o fluxo do Netlify
    }

    // Mapeamento de campos (ajuste conforme os nomes nos inputs do formulário)
    const lead = {
        nome: data.nome || data.name || '',
        email: data.email || '',
        telefone: data.telefone || data.phone || data.tel || '',
        utm_source: data.utm_source || '',
        utm_medium: data.utm_medium || '',
        utm_campaign: data.utm_campaign || '',
        utm_term: data.utm_term || '',
        utm_content: data.utm_content || '',
        referrer: submission.referrer || '',
        form_name: formName,
        created_at: new Date().toISOString()
    };

    const supabasePayload = JSON.stringify(lead);

    try {
        await new Promise((resolve, reject) => {
            // Remove trailing slash de URL se existir
            const baseUrl = SUPABASE_URL.replace(/\/$/, '');
            const hostname = baseUrl.replace('https://', '');

            const options = {
                hostname: hostname,
                path: '/rest/v1/leads',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': SUPABASE_KEY,
                    'Authorization': `Bearer ${SUPABASE_KEY}`,
                    'Content-Length': Buffer.byteLength(supabasePayload),
                    'Prefer': 'return=minimal'
                }
            };

            const req = https.request(options, (res) => {
                let resData = '';
                res.on('data', (chunk) => { resData += chunk; });
                res.on('end', () => {
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        console.log('Lead salvo com sucesso no Supabase!');
                        resolve();
                    } else {
                        console.error(`Erro no Supabase (${res.statusCode}):`, resData);
                        resolve(); // Resolvemos de qualquer forma para não travar
                    }
                });
            });

            req.on('error', (e) => {
                console.error('Erro na requisição HTTPS para Supabase:', e);
                resolve();
            });

            req.write(supabasePayload);
            req.end();
        });
    } catch (error) {
        console.error('Erro fatal na integração Supabase:', error);
    }

    return { statusCode: 200 };
};
