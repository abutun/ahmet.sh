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
            'nav.products': 'Selected Work',
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

            // Selected work
            'products.tag': '// Selected Work',
            'products.title': 'Products I <span class="gradient-text">Build</span>',
            'products.desc': 'A curated look at products I build through Buhane. The company site maintains the complete portfolio.',
            'products.view': 'View product',
            'products.full_note': 'Looking for every Buhane product? Browse the authoritative company portfolio.',
            'products.full_cta': 'View the full Buhane portfolio',
            'products.full_href': 'https://buhane.com.tr/products/',
            'products.vynix.badge': 'Creative Workflows',
            'products.vynix.desc': 'A cross-platform app for AI-assisted text, image, audio, and video workflows—selected for its multimodal creation flow.',
            'products.vynix.tag1': 'Text',
            'products.vynix.tag2': 'Image',
            'products.vynix.tag3': 'Audio',
            'products.vynix.tag4': 'Video',
            'products.moodjot.badge': 'Mood & Journaling',
            'products.moodjot.desc': 'A focused capture flow for mood entries and journal notes, with optional photos and reminders.',
            'products.moodjot.tag1': 'Mood Entries',
            'products.moodjot.tag2': 'Journal Notes',
            'products.moodjot.tag3': 'Photos',
            'products.moodjot.tag4': 'Reminders',
            'products.u2m.badge': 'Web Utility',
            'products.u2m.desc': 'A URL shortener with public API documentation and link statistics—selected for its compact product and developer surface.',
            'products.u2m.tag1': 'URL Shortening',
            'products.u2m.tag2': 'API Docs',
            'products.u2m.tag3': 'Link Statistics',
            'products.lastimo.badge': 'Elapsed-Time Reminder',
            'products.lastimo.desc': 'Six preset trackers reduce routine recall to a plain elapsed-time answer, with current-time logging and hide, restore, or delete controls.',
            'products.lastimo.tag1': 'Six Presets',
            'products.lastimo.tag2': 'Time Since',
            'products.lastimo.tag3': 'Log Now',
            'products.lastimo.tag4': 'Hide & Restore',
            'products.swipeslip.badge': 'Mobile Game',
            'products.swipeslip.desc': 'A tunnel-navigation game with 200 progressive levels, designed for both portrait and landscape play.',
            'products.swipeslip.tag1': 'Tunnel Navigation',
            'products.swipeslip.tag2': '200 Levels',
            'products.swipeslip.tag3': 'Portrait',
            'products.swipeslip.tag4': 'Landscape',
            'products.gridzle.badge': 'Logic Puzzle',
            'products.gridzle.desc': 'A counts-first puzzle with cell placement and toggling, five tiers, 250 levels, and offline-first progression.',
            'products.gridzle.tag1': 'Counts First',
            'products.gridzle.tag2': '250 Levels',
            'products.gridzle.tag3': 'Five Tiers',
            'products.gridzle.tag4': 'Offline',

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
            'company.href': 'https://buhane.com.tr/',

            // Contact
            'contact.tag': '// Get in Touch',
            'contact.title': "Let's Build Something <span class=\"gradient-text\">Amazing</span>",
            'contact.desc': 'Have an idea? Need a technology partner? Let\'s make it happen.',
            'contact.email': 'Email',
            'contact.website': 'Website',

            // Footer
            'footer.text': '\u00A9 2026 Ahmet Bütün. Crafted with passion & code.',
            'footer.buhane': 'Buhane',
        },
        tr: {
            // Navigation
            'nav.home': 'Ana Sayfa',
            'nav.about': 'Hakkımda',
            'nav.products': 'Seçili Çalışmalar',
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

            // Seçili çalışmalar
            'products.tag': '// Seçili Çalışmalar',
            'products.title': 'Geliştirdiğim <span class="gradient-text">Ürünler</span>',
            'products.desc': 'Buhane çatısı altında geliştirdiğim ürünlerden seçilmiş bir görünüm. Eksiksiz portföy şirket sitesinde tutulur.',
            'products.view': 'Ürünü incele',
            'products.full_note': 'Tüm Buhane ürünlerini mi arıyorsunuz? Yetkili şirket portföyüne göz atın.',
            'products.full_cta': 'Buhane portföyünün tamamını görün',
            'products.full_href': 'https://buhane.com.tr/tr/urunler/',
            'products.vynix.badge': 'Yaratıcı İş Akışları',
            'products.vynix.desc': 'Yapay zeka destekli metin, görsel, ses ve video iş akışları sunan çapraz platform uygulaması; çok modlu üretim akışıyla bu seçkide.',
            'products.vynix.tag1': 'Metin',
            'products.vynix.tag2': 'Görsel',
            'products.vynix.tag3': 'Ses',
            'products.vynix.tag4': 'Video',
            'products.moodjot.badge': 'Duygu & Günlük',
            'products.moodjot.desc': 'İsteğe bağlı fotoğraflar ve hatırlatıcılarla duygu girişleri ve günlük notları için odaklı bir kayıt akışı.',
            'products.moodjot.tag1': 'Duygu Girişleri',
            'products.moodjot.tag2': 'Günlük Notları',
            'products.moodjot.tag3': 'Fotoğraflar',
            'products.moodjot.tag4': 'Hatırlatıcılar',
            'products.u2m.badge': 'Web Aracı',
            'products.u2m.desc': 'Herkese açık API dokümantasyonu ve bağlantı istatistikleri sunan URL kısaltıcı; yalın ürün ve geliştirici yüzeyiyle bu seçkide.',
            'products.u2m.tag1': 'URL Kısaltma',
            'products.u2m.tag2': 'API Dokümanları',
            'products.u2m.tag3': 'Bağlantı İstatistikleri',
            'products.lastimo.badge': 'Geçen Süre Hatırlatıcısı',
            'products.lastimo.desc': 'Altı hazır takipçi; rutinleri, geçen süreyi yalın biçimde göstererek ve şimdiki zamanı kaydederek hatırlatır. Veriler gizlenebilir, geri yüklenebilir veya silinebilir.',
            'products.lastimo.tag1': 'Altı Hazır Takipçi',
            'products.lastimo.tag2': 'Geçen Süre',
            'products.lastimo.tag3': 'Şimdi Kaydet',
            'products.lastimo.tag4': 'Gizle & Geri Yükle',
            'products.swipeslip.badge': 'Mobil Oyun',
            'products.swipeslip.desc': 'Dikey ve yatay oynanış için tasarlanmış, 200 ilerlemeli seviyeye sahip bir tünel yönlendirme oyunu.',
            'products.swipeslip.tag1': 'Tünel Yönlendirme',
            'products.swipeslip.tag2': '200 Seviye',
            'products.swipeslip.tag3': 'Dikey',
            'products.swipeslip.tag4': 'Yatay',
            'products.gridzle.badge': 'Mantık Bulmacası',
            'products.gridzle.desc': 'Hücre yerleştirme ve değiştirme mekaniği, beş kademe, 250 seviye ve çevrimdışı öncelikli ilerleme sunan sayı odaklı bulmaca.',
            'products.gridzle.tag1': 'Sayı Odaklı',
            'products.gridzle.tag2': '250 Seviye',
            'products.gridzle.tag3': 'Beş Kademe',
            'products.gridzle.tag4': 'Çevrimdışı',

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
            'company.href': 'https://buhane.com.tr/tr/',

            // Contact
            'contact.tag': '// İletişim',
            'contact.title': 'Birlikte Harika Bir Şey <span class="gradient-text">Yaratalım</span>',
            'contact.desc': 'Bir fikriniz mi var? Teknoloji ortağına mı ihtiyacınız var? Hayata geçirelim.',
            'contact.email': 'E-posta',
            'contact.website': 'Web Sitesi',

            // Footer
            'footer.text': '\u00A9 2026 Ahmet Bütün. Tutku ve kodla üretildi.',
            'footer.buhane': 'Buhane',
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

        // data-i18n-href: localized, addressable destinations
        document.querySelectorAll('[data-i18n-href]').forEach(el => {
            const key = el.getAttribute('data-i18n-href');
            if (t[key] !== undefined) {
                el.setAttribute('href', t[key]);
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
