// ===== PRELOADER =====
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('hide');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 600);
});

// ===== AOS INIT =====
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 600,
            easing: 'ease-out',
            once: true,
            offset: 50
        });
    }
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== BSc CERT REQUEST (Email) =====
document.addEventListener('DOMContentLoaded', function() {
    const bscLink = document.getElementById('bsc-cert-link');
    if (bscLink) {
        bscLink.addEventListener('click', function(e) {
            e.preventDefault();
            const subject = 'BSc Certificate Request';
            const body = 'Hello Rotimi,\n\nI would like to request a copy of your BSc certificate for verification.\n\nPlease let me know how you would like to proceed.';
            window.location.href =
                `mailto:omoseworotimi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }
});

// ===== ACTIVE NAV LINK ON SCROLL =====
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--secondary)' : '';
        });
    });
});

// ===== RUN COUNTER ON LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    if (typeof animateCounters !== 'undefined') {
        animateCounters();
    }
});