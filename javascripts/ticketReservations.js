class TicketReservation {
    constructor(name, adult, child, senior, vet, wheelchair, ald, total) {
        this.name = name;
        wheelchair ? this.wheelchair = 1 : this.wheelchair = 0;
        ald ? this.ald = 1 : this.ald = 0;
        this.total = total;
    }

    static newReservation() {
        let config = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              name: this.name,
              wheelchair: this.wheelchair,
              ald: this.ald,
              total: this.total
            })
          }
        
          fetch('http://localhost:3000/reservations', config)
          .then(resp => resp.json())
          .then(data => {
            console.log('success')
          })
    }

    static getReservation(){

    }

}