(function () {
    "use strict";

    const translations = {
        en: {
            "nav.skip": "Skip to content",
            "nav.language": "Switch language to Turkish",
            "nav.langMeta": "language",
            "nav.contact": "Contact",
            "hero.orientation": "software systems, products, and company-building since 2001",
            "hero.title": "systems first.<br>products by hand.",
            "hero.lede": "I design software systems and build apps, SaaS products, and games through <strong>Buhane Bilgi Teknolojileri</strong>, the company I founded.",
            "hero.products": "View selected work",
            "hero.company": "Open Buhane",
            "map.caption": "A spatial map of Ahmet Bütün’s work across architecture, products, AI models, Buhane, and users.",
            "map.coreKicker": "principal node",
            "map.coreMeta": "architect / founder / builder",
            "map.architecture": "Architecture",
            "map.products": "11 live products",
            "map.productsMeta": "apps, SaaS, games",
            "map.modelsMeta": "models integrated",
            "map.company": "Buhane IT",
            "map.companyMeta": "founded 2018",
            "map.usersMeta": "active users",
            "metrics.since": "building software since",
            "metrics.products": "live products",
            "metrics.models": "AI models integrated",
            "metrics.users": "active users",
            "about.title": "a builder’s dossier,<br>not a developer brochure.",
            "about.lede": "I am a Computer Engineer from Yıldız Technical University with a long-running focus on software architecture, product engineering, and independent product development.",
            "about.body": "My work spans enterprise systems, security tools such as <strong>Nova W-SPY</strong>, open-source frameworks such as <strong>Crexta</strong>, and current AI-driven products built under Buhane.",
            "products.title": "selected products,<br>set as an index.",
            "products.desc": "A focused view of products I build through Buhane. The company site remains the complete portfolio.",
            "products.full": "View full Buhane portfolio",
            "products.fullHref": "https://buhane.com.tr/products/",
            "products.view": "View product",
            "product.cosmic.type": "AI Platform",
            "product.cosmic.desc": "AI-powered technology news and content platform with curated insight on emerging digital trends.",
            "product.cosmic.tag1": "Technology News",
            "product.cosmic.tag2": "AI Insight",
            "product.cosmic.tag3": "Publishing",
            "product.vynix.type": "Creative AI",
            "product.vynix.desc": "A cross-platform app for AI-assisted text, image, audio, and video workflows.",
            "product.vynix.tag1": "Text",
            "product.vynix.tag2": "Image",
            "product.vynix.tag3": "Audio",
            "product.vynix.tag4": "Video",
            "product.moodjot.type": "Mood & Journaling",
            "product.moodjot.desc": "A focused capture flow for mood entries and journal notes, with optional photos and reminders.",
            "product.moodjot.tag1": "Mood Entries",
            "product.moodjot.tag2": "Journal Notes",
            "product.moodjot.tag3": "Photos",
            "product.moodjot.tag4": "Reminders",
            "product.u2m.type": "Web Utility",
            "product.u2m.desc": "Smart URL shortening with analytics, QR codes, link management, and an API.",
            "product.u2m.tag1": "URL Shortening",
            "product.u2m.tag2": "API Docs",
            "product.u2m.tag3": "Analytics",
            "product.hivedue.type": "Community SaaS",
            "product.hivedue.desc": "Community finance management for dues, payments, announcements, reports, and documents.",
            "product.hivedue.tag1": "Dues",
            "product.hivedue.tag2": "Payments",
            "product.hivedue.tag3": "Reports",
            "product.lastimo.type": "Elapsed-Time Reminder",
            "product.lastimo.desc": "Private tracker for remembering the last time something happened, without streaks or goals.",
            "product.lastimo.tag1": "Six Presets",
            "product.lastimo.tag2": "Time Since",
            "product.lastimo.tag3": "Log Now",
            "product.glowspin.type": "Arcade Game",
            "product.glowspin.desc": "Color-rhythm arcade game with color matching, 500 levels, and leaderboard play.",
            "product.glowspin.tag1": "Color Matching",
            "product.glowspin.tag2": "500 Levels",
            "product.glowspin.tag3": "Leaderboard",
            "product.swipeslip.type": "Mobile Game",
            "product.swipeslip.desc": "A hyper-casual tunnel runner with 500 levels, 8 difficulty tiers, and power-ups.",
            "product.swipeslip.tag1": "Tunnel Navigation",
            "product.swipeslip.tag2": "500 Levels",
            "product.swipeslip.tag3": "Power-ups",
            "product.gridzle.type": "Logic Puzzle",
            "product.gridzle.desc": "Counts-first logic puzzle with 250 hand-crafted levels across five difficulty tiers.",
            "product.gridzle.tag1": "Counts First",
            "product.gridzle.tag2": "250 Levels",
            "product.gridzle.tag3": "Offline",
            "product.astralpost.type": "AI Reflection",
            "product.astralpost.desc": "AI-powered cosmic journaling app for anonymous expression and poetic reflections.",
            "product.astralpost.tag1": "Journaling",
            "product.astralpost.tag2": "Reflection",
            "product.astralpost.tag3": "AI Writing",
            "product.rulr.type": "Fictional World",
            "product.rulr.desc": "Public web experience for exploring the fictional RULR Countries world, with country status, fictional rivalries, activity, and leaderboard surfaces.",
            "product.rulr.tag1": "Fictional Countries",
            "product.rulr.tag2": "Country Status",
            "product.rulr.tag3": "Leaderboard",
            "timeline.title": "the long arc matters.",
            "timeline.desc": "The work is not a recent pose. It has moved through education, enterprise engineering, security, open source, company-building, and current AI products.",
            "timeline.t1.title": "Yıldız Technical University",
            "timeline.t1.desc": "Computer Engineering degree and the technical foundation for a career in software architecture.",
            "timeline.t2.title": "Enterprise Software Engineering",
            "timeline.t2.desc": "Deep work in Java EE, Spring Framework, and microservices architecture for mission-critical systems.",
            "timeline.t3.title": "Security & Open Source",
            "timeline.t3.desc": "Created Nova W-SPY and Crexta, and led development on the Qualist Business Operations Platform.",
            "timeline.t4.title": "Founded Buhane IT",
            "timeline.t4.desc": "Launched Buhane Bilgi Teknolojileri as a software design, consulting, e-commerce, and AI services company.",
            "timeline.t5.title": "AI & Product Innovation",
            "timeline.t5.desc": "Continues to build products across creative tools, personal utilities, business software, and games through Buhane.",
            "timeline.nowYear": "2021-present",
            "technical.title": "technical index.",
            "technical.desc": "A compact view of the capabilities behind the product work.",
            "technical.row1.key": "Architecture",
            "technical.row1.val": "System design, domain modeling, product foundations",
            "technical.row2.key": "Frontend & Mobile",
            "technical.row2.val": "Web apps, cross-platform apps, product interfaces",
            "technical.row3.key": "AI & Data",
            "technical.row3.val": "Model integration, creative AI flows, analytics surfaces",
            "technical.row4.key": "Infrastructure",
            "technical.row4.val": "APIs, service boundaries, deployment surfaces",
            "company.desc": "The company behind the product work, software design, technology consulting, e-commerce, AI services, and digital marketing.",
            "company.cta": "Visit Buhane",
            "company.s1": "Software Design",
            "company.s2": "AI Services",
            "company.s3": "E-Commerce",
            "company.s4": "Consulting",
            "company.s5": "Digital Marketing",
            "footer.copy": "Ahmet Bütün. Software architect, founder, and independent product builder. Built as a personal architecture dossier for <a href=\"https://ahmet.sh/\">ahmet.sh</a>."
        },
        tr: {
            "nav.skip": "İçeriğe geç",
            "nav.language": "Switch language to English",
            "nav.langMeta": "dil",
            "nav.contact": "İletişim",
            "hero.orientation": "2001’den beri yazılım sistemleri, ürünler ve şirket inşası",
            "hero.title": "önce sistem.<br>sonra ürün.",
            "hero.lede": "Yazılım sistemleri tasarlıyor; kurduğum <strong>Buhane Bilgi Teknolojileri</strong> çatısı altında uygulamalar, SaaS ürünleri ve oyunlar geliştiriyorum.",
            "hero.products": "Seçili işleri gör",
            "hero.company": "Buhane’yi aç",
            "map.caption": "Ahmet Bütün’ün mimari, ürünler, AI modelleri, Buhane ve kullanıcılar arasındaki çalışmalarını gösteren mekansal harita.",
            "map.coreKicker": "ana düğüm",
            "map.coreMeta": "mimar / kurucu / geliştirici",
            "map.architecture": "Mimari",
            "map.products": "11 canlı ürün",
            "map.productsMeta": "uygulamalar, SaaS, oyunlar",
            "map.modelsMeta": "entegre model",
            "map.company": "Buhane BT",
            "map.companyMeta": "2018’de kuruldu",
            "map.usersMeta": "aktif kullanıcı",
            "metrics.since": "yazılım üretmeye başlangıç",
            "metrics.products": "canlı ürün",
            "metrics.models": "entegre AI modeli",
            "metrics.users": "aktif kullanıcı",
            "about.title": "bir üretici dosyası,<br>geliştirici broşürü değil.",
            "about.lede": "Yıldız Teknik Üniversitesi Bilgisayar Mühendisliği mezunu olarak yazılım mimarisi, ürün mühendisliği ve bağımsız ürün geliştirme odağıyla çalışıyorum.",
            "about.body": "Çalışmalarım kurumsal sistemlerden <strong>Nova W-SPY</strong> gibi güvenlik araçlarına, <strong>Crexta</strong> gibi açık kaynak çerçevelere ve Buhane altında geliştirilen güncel AI ürünlerine uzanıyor.",
            "products.title": "seçili ürünler,<br>bir indeks gibi.",
            "products.desc": "Buhane çatısı altında geliştirdiğim ürünlerden odaklı bir görünüm. Eksiksiz portföy şirket sitesinde tutulur.",
            "products.full": "Tüm Buhane portföyünü gör",
            "products.fullHref": "https://buhane.com.tr/tr/urunler/",
            "products.view": "Ürünü incele",
            "product.cosmic.type": "AI Platformu",
            "product.cosmic.desc": "Yükselen dijital trendler üzerine seçilmiş içgörüler sunan, AI destekli teknoloji haberleri ve içerik platformu.",
            "product.cosmic.tag1": "Teknoloji Haberleri",
            "product.cosmic.tag2": "AI İçgörü",
            "product.cosmic.tag3": "Yayıncılık",
            "product.vynix.type": "Yaratıcı AI",
            "product.vynix.desc": "AI destekli metin, görsel, ses ve video iş akışları için çapraz platform uygulaması.",
            "product.vynix.tag1": "Metin",
            "product.vynix.tag2": "Görsel",
            "product.vynix.tag3": "Ses",
            "product.vynix.tag4": "Video",
            "product.moodjot.type": "Duygu & Günlük",
            "product.moodjot.desc": "İsteğe bağlı fotoğraf ve hatırlatıcılarla duygu girişleri ve günlük notları için odaklı kayıt akışı.",
            "product.moodjot.tag1": "Duygu Girişi",
            "product.moodjot.tag2": "Günlük Notu",
            "product.moodjot.tag3": "Fotoğraf",
            "product.moodjot.tag4": "Hatırlatıcı",
            "product.u2m.type": "Web Aracı",
            "product.u2m.desc": "Analitik, QR kodlar, bağlantı yönetimi ve API sunan akıllı URL kısaltma aracı.",
            "product.u2m.tag1": "URL Kısaltma",
            "product.u2m.tag2": "API Dokümanı",
            "product.u2m.tag3": "Analitik",
            "product.hivedue.type": "Topluluk SaaS",
            "product.hivedue.desc": "Aidat, ödeme, duyuru, rapor ve doküman süreçleri için topluluk finans yönetimi.",
            "product.hivedue.tag1": "Aidat",
            "product.hivedue.tag2": "Ödeme",
            "product.hivedue.tag3": "Rapor",
            "product.lastimo.type": "Geçen Süre Hatırlatıcı",
            "product.lastimo.desc": "Bir şeyin en son ne zaman olduğunu hedef veya seri olmadan hatırlatan özel takip aracı.",
            "product.lastimo.tag1": "Altı Hazır Takip",
            "product.lastimo.tag2": "Geçen Süre",
            "product.lastimo.tag3": "Şimdi Kaydet",
            "product.glowspin.type": "Arcade Oyun",
            "product.glowspin.desc": "Renk eşleştirme, 500 seviye ve liderlik tablosu içeren renk-ritim arcade oyunu.",
            "product.glowspin.tag1": "Renk Eşleştirme",
            "product.glowspin.tag2": "500 Seviye",
            "product.glowspin.tag3": "Liderlik",
            "product.swipeslip.type": "Mobil Oyun",
            "product.swipeslip.desc": "500 seviye, 8 zorluk seviyesi ve güçlendirmeler içeren hyper-casual tünel koşucusu.",
            "product.swipeslip.tag1": "Tünel",
            "product.swipeslip.tag2": "500 Seviye",
            "product.swipeslip.tag3": "Güçlendirme",
            "product.gridzle.type": "Mantık Bulmacası",
            "product.gridzle.desc": "Beş zorluk kademesinde 250 elde hazırlanmış seviye sunan sayım odaklı mantık bulmacası.",
            "product.gridzle.tag1": "Sayım Odaklı",
            "product.gridzle.tag2": "250 Seviye",
            "product.gridzle.tag3": "Çevrimdışı",
            "product.astralpost.type": "AI Yansıma",
            "product.astralpost.desc": "Anonim ifade ve şiirsel yansımalar için AI destekli kozmik günlük uygulaması.",
            "product.astralpost.tag1": "Günlük",
            "product.astralpost.tag2": "Yansıma",
            "product.astralpost.tag3": "AI Yazım",
            "product.rulr.type": "Kurgusal Dünya",
            "product.rulr.desc": "Kurgusal RULR Countries dünyasını; ülke durumu, kurgusal rekabetler, aktivite ve liderlik yüzeyleriyle keşfetmeye yarayan herkese açık web deneyimi.",
            "product.rulr.tag1": "Kurgusal Ülkeler",
            "product.rulr.tag2": "Ülke Durumu",
            "product.rulr.tag3": "Liderlik",
            "timeline.title": "uzun çizgi önemli.",
            "timeline.desc": "Bu çalışma yeni bir poz değil. Eğitimden kurumsal mühendisliğe, güvenlikten açık kaynağa, şirket kurmaya ve güncel AI ürünlerine uzanan bir hat var.",
            "timeline.t1.title": "Yıldız Teknik Üniversitesi",
            "timeline.t1.desc": "Bilgisayar Mühendisliği eğitimi ve yazılım mimarisi kariyeri için teknik temel.",
            "timeline.t2.title": "Kurumsal Yazılım Mühendisliği",
            "timeline.t2.desc": "Java EE, Spring Framework ve mikroservis mimarisiyle kritik sistemler üzerinde derin çalışma.",
            "timeline.t3.title": "Güvenlik & Açık Kaynak",
            "timeline.t3.desc": "Nova W-SPY ve Crexta’yı geliştirdi; Qualist Business Operations Platform geliştirmesine liderlik etti.",
            "timeline.t4.title": "Buhane BT Kuruluşu",
            "timeline.t4.desc": "Buhane Bilgi Teknolojileri’ni yazılım tasarımı, danışmanlık, e-ticaret ve AI servisleri şirketi olarak kurdu.",
            "timeline.t5.title": "AI & Ürün İnovasyonu",
            "timeline.t5.desc": "Buhane üzerinden yaratıcı araçlar, kişisel yardımcılar, iş yazılımları ve oyunlar geliştirmeye devam ediyor.",
            "timeline.nowYear": "2021-bugün",
            "technical.title": "teknik indeks.",
            "technical.desc": "Ürün çalışmalarının arkasındaki yeteneklerin yoğun bir görünümü.",
            "technical.row1.key": "Mimari",
            "technical.row1.val": "Sistem tasarımı, alan modelleme, ürün temelleri",
            "technical.row2.key": "Frontend & Mobil",
            "technical.row2.val": "Web uygulamaları, çapraz platform uygulamalar, ürün arayüzleri",
            "technical.row3.key": "AI & Veri",
            "technical.row3.val": "Model entegrasyonu, yaratıcı AI akışları, analitik yüzeyler",
            "technical.row4.key": "Altyapı",
            "technical.row4.val": "API’ler, servis sınırları, dağıtım yüzeyleri",
            "company.desc": "Ürün çalışmalarının, yazılım tasarımının, teknoloji danışmanlığının, e-ticaretin, AI servislerinin ve dijital pazarlamanın arkasındaki şirket.",
            "company.cta": "Buhane’yi ziyaret et",
            "company.s1": "Yazılım Tasarımı",
            "company.s2": "AI Servisleri",
            "company.s3": "E-Ticaret",
            "company.s4": "Danışmanlık",
            "company.s5": "Dijital Pazarlama",
            "footer.copy": "Ahmet Bütün. Yazılım mimarı, kurucu ve bağımsız ürün geliştirici. <a href=\"https://ahmet.sh/\">ahmet.sh</a> için kişisel mimari dosya olarak tasarlandı."
        }
    };

    const localeKey = "ahmetsh-www-locale";
    const localeToggle = document.getElementById("localeToggle");
    const localeValue = document.getElementById("localeValue");

    function getInitialLocale() {
        const saved = window.localStorage.getItem(localeKey);
        if (saved === "tr" || saved === "en") {
            return saved;
        }
        return window.navigator.language.toLowerCase().startsWith("tr") ? "tr" : "en";
    }

    function applyLocale(locale) {
        const dict = translations[locale] || translations.en;
        document.documentElement.lang = locale;
        document.documentElement.dataset.locale = locale;

        document.querySelectorAll("[data-i18n]").forEach((node) => {
            const value = dict[node.dataset.i18n];
            if (value) {
                node.textContent = value;
            }
        });

        document.querySelectorAll("[data-i18n-html]").forEach((node) => {
            const value = dict[node.dataset.i18nHtml];
            if (value) {
                node.innerHTML = value;
            }
        });

        document.querySelectorAll("[data-i18n-href]").forEach((node) => {
            const value = dict[node.dataset.i18nHref];
            if (value) {
                node.setAttribute("href", value);
            }
        });

        document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
            const value = dict[node.dataset.i18nAriaLabel];
            if (value) {
                node.setAttribute("aria-label", value);
            }
        });

        localeValue.textContent = locale === "en" ? "TR" : "EN";
        window.localStorage.setItem(localeKey, locale);
    }

    const initialLocale = getInitialLocale();
    applyLocale(initialLocale);

    localeToggle.addEventListener("click", () => {
        const next = document.documentElement.dataset.locale === "en" ? "tr" : "en";
        applyLocale(next);
    });

    window.requestAnimationFrame(() => {
        document.body.classList.add("is-ready");
    });
}());
