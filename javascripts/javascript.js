const movieTicketSubmit = document.querySelector("#movieTicketSubmitButton");
const lookupResBtn = document.querySelector("#ticketLookupButton");
const movielookupResBtn = document.querySelector("#ticketLookupButton");
const movTickLookup = document.querySelector("#movieTicketLookupButton");
const cafeTicketSubmitButton = document.querySelector("#cafeTicketSubmitButton");
const cafeLookupSubmitBtn = document.querySelector("#cafeLookupButton");

let gridHovers = document.querySelectorAll(".exhibitTitleFlex");
const ticketSubmitButton = document.querySelector("#ticketSubmitButton");

ticketSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    TicketReservationAPI.newReservation();
});

lookupResBtn.addEventListener("click", (e) => {
    e.preventDefault();
    TicketReservationAPI.getReservation();
});

movieTicketSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    MovieReservationAPI.newReservation();
});

movTickLookup.addEventListener("click", (e) => {
    e.preventDefault();
    MovieReservationAPI.getReservation();
});

cafeTicketSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    CafeReservationAPI.newReservation();
})

cafeLookupSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    CafeReservationAPI.getReservation();
})


gridHovers.forEach(hover => attachListeners(hover))
function attachListeners(hover) {
    hover.addEventListener("mouseover", toggleGrid)
    hover.addEventListener("mouseout", toggleGrid)
}
function toggleGrid(e) {
    //console.log("I was called on", e.target)
    if (e.target.classList.contains("exhibitTitleFlex")) {e.target.children[1].classList.toggle("gridTall")}
}


/*

gridHovers.forEach(hover => hover.addEventListener("mouseover", (e) => {
    console.log(e.target.childNodes)
    let gridElement = e.target.childNodes[3];
    console.log(gridElement);
    gridElement.classList.toggle('gridTall');
}))


gridHovers.forEach(hover => hover.addEventListener("mouseout", (e) => {
    let gridElement = e.target.childNodes[3];
    gridElement.classList.toggle('gridTall');
}))

*/