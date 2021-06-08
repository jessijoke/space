const ticketSubmitButton = document.querySelector("#ticketSubmitButton");

ticketSubmitButton.addEventListener("click", (e) => {
    console.log('click');
    TicketReservationAPI.newReservation();
});