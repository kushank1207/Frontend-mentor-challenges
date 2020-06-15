const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("nav-bar-mobile");
const close = document.getElementById("nav-bar-close");
const dropdown = document.getElementById("dropdown");

hamburger.addEventListener("click", function() {
  navbar.style.display = "none";
  dropdown.style.display = "block";
});

close.addEventListener("click", function() {
  navbar.style.display = "flex";
  dropdown.style.display = "none";
});
