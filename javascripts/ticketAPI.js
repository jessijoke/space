class TicketAPI {
    static baseUrl = 'http://localhost:3000/tickets'

    static newTicket(ticketType) {
        
        let data = {
            type_type: ticketType
        }

        fetch('http://localhost:3000/tickets', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          })
          .then(resp => resp.json());
    }
}
