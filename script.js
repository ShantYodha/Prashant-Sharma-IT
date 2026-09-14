document.documentElement.classList.add("js-enabled");

/* =========================
   Scroll Reveal Animation
========================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
});


/* =========================
   Navbar Scroll Effect
========================= */

window.addEventListener("scroll", () => {

    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(5,17,31,0.98)";
        nav.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.35)";

    } else {

        nav.style.background = "rgba(5,17,31,0.90)";
        nav.style.boxShadow = "none";
    }

});


/* =========================
   Hover Effects
========================= */

document.querySelectorAll(".tech-card").forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px) scale(1)";
    });

});

document.querySelectorAll(".domain-card").forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
            "0 10px 30px rgba(0,194,255,0.25)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";
    });

});


/* =========================
   Hero Tag Rotation
========================= */

const titles = [

    "Driving Secure, Scalable & Intelligent Digital Workplaces",
    "Microsoft 365 Leadership",
    "Enterprise Technology Operations",
    "Network Security & Connectivity",
    "Digital Workplace Transformation",
    "AI & Copilot Enablement"

];

let currentIndex = 0;

const heroTag = document.querySelector(".hero-tag");

if (heroTag) {

    setInterval(() => {

        currentIndex++;

        if (currentIndex >= titles.length) {
            currentIndex = 0;
        }

        heroTag.style.opacity = 0;

        setTimeout(() => {

            heroTag.textContent =
                titles[currentIndex];

            heroTag.style.opacity = 1;

        }, 300);

    }, 3500);

}


/* =========================
   Active Navigation Highlight
========================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar a");

function updateActiveMenu() {

    let currentSection = "";

    sections.forEach((section) => {

        const top =
            section.offsetTop - 150;

        const height =
            section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < top + height
        ) {
            currentSection =
                section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveMenu
);

window.addEventListener(
    "load",
    updateActiveMenu
);
