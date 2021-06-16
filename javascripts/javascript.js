let movieTicketSubmit = document.querySelector("#movieTicketSubmitButton");
const lookupResBtn = document.querySelector("#ticketLookupButton");
let gridHovers = document.querySelectorAll(".exhibitTitleFlex");
const ticketSubmitButton = document.querySelector("#ticketSubmitButton");

ticketSubmitButton.addEventListener("click", (e) => {
    TicketReservationAPI.newReservation();
});

movieTicketSubmit.addEventListener("click", (e) => {
    MovieReservationAPI.newReservation();
});

lookupResBtn.addEventListener("click", (e) => {
    TicketReservationAPI.getReservation();
});

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

