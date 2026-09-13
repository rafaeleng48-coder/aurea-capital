const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const range = document.querySelector('#investmentRange');
const investmentValue = document.querySelector('#investmentValue');
const projectionValue = document.querySelector('#projectionValue');
const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

range?.addEventListener('input', () => {
  const initial = Number(range.value);
  const projected = initial * Math.pow(1.128, 5);
  investmentValue.textContent = currency.format(initial);
  projectionValue.textContent = currency.format(projected);
});