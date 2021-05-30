let currentActiveMenuBtn = document.querySelector(".activeLink");
let allNavButtons = document.querySelectorAll(".navElementInner");

allNavButtons.forEach(navButton => navButton.addEventListener('click', (e) => {
    currentActiveMenuBtn.classList.remove("activeLink");
    currentActiveMenuBtn = e.target;
    currentActiveMenuBtn.classList.add("activeLink");
    console.log(currentActiveMenuBtn);
}));

/* 
reservations have many tickets < tickets belong to reservations

theater has many shows < shows belongs to theater < tickets belong shows
unlock the video once they watch

cateria has many meal plans < meal plans belong to cateria < wristbands

*/