document.addEventListener("DOMContentLoaded", () => {
    // 1. Navigation & Hamburger Menu
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navLinksItems = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("toggle");
    });

    // Close mobile menu when a link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.classList.remove("toggle");
        });
    });

    // 2. Typing Effect
    const typingText = document.querySelector(".typing-text");
    const roles = ["Full-Stack Developer", "Cybersecurity Enthusiast", "UI/UX Designer", "AI Engineer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500; // Pause before new word
        }

        setTimeout(type, typeSpeed);
    }
    
    // Start typing effect
    type();

    // 3. Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                
                // Specific animation for skill bars
                if (entry.target.classList.contains("skill-category")) {
                    const progressBars = entry.target.querySelectorAll(".progress");
                    progressBars.forEach(bar => {
                        const width = bar.getAttribute("data-width");
                        bar.style.width = width;
                    });
                }
                
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(el => observer.observe(el));

    // 4. Active Navigation Link on Scroll
    const sections = document.querySelectorAll("section");
    
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute("id");
            }
        });

        navLinksItems.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // 5. Form Validation
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.style.color = "red";
            formMessage.textContent = "Please fill in all fields.";
            return;
        }

        if (!validateEmail(email)) {
            formMessage.style.color = "red";
            formMessage.textContent = "Please enter a valid email address.";
            return;
        }

        // Simulate success (No backend)
        formMessage.style.color = "#38bdf8";
        formMessage.textContent = "Message sent successfully! (Demo mode)";
        contactForm.reset();
        
        setTimeout(() => {
            formMessage.textContent = "";
        }, 3000);
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});