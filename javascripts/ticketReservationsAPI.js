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
        //.then(json => console.log(json.data.attributes.name))
        .then(json => mtConfirmation.innerHTML = `We look forward to your visit ${json.data.attributes.name}!  Your reservation confirmation number is ${json.data.attributes.reservation_number}. Save this number to look up your reservation later.<br>`)
        .catch(mtConfirmation.innerHTML = `Something went wrong, please try again.`)
    }

    static displayReservation(data) {
        //console.log(data.data[0].attributes.name)
        document.getElementById('lookUpResResult').innerHTML = "";
        console.log(data)
        const nameDiv = document.createElement('div');
        nameDiv.innerHTML = `Name: ${data.data[0].attributes.name}`;
        document.getElementById('lookUpResResult').appendChild(nameDiv);
        const ticketsDiv = document.createElement('div');
        ticketsDiv.innerHTML = `Tickets Purchased: ${data.data[0].relationships.tickets.data.length}`;
        document.getElementById('lookUpResResult').appendChild(ticketsDiv);
        const accessDiv = document.createElement('div');
        if (data.data[0].attributes.wheelchair == 1 && data.data[0].attributes.ald == 1) {
            accessDiv.innerHTML = `You reserved a Wheelchair and an Assisted Listening Device.`;
            document.getElementById('lookUpResResult').appendChild(accessDiv);
        } else if (data.data[0].attributes.wheelchair == 1 && data.data[0].attributes.ald == 0) {
            accessDiv.innerHTML = `You reserved a Wheelchair.`;
            document.getElementById('lookUpResResult').appendChild(accessDiv);
        } else if (data.data[0].attributes.wheelchair == 0 && data.data[0].attributes.ald == 1) {
            accessDiv.innerHTML = `You reserved an Assisted Listening Device.`;
            document.getElementById('lookUpResResult').appendChild(accessDiv);
        }
    }

    static getReservation(){
        let reservationIdLookup = lookupResNumber.value;

        fetch(`http://localhost:3000/reservations/search/${reservationIdLookup}`)
        .then(response => response.json()) 
        //.then(json => console.log(json))
        .then(json => this.displayReservation(json))  
        .catch(err => console.log('Request Failed', err)); 

    }


}


/*
    constructor(name, wheelchair, ald, total) {
        this.name = name;
        wheelchair ? this.wheelchair = 1 : this.wheelchair = 0;
        ald ? this.ald = 1 : this.ald = 0;
        this.total = total;
    }*/