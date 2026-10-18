// ===== EDIT THESE =====
const CONFIG = {
  name: "Yatharth Chaudhary",
  github: "https://github.com/yatharthJhero",
  repo: "" // paste your repository URL here once it exists
};
// ======================

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const root = document.documentElement;

// 1. Fill the page from CONFIG so changes happen in one place
$$("[data-name]").forEach((el) => (el.textContent = CONFIG.name));
$$("[data-github]").forEach((el) => (el.href = CONFIG.github));
$("#initials").textContent = CONFIG.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
document.title = `${CONFIG.name} | DearDev Developer Card`;
const repoBtn = $("#repoBtn");
if (CONFIG.repo) {
  repoBtn.href = CONFIG.repo;
  repoBtn.target = "_blank";
  repoBtn.rel = "noopener";
  repoBtn.textContent = "View repository";
}

// 2. Light/dark theme toggle (remembered with localStorage)
const themeBtn = $("#themeBtn");
function setTheme(theme, save) {
  root.dataset.theme = theme;
  themeBtn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
  if (save) { try { localStorage.setItem("theme", theme); } catch (e) {} }
}
setTheme(root.dataset.theme, false);
themeBtn.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark", true));

// 3. Mobile menu
const menuBtn = $("#menuBtn");
const links = $("#links");
function toggleMenu(open) {
  links.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
menuBtn.addEventListener("click", () => toggleMenu(!links.classList.contains("open")));
links.addEventListener("click", (e) => { if (e.target.closest("a")) toggleMenu(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggleMenu(false); });

// 4. Greeting changer
const greetings = ["Hello, world", "Namaste", "Hola", "Bonjour", "Hallo", "Ciao"];
let g = 0;
$("#greetBtn").addEventListener("click", () => {
  g = (g + 1) % greetings.length;
  $("#greeting").textContent = greetings[g];
});

// 5. Skill cards: click to reveal, click again to hide
const SKILLS = {
  HTML: "Practising semantic structure: headings, lists, links, buttons and landmarks like <header>, <main> and <footer>. This page is my first full HTML layout.",
  CSS: "Learning Flexbox and Grid, CSS variables for the light/dark theme, and media queries so the layout works from phone to laptop.",
  JavaScript: "Practising events and the DOM: listening for clicks, changing text and toggling classes. The theme toggle and skill cards on this page are my first examples.",
  Git: "Learning the basic loop of git status, add and commit, and why small commits with clear messages make a project's history easier to follow.",
  GitHub: "Getting comfortable with repositories, READMEs, pushing code and pull requests so other people can review my work."
};
const chips = $$(".chip");
const panel = $("#skillPanel");
chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const wasOpen = chip.getAttribute("aria-expanded") === "true";
    chips.forEach((c) => c.setAttribute("aria-expanded", "false"));
    panel.hidden = wasOpen;
    if (!wasOpen) {
      chip.setAttribute("aria-expanded", "true");
      $("#skillTitle").textContent = chip.dataset.skill;
      $("#skillText").textContent = SKILLS[chip.dataset.skill];
    }
  });
});

// 6. Copy a short intro message
$("#copyBtn").addEventListener("click", async () => {
  const msg = `Hi! I'm ${CONFIG.name}, a DearDev member learning HTML, CSS, JavaScript, Git and GitHub. Say hi: ${CONFIG.github}`;
  try {
    await navigator.clipboard.writeText(msg);
  } catch (e) {
    const box = document.createElement("textarea");
    box.value = msg;
    document.body.append(box);
    box.select();
    document.execCommand("copy");
    box.remove();
  }
  $("#copyMsg").textContent = "Copied to clipboard";
  setTimeout(() => ($("#copyMsg").textContent = ""), 2500);
});

// 7. ID card tilts toward the pointer (skipped on touch and for reduced motion)
const card = $("#idcard");
if (matchMedia("(hover:hover) and (prefers-reduced-motion:no-preference)").matches) {
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--ry", ((e.clientX - r.left) / r.width - 0.5) * 10 + "deg");
    card.style.setProperty("--rx", (0.5 - (e.clientY - r.top) / r.height) * 10 + "deg");
  });
  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  });
}

// 8. Code lines type in when the panel scrolls into view
const codeBox = $("#code");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) { codeBox.classList.add("in"); io.disconnect(); }
  }, { threshold: 0.3 });
  io.observe(codeBox);
} else {
  codeBox.classList.add("in");
}
