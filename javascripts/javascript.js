ticketSubmitButton.addEventListener("click", (e) => {
    TicketReservationAPI.newReservation();
});

lookupResBtn.addEventListener("click", (e) => {
    TicketReservationAPI.getReservation();
});

gridHovers.forEach(hover => hover.addEventListener("mouseover", (e) => {
    let gridElement = e.target.childNodes[3];
    console.log(gridElement);
    gridElement.classList.toggle('gridTall');
}))


gridHovers.forEach(hover => hover.addEventListener("mouseout", (e) => {
    let gridElement = e.target.childNodes[3];
    gridElement.classList.toggle('gridTall');
}))

