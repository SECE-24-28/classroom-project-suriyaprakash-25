document.addEventListener('DOMContentLoaded', () => {
  highlightActiveNav();
  initPlanSelection();
  initFormDemos();
  initPlanButtons();
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
  const buttons = document.querySelectorAll('.plan-btn');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const amount = btn.dataset.amount;
      const label = btn.dataset.label || 'plan';
      const target = new URL('recharge.html', window.location.href);
      if (amount) target.searchParams.set('amount', amount);
      target.searchParams.set('plan', label);
      window.location.href = target.toString();
    });
  });
}
