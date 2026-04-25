const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const sceneWindow = document.querySelector(".scene-window");
const counters = document.querySelectorAll(".counter");

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
const navItems = document.querySelectorAll('.nav-link-item[href^="#"]');

const setActiveLink = () => {
    if (!sections.length || !navItems.length) {
        return;
    }

    let current = sections[0].id;
    const activationLine = window.innerHeight * 0.38;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= activationLine && rect.bottom > 90) {
            current = section.id;
        }
    });

    const isAtPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (isAtPageBottom) {
        current = sections[sections.length - 1].id;
    }

    navItems.forEach((item) => {
        item.classList.toggle("active", item.getAttribute("href") === `#${current}`);
    });
};

window.addEventListener("scroll", setActiveLink, { passive: true });
setActiveLink();

const revealItems = document.querySelectorAll(
    ".stat-card, .service-card, .server-card, .highlight-card, .public-card, .skill-category, .contact-card, .timeline-panel"
);
const revealGroups = document.querySelectorAll(".reveal-group");

const startCounter = (element) => {
    if (element.dataset.counted === "true") {
        return;
    }

    element.dataset.counted = "true";
    const target = Number(element.dataset.target || "0");
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = String(Math.round(target * eased));

        if (progress < 1) {
            window.requestAnimationFrame(tick);
        }
    };

    window.requestAnimationFrame(tick);
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");

                    if (entry.target.classList.contains("server-panel")) {
                        counters.forEach(startCounter);
                    }

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

    revealGroups.forEach((group) => {
        observer.observe(group);
    });

    const serverPanel = document.querySelector(".server-panel");
    if (serverPanel) {
        observer.observe(serverPanel);
    }
} else {
    revealItems.forEach((item) => item.classList.add("visible"));
    revealGroups.forEach((group) => group.classList.add("visible"));
    counters.forEach(startCounter);
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

if (sceneWindow) {
    const resetScene = () => {
        sceneWindow.style.transform = "";
    };

    sceneWindow.addEventListener("mousemove", (event) => {
        const rect = sceneWindow.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        const rotateY = x * 10;
        const rotateX = y * -8;
        sceneWindow.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    sceneWindow.addEventListener("mouseleave", resetScene);
}
