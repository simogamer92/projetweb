const toggle = document.getElementById("toogle");
const navbar = document.getElementById("navbar");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("apparait");
});