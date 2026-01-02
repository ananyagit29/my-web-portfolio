# 🌐 My Web Portfolio

A modern, responsive, and interactive personal portfolio website built using **HTML5, CSS3, and Vanilla JavaScript**.  
This project showcases my profile, skills, experience, projects, and contact information with a strong focus on **UI/UX, animations, and clean design patterns**.

---

## 🔥 Live Features Overview

- Responsive single-page layout
- Dark / Light mode toggle with persistence
- Smooth scroll-based animations
- Typing text animation for roles
- Glassmorphism UI cards
- Animated skill progress bars
- Scroll progress indicator
- Mobile-friendly hamburger navigation
- Modern gradient typography & hover effects

---

## 🧱 Tech Stack Used

- **HTML5** – Semantic layout & structure  
- **CSS3** – Advanced styling, animations, responsive design  
- **JavaScript (ES6+)** – Interactivity, animations, DOM logic  
- **Font Awesome** – Icons  
- **Google Fonts** – Inter & JetBrains Mono  
- **Formspree** – Contact form handling  

---

## 🎨 Design & Styling Techniques

### 🎯 Color Scheme (CSS Variables)
The entire theme is controlled using CSS custom properties for easy scalability:

**Dark Mode**
- Background: `#0f172a`
- Primary Accent: `#38bdf8`
- Secondary Accent: `#818cf8`
- Text: `#e2e8f0`
- Glass Background: `rgba(30, 41, 59, 0.7)`

**Light Mode**
- Background: `#f8fafc`
- Primary Accent: `#0284c7`
- Secondary Accent: `#4f46e5`
- Text: `#334155`
- Glass Background: `rgba(255, 255, 255, 0.7)`

👉 Theme switches dynamically using CSS variables and JavaScript with `localStorage`.

---

### 🧊 Glassmorphism UI
Reusable `.glass` class:
- `backdrop-filter: blur(12px)`
- Semi-transparent backgrounds
- Subtle borders and shadows

Used in:
- Cards
- Project blocks
- Skills section
- Contact form

---

### 🌈 Gradient Text Animation
Section headings use animated gradient text:

- Linear gradient background
- `background-clip: text`
- Infinite gradient animation using keyframes

Creates a modern, eye-catching section title effect.

---

## ✨ Animations & Transitions

### Scroll Animations
- Implemented using **Intersection Observer API**
- Elements fade + slide into view (`.hidden → .show`)
- Staggered animation delays

### Typing Effect
- Dynamic typing & deleting animation for multiple roles
- Fully controlled via JavaScript timing logic

### Hover Effects
- Button lift & shadow effects
- Icon hover transforms
- Card elevation on hover
- Animated button shine effect using pseudo-elements

---

## 📐 Layout & Structure

### Layout System
- Flexbox for alignment
- CSS Grid for responsive cards and sections
- Auto-fit grids for scalability

### Sections Included
- Hero
- About
- Education
- Experience (Timeline layout)
- Skills (Animated bars)
- Certifications
- Projects
- Contact
- Footer

---

## 📊 Skills Progress Bars
- Animated skill bars
- Triggered only when section enters viewport
- Smooth width transitions using CSS + JS

---

## 📱 Responsive Design

Fully responsive across:
- Desktop
- Tablet
- Mobile

Responsive techniques:
- Media queries (`1024px`, `768px`, `480px`)
- Mobile navigation drawer
- Adaptive typography
- Stack-based layouts on small screens

---

## 🧭 Navigation & UX Enhancements

- Fixed navbar with blur effect
- Scroll progress indicator at top
- Smooth scrolling behavior
- Auto-close mobile menu on link click

---

## 📨 Contact Form

- Floating label inputs
- Clean validation styling
- Integrated with **Formspree**
- Glassmorphic form container


## 👤 Author

**Atharv Bowlekar**
Full Stack Developer | AI/ML Enthusiast | Engineer

* GitHub: [https://github.com/git-atharvb](https://github.com/git-atharvb)
* LinkedIn: [https://linkedin.com/in/abowlekar](https://linkedin.com/in/abowlekar)

---

⭐ If you like this project, consider starring the repository!
