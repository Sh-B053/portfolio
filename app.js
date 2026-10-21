
/*=========================
AOS Animation
=========================*/

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 80
    });
}

/*=========================
Typing Animation
=========================*/

if (typeof Typed !== "undefined" &&
    document.querySelector(".typing")) {

    new Typed(".typing", {
        strings: [
            "Web Designer",
            "Front-End Developer",
            "React Developer",
            "UI / UX Designer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1500,
        loop: true
    });
}

/*=========================
Mobile Menu
=========================*/

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

function toggleMenu() {
    if (nav) {
        nav.classList.toggle("active");
    }
}

if (menu && nav) {

    menu.addEventListener("click", toggleMenu);

    menu.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleMenu();
        }
    });

}

/*=========================
Close Mobile Menu
=========================*/

document.querySelectorAll("nav a").forEach(function (link) {

    link.addEventListener("click", function () {

        if (nav) {
            nav.classList.remove("active");
        }

    });

});

/*=========================
Sticky Header
=========================*/

const header = document.querySelector("header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background = "rgba(8,17,31,.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(15,23,42,.8)";
        header.style.boxShadow = "none";

    }

}

/*=========================
Scroll Progress
=========================*/

function updateScrollProgress() {

    const progressBar = document.getElementById("progress-bar");

    if (!progressBar) return;

    const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    progressBar.style.width = progress + "%";

}

/*=========================
Back To Top
=========================*/

const topBtn = document.getElementById("topBtn");

function updateTopButton() {

    if (!topBtn) return;

    topBtn.style.display = window.scrollY > 400
        ? "block"
        : "none";

}

if (topBtn) {

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/*=========================
Active Navigation Links
=========================*/

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul li a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

/*=========================
Scroll Events
=========================*/

function handleScroll() {

    updateHeader();
    updateScrollProgress();
    updateTopButton();
    updateActiveNav();

}

window.addEventListener("scroll", handleScroll, { passive: true });

/*=========================
Current Year
=========================*/

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.textContent =
        `© ${new Date().getFullYear()} Shimaa Bakri Ahmed. All Rights Reserved.`;

}

/*=========================
Initial Page State
=========================*/

handleScroll();

document.querySelectorAll(".project-description").forEach((description) => {
    const text = description.querySelector(".project-text");
    const button = description.querySelector(".read-more-btn");

    if (!text || !button) return;

    // Show the button only if the text exceeds 3 lines
    const isLong = text.scrollHeight > text.clientHeight + 1;

    if (!isLong) {
        button.style.display = "none";
        return;
    }

    button.addEventListener("click", () => {
        const isExpanded = text.classList.toggle("expanded");

        button.textContent = isExpanded ? "Read Less" : "Read More";
    });
});
