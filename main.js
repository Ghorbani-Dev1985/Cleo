import './src/Assets/Styles/index.scss'

let backdrop = document.querySelector(".backdrop");
let toggleButton = document.querySelector(".mobileNavBtn");
let mobileNav = document.querySelector(".mobileNav");
let mobileNavLi = document.querySelectorAll(".mobileNavLi");

function closeHandler(){
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");
  toggleButton.classList.remove("active", "change");
}

backdrop.addEventListener("click", function() {
  closeHandler()
});

toggleButton.addEventListener("click", function() {
  mobileNav.classList.add("open");
  toggleButton.classList.add("active", "change");
  backdrop.classList.add("open");
});

mobileNavLi.forEach((li) => {
  li.addEventListener("click" , closeHandler)
})