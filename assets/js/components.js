/* ═══════════════════════════════════════════════════════════════
   MANSAR Medical — Components
   Contact form validation and reusable component logic
   ═══════════════════════════════════════════════════════════════ */

/**
 * Initialize the contact/consultation form with client-side validation.
 */
function initContactForm() {
    const form = document.getElementById('consultation-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        /* Clear previous errors */
        form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
        form.querySelectorAll('.error-message').forEach(el => el.classList.remove('visible'));

        let isValid = true;
        const lang = document.documentElement.lang || 'en';
        const t = translations[lang] || translations.en;

        /* Validate required fields */
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
                const errorEl = field.parentElement.querySelector('.error-message');
                if (errorEl) {
                    errorEl.textContent = t.contact.errorRequired;
                    errorEl.classList.add('visible');
                }
            }
        });

        /* Validate email format */
        const emailField = form.querySelector('#form-email');
        if (emailField && emailField.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailField.value.trim())) {
                isValid = false;
                emailField.classList.add('error');
                const errorEl = emailField.parentElement.querySelector('.error-message');
                if (errorEl) {
                    errorEl.textContent = t.contact.errorEmail;
                    errorEl.classList.add('visible');
                }
            }
        }

        if (!isValid) return;

        /* Show success state (frontend-only, no backend) */
        const formContent = form.querySelector('.form-content');
        const formSuccess = form.querySelector('.form-success');

        if (formContent && formSuccess) {
            formContent.style.display = 'none';
            formSuccess.classList.add('visible');
        }

        /* Reset form fields */
        form.reset();
    });

    /* Clear field error on input */
    form.querySelectorAll('input, textarea').forEach(field => {
        field.addEventListener('input', () => {
            field.classList.remove('error');
            const errorEl = field.parentElement.querySelector('.error-message');
            if (errorEl) errorEl.classList.remove('visible');
        });
    });
}

/**
 * Initialize FAQ accordion interactivity.
 */
function initFaq() {
    const faqHeaders = document.querySelectorAll('.faq-header');
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const parent = header.closest('.faq-item');
            if (parent) {
                const isOpen = parent.classList.contains('active');
                /* Optional: Close other open FAQ items */
                document.querySelectorAll('.faq-item.active').forEach(item => item.classList.remove('active'));
                if (!isOpen) {
                    parent.classList.add('active');
                }
            }
        });
    });
}

/**
 * Initialize all reusable components.
 */
function initComponents() {
    initContactForm();
    initFaq();
}
