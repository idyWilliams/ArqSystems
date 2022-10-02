const nav = document.querySelector("nav");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = function () {
  nav.classList.toggle("menu-open");
};