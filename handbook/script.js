// ================================
// AI Programming Tools Handbook
// Interactive Functionality
// ================================

// ========== THEME MANAGEMENT ==========
(function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const html = document.documentElement;

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);

    // Theme toggle event
    themeToggle?.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcons(newTheme);
    });

    function updateThemeIcons(theme) {
        if (theme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }
})();

// ========== MOBILE MENU ==========
(function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = mobileMenu?.querySelectorAll('.nav__link');

    // Toggle menu
    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu?.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks?.forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            mobileMenu?.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger?.contains(e.target) && !mobileMenu?.contains(e.target)) {
            hamburger?.classList.remove('active');
            mobileMenu?.classList.remove('active');
        }
    });
})();

// ========== SIDEBAR TOGGLE (Mobile) ==========
(function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarLinks = sidebar?.querySelectorAll('a');

    // Toggle sidebar
    sidebarToggle?.addEventListener('click', () => {
        sidebar?.classList.toggle('open');
        sidebarOverlay?.classList.toggle('active');
    });

    // Close sidebar when clicking overlay
    sidebarOverlay?.addEventListener('click', () => {
        sidebar?.classList.remove('open');
        sidebarOverlay?.classList.remove('active');
    });

    // Close sidebar when clicking a link (mobile)
    sidebarLinks?.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 1024) {
                sidebar?.classList.remove('open');
                sidebarOverlay?.classList.remove('active');
            }
        });
    });
})();

// ========== SIDEBAR SCROLL SPY ==========
(function initScrollSpy() {
    const sections = document.querySelectorAll('.chapter-section, .content-block[id]');
    const sidebarLinks = document.querySelectorAll('.sidebar__link, .sidebar__sublink');

    if (sections.length === 0 || sidebarLinks.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                // Remove active class from all links
                sidebarLinks.forEach(link => link.classList.remove('active'));

                // Add active class to matching link
                const activeLink = document.querySelector(`.sidebar a[href="#${id}"]`);
                activeLink?.classList.add('active');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
})();

// ========== SMOOTH SCROLLING ==========
(function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                // Calculate offset for fixed nav
                const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL without jumping
                history.pushState(null, null, href);
            }
        });
    });
})();

// ========== SCROLL ANIMATIONS ==========
(function initScrollAnimations() {
    const scrollElements = document.querySelectorAll('.scroll-reveal');

    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('revealed');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 85)) {
                displayScrollElement(el);
            }
        });
    };

    // Initial check
    handleScrollAnimation();

    // Throttled scroll event
    let throttleTimer;
    const throttle = (callback, time) => {
        if (throttleTimer) return;

        throttleTimer = true;

        setTimeout(() => {
            callback();
            throttleTimer = false;
        }, time);
    };

    window.addEventListener('scroll', () => {
        throttle(handleScrollAnimation, 100);
    });
})();

// ========== CODE COPY FUNCTIONALITY ==========
(function initCodeCopy() {
    const copyButtons = document.querySelectorAll('.code-block__copy');

    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const codeId = button.getAttribute('data-code');
            const codeElement = document.getElementById(codeId);

            if (!codeElement) return;

            const code = codeElement.textContent;

            try {
                await navigator.clipboard.writeText(code);

                // Visual feedback
                const originalText = button.textContent;
                button.textContent = '已复制!';
                button.style.background = 'var(--color-primary)';
                button.style.color = 'white';

                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                    button.style.color = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy code:', err);
                button.textContent = '复制失败';

                setTimeout(() => {
                    button.textContent = '复制';
                }, 2000);
            }
        });
    });
})();

// ========== NAVBAR SCROLL EFFECT ==========
(function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
})();

// ========== PERFORMANCE OPTIMIZATION ==========
// Add loading="lazy" to images if not already set
(function optimizeImages() {
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
})();

// ========== ACCESSIBILITY ENHANCEMENTS ==========
(function enhanceAccessibility() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#tools';
    skipLink.textContent = '跳转到主内容';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-primary);
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    z-index: 1000;
  `;

    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });

    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    // Ensure all interactive elements have appropriate ARIA labels
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
            const text = button.textContent.trim();
            if (text) {
                button.setAttribute('aria-label', text);
            }
        }
    });
})();

// ========== CONSOLE GREETING ==========
console.log('%c🚀 AI 编程工具实战手册', 'color: #1E40AF; font-size: 24px; font-weight: bold;');
console.log('%c欢迎来到 AI 编程的世界！', 'color: #06B6D4; font-size: 14px;');
console.log('%cGitHub: https://github.com/ai-coding-handbook', 'color: #9333EA; font-size: 12px;');
