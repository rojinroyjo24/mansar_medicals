/* ═══════════════════════════════════════════════════════════════
   MANSAR Medical — Main Entry Point
   Page initialization, scroll animations, smooth scrolling
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── Initialize scroll reveal animations ─────────────────── */
    initScrollAnimations();

    /* ─── Initialize navigation (sticky header, mobile menu) ──── */
    initNavigation();

    /* ─── Initialize language system ──────────────────────────── */
    initLanguage();

    /* ─── Initialize reusable components (contact form, etc.) ── */
    initComponents();

    /* ─── Smooth scroll for anchor links ──────────────────────── */
    initSmoothScroll();

});

/**
 * Set up IntersectionObserver-based scroll reveal for .fade-up elements.
 */
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-up');
    if (fadeElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    fadeElements.forEach(el => observer.observe(el));
}

/**
 * Smooth scroll behavior for anchor links (accounts for fixed header).
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            const headerHeight = document.getElementById('site-header')?.offsetHeight || 76;

            window.scrollTo({
                top: target.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });
    });
}
