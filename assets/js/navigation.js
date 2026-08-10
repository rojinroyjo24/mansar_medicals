/* ═══════════════════════════════════════════════════════════════
   MANSAR Medical — Navigation
   Sticky header, mobile menu, active nav highlighting
   ═══════════════════════════════════════════════════════════════ */

/**
 * Initialize the sticky header scroll effect.
 */
function initStickyHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
}

/**
 * Initialize the mobile hamburger menu.
 */
function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (!toggle || !mobileNav || !overlay) return;

    function openMenu() {
        toggle.classList.add('active');
        mobileNav.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('menu-open');
        toggle.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
        toggle.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', () => {
        const isOpen = mobileNav.classList.contains('active');
        isOpen ? closeMenu() : openMenu();
    });

    /* Close on overlay click */
    overlay.addEventListener('click', closeMenu);

    /* Close on nav link click */
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    /* Close on Escape key */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMenu();
        }
    });
}

/**
 * Highlight the active navigation link based on scroll position.
 */
function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    if (sections.length === 0 || navLinks.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-76px 0px 0px 0px' /* Account for fixed header */
    });

    sections.forEach(section => observer.observe(section));
}

/**
 * Initialize mobile dropdown menu toggle.
 */
function initMobileDropdown() {
    const dropdownBtns = document.querySelectorAll('.mobile-dropdown-btn');
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const parent = btn.closest('.mobile-dropdown');
            if (parent) {
                parent.classList.toggle('open');
            }
        });
    });
}

/**
 * Initialize all navigation functionality.
 */
function initNavigation() {
    initStickyHeader();
    initMobileMenu();
    initMobileDropdown();
    initActiveNavHighlight();
}
