let museumTicketTotal = document.querySelector("#ticket-total");
let movieTicketTotal = document.querySelector("#movie-total");

const calculateTotal = (a, b, c, d) => ((parseInt(a) * 20) + (parseInt(b) * 16) + (parseInt(c) * 18) + (parseInt(d) * 17));

document.addEventListener("keyup", event => {
    let museumAdultQty = document.querySelector('#museumAdult');
    let museumChildQty = document.querySelector('#museumChild');
    let museumSeniorQty = document.querySelector('#museumSenior');
    let museumVetQty = document.querySelector('#museumVet');
    let movieAdultQty = document.querySelector('#movieAdult');
    let movieChildQty = document.querySelector('#movieChild');
    let movieSeniorQty = document.querySelector('#movieSenior');
    let movieVetQty = document.querySelector('#movieVet');

    let allInputQtys = [museumAdultQty, museumChildQty, museumSeniorQty, museumVetQty, movieAdultQty, movieChildQty, movieSeniorQty, movieVetQty];

    allInputQtys.forEach((inputQty) => {
        if (inputQty.value < 0) {
            inputQty.value = 0;
        }  
    });

    museumTicketTotal.innerHTML = calculateTotal(museumAdultQty.value, museumChildQty.value, museumSeniorQty.value, museumVetQty.value).toString();
    movieTicketTotal.innerHTML = calculateTotal(movieAdultQty.value, movieChildQty.value, movieSeniorQty.value, movieVetQty.value).toString();
  });

  document.addEventListener("click", event => {
    let museumAdultQty = document.querySelector('#museumAdult');
    let museumChildQty = document.querySelector('#museumChild');
    let museumSeniorQty = document.querySelector('#museumSenior');
    let museumVetQty = document.querySelector('#museumVet');
    let movieAdultQty = document.querySelector('#movieAdult');
    let movieChildQty = document.querySelector('#movieChild');
    let movieSeniorQty = document.querySelector('#movieSenior');
    let movieVetQty = document.querySelector('#movieVet');

    let allInputQtys = [museumAdultQty, museumChildQty, museumSeniorQty, museumVetQty, movieAdultQty, movieChildQty, movieSeniorQty, movieVetQty];

    allInputQtys.forEach((inputQty) => {
        if (inputQty.value < 0) {
            inputQty.value = 0;
        }  
    });

    museumTicketTotal.innerHTML = calculateTotal(museumAdultQty.value, museumChildQty.value, museumSeniorQty.value, museumVetQty.value).toString();
    movieTicketTotal.innerHTML = calculateTotal(movieAdultQty.value, movieChildQty.value, movieSeniorQty.value, movieVetQty.value).toString();
  });

  