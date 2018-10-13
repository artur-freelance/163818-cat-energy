// Mobile Menu

var navBtn = document.querySelector(".nav__btn");
var navItems = document.querySelector(".nav__items");

navItems.classList.add("nav__close");
navBtn.classList.remove("nav__btn");
navBtn.classList.add("nav__btn--close");

navBtn.addEventListener("click", function() {
  if(navBtn.classList.contains("nav__btn--close")) {
    navBtn.classList.remove("nav__btn--close");
    navBtn.classList.add("nav__btn");
    navItems.classList.remove("nav__close");
    navItems.classList.add("nav__items");
  } else {
    navBtn.classList.remove("nav__btn");
    navBtn.classList.add("nav__btn--close");
    navItems.classList.add("nav__close");
  }
});

// Before-After Slider

var catsBtn = document.getElementById("example__btn");
var catsImg = document.getElementById("image");
var catsRadio = document.querySelector(".example__button");

catsBtn.addEventListener("click", function() {
  if (catsImg.getAttribute("src") === "img/before-mobile@1x.png") {
    catsImg.removeAttribute("src");
    catsImg.setAttribute("src", "img/after-mobile@1x.png");
    catsRadio.style = "left: 45px";
  } else {
    catsImg.removeAttribute("src");
    catsImg.setAttribute("src", "img/before-mobile@1x.png");
    catsRadio.style = "left: 5px";
  }
});
