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
    threshold: 0.12
});

document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
});


/* =========================
   Navbar Scroll Effect
========================= */

window.addEventListener("scroll", () => {

    const nav = document.querySelector(".navbar");

    if (!nav) return;

    if (window.scrollY > 40) {
        nav.style.background = "rgba(255,255,255,0.92)";
        nav.style.boxShadow = "0 10px 30px rgba(20,17,15,0.07)";
    } else {
        nav.style.background = "rgba(255,255,255,0.72)";
        nav.style.boxShadow = "none";
    }

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

            heroTag.textContent = titles[currentIndex];
            heroTag.style.opacity = 1;

        }, 300);

    }, 3500);

}


/* =========================
   Active Navigation Highlight
========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#navMenu a");

function updateActiveMenu() {

    let currentSection = "";

    sections.forEach((section) => {

        const top = section.offsetTop - 220;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveMenu);
window.addEventListener("load", updateActiveMenu);

updateActiveMenu();


/* =========================
   Mobile Hamburger Menu
========================= */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    document.querySelectorAll("#navMenu a").forEach((link) => {

        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
        });

    });

}


/* =========================
   Technology Command Center
========================= */

const racks       = document.querySelectorAll(".rack");
const panels      = document.querySelectorAll(".screen-panel");
const screenLabel = document.getElementById("screenLabel");

function showScreen(key, labelText) {

    racks.forEach((r) => {
        const on = r.dataset.screen === key;
        r.classList.toggle("is-active", on);
        r.setAttribute("aria-selected", on ? "true" : "false");
    });

    panels.forEach((p) => {
        p.classList.toggle("is-active", p.dataset.panel === key);
    });

    if (screenLabel && labelText) {
        screenLabel.textContent = labelText;
    }

}

racks.forEach((rack) => {

    rack.addEventListener("click", () => {

        const key   = rack.dataset.screen;
        const label = rack.querySelector(".rack-title").textContent;

        showScreen(key, label);

    });

});
