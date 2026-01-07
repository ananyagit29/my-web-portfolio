document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // 2. Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // 3. Typing Effect with smooth transitions
    const typingText = document.querySelector('.typing-text');
    const roles = ["Full Stack Developer", "AI/ML Enthusiast", "Engineer","Passionate Learner","Motivated Student"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2500; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 600; // Pause before new word
        }

        setTimeout(type, typeSpeed);
    }

    type();

    // 4. Scroll Animations (Intersection Observer) - Enhanced
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered animation delay with easing
                const delay = Math.min(index * 120, 500);
                setTimeout(() => {
                    entry.target.classList.add('show');
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }, delay);
                
                // Animate Progress Bars if this is the skills section
                if (entry.target.classList.contains('skill-category')) {
                    const progressBars = entry.target.querySelectorAll('.progress');
                    progressBars.forEach((bar, barIndex) => {
                        const width = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.width = width;
                        }, barIndex * 150);
                    });
                }
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));

    // 5. Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check local storage
    if (localStorage.getItem('theme') !== 'dark') {
        body.classList.add('light-mode');
        icon.classList.replace('fa-sun', 'fa-moon');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    // 6. Scroll Progress Bar
    const scrollProgress = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;
    }, { passive: true });

    // 7. Smooth Scroll Behavior Enhancement
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

    // 8. Add ripple effect on button clicks
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (e.button === 0) { // Left click only
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                // Add ripple animation if style exists
                this.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            }
        });
    });

    // 9. Navbar transparency change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        }
    }, { passive: true });
});