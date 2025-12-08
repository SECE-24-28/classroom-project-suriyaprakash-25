// MockAPI clones expose a base like https://<id>.mockapi.io; adjust resource path if needed (e.g., /api/v1/plans)
const PLAN_API_URL = 'https://6936a4ecf8dc350aff31a23c.mockapi.io/api/plans/airtelplan';

const FALLBACK_PLANS = [
  { name: 'Smart Saver', price: 299, validity: '28 days', data: '1.5GB/day', type: 'prepaid' },
  { name: 'Elite Streaming', price: 499, validity: '56 days', data: '2.5GB/day', type: 'prepaid', tag: 'Popular' },
  { name: 'Marathon Max', price: 799, validity: '84 days', data: '3GB/day', type: 'prepaid' },
  { name: 'Platinum Binge', price: 999, validity: '84 days', data: '3.5GB/day + OTT', type: 'prepaid' },
  { name: 'Voice Lite', price: 149, validity: '28 days', data: 'Unlimited calls + 200MB', type: 'prepaid' },
  { name: '365 Prime', price: 1999, validity: '365 days', data: '2GB/day + OTT', type: 'prepaid', tag: 'Annual' },
];

document.addEventListener('DOMContentLoaded', () => {
  highlightActiveNav();
  initPlanSelection();
  initFormDemos();
  initPlanButtons();
  loadPlansFromAPI();
});

function highlightActiveNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(link => {
    const target = link.getAttribute('href');
    if (target && target.includes(path)) link.classList.add('active');
  });
}

function initPlanSelection() {
  const plans = document.querySelectorAll('.plan-card');
  if (!plans.length) return;

  plans.forEach(plan => {
    plan.addEventListener('click', () => {
      plans.forEach(p => p.classList.remove('active'));
      plan.classList.add('active');
      const amount = plan.dataset.amount;
      const amountInput = document.querySelector('#amount');
      if (amount && amountInput) amountInput.value = amount;
    });
  });

  // Prefill if query params exist
  const params = new URLSearchParams(window.location.search);
  const amountParam = params.get('amount');
  if (amountParam) {
    const amountInput = document.querySelector('#amount');
    if (amountInput) amountInput.value = amountParam;
    plans.forEach(p => {
      if (p.dataset.amount === amountParam) p.classList.add('active');
    });
  }
}

function initFormDemos() {
  document.querySelectorAll('form[data-demo]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const message = form.dataset.success || 'Action completed';
      if (btn) {
        const original = btn.textContent;
        btn.textContent = 'Processing...';
        btn.disabled = true;
        setTimeout(() => {
          alert(message);
          btn.textContent = original;
          btn.disabled = false;
        }, 500);
      } else {
        alert(message);
      }
    });
  });
}

function initPlanButtons() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.plan-btn');
    if (!btn) return;
    const amount = btn.dataset.amount;
    const label = btn.dataset.label || 'plan';
    const target = new URL('recharge.html', window.location.href);
    if (amount) target.searchParams.set('amount', amount);
    target.searchParams.set('plan', label);
    window.location.href = target.toString();
  });
}

async function loadPlansFromAPI() {
  const grid = document.querySelector('[data-plan-grid]');
  if (!grid) return;

  const render = plans => {
    grid.innerHTML = '';
    if (!plans.length) {
      const empty = document.createElement('div');
      empty.className = 'plan-error';
      empty.textContent = 'No plans available right now.';
      grid.appendChild(empty);
      return;
    }

    plans.forEach(plan => {
      const card = document.createElement('article');
      card.className = 'plan-tile';
      card.dataset.amount = plan.price;
      const tag = plan.tag ? `<div class="pill" style="background:#fff0f3; color: var(--accent);">${plan.tag}</div>` : '<div class="pill">Plan</div>';
      card.innerHTML = `
        ${tag}
        <h3>${plan.name || 'Plan'}</h3>
        <p class="subtle">${plan.validity || ''} · ${plan.data || ''}</p>
        <div class="plan-meta">
          <span class="plan-chip">${plan.type || 'prepaid'}</span>
        </div>
        <div class="price">₹${plan.price}</div>
        <button class="btn plan-btn" data-amount="${plan.price}" data-label="${plan.name || 'Plan'}">Recharge</button>
      `;
      grid.appendChild(card);
    });
  };

  try {
    const res = await fetch(PLAN_API_URL);
    if (!res.ok) throw new Error('Failed to load plans');
    const data = await res.json();
    const normalized = (Array.isArray(data) ? data : []).map(p => ({
      name: p.name || p.planName,
      price: Number(p.price) || Number(p.amount) || 0,
      validity: p.validity || p.duration,
      data: p.dataLimit || p.data || p.benefits,
      type: p.type || p.planType || 'prepaid',
      tag: p.tag,
    })).filter(p => p.price);
    render(normalized.length ? normalized : FALLBACK_PLANS);
  } catch (err) {
    render(FALLBACK_PLANS);
    const error = document.createElement('div');
    error.className = 'plan-error';
    error.textContent = 'Using fallback plans (API unavailable). Check PLAN_API_URL or CORS.';
    grid.prepend(error);
    console.error('Plan API failed', err);
  }
}
