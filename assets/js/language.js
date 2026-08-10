/* ═══════════════════════════════════════════════════════════════
   MANSAR Medical — Language Switcher (i18n)
   Handles dynamic EN/RU switching, localStorage, meta updates
   ═══════════════════════════════════════════════════════════════ */

/**
 * Resolve a dot-notated key against the translations object.
 * e.g. resolveKey("hero.title", translations.en) → value
 */
function resolveKey(key, obj) {
    return key.split('.').reduce((acc, part) => acc && acc[part], obj);
}

/**
 * Apply translations to all elements with data-i18n or data-i18n-html attributes.
 * - data-i18n       → sets textContent
 * - data-i18n-html  → sets innerHTML (for content containing <br>, <em>, etc.)
 * - data-i18n-placeholder → sets placeholder attribute
 */
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    /* Text content */
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = resolveKey(key, t);
        if (value !== undefined) {
            el.textContent = value;
        }
    });

    /* HTML content (for elements that include <br>, <em>, etc.) */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const value = resolveKey(key, t);
        if (value !== undefined) {
            el.innerHTML = value;
        }
    });

    /* Placeholders */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const value = resolveKey(key, t);
        if (value !== undefined) {
            el.setAttribute('placeholder', value);
        }
    });

    /* Dynamic service feature lists */
    applyServiceFeatures(lang);
}

/**
 * Rebuild service feature lists from translation data.
 * Each service card has a data-service attribute to identify the service.
 */
function applyServiceFeatures(lang) {
    const t = translations[lang];
    if (!t) return;

    const serviceMap = {
        'pharmaceutical': t.services.pharmaceutical.items,
        'medicalDevice': t.services.medicalDevice.items,
        'regulatory': t.services.regulatory.items,
        'pharmacovigilance': t.services.pharmacovigilance.items,
        'inspection': t.services.inspection ? t.services.inspection.items : []
    };

    Object.keys(serviceMap).forEach(serviceKey => {
        const list = document.querySelector(`[data-service="${serviceKey}"]`);
        if (!list) return;
        const items = serviceMap[serviceKey];
        list.innerHTML = items.map(item =>
            `<li><span class="material-symbols-outlined">check_circle</span> ${item}</li>`
        ).join('');
    });
}

/**
 * Update meta tags (title, description) based on language.
 */
function updateMeta(lang) {
    const t = translations[lang];
    if (!t || !t.meta) return;

    document.title = t.meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t.meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t.meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t.meta.description);
}

/**
 * Update active state of language switcher buttons (both desktop and mobile).
 */
function updateLangButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

/**
 * Set the website language — main public function.
 */
function setLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language "${lang}" not found in translations.`);
        return;
    }

    /* Update HTML lang attribute */
    document.documentElement.lang = lang;

    /* Apply all translations */
    applyTranslations(lang);

    /* Update meta tags */
    updateMeta(lang);

    /* Update switcher UI */
    updateLangButtons(lang);

    /* Persist to localStorage */
    localStorage.setItem('mansar-lang', lang);
}

/**
 * Get the stored language or default to 'en'.
 */
function getSavedLanguage() {
    return localStorage.getItem('mansar-lang') || 'en';
}

/**
 * Initialize language system — called from main.js.
 */
function initLanguage() {
    const savedLang = getSavedLanguage();
    setLanguage(savedLang);

    /* Desktop language switcher buttons */
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}
