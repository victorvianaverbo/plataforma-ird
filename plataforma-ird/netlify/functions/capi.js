const https = require('https');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const PIXEL_ID = process.env.META_PIXEL_ID || '1026349941870089';
    const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;

    if (!ACCESS_TOKEN) {
        console.error('META_ACCESS_TOKEN is not defined');
        return { statusCode: 500, body: JSON.stringify({ success: false, error: 'META_ACCESS_TOKEN missing' }) };
    }

    try {
        const { event_name, event_id, event_source_url, user_data, custom_data } = JSON.parse(event.body);

        const payload = JSON.stringify({
            data: [
                {
                    event_name: event_name || 'PageView',
                    event_time: Math.floor(Date.now() / 1000),
                    action_source: 'website',
                    event_id: event_id,
                    event_source_url: event_source_url || event.headers.referer,
                    user_data: {
                        client_ip_address: event.headers['client-ip'] || event.headers['x-forwarded-for'],
                        client_user_agent: event.headers['user-agent'],
                        ...user_data
                    },
                    custom_data: custom_data || {}
                }
            ]
        });

        return new Promise((resolve, reject) => {
            const options = {
                hostname: 'graph.facebook.com',
                path: `/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': Buffer.byteLength(payload)
                }
            };

            const req = https.request(options, (res) => {
                let responseData = '';
                res.on('data', (chunk) => { responseData += chunk; });
                res.on('end', () => {
                    resolve({
                        statusCode: res.statusCode,
                        body: JSON.stringify({ success: res.statusCode === 200, meta_response: JSON.parse(responseData) })
                    });
                });
            });

            req.on('error', (e) => {
                console.error('HTTPS error:', e);
                resolve({ statusCode: 500, body: JSON.stringify({ success: false, error: e.message }) });
            });

            req.write(payload);
            req.end();
        });

    } catch (error) {
        console.error('CAPI runtime error:', error);
        return { statusCode: 400, body: JSON.stringify({ success: false, error: error.message }) };
    }
};
