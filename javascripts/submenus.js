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

 let exhibitsExploreBtn = document.querySelector("#exhibitsExploreBtn");
 let exhibitsNASABtn = document.querySelector("#exhibitsNASABtn");
 let exhibitsPuzzleBtn = document.querySelector("#exhibitsPuzzleBtn");
 let exhibitsExploreSection = document.querySelector("#exhibitsExploreSection");
 let exhibitsNASASection = document.querySelector("#exhibitsNASASection");
 let exhibitsPuzzleSection = document.querySelector("#exhibitsPuzzleSection");

 exhibitsExploreBtn.addEventListener("click", () => { 
    if (exhibitsExploreSection.classList.contains('inactive')) {
        console.log('test');
        exhibitsExploreSection.classList.remove('inactive');
        exhibitsNASASection.classList.add('inactive');
        exhibitsPuzzleSection.classList.add('inactive');
    }
 }, false);

 exhibitsNASABtn.addEventListener("click", () => { 
    if (exhibitsNASASection.classList.contains('inactive')) {
        console.log('click');
        exhibitsExploreSection.classList.add('inactive');
        exhibitsNASASection.classList.remove('inactive');
        exhibitsPuzzleSection.classList.add('inactive');
    }
 }, false);

 exhibitsPuzzleBtn.addEventListener("click", () => { 
    if (exhibitsPuzzleSection.classList.contains('inactive')) {
        console.log('click');
        exhibitsExploreSection.classList.add('inactive');
        exhibitsNASASection.classList.add('inactive');
        exhibitsPuzzleSection.classList.remove('inactive');
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