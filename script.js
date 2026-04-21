const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        navLinks?.classList.remove("open");
        menuToggle?.setAttribute("aria-expanded", "false");
    });
});

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-link-item");

const setActiveLink = () => {
    let current = "home";

    sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
            current = section.id;
        }
    });

    navItems.forEach((item) => {
        item.classList.toggle("active", item.getAttribute("href") === `#${current}`);
    });
};

window.addEventListener("scroll", setActiveLink, { passive: true });
setActiveLink();

const revealItems = document.querySelectorAll(
    ".stat-card, .server-card, .plugin-card, .public-card, .skill-category, .contact-card"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    revealItems.forEach((item) => {
        item.classList.add("reveal");
        observer.observe(item);
    });
} else {
    revealItems.forEach((item) => item.classList.add("visible"));
}

const copyDiscord = document.querySelector(".copy-discord");

if (copyDiscord) {
    copyDiscord.addEventListener("click", async () => {
        const value = copyDiscord.dataset.copy;
        const label = copyDiscord.querySelector("strong");
        const original = label.textContent;

        try {
            await navigator.clipboard.writeText(value);
            label.textContent = "Copied: " + value;
        } catch {
            label.textContent = value;
        }

        window.setTimeout(() => {
            label.textContent = original;
        }, 1800);
    });
}

