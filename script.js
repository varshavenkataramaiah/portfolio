/* =========================================================
   Portfolio interactivity
   1. Theme toggle (light / dark) with saved preference
   2. Mobile menu toggle
   3. Active-section highlighting in the nav
   4. Contact form validation
   ========================================================= */

/* ---------- 1. Theme toggle ---------- */
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");

// Start from a saved choice, or fall back to the OS preference.
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(next);
  localStorage.setItem("theme", next);
});

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  // The label shows the theme you can switch TO.
  themeLabel.textContent = theme === "dark" ? "light" : "dark";
}

/* ---------- 2. Mobile menu ---------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the menu after tapping a link (mobile).
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ---------- 3. Active-section highlight ---------- */
const sections = document.querySelectorAll("main section[id]");
const navItems = navLinks.querySelectorAll("a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navItems.forEach((a) => {
        a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id);
      });
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((section) => observer.observe(section));

/* ---------- 4. Contact form validation ---------- */
const submitBtn = document.getElementById("formSubmit");
const statusEl = document.getElementById("formStatus");
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const messageEl = document.getElementById("message");

// TODO: replace with your real email so the mail client opens correctly.
const CONTACT_EMAIL = "varshajaishree7@gmail.com";

submitBtn.addEventListener("click", () => {
  const valid =
    [
      check(nameEl, (v) => v.length > 0, "Please enter your name."),
      check(emailEl, isEmail, "Please enter a valid email."),
      check(messageEl, (v) => v.length >= 10, "Message should be at least 10 characters."),
    ].every(Boolean);

  if (!valid) {
    statusEl.textContent = "Please fix the highlighted fields.";
    return;
  }

  // No backend needed: open the visitor's mail client with the message prefilled.
  const subject = encodeURIComponent(`Portfolio contact from ${nameEl.value.trim()}`);
  const body = encodeURIComponent(`${messageEl.value.trim()}\n\n— ${nameEl.value.trim()} (${emailEl.value.trim()})`);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  statusEl.textContent = "Opening your email app…";
});

// Validate one field; toggle its error state and return true/false.
function check(field, test, errorMsg) {
  const value = field.value.trim();
  const wrapper = field.closest(".field");
  const errorEl = wrapper.querySelector(".field__error");
  const ok = test(value);
  wrapper.classList.toggle("is-invalid", !ok);
  errorEl.textContent = ok ? "" : errorMsg;
  return ok;
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}