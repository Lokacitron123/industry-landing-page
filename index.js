const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__item", {
  ...scrollRevealOption,
  interval: 500,
});

// stats container
ScrollReveal().reveal(".stats__image img", {
  ...scrollRevealOption,
  origin: "right",
  interval: 500,
});

ScrollReveal().reveal(".stats__card", {
  interval: 500,
  duration: 500,
  delay: 1000,
});

// blog container
ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Swiper

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Mobile navigation
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const navLinks = document.querySelector(".nav__links");
const linkItems = document.querySelectorAll(".link a"); // Select all links inside .link

mobileNavToggle.addEventListener("click", () => {
  const isVisible = navLinks.getAttribute("data-visible") === "true";

  navLinks.setAttribute("data-visible", !isVisible);
  mobileNavToggle.setAttribute("aria-expanded", !isVisible);
});

// Close nav when a link is clicked
linkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.setAttribute("data-visible", "false");
    mobileNavToggle.setAttribute("aria-expanded", "false");
  });
});
