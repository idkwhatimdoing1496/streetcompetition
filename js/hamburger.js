const menu = document.getElementById("header");
const menuItems = document.getElementsByClassName(".navButton");
const hamburger= document.querySelector(".hamburgerMenu");
const navIn= document.querySelector(".navIn");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".openIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        navIn.style.transform = "none";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
        navIn.style.transform = "translateY(100%)";
    }
}

hamburger.addEventListener("click", toggleMenu);
