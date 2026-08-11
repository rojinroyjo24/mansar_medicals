# MANSAR Medical — Website

Professional regulatory affairs and market access consulting website for MANSAR Medical.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- No frameworks or build tools required

## Project Structure

```
├── index.html                  # Main page
├── assets/
│   ├── css/
│   │   ├── style.css           # Variables, global styles, sections
│   │   ├── components.css      # Header, cards, buttons, forms, footer
│   │   └── responsive.css      # All media queries (1100px → 320px)
│   ├── js/
│   │   ├── main.js             # Entry point, scroll animations
│   │   ├── navigation.js       # Sticky header, mobile menu
│   │   ├── language.js         # EN/RU switching, localStorage
│   │   └── components.js       # Contact form validation
│   └── images/                 # All project images
├── data/
│   └── translations.js         # EN + RU translations
├── robots.txt
├── sitemap.xml
└── README.md
```

## Features

- **Bilingual** — Dynamic EN/RU language switching (no page reload)
- **Responsive** — Works from 1920px down to 320px
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigation
- **SEO Ready** — Meta tags, Open Graph, robots.txt, sitemap.xml
- **Static** — No server required; deploy anywhere

## Language Support

| Language   | Status        |
|------------|---------------|
| English    | ✅ Complete   |
| Russian    | ✅ Complete   |
| Kazakh     | 🔜 Planned    |

To add Kazakh, add a `kk: { ... }` object to `data/translations.js` and add a new button to the language switcher.

## Local Development

Simply open `index.html` in a browser, or use any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

## Deployment

Compatible with:
- GitHub Pages
- Netlify
- Vercel
- Any traditional web hosting

## Contact

- **Company:** Mansar Medical LLP / ТОО «Mansar Medical»
- **Email:** info@mansar-med.com
- **Phone:** +7 707 816 12 93
- **Address:** 261 Turgut Ozal Street, Almaty 050060, Republic of Kazakhstan

