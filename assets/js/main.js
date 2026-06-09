// Navigation active state
(function () {
  const links = document.querySelectorAll('.nav-links a');
  const path  = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === path) link.classList.add('active');
  });

  // Mobile toggle
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.querySelector('.nav-links');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', menu.classList.contains('open'));
    });
  }
})();
