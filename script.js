const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Mouse glow movement
const glow = document.querySelector('.glow');
document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX - 200 + 'px';
    glow.style.top = e.clientY - 200 + 'px';
});