const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector(".search-bar-container");

searchBtn.addEventListener("click", (e) => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
};
