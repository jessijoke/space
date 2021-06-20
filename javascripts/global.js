//Ticket Reservations

let trName = document.querySelector("#ticketReservationName");
let trAdult = document.querySelector("#museumAdult");
let trChild = document.querySelector("#museumChild");
let trSenior = document.querySelector("#museumSenior");
let trVet = document.querySelector("#museumVet");
let trWheelchair = document.querySelector("#wheelchair");
let trAdl = document.querySelector("#assistedListening");
let trTotal = document.querySelector("#ticket-total");
let mtConfirmation = document.querySelector("#mtConfirmation");

let mrAdult = document.querySelector("#movieAdult");
let mrChild = document.querySelector("#movieChild");
let mrSenior = document.querySelector("#movieSenior");
let mrVet = document.querySelector("#movieVet");

let lookupResNumber = document.querySelector('#ticketReservationNumber');
let lookupResResult = document.querySelector('#lookUpResResult');


//Movie Form Variables
let movie1Check = document.querySelector("#movie1");
let movie2Check = document.querySelector("#movie2");
let movie3Check = document.querySelector("#movie3");
let ticketRestName = document.querySelector("#movieTicketReservationName");
let movieTicketTotalForm = document.querySelector("#movie-total");
let movTickConfirmation = document.querySelector("#movtConfirmation");

let lookupMovieResNumber = document.querySelector('#movieTicketReservationNumber');


// cafe vars






/*
let exhibitsExploreBtn = document.querySelector("#exhibitsExploreBtn");
let exhibitsNASABtn = document.querySelector("#exhibitsNASABtn");
let exhibitsPuzzleBtn = document.querySelector("#exhibitsPuzzleBtn");
let exhibitsExploreSection = document.querySelector("#exhibitsExploreSection");
let exhibitsNASASection = document.querySelector("#exhibitsNASASection");
let exhibitsPuzzleSection = document.querySelector("#exhibitsPuzzleSection");

let museumTicketsBtn = document.querySelector("#museumTicketsBtn");
let museumReservationsBtn = document.querySelector("#museumReservationsBtn");
let museumTicketSection = document.querySelector("#museumTicketSection");
let museumReservationsSection = document.querySelector("#museumReservationSection");



let movieOptionsBtn = document.querySelector("#movieOptionsBtn");
let movieTicketsBtn = document.querySelector("#movieTicketsBtn");
let movieReservationsBtn = document.querySelector("#movieReservationsBtn");
let movieOptionSection = document.querySelector("#movieOptionSection");
let movieTicketSection = document.querySelector("#movieTicketSection");
let movieReservationSection = document.querySelector("#movieReservationSection");


movieOptionsBtn.addEventListener("click", () => { 
if (movieOptionSection.classList.contains('inactive')) {
    console.log('test');
    movieOptionSection.classList.remove('inactive');
    movieTicketSection.classList.add('inactive');
    movieReservationSection.classList.add('inactive');
}
}, false);

movieTicketsBtn.addEventListener("click", () => { 
if (movieTicketSection.classList.contains('inactive')) {
    console.log('click');
    movieOptionSection.classList.add('inactive');
    movieTicketSection.classList.remove('inactive');
    movieReservationSection.classList.add('inactive');
}
}, false);

movieReservationsBtn.addEventListener("click", () => { 
if (movieReservationSection.classList.contains('inactive')) {
    console.log('click');
    movieOptionSection.classList.add('inactive');
    movieTicketSection.classList.add('inactive');
    movieReservationSection.classList.remove('inactive');
}
}, false);





let cafeOptionsBtn = document.querySelector("#cafeOptionsBtn");
let cafePurchaseBtn = document.querySelector("#cafePurchaseBtn");
let cafeReservationsBtn = document.querySelector("#cafeReservationsBtn");
let cafeOptionsSection = document.querySelector("#cafeOptionsSection");
let cafePurchaseSection = document.querySelector("#cafePurchaseSection");
let cafeReservationsSection = document.querySelector("#cafeReservationsSection");

cafeOptionsBtn.addEventListener("click", () => { 
if (cafeOptionsSection.classList.contains('inactive')) {
    console.log('test');
    cafeOptionsSection.classList.remove('inactive');
    cafePurchaseSection.classList.add('inactive');
    cafeReservationsSection.classList.add('inactive');
}
}, false);

cafePurchaseBtn.addEventListener("click", () => { 
if (cafePurchaseSection.classList.contains('inactive')) {
    console.log('click');
    cafeOptionsSection.classList.add('inactive');
    cafePurchaseSection.classList.remove('inactive');
    cafeReservationsSection.classList.add('inactive');
}
}, false);

cafeReservationsBtn.addEventListener("click", () => { 
if (cafeReservationsSection.classList.contains('inactive')) {
    console.log('click');
    cafeOptionsSection.classList.add('inactive');
    cafePurchaseSection.classList.add('inactive');
    cafeReservationsSection.classList.remove('inactive');
}
}, false);
*/