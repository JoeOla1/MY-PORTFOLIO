const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
menuToggle?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.innerHTML = open ? 'Close <span>×</span>' : 'Menu <span>+</span>';
});
document.querySelectorAll('.mobile-nav a').forEach((link) => link.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.innerHTML = 'Menu <span>+</span>';
}));

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach((item) => observer.observe(item));

document.querySelector('#year').textContent = new Date().getFullYear();

const ticker = document.querySelector('.news-ticker');
const tickerTrack = document.querySelector('.ticker-track');
ticker?.addEventListener('mouseenter', () => { tickerTrack.style.animationPlayState = 'paused'; });
ticker?.addEventListener('mouseleave', () => { tickerTrack.style.animationPlayState = 'running'; });

const cards = [...document.querySelectorAll('.quote-card')];
const dots = [...document.querySelectorAll('.carousel-dots button')];
let activeQuote = 0;
const showQuote = (index) => {
  activeQuote = (index + cards.length) % cards.length;
  cards.forEach((card, i) => card.classList.toggle('active', i === activeQuote));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === activeQuote));
};
document.querySelector('.carousel-prev')?.addEventListener('click', () => showQuote(activeQuote - 1));
document.querySelector('.carousel-next')?.addEventListener('click', () => showQuote(activeQuote + 1));
dots.forEach((dot, i) => dot.addEventListener('click', () => showQuote(i)));

const form = document.querySelector('.contact-form');
const formStatus = document.querySelector('.form-status');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Thanks — your message is ready to be connected to a real inbox.';
  form.reset();
  window.setTimeout(() => { formStatus.textContent = ''; }, 5000);
});
