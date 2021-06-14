const calculateTotal = (a, int1, b, int2, c, int3, d, int4) => ((parseInt(a) * int1) + (parseInt(b) * int2) + (parseInt(c) * int3) + (parseInt(d) * int4));

document.addEventListener("keyup", event => {
    let museumAdultQty = document.querySelector('#museumAdult');
    let museumChildQty = document.querySelector('#museumChild');
    let museumSeniorQty = document.querySelector('#museumSenior');
    let museumVetQty = document.querySelector('#museumVet');
    let movieAdultQty = document.querySelector('#movieAdult');
    let movieChildQty = document.querySelector('#movieChild');
    let movieSeniorQty = document.querySelector('#movieSenior');
    let movieVetQty = document.querySelector('#movieVet');
    let cafeAdultQty = document.querySelector('#cafeAdult');
    let cafeChildQty = document.querySelector('#cafeChild');
    let cafeSeniorQty = document.querySelector('#cafeSenior');
    let cafeVetQty = document.querySelector('#cafeVet');
    let movie1 = document.querySelector('#movie1');
    let movie2 = document.querySelector('#movie2');
    let movie3 = document.querySelector('#movie3');

    let movieCount = 0;

    if (movie1.checked && movie2.checked && movie3.checked) {
        movieCount = 3;
    } else if (movie1.checked && movie2.checked) {
        movieCount = 2;
    } else if (movie1.checked && movie3.checked) {
        movieCount = 2;
    } else if (movie2.checked && movie3.checked) {
        movieCount = 2;
    } else if (movie1.checked) {
        movieCount = 1;
    } else if (movie2.checked) {
        movieCount = 1;
    } else if (movie3.checked) {
        movieCount = 1;
    } else {
        movieCount = 0;
    }

    console.log(movieCount);

    let allInputQtys = [museumAdultQty, museumChildQty, museumSeniorQty, museumVetQty, movieAdultQty, movieChildQty, movieSeniorQty, movieVetQty, cafeAdultQty, cafeChildQty, cafeSeniorQty, cafeVetQty];

    allInputQtys.forEach((inputQty) => {
        if (inputQty.value < 0) {
            inputQty.value = 0;
        }  
    });

    museumTicketTotal.innerHTML = calculateTotal(museumAdultQty.value, 20, museumChildQty.value, 16, museumSeniorQty.value, 18, museumVetQty.value, 17).toString();
    movieTicketTotal.innerHTML = (calculateTotal(movieAdultQty.value, 10, movieChildQty.value, 5, movieSeniorQty.value, 8, movieVetQty.value, 7) * movieCount).toString();
    cafeTicketTotal.innerHTML = calculateTotal(cafeAdultQty.value, 12, cafeChildQty.value, 8, cafeSeniorQty.value, 9, cafeVetQty.value, 10).toString();

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
    let cafeAdultQty = document.querySelector('#cafeAdult');
    let cafeChildQty = document.querySelector('#cafeChild');
    let cafeSeniorQty = document.querySelector('#cafeSenior');
    let cafeVetQty = document.querySelector('#cafeVet');
    let movie1 = document.querySelector('#movie1');
    let movie2 = document.querySelector('#movie2');
    let movie3 = document.querySelector('#movie3');

    let movieCount = 0;

    if (movie1.checked && movie2.checked && movie3.checked) {
        movieCount = 3;
    } else if (movie1.checked && movie2.checked) {
        movieCount = 2;
    } else if (movie1.checked && movie3.checked) {
        movieCount = 2;
    } else if (movie2.checked && movie3.checked) {
        movieCount = 2;
    } else if (movie1.checked) {
        movieCount = 1;
    } else if (movie2.checked) {
        movieCount = 1;
    } else if (movie3.checked) {
        movieCount = 1;
    } else {
        movieCount = 0;
    }

    console.log(movieCount);

    let allInputQtys = [museumAdultQty, museumChildQty, museumSeniorQty, museumVetQty, movieAdultQty, movieChildQty, movieSeniorQty, movieVetQty, cafeAdultQty, cafeChildQty, cafeSeniorQty, cafeVetQty];

    allInputQtys.forEach((inputQty) => {
        if (inputQty.value < 0) {
            inputQty.value = 0;
        }  
    });

    museumTicketTotal.innerHTML = calculateTotal(museumAdultQty.value, 20, museumChildQty.value, 16, museumSeniorQty.value, 18, museumVetQty.value, 17).toString();
    movieTicketTotal.innerHTML = (calculateTotal(movieAdultQty.value, 10, movieChildQty.value, 5, movieSeniorQty.value, 8, movieVetQty.value, 7) * movieCount).toString();
    cafeTicketTotal.innerHTML = calculateTotal(cafeAdultQty.value, 12, cafeChildQty.value, 8, cafeSeniorQty.value, 9, cafeVetQty.value, 10).toString();
});

  
