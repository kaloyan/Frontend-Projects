"use strict";

// navbar variables
const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

[navOpenBtn, navCloseBtn, overlay].forEach((item) => {
  item.addEventListener("click", (e) => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

// header sticky functionality
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", (e) => {
  window.scrollY >= 20
    ? header.classList.add("active")
    : header.classList.remove("active");
});

// go top button
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", (e) => {
  window.scrollY >= 800
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});
