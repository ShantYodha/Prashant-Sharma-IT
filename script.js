// Smooth reveal animations

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Navbar background effect

window.addEventListener('scroll', () => {

    const nav = document.querySelector('.navbar');

    if (window.scrollY > 50) {

        nav.style.background = "rgba(5,17,31,0.98)";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.35)";

    } else {

        nav.style.background = "rgba(5,17,31,0.90)";
        nav.style.boxShadow = "none";
    }

});

// Tech card hover animation enhancement

document.querySelectorAll('.tech-card').forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform = 'translateY(-10px) scale(1.03)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = 'translateY(0px) scale(1)';
    });

});

// Domain cards glow effect

document.querySelectorAll('.domain-card').forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.boxShadow =
            "0 10px 30px rgba(0,194,255,0.25)";
    });

    card.addEventListener('mouseleave', () => {

        card.style.boxShadow = "none";
    });

});

// Dynamic title rotation

const titles = [

    "Enterprise Technology Operations Leader",
    "Microsoft 365 Specialist",
    "Network Security Professional",
    "Digital Workplace Leader",
    "Cloud & Infrastructure Manager",
    "AI & Copilot Advocate"

];

let currentIndex = 0;

const heroTag = document.querySelector('.hero-tag');

if (heroTag) {

    setInterval(() => {

        currentIndex++;

        if (currentIndex >= titles.length) {
            currentIndex = 0;
        }

        heroTag.style.opacity = 0;

        setTimeout(() => {

            heroTag.textContent = titles[currentIndex];
            heroTag.style.opacity = 1;

        }, 300);

    }, 3500);

}
// Active navigation highlighting

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + current) {

            link.classList.add("active");
        }

    });

});
