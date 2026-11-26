(() => {
  'use strict';

  const root = document.documentElement;

  // Footer year
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Theme toggle: follows the OS until the visitor chooses, then remembers it.
  const toggle = document.querySelector('.theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = () => root.dataset.theme || (prefersDark.matches ? 'dark' : 'light');
  function syncToggle() {
    if (!toggle) return;
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    toggle.setAttribute('aria-label', `Switch to ${next} theme`);
    toggle.setAttribute('title', `Switch to ${next} theme`);
  }
  toggle?.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (_) { /* private mode */ }
    syncToggle();
  });
  prefersDark.addEventListener?.('change', syncToggle);
  syncToggle();

  // Mobile menu
  const menu = document.querySelector('.menu-button');
  const navLinks = document.getElementById('nav-links');
  function setMenu(open) {
    if (!menu || !navLinks) return;
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    navLinks.classList.toggle('is-open', open);
  }
  menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menu.focus();
    }
  });
  document.addEventListener('click', event => {
    if (menu && navLinks && !menu.contains(event.target) && !navLinks.contains(event.target)) setMenu(false);
  });

  // Header border once the page scrolls, and highlight the nav link for the
  // section currently under the top third of the viewport.
  const header = document.querySelector('.site-header');
  const links = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  let ticking = false;
  function update() {
    ticking = false;
    header?.classList.toggle('is-scrolled', window.scrollY > 8);
    const line = window.innerHeight * 0.35;
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    let active = -1;
    sections.forEach((section, i) => {
      if (section && section.getBoundingClientRect().top <= line) active = i;
    });
    if (atBottom) active = sections.length - 1;
    links.forEach((link, i) => {
      if (i === active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }
  const onScroll = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();

  // Copy email
  const copy = document.querySelector('.copy-email');
  const label = copy?.querySelector('.copy-label');
  const status = document.getElementById('copy-status');
  copy?.addEventListener('click', async () => {
    const email = copy.dataset.email;
    if (!email || !label) return;
    try {
      await navigator.clipboard.writeText(email);
      label.textContent = 'Copied';
      if (status) status.textContent = 'Email address copied to clipboard.';
    } catch (_) {
      label.textContent = 'Copy failed';
      if (status) status.textContent = 'Could not copy. Use the email link instead.';
    }
    setTimeout(() => { label.textContent = 'Copy email'; }, 2200);
  });
})();
