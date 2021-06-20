let cafe1Check = document.querySelector("#vegMeal");
let cafe2Check = document.querySelector("#standardMeal");
let cafe3Check = document.querySelector("#worldMeal");
let cafeTicketTotalForm = document.querySelector("#cafe-total");
let cafeTickConfirmation = document.querySelector("#cafetConfirmation");
let cafeRestName = document.querySelector("#cafeTicketReservationName");
let crAdult = document.querySelector("#cafeAdult");
let crChild = document.querySelector("#cafeChild");
let crSenior = document.querySelector("#cafeSenior");
let crVet = document.querySelector("#cafeVet");

let lookupCafeResNumber = document.querySelector('#cafeReservationNumber');


class CafeReservationAPI {

    static baseUrl = 'http://localhost:3000/caferes'

    static newReservation(e) {
        let meal1 = cafe1Check.checked ? 1 : 0;
        let meal2 = cafe2Check.checked ? 1 : 0;
        let meal3 = cafe3Check.checked ? 1 : 0;
        let ticketTotal = parseInt(cafeTicketTotalForm.innerText);
        let data = {
            name: cafeRestName.value,
            meal1: meal1,
            meal2: meal2,
            meal3: meal3,
            total: ticketTotal,
            crAdult: crAdult.value,
            crChild: crChild.value,
            crSenior: crSenior.value,
            crVet: crVet.value
        }

        fetch('http://localhost:3000/caferes', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => cafeTickConfirmation.innerHTML = `We look forward to your visit ${json.data.attributes.name}!  Your reservation confirmation number is ${json.data.attributes.reservation_number}. Save this number to look up your reservation later.<br>`)
        
    }

    static displayReservation(data) {
        //console.log(data.data[0].attributes.name)
        console.log(data);
        document.getElementById('lookUpCafeResResult').innerHTML = "";

        const nameDiv = document.createElement('div');
        nameDiv.innerHTML = `Name: ${data.data[0].attributes.name}`;
        document.getElementById('lookUpCafeResResult').appendChild(nameDiv);
        const cafeTicketsDiv = document.createElement('div');
        cafeTicketsDiv.innerHTML = `Tickets Purchased: ${data.data[0].relationships.tickets.data.length}`;
        document.getElementById('lookUpCafeResResult').appendChild(cafeTicketsDiv);
        const accessCafeDiv = document.createElement('div');
        let purchasedMeals = ["Meals Purchased:", "<br>"];
        if (data.data[0].attributes.meal1 == 1) {
            purchasedMeals.push("<b>Vegetarian Meal</b>");
            purchasedMeals.push("<br>");
        }
        if (data.data[0].attributes.meal2 == 1) {
            purchasedMeals.push("<b>Standard Meal</b>");
            purchasedMeals.push("<br>");
        }
        if (data.data[0].attributes.meal3 == 1) {
            purchasedMeals.push("<b>World Cuisine</b>");
            purchasedMeals.push("<br>");
        }
        let purchaseMealsString = purchasedMeals.join(" ");
        accessCafeDiv.innerHTML = `${purchaseMealsString}`;
        console.log('purchaseMealsString');
        document.getElementById('lookUpCafeResResult').appendChild(accessCafeDiv);
        
    }

    static getReservation(){
        let reservationIdLookup = lookupCafeResNumber.value;

        fetch(`http://localhost:3000/caferes/search/${reservationIdLookup}`)
        .then(response => response.json()) 
        //.then(json => console.log(json))
        .then(json => this.displayReservation(json))  
        .catch(err => console.log('Request Failed', err)); 

    }


}
