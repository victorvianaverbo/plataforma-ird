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
                modal.style.display = 'flex';
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
            const activeModal = document.querySelector('.modal-overlay[style*="display: flex"]');
            if (activeModal) closeModal(activeModal);
        }
    });
}

function closeModal(modal) {
    modal.style.display = 'none';
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
            btn.textContent = 'PROCESSANDO...';
            feedback.textContent = "";

            const formData = new FormData(form);

            // Garantir que estamos enviando para o endpoint local do Netlify que registrou o form
            // Em subdomínios, o local path '/' deve ser o index onde o form foi detectado.
            // Sendo um proxy, '/' aponta para '/trial-ird/index.html' no Netlify.

            try {
                const response = await fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString(),
                });

                if (response.ok) {
                    btn.textContent = 'LIBERADO!';
                    feedback.textContent = "Acesso concedido. Abrindo plataforma...";
                    feedback.className = "form-feedback success";

                    // Captura e repasse de UTMs + Dados no redirect
                    const redirectUrl = "https://app.institutoird.com.br/trial";
                    const params = new URLSearchParams(window.location.search);

                    const nome = form.querySelector('[name="nome"]')?.value || "";
                    const email = form.querySelector('[name="email"]')?.value || "";
                    if (nome) params.set('nome', nome);
                    if (email) params.set('email', email);

                    setTimeout(() => {
                        window.location.href = `${redirectUrl}?${params.toString()}`;
                    }, 800);
                } else {
                    throw new Error("Erro de comunicação com o servidor.");
                }
            } catch (error) {
                console.error("Erro no envio:", error);
                btn.disabled = false;
                btn.textContent = originalText;
                feedback.textContent = "Ocorreu um erro. Tente novamente ou fale no suporte.";
                feedback.className = "form-feedback error";
            }
        });
    });
}
