let navLinks: NodeListOf<Element>;
let mobileLinks: NodeListOf<Element>;
let menuBtn: HTMLElement | null;
let menu: HTMLElement | null;

const handleThemeToggle = () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
};

const handleScroll = () => {
  const nav = document.querySelector('.nav');
  let ticking = false;

  const update = () => {
    nav?.classList.toggle('scrolled', window.scrollY > 20);
    ticking = false;
  };

  update();

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
};

export const initNav = () => {
  navLinks = document.querySelectorAll('.nav-link');
  mobileLinks = document.querySelectorAll('.mobile-link');
  menuBtn = document.getElementById('mobile-menu-btn');
  menu = document.getElementById('mobile-menu');

  const themeToggle = document.getElementById('theme-toggle');
  themeToggle?.addEventListener('click', handleThemeToggle);

  handleScroll();

  const sections = document.querySelectorAll('section[id]');
  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(s => sectionObserver.observe(s));
  }

  const backdrop = menu?.querySelector('.mobile-menu-backdrop');
  const closeBtn = document.getElementById('mobile-close-btn');

  menuBtn?.addEventListener('click', () => {
    menu?.getAttribute('aria-hidden') === 'false' ? closeMenu() : openMenu();
  });

  closeBtn?.addEventListener('click', closeMenu);
  backdrop?.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu?.getAttribute('aria-hidden') === 'false') closeMenu();
  });
};

export const updateActiveSection = (id: string) => {
  if (!navLinks?.length) navLinks = document.querySelectorAll('.nav-link');
  if (!mobileLinks?.length) mobileLinks = document.querySelectorAll('.mobile-link');

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
  mobileLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-section') === id);
  });
};

export const openMenu = () => {
  if (!menu) menu = document.getElementById('mobile-menu');
  if (!menuBtn) menuBtn = document.getElementById('mobile-menu-btn');

  if (!menu || !menuBtn) return;
  menu.setAttribute('aria-hidden', 'false');
  menu.removeAttribute('inert');
  menuBtn.setAttribute('aria-expanded', 'true');
  menuBtn.classList.add('menu-open');
  document.body.style.overflow = 'hidden';
};

export const closeMenu = () => {
  if (!menu) menu = document.getElementById('mobile-menu');
  if (!menuBtn) menuBtn = document.getElementById('mobile-menu-btn');

  if (!menu || !menuBtn) return;
  menu.setAttribute('aria-hidden', 'true');
  menu.setAttribute('inert', '');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.classList.remove('menu-open');
  document.body.style.overflow = '';
};
