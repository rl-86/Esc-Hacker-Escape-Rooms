// JS CODE

// Variables
const menuButton = document.querySelector(".mobileMenuButton");
const menuClose = document.querySelector(".mobileMenuCloseButton");


// Listen for button click to change display property and prevent scrolling
menuButton.addEventListener("click", function () {
    document.getElementsByClassName("mobileMenuBackground")[0].style.display = "flex";
    document.documentElement.style.overflowY = "hidden";
});

menuClose.addEventListener("click", function () {
    document.getElementsByClassName("mobileMenuBackground")[0].style.display = "none";
    document.documentElement.style.overflowY = "scroll";
});