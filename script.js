/**
 * Metodo Zero v20
 */

document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  initModals();
  initForms();
  initPhoneInput();
  initYear();
});

/* ==========================================
   AOS
   ========================================== */

function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic',
      disableMutationObserver: true
    });
  }
}

/* ==========================================
   FORMULARIOS
   ========================================== */

const tempEmailDomains = [
  'tempmail', 'guerrillamail', '10minutemail', 'mailinator',
  'throwaway', 'fakeinbox', 'yopmail', 'trashmail', 'temp-mail',
  'disposable', 'sharklasers'
];

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return false;
  const domain = email.split('@')[1].toLowerCase();
  return !tempEmailDomains.some(temp => domain.includes(temp));
}

function initForms() {
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
  });
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const btn = form.querySelector('[type="submit"]');
  const feedback = form.querySelector('.form-feedback');

  // Validacao
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    field.classList.remove('error');

    if (!field.value.trim()) {
      field.classList.add('error');
      valid = false;
    }

    if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
      field.classList.add('error');
      valid = false;
    }

    if (field.type === 'tel') {
      const iti = field._iti;
      if (iti && !iti.isValidNumber()) {
        field.classList.add('error');
        valid = false;
      }
    }
  });

  if (!valid) {
    showFeedback(feedback, 'error', 'Preencha todos os campos corretamente.');
    return;
  }

  // Captura nome e email ANTES do envio (form.reset limpa os campos)
  const nome = form.querySelector('[name="nome"]')?.value || '';
  const email = form.querySelector('[name="email"]')?.value || '';

  // Telefone internacional - pega instancia do input DESTE form
  const phone = form.querySelector('input[type="tel"]');
  if (phone && phone._iti) {
    phone.value = phone._iti.getNumber();
  }

  // Envio
  const originalText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Enviando...';

  try {
    const res = await fetch(form.getAttribute('action') || window.location.pathname, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString()
    });

    if (res.ok) {
      // Meta Pixel
      if (typeof fbq === 'function') {
        fbq('track', 'Lead');
      }

      // GTM dataLayer
      if (typeof dataLayer !== 'undefined') {
        dataLayer.push({ event: 'generate_lead', form_name: form.getAttribute('name') || 'contato', method: 'netlify_form' });
      }

      // Redirect para Hotmart se for o form de captura
      if (form.getAttribute('name') === 'lead-captura-v1') {
        const checkoutUrl = new URL('https://pay.hotmart.com/L85860528K');

        // Repassa todos os parametros da URL atual (utm_source, fbclid, etc)
        new URLSearchParams(window.location.search).forEach((value, key) => {
          checkoutUrl.searchParams.set(key, value);
        });

        // Passa nome e email como parametros (Hotmart aceita 'name' e 'email' ou custom utms)
        if (nome) {
          checkoutUrl.searchParams.set('name', nome);
        }
        if (email) {
          checkoutUrl.searchParams.set('email', email);
        }

        window.location.href = checkoutUrl.toString();
        return;
      }

      // Redirect generico com parametros (se tiver action)
      const action = form.getAttribute('action');
      if (action) {
        const redirectUrl = new URL(action, window.location.origin);
        new URLSearchParams(window.location.search).forEach((value, key) => {
          redirectUrl.searchParams.set(key, value);
        });
        if (nome) redirectUrl.searchParams.set('nome', nome);
        if (email) redirectUrl.searchParams.set('email', email);
        window.location.href = redirectUrl.toString();
        return;
      }

      // Fallback: mostrar mensagem (quando nao tem action)
      showFeedback(feedback, 'success', 'Mensagem enviada com sucesso!');

      // Fechar modal apos sucesso (se estiver em um)
      const modal = form.closest('.modal-overlay');
      if (modal) {
        setTimeout(() => closeModal(modal), 2000);
      }

      form.reset();
      if (phone && phone._iti) phone._iti.setNumber('');
    } else {
      throw new Error('Erro');
    }
  } catch {
    showFeedback(feedback, 'error', 'Erro ao enviar. Tente novamente.');
  } finally {
    btn.disabled = false;
    btn.textContent = originalText;
  }
}

/* ==========================================
   MODAIS
   ========================================== */

function initModals() {
  const modalBtns = document.querySelectorAll('[data-modal]');
  console.log('Botões de modal encontrados:', modalBtns.length);

  modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('Botão de modal clicado');
      const modalId = btn.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      console.log('Modal com ID', modalId, 'encontrado?', !!modal);
      if (modal) {
        modal.classList.add('active');
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

function showFeedback(el, type, msg) {
  if (!el) return;
  el.className = 'form-feedback ' + type;
  el.textContent = msg;
  setTimeout(() => {
    el.className = 'form-feedback';
    el.textContent = '';
  }, 5000);
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
   UTILS
   ========================================== */

function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}
