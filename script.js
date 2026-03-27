// ============================================
// AHMET BUTUN - PREMIUM PORTFOLIO SCRIPTS
// ============================================

(function () {
    'use strict';

    // --- Particle System ---
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;
    let animFrameId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.hue = Math.random() > 0.5 ? 260 : 330; // Purple or Pink
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Mouse attraction
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 200) {
                this.x += dx * 0.002;
                this.y += dy * 0.002;
                this.opacity = Math.min(0.8, this.opacity + 0.01);
            }

            // Wrap around
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${this.hue}, 70%, 70%, ${this.opacity})`;
            ctx.fill();
        }
    }

    function initParticles() {
        const count = Math.min(80, Math.floor(window.innerWidth * 0.05));
        particles = Array.from({ length: count }, () => new Particle());
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(139, 92, 246, ${0.08 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawConnections();
        animFrameId = requestAnimationFrame(animateParticles);
    }

    // --- Cursor Glow ---
    const cursorGlow = document.getElementById('cursorGlow');
    let glowX = 0, glowY = 0, currentGlowX = 0, currentGlowY = 0;

    function updateCursorGlow() {
        currentGlowX += (glowX - currentGlowX) * 0.08;
        currentGlowY += (glowY - currentGlowY) * 0.08;
        cursorGlow.style.transform = `translate(${currentGlowX - 300}px, ${currentGlowY - 300}px)`;
        requestAnimationFrame(updateCursorGlow);
    }

    // --- Navbar ---
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    function handleScroll() {
        // Navbar background
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide scroll indicator when scrolled down
        if (scrollIndicator) {
            if (window.scrollY > 100) {
                scrollIndicator.classList.add('hidden');
            } else {
                scrollIndicator.classList.remove('hidden');
            }
        }

        // Active section
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 200;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // --- Mobile Menu ---
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    }

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });

    // --- Scroll Animations (Intersection Observer) ---
    function initScrollAnimations() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        // Stagger delay based on position
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 80);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    // --- Counter Animation ---
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = parseInt(entry.target.getAttribute('data-target'));
                        animateValue(entry.target, 0, target, 2000);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        counters.forEach(counter => observer.observe(counter));
    }

    function animateValue(element, start, end, duration) {
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out expo
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + (end - start) * eased);

            element.textContent = current >= 1000
                ? current.toLocaleString()
                : current;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    // --- Year Counter in Hero ---
    function animateYearCounter() {
        const years = [2001, 2005, 2010, 2015, 2018, 2021, 2024, 2026];
        let index = 0;

        function cycleYear() {
            const yearEl = document.getElementById('yearCounter');
            if (!yearEl) return;

            yearEl.style.transition = 'opacity 0.3s, transform 0.3s';
            yearEl.style.opacity = '0';
            yearEl.style.transform = 'translateY(-10px)';

            setTimeout(() => {
                const el = document.getElementById('yearCounter');
                if (!el) return;
                el.textContent = years[index];
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                index = (index + 1) % years.length;
            }, 300);
        }

        setInterval(cycleYear, 2500);
    }

    // --- 3D Tilt Effect on Product Cards ---
    function initTiltEffect() {
        const cards = document.querySelectorAll('[data-tilt]');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / centerY * -4;
                const rotateY = (x - centerX) / centerX * 4;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
                card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            });

            card.addEventListener('mouseenter', () => {
                card.style.transition = 'transform 0.1s linear';
            });
        });
    }

    // --- Smooth scroll for anchor links ---
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // --- Magnetic Effect on Buttons ---
    function initMagneticButtons() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-glow');

        buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
                btn.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
            });

            btn.addEventListener('mouseenter', () => {
                btn.style.transition = 'transform 0.08s linear';
            });
        });
    }

    // --- Text Reveal Animation ---
    function initTextReveal() {
        const title = document.querySelector('.hero-title');
        if (!title) return;

        const lines = title.querySelectorAll('.title-line');
        lines.forEach((line, i) => {
            line.style.opacity = '0';
            line.style.transform = 'translateY(30px)';
            line.style.transition = `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.15 + 0.3}s`;

            setTimeout(() => {
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
            }, 100);
        });
    }

    // --- Typing Effect for Section Tags ---
    function initTypingEffect() {
        const tags = document.querySelectorAll('.section-tag');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const tag = entry.target;
                    const text = tag.textContent;
                    tag.textContent = '';
                    tag.style.borderRight = '2px solid var(--accent-1)';

                    let i = 0;
                    function typeChar() {
                        if (i < text.length) {
                            tag.textContent += text[i];
                            i++;
                            setTimeout(typeChar, 40);
                        } else {
                            setTimeout(() => {
                                tag.style.borderRight = 'none';
                            }, 500);
                        }
                    }
                    typeChar();
                    observer.unobserve(tag);
                }
            });
        }, { threshold: 0.5 });

        tags.forEach(tag => observer.observe(tag));
    }

    // --- Initialize Everything ---
    function init() {
        resizeCanvas();
        initParticles();
        animateParticles();
        updateCursorGlow();
        initScrollAnimations();
        animateCounters();
        animateYearCounter();
        initTiltEffect();
        initSmoothScroll();
        initMagneticButtons();
        initTextReveal();
        initTypingEffect();

        // Events
        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticles();
        });

        window.addEventListener('scroll', handleScroll, { passive: true });

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            glowX = e.clientX;
            glowY = e.clientY;
        });

        mobileToggle.addEventListener('click', toggleMobileMenu);

        // Initial scroll check
        handleScroll();
    }

    // Start when DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
