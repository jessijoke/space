/*-------- Museum Tickets --------*/

let museumTicketsBtn = document.querySelector("#museumTicketsBtn");
let museumReservationsBtn = document.querySelector("#museumReservationsBtn");
let museumTicketSection = document.querySelector("#museumTicketSection");
let museumReservationsSection = document.querySelector("#museumReservationSection");

museumTicketsBtn.addEventListener("click", () => { 
    if (museumTicketSection.classList.contains('inactive')) {
        console.log('test');
        museumTicketSection.classList.remove('inactive');
        museumReservationsSection.classList.add('inactive');
    }
 }, false);

 museumReservationsBtn.addEventListener("click", () => { 
    if (museumReservationsSection.classList.contains('inactive')) {
        console.log('click');
        museumTicketSection.classList.add('inactive');
        museumReservationsSection.classList.remove('inactive');
    }
 }, false);

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