/**
 * @vitest-environment jsdom
 */
import { expect, test, describe, beforeEach } from 'vitest';
import { initNav, updateActiveSection, openMenu, closeMenu } from './nav.ts';

describe('Nav scripts', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    global.IntersectionObserver = class IntersectionObserver {
      constructor() {}
      observe() {}
      unobserve() {}
      disconnect() {}
    } as any;

    document.body.innerHTML = `
      <nav class="nav">
        <a href="#about" class="nav-link">About</a>
        <a href="#projects" class="nav-link">Projects</a>
      </nav>
      <div id="mobile-menu" aria-hidden="true">
        <div class="mobile-menu-backdrop"></div>
        <button id="mobile-close-btn"></button>
        <a href="#about" class="mobile-link" data-section="about">About</a>
        <a href="#projects" class="mobile-link" data-section="projects">Projects</a>
      </div>
      <button id="mobile-menu-btn" aria-expanded="false" class="mobile-menu-btn"></button>
      <button id="theme-toggle"></button>
      <section id="about"></section>
      <section id="projects"></section>
    `;
    // Reset body style
    document.body.style.overflow = '';
  });

  test('initNav sets up event listeners and IntersectionObserver', () => {
    initNav();
    
    // Test theme toggle event listener
    const themeToggle = document.getElementById('theme-toggle');
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeToggle) themeToggle.click();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    // Test menu btn click
    const menuBtn = document.getElementById('mobile-menu-btn');
    if (menuBtn) menuBtn.click();
    expect(document.getElementById('mobile-menu')?.getAttribute('aria-hidden')).toBe('false');
  });

  test('updateActiveSection toggles active class correctly', () => {
    initNav();
    updateActiveSection('projects');

    const projectsNavLink = document.querySelector('a.nav-link[href="#projects"]');
    const aboutNavLink = document.querySelector('a.nav-link[href="#about"]');

    const projectsMobileLink = document.querySelector('a.mobile-link[data-section="projects"]');
    const aboutMobileLink = document.querySelector('a.mobile-link[data-section="about"]');

    expect(projectsNavLink?.classList.contains('active')).toBe(true);
    expect(aboutNavLink?.classList.contains('active')).toBe(false);

    expect(projectsMobileLink?.classList.contains('active')).toBe(true);
    expect(aboutMobileLink?.classList.contains('active')).toBe(false);
  });

  test('openMenu sets attributes and body style', () => {
    initNav();
    openMenu();

    const menu = document.getElementById('mobile-menu');
    const menuBtn = document.getElementById('mobile-menu-btn');

    expect(menu?.getAttribute('aria-hidden')).toBe('false');
    expect(menuBtn?.getAttribute('aria-expanded')).toBe('true');
    expect(menuBtn?.classList.contains('menu-open')).toBe(true);
    expect(document.body.style.overflow).toBe('hidden');
  });

  test('closeMenu resets attributes and body style', () => {
    initNav();
    // Setup initial open state
    const menu = document.getElementById('mobile-menu');
    const menuBtn = document.getElementById('mobile-menu-btn');

    if (menu) menu.setAttribute('aria-hidden', 'false');
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', 'true');
      menuBtn.classList.add('menu-open');
    }
    document.body.style.overflow = 'hidden';

    // Act
    closeMenu();

    expect(menu?.getAttribute('aria-hidden')).toBe('true');
    expect(menuBtn?.getAttribute('aria-expanded')).toBe('false');
    expect(menuBtn?.classList.contains('menu-open')).toBe(false);
    expect(document.body.style.overflow).toBe('');
  });
});
