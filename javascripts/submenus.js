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
 
createSubmenu(exhibitsMenuBtn, exhibitSubmenu);
createSubmenu(ticketsMenuBtn, ticketsSubmenu);
createSubmenu(moviesMenuBtn, moviesSubmenu);
createSubmenu(cafeMenuBtn, cafeSubmenu);
