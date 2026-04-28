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

            // Hero
            'hero.badge': 'Available for consulting & partnerships',
            'hero.title1': 'Building the',
            'hero.title2': '<span class="gradient-text">Future of Tech</span>',
            'hero.title3': 'Since <span class="gradient-text year-counter" id="yearCounter">2001</span>',
            'hero.subtitle': 'Software Architect, AI Innovator & Serial Product Builder with <strong>24+ years</strong> of engineering excellence. From enterprise systems to AI-powered consumer apps.',
            'hero.cta1': 'Explore My Work',
            'hero.cta2': 'My Story',
            'hero.stat1': 'Years Experience',
            'hero.stat2': 'Live Products',
            'hero.stat3': 'AI Models Integrated',
            'hero.stat4': 'Active Users',
            'hero.scroll': 'Scroll to explore',

            // About
            'about.tag': '// About Me',
            'about.title': 'Crafting Digital <span class="gradient-text">Excellence</span>',
            'about.lead': "I'm <strong>Ahmet Bütün</strong>, a Computer Engineer from Yildiz Technical University with over two decades of passion for building software that matters.",
            'about.p1': 'As the founder of <strong>Buhane Information Technologies</strong>, I lead a team that transforms ideas into scalable digital solutions. From enterprise-grade platforms to AI-powered consumer applications, I\'ve architected systems that serve thousands of users worldwide.',
            'about.p2': 'My journey spans from crafting security tools like <strong>Nova W-SPY</strong> to building open-source frameworks like <strong>Crexta</strong>, and now pioneering AI-driven creative tools. I believe technology should empower people to do extraordinary things.',
            'about.highlight1_title': 'Full-Stack Mastery',
            'about.highlight1_desc': 'From microservices to mobile apps',
            'about.highlight2_title': 'AI Pioneer',
            'about.highlight2_desc': '100+ AI models across products',
            'about.highlight3_title': 'Product Visionary',
            'about.highlight3_desc': '7 live products, 10K+ users',

            // Products
            'products.tag': '// Products & Ventures',
            'products.title': "What I've <span class=\"gradient-text\">Built</span>",
            'products.desc': 'A portfolio of products spanning AI, utilities, wellness, and gaming',
            'products.cosmic.badge': 'AI Platform',
            'products.cosmic.desc': 'AI-powered technology news & content platform. Unleashing creativity through artificial intelligence with curated insights on emerging digital trends.',
            'products.cosmic.tag2': 'News',
            'products.cosmic.tag3': 'Content',
            'products.cosmic.link': 'Visit Platform',
            'products.vynix.badge': 'Creative AI',
            'products.vynix.desc': 'AI-powered creative studio with 100+ models. Generate images, videos, and audio from text prompts. Your imagination, amplified.',
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
            'expertise.t5.desc': 'Launched CosmicMeta.ai, Vynix AI Studio, MoodJot, U2M.io, Glow Spin, Swipe Slip, and Gridzle. Pioneering AI-powered consumer experiences.',
            'expertise.tech_title': 'Tech Arsenal',
            'expertise.cat_frontend': 'Frontend & Mobile',
            'expertise.cat_ai': 'AI & Data',
            'expertise.cat_infra': 'Infrastructure',

            // Company
            'company.tag': '// Technology Partner',
            'company.title': 'Buhane <span class="gradient-text">Information Technologies</span>',
            'company.desc': 'Your innovation partner since 2018. We deliver cutting-edge solutions in software design, AI services, e-commerce, digital marketing, and strategic IT consulting.',
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

            // Hero
            'hero.badge': 'Danışmanlık ve iş birliği için müsait',
            'hero.title1': '<span class="gradient-text year-counter" id="yearCounter">2001</span>\'den Beri',
            'hero.title2': '<span class="gradient-text">Geleceği</span>',
            'hero.title3': 'İnşa Ediyoruz',
            'hero.subtitle': 'Yazılım Mimarı, Yapay Zeka İnovatörü ve Seri Ürün Geliştirici. <strong>24+ yıllık</strong> mühendislik deneyimi. Kurumsal sistemlerden yapay zeka destekli tüketici uygulamalarına.',
            'hero.cta1': 'Çalışmalarımı Keşfet',
            'hero.cta2': 'Hikayem',
            'hero.stat1': 'Yıl Deneyim',
            'hero.stat2': 'Canlı Ürün',
            'hero.stat3': 'Entegre AI Modeli',
            'hero.stat4': 'Aktif Kullanıcı',
            'hero.scroll': 'Keşfetmek için kaydır',

            // About
            'about.tag': '// Hakkımda',
            'about.title': 'Dijital <span class="gradient-text">Mükemmellik</span> Yaratmak',
            'about.lead': 'Ben <strong>Ahmet Bütün</strong>, Yıldız Teknik Üniversitesi Bilgisayar Mühendisliği mezunuyum. Yirmi yılı aşkın süredir anlamlı yazılımlar geliştirme tutkusuyla çalışıyorum.',
            'about.p1': '<strong>Buhane Bilişim Teknolojileri</strong>\'nin kurucusu olarak, fikirleri ölçeklenebilir dijital çözümlere dönüştüren bir ekibe liderlik ediyorum. Kurumsal platformlardan yapay zeka destekli tüketici uygulamalarına kadar, dünya genelinde binlerce kullanıcıya hizmet veren sistemler tasarladım.',
            'about.p2': 'Yolculuğum <strong>Nova W-SPY</strong> gibi güvenlik araçları geliştirmekten, <strong>Crexta</strong> gibi açık kaynak çerçeveler oluşturmaya ve şimdi de yapay zeka destekli yaratıcı araçlara öncülük etmeye uzanıyor. Teknolojinin insanları olağanüstü şeyler yapmaya güçlendirmesi gerektiğine inanıyorum.',
            'about.highlight1_title': 'Full-Stack Ustalık',
            'about.highlight1_desc': 'Mikroservislerden mobil uygulamalara',
            'about.highlight2_title': 'Yapay Zeka Öncüsü',
            'about.highlight2_desc': 'Ürünlerde 100+ AI modeli',
            'about.highlight3_title': 'Ürün Vizyoneri',
            'about.highlight3_desc': '7 canlı ürün, 10K+ kullanıcı',

            // Products
            'products.tag': '// Ürünler & Girişimler',
            'products.title': 'Neler <span class="gradient-text">Geliştirdim</span>',
            'products.desc': 'Yapay zeka, araçlar, sağlık ve oyun alanlarını kapsayan bir ürün portföyü',
            'products.cosmic.badge': 'AI Platformu',
            'products.cosmic.desc': 'Yapay zeka destekli teknoloji haber ve içerik platformu. Yeni dijital trendlere ilişkin küratörlü içgörülerle yapay zeka aracılığıyla yaratıcılığı ortaya çıkarıyor.',
            'products.cosmic.tag2': 'Haber',
            'products.cosmic.tag3': 'İçerik',
            'products.cosmic.link': 'Platforma Git',
            'products.vynix.badge': 'Yaratıcı AI',
            'products.vynix.desc': '100+ modele sahip yapay zeka destekli yaratıcı stüdyo. Metin komutlarından görsel, video ve ses üretin. Hayal gücünüz, güçlendirilmiş.',
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
            'expertise.t5.desc': 'CosmicMeta.ai, Vynix AI Studio, MoodJot, U2M.io, Glow Spin, Swipe Slip ve Gridzle\'ı piyasaya sürdü. Yapay zeka destekli tüketici deneyimlerine öncülük ediyor.',
            'expertise.tech_title': 'Teknoloji Cephaneliği',
            'expertise.cat_frontend': 'Önyüz & Mobil',
            'expertise.cat_ai': 'Yapay Zeka & Veri',
            'expertise.cat_infra': 'Altyapı',

            // Company
            'company.tag': '// Teknoloji Ortağı',
            'company.title': 'Buhane <span class="gradient-text">Bilişim Teknolojileri</span>',
            'company.desc': '2018\'den beri inovasyon ortağınız. Yazılım tasarımı, yapay zeka hizmetleri, e-ticaret, dijital pazarlama ve stratejik BT danışmanlığında son teknoloji çözümler sunuyoruz.',
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

        // Update html lang attribute
        document.documentElement.lang = lang === 'tr' ? 'tr' : 'en';

        // Update page title
        document.title = lang === 'tr'
            ? 'Ahmet Bütün - Yazılım Mimarı & Teknoloji Vizyoneri'
            : 'Ahmet Bütün - Software Architect & Tech Visionary';

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
