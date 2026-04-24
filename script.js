const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));

// Active nav highlight
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

    // Progress bar
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
});

// Glow should follow mouse
const glow = document.querySelector('.glow');
document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX - 200 + 'px';
    glow.style.top = e.clientY - 200 + 'px';
});

// Hide logo if not in hero section
const hero = document.querySelector('.hero');
const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
    const heroBottom = hero.offsetTop + hero.offsetHeight;

    if (window.scrollY > heroBottom - 100) {
        logo.classList.add('hidden');
    } else {
        logo.classList.remove('hidden');
    }
});

// Modal
function openModal(src) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");

    modalImg.src = src;
    modal.classList.add("show");
}

function closeModal() {
    document.getElementById("imgModal").classList.remove("show");
}