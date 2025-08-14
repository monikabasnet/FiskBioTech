// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('nav ul');
if (toggle && menu) {
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
}

// Active link based on current page
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(a => {
  const href = a.getAttribute('href');
  if ((path === '' && href === 'index.html') || href === path) a.classList.add('active');
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
},{threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Smooth scroll for in-page anchors
document.addEventListener('click', (e)=>{
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  e.preventDefault();
  const id = a.getAttribute('href').slice(1);
  document.getElementById(id)?.scrollIntoView({behavior:'smooth', block:'start'});
});
