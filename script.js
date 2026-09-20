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
const progresses = document.querySelectorAll(".progress");

progresses.forEach(bar => {
    const width = bar.getAttribute("data-width");
    setTimeout(() => {
        bar.style.width = width;
    }, 300);
});
