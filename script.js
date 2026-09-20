// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Fade-in on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    observer.observe(section);
});

// Animation des barres de compétences

document.addEventListener("DOMContentLoaded", () => {
    const progresses = document.querySelectorAll(".progress");

    progresses.forEach(bar => {
        const width = bar.getAttribute("data-width");
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
});

// Effet typing sur le sous-titre (sécurisé)
const subtitle = document.querySelector("#accueil h2");

if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = "";
    let i = 0;

    function typing() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typing, 50);
        }
    }

    typing();
}



// Reveal au scroll pour la page À propos
const revealElements = document.querySelectorAll("#apropos .timeline-item, #apropos .info-item, #apropos .intro");

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    revealObserver.observe(el);
});



// Typing effect sur le titre À propos
const aboutTitle = document.querySelector("#apropos h1");

if (aboutTitle) {
    const txt = aboutTitle.textContent;
    aboutTitle.textContent = "";
    let i = 0;

    function typeAbout() {
        if (i < txt.length) {
            aboutTitle.textContent += txt.charAt(i);
            i++;
            setTimeout(typeAbout, 60);
        }
    }

    typeAbout();
}
