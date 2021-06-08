class TicketReservationAPI {

    static baseUrl = 'http://localhost:3000/reservations'

    static newReservation(e) {
        let trw = trWheelchair.checked ? 1 : 0;
        let tra = trAdl.checked ? 1 : 0;
        let ticketTotal = parseInt(trTotal.innerText);
        let data = {
            name: trName.value,
            wheelchair: trw,
            ald: tra,
            total: ticketTotal,
            trAdult: trAdult.value,
            trChild: trChild.value,
            trSenior: trSenior.value,
            trVet: trVet.value
        }

        fetch('http://localhost:3000/reservations', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          })
          .then(resp => resp.json())
    }

    static getReservation(){

    }

}



/*
    constructor(name, wheelchair, ald, total) {
        this.name = name;
        wheelchair ? this.wheelchair = 1 : this.wheelchair = 0;
        ald ? this.ald = 1 : this.ald = 0;
        this.total = total;
    }*/