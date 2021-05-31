let museumTicketTotal = document.querySelector("#ticket-total");

const calculateTotal = (a, b, c, d) => ((parseInt(a) * 20) + (parseInt(b) * 16) + (parseInt(c) * 18) + (parseInt(d) * 17));

document.addEventListener("keyup", event => {
    let museumAdultQty = document.querySelector('#museumAdult').value;
    let museumChildQty = document.querySelector('#museumChild').value;
    let museumSeniorQty = document.querySelector('#museumSenior').value;
    let museumVetQty = document.querySelector('#museumVet').value;
    if (museumAdultQty < 0) {
        document.querySelector('#museumAdult').value = 0;
        museumAdultQty = 0;
    } else if (museumChildQty < 0) {
        document.querySelector('#museumChild').value = 0;
        museumChildQty = 0;
    } else if (museumSeniorQty < 0) {
        document.querySelector('#museumSenior').value = 0;
        museumSeniorQty = 0;
    } else if (museumVetQty < 0) {
        document.querySelector('#museumVet').value = 0;
        museumVetQty = 0;
    }
    museumTicketTotal.innerHTML = calculateTotal(museumAdultQty, museumChildQty, museumSeniorQty, museumVetQty).toString();
  });

  document.addEventListener("click", event => {
    let museumAdultQty = document.querySelector('#museumAdult').value;
    let museumChildQty = document.querySelector('#museumChild').value;
    let museumSeniorQty = document.querySelector('#museumSenior').value;
    let museumVetQty = document.querySelector('#museumVet').value;
    if (museumAdultQty < 0) {
        document.querySelector('#museumAdult').value = 0;
        museumAdultQty = 0;
    } else if (museumChildQty < 0) {
        document.querySelector('#museumChild').value = 0;
        museumChildQty = 0;
    } else if (museumSeniorQty < 0) {
        document.querySelector('#museumSenior').value = 0;
        museumSeniorQty = 0;
    } else if (museumVetQty < 0) {
        document.querySelector('#museumVet').value = 0;
        museumVetQty = 0;
    }
    museumTicketTotal.innerHTML = calculateTotal(museumAdultQty, museumChildQty, museumSeniorQty, museumVetQty).toString();
  });

  