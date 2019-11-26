let openSlideButton = document.getElementById("openSlideButton");
let closeSlideButton = document.getElementById("closeSlideButton");
let topNavbar = document.getElementById("topNavbar");

let openSlideMenu = () => {
  let sideMenu = document.getElementById("side-menu");
  sideMenu.style.marginLeft = "0";
  let openSlideButton = document.getElementById("openSlideButton");
  openSlideButton.style.display = "none";
};

let closeSlideMenu = () => {
  let sideMenu = document.getElementById("side-menu");
  sideMenu.style.marginLeft = "-250px";
  let openSlideButton = document.getElementById("openSlideButton");
  openSlideButton.style.display = "block";
  openSlideButton.style.transition = "0.8s";
};

openSlideButton.addEventListener("click", openSlideMenu);
closeSlideButton.addEventListener("click", closeSlideMenu);
