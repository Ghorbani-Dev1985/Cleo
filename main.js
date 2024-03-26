import './src/Assets/Styles/index.scss'

let backdrop = document.querySelector(".backdrop");
let toggleButton = document.querySelector(".mobileNavBtn");
let mobileNav = document.querySelector(".mobileNav");

backdrop.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");
  toggleButton.classList.remove("active", "change");
});

toggleButton.addEventListener("click", function() {
  mobileNav.classList.add("open");
  toggleButton.classList.add("active", "change");
  backdrop.classList.add("open");
});