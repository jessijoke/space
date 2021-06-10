const ticketSubmitButton = document.querySelector("#ticketSubmitButton");
const lookupResBtn = document.querySelector("#ticketLookupButton");

ticketSubmitButton.addEventListener("click", (e) => {
    //console.log('click');
    TicketReservationAPI.newReservation();
});

lookupResBtn.addEventListener("click", (e) => {
    //console.log('res searched');
    TicketReservationAPI.getReservation();
});