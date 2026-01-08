# 🌐 Ananya Parbat — Modern Web Portfolio

A modern, responsive, single-page portfolio built with semantic HTML5, clean CSS (glassmorphism + gradients) and vanilla JavaScript. This project highlights polished UI/UX, performant animations, and a mobile-first, accessibility-aware design.

---

## ✨ Highlights
- Responsive single-page layout with smooth navigation
- Dark / Light theme toggle with localStorage persistence
- Typing effect, scroll-triggered animations, and staggered reveals
- Glassmorphism UI, gradient headings and polished micro-interactions
- Animated skill progress bars with shimmer overlay
- Contact form powered by Formspree
- Mobile-first hamburger navigation and scroll progress indicator

---

## 🎨 Color System & Themes

Dark Mode (default)
- Primary: #00d4ff (Vibrant Cyan)
- Secondary: #a78bfa (Soft Purple)
- Accent: #f472b6 (Pink)
- Background: deep purple-blue gradient (from #0a0e27 → #1a0a3e)
- CTA Accent: #10b981 (Green)

Light Mode
- Primary: #0099cc (Ocean Blue)
- Secondary: #7c3aed (Deep Purple)
- Accent: #ec4899 (Hot Pink)
- Background: soft lavender → pink gradient

Theme colors are driven by CSS custom properties for easy customization.

---

## 🎛️ Core Features & Interactions

- Navigation
  - Animated underline on links
  - Hamburger for mobile with smooth open/close
  - Logo hover glow and navbar blur on scroll

- Hero
  - Typing roles animation and radial gradient backdrop
  - CTA buttons with shine + ripple interactions
  - Profile card with gradient border and glass effect

- Animations
  - IntersectionObserver-based reveal: fade + slide + scale
  - Debounced scroll handlers with passive listeners
  - Skill bars: animated width + shimmer overlay
  - Timeline: pulsing dots + animated gradient line

- Micro-interactions
  - Button elevation, glow and click ripple
  - Card lift and shadow transitions
  - Social icon scale with circular background

---

## 🚀 Performance & Accessibility

- Hardware-accelerated animations (transform & opacity)
- will-change hints and optimized transition easing (cubic-bezier)
- Efficient IntersectionObserver thresholds and rootMargin tuning
- Reduced blur/shadow on small screens for performance
- Semantic HTML, visible focus states and sufficient color contrast
- Graceful fallbacks for older browsers (gradient/blur fallbacks)

---

## 📱 Responsive Strategy

Breakpoints:
- Desktop: 1024px+
- Tablet: 768–1023px
- Mobile: 480–767px
- Small mobile: <480px

Mobile-first CSS, touch-friendly target sizes, adaptive typography and flexible grid layouts ensure consistent experience across devices.

---

## 🧩 Project Structure
- index.html — single-page markup
- style.css — main styling, variables and responsive rules
- script.js — theme, animations, observers and interactive behavior
- assets/ — profile image and other media
- README.md — project documentation

---

## ⚙️ Installation & Local Development

1. Clone the repo:
   git clone <your-repo-url>
2. Open the project folder in VS Code (Windows):
   - File → Open Folder → select my-web-portfolio
3. Serve or open index.html in your browser for a live preview.
   - Quick preview: right-click index.html → Open with Live Server (if installed)
   - Or double-click index.html to open in your default browser

---

## 🔧 Customization Tips

- Colors: edit CSS variables in :root for theme-wide changes
- Fonts: update Google Fonts links in index.html to swap typography
- Animations: modify timing and easing values in style.css and script.js
- Add projects: replicate `.project-card` markup inside the Projects grid

---

## 📝 How to Use (End User)
- Toggle theme with the sun/moon icon — preferences persist
- Click nav links for smooth scroll to sections
- Open the hamburger menu on mobile to navigate
- Submit the contact form (Formspree endpoint configured)

---

## 🙏 Credits & Acknowledgements
- Built with: HTML5, CSS3, Vanilla JavaScript
- Icons: Font Awesome
- Fonts: Google Fonts (Inter, JetBrains Mono)
- Contact handling: Formspree

---

## 👤 Author
Ananya Parbat  
Full Stack / AI/ML Enthusiast — focused on building resilient, modern web experiences.

GitHub: https://github.com/ananyagit29  
LinkedIn: https://www.linkedin.com/in/ananya-parbat/

---

Thank you for checking out this portfolio — feedback and improvements are welcome. 🚀
