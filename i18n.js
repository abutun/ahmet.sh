// ============================================
// INTERNATIONALIZATION (i18n) SYSTEM
// ============================================

(function () {
    'use strict';

    const translations = {
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.products': 'Products',
            'nav.apps': 'Apps',
            'nav.expertise': 'Expertise',
            'nav.contact': 'Contact',
            'nav.cta': "Let's Talk",
            'nav.language': 'Switch language',
            'nav.menu': 'Menu',

            // Page metadata
            'meta.title': 'Ahmet Bütün — Software Architect & Product Builder',
            'meta.description': 'Ahmet Bütün is a software architect, product builder, and founder of Buhane Bilgi Teknolojileri. Explore selected apps, SaaS products, and games.',

            // Hero
            'hero.badge': 'Software architecture & product development',
            'hero.title1': 'Software Architect',
            'hero.title2': '& <span class="gradient-text">Product Builder</span>',
            'hero.title3': 'Building since <span class="gradient-text year-counter" id="yearCounter">2001</span>',
            'hero.subtitle': 'I design software systems and build apps, SaaS products, and games through <strong>Buhane Bilgi Teknolojileri</strong>, the company I founded.',
            'hero.cta1': 'Explore My Work',
            'hero.cta2': 'My Story',
            'hero.stat1': 'Building Software Since',
            'hero.stat2': 'Selected Work',
            'hero.stat3': 'Interface Languages',
            'hero.stat4': 'Products at Buhane',
            'hero.scroll': 'Scroll to explore',

            // About
            'about.tag': '// About Me',
            'about.title': 'Crafting Digital <span class="gradient-text">Excellence</span>',
            'about.lead': "I'm <strong>Ahmet Bütün</strong>, a Computer Engineer from Yildiz Technical University with over two decades of passion for building software that matters.",
            'about.p1': 'I founded <a class="inline-link" href="https://buhane.com.tr/"><strong>Buhane Bilgi Teknolojileri</strong></a>, the company behind my product work in apps, SaaS, and games. This personal site highlights selected work; Buhane is the authoritative home for the complete portfolio.',
            'about.p2': 'My journey spans from crafting security tools like <strong>Nova W-SPY</strong> to building open-source frameworks like <strong>Crexta</strong>, and now pioneering AI-driven creative tools. I believe technology should empower people to do extraordinary things.',
            'about.highlight1_title': 'Software Architecture',
            'about.highlight1_desc': 'Systems and product foundations',
            'about.highlight2_title': 'Product Engineering',
            'about.highlight2_desc': 'Web and cross-platform applications',
            'about.highlight3_title': 'Founder at Buhane',
            'about.highlight3_desc': 'The company behind the full portfolio',

            // Products
            'products.tag': '// Products & Ventures',
            'products.title': "What I've <span class=\"gradient-text\">Built</span>",
            'products.desc': 'A portfolio of products spanning AI, finance, utilities, wellness, and gaming',
            'products.cosmic.badge': 'AI Platform',
            'products.cosmic.desc': 'AI-powered technology news & content platform. Unleashing creativity through artificial intelligence with curated insights on emerging digital trends.',
            'products.cosmic.tag2': 'News',
            'products.cosmic.tag3': 'Content',
            'products.cosmic.link': 'Visit Platform',
            'products.vynix.badge': 'Creative AI',
            'products.vynix.desc': 'AI-powered creative studio with 120+ models. Generate images, videos, and audio from text prompts. Your imagination, amplified.',
            'products.vynix.tag1': 'AI Art',
            'products.vynix.tag2': 'Video',
            'products.vynix.tag3': 'Audio',
            'products.vynix.link': 'Explore App',
            'products.moodjot.badge': 'Wellness',
            'products.moodjot.desc': 'Emotional wellness journal with AI insights. Track moods, discover patterns, and transform your emotional well-being. 10K+ active users.',
            'products.moodjot.tag1': 'Health',
            'products.moodjot.tag3': 'Journal',
            'products.moodjot.tag4': 'Analytics',
            'products.moodjot.link': 'Try MoodJot',
            'products.u2m.badge': 'SaaS Tool',
            'products.u2m.desc': 'Smart URL shortening with analytics & QR codes. Track clicks, generate QR codes, and manage links with a developer-friendly API.',
            'products.u2m.tag2': 'Analytics',
            'products.u2m.link': 'Shorten URLs',
            'products.hivedue.badge': 'Community SaaS',
            'products.hivedue.desc': 'Community finance management for dues, payments, announcements, and documents in one place. Live on the web today with mobile apps coming soon.',
            'products.hivedue.tag1': 'Finance',
            'products.hivedue.tag2': 'Dues',
            'products.hivedue.tag3': 'Reports',
            'products.hivedue.tag4': 'Web App',
            'products.hivedue.link': 'Visit HiveDue',
            'products.lastimo.badge': 'Routine Tracker',
            'products.lastimo.desc': 'Private routine tracker for remembering the last time you did something. Log events, review history, and understand timing without streaks, goals, or judgment.',
            'products.lastimo.tag1': 'Privacy',
            'products.lastimo.tag2': 'Tracker',
            'products.lastimo.tag3': 'Routines',
            'products.lastimo.link': 'Visit Lastimo',
            'products.glowspin.badge': 'Gaming',
            'products.glowspin.desc': 'Neon rhythm arcade game with 500 levels. Match colors on spinning rings, test your reflexes, and climb the global leaderboard.',
            'products.glowspin.tag1': 'Game',
            'products.glowspin.tag4': '500 Levels',
            'products.glowspin.link': 'Play Now',
            'products.swipeslip.badge': 'Gaming',
            'products.swipeslip.desc': 'Hyper-casual tunnel runner with 500 levels & 8 difficulty tiers. Dodge obstacles, collect power-ups, and reach the Divine tier.',
            'products.swipeslip.tag1': 'Game',
            'products.swipeslip.tag3': 'Action',
            'products.swipeslip.tag4': 'Leaderboard',
            'products.swipeslip.link': 'Play Now',
            'products.gridzle.badge': 'Puzzle',
            'products.gridzle.desc': 'Counts-first logic puzzle with 250 hand-crafted levels across 5 difficulty tiers. Deduce, place, and toggle the grid to match row & column targets.',
            'products.gridzle.tag1': 'Puzzle',
            'products.gridzle.tag2': 'Logic',
            'products.gridzle.tag3': 'Strategy',
            'products.gridzle.tag4': 'Offline',
            'products.gridzle.link': 'Play Now',
            'products.astralpost.badge': 'AI Reflection',
            'products.astralpost.desc': 'AI-powered cosmic journaling app for anonymous expression. Send thoughts into the universe, receive poetic reflections, and personalize the ritual with zodiac insights.',
            'products.astralpost.tag1': 'AI',
            'products.astralpost.tag2': 'Journal',
            'products.astralpost.tag3': 'Anonymous',
            'products.astralpost.tag4': 'Zodiac',
            'products.astralpost.link': 'Visit App',

            // Expertise
            'expertise.tag': '// Expertise & Timeline',
            'expertise.title': 'The <span class="gradient-text">Journey</span>',
            'expertise.present': 'Present',
            'expertise.t1.title': 'Yildiz Technical University',
            'expertise.t1.desc': 'Computer Engineering degree. Built the foundation for a career in software architecture and system design.',
            'expertise.t2.title': 'Enterprise Software Engineering',
            'expertise.t2.desc': 'Deep expertise in Java EE, Spring Framework, and microservices architecture. Built mission-critical systems for enterprise clients.',
            'expertise.t3.title': 'Security & Open Source',
            'expertise.t3.desc': 'Created Nova W-SPY web security scanner and Crexta open-source data extraction framework. Led development of Qualist Business Operations Platform.',
            'expertise.t4.title': 'Founded Buhane IT',
            'expertise.t4.desc': 'Launched Buhane Information Technologies as a full-service technology partner. Software design, consulting, e-commerce, and AI services.',
            'expertise.t5.title': 'AI & Product Innovation',
            'expertise.t5.desc': 'I continue to build and maintain products across creative tools, personal utilities, business software, and games through Buhane.',
            'expertise.tech_title': 'Tech Arsenal',
            'expertise.cat_frontend': 'Frontend & Mobile',
            'expertise.cat_ai': 'AI & Data',
            'expertise.cat_infra': 'Infrastructure',

            // Company
            'company.tag': '// Company I Founded',
            'company.title': 'Buhane <span class="gradient-text">Bilgi Teknolojileri</span>',
            'company.desc': 'I founded Buhane Bilgi Teknolojileri as the company behind this product work and our software design and technology consulting.',
            'company.s1': 'Software Design',
            'company.s2': 'AI Services',
            'company.s3': 'E-Commerce',
            'company.s4': 'Consulting',
            'company.s5': 'Digital Marketing',
            'company.cta': 'Visit Buhane',

            // Contact
            'contact.tag': '// Get in Touch',
            'contact.title': "Let's Build Something <span class=\"gradient-text\">Amazing</span>",
            'contact.desc': 'Have an idea? Need a technology partner? Let\'s make it happen.',
            'contact.email': 'Email',
            'contact.website': 'Website',

            // Footer
            'footer.text': '\u00A9 2026 Ahmet Bütün. Crafted with passion & code.',
        },
        tr: {
            // Navigation
            'nav.home': 'Ana Sayfa',
            'nav.about': 'Hakkımda',
            'nav.products': 'Ürünler',
            'nav.apps': 'Uygulamalar',
            'nav.expertise': 'Uzmanlık',
            'nav.contact': 'İletişim',
            'nav.cta': 'İletişime Geç',
            'nav.language': 'Dili değiştir',
            'nav.menu': 'Menü',

            // Sayfa metaverisi
            'meta.title': 'Ahmet Bütün — Yazılım Mimarı ve Ürün Geliştirici',
            'meta.description': 'Ahmet Bütün; yazılım mimarı, ürün geliştirici ve Buhane Bilgi Teknolojileri kurucusudur. Seçili uygulama, SaaS ürünü ve oyunları keşfedin.',

            // Hero
            'hero.badge': 'Yazılım mimarisi ve ürün geliştirme',
            'hero.title1': 'Yazılım Mimarı',
            'hero.title2': 've <span class="gradient-text">Ürün Geliştirici</span>',
            'hero.title3': '<span class="gradient-text year-counter" id="yearCounter">2001</span>\'den beri üretiyor',
            'hero.subtitle': 'Yazılım sistemleri tasarlıyor; kurduğum <strong>Buhane Bilgi Teknolojileri</strong> çatısı altında uygulamalar, SaaS ürünleri ve oyunlar geliştiriyorum.',
            'hero.cta1': 'Çalışmalarımı Keşfet',
            'hero.cta2': 'Hikayem',
            'hero.stat1': 'Yazılım Üretmeye Başlangıç',
            'hero.stat2': 'Seçili Çalışma',
            'hero.stat3': 'Arayüz Dili',
            'hero.stat4': 'Buhane Ürünü',
            'hero.scroll': 'Keşfetmek için kaydır',

            // About
            'about.tag': '// Hakkımda',
            'about.title': 'Dijital <span class="gradient-text">Mükemmellik</span> Yaratmak',
            'about.lead': 'Ben <strong>Ahmet Bütün</strong>, Yıldız Teknik Üniversitesi Bilgisayar Mühendisliği mezunuyum. Yirmi yılı aşkın süredir anlamlı yazılımlar geliştirme tutkusuyla çalışıyorum.',
            'about.p1': 'Uygulama, SaaS ve oyun çalışmalarımın arkasındaki şirket olan <a class="inline-link" href="https://buhane.com.tr/tr/"><strong>Buhane Bilgi Teknolojileri</strong></a>\'ni kurdum. Bu kişisel site seçili çalışmaları öne çıkarır; eksiksiz portföyün yetkili adresi Buhane\'dir.',
            'about.p2': 'Yolculuğum <strong>Nova W-SPY</strong> gibi güvenlik araçları geliştirmekten, <strong>Crexta</strong> gibi açık kaynak çerçeveler oluşturmaya ve şimdi de yapay zeka destekli yaratıcı araçlara öncülük etmeye uzanıyor. Teknolojinin insanları olağanüstü şeyler yapmaya güçlendirmesi gerektiğine inanıyorum.',
            'about.highlight1_title': 'Yazılım Mimarisi',
            'about.highlight1_desc': 'Sistemler ve ürün temelleri',
            'about.highlight2_title': 'Ürün Mühendisliği',
            'about.highlight2_desc': 'Web ve çapraz platform uygulamaları',
            'about.highlight3_title': 'Buhane Kurucusu',
            'about.highlight3_desc': 'Eksiksiz portföyün arkasındaki şirket',

            // Products
            'products.tag': '// Ürünler & Girişimler',
            'products.title': 'Neler <span class="gradient-text">Geliştirdim</span>',
            'products.desc': 'Yapay zeka, finans, araçlar, sağlık ve oyun alanlarını kapsayan bir ürün portföyü',
            'products.cosmic.badge': 'AI Platformu',
            'products.cosmic.desc': 'Yapay zeka destekli teknoloji haber ve içerik platformu. Yeni dijital trendlere ilişkin küratörlü içgörülerle yapay zeka aracılığıyla yaratıcılığı ortaya çıkarıyor.',
            'products.cosmic.tag2': 'Haber',
            'products.cosmic.tag3': 'İçerik',
            'products.cosmic.link': 'Platforma Git',
            'products.vynix.badge': 'Yaratıcı AI',
            'products.vynix.desc': '120+ modele sahip yapay zeka destekli yaratıcı stüdyo. Metin komutlarından görsel, video ve ses üretin. Hayal gücünüz, güçlendirilmiş.',
            'products.vynix.tag1': 'AI Sanat',
            'products.vynix.tag2': 'Video',
            'products.vynix.tag3': 'Ses',
            'products.vynix.link': 'Uygulamayı Keşfet',
            'products.moodjot.badge': 'Sağlık',
            'products.moodjot.desc': 'Yapay zeka içgörüleriyle duygusal sağlık günlüğü. Ruh hallerinizi takip edin, kalıpları keşfedin ve duygusal iyiliğinizi dönüştürün. 10K+ aktif kullanıcı.',
            'products.moodjot.tag1': 'Sağlık',
            'products.moodjot.tag3': 'Günlük',
            'products.moodjot.tag4': 'Analitik',
            'products.moodjot.link': "MoodJot'u Dene",
            'products.u2m.badge': 'SaaS Aracı',
            'products.u2m.desc': 'Analitik ve QR kodlarla akıllı URL kısaltma. Tıklamaları takip edin, QR kodlar oluşturun ve geliştirici dostu API ile bağlantıları yönetin.',
            'products.u2m.tag2': 'Analitik',
            'products.u2m.link': 'URL Kısalt',
            'products.hivedue.badge': 'Topluluk SaaS',
            'products.hivedue.desc': 'Aidat, ödeme, duyuru ve belgeleri tek yerden yöneten topluluk finans yönetimi. Web uygulaması bugün hazır, mobil uygulamalar yakında.',
            'products.hivedue.tag1': 'Finans',
            'products.hivedue.tag2': 'Aidat',
            'products.hivedue.tag3': 'Rapor',
            'products.hivedue.tag4': 'Web App',
            'products.hivedue.link': 'HiveDue\'ya Git',
            'products.lastimo.badge': 'Rutin Takipçisi',
            'products.lastimo.desc': 'Bir şeyi en son ne zaman yaptığınızı hatırlamak için özel ve yalın takip uygulaması. Olayları kaydedin, geçmişi görün ve seri/hedef baskısı olmadan zamanlamayı anlayın.',
            'products.lastimo.tag1': 'Gizlilik',
            'products.lastimo.tag2': 'Takip',
            'products.lastimo.tag3': 'Rutinler',
            'products.lastimo.link': 'Lastimo\'ya Git',
            'products.glowspin.badge': 'Oyun',
            'products.glowspin.desc': '500 seviyeli neon ritim arcade oyunu. Dönen halkalarda renkleri eşleştirin, reflekslerinizi test edin ve küresel sıralamada yükselin.',
            'products.glowspin.tag1': 'Oyun',
            'products.glowspin.tag4': '500 Seviye',
            'products.glowspin.link': 'Şimdi Oyna',
            'products.swipeslip.badge': 'Oyun',
            'products.swipeslip.desc': '500 seviye ve 8 zorluk katmanıyla hiper-casual tünel koşucusu. Engellerden kaçın, güç artışları toplayın ve İlahi seviyeye ulaşın.',
            'products.swipeslip.tag1': 'Oyun',
            'products.swipeslip.tag3': 'Aksiyon',
            'products.swipeslip.tag4': 'Sıralama',
            'products.swipeslip.link': 'Şimdi Oyna',
            'products.gridzle.badge': 'Bulmaca',
            'products.gridzle.desc': '5 zorluk katmanında 250 özenle hazırlanmış seviye sunan sayı odaklı mantık bulmacası. Çıkarım yapın, parça yerleştirin ve satır & sütun hedeflerini eşleştirmek için ızgarayı değiştirin.',
            'products.gridzle.tag1': 'Bulmaca',
            'products.gridzle.tag2': 'Mantık',
            'products.gridzle.tag3': 'Strateji',
            'products.gridzle.tag4': 'Çevrimdışı',
            'products.gridzle.link': 'Şimdi Oyna',
            'products.astralpost.badge': 'AI Yansıma',
            'products.astralpost.desc': 'Anonim ifade için yapay zeka destekli kozmik günlük uygulaması. Düşüncelerinizi evrene gönderin, şiirsel yansımalar alın ve ritüeli burç içgörüleriyle kişiselleştirin.',
            'products.astralpost.tag1': 'AI',
            'products.astralpost.tag2': 'Günlük',
            'products.astralpost.tag3': 'Anonim',
            'products.astralpost.tag4': 'Burç',
            'products.astralpost.link': 'Uygulamaya Git',

            // Expertise
            'expertise.tag': '// Uzmanlık & Zaman Çizelgesi',
            'expertise.title': '<span class="gradient-text">Yolculuk</span>',
            'expertise.present': 'Günümüz',
            'expertise.t1.title': 'Yıldız Teknik Üniversitesi',
            'expertise.t1.desc': 'Bilgisayar Mühendisliği lisans derecesi. Yazılım mimarisi ve sistem tasarımı kariyerinin temelini attı.',
            'expertise.t2.title': 'Kurumsal Yazılım Mühendisliği',
            'expertise.t2.desc': 'Java EE, Spring Framework ve mikroservis mimarisi alanlarında derin uzmanlık. Kurumsal müşteriler için kritik sistemler geliştirdi.',
            'expertise.t3.title': 'Güvenlik & Açık Kaynak',
            'expertise.t3.desc': 'Nova W-SPY web güvenlik tarayıcısı ve Crexta açık kaynak veri çıkarma çerçevesini oluşturdu. Qualist İş Operasyonları Platformu geliştirmesine liderlik etti.',
            'expertise.t4.title': 'Buhane BT Kuruluşu',
            'expertise.t4.desc': 'Buhane Bilişim Teknolojilerini tam kapsamlı teknoloji ortağı olarak kurdu. Yazılım tasarımı, danışmanlık, e-ticaret ve yapay zeka hizmetleri.',
            'expertise.t5.title': 'Yapay Zeka & Ürün İnovasyonu',
            'expertise.t5.desc': 'Buhane çatısı altında yaratıcı araçlar, kişisel yardımcılar, iş yazılımları ve oyunlar geliştirmeye ve sürdürmeye devam ediyorum.',
            'expertise.tech_title': 'Teknoloji Cephaneliği',
            'expertise.cat_frontend': 'Önyüz & Mobil',
            'expertise.cat_ai': 'Yapay Zeka & Veri',
            'expertise.cat_infra': 'Altyapı',

            // Company
            'company.tag': '// Kurduğum Şirket',
            'company.title': 'Buhane <span class="gradient-text">Bilgi Teknolojileri</span>',
            'company.desc': 'Buhane Bilgi Teknolojileri\'ni bu ürün çalışmalarının ve yazılım tasarımı ile teknoloji danışmanlığı hizmetlerimizin arkasındaki şirket olarak kurdum.',
            'company.s1': 'Yazılım Tasarımı',
            'company.s2': 'Yapay Zeka',
            'company.s3': 'E-Ticaret',
            'company.s4': 'Danışmanlık',
            'company.s5': 'Dijital Pazarlama',
            'company.cta': "Buhane'yi Ziyaret Et",

            // Contact
            'contact.tag': '// İletişim',
            'contact.title': 'Birlikte Harika Bir Şey <span class="gradient-text">Yaratalım</span>',
            'contact.desc': 'Bir fikriniz mi var? Teknoloji ortağına mı ihtiyacınız var? Hayata geçirelim.',
            'contact.email': 'E-posta',
            'contact.website': 'Web Sitesi',

            // Footer
            'footer.text': '\u00A9 2026 Ahmet Bütün. Tutku ve kodla üretildi.',
        }
    };

    let currentLang = localStorage.getItem('lang') || 'en';

    function applyTranslations(lang) {
        const t = translations[lang];
        if (!t) return;

        // data-i18n: plain text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) {
                el.textContent = t[key];
            }
        });

        // data-i18n-html: innerHTML (for elements with <strong>, <span> etc.)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (t[key] !== undefined) {
                el.innerHTML = t[key];
            }
        });

        // data-i18n-template: innerHTML with dynamic content (hero title3)
        document.querySelectorAll('[data-i18n-template]').forEach(el => {
            const key = el.getAttribute('data-i18n-template');
            if (t[key] !== undefined) {
                el.innerHTML = t[key];
            }
        });

        // data-i18n-aria-label: localized accessible names
        document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria-label');
            if (t[key] !== undefined) {
                el.setAttribute('aria-label', t[key]);
            }
        });

        // Update html lang attribute
        document.documentElement.lang = lang === 'tr' ? 'tr' : 'en';

        // Update page title
        document.title = t['meta.title'];
        const description = document.querySelector('meta[name="description"]');
        if (description) description.setAttribute('content', t['meta.description']);

        // Update switcher UI
        const flagEl = document.getElementById('langFlag');
        const codeEl = document.getElementById('langCode');
        if (flagEl) flagEl.textContent = lang === 'tr' ? '🇹🇷' : '🇬🇧';
        if (codeEl) codeEl.textContent = lang === 'tr' ? 'TR' : 'EN';
    }

    function toggleLanguage() {
        currentLang = currentLang === 'en' ? 'tr' : 'en';
        localStorage.setItem('lang', currentLang);
        applyTranslations(currentLang);
    }

    // Initialize on DOM ready
    function initI18n() {
        applyTranslations(currentLang);

        const switcher = document.getElementById('langSwitcher');
        if (switcher) {
            switcher.addEventListener('click', toggleLanguage);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initI18n);
    } else {
        initI18n();
    }

    // Expose for external use
    window.i18n = { toggle: toggleLanguage, setLang: function(lang) { currentLang = lang; localStorage.setItem('lang', lang); applyTranslations(lang); } };
})();
