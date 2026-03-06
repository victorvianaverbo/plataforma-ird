/**
 * Trial Script - Plataforma IRD
 */

document.addEventListener('DOMContentLoaded', () => {
    initModals();
    initPhoneInput();
    initFAQ();
    initForms();
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
        intlTelInput(input, {
            initialCountry: 'br',
            preferredCountries: ['br', 'us', 'pt'],
            separateDialCode: true,
            strictMode: true,
            loadUtilsOnInit: 'https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js'
        });
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
            const originalText = btn.textContent;

            btn.disabled = true;
            btn.textContent = 'ENVIANDO...';

            // Simulação de envio Netlify e Redirect para Hotmart (Trial)
            try {
                // Aqui entraria a lógica real de fetch do Netlify
                setTimeout(() => {
                    // Após 1.5s redireciona para o checkout do trial ou página de sucesso
                    // Para o trial, o usuário deve ir para o onboarding ou área restrita
                    window.location.href = "https://pay.hotmart.com/L85860528K?checkoutMode=10&bid=1709734200000";
                }, 1500);
            } catch (error) {
                console.error("Erro ao enviar:", error);
                btn.disabled = false;
                btn.textContent = originalText;
            }
        });
    });
}
