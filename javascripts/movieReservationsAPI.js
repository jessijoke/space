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
            mrAdult: mrAdult.value,
            mrChild: mrChild.value,
            mrSenior: mrSenior.value,
            mrVet: mrVet.value
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
        .then(json => movTickConfirmation.innerHTML = `We look forward to your visit ${json.data.attributes.name}!  Your reservation confirmation number is ${json.data.attributes.reservation_number}. Save this number to look up your reservation later.<br>`)
        
    }

    static displayReservation(data) {
        document.getElementById('lookUpMovieResResult').innerHTML = "";
        console.log(data)
        
        const nameDiv = document.createElement('div');
        nameDiv.innerHTML = `Name: ${data.data[0].attributes.name}`;
        document.getElementById('lookUpMovieResResult').appendChild(nameDiv);
        const movieTicketsDiv = document.createElement('div');
        movieTicketsDiv.innerHTML = `Tickets Purchased: ${data.data[0].relationships.tickets.data.length}`;
        document.getElementById('lookUpMovieResResult').appendChild(movieTicketsDiv);
        const accessMovieDiv = document.createElement('div');
        let purchasedMovies = ["Tickets Purchased for Movies:", "<br>"];
        if (data.data[0].attributes.movie1 == 1) {
            purchasedMovies.push("<b>The Year of Pluto</b>");
            purchasedMovies.push("<br>");
        }
        if (data.data[0].attributes.movie2 == 1) {
            purchasedMovies.push("<b>The Journey of Apollo 11</b>");
            purchasedMovies.push("<br>");
        }
        if (data.data[0].attributes.movie3 == 1) {
            purchasedMovies.push("<b>The Space Shuttle</b>");
            purchasedMovies.push("<br>");
        }
        let purchaseMoviesString = purchasedMovies.join(" ");
        accessMovieDiv.innerHTML = `${purchaseMoviesString}`;
        console.log('purchaseMoviesString');
        document.getElementById('lookUpMovieResResult').appendChild(accessMovieDiv);
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
