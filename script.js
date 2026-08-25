(function () {
    'use strict';

    document.documentElement.classList.add('js');

    const navbar = document.getElementById('navbar');
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const sections = Array.from(document.querySelectorAll('section[id]'));

    function setMobileMenu(open) {
        if (!mobileMenu || !mobileToggle) return;

        mobileMenu.classList.toggle('active', open);
        mobileMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
        mobileToggle.classList.toggle('active', open);
        mobileToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.classList.toggle('menu-open', open);
    }

    function updateScrollState() {
        const y = window.scrollY || window.pageYOffset;

        if (navbar) {
            navbar.classList.toggle('scrolled', y > 24);
        }

        const marker = y + Math.min(window.innerHeight * 0.36, 320);
        let activeId = sections[0] ? sections[0].id : '';

        sections.forEach((section) => {
            if (marker >= section.offsetTop) {
                activeId = section.id;
            }
        });

        navLinks.forEach((link) => {
            link.classList.toggle('active', link.dataset.section === activeId);
        });
    }

    function initAnchors() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', (event) => {
                const href = anchor.getAttribute('href');
                if (!href || href === '#') return;

                const target = document.querySelector(href);
                if (!target) return;

                event.preventDefault();
                setMobileMenu(false);
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    function initMobileMenu() {
        if (!mobileToggle || !mobileMenu) return;

        mobileToggle.addEventListener('click', () => {
            setMobileMenu(!mobileMenu.classList.contains('active'));
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                setMobileMenu(false);
            }
        });
    }

    function initReveal() {
        const revealItems = Array.from(document.querySelectorAll('.animate-on-scroll'));

        if (!('IntersectionObserver' in window)) {
            revealItems.forEach((item) => item.classList.add('visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -48px 0px'
        });

        revealItems.forEach((item) => observer.observe(item));
    }

    function init() {
        initAnchors();
        initMobileMenu();
        initReveal();
        updateScrollState();

        window.addEventListener('scroll', updateScrollState, { passive: true });
        window.addEventListener('resize', updateScrollState);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
