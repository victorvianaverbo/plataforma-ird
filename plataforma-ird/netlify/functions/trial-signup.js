const https = require('https');

exports.handler = async (event) => {
    // Permitir apenas POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Metodo nao permitido' };
    }

    try {
        let data = {};

        // Parsear dados vindo do fetch (URLSearchParams ou JSON)
        if (event.headers['content-type'] === 'application/x-www-form-urlencoded') {
            const params = new URLSearchParams(event.body);
            data = Object.fromEntries(params.entries());
        } else {
            data = JSON.parse(event.body);
        }

        console.log('Dados recebidos na function trial-signup:', data.email);

        const SUPABASE_URL = process.env.SUPABASE_URL;
        const SUPABASE_KEY = process.env.SUPABASE_KEY;

        if (!SUPABASE_URL || !SUPABASE_KEY) {
            throw new Error('Configuracoes do Supabase ausentes no Netlify');
        }

        // Montar Payload para o Supabase
        const lead = {
            nome: data.nome || '',
            email: data.email || '',
            telefone: data.telefone || '',
            utm_source: data.utm_source || '',
            utm_medium: data.utm_medium || '',
            utm_campaign: data.utm_campaign || '',
            utm_term: data.utm_term || '',
            utm_content: data.utm_content || '',
            referrer: event.headers.referer || '',
            form_name: 'trial-signup-direct',
            created_at: new Date().toISOString()
        };

        const supabasePayload = JSON.stringify(lead);

        // Enviar para o Supabase
        const success = await new Promise((resolve, reject) => {
            const baseUrl = SUPABASE_URL.replace(/\/$/, '');
            const hostname = baseUrl.replace('https://', '');

            const options = {
                hostname: hostname,
                path: '/rest/v1/leads_trial',
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
                res.on('data', () => { });
                res.on('end', () => {
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        resolve(true);
                    } else {
                        console.error('Erro Supabase Status:', res.statusCode);
                        resolve(false);
                    }
                });
            });

            req.on('error', (e) => {
                console.error('Erro HTTPS Supabase:', e);
                resolve(false);
            });

            req.write(supabasePayload);
            req.end();
        });

        if (success) {
            return {
                statusCode: 200,
                body: JSON.stringify({ success: true, message: 'Lead salvo com sucesso' })
            };
        } else {
            return {
                statusCode: 500,
                body: JSON.stringify({ success: false, error: 'Erro ao salvar lead no banco' })
            };
        }

    } catch (error) {
        console.error('Erro na Function trial-signup:', error);
        return {
            statusCode: 400,
            body: JSON.stringify({ success: false, error: error.message })
        };
    }
};
