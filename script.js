/**
 * Metodo Zero v20
 */

const SUPABASE_URL = 'https://woebteyuqzndvchruxhw.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvZWJ0ZXl1cXpuZHZjaHJ1eGh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3OTAyMDYsImV4cCI6MjA4NzM2NjIwNn0.N2KgxsYE-NEnM6dz9cjGRKY1WVXoLBW1qpoNTo0oCcs';

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
    // 1. Obter dados do formulário
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // 2. Enviar para Supabase
    const supabaseResponse = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
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
        utm_term: data.utm_term || ''
      })
    });

    if (!supabaseResponse.ok) {
      throw new Error('Falha ao salvar lead no Supabase');
    }

    // 3. Rastreamento e Conversão
    if (typeof fbq === 'function') {
      fbq('track', 'Lead');
    }

    if (typeof dataLayer !== 'undefined') {
      dataLayer.push({
        event: 'generate_lead',
        form_name: form.getAttribute('name') || 'contato',
        method: 'supabase'
      });
    }

    // 4. Fluxo de Redirecionamento
    if (form.getAttribute('name') === 'form-producao-v2') {
      const checkoutUrl = new URL('https://pay.hotmart.com/L85860528K');

      // Repassa todos os parametros da URL atual (utm_source, fbclid, etc)
      new URLSearchParams(window.location.search).forEach((value, key) => {
        checkoutUrl.searchParams.set(key, value);
      });

      // Passa nome e email como parametros extras (Hotmart aceita 'name' e 'email')
      if (data.nome) checkoutUrl.searchParams.set('name', data.nome);
      if (data.email) checkoutUrl.searchParams.set('email', data.email);

      window.location.href = checkoutUrl.toString();
      return;
    }

    // Feedback de sucesso para outros formulários
    btn.textContent = 'Enviado!';
    showFeedback(feedback, 'success', 'Mensagem enviada com sucesso!');

    // Fechar modal apos sucesso (se estiver em um)
    const modal = form.closest('.modal-overlay');
    if (modal) {
      setTimeout(() => closeModal(modal), 2000);
    }

    form.reset();
    if (phone && phone._iti) phone._iti.setNumber('');

  } catch (error) {
    console.error('Erro:', error);
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
  modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
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
