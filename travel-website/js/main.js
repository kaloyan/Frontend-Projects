const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector(".search-bar-container");

const loginBtn = document.querySelector("#login-btn");
const loginForm = document.querySelector(".login-form-container");
const loginClose = document.querySelector("#form-close");

const menuBar = document.querySelector("#menu-bar");
const navbar = document.querySelector("nav.navbar");

const videoBtns = document.querySelectorAll(".vid-btn");

searchBtn.addEventListener("click", (e) => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

loginBtn.addEventListener("click", (e) => {
  loginForm.classList.add("active");
});

menuBar.addEventListener("click", (e) => {
  menuBar.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

loginClose.addEventListener("click", (e) => {
  loginForm.classList.remove("active");
});

videoBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelector(".controls .active").classList.remove("active");
    e.target.classList.add("active");

    const src = e.target.getAttribute("data-src");
    document.querySelector("#video-slider").setAttribute("src", src);
  });
});

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menuBar.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};
