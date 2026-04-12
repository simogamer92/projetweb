const toogle = document.getElementById("toogle");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("sidebar-overlay");

toogle.addEventListener("click", () => {
  navbar.classList.toggle("apparait");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  navbar.classList.remove("apparait");
  overlay.classList.remove("active");
});