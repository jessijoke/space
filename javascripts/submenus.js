let exhibitSubmenu = document.querySelector("#submenuExhibits");
let exhibitsMenuBtn2 = document.querySelector("#exhibitsMenu");
let ticketsMenuBtn = document.querySelector("#ticketsMenu");
let ticketsSubmenu = document.querySelector("#submenuTickets");

let moviesMenuBtn = document.querySelector("#moviesMenu");
let moviesSubmenu = document.querySelector("#submenuMovies");

let cafeMenuBtn = document.querySelector("#cafeMenu");
let cafeSubmenu = document.querySelector("#submenuCafe");

/*-------- Museum Tickets --------*/

function switchSubsection(subsection) {
    if (!subsection.classList.contains("activeLink")) {
        currentActiveMenuSection.classList.remove('activeSection');
        subsection.classList.add('activeSection');
    }
}

function createSubmenu(menuBtn, Submenu) {
    menuBtn.addEventListener("mouseover", (e) => {
        Submenu.style.display = "block";
    })
    
    Submenu.addEventListener("mouseover", (e) => {
        Submenu.style.display = "block";
    })
    
    menuBtn.addEventListener("mouseout", (e) => {
        Submenu.style.display = "none";
    })
}

createSubmenu(exhibitsMenuBtn2, exhibitSubmenu);
createSubmenu(ticketsMenuBtn, ticketsSubmenu);
createSubmenu(moviesMenuBtn, moviesSubmenu);
createSubmenu(cafeMenuBtn, cafeSubmenu);

