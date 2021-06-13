

ticketSubmitButton.addEventListener("click", (e) => {
    TicketReservationAPI.newReservation();
});

lookupResBtn.addEventListener("click", (e) => {
    TicketReservationAPI.getReservation();
});