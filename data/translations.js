/* ═══════════════════════════════════════════════════════════════
   MANSAR Medical — Translations (EN / RU)
   Structured for easy addition of future languages (e.g., kk)
   ═══════════════════════════════════════════════════════════════ */

const translations = {

    /* ───────────────────────────────────────────────────────────
       ENGLISH
       ─────────────────────────────────────────────────────────── */
    en: {
        /* Meta */
        meta: {
            title: "MANSAR Medical | Regulatory Affairs & Market Access",
            description: "MANSAR Medical provides regulatory affairs, product registration, compliance, and market access support for pharmaceutical and medical device companies in Kazakhstan and EAEU markets."
        },

        /* Navigation */
        navigation: {
            home: "Home",
            about: "About",
            services: "Services",
            markets: "Markets",
            process: "Process",
            contact: "Contact",
            getInTouch: "Get in Touch"
        },

        /* Hero */
        hero: {
            badge: "Kazakhstan & EAEU Certified Experts",
            title: 'Regulatory Affairs<br>Solutions for <em>Pharma</em><br>and Medical Devices',
            subtitle: "Professional regulatory support for product registration, compliance, and market access across Kazakhstan and the broader EAEU. We navigate complexity so your products reach patients safely.",
            cta: "Request a Consultation",
            ctaSecondary: "Our Services",
            stat1Num: "100%",
            stat1Label: "Submission Accuracy",
            stat2Num: "5+",
            stat2Label: "EAEU Markets",
            stat3Num: "GxP",
            stat3Label: "Compliant Process",
            floatNum: "100%",
            floatLabel: "Submission Accuracy",
            floatCompliance: "Compliance",
            floatCertified: "ISO<br>Certified"
        },

        /* Trust Bar */
        trustBar: {
            item1: "ISO Certified",
            item2: "EAEU Authorized",
            item3: "GxP Compliant",
            item4: "Kazakhstan Registered",
            item5: "PV Support",
            item6: "Expert Consultants"
        },

        /* About */
        about: {
            label: "Our Expertise",
            title: "Navigating Regulatory Complexity with Authority",
            subtitle: "MANSAR Medical provides end-to-end regulatory affairs solutions for pharmaceutical and medical device companies seeking access to Kazakhstan and EAEU markets. We translate complex institutional guidelines into clear, actionable compliance pathways.",
            card1Title: "Full Lifecycle Support",
            card1Desc: "From pre-submission strategy through post-market surveillance, we cover every regulatory touchpoint.",
            card2Title: "Local + EAEU Expertise",
            card2Desc: "Deep knowledge of Kazakhstan national regulations and unified supranational EAEU protocols.",
            card3Title: "Efficient Management",
            card3Desc: "Streamlined project execution designed to accelerate regulatory approvals and minimize delays.",
            card4Title: "Legal Representation",
            card4Desc: "Serving as your authorized local representative and Marketing Authorization Holder (MAH)."
        },

        /* Services */
        services: {
            label: "Core Capabilities",
            title: "Our Service Offerings",
            subtitle: "Specialized regulatory capabilities designed to secure and maintain product compliance across all relevant jurisdictions.",

            pharmaceutical: {
                title: "Pharmaceutical Product Registration",
                description: "MANSAR Medical provides full-cycle regulatory support for pharmaceutical product registration.",
                items: [
                    "New product registration",
                    "EAEU registration procedures",
                    "National registration procedures",
                    "Registration recognition procedures",
                    "Registration dossier preparation and review",
                    "Preparation of responses to regulatory authority questions",
                    "Regulatory strategy development"
                ]
            },

            medicalDevice: {
                title: "Medical Device Registration",
                description: "Regulatory support for medical device manufacturers entering Kazakhstan and EAEU markets.",
                items: [
                    "Registration support",
                    "Regulatory documentation preparation",
                    "Regulatory pathway assessment",
                    "Communication with regulatory authorities",
                    "Compliance support"
                ]
            },

            regulatory: {
                title: "Regulatory Consulting & Lifecycle Management",
                description: "Support throughout the entire product lifecycle.",
                items: [
                    "Post-registration variations",
                    "Registration dossier updates",
                    "Renewal procedures",
                    "Regulatory gap analysis",
                    "Regulatory documentation review",
                    "Regulatory strategy support"
                ]
            },

            pharmacovigilance: {
                title: "Pharmacovigilance Support",
                description: "Robust safety monitoring and reporting systems designed to fulfill stringent local and regional pharmacovigilance obligations efficiently.",
                items: [
                    "Pharmacovigilance system support",
                    "Regulatory PV documentation",
                    "Qualified Person for Pharmacovigilance support",
                    "Compliance consulting"
                ]
            }
        },

        /* Visual Showcase */
        showcase: {
            label: "Our Environment",
            title: "Precision at Every Step",
            subtitle: "World-class facilities, expert consultants, and cutting-edge tools dedicated to your regulatory success.",
            tile1Label: "Laboratory",
            tile1Title: "World-Class Pharma Research",
            tile2Label: "Consulting",
            tile2Title: "Expert Advisory Team",
            tile3Label: "Market Access",
            tile3Title: "EAEU Regional Reach",
            tile4Label: "Medical Devices",
            tile4Title: "Device Registration Expertise"
        },

        /* Process */
        process: {
            label: "How We Work",
            title: "Our Regulatory Process",
            subtitle: "A structured, transparent four-phase methodology that minimizes risk and accelerates time-to-market approval.",
            step1Title: "Gap Analysis",
            step1Desc: "Comprehensive review of your existing dossier against current Kazakhstan and EAEU requirements.",
            step2Title: "Strategy & Planning",
            step2Desc: "A customized regulatory roadmap with timelines, risk mitigation, and resource allocation.",
            step3Title: "Dossier & Submission",
            step3Desc: "Expert preparation and submission of complete registration packages to the relevant authorities.",
            step4Title: "Approval & Maintenance",
            step4Desc: "Active follow-up, query management, and ongoing post-approval lifecycle maintenance."
        },

        /* Market */
        market: {
            label: "Geographic Reach",
            title: "Kazakhstan & EAEU Market Access",
            subtitle: "We specialize in navigating the unified regulatory frameworks spanning the Eurasian Economic Union member states and Kazakhstan's national requirements.",
            point1Title: "Kazakhstan (KZ)",
            point1Desc: "Full-scope national regulatory representation with direct authority relationships and MAH services.",
            point2Title: "Russian Federation (RU)",
            point2Desc: "Navigation of the Russian regulatory system for simultaneous EAEU market access strategy.",
            point3Title: "EAEU Unified Procedures",
            point3Desc: "Expertise in the supranational procedures for registration valid across all five EAEU member states.",
            badgeNum: "5",
            badgeLabel: "EAEU Member States"
        },

        /* CTA */
        cta: {
            title: "Ready to Enter Kazakhstan & EAEU Markets?",
            subtitle: "Let our regulatory experts guide your product through every step of the registration and compliance process. Reach out today for a no-obligation consultation.",
            btnPrimary: "Contact Us Today",
            btnSecondary: "View All Services"
        },

        /* Contact */
        contact: {
            label: "Get in Touch",
            title: "Request a Consultation",
            subtitle: "Have questions about regulatory requirements? Our team is ready to assist you with product registration, compliance, and market access in Kazakhstan and EAEU.",
            detailEmailLabel: "Email",
            detailPhoneLabel: "Phone",
            detailLocationLabel: "Office",
            detailLocationValue: "Almaty, Kazakhstan",
            formTitle: "Send Us a Message",
            formSubtitle: "Fill out the form below and we will get back to you shortly.",
            labelName: "Full Name",
            labelCompany: "Company",
            labelEmail: "Email Address",
            labelPhone: "Phone Number",
            labelMessage: "Message",
            placeholderName: "Your full name",
            placeholderCompany: "Your company name",
            placeholderEmail: "you@company.com",
            placeholderPhone: "+7 (___) ___-__-__",
            placeholderMessage: "Tell us about your project or regulatory needs...",
            submit: "Request a Consultation",
            successTitle: "Message Sent!",
            successMessage: "Thank you for reaching out. Our team will review your inquiry and get back to you within 1–2 business days.",
            errorRequired: "This field is required",
            errorEmail: "Please enter a valid email address"
        },

        /* Footer */
        footer: {
            description: "Expert regulatory consulting for Kazakhstan and the EAEU. Navigating complex pharmaceutical and medical device compliance with precision and authority.",
            colCompany: "Company",
            linkAbout: "About Us",
            linkServices: "Our Services",
            linkProcess: "Process",
            linkMarkets: "Markets",
            colResources: "Resources",
            linkRegUpdates: "Regulatory Updates",
            linkEAEUGuidelines: "EAEU Guidelines",
            linkGxP: "GxP Compliance",
            linkPV: "PV Reports",
            colContact: "Contact Details",
            copyright: "© 2024 MANSAR Medical. All rights reserved.",
            privacy: "Privacy Policy",
            terms: "Terms of Service"
        }
    },

    /* ───────────────────────────────────────────────────────────
       RUSSIAN
       ─────────────────────────────────────────────────────────── */
    ru: {
        /* Meta */
        meta: {
            title: "MANSAR Medical | Regulatory Affairs и выход на рынок",
            description: "MANSAR Medical предоставляет услуги в области Regulatory Affairs, регистрации продукции, обеспечения соответствия требованиям и выхода на рынки Казахстана и ЕАЭС."
        },

        /* Navigation */
        navigation: {
            home: "Главная",
            about: "О нас",
            services: "Услуги",
            markets: "Рынки",
            process: "Процесс",
            contact: "Контакты",
            getInTouch: "Связаться"
        },

        /* Hero */
        hero: {
            badge: "Сертифицированные эксперты Казахстана и ЕАЭС",
            title: 'Регуляторные решения<br>для <em>фармацевтических</em><br>компаний и медицинских изделий',
            subtitle: "Профессиональное регуляторное сопровождение регистрации продукции, обеспечения соответствия требованиям и выхода на рынки Казахстана и ЕАЭС.",
            cta: "Получить консультацию",
            ctaSecondary: "Наши услуги",
            stat1Num: "100%",
            stat1Label: "Точность подачи",
            stat2Num: "5+",
            stat2Label: "Рынки ЕАЭС",
            stat3Num: "GxP",
            stat3Label: "Соответствие стандартам",
            floatNum: "100%",
            floatLabel: "Точность подачи",
            floatCompliance: "Соответствие",
            floatCertified: "ISO<br>Сертификат"
        },

        /* Trust Bar */
        trustBar: {
            item1: "Сертификация ISO",
            item2: "Авторизация ЕАЭС",
            item3: "Соответствие GxP",
            item4: "Регистрация в Казахстане",
            item5: "Фармаконадзор",
            item6: "Эксперты-консультанты"
        },

        /* About */
        about: {
            label: "Наша экспертиза",
            title: "Навигация в регуляторной сложности с авторитетом",
            subtitle: "MANSAR Medical предоставляет экспертную поддержку в области Regulatory Affairs и стратегическое сопровождение фармацевтических компаний и производителей медицинских изделий на протяжении всего жизненного цикла продукции.",
            card1Title: "Полный жизненный цикл",
            card1Desc: "От стратегии подачи до пострегистрационного мониторинга — мы сопровождаем каждый регуляторный этап.",
            card2Title: "Локальная + ЕАЭС экспертиза",
            card2Desc: "Глубокое знание национальных регуляторных требований Казахстана и наднациональных протоколов ЕАЭС.",
            card3Title: "Эффективное управление",
            card3Desc: "Оптимизированное управление проектами для ускорения регуляторных согласований и минимизации задержек.",
            card4Title: "Юридическое представительство",
            card4Desc: "Выполнение функций авторизованного местного представителя и держателя регистрационного удостоверения (MAH)."
        },

        /* Services */
        services: {
            label: "Основные направления",
            title: "Наши услуги",
            subtitle: "Специализированные регуляторные компетенции для обеспечения и поддержания соответствия продукции во всех релевантных юрисдикциях.",

            pharmaceutical: {
                title: "Регистрация лекарственных препаратов",
                description: "MANSAR Medical оказывает комплексное регуляторное сопровождение регистрации лекарственных препаратов.",
                items: [
                    "Первичная регистрация лекарственных препаратов",
                    "Регистрация по процедурам ЕАЭС",
                    "Национальные процедуры регистрации",
                    "Процедуры признания регистрации",
                    "Подготовка и экспертиза регистрационного досье",
                    "Подготовка ответов на запросы регуляторных органов",
                    "Разработка регуляторной стратегии"
                ]
            },

            medicalDevice: {
                title: "Регистрация медицинских изделий",
                description: "Регуляторное сопровождение производителей медицинских изделий при выходе на рынки Казахстана и ЕАЭС.",
                items: [
                    "Поддержка регистрационных процедур",
                    "Подготовка регуляторной документации",
                    "Оценка регуляторного пути",
                    "Взаимодействие с регуляторными органами",
                    "Поддержка соответствия требованиям"
                ]
            },

            regulatory: {
                title: "Регуляторный консалтинг и сопровождение жизненного цикла",
                description: "Сопровождение на протяжении всего жизненного цикла продукции.",
                items: [
                    "Пострегистрационные изменения",
                    "Актуализация регистрационного досье",
                    "Продление регистрации",
                    "Анализ регуляторных пробелов",
                    "Экспертиза документации",
                    "Регуляторная стратегия"
                ]
            },

            pharmacovigilance: {
                title: "Фармаконадзор",
                description: "Надежные системы мониторинга безопасности и отчетности для выполнения строгих местных и региональных обязательств по фармаконадзору.",
                items: [
                    "Поддержка системы фармаконадзора",
                    "Подготовка регуляторной документации по фармаконадзору",
                    "Поддержка уполномоченного лица по фармаконадзору",
                    "Консультации по требованиям соответствия"
                ]
            }
        },

        /* Visual Showcase */
        showcase: {
            label: "Наша среда",
            title: "Точность на каждом этапе",
            subtitle: "Современные объекты, эксперты-консультанты и передовые инструменты для вашего регуляторного успеха.",
            tile1Label: "Лаборатория",
            tile1Title: "Фармацевтические исследования мирового уровня",
            tile2Label: "Консалтинг",
            tile2Title: "Экспертная консультативная команда",
            tile3Label: "Выход на рынок",
            tile3Title: "Региональный охват ЕАЭС",
            tile4Label: "Медицинские изделия",
            tile4Title: "Экспертиза регистрации изделий"
        },

        /* Process */
        process: {
            label: "Как мы работаем",
            title: "Наш регуляторный процесс",
            subtitle: "Структурированная, прозрачная четырехэтапная методология, минимизирующая риски и ускоряющая выход на рынок.",
            step1Title: "Анализ пробелов",
            step1Desc: "Комплексная проверка вашего существующего досье на соответствие текущим требованиям Казахстана и ЕАЭС.",
            step2Title: "Стратегия и планирование",
            step2Desc: "Индивидуальная регуляторная дорожная карта с графиками, снижением рисков и распределением ресурсов.",
            step3Title: "Досье и подача",
            step3Desc: "Экспертная подготовка и подача полных регистрационных пакетов в соответствующие органы.",
            step4Title: "Одобрение и поддержка",
            step4Desc: "Активное сопровождение, управление запросами и текущая пострегистрационная поддержка жизненного цикла."
        },

        /* Market */
        market: {
            label: "Географический охват",
            title: "Выход на рынки Казахстана и ЕАЭС",
            subtitle: "Мы специализируемся на навигации в единых регуляторных рамках Евразийского экономического союза и национальных требованиях Казахстана.",
            point1Title: "Казахстан (KZ)",
            point1Desc: "Полное национальное регуляторное представительство с прямыми связями с регуляторными органами и услугами MAH.",
            point2Title: "Российская Федерация (RU)",
            point2Desc: "Навигация в российской регуляторной системе для стратегии одновременного выхода на рынки ЕАЭС.",
            point3Title: "Единые процедуры ЕАЭС",
            point3Desc: "Экспертиза наднациональных процедур регистрации, действующих во всех пяти государствах-членах ЕАЭС.",
            badgeNum: "5",
            badgeLabel: "Государств-членов ЕАЭС"
        },

        /* CTA */
        cta: {
            title: "Готовы выйти на рынки Казахстана и ЕАЭС?",
            subtitle: "Позвольте нашим регуляторным экспертам провести ваш продукт через каждый этап регистрации и обеспечения соответствия. Свяжитесь с нами сегодня для бесплатной консультации.",
            btnPrimary: "Связаться с нами",
            btnSecondary: "Все услуги"
        },

        /* Contact */
        contact: {
            label: "Связаться с нами",
            title: "Получить консультацию",
            subtitle: "Есть вопросы о регуляторных требованиях? Наша команда готова помочь вам с регистрацией продукции, обеспечением соответствия и выходом на рынки Казахстана и ЕАЭС.",
            detailEmailLabel: "Электронная почта",
            detailPhoneLabel: "Телефон",
            detailLocationLabel: "Офис",
            detailLocationValue: "Алматы, Казахстан",
            formTitle: "Отправить сообщение",
            formSubtitle: "Заполните форму ниже, и мы свяжемся с вами в ближайшее время.",
            labelName: "Полное имя",
            labelCompany: "Компания",
            labelEmail: "Электронная почта",
            labelPhone: "Телефон",
            labelMessage: "Сообщение",
            placeholderName: "Ваше полное имя",
            placeholderCompany: "Название вашей компании",
            placeholderEmail: "you@company.com",
            placeholderPhone: "+7 (___) ___-__-__",
            placeholderMessage: "Расскажите о вашем проекте или регуляторных потребностях...",
            submit: "Получить консультацию",
            successTitle: "Сообщение отправлено!",
            successMessage: "Спасибо за обращение. Наша команда рассмотрит ваш запрос и свяжется с вами в течение 1–2 рабочих дней.",
            errorRequired: "Это поле обязательно для заполнения",
            errorEmail: "Пожалуйста, введите корректный адрес электронной почты"
        },

        /* Footer */
        footer: {
            description: "Экспертный регуляторный консалтинг для Казахстана и ЕАЭС. Навигация в сложном фармацевтическом регулировании и требованиях к медицинским изделиям с точностью и авторитетом.",
            colCompany: "Компания",
            linkAbout: "О нас",
            linkServices: "Наши услуги",
            linkProcess: "Процесс",
            linkMarkets: "Рынки",
            colResources: "Ресурсы",
            linkRegUpdates: "Регуляторные обновления",
            linkEAEUGuidelines: "Руководства ЕАЭС",
            linkGxP: "Соответствие GxP",
            linkPV: "Отчеты по фармаконадзору",
            colContact: "Контактные данные",
            copyright: "© 2024 MANSAR Medical. Все права защищены.",
            privacy: "Политика конфиденциальности",
            terms: "Условия использования"
        }
    }

    /* ───────────────────────────────────────────────────────────
       KAZAKH (Future — add kk: { ... } here)
       ─────────────────────────────────────────────────────────── */
};
