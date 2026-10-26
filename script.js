(() => {
  'use strict';
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const menu = document.querySelector('.menu-button');
  const navLinks = document.getElementById('nav-links');
  function closeMenu() {
    if (!menu || !navLinks) return;
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
    navLinks.classList.remove('is-open');
  }
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    navLinks?.classList.toggle('is-open', open);
  });
  navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => {
    if (menu && navLinks && !menu.contains(event.target) && !navLinks.contains(event.target)) closeMenu();
  });

  const progress = document.getElementById('scroll-progress');
  function updateProgress() {
    if (!progress) return;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${total > 0 ? Math.min(100, window.scrollY / total * 100) : 0}%`;
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  const reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.09, rootMargin: '0px 0px 25px 0px' });
    reveals.forEach(el => observer.observe(el));
  } else reveals.forEach(el => el.classList.add('is-visible'));

  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const sectionLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sectionLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });
    sections.forEach(el => sectionObserver.observe(el));
  }

  const copy = document.getElementById('copy-email');
  const copyLabel = document.getElementById('copy-label');
  const feedback = document.getElementById('copy-feedback');
  copy?.addEventListener('click', async () => {
    const email = copy.dataset.email;
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      if (copyLabel) copyLabel.textContent = 'Email copied ✓';
      if (feedback) feedback.textContent = 'Email address copied to clipboard.';
    } catch (_) {
      if (copyLabel) copyLabel.textContent = 'Use email link instead';
      if (feedback) feedback.textContent = 'Clipboard access unavailable. Use the Send an email link.';
    }
  });
})();
