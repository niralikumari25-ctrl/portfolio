// Highlight the nav link of the section currently on screen
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));