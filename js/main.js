document.addEventListener('DOMContentLoaded', () => {

    // === Mobile Menu Toggle ===
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('.main-nav');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // === Counter Animation on Scroll ===
    const counters = document.querySelectorAll('.counter');

    const runCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const speed = 200;
        const inc = target / speed;

        const updateCount = () => {
            const count = +counter.innerText.replace('+', '');
            if (count < target) {
                counter.innerText = Math.ceil(count + inc) + '+';
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target + '+';
            }
        };
        updateCount();
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.8
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // === Consolidated Social Media Button ===
    const socialToggle = document.querySelector('.social-toggle-btn');
    const socialContainer = document.querySelector('.social-float-container');

    if (socialToggle && socialContainer) {
        socialToggle.addEventListener('click', (e) => {
            e.preventDefault();
            socialContainer.classList.toggle('active');
        });
    }

    // === Gallery Filtering from URL ===
    const galleryGrid = document.querySelector('.gallery-grid');

    if (galleryGrid) {
        const urlParams = new URLSearchParams(window.location.search);
        const filter = urlParams.get('filter');

        if (filter) {
            const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
            galleryItems.forEach(item => {
                if (item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    }

    // === Scroll to Top Button Logic ===
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    if (scrollToTopBtn) {

        const checkScroll = () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        };

        checkScroll();

        window.addEventListener('scroll', checkScroll);

        scrollToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});