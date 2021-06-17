class MovieReservationAPI {

    static baseUrl = 'http://localhost:3000/movieres'

    static newReservation(e) {
        let mov1 = movie1Check.checked ? 1 : 0;
        let mov2 = movie2Check.checked ? 1 : 0;
        let mov3 = movie3Check.checked ? 1 : 0;
        let ticketTotal = parseInt(movieTicketTotalForm.innerText);
        let data = {
            name: ticketRestName.value,
            movie1: mov1,
            movie2: mov2,
            movie3: mov3,
            total: ticketTotal,
            trAdult: trAdult.value,
            trChild: trChild.value,
            trSenior: trSenior.value,
            trVet: trVet.value
        }

        fetch('http://localhost:3000/movieres', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        //.then(json => console.log(json.data.attributes.name))
        .then(json => movTickConfirmation.innerHTML = `We look forward to your visit ${json.data.attributes.name}!  Your reservation confirmation number is ${json.data.attributes.reservation_number}. Save this number to look up your reservation later.<br>`)
        .catch(movTickConfirmation.innerHTML = `Something went wrong, please try again.`)
    }

    static displayReservation(data) {
        //console.log(data.data[0].attributes.name)
        document.getElementById('lookUpMovieResResult').innerHTML = "";
        console.log(data)
        
        const nameDiv = document.createElement('div');
        nameDiv.innerHTML = `Name: ${data.data[0].attributes.name}`;
        document.getElementById('lookUpMovieResResult').appendChild(nameDiv);
        //const ticketsDiv = document.createElement('div');
        //ticketsDiv.innerHTML = `Tickets Purchased: ${data.data[0].relationships.tickets.data.length}`;
        //document.getElementById('lookUpResResult').appendChild(ticketsDiv);
        //const accessDiv = document.createElement('div');

        /*
        if (data.data[0].attributes.wheelchair == 1 && data.data[0].attributes.ald == 1) {
            accessDiv.innerHTML = `You reserved a Wheelchair and an Assisted Listening Device.`;
            document.getElementById('lookUpResResult').appendChild(accessDiv);
        } else if (data.data[0].attributes.wheelchair == 1 && data.data[0].attributes.ald == 0) {
            accessDiv.innerHTML = `You reserved a Wheelchair.`;
            document.getElementById('lookUpResResult').appendChild(accessDiv);
        } else if (data.data[0].attributes.wheelchair == 0 && data.data[0].attributes.ald == 1) {
            accessDiv.innerHTML = `You reserved an Assisted Listening Device.`;
            document.getElementById('lookUpResResult').appendChild(accessDiv);
        }*/
        
    }

    static getReservation(){
        let reservationIdLookup = lookupMovieResNumber.value;

        fetch(`http://localhost:3000/movieres/search/${reservationIdLookup}`)
        .then(response => response.json()) 
        //.then(json => console.log(json))
        .then(json => this.displayReservation(json))  
        .catch(err => console.log('Request Failed', err)); 

    }


}
