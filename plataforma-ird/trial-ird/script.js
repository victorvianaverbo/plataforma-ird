/**
 * Trial Script - Plataforma IRD
 */

document.addEventListener('DOMContentLoaded', () => {
    initModals();
    initPhoneInput();
    initFAQ();
    initForms();
    captureUTMs();
});

/* ==========================================
   MODAIS
   ========================================== */

function initModals() {
    const modalBtns = document.querySelectorAll('[data-modal]');

    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active'); // Usando a classe 'active' conforme o script raiz
                document.body.style.overflow = 'hidden';
            }
        });
    });

    document.querySelectorAll('.modal-overlay').forEach(modal => {
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => closeModal(modal));
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal-overlay.active');
            if (activeModal) closeModal(activeModal);
        }
    });
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

/* ==========================================
   FAQ
   ========================================== */

function initFAQ() {
    document.querySelectorAll('.faq-row').forEach(row => {
        const btn = row.querySelector('.faq-btn');
        btn.addEventListener('click', () => {
            const isActive = row.classList.contains('active');

            // Fecha outros abertos
            document.querySelectorAll('.faq-row').forEach(r => {
                r.classList.remove('active');
                r.querySelector('.faq-math').textContent = '[+]';
            });

            if (!isActive) {
                row.classList.add('active');
                row.querySelector('.faq-math').textContent = '[—]';
            }
        });
    });
}

/* ==========================================
   TELEFONE INTERNACIONAL
   ========================================== */

function initPhoneInput() {
    if (typeof intlTelInput === 'undefined') return;

    document.querySelectorAll('input[type="tel"]').forEach(input => {
        input._iti = intlTelInput(input, {
            initialCountry: 'br',
            preferredCountries: ['br', 'us', 'pt'],
            separateDialCode: true,
            strictMode: true,
            loadUtilsOnInit: 'https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js'
        });
    });
}

/* ==========================================
   UTMs
   ========================================== */

function captureUTMs() {
    const params = new URLSearchParams(window.location.search);
    const utms = ['source', 'medium', 'campaign', 'content', 'term'];

    utms.forEach(utm => {
        const value = params.get(`utm_${utm}`);
        if (value) {
            const inputs = document.querySelectorAll(`[name="utm_${utm}"]`);
            inputs.forEach(input => input.value = value);
        }
    });
}

/* ==========================================
   FORMULÁRIOS
   ========================================== */

function initForms() {
    const forms = document.querySelectorAll('form[data-form]');
    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            const feedback = form.querySelector('.form-feedback');
            const originalText = btn.textContent;

            // Validar Telefone
            const phoneInput = form.querySelector('input[type="tel"]');
            if (phoneInput && phoneInput._iti && !phoneInput._iti.isValidNumber()) {
                feedback.textContent = "Por favor, insira um WhatsApp válido.";
                feedback.className = "form-feedback error";
                return;
            }

            btn.disabled = true;
            btn.textContent = 'LIBERANDO ACESSO...';
            feedback.textContent = "";

            // Coleta de dados
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // Pega o número de telefone formatado
            if (phoneInput && phoneInput._iti) {
                data.telefone = phoneInput._iti.getNumber();
            }

            try {
                // Configurações Supabase (direto via JS como no site principal)
                const SUPABASE_URL = 'https://woebteyuqzndvchruxhw.supabase.co';
                const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvZWJ0ZXl1cXpuZHZjaHJ1eGh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3OTAyMDYsImV4cCI6MjA4NzM2NjIwNn0.N2KgxsYE-NEnM6dz9cjGRKY1WVXoLBW1qpoNTo0oCcs';

                const response = await fetch(`${SUPABASE_URL}/rest/v1/leads_trial`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'apikey': SUPABASE_KEY,
                        'Authorization': `Bearer ${SUPABASE_KEY}`,
                        'Prefer': 'return=minimal'
                    },
                    body: JSON.stringify({
                        nome: data.nome,
                        email: data.email,
                        telefone: data.telefone,
                        utm_source: data.utm_source || '',
                        utm_medium: data.utm_medium || '',
                        utm_campaign: data.utm_campaign || '',
                        utm_content: data.utm_content || '',
                        utm_term: data.utm_term || '',
                        referrer: document.referrer || '',
                        form_name: 'trial-capture-direct'
                    })
                });

                if (response.ok) {
                    // Meta Pixel Lead Event
                    if (typeof fbq === 'function') {
                        fbq('track', 'Lead');
                    }

                    btn.textContent = 'LIBERADO!';
                    feedback.textContent = "Sucesso! Abrindo plataforma...";
                    feedback.className = "form-feedback success";

                    // Redirect para a Plataforma
                    setTimeout(() => {
                        const redirectUrl = "https://app.institutoird.com.br/trial";
                        const params = new URLSearchParams(window.location.search);

                        // Passar nome e email no redirect
                        if (data.nome) params.set('nome', data.nome);
                        if (data.email) params.set('email', data.email);

                        window.location.href = `${redirectUrl}?${params.toString()}`;
                    }, 1000);
                } else {
                    const errorData = await response.json().catch(() => ({}));
                    throw new Error(errorData.message || "Falha no salvamento");
                }
            } catch (error) {
                console.error("Erro na captura:", error);
                btn.disabled = false;
                btn.textContent = originalText;
                feedback.textContent = "Ocorreu um erro ao salvar os dados. Tente novamente.";
                feedback.className = "form-feedback error";
            }
        });
    });
}
