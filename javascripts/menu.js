let currentActiveMenuBtn = document.querySelector(".activeLink");
let allNavButtons = document.querySelectorAll(".navElementInner");

let homeSection = document.querySelector("#home");
let exhibitsSection = document.querySelector("#exhibits");
let ticketsSection = document.querySelector("#tickets");
let moviesSection = document.querySelector("#movies");
let cafeSection = document.querySelector("#cafe");
let NASASection = document.querySelector("#NASA");
let puzzleSection = document.querySelector("#exhibitsPuzzle");
let ticketReservations = document.querySelector("#ticketReservations");
let movieTickets = document.querySelector("#movieTickets");
let movieReservations = document.querySelector("#movieReservations");
let cafeTickets = document.querySelector("#cafeTickets");
let cafeReservations = document.querySelector("#cafeReservations");

let currentActiveMenuSection = document.querySelector(".activeSection");

allNavButtons.forEach(navButton => navButton.addEventListener('click', (e) => {
    if (!e.target.classList.contains("activeLink")) {
        currentActiveMenuSection = document.querySelector(".activeSection");
        currentActiveMenuSection.classList.add('slideOut');
        setTimeout(function(){ currentActiveMenuSection.classList.remove('slideOut'); }, 200)
        if (e.target.classList.contains('exhibitsLink') || e.target.classList.contains('navExploreExhibits')) {
            currentActiveMenuSection.classList.remove('activeSection');
            exhibitsSection.classList.add('activeSection');
        } else if (e.target.classList.contains('homeLink')) {
            currentActiveMenuSection.classList.remove('activeSection');
            homeSection.classList.add('activeSection');
        } else if (e.target.classList.contains('ticketsLink')) {
            currentActiveMenuSection.classList.remove('activeSection');
            ticketsSection.classList.add('activeSection');
        } else if (e.target.classList.contains('moviesLink')) {
            currentActiveMenuSection.classList.remove('activeSection');
            moviesSection.classList.add('activeSection');
        } else if (e.target.classList.contains('cafeLink')) {
            currentActiveMenuSection.classList.remove('activeSection');
            cafeSection.classList.add('activeSection');
        } else if (e.target.classList.contains('navNASA')) {
            currentActiveMenuSection.classList.remove('activeSection');
            NASASection.classList.add('activeSection');
        } else if (e.target.classList.contains('navPuzzle')) {
            currentActiveMenuSection.classList.remove('activeSection');
            puzzleSection.classList.add('activeSection');
        } else if (e.target.classList.contains('navTicketRes')) {
            currentActiveMenuSection.classList.remove('activeSection');
            ticketReservations.classList.add('activeSection');
        } else if (e.target.classList.contains('navMovieTickets')) {
            currentActiveMenuSection.classList.remove('activeSection');
            movieTickets.classList.add('activeSection');
        } else if (e.target.classList.contains('navMovieReservations')) {
            currentActiveMenuSection.classList.remove('activeSection');
            movieReservations.classList.add('activeSection');
        } else if (e.target.classList.contains('navCafeTickets')) {
            currentActiveMenuSection.classList.remove('activeSection');
            cafeTickets.classList.add('activeSection');
        } else if (e.target.classList.contains('navCafeReservations')) {
            currentActiveMenuSection.classList.remove('activeSection');
            cafeReservations.classList.add('activeSection');
        }

    }
    currentActiveMenuBtn.classList.remove("activeLink");
    currentActiveMenuBtn = e.target;
    currentActiveMenuBtn.classList.add("activeLink");
    
}));


/* 
reservations have many tickets < tickets belong to reservations

theater has many shows < shows belongs to theater < tickets belong shows
unlock the video once they watch

cateria has many meal plans < meal plans belong to cateria < wristbands

*/