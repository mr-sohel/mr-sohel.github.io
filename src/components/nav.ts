let navLinks: NodeListOf<Element>;
let mobileLinks: NodeListOf<Element>;
let menuBtn: HTMLElement | null;
let menu: HTMLElement | null;

const handleThemeToggle = () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#0c0a09' : '#fafaf9');
};

const handleScroll = () => {
  const nav = document.querySelector('.nav');
  const navActions = document.querySelector('.nav-actions');
  let lastScrollY = window.scrollY;
  let ticking = false;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        nav?.classList.toggle('scrolled', currentScrollY > 20);

        if (navActions) {
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navActions.classList.add('cv-hidden');
          } else if (currentScrollY < lastScrollY) {
            navActions.classList.remove('cv-hidden');
          }
        }
        lastScrollY = currentScrollY;
        ticking = false;
      });
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
    }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });

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
  menuBtn.setAttribute('aria-expanded', 'true');
  menuBtn.classList.add('menu-open');
  document.body.style.overflow = 'hidden';
};

export const closeMenu = () => {
  if (!menu) menu = document.getElementById('mobile-menu');
  if (!menuBtn) menuBtn = document.getElementById('mobile-menu-btn');

  if (!menu || !menuBtn) return;
  menu.setAttribute('aria-hidden', 'true');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.classList.remove('menu-open');
  document.body.style.overflow = '';
};
